---
eleventyComputed:
  title: Security providers best practices
  description: Security providers exist to encrypt the data at rest (the information stored on the database) using a key shared on every {{ en.RDM }} instance. This way, an attacker would need to compromise the database as well as the security provider to compromise the data.
---
***Security Providers*** exist to encrypt the data at rest (the information stored on the database) using a key shared on every {{ en.RDM }} instance. This way, an attacker would need to compromise the database as well as the security provider to compromise the data.

Below is a list of available ***Security types***.

* ***Default***: Does not set any security provider.
* ***Shared passphrase***: Encrypts the data using a password stored on each {{ en.RDM }} instances. The ***v3*** uses a more secure hashing algorithm than the ***v2***.
* ***Certificate***: Encrypts the data using the private key of a certificate installed on each workstation. The ***v2*** uses a more secure encryption algorithm.
* ***Keyfile***: Encrypts the data using the a key stored in a file installed on each workstation.
![Security types](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2247.png)

To ensure secure deployment of {{ en.RDM }} with SQL Server on workstations within an organization, it is recommended that an enterprise certificate be used for data encryption. This can be achieved by implementing an Active Directory configuration or using other methods such as a Mobile Device Management (MDM) software.

However, it is important to recognize that when a certificate is exposed to multiple workstations, there is an increased risk that it will be compromised by malicious actors. To mitigate this risk, we recommend using a {{ en.DVLS }} that effectively handles encryption at rest while safeguarding the encryption key from {{ en.RDM }} users.

{% snippet, "badgeHelp" %}
For more detailed information, please refer to [Security Model and Encryption (PDF)](https://cdnweb.devolutions.net/documents/legal/security/security-encryption-en.pdf).
{% endsnippet %}
