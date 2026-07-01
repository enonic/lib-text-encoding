# Types for Text Encoding library

Type definitions for the [Enonic XP Text Encoding library](https://github.com/enonic/lib-text-encoding).

## Install

```bash
npm i --save-dev @enonic-types/lib-text-encoding
```

Versions track the library itself, so install the same version as the `com.enonic.lib:lib-text-encoding` dependency in your `build.gradle`.

## Setup

Add lib-text-encoding to `compilerOptions.paths` in the `tsconfig.json` file used for your application's server-side TypeScript code:

```json
{
  "compilerOptions": {
    "paths": {
      "/lib/text-encoding": ["./node_modules/@enonic-types/lib-text-encoding"]
    }
  }
}
```

## Use

```ts
import {base64Encode, hmacSha256AsHex, htmlEscape, sha256} from '/lib/text-encoding';

export function get() {
    const encoded = base64Encode('foobar');
    const hash = sha256('foobar');
    const signature = hmacSha256AsHex('message', '6d7973656372657421');

    return {
        body: `<p>${htmlEscape(`${encoded} ${hash} ${signature}`)}</p>`,
        contentType: 'text/html',
    };
}
```

All imports from `/lib/text-encoding` should now be typed.

## API

Functions that accept a stream take a `StreamInput`: a `ByteSource`, or a `string`, `number` or `boolean`, which is converted to UTF-8 bytes. Decode functions return `null` when the input text is not valid in that encoding. HMAC keys are hexadecimal strings.

### Encoding

| Function                                                     | Description                                         |
|--------------------------------------------------------------|-----------------------------------------------------|
| `base64Encode(stream: StreamInput): string`                  | Encodes a stream as Base64.                         |
| `base64Decode(text: string): ByteSource \| null`             | Decodes a Base64 string to a stream.                |
| `base64UrlEncode(stream: StreamInput): string`               | Encodes a stream as Base64url (URL and file safe).  |
| `base64UrlDecode(text: string): ByteSource \| null`          | Decodes a Base64url string to a stream.             |
| `base32Encode(stream: StreamInput): string`                  | Encodes a stream as Base32.                         |
| `base32Decode(text: string): ByteSource \| null`             | Decodes a Base32 string to a stream.                |
| `hexEncode(stream: StreamInput): string`                     | Encodes a stream as hexadecimal.                    |
| `hexDecode(text: string): ByteSource \| null`                | Decodes a hexadecimal string to a stream.           |
| `charsetEncode(text: string, charset?: string): ByteSource`  | Encodes text to bytes using a charset (default `UTF-8`). |
| `charsetDecode(stream: StreamInput, charset?: string): string` | Decodes bytes to text using a charset (default `UTF-8`). |

### Escaping

| Function                          | Description                                                  |
|-----------------------------------|--------------------------------------------------------------|
| `urlEscape(text: string): string`   | Escapes text for URL form parameter names and values (UTF-8). |
| `urlUnescape(text: string): string` | Unescapes URL-escaped text.                                  |
| `htmlEscape(text: string): string`  | Escapes `'`, `"`, `&`, `<` and `>` for HTML.                 |
| `htmlUnescape(text: string): string`| Replaces HTML entity escapes with the actual characters.     |
| `xmlEscape(text: string): string`   | Escapes text for XML attribute values or element content.    |
| `xmlUnescape(text: string): string` | Replaces XML entity escapes with the actual characters.      |

### Hashing

| Function                                                        | Description                                     |
|-----------------------------------------------------------------|-------------------------------------------------|
| `md5(stream: StreamInput): string`                              | MD5 hash as a hexadecimal string.               |
| `md5AsStream(stream: StreamInput): ByteSource`                  | MD5 hash as a stream.                           |
| `sha1(stream: StreamInput): string`                             | SHA-1 hash as a hexadecimal string.             |
| `sha1AsStream(stream: StreamInput): ByteSource`                 | SHA-1 hash as a stream.                         |
| `sha256(stream: StreamInput): string`                           | SHA-256 hash as a hexadecimal string.           |
| `sha256AsStream(stream: StreamInput): ByteSource`               | SHA-256 hash as a stream.                       |
| `sha512(stream: StreamInput): string`                           | SHA-512 hash as a hexadecimal string.           |
| `sha512AsStream(stream: StreamInput): ByteSource`               | SHA-512 hash as a stream.                       |
| `hmacSha1AsHex(stream: StreamInput, key: string): string`       | HMAC-SHA1 as a hexadecimal string.              |
| `hmacSha1AsStream(stream: StreamInput, key: string): ByteSource`| HMAC-SHA1 as a stream.                          |
| `hmacSha256AsHex(stream: StreamInput, key: string): string`     | HMAC-SHA256 as a hexadecimal string.            |
| `hmacSha256AsStream(stream: StreamInput, key: string): ByteSource` | HMAC-SHA256 as a stream.                     |
| `hmacSha512AsHex(stream: StreamInput, key: string): string`     | HMAC-SHA512 as a hexadecimal string.            |
| `hmacSha512AsStream(stream: StreamInput, key: string): ByteSource` | HMAC-SHA512 as a stream.                     |

## Documentation

[Text Encoding library](https://developer.enonic.com/docs/lib-text-encoding)
