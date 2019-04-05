package com.enonic.lib.textencoding;

import java.nio.charset.StandardCharsets;

import com.google.common.io.ByteSource;

import com.enonic.xp.testing.ScriptRunnerSupport;

public class TextEncodingHmacSha256ScriptLibTest
    extends ScriptRunnerSupport
{
    @Override
    public String getScriptTestFile()
    {
        return "site/lib/text-encoding-hmacsha256-test.js";
    }

    public ByteSource getTestStream( final String text )
    {
        return ByteSource.wrap( text.getBytes( StandardCharsets.UTF_8 ) );
    }

}