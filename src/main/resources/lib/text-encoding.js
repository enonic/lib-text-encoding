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
 * @returns {stream} A binary stream that is equivalent to the encoded input text.
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
 * @returns {stream} A binary stream that is equivalent to the encoded input text.
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
 * @returns {stream} A binary stream that is equivalent to the encoded input text.
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
 * @returns {stream} A binary stream that is equivalent to the encoded input text.
 */
exports.hexDecode = function (text) {
    var bean = __.newBean('com.enonic.lib.textencoding.HexHandler');
    bean.text = __.nullOrValue(text);
    return bean.hexDecode();
};

/**
 * Generates a string by decoding a stream of bytes using the specified charset.
 *
 * @param stream Stream to read text from.
 * @param [charset='UTF-8'] The charset to be used to decode the stream. (e.g. 'UTF-8', 'ASCII', 'ISO-8859-1', 'Windows-1252')
 * @returns {string} The string generated from the decoding.
 */
exports.charsetDecode = function (stream, charset) {
    var bean = __.newBean('com.enonic.lib.textencoding.CharsetEncodingHandler');
    bean.stream = stream;
    bean.charset = __.nullOrValue(charset);
    return bean.charDecode();
};

/**
 * Encodes a string into a sequence of bytes using the specified charset, returned as a stream object.
 *
 * @param text The text string to encode.
 * @param [charset='UTF-8'] The charset to be used to encode the string. (e.g. 'UTF-8', 'ASCII', 'ISO-8859-1', 'Windows-1252')
 * @returns {stream} A binary stream with the text encoded using the specified charset.
 */
exports.charsetEncode = function (text, charset) {
    var bean = __.newBean('com.enonic.lib.textencoding.CharsetEncodingHandler');
    bean.text = __.nullOrValue(text);
    bean.charset = __.nullOrValue(charset);
    return bean.charEncode();
};

/**
 * Escapes a string so it can be safely included in a URL form parameter names and values.
 * Escaping is performed with the UTF-8 character encoding.
 *
 * @param text The text string to URL-escape.
 * @returns {string} A string that can be safely included in URL form parameters.
 */
exports.urlEscape = function (text) {
    var bean = __.newBean('com.enonic.lib.textencoding.UrlEscapeHandler');
    bean.text = __.nullOrValue(text);
    return bean.urlEscape();
};

/**
 * Escapes a string to be included in HTML attribute values and elements' text contents.
 * This function does not perform entity replacement, so it does not replace non-ASCII code points with character references.
 * Only the following five ASCII characters are replaced: '"&<>
 *
 * @param text The text string to HTML-escape.
 * @returns {string} A string that can be safely included in HTML attribute and elements' text contents.
 */
exports.htmlEscape = function (text) {
    var bean = __.newBean('com.enonic.lib.textencoding.HtmlEscapeHandler');
    bean.text = __.nullOrValue(text);
    return bean.htmlEscape();
};

/**
 * Escapes a string to be included in an XML document as an attribute value or element content.
 *
 * @param text The text string to XML-escape.
 * @returns {string} A string that can be safely included in an XML document.
 */
exports.xmlEscape = function (text) {
    var bean = __.newBean('com.enonic.lib.textencoding.XmlEscapeHandler');
    bean.text = __.nullOrValue(text);
    return bean.xmlEscape();
};

/**
 * Unescapes a string used in URL parameters.
 *
 * @param text The text string to URL-unescape.
 * @returns {string} The unescaped string.
 */
exports.urlUnescape = function (text) {
    var bean = __.newBean('com.enonic.lib.textencoding.UrlEscapeHandler');
    bean.text = __.nullOrValue(text);
    return bean.urlUnescape();
};

/**
 * Unescapes a string containing entity escapes to a string containing the actual Unicode characters corresponding to the escapes.
 *
 * @param text The text string to HTML-unescape.
 * @returns {string} The unescaped string.
 */
exports.htmlUnescape = function (text) {
    var bean = __.newBean('com.enonic.lib.textencoding.HtmlEscapeHandler');
    bean.text = __.nullOrValue(text);
    return bean.htmlUnescape();
};

/**
 * Unescapes a string containing XML entity escapes to a string containing the actual Unicode characters corresponding to the escapes.
 *
 * @param text The text string to XML-unescape.
 * @returns {string} The unescaped string.
 */
exports.xmlUnescape = function (text) {
    var bean = __.newBean('com.enonic.lib.textencoding.XmlEscapeHandler');
    bean.text = __.nullOrValue(text);
    return bean.xmlUnescape();
};

/**
 * Hashes the contents of a string or binary stream, using the SHA-1 hash function.
 *
 * @param stream Stream or string value to hash.
 * @returns {string} The resulting hash code as a hexadecimal string.
 */
exports.sha1 = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.HashFunctionHandler');
    bean.stream = stream;
    return bean.sha1AsHex();
};

/**
 * Hashes the contents of a string or binary stream, using the SHA-1 hash function.
 *
 * @param stream Stream or string value to hash.
 * @returns {stream} The resulting hash code as binary stream.
 */
exports.sha1AsStream = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.HashFunctionHandler');
    bean.stream = stream;
    return bean.sha1AsStream();
};

/**
 * Hashes the contents of a string or binary stream, using the SHA-256 hash function.
 *
 * @param stream Stream or string value to hash.
 * @returns {string} The resulting hash code as a hexadecimal string.
 */
exports.sha256 = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.HashFunctionHandler');
    bean.stream = stream;
    return bean.sha256AsHex();
};

/**
 * Hashes the contents of a string or binary stream, using the SHA-256 hash function.
 *
 * @param stream Stream or string value to hash.
 * @returns {stream} The resulting hash code as binary stream.
 */
exports.sha256AsStream = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.HashFunctionHandler');
    bean.stream = stream;
    return bean.sha256AsStream();
};

/**
 * Hashes the contents of a string or binary stream, using the SHA-512 hash function.
 *
 * @param stream Stream or string value to hash.
 * @returns {string} The resulting hash code as a hexadecimal string.
 */
exports.sha512 = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.HashFunctionHandler');
    bean.stream = stream;
    return bean.sha512AsHex();
};

/**
 * Hashes the contents of a string or binary stream, using the SHA-512 hash function.
 *
 * @param stream Stream or string value to hash.
 * @returns {stream} The resulting hash code as binary stream.
 */
exports.sha512AsStream = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.HashFunctionHandler');
    bean.stream = stream;
    return bean.sha512AsStream();
};

/**
 * Hashes the contents of a string or binary stream, using the MD5 hash function.
 *
 * @param stream Stream or string value to hash.
 * @returns {string} The resulting hash code as a hexadecimal string.
 */
exports.md5 = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.HashFunctionHandler');
    bean.stream = stream;
    return bean.md5AsHex();
};

/**
 * Hashes the contents of a string or binary stream, using the MD5 hash function.
 *
 * @param stream Stream or string value to hash.
 * @returns {stream} The resulting hash code as binary stream.
 */
exports.md5AsStream = function (stream) {
    var bean = __.newBean('com.enonic.lib.textencoding.HashFunctionHandler');
    bean.stream = stream;
    return bean.md5AsStream();
};
