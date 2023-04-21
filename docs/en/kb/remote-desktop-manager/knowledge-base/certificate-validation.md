---
title: Certificate Validation
---
When {{ en.RDM }} connects to a URL using the HTTPS protocol, it will validate the certificate using industry best practices. The first hurdle is to validate that your device trusts the authority that issued the certificate, called the Root Certification Authority (CA). Each certificate is typically a hierarchy of intermediate CAs under a root, each one typically under the jurisdiction of a different legal entity. The end result is that each level adds their own validation steps.  

For certain organizations with a mature infoseq practice, other departments have final authority on all network communications, we have created options to disable certain validations, but this should be done as a last resort action.  Please look at the <a href="#certificatesecurityrelatedoptions">Certificate Security options</a> section below  
{% snippet icon.badgeCaution %}
Often times, users will focus on {{ en.RDM }} as the most likely source of the error, but since we use basicnet features to perform the validation, a bug is unlikely. Ultimately, if running the certificate validation using tools that are offered with your operating system indicate an error, {{ en.RDM }} will also indicate one. To quickly identify if this is the case, export the certificate by:
1. Choosing View Certificate in our Certificate validation error dialog
1. Export it as described in <a href="#systemdialog">System Dialog</a>
1. Perform a <a href="#manualcertificatevalidation">Manual Certificate Validation</a>
If the validation is successful, contact us to open a ticket. If it is not successful, you can see with your IT department to resolve the blockage, or you use our options to disable certificate validation.
{% endsnippet %}  

## Troubleshooting WITHIN {{ en.RDM }}
{{ en.RDM }} indicates a certificate validation error by displaying the following dialog:  
![Certificate validation error dialog ](/img/en/kb/KB4450.png)  
 
{% snippet icon.shieldCaution %}
Before ignoring the error or adding the certificate to you exception list, always perform a perfunctory validation of the certificate by using the ***View Certificate*** action, you should validate the ***Issued To*** and ***Issued By*** fields to determine if they seem correct for your organization.
{% endsnippet %}  

The dialog offers five commands
<table>
	<tr>
		<td>
Command
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Continue
		</td>
		<td>
Will accept the certificate for this session only.
		</td>
	</tr>
	<tr>
		<td>
Continue and Remember
		</td>
		<td>
Will accept the certificate and remember your choice. To "forget" a certificate that had been previously added, you must clear the certificate exemption list using the <a href="#certificatesecurityrelatedoptions">Certificate Security related options</a>
		</td>
	</tr>
	<tr>
		<td>
Abort
		</td>
		<td>
This will abort the communication that is being attempted, it will result in an error that the service is unreachable.
		</td>
	</tr>
	<tr>
		<td>
Diagnose
		</td>
		<td>
This will display the <a href="#certificatediagnosticwindow">Certificate Diagnostic Window</a> below
		</td>
	</tr>
	<tr>
		<td>
View Certificate
		</td>
		<td>
Displays the certificate using the <a href="#systemdialog">System Dialog</a>. You can use this to export the certificate for a manual validation.
		</td>
	</tr>
</table>

## {{ en.RDM }} Certificate diagnostic window  
<a name="certificatediagnosticwindow"></a>

![Certificate Diagnostic Window](/img/en/kb/KB4453.png)  
## System dialog
<a name="systemdialog"></a>

To find out more about why the certificate validation failed, you can use some tools, but you need to export the certificate first.  

To export the certificate, follow these steps:  

1. Click on the ***Details*** tab of the Windows certificate prompt.
1. Click ***Copy to File***.. and proceed to export the certificate as a *.cer file.  
![Certificate information system dialog](/img/en/kb/KB4452.png)  
## Manual certificate validation
<a name="manualcertificatevalidation"></a>

Here are some tools that can be used to verify the newly exported certificate:
### Using PowerShell (requires PowerShell v4)
In a PowerShell console, adapt the path for your certificate, then run:  

`$cert=New-Object System.Security.Cryptography.X509Certificates.X509Certificate2("%USERPROFILE%\Desktop\cert.cer"`  
`Test-Certificate -Cert $cert`

### Using CMD
Adapt the path for your certificate, then Run the following command:  

`certutil -verify "%USERPROFILE%\Desktop\cert.cer"`  

The resulting output from those tools can be used to obtain more information about the issue.
## Certificate security related options
<a name="certificatesecurityrelatedoptions"></a>

Navigate to ***File – Options – Security – Certificate security*** to manage options related to certificates.  
![Remote Desktop Manager Options](/img/en/kb/KB4451.png)  

<table>
	<tr>
		<td>
Option
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Ignore application certificate errors
		</td>
		<td>
Enable this option to disable the application certificate validation. This is not recommended, as it would compromise confidentiality and integrity of communications between the client and the server and could expose the application to potential threats.
		</td>
	</tr>
	<tr>
		<td>
Check for server certificate revocation
		</td>
		<td>
Enable the validation that the certificate has not been revoked. This is necessary is any of the URLs for <a href="#certificatecheck">Certificate Validation</a> are unavailable for any reason.
		</td>
	</tr>
	<tr>
		<td>
Reset Known Certificates
		</td>
		<td>
Use this option to clear the cached certificates. All certificates would need to be validated again.
		</td>
	</tr>
</table>

## Verify the Certification Authority (CA)
1. Open the certificate, then verify by which Certification Authority the certificate has been ***issued by*** , in the ***General*** tab.  
![!!KB4448.png](/img/en/kb/KB4448.png)
1. Verify that the Certification Authority is properly installed in the certificate store.  
![!!KB4449.png](/img/en/kb/KB4449.png)
## Certificate revocation check
<a name="certificatecheck"></a>

Ensure that the CRL (Certificate Revocation List) server is reachable as it is required to validate a certificate.  
![!!KB4454.png](/img/en/kb/KB4454.png)
