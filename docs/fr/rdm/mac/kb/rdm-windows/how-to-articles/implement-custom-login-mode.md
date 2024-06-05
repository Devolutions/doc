---
eleventyComputed:
  title: Implémenter le mode de connexion personnalisé
---
Le ***Mode de Connexion Personnalisé*** permet une séparation entre l'authentification/autorisation du serveur SQL et l'authentification/autorisation de {{ fr.RDM }}, empêchant les utilisateurs d'utiliser leurs identifiants personnalisés {{ fr.RDM }} pour accéder directement à la base de données.

{% snippet, "badgeInfo" %}
***Les Connexions Personnalisées*** sont uniquement prises en charge dans {{ fr.RDM }} avec une source de données Microsoft SQL Server.
{% endsnippet %}

Suivre les étapes ci-dessous dans l'ordre du début à la fin.

## Créer le Login/Utilisateur SQL
Il existe deux méthodes pour créer le login/utilisateur SQL : la première utilise [{{ fr.RDM }} (recommandé)](#method-using-remote-desktop-manager-(recommended)) tandis que la seconde utilise [SSMS (SQL Server Management Studio)](#method-using-ssms).

### Méthode utilisant {{ fr.RDM }} (Recommandé)
1. Dans {{ fr.RDM }}, se connecter à la source de données Microsoft SQL Server avec n'importe quel utilisateur propriétaire de la base de données.
1. Dans ***Administration – Utilisateurs***, cliquer sur le bouton ***Ajouter un utilisateur*** pour créer un nouvel utilisateur administrateur.
![Fichier – Utilisateurs – Ajouter un utilisateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2149.png)
1. Dans l'onglet ***Général*** de la fenêtre ***Gestion des utilisateurs***, configurer l'utilisateur comme suit :
    * Dans la liste déroulante ***Type d'authentification***, sélectionner ***Base de données***.
    * Dans le champ ***Nom d'utilisateur***, entrer ***RDMRunner***.
    * Dans le champ ***Mot de passe***, entrer un mot de passe sécurisé. Utiliser l'outil ***Générateur de mot de passe*** (deuxième bouton à côté du champ) pour aider à le créer.
    * Dans la liste déroulante ***Type d'utilisateur***, sélectionner ***Administrateur***.
![Configuration de l'utilisateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2150.png)
1. Cliquer sur ***OK*** pour sauvegarder la nouvelle configuration de l'utilisateur.

Le nouvel utilisateur devrait apparaître dans la liste des utilisateurs. Vous pouvez fermer la fenêtre ***Gestion des utilisateurs et de la sécurité***.
Pour les prochaines étapes, passer à la section [Créer Votre Premier Login Personnalisé (Premier Admin)](#create-your-first-custom-login-(first-admin)).

### Méthode utilisant SSMS
1. Dans SSMS, créer un login/utilisateur.
1. Rendre cet utilisateur membre du rôle ***db_owner***.

Pour les prochaines étapes, aller à la section [Créer Votre Premier Login Personnalisé (Premier Admin)](#create-your-first-custom-login-(first-admin)).

## Créer Votre Premier Login Personnalisé (Premier Admin)
1. Dans ***Fichier – Sources de données***, cliquer sur le bouton ***Modifier la source de données*** pour éditer votre source de données Microsoft SQL Server.
![Fichier – Sources de données – Modifier la source de données](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2158.png)
1. Dans la fenêtre de configuration de la source de données, changer les valeurs dans les champs ***Nom d'utilisateur*** et ***Mot de passe*** pour les identifiants du nouvel utilisateur SQL créé dans la [section précédente](#create-the-sql-login%2Fuser). Ceci afin de pouvoir se connecter à cet utilisateur dans la source de données.
![Configuration du nom d'utilisateur et du mot de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2159.png)
1. Cliquer sur ***OK*** pour sauvegarder vos modifications, puis ***OK*** à nouveau pour quitter la vue des paramètres de la source de données.
1. Aller à ***Administration – Utilisateurs***, puis cliquer sur le bouton ***Ajouter un utilisateur*** pour créer un nouvel utilisateur administrateur.
![Administration – Utilisateurs – Ajouter un utilisateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2151.png)
1. Dans la fenêtre ***Gestion des utilisateurs***, configurer le nouvel utilisateur comme suit :
    * Dans la liste déroulante ***Type d'authentification***, sélectionner ***Personnalisé (Devolutions)***.
    * Dans le champ ***Nom d'utilisateur***, entrer ***admin***.
    * Dans le champ ***Mot de passe***, entrer un mot de passe sécurisé. Utiliser l'outil ***Générateur de mot de passe*** (deuxième bouton à côté du champ) pour aider à le créer.
    * Dans la liste déroulante ***Type d'utilisateur***, sélectionner ***Administrateur***.
![Configuration de l'utilisateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2152.png)
1. Cliquer sur ***OK*** pour sauvegarder la nouvelle configuration de l'utilisateur.

Le nouvel utilisateur devrait apparaître dans la liste des utilisateurs. Vous pouvez fermer la fenêtre ***Gestion des utilisateurs et de la sécurité***.

## Créer des Utilisateurs
1. Dans ***Fichier – Sources de données***, cliquer sur le bouton ***Modifier la source de données*** pour éditer votre source de données Microsoft SQL Server.
![Fichier – Sources de données – Modifier la source de données](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2160.png)
1. Dans la fenêtre ***Microsoft SQL Server***, configurer les paramètres de connexion comme suit :
    * Dans la liste déroulante ***Mode de connexion***, sélectionner ***Connexion personnalisée***.
    * Dans le champ ***Nom d'utilisateur***, entrer ***admin***.
    * Dans le champ ***Mot de passe***, entrer le mot de passe créé pour le compte utilisateur personnalisé ***admin*** dans la [section précédente](#create-your-first-custom-login-(first-admin)).
![Configuration de Microsoft SQL Server](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2153.png)
1. Cliquer sur ***Paramètres*** à côté du champ ***Mode de connexion***.
1. Dans la fenêtre ***Connexion à la base de données***, configurer les paramètres de connexion comme suit :
    * Dans le champ ***Nom d'utilisateur***, entrer ***RDMRunner***.
    * Dans le champ ***Mot de passe***, entrer le mot de passe créé pour le compte utilisateur SQL ***RDMRunner*** dans la [première section](#create-the-sql-login%2Fuser) de ce sujet.
![Configuration de la connexion à la base de données](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2154.png)
1. Cliquer sur ***Connecter*** dans la fenêtre ***Connexion à la base de données***.
1. Cliquer sur ***OK*** dans la fenêtre ***Microsoft SQL Server*** pour sauvegarder votre configuration, puis ***OK*** à nouveau pour quitter la vue des paramètres de la source de données.
1. Utiliser cette nouvelle configuration pour créer tous les autres utilisateurs de connexion personnalisée dans ***Administration – Utilisateurs – Ajouter un utilisateur***.

Lorsque tous les autres utilisateurs de connexion personnalisée ont été créés, continuer à la section suivante.

## Distribuer la Configuration
1. Dans ***Fichier – Sources de données***, cliquer sur le bouton ***Dupliquer la source de données***.
1. Écrire un nouveau ***Nom*** pour votre configuration de source de données dupliquée.
1. Effacer les champs ***Nom d'utilisateur*** et ***Mot de passe***, puis cocher les options ***Toujours demander le mot de passe*** et ***Toujours changer le nom d'utilisateur***.
![Configuration de la duplication de la source de données](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2155.png)
1. Cliquer sur ***OK*** pour sauvegarder votre configuration.
1. Cliquer sur le bouton ***Exporter la configuration de la source de données***, puis sauvegarder le fichier .rdd sur votre ordinateur.
![Exporter la configuration de la source de données](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2156.png)
1. Distribuer le fichier de configuration à vos utilisateurs.

Après avoir reçu le fichier .rdd contenant la configuration exportée et l'avoir sauvegardé sur leur ordinateur, vos utilisateurs peuvent suivre les étapes de la section suivante pour l'importer dans {{ fr.RDM }} et se connecter à la source de données pour la première fois.

## Importer le fichier .rdd et se connecter à la source de données
1. Dans {{ fr.RDM }}, aller à ***Fichier – Sources de données***.
1. Cliquer sur le bouton ***Importer la configuration de la source de données***.
![Fichier – Sources de données – Importer la configuration de la source de données](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2157.png)
1. Sélectionner sur votre ordinateur le fichier de configuration .rdd, puis cliquer sur ***Ouvrir***.
1. Cliquer sur ***OK*** pour quitter la vue des paramètres de la source de données.
1. Lors de la première connexion, la fenêtre ***Connexion à la base de données*** apparaît. Entrer votre ***Nom d'utilisateur*** et ***Mot de passe*** personnalisés, puis cocher l'option ***Se souvenir des identifiants*** pour que {{ fr.RDM }} cesse de les demander après cette première connexion.
![Identifiants de connexion à la base de données](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2161.png)
1. Cliquer sur ***Se connecter***.

Vous êtes maintenant connecté à la source de données.