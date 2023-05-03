---
title: Permettre mot de passe au système externe
---
{% snippet icon.badgeInfo %} 
Cette fonctionnalité est disponible qu&apos;avec une [Source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) . 
{% endsnippet %}
 
L&apos;accès aux mots de passe stockés dans votre source de données en interrogeant la base de données sous-jacente n&apos;est pas possible en raison du cryptage que nous appliquons sur les mots de passe. Pour ceux d&apos;entre vous qui ont besoin d&apos;accéder aux mots de passe directement dans la base de données, par exemple par un système CRM, nous avons créé un moyen d&apos;y parvenir.  

## Paramètres 

Les informations de session, qui sont une structure XML, sont stockées dans le champ ***Data*** de la table ***Connections*** dans la base de données sous-jacente.  

Cependant, l&apos;obtention du mot de passe crypté dans la base de données nécessite la configuration ***Permettre mot de passe au système externe*** .  
![Permettre mot de passe au système externe](/img/fr/rdm/windows/clip10280.png) 

Saisir une clé de chiffrement dans le champ ***Clé*** . Une fois qu&apos;une clé est fournie, le système extraira une copie du mot de passe de notre structure XML, puis elle sera rechiffrée à l&apos;aide de la clé que vous avez fournie et stockée dans le champ ***UnsafePassword*** de la section ***Connections*** .  
![Fournisseur de sécurité](/img/fr/rdm/windows/clip10281.png) 

## Code de Décryptage 

Utiliser le code .net suivant pour décrypter vos mots de passe. 

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