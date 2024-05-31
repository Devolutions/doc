---
eleventyComputed:
  title: Sécurité GeoIP
---
La section Sécurité GeoIP permet à l'administrateur de définir des restrictions d'IP basées sur la localisation géographique.
![Administration – {{ fr.DVLS }} Paramètres – Sécurité GeoIP](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8046.png)

## Paramètres
| Option      | Description                                                               |
|-------------|---------------------------------------------------------------------------|
| Mode GeoIP  | Choisir votre méthode de GeoIP entre :<br>Aucun : N'utilisera pas la sécurité GeoIP<br>MaxMind : Utiliser la base de données GeoIP de MaxMind pour rechercher la ville, le numéro AS et d'autres informations pour une adresse IP. Se connecter à votre compte en entrant votre ID utilisateur et votre clé de licence dans le champ approprié, puis sélectionner les pays auxquels vous souhaitez accorder l'accès à votre {{ fr.DVLS }}. |
| ID utilisateur     | ID utilisateur pour se connecter sur MaxMind.                                            |
| Clé de licence | Clé de licence pour se connecter sur MaxMind.                                        |
| Pays   | Sélectionner tous les pays autorisés à se connecter à l'instance {{ fr.DVLS }}. |
