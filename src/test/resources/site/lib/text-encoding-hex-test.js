var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/assert');

function getTestStream(data) {
    return testInstance.getTestStream(data);
}

function getStreamAsText(data) {
    return testInstance.streamAsUtf8(data);
}

exports.testHexEncode = function () {
    var stream = getTestStream('foobar');
    var result = encodingLib.hexEncode(stream);

    assert.assertEquals('666F6F626172', result);
};

exports.testHexDecode = function () {
    var result = encodingLib.hexDecode('666f6f626172');

    assert.assertEquals('foobar', getStreamAsText(result));
};

exports.testHexEncodeDecode = function () {
    var inputText = '666F6F626172';
    var stream = encodingLib.hexDecode(inputText);
    var outputText = encodingLib.hexEncode(stream);

    assert.assertEquals(outputText, inputText);
};

exports.testHexEncodeEmpty = function () {
    var result = encodingLib.hexEncode();

    assert.assertEquals('', result);
};

exports.testHexEncodeString = function () {
    var result = encodingLib.hexEncode('foobar');

    assert.assertEquals('666F6F626172', result);
};

exports.testHexEncodeNumber = function () {
    var result = encodingLib.hexEncode(42);

    assert.assertEquals('3432', result);
};

exports.testHexEncodeBoolean = function () {
    var result = encodingLib.hexEncode(true);

    assert.assertEquals('74727565', result);
};

exports.testHexDecodeInvalid = function () {
    var result = encodingLib.hexDecode('non hex text');

    assert.assertNull(result);
};