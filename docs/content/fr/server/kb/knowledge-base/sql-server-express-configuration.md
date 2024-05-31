---
eleventyComputed:
  title: Configuration de SQL Server Express
  description: Pour pouvoir se connecter à une base de données SQL avec {{ fr.DVLS }}, voici la configuration suggérée dans Microsoft SQL Server Express Edition.
---
Pour pouvoir se connecter à une base de données SQL avec {{ fr.DVLS }}, voici la configuration suggérée dans Microsoft SQL Server Express Edition.

**La plupart de nos clients utilisent le mode d'authentification mixte du serveur**. Selon Microsoft, ce n'est pas la méthode d'authentification la plus sûre à utiliser avec Microsoft SQL Server Express Edition mais nous recommandons de l'utiliser pour configurer et tester votre instance {{ fr.DVLS }}. Après une installation réussie de {{ fr.DVLS }}, vous pouvez le remettre en mode ***Authentification Windows*** et configurer l'option ***Authentification unique de domaine (SSO)*** dans l'onglet ***Base de données*** des paramètres du serveur {{ fr.DVLS }}. Consulter [Configurer {{ fr.DVLS }} pour utiliser l'authentification unique de domaine (SSO)](/server/kb/how-to-articles/configure-server-use-domain-sso/). Pour activer le mode mixte, dans Microsoft SQL Server Management Studio, ouvrir la boîte de dialogue des propriétés de votre serveur et aller dans l'onglet ***Sécurité***. Ensuite, sélectionner l'option mode d'authentification SQL Server et Windows.
![!!KB4311](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4311.png)

L'option suivante qui doit être activée est l'option ***Autoriser les connexions distantes à ce serveur***. Vous trouverez cette option dans l'onglet ***Connexions*** de la boîte de dialogue des ***Propriétés*** du serveur SQL. Ensuite, cliquer sur le bouton ***OK*** pour sauvegarder les modifications.
![!!KB4312](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4312.png)

Enfin, le service SQL Server Browser doit être démarré sur la machine où le serveur SQL est hébergé. Veuillez exécuter services.msc et rechercher le SQL Server Browser dans la liste.
![!!KB4313](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4313.png)

Nous recommandons de régler le type de démarrage sur Automatique pour le service SQL Server Browser. Double-cliquer sur le service pour ouvrir la boîte de dialogue des ***Propriétés***. Ensuite, démarrer le service en cliquant sur le bouton ***Démarrer*** et sélectionner ***Automatique*** dans le menu déroulant du type de démarrage. Enfin, cliquer sur le bouton ***OK***.
![!!KB4314](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4314.png)