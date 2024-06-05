---
eleventyComputed:
  title: Créer un fournisseur PAM Azure AD
  description: Le guide suivant fournit les étapes pour créer un fournisseur PAM utilisateur Azure AD pour {{ fr.DHUBB }}.
---
Le guide suivant fournit les étapes pour créer un fournisseur PAM utilisateur Azure AD pour {{ fr.DHUBB }}.

## Créer un fournisseur PAM Azure AD

**Dans le portail Azure**

1. Dans une page de navigateur, ouvrir le [Portail Microsoft Azure](https://azure.microsoft.com) et se connecter à votre compte.
1. Sélectionner ***Microsoft Entra ID*** ([anciennement Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/new-name)) dans la section ***Services Azure***. Si vous ne le voyez pas, cliquer sur ***Plus de services*** pour faire apparaître d'autres services.
![Service Microsoft Entra ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2291.png)
1. Dans ***Inscriptions d'applications***, cliquer sur ***Nouvelle inscription***.
![Inscriptions d'applications – Nouvelle inscription](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2292.png)
1. Définir le ***Nom*** de la nouvelle inscription.
![Nom](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2315.png)
1. Cliquer sur ***Enregistrer*** en bas une fois terminé. Vous serez présenté avec un aperçu de votre application.
1. Localiser l'***ID d'application (client)*** et l'***ID de répertoire (locataire)***. Vous aurez besoin de ces informations dans les étapes suivantes, donc ne fermez pas cette fenêtre.
![ID d'application (client) et ID de répertoire (locataire)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2294.png)

**Dans {{ fr.DHUBB }}**

7. Se connecter à votre hub.
1. Aller à ***Administration – Accès privilégié – Fournisseurs***.
1. Cliquer sur ***Ajouter un fournisseur (+)***.
![Administration – Accès privilégié – Fournisseurs – Ajouter un fournisseur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2295.png)
1. Entrer un ***Nom*** (obligatoire) pour votre fournisseur. Optionnellement, entrer une ***Description*** et sélectionner un [***Modèle de mot de passe***](/hub/web-interface/administration/management/password-templates/).
![Nom, Description et Modèle de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2296.png)
1. Entrer l'***ID de locataire*** et l'***ID de client*** que vous avez précédemment localisés dans la page ***Vue d'ensemble*** de l'application d'entreprise dans votre portail Azure.
![ID de locataire et ID de client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2297.png)

   {% snippet, "badgeInfo" %}
   Ne fermez pas la fenêtre des paramètres du fournisseur car vous devez encore entrer la ***Clé secrète***. Suivre les étapes ci-dessous pour créer un secret client.
   {% endsnippet %}

## Créer un secret client

**Dans le portail Azure**

1. Dans ***Certificats et secrets***, sélectionner ***Secrets clients***, puis cliquer sur ***Nouveau secret client***.
![Nouveau secret client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2298.png)
1. Entrer une ***Description*** et définir une date d'expiration (ou utiliser celle recommandée).
![Ajouter un secret client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2299.png)
1. Cliquer sur ***Ajouter***.
1. Copier la ***Valeur*** de votre nouveau secret client (pas l'***ID secret***).
![Valeur du secret client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2300.png)

**Dans {{ fr.DHUBB }}**

5. Coller la valeur du secret client dans le champ ***Clé secrète***.
![Clé secrète](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2301.png)
1. Cliquer sur ***Ajouter***.

Votre nouveau fournisseur a maintenant été ajouté à la liste des ***Fournisseurs***.

## Définir les autorisations de l'API

**Dans le portail Azure**

1. Dans la page de votre application récemment créée, aller à ***Autorisations de l'API*** et cliquer sur ***Ajouter une autorisation***.
![Ajouter une autorisation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2314.png)
1. Sélectionner ***Microsoft Graph***.
![Microsoft Graph](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2303.png)
1. Sélectionner ***Autorisations d'application***.
![Autorisations d'application](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2304.png)
1. Localiser et cocher les cases à côté des autorisations de l'API Microsoft Graph suivantes :
    * ***Group.Read.All***
    * ***RoleManagement.Read.Directory***
    * ***User.Read.All***

![Sélectionner les autorisations](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2305.png)
1. Cliquer sur ***Ajouter des autorisations*** en bas.
1. Cliquer sur ***Accorder le consentement d'admin pour [votre organisation]***, puis confirmer en cliquant sur ***Oui***.
![Accorder le consentement d'admin](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2306.png)

   Le ***Statut*** à côté de chaque autorisation devrait maintenant être mis à jour.

## Activer l'application pour faire tourner les mots de passe

**Dans le portail Azure**

1. Revenir à Microsoft Entra ID, puis aller à ***Rôles et administrateurs*** dans le menu de gauche.

   {% snippet, "badgeCaution" %}
   Assurez-vous de revenir à la vue d'ensemble principale de Microsoft Entra ID. Si vous allez à ***Rôles et administrateurs*** tout en étant dans la vue d'ensemble de votre inscription d'application ou application d'entreprise, par exemple, vous n'aurez accès qu'aux rôles administratifs disponibles pour cette section.
   {% endsnippet %}

1. Dans ***Tous les rôles***, rechercher le rôle ***Administrateur du support technique***. Si les comptes gérés par le module PAM sont membres de rôles ou groupes administrateurs, rechercher également le rôle ***Administrateur d'authentification privilégiée*** et compléter les étapes suivantes pour les deux rôles.
1. Cliquer sur le nom du rôle (ne pas cocher la case).
![Rôles et administrateurs](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2307.png)
1. Cliquer sur ***Ajouter des attributions***.
![Ajouter des attributions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2308.png)
1. Cliquer sur ***Aucun membre sélectionné***.
![Aucun membre sélectionné](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2309.png)
1. Rechercher dans la liste pour trouver l'application.
1. Cocher la case à côté de l'application, puis cliquer sur ***Sélectionner***.
![Sélectionner l'application](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2310.png)
1. Cliquer sur ***Suivant***.
![Suivant](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2311.png)
1. Entrer une justification pour l'attribution, puis cliquer sur ***Attribuer***.
   ![Entrer une justification et Attribuer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2312.png)
   Votre application a maintenant été ajoutée à la liste.

   {% snippet, "badgeInfo" %}
   Si les comptes gérés par le module PAM sont membres de rôles ou groupes administrateurs, n'oubliez pas de compléter les étapes ci-dessus avec le rôle ***Administrateur d'authentification privilégiée*** également.
   {% endsnippet %}