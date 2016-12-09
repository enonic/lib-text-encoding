package com.enonic.lib.textencoding;

import java.io.IOException;

import com.google.common.hash.HashCode;
import com.google.common.hash.HashFunction;
import com.google.common.hash.Hashing;
import com.google.common.io.BaseEncoding;
import com.google.common.io.ByteSource;

public final class HashFunctionHandler
    extends CommonHandler
{
    private Object stream;

    public void setStream( final Object stream )
    {
        this.stream = stream;
    }

    public String sha1AsHex()
        throws IOException
    {
        return hashAsHex( stream, Hashing.sha1() );
    }

    public ByteSource sha1AsStream()
        throws IOException
    {
        return hashAsStream( stream, Hashing.sha1() );
    }

    public String sha256AsHex()
        throws IOException
    {
        return hashAsHex( stream, Hashing.sha256() );
    }

    public ByteSource sha256AsStream()
        throws IOException
    {
        return hashAsStream( stream, Hashing.sha256() );
    }

    public String sha512AsHex()
        throws IOException
    {
        return hashAsHex( stream, Hashing.sha512() );
    }

    public ByteSource sha512AsStream()
        throws IOException
    {
        return hashAsStream( stream, Hashing.sha512() );
    }

    public String md5AsHex()
        throws IOException
    {
        return hashAsHex( stream, Hashing.md5() );
    }

    public ByteSource md5AsStream()
        throws IOException
    {
        return hashAsStream( stream, Hashing.md5() );
    }

    private String hashAsHex( final Object stream, final HashFunction hashFunction )
        throws IOException
    {
        final ByteSource bs = toByteSource( stream );

        final HashCode hashCode = bs.hash( hashFunction );
        return BaseEncoding.base16().encode( hashCode.asBytes() );
    }

    private ByteSource hashAsStream( final Object stream, final HashFunction hashFunction )
        throws IOException
    {
        final ByteSource bs = toByteSource( stream );

        final HashCode hashCode = bs.hash( hashFunction );
        return ByteSource.wrap( hashCode.asBytes() );
    }

}
