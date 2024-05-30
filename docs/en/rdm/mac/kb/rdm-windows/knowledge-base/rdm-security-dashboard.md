---
eleventyComputed:
  title: "{{ en.RDM }} Security Dashboard"
  description: The Security dashboard is a tool to offer guidance on how to improve the security of the {{ en.RDM }} platform.
---
The Security dashboard is a tool to offer guidance on how to improve the security of the {{ en.RDM }} platform and also tips on reducing the workload for administrators. Some tips are common infosec best practices, others are a consensus between our owns teams.

The scores are admittedly open to question and we do not pretend each topic has the same relative value for all of our community members. Achieving 100% is surely not an end goal in itself, we simply aim to raise awareness and provide ideas for your own security hardening.
![{{ en.RDM }} security dashboard](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4707.png)

## Improvement actions items

### A default password template should be configured
Password templates set requirements for passwords generated with the password generators.

#### Mitigation
In ***File – Templates***, select ***Password Templates*** to create a template. Then, the default template can be selected in ***Administration – System Settings – Password Templates***.

---

### A security provider should be used
By default, passwords are not protected at rest. When a security provider is configured, sensitive data contained in a data source is encrypted.

#### Mitigation
Security providers are configured in ***Administration – Security Providers***.

---

### A master key should be used with the data source
Using a master key encrypts sensitive content of XML-based data source files.

#### Mitigation
The master key can be set under ***File – Change Master Key***.

---

### A minimal client version should be configured
Setting a minimal {{ en.RDM }} version is recommended to ensure clients are up to date and have the latest security features.

---

### Configuration files should be encrypted using an application password
The application password should be used to encrypt sensitive information in {{ en.RDM }} configuration files.

#### Mitigation
In ***File – Settings – Security – Application Security (local)***, choose ***Use application password*** and check ***Encrypt local files using the application password***.

---

### HTTPS should be used to connect to the data source
HTTPS is used to protect the communication between the client and the server hosting the data source. Traffic over HTTP is unencrypted and is susceptible to be intercepted and tampered by a malicious third party.

#### Mitigation
Configure a TLS certificate on the server and set the data source URL to start with **https://**. See [Configure SSL](/server/kb/how-to-articles/configure-ssl/).

---

### Legacy security should be disabled
Legacy security has been deprecated and will be completely removed starting with version 2023.3 of {{ en.RDM }}.

#### Mitigation
In ***Administration – System Settings – {{ en.VLT_MAJ }} Management – Security Settings – Security***, disable ***Use legacy security***. See [Disable legacy security in {{ en.RDM }}](/rdm/mac/kb/rdm-windows/how-to-articles/migrate-legacy-security-permissions/).

---

### Multi-factor authentication (MFA) should be enforced
Multi-factor authentication (MFA) requires an additional mean of authentication when connecting to a data source. This control prevents abuse of compromised, leaked, or weak passwords. The software can be configured to enforce MFA requirements to all users.

#### Mitigation
In ***Administration – System Settings – Security Settings***, enable ***Force data source 2-factor configuration***.

---

### Offline mode should be disabled
By default, offline mode is enabled and allows {{ en.RDM }} to automatically cache credentials stored in entries on the client system. This feature should be turned off in high security environments to avoid unnecessary sensitive data exposure.

---

### Password expiration should be enabled for custom users
Some security standards require passwords to be changed at regular intervals. PCI DSS 4.0 requires passwords to be changed every 90 days when the password is the only authentication factor.

#### Mitigation
Password expiration can be configured in ***Administration – System Settings – Security Settings – Custom user password expiration (days)***.

---

### Risky events should be disabled or generate a warning
Some entry events can perform powerful actions such as running an external program or script. These events represent a risk if they are modified by a malicious actor. These event types can be disabled if they are not needed, or {{ en.RDM }} can be configured to show a warning when such an event is about to be executed.

#### Mitigation
In ***Administration – System Settings – Security Settings***, set ***Risky events*** to ***Disabled*** or ***Enabled with warnings***.

---

### SMS should not be used for multi-factor authentication
SMS is not recommended for 2FA. A stronger mechanism based on an authenticator application or a physical security key should be used instead.

---

### SQL connections should use TLS
TLS protects communications between {{ en.RDM }} and the SQL Server instance.

#### Mitigation
Configure SQL Server to support TLS connections and add **encrypt=true** to the SQL Server connection.

---

### The data source password variable should be disabled
When this option is enabled, the variable `DATA_SOURCE_PASSWORD` will resolve to the data source password. This option should be disabled if it is not needed.

#### Mitigation
In ***Administration – System Settings – Password Policy***, uncheck ***Allow data source password variable***.

---

### The password strength analyzer should use zxcvbn
Zxcvbn is recommended over the legacy password strength analyzer as it is more reliable.

#### Mitigation
In ***Administration – System Settings – Password Policy***, set ***Password strength calculator*** to ***Zxcvbn***.

---

### Tls certificate validation should be enabled
Validating certificates guarantees that the connection is established with the intended party and protects against data interception attacks.

#### Mitigation
In ***File – Settings – Security – Certificate security***, uncheck ***Ignore application certificate errors***.

---

### Transparent data encryption (TDE) should be used with sql server
Transparent data encryption encrypts the database data at rest, which mitigates risks should physical drives or backup tapes be stolen.

---

### {{ en.UVLT_MAJ }} activity should be logged
Activity logs on the {{ en.UVLT }} can provide additional information during incident response.

#### Mitigation
In ***Administration – System Settings – {{ en.UVLT_MAJ }}***, check ***Log {{ en.UVLT }} activities***.

---

### {{ en.VLT_MAJ }}s should be created with restricted permissions by default
It is preferable to provide rights to users as needed. When enabling this option, {{ en.VLT }}s will be created with a more limited set of permissions.

#### Mitigation
In ***Administration – System Settings – Security***, check ***Create {{ en.VLT }}s with restricted access by default***.

---

### Warnings for untrusted rdp connections should be enabled
When presented with an unknown certificate, the RDP client should be configured to either present a warning (***Warn me***) or abort the connection (***Do not connect***).

#### Mitigation
In ***File – Settings – Types – Remote Desktop***, set ***Authentication level*** to ***Warn me*** or ***Do not connect***.

---

### Zip encryption should use the aes mode
The ZipCrypto algorithm is considered insecure and AES should be used instead. It is susceptible to known-plaintext attacks which can allow recovering the content of the archive without knowing the password (see [Why You Should Never Use the NativeZip Crypto in Windows](https://blog.devolutions.net/2020/08/why-you-should-never-use-zipcrypto/) for details on this attack).

#### Mitigation
In ***File – Settings – Advanced***, uncheck ***Use ZipCrypto compression (not recommended)***.

---
