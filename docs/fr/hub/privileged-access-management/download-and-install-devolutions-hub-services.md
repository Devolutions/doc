---
eleventyComputed:
  title: Télécharger et installer {{ fr.DHUBS }}
  description: L'installateur de {{ fr.DHUBS }} facilite l'installation et l'intégration de nos modules, à commencer par celui de gestion des accès privilégiés (Beta). Une fois installé, le service permet la communication entre votre {{ fr.DHUBB }} et vos ressources internes.
---
L'installateur de {{ fr.DHUBS }} facilite l'installation et l'intégration de nos modules, à commencer par celui de gestion des accès privilégiés (Beta). Une fois installé, le service permet la communication entre votre {{ fr.DHUBB }} et vos ressources internes.

## Créer un Utilisateur d'application

1. Aller dans {{ fr.DHUB }}.
1. Cliquer ***Administration*** – ***Utilisateurs d'application***.  
![Administration – Utilisateurs d'application](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6044.png)  
1. Sélectionner ***Ajouter un utilisateur d'application (+)***.  
![Ajouter un utilisateur d'application (+)](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6045.png)  
1. Ajouter un nom et cliquer ***Ajouter***.  

L'option ***Activité*** située dans la fenêtre ***Utilisateur d'application*** sous ***Utilisateur*** permet d'activer l'utilisateur. L'option ***Peut accéder aux coffres des utilisateurs*** octroie l'accès aux coffres des utilisateurs à l'utilisateur.
![Utilisateur](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6046.png)  
***Groupe d'utilisateurs*** assigne l'utilisateur à des groupes.  
![Groupe d'utilisateurs](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6047.png)  
5. Enregistrer la ***Clé secrète d'application*** et la ***Clé de l'application*** dans votre presse-papiers ou dans un fichier PDF. Ils seront nécessaires lors de l'installation de {{ fr.DHUBS }}.
![Enregistrer la Clé secrète d'application et la Clé de l'application](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6048.png)  

## Modifier les Permissions pour l'Utilisateur d'application
1. Aller dans {{ fr.DHUB }}.
1. Cliquer ***Administration*** – ***Permissions du système***.
![Administration – Permissions du système](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6049.png)
1. Aller dans le formulaire de modification.
![Formulaire de modification](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6050.png)
1. Sélectionner ***Système***.
1. Sélectionner votre ***Utilisateur d'application*** dans le menu déroulant sous ***Gérer les fournisseurs d'accès privilégiés***. 
![Permissions du système – Gérer les fournisseurs d'accès privilégiés](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6057.png)

{% snippet icon.badgeInfo %}
Vous devez octroyer l'accès au coffre en fonction du ***Système*** ou du ***PAM***.
{% endsnippet %}

## Pour tous les coffres du système

1. Dans {{ fr.DHUB }}, aller dans ***Administration*** – ***Configuration et sécurité*** – ***Permissions du système***.
![Administration – Configuration et sécurité – Permissions du système](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6049.png)
1. Aller dans le formulaire de modification.
![Formulaire de modification](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6050.png)
1. Sélectionner ***Coffres***.
1. Choisir votre ***Utilisateur d'application*** dans le menu déroulant sous la section ***Collaborateurs***.
![Section Collaborateurs](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6055.png)

1. Cliquer ***Mise à jour*** pour fermer la fenêtre. 

## Pour un coffre PAM

1. Dans {{ fr.DHUB }}, aller dans ***Administration*** – ***Gestion*** – ***Coffres***.
![Administration – Gestion – Coffres](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6053.png)
1. Aller dans le formulaire de modification du coffre PAM.
1. Sélectionner l'onglet ***Modifier*** dans la section ***Permissions***.
1. Choisir votre ***Utilisateur d'application*** dans le menu déroulant sous la section ***Collaborateurs***.
![Section Collaborateurs](https://webdevolutions.blob.core.windows.net/docs/fr/hub/Hub6058.png)
1. Cliquer ***Mise à jour*** pour fermer la fenêtre.  

## Installation de {{ fr.DHUBS }} Beta

1. Télécharger [{{ fr.DHUBS }} Beta](https://devolutions.net/fr/password-hub/home/download/).
1. Lancer l'installateur.
![Installateur {{ fr.DHUBS }}](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6038.png) 
1. Cliquer ***Next***.
1. Lire le ***End-User License Agreement*** et cliquer ***I accept the terms in the License Agreement***.
1. Cliquer ***Next***.
1. Sélectionner ***PAM*** dans le ***Custom Setup***. Veuillez prendre note que la fonctionnalité ***Encryption*** n'est pas disponible pour le moment.
1. Cliquer ***Next***.
1. Entrer votre URL ***Host***.

1. Entrer votre ***Clé secrète d'application*** et la ***Clé de l'application*** enregistrées précédemment.
1. Cliquer ***Finir*** pour compléter l'installation.
1. Cliquer ***Tester la connexion***.

1. Cliquer ***Next*** si votre connexion est validée.
![Connexion validée](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6055.png) 
## Vérifier les journaux de {{ fr.DHUBS }}

Les journaux de {{ fr.DHUBS }} sont disponibles dans ***Windows Event Viewer***. Le service devrait être capable de se connecter au fournisseur précédemment créé.  

Il est également possible de voir {{ fr.DHUBS }} en tant que service dans la fenêtre ***Services*** de Windows. Vous pouvez également afficher l'état actuel et démarrer ou arrêter le service.
