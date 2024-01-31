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
{{ en.DGW }} requires a private key with the TLS certificate; therefore, you may need to combine the public key with its private key. Here are two methods: [{{ en.RDM }}](#using-remote-desktop-manager) and the built-in [Windows utility `certutil`](#using-the-windows-certutil-utility).

#### Using {{ en.RDM }}
The ***X.509 Certificate*** entry can be used to import said certificate and export it in several different formats, including PFX.
1. In {{ en.RDM }} click on ***New Entry*** – ***Credential Management*** – ***General*** – ***X.509 Certificate***.
1. Select the certificate and click ***Open***.
1. Click ***Next***.
1. Click on the ellipsis and select the ***Private key***, then click on ***Open***.
   {% snippet icon.badgeInfo %}
   The ***Private key*** must be in the `.key` extension.
   {% endsnippet %}
1. Click ***Finish***.
1. Fill in the information, then click ***Add***.
1. Select the entry and click ***Save Certificate As***.
1. In the ***Export Format*** field choose ***Personal Information Exchange (pfx)***.
1. Choose where the file will be saved by clicking on the ellipsis.
1. Enter a strong password, then click ***Export***.

#### Using the Windows certutil utility
Use the `certutil` utility to combine a certificate (`.crt` or `.cer`) file and its private key (`.key`).
`certutil -MergePFX file.crt file.pfx`

### Importing the certificate


## Configuring Windows certificate store via gateway.json


## Configuring Windows certificate store via PowerShell
