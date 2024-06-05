---
eleventyComputed:
  title: Politique de mot de passe
  description: Accéder aux mots de passe stockés dans votre source de données en interrogeant la base de données sous-jacente n'est pas possible en raison du chiffrement que nous appliquons sur les mots de passe.
---
{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible avec une [source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

Accéder aux mots de passe stockés dans votre source de données en interrogeant la base de données sous-jacente n'est pas possible en raison du chiffrement que nous appliquons sur les mots de passe. Pour ceux d'entre vous qui ont besoin d'accéder directement aux mots de passe dans la base de données, par exemple par un système CRM, nous avons créé un moyen d'y parvenir.

## Paramètres
Les informations de session, qui sont une structure XML, sont stockées dans le champ ***Data*** de la table ***Connections*** dans la base de données sous-jacente.

Cependant, obtenir le mot de passe chiffré de la base de données nécessite que l'option ***Allow password for external system*** soit configurée.
![Politique de mot de passe – Autoriser le mot de passe pour le système externe](https://cdnweb.devolutions.net/docs/RDMW2043_2024_1.png)

Entrez une clé de chiffrement dans le champ ***Key***. Une fois une clé fournie, cela amènera le système à extraire une copie du mot de passe de notre structure XML, qui sera ensuite re-chiffrée en utilisant la ***Key*** que vous avez fournie et stockée de nouveau dans le champ ***UnsafePassword*** de la table ***Connections***.
![Fournisseur de sécurité](https://cdnweb.devolutions.net/docs/RDMW2044_2024_1.png)

## Code de déchiffrement
Utilisez le code .net suivant pour déchiffrer vos mots de passe.

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
