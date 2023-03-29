---
title: Configurer l'authentification SSO avec Microsoft Azure
---
Voici les étapes pour configurer Azure avec Devolutions {{ fr.PHUB }} Business pour l'authentification SSO et le provisionnement des utilisateurs. 

{% snippet icon.badgeCaution %} 
Un [compte Azure AD](https://azure.microsoft.com/fr-fr/) avec les droits appropriés est requis. 
{% endsnippet %}
 
### Configurer l'authentification unique (SSO) 

**Dans Devolutions {{ fr.PHUB }} Business** 

1. Accéder à ***Administration – Authentification*** . 
1. Dans ***Authentification unique (SSO)*** , cliquer sur ***Configurer l'authentification unique (SSO)*** .  
![Administration – Authentification – Authentification unique (SSO) – Configurer l'authentification unique (SSO)](/img/fr/hub/Hub2146.png) 

Un fenêtre de configuration s'ouvrira.  
![Configurer l'authentification unique (SSO)](/img/fr/hub/Hub2147.png) 

{% snippet icon.badgeCaution %} 
Ne pas fermer cette fenêtre de configuration, car les étapes suivantes indiqueront où trouver les informations à saisir dans ces champs. 
{% endsnippet %}
 
**Dans le Portail Azure AD** 

3. Dans une nouvelle page de navigateur Web, ouvrir le [Portail Microsoft Azure AD](https://azure.microsoft.com/fr-ca/) et se connecter à votre compte. 
1. Sélectionner ***Azure Active Directory*** dans la section des ***Services Azure*** . S'il n'est pas visible, cliquer sur ***Autres services*** pour faire apparaître davantage de services.  
![Service Azure Active Directory](/img/fr/hub/Hub4072.png) 
1. Dans ***Vue d'ensemble*** , cliquer sur ***Ajouter*** , puis sur ***Application d'entreprise*** .  
![Ajouter une application d'entreprise](/img/fr/hub/Hub4095.png) 
1. Cliquer sur ***Créer votre propre application*** .  
![Créer votre propre application](/img/fr/hub/Hub2024.png) 
1. Saisir le nom de la nouvelle application, puis cliquer sur ***Créer*** . 
{% snippet icon.badgeNotice %} 
Il est suggéré d'inclure soit « Devolutions » ou « {{ fr.PHUB }} » dans le nom. 
{% endsnippet %}
 
![Nom de l'application](/img/fr/hub/Hub2025.png) 

8. Dans ***Propriétés*** , définir le paramètre ***Affectation requise ?*** selon vos besoins. Pour en savoir davantage sur ce paramètre, survoler l'icône d'information située à côté avec votre curseur.  
![Propriétés – Affectation requise](/img/fr/hub/Hub2026.png) 
1. Sauvegarder les modifications, le cas échéant, en utilisant le bouton ***Enregistrer*** en haut de la page. 
1. Toujours dans ***Propriétés*** , cliquer sur ***inscription de l'application*** dans le texte du haut.  
![Propriétés – inscription de l'application](/img/fr/hub/Hub2027.png) 
1. Sélectionner ***Authentification*** dans le menu latéral gauche, puis cliquer sur ***Ajouter une plateforme*** .  
![Authentification – Ajouter une plateforme](/img/fr/hub/Hub2028.png) 
1. Dans ***Configurer des plateformes*** , sélectionner ***Web*** .  
![Configurer des plateformes – Web](/img/fr/hub/Hub2029.png) 

**Dans Devolutions {{ fr.PHUB }} Business** 

13. De retour dans la fenêtre ***Configurer l'authentification unique (SSO)*** , copier l' ***URL de rappel*** en cliquant sur l'icône ***Copier dans le presse-papiers*** située à côté  
![Copier l'URL de rappel](/img/fr/hub/Hub2148.png) 

**Dans le Portail Azure AD** 

14. De retour dans Azure, coller l' ***URL de rappel*** dans le champ d' ***URI de redirection*** , puis cliquer sur ***Configurer*** au bas de la page.  
![URI de redirection](/img/fr/hub/Hub2031.png) 
1. Sélectionner ***Configuration du jeton*** dans le menu latéral gauche, puis cliquer sur ***Ajouter une revendication facultative*** .  
![Configuration du jeton – Ajouter une revendication facultative](/img/fr/hub/Hub2032.png) 
1. Sous ***Type de jeton*** , sélectionner ***ID*** . Ensuite, dans la liste, sélectionner les revendications suivantes :  

* ***email*** 
* ***family_name*** 
* ***given_name*** 
* ***upn*** 
* ***xms_pl*** 
* ***xms_tpl***  
![Ajouter une revendication facultative](/img/fr/hub/Hub2033.png) 

17. Cliquer sur ***Ajouter*** . 
1. Lorsque demandé, cocher ***Activez l'autorisation Microsoft Graph email*** , puis cliquer sur ***Ajouter*** .  
![Activez l'autorisation Microsoft Graph email](/img/fr/hub/Hub4076.png) 
1. Sélectionner ***Vue d'ensemble*** dans le menu latéral gauche, puis copier l' ***ID d'application (client)*** en cliquant sur l'icône ***Copier dans le Presse-papiers*** située à côté.  
![Copier l'ID d'application (client)](/img/fr/hub/Hub2034.png) 

**Dans Devolutions {{ fr.PHUB }} Business** 

20. De retour dans la fenêtre ***Configurer l'authentification unique (SSO)*** , coller l' ***ID d'application (client)*** de l'étape précédente dans le champ ***ID du client*** .  
![ID du client](/img/fr/hub/Hub2149.png) 

**Dans le Portail Azure AD** 

21. Sélectionner ***Certificats &amp; secrets*** dans le menu latéral gauche, puis, dans l'onglet ***Secrets client*** , cliquer sur ***Nouveau secret client*** .  
![Certificats & secrets – Secrets client – Nouveau secret client](/img/fr/hub/Hub2035.png) 
1. Dans la fenêtre ***Ajouter un secret client*** , saisir une ***Description*** (le nom de l'application d'entreprise, par exemple) et sélectionner une ***Date d'expiration*** pour ce secret client, conformément à vos meilleures pratiques de sécurité interne. 
{% snippet icon.badgeCaution %} 
Il est à noter que lorsque le secret client expire, personne ne pourra se connecter au {{ fr.PHUB }} associé. Il faudra alors créer un nouveau secret client. Il est recommandé de se fixer un rappel de tâche avant la date d'expiration. 
{% endsnippet %}
 
![Ajouter un secret client](/img/fr/hub/Hub2036.png) 

23. Cliquer sur ***Ajouter*** . 
1. Copier la ***Valeur*** de ce nouveau secret client en cliquant sur l'icône ***Copier dans le Presse-papiers*** située à côté.  
![Copier la valeur du secret client](/img/fr/hub/Hub2037.png) 

**Dans Devolutions {{ fr.PHUB }} Business** 

25. De retour dans la fenêtre ***Configurer l'authentification unique (SSO)*** , coller la ***Valeur*** du secret client de l'étape précédente dans le champ ***Secret du client*** .  
![Secret du client](/img/fr/hub/Hub2150.png) 

**Dans le Portail Azure AD** 

26. Sélectionner ***Vue d'ensemble*** dans le menu latéral gauche, puis cliquer sur l'onglet ***Points de terminaison*** .  
![Vue d'ensemble – Points de terminaison](/img/fr/hub/Hub2039.png) 
1. Dans la fenêtre ***Points de terminaison*** , copier l'URL du champ ***Document sur les métadonnées OpenID Connect*** en cliquant sur l'icône ***Copier dans le Presse-papiers*** située à côté.  
![Copier l'URL du Document sur les métadonnées OpenID Connect](/img/fr/hub/Hub2040.png) 

**Dans Devolutions {{ fr.PHUB }} Business** 

28. De retour dans la fenêtre ***Configurer l'authentification unique (SSO)*** , coller l'URL de l'étape précédente dans le champ ***URL de détection*** .  
![URL de détection](/img/fr/hub/Hub2151.png) 
1. Dans le champ ***Champs d'application de l'utilisateur*** , saisir &quot;User.Read&quot;.  
![Champs d'application de l'utilisateur](/img/fr/hub/Hub2152.png) 
1. Tester la connexion pour s'assurer que la configuration est correcte. Si c'est le cas, votre compte se connectera à Azure AD. 
1. Cliquer sur le bouton ***Enregistrer*** au bas de la fenêtre. 

### Configurer le provisionnement 

Pour synchroniser vos utilisateurs et groupes d'utilisateurs de vos fournisseurs vers Devolutions {{ fr.PHUB }} Business, suivez les étapes suivantes. 

**Dans Devolutions {{ fr.PHUB }} Business** 

1. Accéder à ***Administration – Authentification*** . 
2. Dans ***Approvisionnement*** , cliquer sur ***Générer le jeton SCIM*** .  
![Administration – Authentification – Approvisionnement – Générer le jeton SCIM](/img/fr/hub/Hub2153.png) 
{% snippet icon.badgeCaution %} 
Notez que ce jeton SCIM expirera dans les 365 jours suivant sa génération. À son expiration, le provisionnement cessera de fonctionner. Vous devrez alors régénérer un nouveau jeton SCIM. Nous vous recommandons de vous fixer une tâche de rappel avant la date d'expiration. 
{% endsnippet %}
 

3. <a name="3"></a>Dans la fenêtre ***Générer un jeton secret SCIM*** , copier l' ***URL locataire*** en cliquant sur l'icône ***Copier dans le presse-papiers*** située à côté.  
![Copier l'URL locataire](/img/fr/hub/Hub2155.png) 

**Dans le Portail Azure AD** 

4. Dans la gestion de l'application d'entreprise, sélectionner ***Approvisionnement*** dans le menu latéral gauche et cliquer sur ***Démarrer*** .  
![Approvisionnement – Démarrer](/img/fr/hub/Hub2044.png) 
1. Dans la liste déroulante ***Mode d'approvisionnement*** , sélectionner ***Automatique*** . Ensuite, coller l'URL de l'<a href="#3">étape 3</a> dans le champ ***URL de locataire*** .  
![Mode d'approvisionnement et URL de locataire](/img/fr/hub/Hub2045.png) 

**Dans Devolutions {{ fr.PHUB }} Business** 

6. Dans la fenêtre ***Générer un jeton secret SCIM*** , copier la ***Clé secrète du jeton*** en cliquant sur l'icône ***Copier dans le presse-papiers*** située à côté.  
![Copier le jeton SCIM](/img/fr/hub/Hub2154.png) 

**Dans le Portail Azure AD** 

7. Coller le jeton de l'étape précédente dans le champ ***Jeton secret*** .  
![Jeton secret](/img/fr/hub/Hub2047.png) 
1. Tester la connexion pour s'assurer qu'elle fonctionne, puis cliquer sur ***Enregistrer*** . 

### Ajouter un utilisateur/groupe 

Dans cette section, vous pourrez ajouter vos utilisateurs et groupes d'utilisateurs à votre application d'entreprise.  

{% snippet icon.badgeInfo %} 
Vous devez avoir une licence Azure Entreprise pour pouvoir synchroniser des groupes d'utilisateurs. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Les groupes imbriqués ne sont pas supportés, ce qui signifie que le provisionnement d'Azure ne synchronisera pas les utilisateurs membres de groupes imbriqués. 
{% endsnippet %}
 
**Dans le Portail Azure AD** 

1. Sélectionner ***Utilisateurs et groupes*** dans le menu latéral gauche, puis cliquer sur ***Ajouter un utilisateur/groupe*** .  
![Utilisateurs et groupes – Ajouter un utilisateur/groupe](/img/fr/hub/Hub2048.png) 
1. Sous ***Ajouter une attribution*** , cliquer sur ***Aucune sélection*** .  
![Ajouter une attribution](/img/fr/hub/Hub2049.png) 
1. Rechercher manuellement les utilisateurs et les groupes ou utiliser la barre de ***Recherche*** . Cliquer sur ***Sélectionner*** lorsque la sélection est terminée.  
![Sélection d'utilisateurs et de groupes](/img/fr/hub/Hub2050.png) 
1. Cliquer sur ***Attribuer*** lorsque votre sélection est complète.  
![Attribuer des utilisateurs et groupes](/img/fr/hub/Hub2051.png) 
1. Sélectionner ***Approvisionnement*** dans le menu latéral gauche, puis cliquer sur ***Démarrer le provisionnement*** .  
![Démarrer le provisionnement](/img/fr/hub/Hub2052.png) 

### Synchronisation entre Azure et {{ fr.PHUB }} 

**Dans Devolutions {{ fr.PHUB }} Business** 

1. Accéder à ***Administration – Authentification*** . 
1. Dans ***Approvisionnement*** , ***Activer la synchronisation*** .  
![Administration – Authentification – Approvisionnement – Activer la synchronisation](/img/fr/hub/Hub2156.png) 

La fréquence de provisionnement d'Azure est d'au plus 40 minutes. Les groupes d'utilisateurs, y compris leurs membres, se synchroniseront dans ce délai de provisionnement d'Azure. Nous vous recommandons de vérifier les premiers résultats du provisionnement.  

Dans ***Administration – Groupes d'utilisateurs*** , les groupes d'utilisateurs Azure seront ajoutés. Ils sont reconnaissables à l'icône du groupe ***Est synchronisée*** à côté du nom du groupe.  
![Groupes d'utilisateurs synchronisés](/img/fr/hub/Hub2055.png) 

Dans ***Administration – Utilisateurs*** , tous les utilisateurs du groupe d'utilisateurs Azure qui font déjà partie du Devolutions {{ fr.PHUB }} seront marqués comme synchronisés avec l'icône ***Est synchronisée*** à côté de leur nom. Tous les nouveaux utilisateurs faisant partie du groupe d'utilisateurs Azure synchronisé qui ne font pas partie du Devolutions {{ fr.PHUB }} seront suggérés comme de [nouvelles invitations](/fr/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/) dans ***Invitations nécessaires*** .  
![Invitations nécessaires et Utilisateurs synchronisés](/img/fr/hub/Hub2057.png) 

{% snippet icon.badgeNotice %} 
Tous les utilisateurs qui avaient déjà un {{ fr.DA }} verront les deux options de connexion : la méthode {{ fr.DA }} et la méthode Microsoft. 
{% endsnippet %}
 
![Se connecter avec votre Compte Devolutions ou avec Microsoft](/img/fr/hub/Hub4090.png) 
