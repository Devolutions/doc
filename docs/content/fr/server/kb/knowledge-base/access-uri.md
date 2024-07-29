---
eleventyComputed:
  title: URI d'accès
  description: Pendant le processus de mise à niveau ou le processus d'installation de {{ fr.DVLS }}, un URI d'accès doit être fourni.
---
{% snippet, "badgeCaution" %}
Ce problème est lié à la mise à niveau d'une version antérieure à 2022.1 vers 2022.2.
{% endsnippet %}

Pendant le processus de mise à niveau ou le processus d'installation de {{ fr.DVLS }}, un URI d'accès doit être fourni. Cet URI est une URL de redirection qui est utilisée par le système d'autorisation ouverte (OAuth) et redirige le trafic d'authentification vers l'URI d'accès.

## Paramètres

1. Dans la {{ fr.DVLSCONSOLE }}, aller à ***Serveur – Modifier – IIS***.
1. Entrer l'***URI d'accès*** dans le champ de texte suivant le format fourni dans [Scénarios](/server/kb/knowledge-base/access-uri/#scenarios). Cliquer sur le bouton d'ellipsis pour ajouter ou gérer des URI d'accès supplémentaires si nécessaire.

   {% snippet, "badgeNotice" %}
   L'URI d'accès est sensible à la casse et doit respecter le nom d'hôte du certificat. Assurer qu'il n'y a pas de '/' à la fin de l'URL.
   {% endsnippet %}

   ![Serveur – Modifier – ISS – URI d'accès](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2008_2024_2.png)

1. Cliquer sur ***OK***.
1. Si l'URI d'accès existant a été modifié ou si un nouvel URI d'accès a été créé, redémarrer l'instance {{ fr.DVLS }} via la {{ fr.DVLSCONSOLE }} en cliquant sur ***Arrêter le serveur***, puis ***Démarrer le serveur***.
![Redémarrer l'instance {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2009_2024_2.png)

## Scénarios

Plusieurs formats peuvent être définis. Sélectionner le bon pour la situation.

* L'instance {{ fr.DVLS }} est **disponible en interne** uniquement et est **hébergée sur un seul serveur** : L'URI d'accès doit être défini avec le FQDN de la machine et se terminer par l'application IIS {{ fr.DVLS }} si elle n'est pas installée à la racine du site Web.

    Exemple de format : **https<area>://monnomdeserveur.mondomaine.loc/dvls**
* L'instance {{ fr.DVLS }} est **disponible à l'extérieur** sur le web ou derrière un environnement équilibré en charge : L'URI d'accès doit être défini avec l'URL que vous utilisez pour atteindre l'instance depuis le web.

    Exemple de format : **https<area>://monorganisation.com/dvls**
* L'instance {{ fr.DVLS }} est ***installée à la racine*** du site Web IIS : L'URI d'accès doit être uniquement le FQDN de la machine.

    Exemple de format : **https<area>://monorganisation.com**
* L'instance {{ fr.DVLS }} utilise **un port non standard** (80 pour http, 443 pour https) : L'URI d'accès doit contenir le numéro de port après un deux-points.

    Exemple de format : **https<area>://monorganisation.com:4443/dvls**