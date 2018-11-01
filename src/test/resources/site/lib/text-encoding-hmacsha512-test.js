var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/assert');

function getTestStream(data) {
    return testInstance.getTestStream(data);
}

exports.testHmacSha512 = function () {
    var stream = getTestStream('foobar');
    var key = '74657374';
    var result = encodingLib.hmacSha512AsHex(stream, key);

    assert.assertEquals('29453098d665e447c87f4c0b24b624fbfd05ecb6678ac7833710a409fa5932f338f4baaf8a954f0ab12c1c09310e1bc30437b8df4120fecf5aaf9ee39d07bcbb', result);
};

exports.testHmacSha512Empty = function () {
    var result = encodingLib.hmacSha512AsHex('', '00');

    assert.assertEquals('b936cee86c9f87aa5d3c6f2e84cb5a4239a5fe50480a6ec66b70ab5b1f4ac6730c6c515421b327ec1d69402e53dfb49ad7381eb067b338fd7b0cb22247225d47', result);
};

exports.testHmacSha512String = function () {
    var key = '74657374';
    var result = encodingLib.hmacSha512AsHex('foobar', key);

    assert.assertEquals('29453098d665e447c87f4c0b24b624fbfd05ecb6678ac7833710a409fa5932f338f4baaf8a954f0ab12c1c09310e1bc30437b8df4120fecf5aaf9ee39d07bcbb', result);
};

exports.testHmacSha512AsStream = function () {
    var stream = getTestStream('foobar');
    var key = '74657374';
    var result = encodingLib.hexEncode(encodingLib.hmacSha512AsStream(stream, key));

    assert.assertEquals('29453098D665E447C87F4C0B24B624FBFD05ECB6678AC7833710A409FA5932F338F4BAAF8A954F0AB12C1C09310E1BC30437B8DF4120FECF5AAF9EE39D07BCBB', result);
};