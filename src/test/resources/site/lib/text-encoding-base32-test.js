var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/assert');

function getTestStream(data) {
    return testInstance.getTestStream(data);
}

exports.testBase32EncodeWithPadding = function () {
    var stream = getTestStream('foobar');
    var result = encodingLib.base32Encode(stream);

    assert.assertEquals('MZXW6YTBOI======', result);
};

exports.testBase32Encode = function () {
    var stream = getTestStream('fooba');
    var result = encodingLib.base32Encode(stream);

    assert.assertEquals('MZXW6YTB', result);
};

exports.testBase32Decode = function () {
    var result = encodingLib.base32Decode('MZXW6YTBOI======');

    var hex = testInstance.streamToHex(result);
    assert.assertEquals('666f6f626172', hex);
};

exports.testBase32EncodeDecode = function () {
    var inputText = 'MZXW6YTBOI======';
    var stream = encodingLib.base32Decode(inputText);
    var outputText = encodingLib.base32Encode(stream);

    assert.assertEquals(outputText, inputText);
};

exports.testBase32EncodeEmpty = function () {
    var result = encodingLib.base32Encode();

    assert.assertEquals('', result);
};

exports.testBase32EncodeString = function () {
    var result = encodingLib.base32Encode('foobar');

    assert.assertEquals('MZXW6YTBOI======', result);
};

exports.testBase32EncodeNumber = function () {
    var result = encodingLib.base32Encode(42);

    assert.assertEquals('GQZA====', result);
};

exports.testBase32EncodeBoolean = function () {
    var result = encodingLib.base32Encode(true);

    assert.assertEquals('ORZHKZI=', result);
};

exports.testBase32DecodeInvalid = function () {
    var result = encodingLib.base32Decode('non base32 text');

    assert.assertNull(result);
};