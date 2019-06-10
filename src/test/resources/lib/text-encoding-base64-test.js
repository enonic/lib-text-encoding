var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/testing');

function getTestStream(data) {
    return testInstance.getTestStream(data);
}

exports.testBase64Encode = function () {
    var stream = getTestStream('foobar');
    var result = encodingLib.base64Encode(stream);

    assert.assertEquals('Zm9vYmFy', result);
};

exports.testBase64EncodeWithPadding = function () {
    var stream = getTestStream('fooba');
    var result = encodingLib.base64Encode(stream);

    assert.assertEquals('Zm9vYmE=', result);
};

exports.testBase64Decode = function () {
    var result = encodingLib.base64Decode('Zm9vYmFy');

    var hex = testInstance.streamToHex(result);
    assert.assertEquals('666f6f626172', hex);
};

exports.testBase64EncodeDecode = function () {
    var inputText = 'Zm9vYmFy';
    var stream = encodingLib.base64Decode(inputText);
    var outputText = encodingLib.base64Encode(stream);

    assert.assertEquals(outputText, inputText);
};

exports.testBase64EncodeEmpty = function () {
    var result = encodingLib.base64Encode();

    assert.assertEquals('', result);
};

exports.testBase64EncodeString = function () {
    var result = encodingLib.base64Encode('foobar');

    assert.assertEquals('Zm9vYmFy', result);
};

exports.testBase64EncodeNumber = function () {
    var result = encodingLib.base64Encode(42);

    assert.assertEquals('NDI=', result);
};

exports.testBase64EncodeBoolean = function () {
    var result = encodingLib.base64Encode(true);

    assert.assertEquals('dHJ1ZQ==', result);
};

exports.testBase64DecodeInvalid = function () {
    var result = encodingLib.base64Decode('non base64 text');

    assert.assertNull(result);
};