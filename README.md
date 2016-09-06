# Text Encoding lib for Enonic XP


This library contains utility functions for encoding and decoding binary data as text in Enonic XP. 
Currently it supports converting between stream and **Base64**, **Base64Url**, **Base32** and **Hexadecimal** formats. 


## Releases and Compatibility
| Version | XP Version | Dependency                   |
|---------|------------|------------------------------|
| 0.5.0   | 6.6.x      | com.enonic.lib:text-encoding:0.5.0 |


## Usage

Add Enonic repository to the repository list in the build.gradle file:

    repositories {
        maven {
            url 'http://repo.enonic.com/public'
        }
    }

After this, add the following dependency (where ``<version>`` is the actual version to use):

    dependencies {
        include 'com.enonic.lib:text-encoding:<version>'
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
```

## Documentation

See list of functions available and parameter details in [text-encoding.js](blob/master/src/main/resources/site/lib/text-encoding.js)

