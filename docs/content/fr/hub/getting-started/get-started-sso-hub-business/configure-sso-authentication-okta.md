---
eleventyComputed:
  title: Configurer l'authentification SSO avec Okta
  description: Voici les étapes pour configurer Okta avec {{ fr.DHUBB }} pour l'authentification SSO.
  keywords:
  - SSO
  - Okta
---
Voici les étapes pour configurer Okta avec {{ fr.DHUBB }} pour l'authentification SSO.

{% snippet, "badgeCaution" %}
Un [compte Okta](https://www.okta.com/) avec les droits appropriés est requis.
{% endsnippet %}

## Vérification de domaine

**Dans {{ fr.DHUBB }}**

1. Aller à ***Administration – Authentification – Domaine***, puis cliquer sur ***Ajouter un domaine***.
![Administration – Authentification – Domaine – Ajouter un domaine](https://cdnweb.devolutions.net/docs/HUBB2000_2024_1.png)
1. Remplir votre domaine, puis cliquer sur la coche pour démarrer le processus de vérification.
![Domaine](https://cdnweb.devolutions.net/docs/HUBB2001_2024_1.png)
   {% snippet, "shieldInfo" %} 
   Pour des raisons de sécurité, seuls les courriels se terminant par le nom de votre domaine seront autorisés à se connecter à {{ fr.DHUB }} en utilisant l'authentification Okta. Par exemple, si les courriels de vos employés sont au format "bob@windjammer.co", votre domaine est "windjammer.co".
   {% endsnippet %}
1. Pour avoir plusieurs domaines, cliquer à nouveau sur ***Ajouter un domaine***, remplir votre autre domaine, puis cliquer sur la coche. Répéter ce processus pour chaque domaine que vous souhaitez ajouter.
![Plusieurs domaines](https://cdnweb.devolutions.net/docs/HUBB2002_2024_1.png)
1. Créer un [enregistrement DNS TXT](https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider) en utilisant le ***Nom d'hôte*** et la ***Valeur TXT*** fournis. Cela nous permet de vérifier la propriété des domaines fournis.
![Nom d'hôte et valeur TXT](https://cdnweb.devolutions.net/docs/HUBB2003_2024_1.png)

   Nous recommandons de vérifier que votre configuration est adéquate à travers des outils de requête DNS tels que [MXToolBox](https://mxtoolbox.com/SuperTool.aspx) ou [whatsmydns.net](https://www.whatsmydns.net/). L'exemple ci-dessous utilise l'outil de recherche TXT de MXToolBox. La première partie du nom de domaine doit correspondre au ***Nom d'hôte*** dans {{ fr.DHUB }} et l'enregistrement doit correspondre à la ***Valeur TXT*** dans {{ fr.DHUB }} également.
   {% snippet, "badgeCaution" %}
   Les enregistrements DNS TXT peuvent prendre du temps à se propager.
   {% endsnippet %}

   ![Enregistrement DNS TXT dans MXToolBox](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2236.png)
1. Attendre la vérification du domaine. Une fois la vérification réussie, une coche dans un cercle vert s'affichera à côté du domaine. Vous pouvez procéder à la configuration de l'authentification unique (SSO) pendant le processus de vérification ; cependant, le provisionnement des utilisateurs ne sera accessible qu'après la vérification du domaine.
![Domaine vérifié](https://cdnweb.devolutions.net/docs/HUBB2004_2024_1.png)

   {% snippet, "badgeCaution" %}
   Cette validation dure 48 heures et ne redémarre pas automatiquement après cette période. Si vous ne configurez pas votre enregistrement TXT dans ces 48 heures, votre statut de validation sera ***Expiré***. Si cela se produit, vous pouvez cliquer sur ***Réessayer***.

   Si vous rencontrez des problèmes lors de la tentative de vérification de votre domaine, consultez notre guide de dépannage de la validation de domaine [Domain validation troubleshooting](/hub/kb/hub-business/troubleshooting-articles/domain-validation-troubleshooting/).
   {% endsnippet %}


## Configuration de l'authentification unique (SSO)

1. Aller à ***Administration – Authentification – Authentification unique (SSO)***, puis cliquer sur ***Okta Authentification unique (SSO)***. Vous serez dirigé vers la page de configuration.
![Administration – Authentification – Authentification unique (SSO) – Okta Authentification unique (SSO)](https://cdnweb.devolutions.net/docs/HUBB2007_2024_1.png)

1. ***Nommer*** votre configuration SSO. Ce nom n'apparaîtra que dans votre menu de paramètres SSO {{ fr.DHUB }}. Le nom par défaut est "Okta".
![Nom de la configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2334.png)

   {% snippet, "badgeCaution" %}
   Ne fermez pas cette page de configuration, car les étapes suivantes vous montreront où trouver les informations à entrer dans ses champs.
   {% endsnippet %}

**Dans Okta**

3. Se connecter à votre compte Okta.
1. Dans ***Applications***, cliquer sur ***Créer une intégration d'application***.
![Applications – Créer une intégration d'application](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2238.png)
1. Pour la ***Méthode de connexion***, sélectionner ***OIDC - OpenID Connect***.
![Méthode de connexion – OIDC - OpenID Connect](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2239.png)
1. Pour le ***Type d'application***, sélectionner ***Application Web***.
![Type d'application – Application Web](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2240.png)
1. Cliquer sur ***Suivant***. La page de paramètres ***Nouvelle intégration d'application Web*** apparaîtra.
1. Sous ***Paramètres généraux***, entrer un ***Nom d'intégration d'application***.
   ![Nom d'intégration d'application](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2249.png)

   {% snippet, "badgeNotice" %}
   Le nom de l'application n'a pas besoin de correspondre à celui dans {{ fr.DHUB }}. Nous recommandons d'inclure soit "Devolutions" soit "Hub" dans le nom.
   {% endsnippet %}

1. Dans ***Type de subvention***, cocher ***Jeton d'actualisation*** et ***Implicite (hybride)***.
![Type de subvention](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2250.png)

**Dans {{ fr.DHUBB }}**

10. De retour sur la page ***Configurer l'authentification unique (SSO)***, copier l'***URL de rappel*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté.
![Copier l'URL de rappel](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2336.png)

**Dans Okta**

11. De retour dans Okta, coller l'***URL de rappel*** dans le champ ***URI de redirection de connexion***.
![URI de redirection de connexion](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2251.png)

**Dans {{ fr.DHUBB }}**

12. De retour sur la page ***Configurer l'authentification unique (SSO)***, copier l'***URL de redirection de déconnexion*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté.
![Copier l'URL de redirection de déconnexion](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2335.png)

**Dans Okta**

13. De retour dans Okta, coller l'***URL de redirection de déconnexion*** dans le champ ***URI de redirection de déconnexion***.
![URI de redirection de déconnexion](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2252.png)

1. Sous ***Attributions***, sélectionner l'option ***Accès contrôlé*** qui convient le mieux à vos besoins. Ce choix est laissé à votre discrétion.

   {% snippet, "badgeCaution" %}
   Si vous choisissez de ***Permettre à tout le monde dans votre organisation d'accéder***, ne cochez **pas** l'option ***Activer l'accès immédiat avec le mode de courtage fédéré***, car cela vous empêcherait d'activer le provisionnement SCIM à l'avenir. Si vous choisissez de ***Limiter l'accès à certains groupes sélectionnés*** ou de ***Sauter l'attribution de groupe pour l'instant***, vous devez attribuer manuellement à cette application les utilisateurs que vous souhaitez autoriser à se connecter à votre {{ fr.DHUBB }} via Okta.
   {% endsnippet %}

   ![Attributions](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2253.png)

1. Cliquer sur ***Enregistrer***. Vous serez redirigé vers votre nouvelle application SSO.
1. Copier l'***ID client*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté.
![Copier l'ID client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2254.png)

**Dans {{ fr.DHUBB }}**

17. De retour sur la page ***Configurer l'authentification unique (SSO)***, coller l'***ID client*** de l'étape précédente dans le champ du même nom.
![ID client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2337.png)

**Dans Okta**

18. De retour dans Okta, copier le ***Secret client*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté.
![Copier le Secret client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2256.png)

   {% snippet, "badgeCaution" %}
   Ne fermez pas cette page de configuration, car les étapes suivantes nécessiteront de faire d'autres modifications.
   {% endsnippet %}

**Dans {{ fr.DHUBB }}**

19. De retour sur la page ***Configurer l'authentification unique (SSO)***, coller le ***Secret client*** de l'étape précédente dans le champ ***Clé secrète client***.
![Clé secrète client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2338.png)
1. Dans ***URL de découverte***, entrer l'URL que vous utilisez pour accéder à Okta, sans la partie "-admin".

   {% snippet, "badgeCaution" %}
   Ne testez pas encore la connexion, car quelques étapes supplémentaires sont nécessaires dans Okta.
   {% endsnippet %}

   ![URL de découverte](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2339.png)

**Dans Okta**

21. Cliquer sur ***Modifier*** dans la section ***Paramètres généraux***.
![Modifier les Paramètres généraux](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2260.png)
1. Définir le ***Comportement du jeton d'actualisation*** sur ***Faire tourner le jeton après chaque utilisation***.
![Faire tourner le jeton après chaque utilisation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2261.png)
1. Cliquer sur ***Enregistrer***.
1. Dans l'onglet ***Attribution*** en haut, s'assurer que chaque utilisateur que vous souhaitez utiliser pour tester la configuration est attribué à l'application. Pour plus de détails, voir la documentation d'Okta sur la gestion des utilisateurs et l'attribution d'applications.
![Attribution](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2262.png)

**Dans {{ fr.DHUBB }}**

25. Tester la configuration dans {{ fr.DHUB }}. Une nouvelle fenêtre devrait s'ouvrir pour vous connecter à {{ fr.DHUB }} via Okta. Vous recevrez un message de succès lors de la connexion.

   {% snippet, "badgeCaution" %}
   Si la page popup n'apparaît pas, voir [La page de connexion Devolutions ne s'ouvre pas dans le navigateur](/hub/kb/general-knowledge/devolutions-login-page-does-not-open-browser/).
   {% endsnippet %}

26. Cliquer sur ***Enregistrer*** dans le ***Résumé*** de votre configuration Okta SSO.
![Enregistrer la configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2340.png)

Vous devriez maintenant voir que la configuration SSO a une icône de coche verte à côté. Cela signifie que votre configuration SSO via Okta est maintenant activée sur votre hub.
![Configuration SSO active](https://cdnweb.devolutions.net/docs/HUBB2008_2024_1.png)

## Configuration du provisionnement

Synchroniser vos utilisateurs et groupes d'utilisateurs de vos fournisseurs vers le hub.

### Paramètres

{% snippet, "badgeInfo" %}
Cette fonctionnalité sera disponible prochainement !
{% endsnippet %}
