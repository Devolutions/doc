---
eleventyComputed:
  title: Certificate validation
  description: When {{ en.RDM }} connects to a URL using the HTTPS protocol, it will validate the certificate using industry best practices.
---
When {{ en.RDM }} connects to a URL using the HTTPS protocol, it will validate the certificate using industry best practices. The first hurdle is to validate that your device trusts the authority that issued the certificate, called the Root Certification Authority (CA). Each certificate is typically a hierarchy of intermediate CAs under a root, each one usually under the jurisdiction of a different legal entity. The end result is that each level adds their own validation steps.  

For certain organizations with a mature InfoSeq practice, other departments have final authority on all network communications, we have created options to disable certain validations, but this should be done as a last resort action.  Please look at the [Certificate Security options](#certificate-security-related-options) section below:  
{% snippet icon.badgeCaution %}
Often times, users will focus on {{ en.RDM }} as the most likely source of the error, but since we use basicnet features to perform the validation, a bug is unlikely. Ultimately, if running the certificate validation using tools that are offered with your operating system indicate an error {{ en.RDM }} will also indicate one. To quickly identify if this is the case, export the certificate by:
1. Choosing ***View Certificate*** in the Certificate validation error dialog.
1. Export it as described in [System Dialog](#system-dialog).
1. Perform a [Manual Certificate Validation](#manual-certificate-validation). If the validation is successful, contact us to open a ticket. If it is not successful, see with your IT department to resolve the blockage, or disable certificate validation.
{% endsnippet %}

## Troubleshooting WITHIN {{ en.RDM }}
{{ en.RDM }} indicates a certificate validation error by displaying the following dialog:  
![Certificate error dialog](https://webdevolutions.azureedge.net/docs/en/kb/KB0126.png)  

{% snippet icon.shieldCaution %}
Before ignoring the error or adding the certificate to the exception list, always perform a perfunctory validation of the certificate by using the ***View Certificate*** action, verify the ***Issued To*** and ***Issued By*** fields to determine if they seem correct for your organization.
{% endsnippet %}  

The dialog offers five commands: 

| Command                     | Description                                                                                                 |
|-----------------------------|-------------------------------------------------------------------------------------------------------------|
| ***Continue***              | This option will accept the certificate for this session only.                                              |
| ***Continue and Remember*** | This option will accept the certificate and remember your choice. To "forget" a certificate that had been previously added, you must clear the certificate exemption list using the [***Certificate security***-related options](#certificatesecurityrelatedoptions). |
| ***Abort***                 | This option will abort the communication that is being attempted, it will result in an unreachable error.   |
| ***Diagnose***              | This option will display the [***Certificate Diagnostic Window***](#certificatediagnosticwindow).           |
| ***View Certificate***      | This option will display the certificate using the [***System Dialog***](#systemdialog). You can use this to export the certificate for a manual validation. |

## {{ en.RDM }} Certificate diagnostic window
![Certificate Diagnostic](https://webdevolutions.azureedge.net/docs/en/kb/KB0127.png)

## System dialog
To find out more about why the certificate validation failed, you can use some tools, but the certificate needs to be exported first.  

To export the certificate, follow these steps:  

1. Go to the ***Details*** tab of the Windows certificate prompt.
1. Click ***Copy to File...*** and proceed to export the certificate as a *.cer file.  
![Certificate information system dialog](https://webdevolutions.azureedge.net/docs/en/kb/KB4452.png)

## Manual certificate validation
Here are some tools that can be used to verify the newly exported certificate:
### Using PowerShell (requires PowerShell v4)
In a PowerShell console, adapt the path for the certificate file, then run:  

`$cert=New-Object System.Security.Cryptography.X509Certificates.X509Certificate2("%USERPROFILE%\Desktop\cert.cer"`  
`Test-Certificate -Cert $cert`

### Using CMD
Adapt the path for the certificate file, then run the following command:  

`certutil -verify "%USERPROFILE%\Desktop\cert.cer"`  

The resulting output from the tools mentioned above can be used to obtain more information about the issue.

## Certificate security related options
Navigate to ***File*** – ***Options*** – ***Security*** – ***Certificate security*** to manage options related to certificates.  
![Certificate security options](https://webdevolutions.azureedge.net/docs/en/kb/KB0129.png)  
{% snippet icon.badgeInfo %}
The ***Reset Known Certificates*** option only appears if you have selected ***Continue and Remember*** on one or more certificate.
{% endsnippet %}  

| Option                                        | Description                  |
|-----------------------------------------------|------------------------------|
| ***Ignore application certificate errors***   | Enable this option to disable the application certificate validation. This is not recommended, as it would compromise confidentiality and integrity of communications between the client and the server and could expose the application to potential threats. |
| ***Check for server certificate revocation*** | This option checks that the certificate has not been revoked. This is necessary if any of the URLs for [***Certificate Validation***](#certificatecheck) are unavailable for any reason. |
| ***Reset Known Certificates***                | Use this option to clear the cached certificates. All certificates will need to be validated again. |

## Verify the Certification Authority (CA)
1. Open the certificate, then verify by which Certification Authority the certificate has been ***Issued by***, in the ***General*** tab.  
![Certificate Issued by](https://webdevolutions.azureedge.net/docs/en/kb/KB4448.png)
1. Verify that the Certification Authority is properly installed in the certificate store.  
![Certificates](https://webdevolutions.azureedge.net/docs/en/kb/KB4449.png)

## Certificate revocation check
Ensure that the CRL (Certificate Revocation List) server is reachable as it is required to validate a certificate.  
![CRL](https://webdevolutions.azureedge.net/docs/en/kb/KB4454.png)
