package com.enonic.lib.textencoding;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import com.google.common.io.ByteSource;

import com.enonic.xp.testing.script.ScriptRunnerSupport;

public class TextEncodingBase32ScriptLibTest
    extends ScriptRunnerSupport
{
    @Override
    public String getScriptTestFile()
    {
        return "site/lib/text-encoding-base32-test.js";
    }

    public ByteSource getTestStream( final String text )
    {
        return ByteSource.wrap( text.getBytes( StandardCharsets.UTF_8 ) );
    }

    public String streamToHex( final ByteSource stream )
        throws IOException
    {
        return bytesToHex( stream.read() );
    }

    private String bytesToHex( final byte[] data )
    {
        final StringBuilder builder = new StringBuilder();
        for ( byte b : data )
        {
            builder.append( String.format( "%02x", b ) );
        }
        return builder.toString();
    }
}
