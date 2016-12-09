var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/assert');

function getTestStream(data) {
    return testInstance.getTestStream(data);
}

function getStreamAsText(data) {
    return testInstance.streamAsUtf8(data);
}

exports.testSha1 = function () {
    var stream = getTestStream('foobar');
    var result = encodingLib.sha1(stream);

    assert.assertEquals('8843D7F92416211DE9EBB963FF4CE28125932878', result);
};

exports.testSha1Empty = function () {
    var result = encodingLib.sha1();

    assert.assertEquals('DA39A3EE5E6B4B0D3255BFEF95601890AFD80709', result);
};

exports.testSha1String = function () {
    var result = encodingLib.sha1('foobar');

    assert.assertEquals('8843D7F92416211DE9EBB963FF4CE28125932878', result);
};

exports.testSha1AsStream = function () {
    var stream = getTestStream('foobar');
    var result = encodingLib.hexEncode(encodingLib.sha1AsStream(stream));

    assert.assertEquals('8843D7F92416211DE9EBB963FF4CE28125932878', result);
};