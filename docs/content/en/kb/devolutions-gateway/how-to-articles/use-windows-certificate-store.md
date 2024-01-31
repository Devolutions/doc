---
eleventyComputed:
  title: Use Windows certificate store for {{ en.DGW }}
  description: 
---
It is possible to use the Windows certificate store as a TLS certificate source. Instead of using a file, store and manage your certificates with Windows. As of the time of writing, this functionality is not exposed in the {{ en.DGW }} configuration console GUI. To configure, you must either directly modify the gateway.json file or use the {{ en.PS }} module.

With the new functionality, a [few additional parameters](https://github.com/Devolutions/devolutions-gateway#configuration) are available to configure the source of the certificate.

{% snippet icon.badgeInfo %}
If you have a previously defined `TlsCertificateFile` and/or `TlsPrivateKeyFile` configuration (as is typical), removal is unnecessary as `TlsCertificateSource` tells {{ en.DGW }} where to search for the certificate.
{% endsnippet %}

* `TlsCertificateSource` (string): Source for the TLS certificate.

Possible values:
* `External` (default): Retrieve a certificate stored on the file system. See the options TlsCertificateFile, TlsPrivateKeyFile, and TlsPrivateKeyPassword.
* `System`: Retrieve the certificate managed by the system certificate store. See the options `TlsCertificateSubjectName`, `TlsCertificateStoreName`, and `TlsCertificateStoreLocation`.

* `TlsCertificateSubjectName` (string): Subject name of the certificate for TLS when using System source.
* `TlsCertificateStoreName` (string): Name of the System Certificate Store to use for TLS (default is My).
* `TlsCertificateStoreLocation` (string): Location of the System Certificate Store to use for TLS.

Possible values:
* `CurrentUser` (default)
* `CurrentService`
* `LocalMachine`

## Importing the certificate into the Windows certificate store
First, import your certificate into the Windows certificate store. Windows supports the following certificate formats:

* X.509 certificate - *.cer, *.crt
* Personal Information Exchange - *.pfx, *.p12
* Microsoft Serialized certificate Store - *.sst
* PKCS #7 Certificates - *.spc, *.p7b

{% snippet icon.badgeInfo %}
If using the `External` method via `TlsCertificateSource`, then {{ en.DGW }} only supports bundling the public and private key in a PFX (PKCS#12) file. Otherwise, you will need to define the `TlsPrivateKeyFile` parameter as well.
{% endsnippet %}

### Converting an X.509 certificate
