---
title: Permettre mot de passe au système externe
---
{% snippet icon.badgeInfo %} 
Cette fonctionnalité est disponible qu'avec une [Source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
L'accès aux mots de passe stockés dans votre source de données en interrogeant la base de données sous-jacente n'est pas possible en raison du cryptage que nous appliquons sur les mots de passe. Pour ceux d'entre vous qui ont besoin d'accéder aux mots de passe directement dans la base de données, par exemple par un système CRM, nous avons créé un moyen d'y parvenir.  

## Paramètres 

Les informations de session, qui sont une structure XML, sont stockées dans le champ ***Data*** de la table ***Connections*** dans la base de données sous-jacente.  

Cependant, l'obtention du mot de passe crypté dans la base de données nécessite la configuration ***Permettre mot de passe au système externe***.  
![Permettre mot de passe au système externe](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10280.png) 

Saisir une clé de chiffrement dans le champ ***Clé***. Une fois qu'une clé est fournie, le système extraira une copie du mot de passe de notre structure XML, puis elle sera rechiffrée à l'aide de la clé que vous avez fournie et stockée dans le champ ***UnsafePassword*** de la section ***Connections***.  
![Fournisseur de sécurité](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10281.png) 

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