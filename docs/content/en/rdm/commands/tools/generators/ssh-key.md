---
eleventyComputed:
  title: SSH key generator
  description: SSH keys provide a secure way of logging into a virtual private server with SSH than using a password alone.
---
SSH keys provide a secure way of logging into a virtual private server with SSH than using a password alone. While a password can eventually be cracked with a brute force attack, SSH keys are nearly impossible to decipher by brute force alone. 

The ***SSH Key generator*** is located under ***Tools*** in the ribbon of {{ en.RDM }}.

![Tools – SSH Key Generator](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMWin6254.png)  

### Settings

![SSH Key Generator](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMWin6255.png) 

| SETTINGS       | DESCRIPTION                                   |
|----------------|-----------------------------------------------|
| Algorithm      | You can choose between: <ul><li>RSA: RSA can be used for signing/verification and also for encryption/decryption. When using RSA it is recommended to use a 2048 bits key size.</li><li>DSA: It is faster in signing but slower in verifying. It can only be used for signing/verification it does not encrypt/decrypt. When using DSA it is a recommended to use a 1024 bits key size.</li></ul>                                    |
| Key size       | You can choose your SSH Key size between:<ul><li> 1024 bits: Minimum key size</li> <li>2048 bits: Default and recommended key size</li><li>4096 bits: Maximum key</li></ul> size                                               |
| Comment        | Enter your username and the name of the computer you are transferring your key to.                                                                                                                  |
| Key format (Public key)     | The key format refers to the structure and encoding used to store the key data. A variety of key formats are supported, such as ***Standart, OpenSSH, PKCS#1,*** and ***PKCS#8***. 
| Passphrase     | Choose a passphrase for the private key.                                                                                               |                           
| Confirm passphrase      | Confirm the passphrase for the private key.                                                                                               |                     
| Key format (Private key)    | Different private key formats are supported, such as ***OpenSSH, PuTTY, PKCS#1,*** and ***PKCS#8***.                                                                                                         |
| Rounds         | Specifying a higher number of rounds for the key derivation function increases the time it takes to process the passphrase when the key is used.                                                                                                                  |
| Load Private Key | This feature will allow you to import a previously saved SSH Key.                                 |
| Save Public Key  | Saving the public key will generate a *.pub file. Simply enter a file name when prompted.                                                                                                                                         |
| Save Private Key | You will have the option of saving your Private Key in different formats, choose between: <ul><li>PKCS #8 Private Key (*.pri) </li><li> PuTTY Private Key (*.ppk)</li><li> OpenSSH Private Key (*.pri)</li></ul>  |

If you did not specify a passphrase you will have to confirm that you do not wish to use a passphrase. 
{% snippet icon.badgeCaution %} 
When using the [SSH Key Agent Manager](/rdm/windows/commands/tools/tools/key-agent-manager/) you must select the PuTTY Private Key (.ppk) file format or the OpenSSH Private Key (.pri) file format. The PKCS Private Key is not a supported file format for the SSH Key Agent Manager. 
{% endsnippet %}
 

