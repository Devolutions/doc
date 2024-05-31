---
eleventyComputed:
  title: Courriel
---
Les courriels sont envoyés par notre moteur de notification et par certains de nos fournisseurs d'authentification à deux facteurs pour la messagerie sécurisée interne.

Dans la section ***Général***, vous pouvez choisir un ***type d'authentification*** entre ***Basique*** et ***Azure***. Vous pouvez également fournir l'***Email de l'Administrateur***, qui est l'adresse email du destinataire qui recevra les erreurs.
![Administration – Paramètres du serveur – Courriel](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8169.png)

Après avoir sélectionné le ***type d'authentification***, vous aurez accès à d'autres champs à remplir. Les informations à fournir dépendent du type d'authentification.

## Configuration SMTP Basique
{% snippet, "badgeHelp" %}
Voir [Configurer un courriel SMTP](/server/kb/how-to-articles/configure-smtp-server/configure-smtp-email), qui est spécifique au ***type d'authentification Basique***, pour les étapes sur comment configurer un SMTP dans {{ fr.DVLS }}.
{% endsnippet %}

![Type d'authentification Basique](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2059.png)

| Champ/Paramètre       | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| Hôte                  | Nom ou adresse IP du serveur SMTP.                                          |
| Port                  | Port du serveur SMTP.                                                       |
| Nom d'utilisateur     | Nom d'utilisateur utilisé pour se connecter au serveur SMTP.                |
| Mot de passe          | Mot de passe utilisé pour se connecter au serveur SMTP.                     |
| Sécurité de connexion | Sécurité spécifique pour la connexion au serveur de messagerie.<ul><li>Pas de chiffrement</li><li>Automatique basé sur le numéro de port (par défaut)</li><li>Utiliser SSL ou TLS immédiatement (SMTPS)</li><li>Utiliser TLS immédiatement après la connexion initiale</li><li>Utiliser TLS si le serveur le supporte après la connexion initiale</li></ul> |
| Envoyer l'email comme | Adresse email de l'expéditeur.                                              |


## Configuration SMTP Azure
![Type d'authentification Azure](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2060.png)

{% snippet, "badgeHelp" %}
Voir [Configurer un courriel SMTP avec Azure](/server/kb/how-to-articles/configure-smtp-server/configure-smtp-email-azure), qui est spécifique au ***type d'authentification Azure***, pour les étapes sur comment configurer un SMTP avec Azure dans {{ fr.DVLS }}.
{% endsnippet %}

| Champ/Paramètre | Description                                                       |
|-----------------|-------------------------------------------------------------------|
| ID Client       | ID d'application Azure.                                           |
| ID de locataire | ID de locataire Azure                                             |
| ID d'utilisateur | ID de l'utilisateur qui est listé dans la section "De" du courriel. |
| Valeur secrète  | Secret client Azure.                                              |
