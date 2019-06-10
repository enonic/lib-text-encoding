var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/testing');

function getTestStream(data) {
    return testInstance.getTestStream(data);
}

function getStreamAsText(data) {
    return testInstance.streamAsUtf8(data);
}

exports.testSha256 = function () {
    var stream = getTestStream('foobar');
    var result = encodingLib.sha256(stream);

    assert.assertEquals('C3AB8FF13720E8AD9047DD39466B3C8974E592C2FA383D4A3960714CAEF0C4F2', result);
};

exports.testSha256Empty = function () {
    var result = encodingLib.sha256();

    assert.assertEquals('E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855', result);
};

exports.testSha256String = function () {
    var result = encodingLib.sha256('foobar');

    assert.assertEquals('C3AB8FF13720E8AD9047DD39466B3C8974E592C2FA383D4A3960714CAEF0C4F2', result);
};

exports.testSha256AsStream = function () {
    var stream = getTestStream('foobar');
    var result = encodingLib.hexEncode(encodingLib.sha256AsStream(stream));

    assert.assertEquals('C3AB8FF13720E8AD9047DD39466B3C8974E592C2FA383D4A3960714CAEF0C4F2', result);
};