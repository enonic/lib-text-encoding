package com.enonic.lib.textencoding;

import java.io.IOException;
import java.io.OutputStream;
import java.io.StringWriter;

import com.google.common.io.BaseEncoding;
import com.google.common.io.ByteSource;

public final class Base64UrlHandler
    extends CommonHandler
{
    private Object stream;

    private String text;

    public void setStream( final Object stream )
    {
        this.stream = stream;
    }

    public void setText( final String text )
    {
        this.text = text;
    }

    public String base64UrlEncode()
        throws IOException
    {
        final ByteSource bs = toByteSource( stream );
        final StringWriter writer = new StringWriter();
        try (OutputStream encoder = BaseEncoding.base64Url().encodingStream( writer ))
        {
            bs.copyTo( encoder );
        }
        return writer.toString();
    }

    public ByteSource base64UrlDecode()
    {
        final String input = text != null ? text : "";
        try
        {
            final byte[] out = BaseEncoding.base64Url().decode( input );
            return ByteSource.wrap( out );
        }
        catch ( IllegalArgumentException e )
        {
            return null;
        }
    }

}
