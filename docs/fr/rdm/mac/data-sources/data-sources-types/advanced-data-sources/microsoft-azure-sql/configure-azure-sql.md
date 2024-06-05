---
eleventyComputed:
  title: Configurer Azure SQL
---
1. S'assurer d'avoir un abonnement Azure SQL valide pour pouvoir créer votre base de données.
1. Cliquer sur le bouton d'engrenage dans le ***{{ fr.NPANE }}*** ou aller à ***Fichier – Sources de données***.
![!!RDMMac2138](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2138.png)
1. Cliquer sur le signe plus pour créer une nouvelle source de données.
![!!RDMMac2139](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2139.png)
1. Sélectionner ***Microsoft Azure SQL***.
![!!RDMMac2140](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2140.png)
1. Configurer la connexion à votre Azure SQL avec un utilisateur ayant suffisamment de privilèges pour créer la base de données.
![!!RDMMac2141](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2141.png)
1. Cliquer sur l'onglet ***Mise à niveau*** et appuyer sur le bouton ***Créer la base de données***. Si la base de données est déjà créée sur Azure SQL, appuyer sur le bouton ***Mettre à jour la base de données*** pour créer les tables appropriées dans la base de données.
![!!RDMMac2142](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2142.png)
1. Une fois la base de données créée, créer un compte administrateur {{ fr.RDM }} via le menu ***Administration – Utilisateurs***.
{% snippet, "badgeInfo" %}
Si votre base de données a été créée en utilisant un Super Utilisateur (exemple : SA), nous recommandons de garder cet utilisateur uniquement pour la création de la base de données et/ou pour la mise à niveau de la base de données. Un compte administrateur {{ fr.RDM }} doit d'abord être créé, puis les utilisateurs doivent être créés avec ce compte administrateur {{ fr.RDM }}.
{% endsnippet %}

8. Se connecter à la source de données Azure SQL avec le compte administrateur {{ fr.RDM }}. Pour ce faire, aller à ***Fichier – Source de données*** et cliquer sur le bouton de paramètres pour éditer votre source de données SQL. Ensuite, entrer le compte administrateur {{ fr.RDM }} que vous avez créé dans le nom d'utilisateur.

Vous pouvez maintenant commencer à créer vos sessions ou à créer vos utilisateurs.
