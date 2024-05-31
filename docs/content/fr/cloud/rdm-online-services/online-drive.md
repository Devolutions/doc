---
eleventyComputed:
  title: "{{ fr.DOD }}"
---
{% snippet, "badgeInfo" %}
***{{ fr.DOD }}*** sera retiré de {{ fr.DPORTAL }}. Vous pouvez toujours [accéder à l'URL](/rdm/kb/general-knowledge/rdm-online-services-removed-devolutions-portal/) si nécessaire
{% endsnippet %}

{% youtube 'R3VYxnOdjoE' %}

Le ***{{ fr.DOD }}*** est un service de stockage de fichiers en nuage gratuit sans limitations et parfait pour les utilisateurs autonomes. Vous pouvez stocker et synchroniser vos entrées en ligne et accéder à vos sessions de n'importe où.

{% snippet, "shieldWarning" %}
Bien que ce soit un service en nuage, vous DEVEZ utiliser notre service [{{ fr.OBACK }}](/cloud/rdm-online-services/online-backup/) pour conserver l'historique de vos données. Comme Devolutions offre un service de sauvegarde gratuit, nous ne maintenons pas plusieurs versions du contenu de {{ fr.DOD }}. Cela rend critique l'activation de la fonction de sauvegarde. Ce service conservera plusieurs versions de votre fichier et est la meilleure option.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Le {{ fr.DOD }} est destiné uniquement aux utilisateurs individuels et ne peut pas partager de fichiers.
{% endsnippet %}

## Paramètres

1. Depuis {{ fr.RDM }} dans ***Fichier – Sources de données***, créer une nouvelle source de données ***{{ fr.DOD }}***.
![!!clip4017](https://cdnweb.devolutions.net/docs/docs_en_cloud_clip4017.png)
1. Entrer vos identifiants {{ fr.DA }}, ou changer le ***Mode de connexion*** pour utiliser le [Mot de passe d'application](/cloud/sign-in-security/application-passwords/).
![!!Cloud4056](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4056.png)
{% snippet, "badgeNotice" %}
Consulter [Paramètres de {{ fr.DOD }}](/rdm/windows/data-sources/data-sources-types/online-drive/) pour plus d'informations sur les paramètres de configuration.
{% endsnippet %}

3. Cliquer sur l'onglet ***Sauvegarde*** pour définir votre ***{{ fr.OBACK }}*** pour votre nouvelle source de données.
![!!Cloud4057](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4057.png)
1. Cliquer ***OK*** deux fois pour sauvegarder.
