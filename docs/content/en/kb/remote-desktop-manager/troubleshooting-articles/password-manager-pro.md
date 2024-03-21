---
eleventyComputed:
  title: Password Manager Pro
---
## SYSTEM.NET.WEBEXCEPTION: THE SERVER COMMITTED A PROTOCOL VIOLATION. SECTION=RESPONSESTATUSLINE
During the configuration of your Password Manager Pro credential entry, make sure that the URL of your server contains https:// and not http://. You absolutely need an https:// at the beginning of the address to communicate properly with the server.
![!!KB4113](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4113.png)

## WHEN YOU TRY TO CONNECT ON A REMOTE COMPUTER OR GET THE CREDENTIAL LIST, A WINDOW APPEARs WITH AN EMPTY TOKEN FIELD AND THE USERNAME AND WORKSTATION FIELD GREYED OUT.
![!!KB4114](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4114.png)
The Host Name configured in your API user in Password Manager Pro is not the same that you have configured in {{ en.RDM }} in ***File – My Account Settings – Password Manager Pro*** Please consult [Configure Password Manager Pro in {{ en.RDM }}](/kb/remote-desktop-manager/how-to-articles/rdm-mac-configure-password-manager-pro/) for more information on the configuration.

## SYSTEM.NET.WEBEXCEPTION: THE REQUEST WAS ABORTED: COULD NOT CREATE SSL/TLS SECURE CHANNEL.
Password Manager Pro can be configured to use SSLv3, TLSv1.0, TLSv1.1 and TLSv1.2. If you have configured your Password Manager Pro server to use TLSv1.2 only, you will encounter this error message. You need to configure your Password Manager Pro to accept TLSv1.0, TLSv1.1 and TLSv1.2.

## API KEY RECEIVED IS NOT ASSOCIATED TO ANY USER. AUTHENTICATION FAILED.
Edit your API user in Password Manager Pro and generate a new ***Authentication Token***, save your API user and save this new token in {{ en.RDM }} in ***File – My Account Settings – Password Manager Pro***.

## USER IS NOT ALLOWED TO ACCESS FROM THIS HOST.
During the creation of an API User in Password Manager Pro, a ***Host*** (Computer name) is necessary to create the user. In Password Manager Pro it may be registered using the ***Fully Qualified Domain Name (FQDN)*** of the computer. In {{ en.RDM }} on the other hand, you must set it exactly the same as the %COMPUTERNAME% environment variable.

Another reason for this error we have seen is that the DNS name of the server was specified, but it would work perfectly fine if you were using the IP address instead. Please test it with the procedure described below.

## TESTING PROCEDURE WITH POWERSHELL.
Here is a script that you can use to test your access from a client workstation. Save the following code in a file called PMPTest.ps1. The technology used in the script is the same as is used from within {{ en.RDM }}, therefore it is the most conclusive test. If you contact Password Manager Pro support, they can provide a Java based test fixture. It is not as useful except to prove that the server basically responds to your queries.

```powershell
[CmdletBinding()]
Param(
[Parameter(Mandatory=$True,Position=1)]
[string]$PMPServer,

[Parameter(Mandatory=$True,Position=2)]
[string]$AuthToken
)

add-type @"
using System.Net;
using System.Security.Cryptography.X509Certificates;
public class TrustAllCertsPolicy: ICertificatePolicy {
public bool CheckValidationResult(
ServicePoint srvPoint, X509Certificate certificate,
WebRequest request, int certificateProblem) {
return true;
}
}
"@

[System.Net.ServicePointManager]::CertificatePolicy = New-Object TrustAllCertsPolicy
cls
$connect = "https://" + $PMPServer + ":7272/restapi/json/v1/resources?AUTHTOKEN=$AuthToken"
$result = Invoke-WebRequest -Uri $connect
$form = $result.Content
$content = ConvertFrom-Json $form

$status = $content.operation.result.status

if ($status -eq "Success") {
$content.operation.Details
}
if ($status -eq "Failed") {
$status
$content.operation.result.Message
}
Pause
```

{% snippet icon.badgeInfo %}
The port is hard-coded in the script to 7272, which is the default value for Password Manager Pro. Adapt it to your environment
{% endsnippet %}

From within Powershell, type the following:

`.\PMPTest.ps1 {YOUR_PMP_SERVER} {YOUR_PMP_TOKEN}`

Test with both the DNS name of the server and the IP address and observe the results.

## REMOTE DESKTOP MANAGER IS RETURNING THE IP ADDRESS OF THE SERVER INSTEAD OF THE FQDN.
In some organization, IP addresses are blocked and the host name of the Password Manager Pro server needs to be returned. In that case, the [Configuration File](/rdm/windows/installation/client/configuration-file-location/) of the application would need to be modified.

1. Close {{ en.RDM }}.
1. Find the {{ en.RDM }} [Configuration File](/rdm/windows/installation/client/configuration-file-location/).
1. Edit the configuration file and add the line <ResolvePMProURLIntoIPAddress>false</ResolvePMProURLIntoIPAddress>.
1. Save the modification and restart the application.
