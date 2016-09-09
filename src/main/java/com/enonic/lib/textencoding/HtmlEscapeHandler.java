package com.enonic.lib.textencoding;

import java.io.IOException;

import com.google.common.html.HtmlEscapers;

public final class HtmlEscapeHandler
    extends CommonHandler
{
    private String text;

    public void setText( final String text )
    {
        this.text = text;
    }

    public String htmlEscape()
        throws IOException
    {
        if ( text == null )
        {
            return "";
        }
        return HtmlEscapers.htmlEscaper().escape( text );
    }

}
