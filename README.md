# Text Encoding lib for Enonic XP


This library will contain utility functions for encoding and decoding binary data as text in Enonic XP. 
Initially it supports converting from stream to Base64 string, and back. 


## Releases and Compatibility
| Version | XP Version | Dependency                   |
|---------|------------|------------------------------|
| 0.5.0   | 6.6.x      | com.enonic.lib:lib-text-encoding:0.5.0 |


## Usage

Add Enonic repository to the repository list in the build.gradle file:

    repositories {
        maven {
            url 'http://repo.enonic.com/public'
        }
    }

After this, add the following dependency (where ``<version>`` is the actual version to use):

    dependencies {
        include 'com.enonic.lib:lib-text-encoding:<version>'
    }


## Example

You can then use this inside your javascript controller or other parts of your app. Here's an example:

    // Include the library
    var encodingLib = require('/lib/text-encoding');

    // encode a binary stream to Base64
    var base64Text = encodingLib.base64Encode(stream);
    
    // convert a base64 encoded string to a stream object
    var decodedStream = encodingLib.base64Decode(base64Text);

    // convert text, encoded as UTF-8, to Base64
    var base64Text = encodingLib.base64Encode('foobar');
