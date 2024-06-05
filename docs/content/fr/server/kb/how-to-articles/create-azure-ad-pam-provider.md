---
eleventyComputed:
  title: Créer un fournisseur PAM Azure AD
  description: Le guide suivant fournit les étapes pour créer un fournisseur PAM utilisateur Azure AD pour {{ fr.DVLS }}.
---
Le guide suivant fournit les étapes pour créer un fournisseur PAM utilisateur Azure AD pour {{ fr.DVLS }}.

#### Dans le portail Azure
1. Ouvrir la page [Portail Microsoft Azure AD](https://azure.microsoft.com) dans un navigateur et se connecter à votre compte.
1. Sélectionner ***Azure Active Directory*** dans la section ***Services Azure***. Si vous ne le voyez pas, cliquer sur ***Plus de services*** pour faire apparaître d'autres services.
![Service Azure Active Directory](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2132.png)
1. Dans ***Inscriptions d'applications***, cliquer sur ***Nouvelle inscription***.
![Inscriptions d'applications – Nouvelle inscription](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2133.png)
1. Définir le ***Nom*** de votre application.
![Inscrire une application](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2291.png)
1. Cliquer sur ***Inscrire*** en bas une fois terminé.

#### Dans {{ fr.DVLS }}
6. Se connecter à votre {{ fr.DVLS }}.
1. Aller à ***Administration – Accès privilégié – Fournisseurs***, puis cliquer sur ***Ajouter***.
![Administration – Accès privilégié – Fournisseurs – Ajouter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2134.png)
1. Sélectionner ***Utilisateur Azure AD*** comme nouveau fournisseur PAM, puis cliquer sur ***Continuer***.
![Ajouter un nouveau fournisseur PAM – Utilisateur Azure AD](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8065.png)
1. Dans la fenêtre ***Fournisseur***, entrer un ***Nom*** (obligatoire) et une ***Description*** (facultative) pour votre nouveau fournisseur PAM Utilisateur Azure AD. Si besoin, sélectionner un ***Modèle de mot de passe*** dans la liste déroulante.
![Nom, Description et Modèle de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2135.png)

#### Dans le portail Azure
10. Dans l'***Aperçu*** de votre nouvelle inscription d'application, copier l'***ID de répertoire (locataire)***.
![Copier l'ID de répertoire (locataire)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2136.png)

#### Dans {{ fr.DVLS }}
11. Coller l'ID copié à l'étape précédente dans le champ ***ID de locataire***.
![ID de locataire](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2138.png)

#### Dans le portail Azure
12. Toujours dans l'***Aperçu*** de votre nouvelle inscription d'application, copier l'***ID d'application (client)***.
![Copier l'ID d'application (client)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2137.png)

#### Dans {{ fr.DVLS }}
13. Coller l'ID copié à l'étape précédente dans le champ ***ID client***.
![ID client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2139.png)

#### Dans le portail Azure
14. Dans ***Certificats et secrets***, cliquer sur ***Secrets client***, puis sur ***Nouveau secret client***.
![Nouveau secret client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8064.png)
1. Dans la fenêtre ***Ajouter un secret client***, entrer une ***Description*** et sélectionner une date d'expiration pour ce secret client, conformément à vos meilleures pratiques de sécurité internes.
![Ajouter un secret client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2140.png)
1. Cliquer sur ***Ajouter***.
1. Copier la ***Valeur*** de ce nouveau secret client en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté.
![Copier la valeur du secret client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8067.png)

#### Dans {{ fr.DVLS }}
18. Coller la valeur copiée à l'étape précédente dans le champ ***Clé secrète***.
![Clé secrète](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8068.png)
1. Tester la connexion pour voir si elle fonctionne, puis cliquer sur ***Sauvegarder***. La fenêtre ***Configuration de l'analyse*** apparaîtra : la laisser ouverte car elle sera remplie lors d'une étape ultérieure.

#### Dans le portail Azure
{% snippet, "badgeCaution" %}
L'attribution des autorisations API décrites aux étapes 20 à 26 n'est utile que si vous souhaitez effectuer la découverte de comptes Azure (analyse). Si ce n'est pas le cas, pour éviter d'attribuer des autorisations inutiles à l'application, passer à l'étape 27.
{% endsnippet %}

20. Dans ***Autorisations API***, cliquer sur ***Ajouter une autorisation***.
![Autorisations API – Ajouter une autorisation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2141.png)
1. Dans la fenêtre ***Demander des autorisations API***, sélectionner ***Microsoft Graph***.
![Microsoft Graph](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2142.png)
1. Cliquer sur ***Autorisations d'application***, puis cocher les cases à côté des autorisations API Microsoft Graph suivantes pour les sélectionner :
    * ***Group.Read.All***
    * ***RoleManagement.Readwrite.Directory***
    * ***User.Read.All***
   ![Sélectionner les autorisations API](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2143.png)

   {% snippet, "badgeInfo" %}
   Utiliser la barre de filtre au-dessus de la liste des autorisations pour trouver celles que vous recherchez.
   {% endsnippet %}

23. Une fois toutes les autorisations ci-dessus sélectionnées, cliquer sur ***Ajouter des autorisations*** en bas.
1. La liste des autorisations sera mise à jour pour inclure celles qui viennent d'être sélectionnées. Supprimer toute autre autorisation inutile en utilisant le bouton ellipsis à côté.
![Supprimer les autorisations inutiles](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2328.png)
1. Les autorisations nécessitent le consentement de l'administrateur. Cliquer sur le bouton ***Accorder le consentement admin pour < Votre Organisation >***, puis cliquer sur ***Oui*** pour confirmer.
![Accorder le consentement admin pour votre organisation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2329.png)
1. Pour confirmer que le consentement admin a été accordé, vérifier le ***Statut*** de vos autorisations.
![Statut accordé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2330.png)
1. Pour donner à l'application la capacité de faire tourner les mots de passe, quitter les ***Inscriptions d'applications*** pour revenir à Azure Active Directory, puis sélectionner ***Rôles et administrateurs*** dans le menu de gauche.
1. Dans ***Tous les rôles***, cliquer sur le rôle ***Administrateur d'assistance***. Si les comptes gérés par le module PAM sont membres de rôles ou groupes administrateurs, alors l'application a besoin du rôle ***Administrateur d'authentification privilégiée***.
![Tous les rôles – Administrateur d'assistance](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8072.png)
1. Dans ***Attributions***, cliquer sur le bouton ***Ajouter des attributions***.
![Administrateur d'assistance – Ajouter des attributions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8073.png)
1. Filtrer la liste pour trouver l'application Azure précédemment créée, la sélectionner, puis cliquer sur ***Ajouter***.
![Ajouter des attributions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8074.png)
Votre nouvelle attribution devrait maintenant être affichée dans ***Attributions***.

#### Dans {{ fr.DVLS }}
31. Les dernières étapes sont dédiées à la configuration d'une analyse pour ce fournisseur. Dans la fenêtre ***Configuration de l'analyse*** apparue lors de la sauvegarde de votre configuration de fournisseur à l'étape 19, sous ***Général***, entrer un ***Nom*** pour cette configuration.
![Nom de la configuration de l'analyse](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2144.png)
1. Sous ***Configuration***, sélectionner ***Groupes*** ou ***Rôles*** dans la liste déroulante ***Mode de recherche***. Vous pouvez filtrer le ***Mode de recherche*** pour des groupes ou rôles Azure AD spécifiques en cliquant sur le bouton ***Modifier*** à côté de la liste déroulante.
![Mode de recherche de la configuration de l'analyse](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8077.png)
1. Cliquer sur ***OK*** lorsque la configuration est terminée.
1. Dans {{ fr.DVLS }}, aller à ***Administration – Accès privilégié – Configurations d'analyse***. Si l'option ***Démarrer l'analyse à la sauvegarde*** a été laissée activée lors de la configuration de l'analyse, l'analyse devrait avoir démarré d'elle-même. Pendant le processus, la colonne ***Statut*** affiche une icône de sablier à côté de l'entrée d'analyse.
![Administration – Accès privilégié – Configurations d'analyse](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2145.png)
1. Lorsque le processus est terminé, l'icône de sablier change pour une coche verte. À ce moment-là, sélectionner les comptes et les importer dans les comptes privilégiés comme tout autre type de compte privilégié.
