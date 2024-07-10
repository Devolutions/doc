---
eleventyComputed:
  title: Migrer SQL server vers {{ fr.DVLS }}
  description: "{{ fr.DVLSCONSOLE }} inclut un assistant de migration de source de données SQL pour faciliter les transitions de Microsoft SQL Server (MSSQL), y compris Azure, vers {{ fr.DVLS }}." 
---
{% youtube 'JmoEOMkp-QY?si=sWqF3B-EZat2QxMd' %}

{{ fr.DVLSCONSOLE }} inclut un assistant de ***Migration de source de données SQL*** pour faciliter les transitions de Microsoft SQL Server (MSSQL), y compris Azure, vers {{ fr.DVLS }}. Lors de l'utilisation d'une source de données avancée SQL {{ fr.RDM }}, il est recommandé d'utiliser un fournisseur de sécurité pour un chiffrement supplémentaire des données. {{ fr.DVLS }} ne prend pas en charge les fournisseurs de sécurité, mais offre une protection équivalente via des [clés de chiffrement](/server/kb/how-to-articles/manage-encryption-keys/) stockées sur l'hôte web IIS pour {{ fr.DVLS }}.

## Supprimer le fournisseur de sécurité
Il est nécessaire de supprimer le ***fournisseur de sécurité*** {{ fr.RDM }}, avant d'exécuter l'assistant de migration, sinon un message d'erreur vous invitera à le faire.

{% snippet, "badgeCaution" %}
Lors de la suppression d'un ***fournisseur de sécurité***, il est important de compléter ces étapes au préalable :
* Avant de supprimer un fournisseur de sécurité existant, assurez-vous que tous les utilisateurs sont déconnectés de la source de données.
* La suppression d'un fournisseur de sécurité traite l'ensemble de la base de données, donc nous vous conseillons de créer une sauvegarde avant cette opération.
{% endsnippet %}

1. Aller à la source de données ***Microsoft SQL Server*** souhaitée.
1. Sélectionner l'onglet ***Administration*** dans le ruban.
1. Cliquer sur ***Fournisseur de sécurité***.  
![Fournisseur de sécurité](https://cdnweb.devolutions.net/docs/RDMW0009_2024_1.png)
1. Cliquer sur ***Modifier les paramètres de sécurité***.  
![Modifier les paramètres de sécurité](https://cdnweb.devolutions.net/docs/RDMW0014_2024_1.png)
1. Dans le menu déroulant, sélectionner l'option ***Par défaut*** et cliquer sur ***Appliquer***.  
![Type de sécurité par défaut](https://cdnweb.devolutions.net/docs/RDMW0015_2024_1.png)
1. Cliquer sur ***Oui*** après l'apparition de la fenêtre d'avertissement (cela peut prendre du temps avec des bases de données plus importantes).  
![Fenêtre d'avertissement](https://cdnweb.devolutions.net/docs/RDMW0012_2024_1.png)
1. Cliquer sur ***Fermer***.  
![Fermer](https://cdnweb.devolutions.net/docs/RDMW0013_2024_1.png)

## Migrer MSSQL vers {{ fr.DVLS }}
Cette opération suppose que vous avez [{{ fr.DVLSCONSOLE }} installé](https://devolutions.net/server/home/download) sur votre hôte cible {{ fr.DVLSCONSOLE }}. Vous pouvez migrer une source de données MSSQL avant d'[installer complètement](/server/getting-started/installation/) une instance de {{ fr.DVLS }}.

{% snippet, "badgeCaution" %}
Cette procédure opère sur la base de données existante, et non sur une copie. Pour revenir en arrière, vous devrez restaurer à partir d'une sauvegarde, il est donc recommandé de faire une sauvegarde complète.
{% endsnippet %}

1. Ouvrir {{ fr.DVLSCONSOLE }}.
1. Naviguer vers ***Serveur*** – ***Nouveau*** – ***Serveur Web IIS*** – ***Migrer la source de données SQL***.  
![Migrer la source de données SQL](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0000_2024_1.png)
1. Entrer les informations dans les sections ***Base de données*** et ***Identifiants***.
1. Activer ***Activer le chiffrement au repos***. Avec cette option activée, un nouveau fichier *encryption.config* est généré et les données sont rechiffrées via la clé nouvellement créée.
1. Cliquer sur ***Tester la connexion***.  
![Tester la connexion](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0001_2024_1.png)
1. Cliquer sur ***OK***.  
![OK](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0002_2024_1.png)
   {% snippet, "badgeInfo" %}
   L'avertissement « La base de données contient des données chiffrées » est spécifique aux clés de chiffrement {{ fr.DVLS }} et non au chiffrement des données {{ fr.RDM }} par défaut.
   {% endsnippet %}
1. Entrer le ***nom du serveur*** et cliquer sur ***Suivant***.  
![Nom du serveur](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0003_2024_1.png)
1. Choisir quelle version de {{ fr.DVLS }} télécharger et cliquer sur ***Suivant***.  
![Version à télécharger](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0004_2024_1.png)
1. Remplir les champs d'information pour les ***Paramètres IIS*** de la nouvelle installation {{ fr.DVLS }}.  
![Paramètres IIS](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0005_2024_1.png)
1. Entrer les informations pour le nouvel utilisateur administrateur.  
![Utilisateur administrateur](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0006_2024_1.png)
   {% snippet, "badgeInfo" %}
   Installer le service de planification si c'est la première instance de {{ fr.DVLSCONSOLE }}.
   {% endsnippet %}
1. Configurer le ***Kit de récupération*** et cliquer sur ***Suivant***.  
![Kit de récupération](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0007_2024_1.png)
1. Cliquer sur ***Installer***.  
![Installer](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0008_2024_1.png)

Une fois le processus terminé, la nouvelle installation {{ fr.DVLS }} sera immédiatement disponible à l'utilisation. À ce moment, vous voudrez [ajouter une nouvelle source de données](/rdm/commands/file/data-sources/) pour que vos clients {{ fr.RDM }} se connectent à la source de données {{ fr.DVLS }}.

## Migration des utilisateurs de la base de données
Pour des raisons de sécurité, il est vivement conseillé de migrer les utilisateurs de la base de données vers une nouvelle méthode d'[Authentification](/server/web-interface/administration/configuration/server-settings/general/authentication/), après avoir ajouté un nouveau fournisseur d'authentification. L'[outil de migration d'authentification](/server/kb/how-to-articles/authentication-migration/) peut être utilisé dans ce processus.
