---
eleventyComputed:
  title: Télécharger et installer {{ fr.DHUBS }}
  order: 10
  description: L'installateur {{ fr.DHUBS }} facilite l'installation et l'intégration de nos modules, tels que le module de Gestion des Accès Privilégiés (Beta).
---
L'installateur {{ fr.DHUBS }} facilite l'installation et l'intégration de nos modules, tels que le module de Gestion des Accès Privilégiés (Beta). Le service installé établira la communication entre votre {{ fr.DHUBB }} et vos ressources internes.

## Créer une Identité d'Application

1. Aller à {{ fr.DHUB }}.
1. Cliquer ***Administration*** – ***Identités d'Application***.
![Administration – Identités d'Application](https://cdnweb.devolutions.net/docs/HUBB6004_2024_1.png)
1. Sélectionner ***Ajouter Identité d'Application (+)***.
![Ajouter Identité d'Application (+)](https://cdnweb.devolutions.net/docs/HUBB6003_2024_1.png)
1. Entrer un nom et cliquer ***Ajouter***.
1. Sauvegarder le ***Secret d'Application*** et la ***Clé d'Application*** donnés dans votre presse-papiers ou en tant que fichier PDF. Ils seront nécessaires lors de l'installation de {{ fr.DHUBS }}.
![Sauvegarder le Secret d'Application et la Clé d'Application donnés](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6043.png)

## Modifier les Permissions pour les Identités d'Application

1. Aller à {{ fr.DHUB }}.
1. Cliquer ***Administration*** – ***Permissions Système***.
![Administration – Permissions Système](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6048.png)
1. Aller au formulaire d'édition.
![Formulaire d'édition](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6049.png)
1. Sélectionner ***Système***.
1. Sélectionner votre ***Utilisateur d'Application*** dans le menu déroulant sous ***Gérer les tâches d'accès privilégié*** et ***Gérer les fournisseurs d'accès privilégié***.
![Permissions Système – Gérer les tâches d'accès privilégié et Gérer les fournisseurs d'accès privilégié](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6060.png)

{% snippet, "badgeInfo" %}
Vous devez accorder la permission sur le {{ fr.VLT }} soit au ***Niveau Système*** soit au ***Niveau individuel PAM {{ fr.VLT }}***.
{% endsnippet %}

### Pour tous les {{ fr.VLT }}s système

1. Dans {{ fr.DHUB }}, aller à ***Administration*** – ***Configuration & Sécurité*** – ***Permissions Système***.
![Administration – Configuration & Sécurité – Permissions Système](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6048.png)
1. Aller au formulaire d'édition.
![Formulaire d'édition](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6049.png)
1. Sélectionner ***{{ fr.VLT_MAJ }}s***.
1. Choisir votre ***Utilisateur d'Application*** dans le menu déroulant sous la section ***Contributeur***.
![Section Contributeur](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6050.png)
1. Cliquer ***Mettre à jour*** pour fermer la fenêtre.

### Pour un PAM {{ fr.VLT }} spécifique

1. Dans {{ fr.DHUB }}, aller à ***Administration – Gestion – {{ fr.VLT_MAJ }}s***.
![Administration – Gestion – {{ fr.VLT_MAJ }}s](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6044.png)
1. Sélectionner ***Ajouter PAM {{ fr.VLT }}*** dans le menu pour créer votre PAM {{ fr.VLT }}.
![Administration – Gestion – {{ fr.VLT_MAJ }}s – Ajouter PAM {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6059.png)
1. Sélectionner l'onglet ***Modifier*** dans la section ***Permissions***.
1. Choisir votre ***Utilisateur d'Application*** dans le menu déroulant sous la section ***Contributeur***.
![Section Contributeur](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6056.png)
1. Cliquer ***Mettre à jour*** pour fermer la fenêtre.

## Installation de {{ fr.DHUBS }} Beta

1. [Télécharger {{ fr.DHUBS }} Beta](https://devolutions.net/password-hub/home/download/).
1. Lancer l'installateur téléchargé.
![Configuration de {{ fr.DHUBS }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6038.png)
1. Cliquer ***Suivant***.
1. Lire le ***Contrat de Licence Utilisateur Final*** et cliquer ***J'accepte les termes du Contrat de Licence***.
1. Cliquer ***Suivant***.
1. Sélectionner ***PAM*** dans la ***Configuration Personnalisée***. Notez que la fonctionnalité ***Chiffrement*** est actuellement indisponible.
1. Cliquer ***Suivant***.
1. Entrer votre URL ***Hôte***.
1. Entrer le ***Secret d'Application*** et la ***Clé d'Application*** précédemment sauvegardés.
1. Cliquer ***Terminer*** pour compléter l'installation.
1. Cliquer ***Tester la Connexion***.
1. Si votre connexion est réussie, appuyer sur ***Suivant***.
![Connexion réussie](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6055.png)
## Vérifier les journaux de {{ fr.DHUBS }}

Les journaux de {{ fr.DHUBS }} sont disponibles dans ***Visionneuse d'événements Windows***. Le service devrait être capable de se connecter au fournisseur créé. Le fournisseur doit être ajouté dans {{ fr.DHUB }}.

Il est également possible de voir {{ fr.DHUBS }} en tant que service dans la fenêtre Services de Windows qui montre le statut actuel et où il peut être démarré ou arrêté.
