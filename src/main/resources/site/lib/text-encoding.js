/**
 * Utility functions for encoding and decoding text and binary data.
 *
 * @example
 * var encodingLib = require('/lib/text-encoding');
 *
 * @module lib/xp/text-encoding
 */

/**
 * Converts a binary stream to its equivalent string representation that is encoded as base64.
 *
 * @param stream Stream to read text from.
 * @returns {string} The string representation in base64.
 */
exports.base64Encode = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.Base64Handler');
    bean.stream = stream;
    return bean.base64Encode();
};

/**
 * Converts a base64 encoded string to an equivalent binary stream.
 *
 * @param text The string representation in base64.
 * @returns {string} A binary stream that is equivalent to the encoded input text.
 */
exports.base64Decode = function (text) {
    var bean = __.newBean('com.enonic.lib.textencoding.Base64Handler');
    bean.text = __.nullOrValue(text);
    return bean.base64Decode();
};

/**
 * Converts a binary stream to its equivalent string representation that is encoded as "base64url".
 *
 * The "base64url" encoding uses an alternative alphabet to the standard base64. The '+' and '/' characters are respectively replaced by '-' and '_'.
 * Its output is safe to use as filenames, or to pass in URLs without escaping.
 *
 * @param stream Stream to read text from.
 * @returns {string} The string representation in base64url.
 */
exports.base64UrlEncode = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.Base64UrlHandler');
    bean.stream = stream;
    return bean.base64UrlEncode();
};

/**
 * Converts a "base64url" encoded string to an equivalent binary stream.
 * The "base64url" encoding uses an alternative alphabet to the standard base64. The '+' and '/' characters are respectively replaced by '-' and '_'.
 * Its output is safe to use as filenames, or to pass in URLs without escaping.
 *
 * @param text The string representation in base64url.
 * @returns {string} A binary stream that is equivalent to the encoded input text.
 */
exports.base64UrlDecode = function (text) {
    var bean = __.newBean('com.enonic.lib.textencoding.Base64UrlHandler');
    bean.text = __.nullOrValue(text);
    return bean.base64UrlDecode();
};

/**
 * Converts a binary stream to its equivalent string representation that is encoded as base32.
 *
 * The Base32 alphabet consists of twenty-six letters (A–Z) and six digits (2–7)
 *
 * @param stream Stream to read text from.
 * @returns {string} The string representation in base32.
 */
exports.base32Encode = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.Base32Handler');
    bean.stream = stream;
    return bean.base32Encode();
};

/**
 * Converts a base32 encoded string to an equivalent binary stream.
 *
 * The Base32 alphabet consists of twenty-six letters (A–Z) and six digits (2–7)
 *
 * @param text The string representation in base32.
 * @returns {string} A binary stream that is equivalent to the encoded input text.
 */
exports.base32Decode = function (text) {
    var bean = __.newBean('com.enonic.lib.textencoding.Base32Handler');
    bean.text = __.nullOrValue(text);
    return bean.base32Decode();
};

/**
 * Converts a binary stream to its equivalent string representation in hexadecimal.
 *
 * @param stream Stream to read text from.
 * @returns {string} The string representation in hexadecimal.
 */
exports.hexEncode = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.HexHandler');
    bean.stream = stream;
    return bean.hexEncode();
};

/**
 * Converts a hexadecimal encoded string to an equivalent binary stream.
 *
 * @param text The string representation in hexadecimal.
 * @returns {string} A binary stream that is equivalent to the encoded input text.
 */
exports.hexDecode = function (text) {
    var bean = __.newBean('com.enonic.lib.textencoding.HexHandler');
    bean.text = __.nullOrValue(text);
    return bean.hexDecode();
};