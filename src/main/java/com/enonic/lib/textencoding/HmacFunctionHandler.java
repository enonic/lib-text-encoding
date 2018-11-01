package com.enonic.lib.textencoding;

import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.HmacAlgorithms;
import org.apache.commons.codec.digest.HmacUtils;

import com.google.common.io.ByteSource;

import static org.apache.commons.codec.digest.HmacAlgorithms.HMAC_SHA_1;
import static org.apache.commons.codec.digest.HmacAlgorithms.HMAC_SHA_256;
import static org.apache.commons.codec.digest.HmacAlgorithms.HMAC_SHA_512;

public final class HmacFunctionHandler
    extends CommonHandler
{
    private String key;

    private Object stream;

    public String hmacSha1AsHex()
        throws IOException, DecoderException
    {
        return hmacShaAsHex( HMAC_SHA_1 );
    }

    public ByteSource hmacSha1AsStream()
        throws IOException, DecoderException
    {
        return hmacShaAsStream( HMAC_SHA_1 );
    }

    public String hmacSha256AsHex()
        throws IOException, DecoderException
    {
        return hmacShaAsHex( HMAC_SHA_256 );
    }

    public ByteSource hmacSha256AsStream()
        throws IOException, DecoderException
    {
        return hmacShaAsStream( HMAC_SHA_256 );
    }

    public String hmacSha512AsHex()
        throws IOException, DecoderException
    {
        return hmacShaAsHex( HMAC_SHA_512 );
    }

    public ByteSource hmacSha512AsStream()
        throws IOException, DecoderException
    {
        return hmacShaAsStream( HMAC_SHA_512 );
    }

    private String hmacShaAsHex( final HmacAlgorithms hmacAlgorithm )
        throws IOException, DecoderException
    {
        final byte[] key = Hex.decodeHex( this.key );
        final ByteSource bs = toByteSource( stream );
        try (InputStream is = bs.openStream())
        {
            return new HmacUtils( hmacAlgorithm, key ).hmacHex( is );
        }
    }

    private ByteSource hmacShaAsStream( final HmacAlgorithms hmacAlgorithm )
        throws IOException, DecoderException
    {
        final byte[] key = Hex.decodeHex( this.key );
        final ByteSource bs = toByteSource( stream );
        try (InputStream is = bs.openStream())
        {
            final byte[] hashCode = new HmacUtils( hmacAlgorithm, key ).hmac( is );
            return ByteSource.wrap( hashCode );
        }
    }

    public void setStream( final Object stream )
    {
        this.stream = stream;
    }

    public void setKey( final String key )
    {
        this.key = key;
    }
}
