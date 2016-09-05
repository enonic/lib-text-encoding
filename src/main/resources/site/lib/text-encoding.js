/**
 * Utility functions for encoding and decoding text and binary data.
 *
 * @example
 * var encodingLib = require('/lib/text-encoding');
 *
 * @module lib/xp/text-encoding
 */

/**
 * Converts a binary stream to its equivalent string representation that is encoded with base-64 digits.
 *
 * @param stream Stream to read text from.
 * @returns {string} The string representation in base 64.
 */
exports.base64Encode = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.Base64Handler');
    bean.stream = stream;
    return bean.base64Encode();
};

/**
 * Converts a base64 encoded string to an equivalent binary stream.
 *
 * @param text The string representation in base 64.
 * @returns {string} A binary stream that is equivalent to the encoded input text.
 */
exports.base64Decode = function (text) {
    var bean = __.newBean('com.enonic.lib.textencoding.Base64Handler');
    bean.text = __.nullOrValue(text);
    return bean.base64Decode();
};
