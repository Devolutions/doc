---
eleventyComputed:
  title: Guide de configuration du portail Azure pour l'authentification Microsoft
  description: Configurer Azure et {{ fr.DVLS }} correctement pour utiliser l'authentification Microsoft.
---
Configurer Azure et {{ fr.DVLS }} correctement pour utiliser l'authentification Microsoft en suivant les instructions ci-dessous.

## Exigences
* {{ fr.DVLS }} scheduler installé et en cours d'exécution
* Un abonnement Microsoft Azure AD
* Une application web Azure AD pour l'application web {{ fr.DVLS }} et le cache

## Création des applications Azure AD et configuration Microsoft de {{ fr.DVLS }}

Pour simplifier les étapes de configuration et pour copier et coller facilement tous les paramètres requis, garder les pages web de {{ fr.DVLS }} et du portail Azure ouvertes côte à côte tout au long du processus.

#### Dans {{ fr.DVLS }}
1. Se connecter à votre {{ fr.DVLS }} et naviguer vers ***Administration – Paramètres du serveur – Authentification***.
1. Sous ***Modes d'authentification***, s'assurer que ***Authentifier avec un utilisateur Microsoft*** est activé.
1. Sous ***Configuration***, cliquer sur ***Authentification Microsoft***.
![Administration – Paramètres du serveur – Authentification – Authentification Microsoft](https://cdnweb.devolutions.net/docs/DVLS2035_2024_2.png)

#### Dans le portail Azure
4. Se connecter à votre [portail Microsoft Azure](https://portal.azure.com) en utilisant des identifiants d'administrateur.
1. Une fois connecté, sélectionner ***Microsoft Entra ID*** dans la section des services Azure. Si vous ne le voyez pas, cliquer sur ***Plus de services*** pour faire apparaître d'autres services ou le rechercher dans la barre de recherche.
![Service Microsoft Entra ID](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2331.png)
1. Dans ***Propriétés***, copier la valeur ***Tenant ID***.
![Copier le Tenant ID](https://cdnweb.devolutions.net/docs/INTERFACE2037.png)

#### Dans {{ fr.DVLS }}
7. Coller cette valeur dans le champ ***Tenant ID*** de la page de configuration ***Authentification Microsoft*** de {{ fr.DVLS }}.
   {% snippet, "badgeInfo" %}
   L'option ***Utiliser un client ID spécifique pour les utilisateurs et le cache des groupes d'utilisateurs*** ne doit être cochée que pour prendre en charge les configurations lors de la migration d'une version antérieure de {{ fr.DVLS }}.
   {% endsnippet %}

   ![Coller le Tenant ID](https://cdnweb.devolutions.net/docs/DVLS2031_2024_2.png)

#### Dans le portail Azure
8. Dans la section du menu ***Gérer***, cliquer sur ***Inscriptions d'applications*** puis sur ***Nouvelle inscription***.
![Inscriptions d'applications – Nouvelle inscription](https://cdnweb.devolutions.net/docs/INTERFACE2038.png)
1. Entrer un nom significatif pour l'application. Ce nom ne sera pas utilisé en dehors du portail Azure.
1. Définir quels ***Types de comptes pris en charge*** sont autorisés à se connecter. Généralement, sélectionner ***Comptes dans cet annuaire organisationnel uniquement*** est largement suffisant pour votre authentification Azure AD.
1. Définir l'***URI de redirection*** sur ***Web*** et entrer une URL valide, l'URL pour atteindre votre instance {{ fr.DVLS }}, avec **/api/external-provider-response** à la fin.
![Enregistrer une application](https://cdnweb.devolutions.net/docs/INTERFACE2040.png)
1. Cliquer sur ***Enregistrer***.
1. Cliquer sur ***Copier dans le presse-papiers*** à côté de ***Application (client) ID***.
![Copier l'ID de l'application](https://cdnweb.devolutions.net/docs/INTERFACE2041.png)

#### Dans {{ fr.DVLS }}
14. Coller l'***Application (client) ID*** dans le champ ***Client ID***.
![Coller l'ID de l'application](https://cdnweb.devolutions.net/docs/DVLS2032_2024_2.png)

#### Dans le portail Azure
15. Dans la section ***Authentification***, sous ***Flux implicite et hybrides***, activer ***Jeton d'accès*** et ***Jeton ID***.
![Activer les jetons d'accès et jetons ID](https://cdnweb.devolutions.net/docs/INTERFACE2042.png)
1. Cliquer sur ***Enregistrer***.
1. Dans la section ***Certificats & secrets***, cliquer sur ***Nouveau secret client***.
![Certificats & secrets – Nouveau secret client](https://cdnweb.devolutions.net/docs/INTERFACE2043.png)
1. Entrer une description et définir une date d'expiration.
![Ajouter un secret client](https://cdnweb.devolutions.net/docs/INTERFACE2044.png)
1. Cliquer sur ***Ajouter***.
1. Copier la ***Valeur***. Assurez-vous de sauvegarder la ***Valeur*** dans un endroit sûr avant de passer à une autre page du portail Azure, car le bouton de copie ne sera plus disponible.
![Copier la valeur du secret client](https://cdnweb.devolutions.net/docs/INTERFACE2045.png)

#### Dans {{ fr.DVLS }}
21. S'assurer que le paramètre ***Utiliser uniquement le TokenID pour l'authentification*** est désactivé. Ce paramètre ne doit être activé que si vous avez activé les jetons ID dans Azure, mais pas les jetons d'accès, pour des raisons de rétrocompatibilité.
1. Coller la ***Valeur*** dans le champ ***Valeur du secret***.
![Coller la valeur du secret client](https://cdnweb.devolutions.net/docs/DVLS2034_2024_2.png)

#### Dans le portail Azure
23. Dans la section ***Permissions API***, cliquer sur ***Ajouter une permission***.
![Permissions API – Ajouter une permission](https://cdnweb.devolutions.net/docs/INTERFACE2046.png)
1. Sélectionner ***Microsoft Graph***.
![Microsoft Graph](https://cdnweb.devolutions.net/docs/INTERFACE2047.png)
1. Sélectionner ***Permissions d'application***.
![Permissions d'application](https://cdnweb.devolutions.net/docs/INTERFACE2048.png)
1. Sélectionner ***Group.Read.All*** sous la section ***Groupe*** et ***User.Read.All*** sous la section ***Utilisateur***.
![Permission Group.Read.All](https://cdnweb.devolutions.net/docs/INTERFACE2049.png)
![Permission User.Read.All](https://cdnweb.devolutions.net/docs/INTERFACE2050.png)
1. Cliquer sur ***Ajouter des permissions***.
1. Cliquer sur les trois points à côté de la permission ***User.Read*** et la supprimer.
![Supprimer la permission User.Read](https://cdnweb.devolutions.net/docs/INTERFACE2051.png)
1. Confirmer la suppression en cliquant sur ***Oui, supprimer*** puisque cette permission n'est pas requise pour l'application de synchronisation.
1. Si le ***Statut*** des permissions ***User.Read.All*** et ***Group.Read.All*** est défini sur ***Non accordé***, un administrateur doit donner son consentement. Si le compte utilisé pour créer l'application est déjà un administrateur dans Azure, cliquer sur ***Accorder le consentement d'administration pour &lt;votre organisation&gt;***.
![Accorder le consentement d'administration pour votre organisation](https://cdnweb.devolutions.net/docs/INTERFACE2052.png)

#### Dans {{ fr.DVLS }}
31. Cliquer sur ***Enregistrer***.

Vous devriez maintenant être capable d'utiliser le bouton ***Microsoft*** sur l'interface web.
{% snippet, "badgeCaution" %}
Après avoir activé l'authentification Microsoft, il peut falloir un certain temps pour que le cache se charge avant de pouvoir importer des utilisateurs et des groupes d'utilisateurs. Si le problème persiste, veuillez consulter [Impossible d'importer des utilisateurs ou des groupes Azure AD](/server/kb/troubleshooting-articles/unable-import-azure-ad-users-groups/) pour le dépannage via la {{ fr.DVLSCONSOLE }}.
{% endsnippet %}

![Méthode d'authentification Microsoft](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4980.png)

Suivant le processus de connexion, vous pourriez recevoir une invite pour autoriser l'application à lire les comptes utilisateurs et les groupes. Cocher la case ***Consentir au nom de votre organisation*** puis cliquer sur ***Accepter***.
![Accepter les permissions](https://cdnweb.devolutions.net/docs/INTERFACE2053.png)