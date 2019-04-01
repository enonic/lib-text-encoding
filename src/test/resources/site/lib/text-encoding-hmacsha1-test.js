var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/testing');

function getTestStream(data) {
    return testInstance.getTestStream(data);
}

exports.testHmacSha1 = function () {
    var stream = getTestStream('foobar');
    var key = '74657374';
    var result = encodingLib.hmacSha1AsHex(stream, key);

    assert.assertEquals('b866f7734d0199ec0148e62cf2b1679f2606c2b7', result);
};

exports.testHmacSha1Empty = function () {
    var result = encodingLib.hmacSha1AsHex('', '00');

    assert.assertEquals('fbdb1d1b18aa6c08324b7d64b71fb76370690e1d', result);
};

exports.testHmacSha1String = function () {
    var key = '74657374';
    var result = encodingLib.hmacSha1AsHex('foobar', key);

    assert.assertEquals('b866f7734d0199ec0148e62cf2b1679f2606c2b7', result);
};

exports.testHmacSha1AsStream = function () {
    var stream = getTestStream('foobar');
    var key = '74657374';
    var result = encodingLib.hexEncode(encodingLib.hmacSha1AsStream(stream, key));

    assert.assertEquals('B866F7734D0199EC0148E62CF2B1679F2606C2B7', result);
};