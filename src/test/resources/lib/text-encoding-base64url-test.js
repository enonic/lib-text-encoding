var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/testing');

function getTestStream(data) {
    return testInstance.getTestStream(data);
}

exports.testBase64UrlEncode = function () {
    var stream = getTestStream('So?<p>This');
    var result = encodingLib.base64UrlEncode(stream);

    assert.assertEquals('U28_PHA-VGhpcw==', result);
};

exports.testBase64UrlDecode = function () {
    var result = encodingLib.base64UrlDecode('U28_PHA-VGhpcw==');

    var hex = testInstance.streamToHex(result);
    assert.assertEquals('536f3f3c703e54686973', hex);
};

exports.testBase64UrlEncodeDecode = function () {
    var inputText = 'U28_PHA-VGhpcw==';
    var stream = encodingLib.base64UrlDecode(inputText);
    var outputText = encodingLib.base64UrlEncode(stream);

    assert.assertEquals(outputText, inputText);
};

exports.testBase64UrlEncodeEmpty = function () {
    var result = encodingLib.base64UrlEncode();

    assert.assertEquals('', result);
};

exports.testBase64UrlEncodeString = function () {
    var result = encodingLib.base64UrlEncode('So?<p>This');

    assert.assertEquals('U28_PHA-VGhpcw==', result);
};

exports.testBase64UrlEncodeNumber = function () {
    var result = encodingLib.base64UrlEncode(42);

    assert.assertEquals('NDI=', result);
};

exports.testBase64UrlEncodeBoolean = function () {
    var result = encodingLib.base64UrlEncode(true);

    assert.assertEquals('dHJ1ZQ==', result);
};

exports.testBase64UrlDecodeInvalid = function () {
    var result = encodingLib.base64UrlDecode('U28/PHA+VGhpcw==');

    assert.assertNull(result);
};