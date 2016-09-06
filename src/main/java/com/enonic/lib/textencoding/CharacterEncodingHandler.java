package com.enonic.lib.textencoding;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

import com.google.common.io.ByteSource;
import com.google.common.io.CharStreams;

public final class CharacterEncodingHandler
    extends CommonHandler
{
    private Object stream;

    private String text;

    private String charsetName;

    public void setStream( final Object stream )
    {
        this.stream = stream;
    }

    public void setText( final String text )
    {
        this.text = text;
    }

    public void setCharset( final String charsetName )
    {
        this.charsetName = charsetName;
    }

    public String charDecode()
        throws IOException
    {
        final ByteSource bs = toByteSource( stream );
        final Charset charset = charsetName == null ? StandardCharsets.UTF_8 : Charset.forName( charsetName );

        try (BufferedReader in = new BufferedReader( new InputStreamReader( bs.openStream(), charset ) ))
        {
            return CharStreams.toString( in );
        }
    }

    public ByteSource charEncode()
    {
        final Charset charset = charsetName == null ? StandardCharsets.UTF_8 : Charset.forName( charsetName );
        final String input = text != null ? text : "";
        return ByteSource.wrap( input.getBytes( charset ) );
    }

}
