---
eleventyComputed:
  title: Guide de configuration du portail Azure pour l'authentification Microsoft
  description: Configurer Azure et {{ fr.DVLS }} correctement pour utiliser l'authentification Microsoft.
---
Configurer Azure et {{ fr.DVLS }} correctement pour utiliser l'authentification Microsoft en suivant les instructions ci-dessous.
## Exigences
* {{ fr.DVLS }} Scheduler installé et en cours d'exécution.
* Un abonnement Microsoft Azure AD.
* Une application Web Azure AD pour l'application web {{ fr.DVLS }} et le cache.
## Création d'applications Azure AD et configuration Microsoft de {{ fr.DVLS }}
1. Se connecter à votre [Portail Microsoft Azure](https://portal.azure.com) en utilisant des identifiants d'administrateur.
1. Pour simplifier les étapes de configuration et pour copier et coller facilement tous les paramètres requis, veuillez avoir le Portail Azure et l'interface web de {{ fr.DVLS }} ouverts côte à côte dans ***Administration – Paramètres du serveur – Authentification – Authentification Microsoft***.
1. Une fois connecté, aller à ***Azure Active Directory – Propriétés***.
1. Cliquer sur le bouton ***Copier dans le presse-papiers*** à côté de la propriété ***Tenant ID***.
![Copier le Tenant ID](https://cdnweb.devolutions.net/docs/INTERFACE2037.png)
1. Coller cette valeur dans le champ ***Tenant ID*** de la page de configuration ***Authentification Microsoft*** de {{ fr.DVLS }}.
   {% snippet, "badgeInfo" %}
   L'option ***Utiliser un client ID spécifique pour les utilisateurs et le cache des groupes d'utilisateurs*** ne doit être cochée que pour prendre en charge les configurations lors de la migration d'une version antérieure de {{ fr.DVLS }}.
   {% endsnippet %}

   ![Coller le Tenant ID](https://cdnweb.devolutions.net/docs/DVLS2027_2024_2.png)

1. Cliquer sur ***Inscriptions d'applications*** dans la section du menu ***Gérer***.
![Inscriptions d'applications](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4403.png)
1. Créer l'application en utilisant le bouton ***Nouvelle inscription***.
![Nouvelle inscription](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4404.png)
1. Entrer un nom significatif pour l'application. Ce nom ne sera pas utilisé en dehors du Portail Azure.
1. Définir quels ***types de comptes pris en charge*** sont autorisés à se connecter. Généralement, sélectionner ***Comptes uniquement dans cet annuaire organisationnel*** est largement suffisant pour votre authentification Azure AD.
1. Définir l'***URI de redirection*** sur ***Web*** et entrer une URL valide, l'URL pour atteindre votre instance {{ fr.DVLS }}, avec **/api/external-provider-response** à la fin.
![URI de redirection](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5010.png)
1. Cliquer sur le bouton ***Enregistrer***.
1. Cliquer sur le bouton ***Copier dans le presse-papiers*** à côté de ***l'ID d'application (client)***.
![Copier l'ID d'application](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4407.png)
1. Coller ***l'ID d'application (client)*** dans le champ ***Client ID*** de la section de l'application web dans la page de configuration ***Authentification Microsoft*** de {{ fr.DVLS }}.
![Coller l'ID d'application](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4984.png)
1. Sélectionner l'onglet ***Authentification*** de l'application web Azure et activer les ***ID tokens*** sous la section ***Implicit grant and hybrid flows***.
![Activer les ID tokens](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4418.png)
1. Cliquer sur ***Enregistrer***.
1. Sélectionner l'onglet ***Certificats & secrets*** et cliquer sur ***Nouveau secret client***.
![Certificats & secrets – Nouveau secret client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5011.png)
1. Entrer une description et définir une date d'expiration. Ensuite, cliquer sur le bouton ***Ajouter***.
![Configuration du secret client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4423.png)
1. Cliquer sur le bouton ***Copier dans le presse-papiers*** de la ***Valeur***. Assurez-vous de sauvegarder la ***Valeur*** dans un endroit sûr car une fois que vous passerez à une autre page du portail Azure, le bouton de copie ne sera plus disponible.
![Copier la valeur du secret client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4424.png)
1. Coller la ***Valeur*** dans le champ ***Clé secrète*** de la section de l'application web dans la page de configuration ***Authentification Microsoft*** de {{ fr.DVLS }}.
![Coller la valeur du secret client](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4985.png)
1. Sélectionner l'onglet ***Permissions de l'API*** de l'application web Azure et cliquer sur ***Ajouter une permission***.
![Permissions de l'API – Ajouter une permission](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4427.png)
1. Sélectionner ***Microsoft Graph***.
![Microsoft Graph](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4428.png)
1. Sélectionner ***Permissions d'application***.
![Permissions d'application](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4429.png)
1. Sélectionner ***Group.Read.All*** sous la section ***Groupe*** et ***User.Read.All*** sous la section ***Utilisateur***.
![Permission Group.Read.All](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4986.png)
![Permission User.Read.All](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4987.png)
1. Cliquer sur ***Ajouter des permissions***.
1. Sélectionner la permission ***User.Read*** et la supprimer en utilisant le bouton ***Supprimer la permission***.
![Supprimer la permission User.Read](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4432.png)
1. Confirmer la suppression en cliquant sur ***Oui, supprimer*** puisque cette permission n'est pas requise pour l'application de synchronisation.
1. Si le ***Statut*** des permissions ***User.Read.All*** et ***Group.Read.All*** est ***Non accordé***, un administrateur doit donner son consentement.
   {% snippet, "shieldCaution" %}
   Il est possible que les permissions nouvellement ajoutées nécessitent le consentement d'un administrateur Azure. Si le compte utilisé pour créer l'application est déjà un administrateur dans Azure, cliquer sur ***Accorder le consentement d'administration pour &lt;votre organisation&gt;***.
   {% endsnippet %}

   ![Accorder le consentement d'administration pour votre organisation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8010.png)

1. Si vous avez configuré votre application Entra ID pour utiliser des ID tokens, activer le paramètre ***Utiliser uniquement le TokenID pour l'authentification***.
1. Votre page de configuration devrait ressembler à la capture d'écran ci-dessous. Cliquer sur ***Enregistrer***.
![Enregistrer votre configuration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4981.png)

Vous devriez maintenant être capable d'utiliser le bouton ***Microsoft*** sur l'interface web.
{% snippet, "badgeCaution" %}
Après avoir activé l'authentification Microsoft, il peut falloir un certain temps pour que le cache se charge avant de pouvoir importer des utilisateurs et des groupes d'utilisateurs. Si le problème persiste, veuillez consulter [Impossible d'importer des utilisateurs ou des groupes Azure AD](/server/kb/troubleshooting-articles/unable-import-azure-ad-users-groups/) pour le dépannage.
{% endsnippet %}

![Méthode d'authentification Microsoft](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4980.png)

Suite au processus de connexion, vous pouvez recevoir cette invite pour autoriser l'application à lire les comptes d'utilisateurs et les groupes. Vous devez cocher l'option ***Consentir au nom de votre organisation*** puis cliquer sur ***Accepter***.
![Consentir au nom de votre organisation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8108.png)