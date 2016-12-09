var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/assert');

function getTestStream(data) {
    return testInstance.getTestStream(data);
}

function getStreamAsText(data) {
    return testInstance.streamAsUtf8(data);
}

exports.testSha512 = function () {
    var stream = getTestStream('foobar');
    var result = encodingLib.sha512(stream);

    assert.assertEquals('0A50261EBD1A390FED2BF326F2673C145582A6342D523204973D0219337F81616A8069B012587CF5635F6925F1B56C360230C19B273500EE013E030601BF2425', result);
};

exports.testSha512Empty = function () {
    var result = encodingLib.sha512();

    assert.assertEquals('CF83E1357EEFB8BDF1542850D66D8007D620E4050B5715DC83F4A921D36CE9CE47D0D13C5D85F2B0FF8318D2877EEC2F63B931BD47417A81A538327AF927DA3E', result);
};

exports.testSha512String = function () {
    var result = encodingLib.sha512('foobar');

    assert.assertEquals('0A50261EBD1A390FED2BF326F2673C145582A6342D523204973D0219337F81616A8069B012587CF5635F6925F1B56C360230C19B273500EE013E030601BF2425', result);
};

exports.testSha512AsStream = function () {
    var stream = getTestStream('foobar');
    var result = encodingLib.hexEncode(encodingLib.sha512AsStream(stream));

    assert.assertEquals('0A50261EBD1A390FED2BF326F2673C145582A6342D523204973D0219337F81616A8069B012587CF5635F6925F1B56C360230C19B273500EE013E030601BF2425', result);
};