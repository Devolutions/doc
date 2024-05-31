---
eleventyComputed:
  title: Paramètres du système
---
La section ***Paramètres du système*** du panneau ***Administration*** est utilisée pour gérer les paramètres globaux de tous les utilisateurs et groupes d'utilisateurs de {{ fr.DHUBB }}.

Vous pouvez imposer une vérification en deux étapes aux utilisateurs lors de la connexion, envoyer des mots de passe temporaires par courriel, activer l'authentification unique, et bien plus encore.

{% snippet, "badgeHelp" %}
Pour en savoir plus sur l'authentification unique, veuillez vous référer à [Commencer avec l'authentification unique dans {{ fr.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/).
{% endsnippet %}

## Général

Dans la section ***Général*** des ***Paramètres du système***, gérer les paramètres liés aux mots de passe temporaires, au réseau, aux tickets de support, aux sessions ouvertes et aux profils d'interface utilisateur.
![Administration – Paramètres du système – Général](https://cdnweb.devolutions.net/docs/HUBB6009_2024_1.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Envoyer le mot de passe temporaire par courriel  | Sélectionner comment le mot de passe temporaire est envoyé à vos utilisateurs lors de la création de leur {{ fr.DA }} à partir d'une invitation dans {{ fr.DHUBB }}:<ul><li>***Demander***: Lors de la création d'un nouveau {{ fr.DA }}, une invite apparaîtra pour envoyer ou non le mot de passe temporaire de l'utilisateur par courriel.</li><li>***Envoyer***: Lors de la création d'un nouveau {{ fr.DA }}, les utilisateurs recevront leur mot de passe temporaire par courriel.</li><li>***Ne pas envoyer***: Lors de la création d'un nouveau {{ fr.DA }}, les utilisateurs ne recevront pas leur mot de passe temporaire par courriel. À ce moment-là, une invite apparaîtra avec leur mot de passe temporaire. Vous pouvez alors décider comment fournir cette information cruciale à vos utilisateurs.</li></ul> |
| Bloquer le trafic Tor | Bloque le trafic Internet provenant du réseau Tor. |
| Permettre aux utilisateurs de soumettre un ticket de support | Active l'option pour les utilisateurs de soumettre un ticket à l'équipe de support. |
| Marquage automatique comme "Fermé" après X jours | Marque les sessions ouvertes comme fermées après un nombre défini de jours. |
| Profils d'interface utilisateur | Sélectionner le profil d'interface utilisateur par défaut que les utilisateurs seront assignés entre ***Professionnel de l'IT***, ***Utilisateur d'affaires***, ou le ***Défaut***. |

## {{ fr.VLT_MAJ  }}

Dans la section {{ fr.VLT  }} des ***Paramètres du système***, gérer les paramètres liés au {{ fr.VTL }} des utilisateurs et à la visibilité.

![Administration – Paramètres du système – {{ fr.VLT_MAJ  }}](https://cdnweb.devolutions.net/docs/HUBB6011_2024_1.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Permettre {{ fr.UVLT_MAJ   }}         | Permettre {{ fr.UVLT_MAJ }} pour les utilisateurs.                           |
| Public -  Permettre la demande d'accès    | Permettre aux utilisateurs de demander l'accès à un {{ fr.VLT  }}.     
| Public -  Invitation seulement         | Le {{ fr.VLT  }} est sur invitation seulement.

## Avancé

Dans la section ***Avancé*** des ***Paramètres du système***, gérer les paramètres liés au Cache, au mode hors ligne, à l'auto-remplissage de {{ fr.WBEX }}, et au partage externe.

![Administration – Paramètres du système – Avancé](https://cdnweb.devolutions.net/docs/HUBB6010_2024_1.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Cache/Hors ligne                     | Définir la durée de stockage des données hors ligne avant leur expiration.                            |
| Forcer le mot de passe d'application sur RDM            |  Exiger un mot de passe pour accéder à {{ fr.RDM }}.                                                        |
| Permettre l'auto-remplissage de {{ fr.WBEX }}                 | Permettre à {{ fr.WBEX }} de remplir automatiquement les identifiants.                                                        |
| Permettre à l'utilisateur d'envoyer des messages et mots de passe de manière sécurisée via Devolutions Send   | Les utilisateurs peuvent envoyer des messages et mots de passe chiffrés en utilisant [Devolutions Send](/hub/send/).
