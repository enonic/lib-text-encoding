var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/testing');

exports.testHtmlEscape = function () {
    var result = encodingLib.htmlEscape('"operations\'": x > y < z && a != b');

    assert.assertEquals('&quot;operations&#39;&quot;: x &gt; y &lt; z &amp;&amp; a != b', result);
};

exports.testHtmlEscapeEmpty = function () {
    var result = encodingLib.htmlEscape();

    assert.assertEquals('', result);
};

exports.testHtmlUnescape = function () {
    var result = encodingLib.htmlUnescape('&quot;operations&#39;&quot;: x &gt; y &lt; z &amp;&amp; a != b');

    assert.assertEquals('"operations\'": x > y < z && a != b', result);
};

exports.testHtmlUnescapeEmpty = function () {
    var result = encodingLib.htmlUnescape();

    assert.assertEquals('', result);
};