var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/testing');

exports.testUrlEscape = function () {
    var result = encodingLib.urlEscape('東京');

    assert.assertEquals('%E6%9D%B1%E4%BA%AC', result);
};

exports.testUrlEscapeNumber = function () {
    var result = encodingLib.urlEscape(33);

    assert.assertEquals('33', result);
};

exports.testUrlEscapeBool = function () {
    var result = encodingLib.urlEscape(true);

    assert.assertEquals('true', result);
};

exports.testUrlEscapeEmpty = function () {
    var result = encodingLib.urlEscape();

    assert.assertEquals('', result);
};

exports.testUrlUnescape = function () {
    var result = encodingLib.urlUnescape('%E6%9D%B1%E4%BA%AC');

    assert.assertEquals('東京', result);
};

exports.testUrlUnescapeEmpty = function () {
    var result = encodingLib.urlUnescape();

    assert.assertEquals('', result);
};
