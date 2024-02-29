---
eleventyComputed:
  title: Allow password access from external system
---
{% snippet icon.badgeInfo %}
This feature is only available when using an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

Accessing passwords stored in your data source by querying the underlying database is not possible because of the encryption we apply on the passwords. For those of you that need to access passwords directly in the database, for example by a CRM system, we have created a way to achieve this.

## Settings
The session information, which is an XML structure, is stored in the ***Data*** field of the ***Connections*** table in the underlying database.

However, getting the encrypted password from the database requires the ***Allow password for external system*** to be configured.
![Password Policy - Allow Password For External System](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10280.png)

Enter an encryption key in the ***Key*** field. Once a key is provided it will cause the system to extract a copy of the password from our XML structure, this will then be re-encrypted using the ***Key*** you have provided and stored back into the ***UnsafePassword*** field of the ***Connections*** table.
![Security Provider](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10281.png)

## Decryption Code
Use the following .net code to decrypt your passwords.

```powershell
public static string Decrypt(string encryptedString, string key)
{
  if (string.IsNullOrEmpty(encryptedString))
  {
    return encryptedString;
  }
  try
  {
    TripleDESCryptoServiceProvider tripleDesCryptoServiceProvider = new TripleDESCryptoServiceProvider();
    MD5CryptoServiceProvider cryptoServiceProvider = new MD5CryptoServiceProvider();
    string strTempKey = key;
    byte[] byteHash = cryptoServiceProvider.ComputeHash(Encoding.ASCII.GetBytes(strTempKey));
    tripleDesCryptoServiceProvider.Key = byteHash;
    tripleDesCryptoServiceProvider.Mode = CipherMode.ECB;
    byte[] byteBuff = Convert.FromBase64String(encryptedString);
    string strDecrypted =
      Encoding.UTF8.GetString(
        tripleDesCryptoServiceProvider.CreateDecryptor().TransformFinalBlock(
          byteBuff, 0, byteBuff.Length));
    return strDecrypted;
  }
  catch (Exception)
  {
    return null;
  }
}
```
