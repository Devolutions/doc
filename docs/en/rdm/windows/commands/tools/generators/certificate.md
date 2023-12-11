---
eleventyComputed:
  title: Certificate generator
  description: The Certificate Generator allows you to create a self signed certificate which is an identity certificate that is signed by the same entity whose identity is certified. 
---
The ***Certificate Generator*** allows you to create a self signed certificate which is an identity certificate that is signed by the same entity whose identity is certified. 

## Settings 

![Certificate Generator - Self Signed Certificate](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10390.png) 

| OPTION               | DESCRIPTION                                                            |
|----------------------|------------------------------------------------------------------------|
| Common name          | Name of the certificate.                                                                                                                                              |
| Key size (bits)      | Indicates the key size (bits) of the certificate. Select between: <ul><li>1024</li><li>2048</li>4096 <li>8192</li><li>16384</li></ul>                                                                |
| Valid from           | Starting date of the certificate.                                                                                                                        |
| Valid to             | Expiration date of the certificate.                                                                                    |
| Save to file (pfx)   | Save the certificate into a *.pfx file and secure this certificate with a password.                                                                                       |
| Save to certificate store | Indicate the location and the store to save the certificate.                                                                                    |
| Location             | Indicate the location of the certificate. Select between: <ul><li>Current user</li><li>Local machine</li> </ul>                                                       |
| Store                | Indicate the store location of the certificate. Select between: <ul><li>Address book</li><li>Authorization root</li><li>Certificate authority</li><li>Disallowed</li> <li>My</li><li>Root</li><li>Trusted people</li><li>Trusted publisher</li></ul> |

![Self Signed Certificate](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10391.png) 

| OPTION         | DESCRIPTION                                   |
|----------------|-----------------------------------------------|
| Store          | Indicate the store where the certificate will be located. |
| Browse Store   | Browse the store that is indicated in the store field. |
| Thumbprint     | Display the certificate thumbprint.           |
| View Certificate | Display the certificate that you have created. |
| Private Key    | Display the certificate private key           |
| View Private Key | View the private key file on your computer.   |

