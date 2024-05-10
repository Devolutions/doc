---
eleventyComputed:
  title: Certificate security provider configuration errors
  description: Occasionally, configuring certificate security providers may result in errors.
---
Occasionally, configuring certificate security providers may result in errors. To perform encryption using the certificate, the application must access the certificate's private key, which can sometimes cause issues.

{% snippet icon.badgeInfo %}
First try solving the issue by running {{ en.RDM }} in administrator mode to rule out any common permission errors.
{% endsnippet %}

### Common permission errors

|   |
|---|
| `An error occurred trying to access the certificate private key. (0x80100001, SCARD_F_INTERNAL_ERROR)`<br><br>If you are using a YubiKey Smart Card certificate, please refer to [Troubleshooting SCARD_F_INTERNAL_ERROR](https://support.yubico.com/hc/en-us/articles/360013718020-Troubleshooting-SCARD-F-INTERNAL-ERROR). This error is caused by an internal issue with the Yubikey configuration. They recommend enabling the debug logging to diagnose the issue with the Yubikey. |
| `Smart card prompt cancelled. (0x8010006E, SCARD_W_CANCELLED_BY_USER)`<br><br>The smart card credential prompt was cancelled which prevented accessing the private key. |
| `Access denied (0x80090010, NTE_PERM)`<br><br>The application was not able to access the certificate private key due to permission issues.<ul><li>This could also be caused by cancelling the certificate PIN prompt.</li><li>The user is not allowed to read the certificate private key.</li></ul> |
| `Unable to open the Windows cryptographic key container. (0x80090016, NTE_BAD_KEYSET)`<br><br>The application was not able to access the certificate private key in the Windows cryptographic key container.<br><br>This issue could be caused by permission issues or by a nonexistent or corrupted key. The latter might occur if the user changes their password, leading to the rotation of the DPAPI keys and therefore preventing the successful decryption of key containers. |