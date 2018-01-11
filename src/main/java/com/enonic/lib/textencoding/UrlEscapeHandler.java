package com.enonic.lib.textencoding;

import java.io.IOException;
import java.net.URLDecoder;

import com.google.common.net.UrlEscapers;

public final class UrlEscapeHandler
    extends CommonHandler
{
    private String text;

    public void setText( final String text )
    {
        this.text = text;
    }

    public String urlEscape()
        throws IOException
    {
        if ( text == null )
        {
            return "";
        }
        return UrlEscapers.urlFormParameterEscaper().escape( text );
    }

    public String urlUnescape()
        throws IOException
    {
        if ( text == null )
        {
            return "";
        }
        return URLDecoder.decode( text, "UTF-8" );
    }

}
