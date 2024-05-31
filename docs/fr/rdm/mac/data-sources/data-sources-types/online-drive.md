---
eleventyComputed:
  title: "{{ fr.DOD }}"
  description: Le {{ fr.DOD }} stocke et synchronise vos données de connexions et d'identifiants dans nos services cloud.
---
Le {{ fr.DOD }} stocke et synchronise vos données de connexions et d'identifiants dans nos services cloud. Vous pouvez accéder à vos sessions de n'importe où via une connexion Internet.

C'est un service de stockage de fichiers en ligne dédié à un seul type de fichier, la liste de connexions de {{ fr.RDM }}. {{ fr.DOD }} est entièrement gratuit et n'a aucune limitation quant au nombre de sessions que vous pourriez avoir, il est destiné aux utilisateurs individuels car il ne peut pas partager de fichiers.

Consulter [{{ fr.DOD }}](/cloud/rdm-online-services/online-drive/) pour des informations sur ce service.

{% snippet, "shieldWarning" %}
Puisque ce service est hébergé dans le cloud, nous vous recommandons fortement de chiffrer davantage vos données en appliquant une clé principale. Cela garantira que le fichier ne sera lisible par personne d'autre que vous.
{% endsnippet %}

{% snippet, "badgeWarning" %}
Bien que ce soit un service cloud, vous DEVEZ utiliser notre service {{ fr.OBACK }} pour conserver l'historique de vos données. Devolutions offre un service de sauvegarde gratuit, et nous ne maintenons pas plusieurs versions du contenu de {{ fr.DOD }}. Cela rend critique l'activation de la fonction de sauvegarde. Ce service conservera plusieurs versions de votre fichier et est la meilleure option.
{% endsnippet %}

## Paramètres

### Général

![{{ fr.DOD }} – Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10499.png)

| OPTION                              | DESCRIPTION |
|-------------------------------------|-------------|
| Nom                                 | Entrer le nom de la source de données. |
| Créer un compte gratuitement        | Créer un nouveau {{ fr.DA }}. |
| Nom d'utilisateur                   | Entrer votre nom d'utilisateur {{ fr.DA }}. |
| Mode de connexion                   | Choisir le mode par défaut ou la méthode [Mot de passe d'application](/rdm/mac/kb/rdm-windows/how-to-articles/application-passwords-setup/). |
| Mot de passe d'application          | Entrer votre [Mot de passe d'application](/rdm/mac/kb/rdm-windows/how-to-articles/application-passwords-setup/).        |
| Toujours demander le mot de passe (par défaut uniquement) | Demande le mot de passe à chaque tentative de connexion au {{ fr.DOD }}. |
| Nom de fichier                      | Indiquer le nom de fichier utilisé pour stocker les données sur le {{ fr.DOD }}. |
| Clé principale                      | Contient une clé principale pour accéder à la source de données. |
| Toujours demander la clé principale | Demander la clé principale à chaque tentative de connexion au {{ fr.DOD }}. |

### Sauvegarde

Consulter [{{ fr.OBACK }}](/cloud/rdm-online-services/online-backup/) pour plus d'informations sur ce service.
![{{ fr.DOD }} – Sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10500.png)

| OPTION  | DESCRIPTION |
|---------|-------------|
| Sauvegarde  | Choisir le mode de sauvegarde. Sélectionner entre :<ul><li>Aucun : Aucune sauvegarde de votre source de données ne sera créée.</li><li> {{ fr.OBACK }} : Une {{ fr.OBACK }} (utilisant [Service {{ fr.OBACK }}](/rdm/mac/commands/file/backup/)) sera automatiquement créée.<li> Sauvegarder dans un fichier : Votre sauvegarde sera enregistrée dans un fichier choisi mais ne fera pas automatiquement de sauvegarde toutes les 30 secondes.</li></ul> |
| Nom de la sauvegarde | Spécifier le nom de la sauvegarde qui vous permettra de sauvegarder automatiquement vos sessions dans un espace de stockage en ligne sécurisé et de les restaurer en cas de problèmes. |

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre {{ fr.DOD }}.
![!!RDMMac2145](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2145.png)

### Avancé

![{{ fr.DOD }} – Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10501.png)

| OPTION                  | DESCRIPTION |
|-------------------------|-------------|
| Désactiver révéler le mot de passe | Désactiver la fonction de révélation du mot de passe lorsqu'un utilisateur accède à cette source de données. |
| Autoriser le mode hors ligne      | Autoriser l'utilisation de la source de données en mode Hors ligne. |
| Autoriser les images personnalisées     | Permet à l'utilisateur d'utiliser des images personnalisées. Trop d'images personnalisées pourraient augmenter considérablement la taille de la source de données et augmenter le temps de chargement en même temps.            |
| Actualisation automatique            | Définir l'intervalle pour l'actualisation automatique |
| Effacer le cache hors ligne     | Effacer le cache hors ligne sur votre ordinateur. Cela peut être très utile en cas de problèmes hors ligne. |