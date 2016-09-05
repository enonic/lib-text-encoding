package com.enonic.lib.textencoding;

import java.io.IOException;
import java.io.OutputStream;
import java.io.StringWriter;
import java.nio.charset.StandardCharsets;

import com.google.common.io.BaseEncoding;
import com.google.common.io.ByteSource;

public final class Base64Handler
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

    public String base64Encode()
        throws IOException
    {
        final ByteSource bs = toByteSource( stream );
        final StringWriter writer = new StringWriter();
        try (OutputStream encoder = BaseEncoding.base64().encodingStream( writer ))
        {
            bs.copyTo( encoder );
        }
        return writer.toString();
    }

    public ByteSource base64Decode()
    {
        final String input = text != null ? text : "";
        final byte[] out = BaseEncoding.base64().decode( input );
        return ByteSource.wrap( out );
    }

    private ByteSource toByteSource( final Object value )
    {
        if ( value instanceof ByteSource )
        {
            return (ByteSource) value;
        }
        else if ( value instanceof String )
        {
            return ByteSource.wrap( ( (String) value ).getBytes( StandardCharsets.UTF_8 ) );
        }
        else if ( value instanceof Boolean || value instanceof Number )
        {
            return ByteSource.wrap( value.toString().getBytes( StandardCharsets.UTF_8 ) );
        }
        return ByteSource.empty();
    }

}
