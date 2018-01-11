var encodingLib = require('/lib/text-encoding');
var assert = require('/lib/xp/assert');

exports.testXmlEscape = function () {
    var result = encodingLib.xmlEscape('"\'double quoted\'" \r\n\t x > y < z && a != b');

    assert.assertEquals('&quot;&apos;double quoted&apos;&quot; &#xD;&#xA;&#x9; x &gt; y &lt; z &amp;&amp; a != b', result);
};

exports.testXmlEscapeEmpty = function () {
    var result = encodingLib.xmlEscape();

    assert.assertEquals('', result);
};

exports.testXmlUnescape = function () {
    var result = encodingLib.xmlUnescape('&quot;&apos;double quoted&apos;&quot; &#xD;&#xA;&#x9; x &gt; y &lt; z &amp;&amp; a != b');

    assert.assertEquals('"\'double quoted\'" \r\n\t x > y < z && a != b', result);
};

exports.testXmlUnescapeEmpty = function () {
    var result = encodingLib.xmlUnescape();

    assert.assertEquals('', result);
};
