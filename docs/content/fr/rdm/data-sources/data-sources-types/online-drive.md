---
eleventyComputed:
  title: "{{ fr.DOD }}"
  description: Le {{ fr.DOD }} stocke et synchronise vos données de connexions et d'identifiants dans nos services Cloud. Vous pouvez accéder à vos sessions de n'importe où via une connexion Internet.
---
{% youtube 'R3VYxnOdjoE' %}

Le {{ fr.DOD }} stocke et synchronise vos données de connexions et d'identifiants dans nos services Cloud. Vous pouvez accéder à vos sessions de n'importe où via une connexion Internet.

C'est un service de stockage de fichiers en ligne dédié à un seul type de fichier, la liste de connexions de {{ fr.RDM }}. {{ fr.DOD }} est entièrement gratuit et n'a aucune limitation quant au nombre de sessions que vous pourriez avoir, il est destiné aux utilisateurs individuels car il ne peut pas partager de fichiers.

Consulter [{{ fr.DOD }}](/cloud/rdm-online-services/online-drive/) pour des informations sur ce service.

{% snippet, "shieldWarning" %}
Puisque ce service est hébergé dans le cloud, nous recommandons fortement de chiffrer davantage vos données en appliquant une clé maîtresse. Cela garantira que le fichier ne sera lisible par personne d'autre que vous.
{% endsnippet %}

{% snippet, "badgeWarning" %}
Bien que ce soit un service cloud, vous DEVEZ utiliser notre service [{{ fr.OBACK }}](/cloud/rdm-online-services/online-backup/) pour conserver l'historique de vos données. Devolutions offre un service de sauvegarde gratuit, et nous ne maintenons pas plusieurs versions du contenu de {{ fr.DOD }}. Cela rend critique l'activation de la fonction de sauvegarde. Ce service conservera plusieurs versions de votre fichier et est la meilleure option.
{% endsnippet %}

## Paramètres

### Général

![{{ fr.DOD }} - Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11347.png)

| OPTION                          | DESCRIPTION |
|---------------------------------|-------------|
| Nom                             | Entrer le nom de la source de données.                                                                                       |
| Créer un compte gratuitement    | Créer un nouveau {{ fr.DA }}.                                                                                                |
| Nom d'utilisateur               | Entrer votre nom d'utilisateur {{ fr.DA }}.                                                                                  |
| Mode de connexion               | Choisir le mode par défaut ou la méthode [Mot de passe d'application](/rdm/kb/rdm-windows/how-to-articles/application-passwords-setup/). |
| Mot de passe d'application      | Entrer votre [Mot de passe d'application](/rdm/kb/rdm-windows/how-to-articles/application-passwords-setup/).             |
| Toujours demander le mot de passe (par défaut uniquement) | Demande le mot de passe à chaque tentative de connexion au {{ fr.DOD }}.                                                   |
| Nom de fichier                  | Indiquer le nom de fichier utilisé pour stocker les données sur le {{ fr.DOD }}.                                             |
| Clé maîtresse                   | Contient une clé maîtresse pour accéder à la source de données.                                                              |
| Toujours demander la clé maîtresse | Demander la clé maîtresse à chaque tentative de connexion au {{ fr.DOD }}.                                                  |


### Sauvegarde

Consulter [{{ fr.OBACK }}](/cloud/rdm-online-services/online-backup/) pour des informations sur ce service.
![{{ fr.DOD }} – Onglet Sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11334.png)

| OPTION  | DESCRIPTION |
|---------|-------------|
| Sauvegarde | Choisir le mode de sauvegarde. Sélectionner entre : <ul><li>Aucun : Aucune sauvegarde de la source de données ne sera créée.</li><li>Sauvegarde de fichier : La sauvegarde sera enregistrée dans un fichier local lorsqu'une modification survient dans la source de données.</li><li>{{ fr.OBACK }} : Une {{ fr.OBACK }} (utilisant le [{{ fr.OBACK }}](/cloud/rdm-online-services/online-backup/)) sera automatiquement créée lorsqu'une modification survient dans la source de données.</li></ul> |

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre {{ fr.DOD }}.
![{{ fr.DOD }} - Onglet VPN](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2196.png)

### Avancé

![{{ fr.DOD }} - Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11335.png)

| OPTION               | DESCRIPTION |
|----------------------|-------------|
| Actualisation automatique | Définir l'intervalle à utiliser entre chaque actualisation automatique.                      |
| Désactiver révéler le mot de passe | Désactiver la fonction de révélation du mot de passe lorsqu'un utilisateur accède à la source de données. |
| Autoriser le mode hors ligne | Permettre à la source de données d'être utilisée en [mode Hors ligne](/rdm/windows/data-sources/offline-mode/). |
| Autoriser les images personnalisées | Permettre l'utilisation d'images personnalisées. |
| Effacer le cache hors ligne | Effacer le cache hors ligne sur l'ordinateur local. Cela peut être très utile en cas de problèmes hors ligne. |
