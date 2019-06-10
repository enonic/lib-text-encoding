# Text Encoding lib for Enonic XP

[![Build Status](https://travis-ci.org/enonic/lib-text-encoding.svg?branch=master)](https://travis-ci.org/enonic/lib-text-encoding)
[![codecov](https://codecov.io/gh/enonic/lib-text-encoding/branch/master/graph/badge.svg)](https://codecov.io/gh/enonic/lib-text-encoding)
[![License](https://img.shields.io/github/license/enonic/lib-text-encoding.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

<img align="right" style="margin-top:10px;" alt="Text Encoding Library" src="https://rawgithub.com/enonic/lib-text-encoding/master/lib-text-encoding-icon.svg" width="200">
This library contains utility functions for encoding and decoding binary data as text in Enonic XP.

Currently it supports:
- converting between stream and **Base64**, **Base64Url**, **Base32**, **Hexadecimal** text formats 
- encoding and decoding using a specified **character set** (e.g. *UTF-8*, *ASCII*, *ISO-8859-1*) 
- **escaping** of text so it can be safely included in *URL*, *HTML* or *XML*
- hash functions: **MD5**, **SHA-1**, **SHA-256**, **SHA-512**, **HMAC-SHA1**, **HMAC-SHA256**, **HMAC-SHA512** 

## Releases and Compatibility
| Version | XP Version | Dependency                         | Changes                  |
|---------|------------|------------------------------------|--------------------------|
| 1.0.0   | 6.6.x      | com.enonic.lib:text-encoding:1.0.0 |                          |
| 1.1.0   | 6.6.x      | com.enonic.lib:text-encoding:1.1.0 | Added hash functions     |
| 1.2.0   | 6.6.x      | com.enonic.lib:text-encoding:1.2.0 | Added unescape functions |
| 1.3.0   | 6.6.x      | com.enonic.lib:text-encoding:1.3.0 | Added HMAC-SHA functions |
| 2.0.0   | 7.0.0      | com.enonic.lib:lib-text-encoding:2.0.0 | Updated to be xp 7.0 compatible |


## Usage

Add Enonic repository to the repository list in the build.gradle file:

    repositories {
        maven {
            url 'http://repo.enonic.com/public'
        }
    }

After this, add the following dependency:

    dependencies {
        include 'com.enonic.lib:lib-text-encoding:2.0.0'
    }


## Examples

You can then use this inside your javascript controller or other parts of your app. 

```javascript
// Include the library
var encodingLib = require('/lib/text-encoding');

// ____ Base64 ____
// encode a binary stream to Base64
var base64Text = encodingLib.base64Encode(stream);

// convert a base64 encoded string to a stream object
var decodedStream = encodingLib.base64Decode(base64Text);

// convert text, encoded as UTF-8, to Base64
var base64Text = encodingLib.base64Encode('foobar');


// ____ Base64Url ____ (Base64 safe for use in URLs without escaping, or as filenames)
// encode a binary stream to Base64url (Base64 replacing '+' and '/' with '-' and '_')
var base64UrlText = encodingLib.base64UrlEncode(stream);

// convert a base64Url encoded string to a stream object
var decodedStream = encodingLib.base64UrlDecode(base64UrlText);


// ____ Base32 ____
// encode a binary stream to Base32
var base32Text = encodingLib.base32Encode(stream);

// convert a base32 encoded string to a stream object
var decodedStream = encodingLib.base32Decode(base32Text);


// ____ Hex ____
// encode a binary stream to hexadecimal
var hexText = encodingLib.hexEncode(stream);

// convert a hexadecimal encoded string to a stream object
var decodedStream = encodingLib.hexDecode(hexText);


// ____ character sets ____
// decode a stream of bytes assuming it was encoded as UTF-8
var textFromUtf8Bytes = encodingLib.charsetDecode(stream, 'UTF-8');

// encode a string into a byte stream using the Latin-1 charset 
var stream = encodingLib.charsetEncode('Bon cop de falç!', 'ISO-8859-1');


// ____ text escaping ____
// URL escape
var urlEscapedText = encodingLib.urlEscape('東京'); // '%E6%9D%B1%E4%BA%AC'

// URL unescape
var unescapedText = encodingLib.urlUnescape('%E6%9D%B1%E4%BA%AC'); // '東京'

// HTML escape
var htmlEscapedText = encodingLib.htmlEscape('"quoted" \'text\' && < angle quotes >');
// '&quot;operations&#39;&quot;: x &gt; y &lt; z &amp;&amp; a != b'

// HTML unescape
var unescapedText = encodingLib.htmlUnescape('&quot;operations&#39;&quot;: x &gt; y &lt; z &amp;&amp; a != b');
// '"quoted" \'text\' && < angle quotes >'

// XML escape
var xmlEscapedText = encodingLib.xmlEscape('"quoted" \'text\' && \r\n < angle quotes >');
// '&quot;quoted&quot; &apos;text&apos; &amp;&amp; &#xD;&#xA; &lt; angle quotes &gt;'

// XML unescape
var unescapedText = encodingLib.xmlUnescape('&quot;quoted&quot; &apos;text&apos; &amp;&amp; &#xD;&#xA; &lt; angle quotes &gt;');
// '"quoted" \'text\' && \r\n < angle quotes >'


// ____ hash functions ____
// MD5 hash of a string or stream
var hash = encodingLib.md5('foobar');

// SHA-1 hash of a string or stream
var hash = encodingLib.sha1(myStream);

// SHA-256 hash of a string or stream
var hash = encodingLib.sha256('foobar');

// SHA-512 hash of a string or stream
var hash = encodingLib.sha512('foobar');

// HMAC-SHA1 hash of a string or stream, using a key in hex
var hash = encodingLib.hmacSha1AsHex('foobar', '74657374');
var hashSream = encodingLib.hmacSha1AsStream('foobar', '74657374');

// HMAC-SHA256 hash of a string or stream, using a key in hex
var hash = encodingLib.hmacSha256AsHex('foobar', '74657374');
var hashSream = encodingLib.hmacSha256AsStream('foobar', '74657374');

// HMAC-SHA512 hash of a string or stream, using a key in hex
var hash = encodingLib.hmacSha512AsHex('foobar', '74657374');
var hashSream = encodingLib.hmacSha512AsStream('foobar', '74657374');
```

## Documentation

See list of functions available and parameter details in [text-encoding.js](./src/main/resources/lib/text-encoding.js)
