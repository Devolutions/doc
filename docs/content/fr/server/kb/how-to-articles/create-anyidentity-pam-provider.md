---
eleventyComputed:
  title: Créer un fournisseur PAM {{ fr.ANYID }}
  description: Pour créer un fournisseur PAM {{ fr.ANYID }}, vous devez d'abord créer un modèle de fournisseur ou importer un modèle existant.
---
Pour créer un fournisseur PAM {{ fr.ANYID }}, créer un modèle de fournisseur ou importer un modèle existant. Il existe déjà des [modèles](#import-an-anyidentity-template) pour quelques fournisseurs.

{% snippet, "badgeCaution" %}
Le [WinRM](/server/kb/how-to-articles/winrm-trustedhostslist/) doit être activé pour que cela fonctionne.
{% endsnippet %}

## Créer un modèle {{ fr.ANYID }}
1. Dans {{ fr.DVLS }}, aller à ***Administration – Accès Privilégié – Fournisseurs***.
1. Cliquer sur le bouton ***Modèles {{ fr.ANYID }}***.
![Administration – Accès Privilégié – Fournisseurs – Modèles {{ fr.ANYID }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2173.png)
1. Cliquer ***Ajouter*** pour créer un nouveau modèle.
![Ajouter un nouveau modèle {{ fr.ANYID }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2174.png)
1. Dans ***Général***, fournir un ***Nom*** (obligatoire) et une ***Description*** (facultatif) pour votre nouveau modèle. Il est également possible de changer l'icône affichée.
1. Trois actions peuvent être activées, chacune avec son propre script. Cocher les cases à côté de celles que vous souhaitez implémenter.
    * ***Rotation de mot de passe***, pour réinitialiser les mots de passe des comptes.
    * ***Heartbeat***, pour synchroniser les comptes.
    * ***Détection de compte***, pour scanner.
![Paramètres généraux](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2175.png)
1. Dans ***Propriétés du fournisseur*** et ***Propriétés du compte***, définir les champs que les fournisseurs et les comptes implémenteront. Ajouter des propriétés en cliquant sur le bouton ***Ajouter une propriété***. Pour chaque propriété, fournir un ***Nom*** et un ***Type***. Ci-dessous une liste des différents types :
    * ***Booléen***
    * ***Description*** (chaîne)
    * ***Int***
    * ***Mot de passe*** (chaîne)
    * ***Données sensibles*** (SecureString)
    * ***Chaîne***
    * ***Identifiant unique*** (chaîne)
    * ***Nom d'utilisateur*** (chaîne)
![Propriétés du fournisseur et du compte](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2176.png)
1. Cocher la case ***Obligatoire*** à côté d'une propriété si les champs sont requis pour la création/édition.
1. Pour chaque action activée dans la section ***Général***, aller à la section correspondante dans le menu de gauche.
1. Mapper les propriétés du fournisseur/compte dont le script a besoin pour fonctionner en fournissant les éléments suivants :
    * ***Nom*** : Nom de la variable dans le script.
    * ***Source*** : Si la valeur est fournie par le fournisseur ou le compte.
    * ***Propriété*** : La propriété source qui sera injectée dans le script.
   Si besoin, vous pouvez ajouter d'autres paramètres de script.
![Paramètres des actions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2177.png)
1. Insérer le script de l'action en parcourant votre ordinateur pour le trouver ou en éditant manuellement le champ ***Script***. Vous pouvez également générer un script de base sur lequel construire.
![Script d'action](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2178.png)
1. Tester votre script une fois qu'il est complet, puis ***Sauvegarder*** votre nouveau modèle.
Votre nouveau modèle {{ fr.ANYID }} a été créé et peut être trouvé dans la liste des modèles. Vous pouvez passer à [Créer un fournisseur {{ fr.ANYID }}](#create-an-anyidentity-pam-provider).

## Importer un modèle {{ fr.ANYID }}
{% snippet, "badgeHelp" %}
Vous pouvez accéder à notre [dépôt GitHub public](https://github.com/Devolutions/PAM-Providers) pour trouver des fournisseurs PAM {{ fr.ANYID }} créés par l'équipe Devolutions et des instructions sur comment les utiliser.
{% endsnippet %}

1. Dans {{ fr.DVLS }}, aller à ***Administration – Accès Privilégié – Fournisseurs***.
1. Cliquer sur le bouton ***Modèles {{ fr.ANYID }}***.
![Administration – Accès Privilégié – Fournisseurs – Modèles {{ fr.ANYID }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2173.png)
1. Cliquer sur le bouton ***Importer***.
![Importer un modèle {{ fr.ANYID }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2179.png)
1. Téléverser votre fichier .json, puis cliquer sur ***Importer***.
1. Adapter les paramètres du modèle si besoin, puis cliquer sur ***Sauvegarder***.

Votre modèle a maintenant été importé et peut être trouvé dans la liste des ***Modèles {{ fr.ANYID }}***.

## Créer un fournisseur PAM {{ fr.ANYID }}
Une fois votre modèle créé ou importé, vous êtes prêt à créer un fournisseur {{ fr.ANYID }}.
1. Aller à ***Administration – Accès Privilégié – Fournisseurs***, puis cliquer ***Ajouter***.
![Administration – Accès Privilégié – Fournisseurs – Ajouter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2180.png)
1. Aller à ***{{ fr.ANYID }}*** dans le menu de gauche, puis sélectionner votre nouveau modèle dans la liste. Cliquer ***Continuer***.
![Sélection du modèle {{ fr.ANYID }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2181.png)
1. Dans la page de configuration du ***Fournisseur***, fournir un ***Nom*** et un ***Nom d'utilisateur***, car ces informations sont obligatoires. Ensuite, si nécessaire, définir les autres options selon vos besoins.
![Configuration du fournisseur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2182.png)
1. Cliquer ***Sauvegarder***.

Votre nouveau fournisseur {{ fr.ANYID }} a été créé et peut être trouvé dans la liste des fournisseurs.
