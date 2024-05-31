---
eleventyComputed:
  title: "{{ fr.DLAUNCHER }} et {{ fr.DVLS }} synchronisation"
  description: 
  order: 20
---
{{ fr.DLAUNCHER }} et {{ fr.DVLS }} doivent être configurés ensemble pour fonctionner. Les connexions de lancement peuvent être définies pour tous les utilisateurs dans ***{{ fr.DVLS }} Paramètres du serveur*** ou individuellement dans ***Préférences du compte***.

{% snippet, "badgeInfo" %}
Vous devez vous connecter au moins une fois à {{ fr.DLAUNCHER }} pour que l'outil connexe lance vos sessions depuis {{ fr.DVLS }}.
{% endsnippet %}

### Paramètres du serveur

Cette méthode définit comment tous les utilisateurs lancent des connexions à distance.

Dans ***Administration - Paramètres du serveur - Avancé***, sélectionner ***{{ fr.DLAUNCHER }}*** dans le menu déroulant ***Lancer la connexion avec***.
![Lancer la connexion avec](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4043.png)

### Préférences du compte

Cette méthode définit comment les utilisateurs individuels ouvrent des connexions à distance.

1. Cliquer sur ***Avatar de l'utilisateur***.
1. Sélectionner ***Préférences***.
![Préférences](https://cdnweb.devolutions.net/docs/DVLS6004_2023_3.png)
1. Choisir ***{{ fr.DLAUNCHER }}*** dans le menu déroulant ***Lancer la connexion avec*** et cliquer sur ***Enregistrer***.
![!!ServerOp4045](https://cdnweb.devolutions.net/docs/DVLS6005_2023_3.png)
