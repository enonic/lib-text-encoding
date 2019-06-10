package com.enonic.lib.textencoding;

import java.nio.charset.StandardCharsets;

import com.google.common.io.ByteSource;

import com.enonic.xp.testing.ScriptRunnerSupport;

public class TextEncodingHmacSha512ScriptLibTest
    extends ScriptRunnerSupport
{
    @Override
    public String getScriptTestFile()
    {
        return "lib/text-encoding-hmacsha512-test.js";
    }

    public ByteSource getTestStream( final String text )
    {
        return ByteSource.wrap( text.getBytes( StandardCharsets.UTF_8 ) );
    }

}
