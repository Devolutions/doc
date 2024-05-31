---
eleventyComputed:
  title: Configurer l'authentification SSO avec Microsoft Azure
  description: Voici les étapes pour configurer Azure avec {{ fr.DHUBB }} pour l'authentification SSO et la provision des utilisateurs.
  keywords:
  - Office 365
  - Office365
  - SSO
  - Azure
---
Voici les étapes pour configurer Azure avec {{ fr.DHUBB }} pour l'authentification Single Sign-on (SSO) et la provision des utilisateurs.

{% snippet, "badgeCaution" %}
Un [compte Azure AD](https://azure.microsoft.com/) avec les droits appropriés est requis.
{% endsnippet %}

## Vérification de domaine

**Dans {{ fr.DHUBB }}**

1. Aller à ***Administration – Authentification – Domaine***, puis cliquer sur ***Ajouter un domaine***.
![Administration – Authentification – Domaine – Ajouter un domaine](https://cdnweb.devolutions.net/docs/HUBB2000_2024_1.png)
1. Remplir votre domaine, puis cliquer sur la coche pour démarrer le processus de vérification.
![Domaine](https://cdnweb.devolutions.net/docs/HUBB2001_2024_1.png)
1. Pour avoir plusieurs domaines, cliquer ***Ajouter un domaine*** une fois de plus, remplir votre autre domaine, puis cliquer sur la coche. Répéter ce processus pour chaque domaine que vous souhaitez ajouter.
![Plusieurs domaines](https://cdnweb.devolutions.net/docs/HUBB2002_2024_1.png)
1. Créer un [enregistrement DNS TXT](https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider) en utilisant le ***Nom d'hôte*** et la ***Valeur TXT*** fournis. Cela nous permet de vérifier la propriété des domaines fournis.
![Nom d'hôte et valeur TXT](https://cdnweb.devolutions.net/docs/HUBB2003_2024_1.png)

   Nous recommandons de vérifier que votre configuration est adéquate à travers des outils de requête DNS tels que [MXToolBox](https://mxtoolbox.com/SuperTool.aspx) ou [whatsmydns.net](https://www.whatsmydns.net/). L'exemple ci-dessous utilise l'outil de recherche TXT de MXToolBox. La première partie du nom de domaine doit correspondre au ***Nom d'hôte*** dans {{ fr.DHUB }} et l'enregistrement doit correspondre à la ***Valeur TXT*** dans {{ fr.DHUB }} également.
   {% snippet, "badgeCaution" %}
   Les enregistrements DNS TXT peuvent prendre du temps à se propager.
   {% endsnippet %}

   ![Enregistrement DNS TXT dans MXToolBox](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2236.png)
1. Attendre la vérification du domaine. Une fois la vérification réussie, une coche dans un cercle vert s'affichera à côté du domaine. Vous pouvez procéder à la configuration de l'authentification Single Sign-On (SSO) pendant le processus de vérification ; cependant, la provision des utilisateurs ne sera accessible qu'après la vérification du domaine.
![Domaine vérifié](https://cdnweb.devolutions.net/docs/HUBB2004_2024_1.png)

   {% snippet, "badgeCaution" %}
   Cette validation dure 48 heures et ne redémarre pas automatiquement après cette période. Si vous ne configurez pas votre enregistrement TXT dans ces 48 heures, votre statut de validation sera ***Expiré***. Si cela se produit, vous pouvez cliquer sur ***Réessayer***.

   Si vous rencontrez des problèmes lors de la tentative de vérification de votre domaine, consultez notre guide de dépannage de validation de domaine [Domain validation troubleshooting](/hub/kb/hub-business/troubleshooting-articles/domain-validation-troubleshooting/).
   {% endsnippet %}

## Configuration de l'authentification Single Sign-On (SSO)

1. Aller à ***Administration – Authentification – Single Sign-On (SSO)***, puis cliquer sur ***Microsoft Single Sign-On (SSO)***. Vous serez dirigé vers la page de configuration.
![Administration – Authentification – Single Sign-On (SSO) – Microsoft Single Sign-On (SSO)](https://cdnweb.devolutions.net/docs/HUBB2005_2024_1.png)

1. ***Nommer*** votre configuration SSO. Ce nom n'apparaîtra que dans votre menu de paramètres SSO {{ fr.DHUB }}. Le nom par défaut est "Microsoft".
![Nom de la configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2219.png)

   {% snippet, "badgeCaution" %}
   Ne fermez pas cette page de configuration, car les étapes suivantes vous montreront où trouver les informations à saisir dans ses champs.
   {% endsnippet %}

**Dans le portail Azure**

3. Dans une nouvelle page de navigateur Web, ouvrir votre [portail Microsoft Azure](https://azure.microsoft.com/) et vous connecter à votre compte.
1. Sélectionner ***Microsoft Entra ID*** ([anciennement Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/new-name)) dans la section ***Services Azure***. Si vous ne le voyez pas, cliquer sur ***Plus de services*** pour faire apparaître d'autres services.
![Service Microsoft Entra ID](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2331.png)
1. Dans ***Vue d'ensemble***, cliquer sur ***Ajouter***, puis sélectionner ***Application d'entreprise***.
![Ajouter une application d'entreprise](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4165.png)
1. Cliquer sur ***Créer votre propre application***.
![Créer votre propre application](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2138.png)
1. Entrer le nom de cette nouvelle application, puis cliquer sur ***Créer***.

   {% snippet, "badgeNotice" %}
   Nous recommandons d'inclure soit "Devolutions" soit "Hub" dans le nom.
   {% endsnippet %}

   ![Nom de l'application](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2139.png)

1. Dans les ***Propriétés***, définir le paramètre ***L'attribution est-elle requise ?*** selon vos besoins. Pour en savoir plus sur ce paramètre, survoler l'icône d'information à côté de celui-ci avec votre curseur.
![Propriétés – L'attribution est-elle requise](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2140.png)
1. Sauvegarder vos modifications si applicable en utilisant le bouton ***Enregistrer*** en haut.
1. Rester dans ***Propriétés***, cliquer sur ***inscription d'application*** dans le texte en haut.
![Propriétés – inscription d'application](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2141.png)
1. Sélectionner ***Authentification*** dans le menu de gauche, puis cliquer sur ***Ajouter une plateforme***.
![Authentification – Ajouter une plateforme](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2142.png)
1. Dans ***Configurer les plateformes***, sélectionner ***Web***.
![Configurer les plateformes – Web](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2143.png)

**Dans {{ fr.DHUBB }}**

13. Retourner sur la page ***Configurer l'authentification Single Sign-On (SSO)***, copier l'***URL de rappel*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté de celle-ci.
![Copier l'URL de rappel](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2220.png)

**Dans le portail Azure**

14. Retourner dans le portail Azure, coller l'***URL de rappel*** dans le champ ***URI de redirection***, puis cliquer sur ***Configurer*** en bas.
![URI de redirection](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2145.png)
1. Sélectionner ***Configuration des jetons*** dans le menu de gauche, puis cliquer sur ***Ajouter une revendication facultative***.
![Configuration des jetons – Ajouter une revendication facultative](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2147.png)
1. Sous ***Type de jeton***, sélectionner ***ID***. Ensuite, dans la liste, sélectionner les revendications suivantes :
    * ***email***
    * ***family_name***
    * ***given_name***
    * ***upn***
    * ***xms_pl***
    * ***xms_tpl***

![Ajouter une revendication facultative](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2148.png)

1. Cliquer sur ***Ajouter***.
1. Lorsque demandé, activer ***Activer l'email Microsoft Graph***, puis cliquer sur ***Ajouter***.
![Activer l'email Microsoft Graph](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2149.png)
1. Sélectionner ***Vue d'ensemble*** dans le menu de gauche, puis copier l'***ID d'application (client)*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté de celui-ci.
![Copier l'ID d'application (client)](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2159.png)

**Dans {{ fr.DHUBB }}**

20. Retourner sur la page ***Configurer l'authentification Single Sign-On (SSO)***, coller l'***ID d'application (client)*** de l'étape précédente dans le champ ***ID client***.
![ID client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2221.png)

**Dans le portail Azure**

21. Retourner dans le portail Azure, sélectionner ***Certificats et secrets*** dans le menu de gauche, puis, dans l'onglet ***Secrets client***, cliquer sur ***Nouveau secret client***.
![Certificats et secrets – Secrets client – Nouveau secret client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2151.png)
1. Dans la fenêtre ***Ajouter un secret client***, entrer une ***Description*** (par exemple, le nom de votre application d'entreprise) et sélectionner une date d'expiration pour ce secret client, conformément à vos meilleures pratiques de sécurité internes.
   {% snippet, "badgeCaution" %}
   Notez que lorsque le secret client expire, personne ne pourra se connecter au hub associé. Vous devrez alors créer un nouveau secret client. Nous recommandons de vous fixer un rappel de tâche avant la date d'expiration.
   {% endsnippet %}

   ![Ajouter un secret client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2152.png)

1. Cliquer sur ***Ajouter***.
1. Copier la ***Valeur*** de ce nouveau secret client en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté de celle-ci.
![Copier la valeur du secret client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2153.png)

**Dans {{ fr.DHUBB }}**

25. Retourner sur la page ***Configurer l'authentification Single Sign-On (SSO)***, coller la valeur du secret client ***Valeur*** de l'étape précédente dans le champ ***Clé secrète client***.
![Clé secrète client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2222.png)

**Dans le portail Azure**

26. Retourner dans le portail Azure, sélectionner ***Vue d'ensemble*** dans le menu de gauche, puis cliquer sur l'onglet ***Points de terminaison***.
![Vue d'ensemble – Points de terminaison](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2158.png)
1. Dans la fenêtre ***Points de terminaison***, copier l'URL du ***document de métadonnées OpenID Connect*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté de celle-ci.
![Copier l'URL du document de métadonnées OpenID Connect](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2160.png)

**Dans {{ fr.DHUBB }}**

28. Retourner sur la page ***Configurer l'authentification Single Sign-On (SSO)***, coller l'URL de l'étape précédente dans le champ ***URL de découverte***.
![URL de découverte](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2223.png)

1. Cliquer sur ***Tester la configuration*** pour vous assurer qu'elle est correcte. Une fenêtre contextuelle vous invitera à saisir vos identifiants de connexion.

   {% snippet, "badgeCaution" %}
   Si la page contextuelle n'apparaît pas, voir [La page de connexion Devolutions ne s'ouvre pas dans le navigateur](/hub/kb/general-knowledge/devolutions-login-page-does-not-open-browser/).
   {% endsnippet %}

   ![Tester la configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2224.png)
1. Si la connexion est réussie, votre compte se connectera avec Entra ID (anciennement Azure AD) et vous verrez un résumé de votre configuration.

1. Dans le ***Résumé*** de votre configuration, cliquer sur ***Enregistrer***.
![Enregistrer votre configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2225.png)

## Configuration de la provision

La vérification du domaine doit être complétée pour pouvoir configurer la provision.

Pour synchroniser vos utilisateurs et vos groupes d'utilisateurs de vos fournisseurs vers le hub, ajouter d'abord vos utilisateurs et groupes à votre application d'entreprise. Vous devez avoir une licence Azure Enterprise pour pouvoir synchroniser les groupes d'utilisateurs.

{% snippet, "badgeCaution" %}
Les groupes imbriqués ne sont pas pris en charge, ce qui signifie que la provision Azure ne synchronisera pas les utilisateurs membres du groupe imbriqué.
{% endsnippet %}

**Dans le portail Azure**

1. Sélectionner ***Utilisateurs et groupes*** dans le menu de gauche, puis cliquer sur ***Ajouter un utilisateur/groupe***.
![Utilisateurs et groupes – Ajouter un utilisateur/groupe](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2167.png)
1. Sous ***Ajouter une attribution***, cliquer sur ***Aucun sélectionné***.
![Ajouter une attribution](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2168.png)
1. Rechercher manuellement des utilisateurs et des groupes ou utiliser la barre de ***Recherche***. Cliquer sur ***Sélectionner*** lorsque vous avez terminé votre sélection.
![Sélection d'utilisateurs et de groupes](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2169.png)
1. Cliquer sur ***Attribuer*** lorsque votre sélection est complète.
![Attribuer des utilisateurs et des groupes](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2170.png)

Maintenant que vos utilisateurs et groupes ont été ajoutés, continuer avec la configuration de la provision.

5. Dans la gestion de votre application d'entreprise, aller à ***Provisioning*** et cliquer sur ***Commencer***.
![Provisioning – Commencer](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2163.png)

**Dans {{ fr.DHUBB }}**

6. Aller à ***Administration – Authentification – Provisioning*** et activer ***Provisioning SCIM***.
![Activer le Provisioning SCIM](https://cdnweb.devolutions.net/docs/HUBB2006_2024_1.png)

1. Dans la configuration de la synchronisation de provisionnement, copier l'***URL du locataire*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté de celle-ci.
![Copier l'URL du locataire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2227.png)

**Dans le portail Azure**

8. Définir le ***Mode de provisionnement*** sur ***Automatique***, puis coller l'URL de l'étape précédente dans le champ ***URL du locataire***.
![Mode de provisionnement et URL du locataire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2166.png)

**Dans {{ fr.DHUBB }}**

9. Copier le ***Jeton secret*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté de celui-ci.
![Copier le Jeton secret](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2228.png)

**Dans le portail Azure**

10. Coller le jeton de l'étape précédente dans le champ ***Jeton secret***.
![Jeton secret](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2164.png)
1. Tester la connexion pour vous assurer qu'elle fonctionne, puis cliquer sur ***Enregistrer***.
1. Sélectionner ***Provisioning*** dans le menu de gauche, puis cliquer sur ***Démarrer le provisionnement***.
![Démarrer le provisionnement](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2171.png)

**Dans {{ fr.DHUBB }}**

13. Cliquer sur ***Activer la synchronisation***.
![Activer la synchronisation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2229.png)
1. Lorsqu'on vous
