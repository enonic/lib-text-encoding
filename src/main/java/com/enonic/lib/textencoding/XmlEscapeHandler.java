package com.enonic.lib.textencoding;

import java.io.IOException;

import com.google.common.xml.XmlEscapers;

public final class XmlEscapeHandler
    extends CommonHandler
{
    private String text;

    public void setText( final String text )
    {
        this.text = text;
    }

    public String xmlEscape()
        throws IOException
    {
        if ( text == null )
        {
            return "";
        }
        return XmlEscapers.xmlAttributeEscaper().escape( text );
    }

}
