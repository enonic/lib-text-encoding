var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/assert');

function getTestStream(data) {
    return testInstance.getTestStream(data);
}

exports.testHmacSha256 = function () {
    var stream = getTestStream('foobar');
    var key = '74657374';
    var result = encodingLib.hmacSha256AsHex(stream, key);

    assert.assertEquals('8ad86238123bb29fcca4c6fd117831be6d609ae7dc42f153fa047321489277b0', result);
};

exports.testHmacSha256Empty = function () {
    var result = encodingLib.hmacSha256AsHex('', '00');

    assert.assertEquals('b613679a0814d9ec772f95d778c35fc5ff1697c493715653c6c712144292c5ad', result);
};

exports.testHmacSha256String = function () {
    var key = '74657374';
    var result = encodingLib.hmacSha256AsHex('foobar', key);

    assert.assertEquals('8ad86238123bb29fcca4c6fd117831be6d609ae7dc42f153fa047321489277b0', result);
};

exports.testHmacSha256AsStream = function () {
    var stream = getTestStream('foobar');
    var key = '74657374';
    var result = encodingLib.hexEncode(encodingLib.hmacSha256AsStream(stream, key));

    assert.assertEquals('8AD86238123BB29FCCA4C6FD117831BE6D609AE7DC42F153FA047321489277B0', result);
};