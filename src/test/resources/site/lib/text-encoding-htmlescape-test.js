var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/assert');

exports.testHtmlEscape = function () {
    var result = encodingLib.htmlEscape('"operations\'": x > y < z && a != b');

    assert.assertEquals('&quot;operations&#39;&quot;: x &gt; y &lt; z &amp;&amp; a != b', result);
};

exports.testHtmlEscapeEmpty = function () {
    var result = encodingLib.htmlEscape();

    assert.assertEquals('', result);
};