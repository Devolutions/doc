---
eleventyComputed:
  title: Problèmes liés au processus de mise à niveau
  description: Liste des problèmes liés au processus de mise à niveau dans {{ fr.DVLS }}
---
Suite à une mise à niveau de {{ fr.DVLS }}, cela déclenche des messages d'erreur comme SQLException - Nom de colonne invalide dans les journaux ou Message d'erreur : impossible de lire la propriété 'children' de null sur l'interface web de {{ fr.DVLS }}.

La raison de ces erreurs est liée à une base de données SQL ou à des fichiers d'application web qui n'ont pas été correctement mis à jour parce que la mise à niveau de l'application web {{ fr.DVLS }} a été effectuée avec un {{ fr.DVLSCONSOLE }} plus ancien.

## Solution

D'abord, vérifier que le {{ fr.DVLSCONSOLE }} correspond à la version de l'application web {{ fr.DVLS }}.
![{{ fr.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/DVLSCONSOLE4008_2024_1.png)

Si la version de {{ fr.DVLSCONSOLE }} est plus ancienne que la version de l'application web, veuillez aller sur la [page de téléchargement](https://server.devolutions.net/home/download) de {{ fr.DVLS }} pour télécharger la bonne version de {{ fr.DVLSCONSOLE }} et l'installer.

Ensuite, installer à nouveau l'application web {{ fr.DVLS }} par-dessus l'installation actuelle avec le bouton Mettre à jour le serveur dans le volet Actions. Cela installera correctement tous les fichiers requis et mettra à jour la base de données SQL à la version appropriée.

{% snippet, "badgeNotice" %}
Nous recommandons fortement de suivre les instructions dans [Mise à niveau de {{ fr.DVLS }}](/server/getting-started/installation/upgrade-server/) pour effectuer la mise à niveau.
{% endsnippet %}

{% snippet, "badgeNotice" %}
Nous offrons une session à distance gratuite pour vous assister pendant le processus de mise à niveau de votre instance {{ fr.DVLS }}. Pour plus d'aide, veuillez envoyer un courriel à [service@devolutions.net](mailto:service@devolutions.net) pour réserver une session avec notre équipe de support. Les propriétaires du Support Premium peuvent planifier une session en dehors des heures ouvrables pour limiter l'impact de la mise à niveau.
{% endsnippet %}

## Le 'client_id' spécifié est invalide

L'erreur suivante est affichée lorsque vous essayez de vous connecter sur la page web de {{ fr.DVLS }}.

**error:invalid_request**
**error_description:Le 'client_id' spécifié est invalide.**
**error_uri:https<area>://documentation.openiddict.com/errors/ID2052**

## Solution

La raison de ce problème est la mise à niveau qui a été effectuée avec une version plus ancienne de {{ fr.DVLSCONSOLE }}. Pour résoudre ce problème, veuillez aller sur la [page de téléchargement](https://server.devolutions.net/home/download) de {{ fr.DVLS }} pour télécharger la version de {{ fr.DVLSCONSOLE }} qui correspond à la version de l'application web {{ fr.DVLS }} et l'installer. Ensuite, installer à nouveau l'application web {{ fr.DVLS }} par-dessus l'installation actuelle avec le bouton ***Mettre à jour*** dans l'onglet ***Serveur***.

![{{ fr.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/DVLSCONSOLE4009_2024_1.png)
