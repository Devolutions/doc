---
eleventyComputed:
  title: Domaine
  description: Le domaine est utilisé pour authentifier l'utilisateur. C'est le moyen le plus sûr, flexible et facile à gérer. Pas besoin de synchroniser les utilisateurs entre le domaine et {{ fr.DVLS }}.
  order: 10
---
Le domaine est utilisé pour authentifier l'utilisateur. C'est le moyen le plus sûr, flexible et facile à gérer. Pas besoin de synchroniser les utilisateurs entre le domaine et {{ fr.DVLS }}. Avec l'option de Création Automatique de l'Utilisateur lors du Premier Connexion activée, lors de la première utilisation de la source de données {{ fr.DVLS }}, l'utilisateur sera créé et se verra attribuer des droits d'accès selon son rôle dans l'organisation tel que défini sur le domaine. Vous devez simplement accorder les permissions appropriées à vos groupes d'utilisateurs dans {{ fr.DVLS }}. Lors de l'authentification, nous validerons les groupes AD auxquels appartient l'utilisateur et pour ceux qui ont un groupe d'utilisateurs correspondant, nous accorderons les permissions à l'utilisateur.

Aller à ***Administration – Paramètres du serveur – Authentification – Domaine*** dans l'interface web de {{ fr.DVLS }}. 
![Authentification - Configurer Domaine](https://cdnweb.devolutions.net/docs/DVLS6009_2024_1.png)

## Paramètres

### Authentification de Domaine
| Option                     | Description                              |
|----------------------------|------------------------------------------|
| Domaine                     | Spécifier le nom de domaine de l'ordinateur distant. |
| Nom affiché               | Spécifier le nom de domaine qui sera affiché dans l'utilisation de l'application comme les messages informatifs.<br>Spécifier l'Unité Organisationnelle (OU) ou le Groupe Active Directory pour restreindre la recherche dans une zone spécifique de la structure Active Directory. Le format doit être le nom distinctif (CN=Users,DC=windjammer,DC=loc). |
| Informations d'identification d'administration | Ajouter les informations d'identification d'un domaine ou d'un compte de service pour accéder à la forêt Active Directory et obtenir des informations sur les comptes d'utilisateurs via des requêtes LDAP. Ce compte doit être capable de récupérer des informations sur les comptes d'utilisateurs et les appartenances aux groupes. Il peut nécessiter des privilèges plus élevés que d'être membre du groupe intégré Utilisateurs du Domaine Active Directory. Dans la plupart des cas, cela devrait suffire. |

### LDAPS
| Option         | Description                                                                      |
|----------------|----------------------------------------------------------------------------------|
| Activer LDAPS   | Activer la communication LDAP sur SSL.                                          |
| Port           | Par défaut : port de communication par défaut LDAPS.<br>Personnalisé : Définir une valeur de port spécifique. |

### Création Automatique d'Utilisateur
| Option                             | Description                                                                                   |
|------------------------------------|-----------------------------------------------------------------------------------------------|
| Créer automatiquement les utilisateurs dans {{ fr.DVLS }} | Créer automatiquement le compte d'utilisateur de domaine dans le {{ fr.DVLS }} lors de la première tentative de connexion. |
| Type d'utilisateur                          | Choisir entre utilisateur en lecture seule ou compte de type utilisateur.                                           |
| {{ fr.VLT }} par défaut               | Donnera accès à ce {{ fr.VLT }} à l'utilisateur.                                            |
| Uniquement de ce groupe AD            | Créera automatiquement l'utilisateur uniquement s'il est membre de ce groupe AD.                   |
| Format du nom d'utilisateur                    | Sélectionner le format du nom d'utilisateur qui sera créé dans la base de données.<ul><li>UPN : L'utilisateur sera créé en utilisant le format UPN ex : bill@windjammer.loc.</li><li>NetBios : L'utilisateur sera créé en utilisant le format NetBios ex : WINDJAMMER\bill.</li><li>Nom d'utilisateur : L'utilisateur sera créé en utilisant le nom de compte SAM.</li></ul> |