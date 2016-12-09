var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/assert');

function getTestStream(data) {
    return testInstance.getTestStream(data);
}

function getStreamAsText(data) {
    return testInstance.streamAsUtf8(data);
}

exports.testMd5 = function () {
    var stream = getTestStream('foobar');
    var result = encodingLib.md5(stream);

    assert.assertEquals('3858F62230AC3C915F300C664312C63F', result);
};

exports.testMd5Empty = function () {
    var result = encodingLib.md5();

    assert.assertEquals('D41D8CD98F00B204E9800998ECF8427E', result);
};

exports.testMd5String = function () {
    var result = encodingLib.md5('foobar');

    assert.assertEquals('3858F62230AC3C915F300C664312C63F', result);
};

exports.testMd5AsStream = function () {
    var stream = getTestStream('foobar');
    var result = encodingLib.hexEncode(encodingLib.md5AsStream(stream));

    assert.assertEquals('3858F62230AC3C915F300C664312C63F', result);
};