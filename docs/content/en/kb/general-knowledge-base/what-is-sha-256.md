---
eleventyComputed:
  title: What is SHA-256
---
The SHA (Secure Hash Algorithm) is one of a number of cryptographic hash functions. A cryptographic hash is like a signature for a data set. If you would like to compare two sets of raw data (source of the file, text or similar) it is always better to hash it and compare SHA-256 values.

It is like the fingerprints of the data. Even if only one symbol is changed, the algorithm will produce different hash value. SHA-256 algorithm generates an almost-unique, fixed size 256-bit (32-byte) hash. Hash is so called a one way function. This makes it suitable for checking integrity of your data and challenge hash authentication, anti-tamper, digital signatures, and blockchain.

SHA-256 algorithm can be used for making sure you acquired the same data as the original one. For example, if you download our Devolutions applications you can easily check if the data has not changed due to network errors or malware injection.

To compare the hash of your file, click on the SHA-256 icon on our Devolutions website download page.

For more information and to know how to get the SHA-256 from a file, see Microsoft's [Get-FileHash](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.2).

{% snippet icon.badgeNotice %}
The command should look similar to this: Get-FileHash C:\Users\user1\Downloads\Setup.RemoteDesktopManager.exe -Algorithm SHA256 | Format-List. 
{% endsnippet %}
