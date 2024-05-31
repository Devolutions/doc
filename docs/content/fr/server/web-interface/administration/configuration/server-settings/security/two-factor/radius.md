---
eleventyComputed:
  title: RADIUS
  description: Pour activer cette méthode A2F pour vos utilisateurs, aller dans Administration – Paramètres du serveur – Authentification à deux facteurs et cocher l'option A2F RADIUS.
  keywords:
  - RADIUS
  - A2F
  - authentification à deux facteurs
---
Pour activer cette méthode A2F pour vos utilisateurs, aller dans ***Administration – Paramètres du serveur – Authentification à deux facteurs*** et cocher l'option ***RADIUS*** A2F. Un bouton ***Configurer*** apparaîtra à côté de l'option.

![Administration – Paramètres du serveur – Authentification à deux facteurs – A2F pris en charge – RADIUS](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2099.png)

{% snippet, "badgeInfo" %}
Voir [Authentification à deux facteurs](/server/web-interface/administration/configuration/server-settings/security/two-factor/) pour plus d'informations sur la configuration de l'A2F.
{% endsnippet %}

Voir dans les tableaux ci-dessous ce que chaque paramètre fait dans chaque onglet.

## Général

![Paramètres RADIUS généraux](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2098.png)

| Option                       | Description                                                                                                                                                                  |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Port client RADIUS           | Port UDP que la machine {{ fr.DVLS }} écoute pour la réponse du serveur RADIUS.                                                                                               |
| Port serveur RADIUS          | Port UDP que la machine {{ fr.DVLS }} envoie la demande d'authentification au serveur RADIUS.                                                                                 |
| Délai d'attente (sec)        | Temps d'attente avant d'effacer une erreur de communication.                                                                                                                  |
| Serveur RADIUS               | URL ou adresse IP du serveur RADIUS.                                                                                                                                          |
| Secret partagé RADIUS        | Secret requis pour communiquer avec le serveur RADIUS.                                                                                                                        |
| Test                         | Tester la communication avec le serveur RADIUS.<br><br>En cliquant sur le bouton, vous accédez aux champs ***Nom d'utilisateur*** et ***Code d'accès*** ainsi qu'au bouton ***Vérifier***. |
| Nom d'utilisateur            | Nom d'utilisateur pouvant s'authentifier au serveur RADIUS.                                                                                                                   |
| Code d'accès                 | Code ou mot de passe associé au nom d'utilisateur pour s'authentifier au serveur RADIUS.                                                                                       |
| Vérifier                     | Tester le ***Nom d'utilisateur*** et le ***Code d'accès***.                                                                                                                   |
| Activer l'identifiant NAS RADIUS | Indique que le serveur enverra un identifiant de serveur d'accès réseau (NAS) dans sa demande RADIUS.                                                                         |
| Identifiant NAS RADIUS       | La valeur envoyée comme identifiant NAS. L'identifiant NAS spécifie une chaîne de caractères qui est le nom du NAS. Vous pouvez utiliser la syntaxe de correspondance de motifs pour spécifier les noms NAS. |
| Supprimer le domaine du nom d'utilisateur | Supprime le nom de domaine du nom d'utilisateur envoyé par {{ fr.DVLS }} au serveur RADIUS.                                                                                    |

## Basculage

![Paramètres RADIUS de basculement](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2097.png)

{% snippet, "badgeInfo" %}
Notez que {{ fr.DVLS }} écoutera toujours le même port. La configuration de basculement n'inclut pas de port client. Par conséquent, la configuration RADIUS sera utilisée comme port client.
{% endsnippet %}

| Option                        | Description                                                                                         |
|-------------------------------|-----------------------------------------------------------------------------------------------------|
| Activer le serveur RADIUS de basculement | Activer le serveur RADIUS de basculement.                                                           |
| Port du serveur RADIUS de basculement | Port UDP que la machine {{ fr.DVLS }} envoie la demande d'authentification au serveur RADIUS de basculement. |
| Serveur RADIUS de basculement | URL ou adresse IP du serveur RADIUS de basculement.                                                 |
| Secret du serveur RADIUS de basculement | Secret requis pour communiquer avec le serveur RADIUS de basculement.                               |
