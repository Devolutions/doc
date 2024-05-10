---
eleventyComputed:
  title: What is SHA-256?
  description: The Secure Hash Algorithm (SHA) family encompasses several cryptographic hash functions, with SHA-256 being a widely-used variant.
---
The Secure Hash Algorithm (SHA) family encompasses several cryptographic hash functions, with SHA-256 being a widely-used variant. Cryptographic hashes act as digital signatures for data, enabling the comparison of large data sets by their hash values rather than their full content. This method is similar to using fingerprints for identification—each data set has a unique hash, and even a minor alteration to the data changes the hash value.

SHA-256 generates a distinctive, fixed-size 256-bit (32-byte) hash, functioning as a one-way process that makes it excellent for data integrity checks, authentication challenges, anti-tampering measures, digital signatures, and blockchain applications.

For instance, when downloading applications like those from Devolutions, SHA-256 helps verify that the data received matches the original, ensuring it has not been altered due to network errors or malware attacks. To check a file's hash, simply click on the SHA-256 icon on the download page of the Devolutions website.

For additional guidance on how to obtain the SHA-256 hash of a file, refer to Microsoft's documentation on the [Get-FileHash](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.2) command. Here is how you can use it:

```powershell
Get-FileHash C:\Users\user1\Downloads\Setup.RemoteDesktopManager.exe -Algorithm SHA256 | Format-List.
```

This command provides a structured output of the hash value, aiding in easy verification of your file's integrity.
