var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/assert');


exports.testCharsetEncodeUtf8 = function () {
    var stream = encodingLib.hexDecode('536F6D6520636861727320C3B8C3A6C3A520C3A0C3A8C3ACC3B2C3B920C3B1C391');
    var result = encodingLib.charsetDecode(stream);

    assert.assertEquals('Some chars øæå àèìòù ñÑ', result);
};

exports.testCharsetEncodeLatin1 = function () {
    var stream = encodingLib.hexDecode('536F6D6520636861727320F8E6E520E0E8ECF2F920F1D1');
    var result = encodingLib.charsetDecode(stream, 'ISO-8859-1');

    assert.assertEquals('Some chars øæå àèìòù ñÑ', result);
};

exports.testHexEncodeUtf8 = function () {
    var result = encodingLib.charsetEncode('Some chars øæå àèìòù ñÑ');

    assert.assertEquals('536F6D6520636861727320C3B8C3A6C3A520C3A0C3A8C3ACC3B2C3B920C3B1C391', encodingLib.hexEncode(result));
};

exports.testHexEncodeLatin1 = function () {
    var result = encodingLib.charsetEncode('Some chars øæå àèìòù ñÑ', 'ISO-8859-1');

    assert.assertEquals('536F6D6520636861727320F8E6E520E0E8ECF2F920F1D1', encodingLib.hexEncode(result));
};

exports.testHexEncodeAscii = function () {
    var result = encodingLib.charsetEncode('Some chars øæå àèìòù ñÑ', 'ASCII');

    assert.assertEquals('536F6D65206368617273203F3F3F203F3F3F3F3F203F3F', encodingLib.hexEncode(result));
};

exports.testCharsetEncodeUnsupportedCharset = function () {
    var stream = encodingLib.hexDecode('536F6D6520636861727320F8E6E520E0E8ECF2F920F1D1');
    try {
        var result = encodingLib.charsetDecode(stream, 'Klingon');
        assert.fail('Expected exception');
    } catch (e) {
        assert.assertEquals('java.nio.charset.UnsupportedCharsetException: Klingon', e.toString());
    }

};
