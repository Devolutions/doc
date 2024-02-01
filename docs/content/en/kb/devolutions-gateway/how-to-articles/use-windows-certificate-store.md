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
Use the `certutil` utility to combine a certificate (`.crt` or `.cer`) file and its private key (`.key`). Both files need to have the same name.
`certutil -MergePFX file.crt file.pfx`

### Importing the certificate
After acquiring the certificate and/or certificate private key file, import it into Windows.
1. Install the certificate:
  * If Windows auto-detects the certificate, double-click it and choose ***Install Certificate...***; or
  * Open `certmgr.msc` to the intended store location (`LocalMachine` or `CurrentUser`), right-click on the wanted location (ex: ***Personal/Certificates***) and choose ***All Tasks*** – ***Import***.
1. Pick one of the following options and click ***Next***:
  * ***Automatically select the certificate store based on the type of certificate***; or
  * ***Place all certificates in the following store*** and click ***Browse...*** to pick a folder.
1. Complete the import by clicking on ***Finish***.

## Configuring Windows certificate store via gateway.json
The default location of the `gateway.json` file is in the **C:\%ProgramData%\Devolutions\Gateway** directory.
{% snippet icon.badgeInfo %}
Make sure the file is a valid `.json` by testing it with:
```powershell
Try { Get-Content -Path ("{0}\Devolutions\Gateway\gateway.json" -F $env:ProgramData) | ConvertFrom-JSON -ErrorAction 'Stop' } Catch { $PSItem[0].Exception.Message }
```
This works with PowerShell 5.1, PowerShell 6 and later versions.
{% endsnippet %}  

A typical configuration is shown below. Your values may differ, especially the ***Subject Name***, as that will reflect the domain name {{ en.DGW }} responds to:
* `TlsCertificateSource` - `System`
* `TlsCertificateSubjectName` - `gateway.ad.it-help.ninja`
* `TlsCertificateStoreName` - `My`
* `TlsCertificateStoreLocation` - `LocalMachine`
```json
{
  "Id": "c912b379-8c34-449d-8ff3-3aa20a9cc3e4",
  "Hostname": "gateway.ad.it-help.ninja",
  "TlsCertificateFile": "server.crt",
  "TlsPrivateKeyFile": "server.key",
  "TlsCertificateSource": "System",
  "TlsCertificateSubjectName": "gateway.ad.it-help.ninja",
  "TlsCertificateStoreName": "My",
  "TlsCertificateStoreLocation": "LocalMachine",
  "ProvisionerPublicKeyFile": "provisioner.pem",
  "Listeners": [
    {
      "InternalUrl": "https://*:7171",
      "ExternalUrl": "https://*:7171"
    },
    {
      "InternalUrl": "tcp://*:8181",
      "ExternalUrl": "tcp://*:8181"
    }
  ]
}
```

1. Run the above script.
1. Open `services.msc`.
1. Right-click on ***{{ en.DGW }} Service*** and select ***Restart***.
1. Verify if {{ en.DGW }} is running correctly by navigating to `https://{FQDN}:7171/jet/health` with a web browser.

## Configuring Windows certificate store via PowerShell
The {{ en.DGW }} can also be configured through PowerShell commands. The [{{ en.DGW }} PowerShell module](https://www.powershellgallery.com/packages/DevolutionsGateway/2023.3.0) exposes many commands to configure it. By default, an install of {{ en.DGW }} includes the module in the installation directory. The module can be imported using the following:
```powershell
# Import the Module
Import-Module -Name "C:\Program Files\Devolutions\Gateway\PowerShell\Modules\DevolutionsGateway"
# View the imported Modules
Get-Module
```

Another method to make the module easily accessible is to install it via the following:
```powershell
# Install the Module
Install-Module -Name 'DevolutionsGateway'
# Update the Module if installed via the above method (will not update the bundled version)
# Will not do anything if the latest version is installed.
Update-Module -Name 'DevolutionsGateway'
# Import the Module
Import-Module -Name 'DevolutionsGateway'
# View the imported Modules
Get-Module
```
Once imported, you can see the current configuration via the following command:
```powershell
Get-DGatewayConfig
```
To tell {{ en.DGW }} to use the Windows Store, use the following command:
```powershell
# Update the configuration; this will not remove any existing parameters, only configure those defined.
Set-DGatewayConfig -TlsCertificateSource "System" -TlsCertificateSubjectName "gateway.ad.it-help.ninja" -TlsCertificateStoreLocation "LocalMachine" -TlsCertificateStoreName "My"
# Display the updated configuration
Get-DGatewayConfig
```

Restart the service for the configuration to take effect.
```powershell
Restart-Service -Name 'DevolutionsGateway'
```

Verify if {{ en.DGW }} is running correctly by navigating to `https://{FQDN}:7171/jet/health` with a web browser.
