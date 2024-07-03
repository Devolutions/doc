---
eleventyComputed:
  title: Migrer SQL server vers {{ fr.DVLS }}
  description: "{{ fr.DVLSCONSOLE }} inclut un assistant de migration de source de données SQL pour faciliter les transitions de Microsoft SQL Server (MSSQL), y compris Azure, vers {{ fr.DVLS }}." 
---
{% youtube 'JmoEOMkp-QY?si=sWqF3B-EZat2QxMd' %}

{{ fr.DVLSCONSOLE }} inclut un assistant ***Migrate SQL Data Source*** pour faciliter les transitions de Microsoft SQL Server (MSSQL), y compris Azure, vers {{ fr.DVLS }}. Lors de l'utilisation d'une source de données avancée SQL {{ fr.RDM }}, il est recommandé d'utiliser un fournisseur de sécurité pour un chiffrement supplémentaire des données. {{ fr.DVLS }} ne prend pas en charge les fournisseurs de sécurité, mais offre une protection équivalente via des [clés de chiffrement](/server/kb/how-to-articles/manage-encryption-keys/) stockées sur l'hôte web IIS pour {{ fr.DVLS }}.

## Supprimer le fournisseur de sécurité
Vous devez supprimer le ***Security Provider*** {{ fr.RDM }}, avant d'exécuter l'assistant de migration, sinon un message d'erreur vous invitera à le faire.

{% snippet, "badgeCaution" %}
Lors de la suppression d'un ***Security Provider***, il est important de compléter ces étapes au préalable :
* Avant de supprimer un fournisseur de sécurité existant, assurez-vous que tous les utilisateurs sont déconnectés de la source de données.
* La suppression d'un fournisseur de sécurité traite toute la base de données, donc nous vous conseillons de créer une sauvegarde avant cette opération.
{% endsnippet %}

1. Aller à la source de données ***Microsoft SQL Server*** souhaitée.
1. Sélectionner l'onglet ***Administration*** dans le ruban.
1. Cliquer sur ***Security Provider***.  
![Security Provider](https://cdnweb.devolutions.net/docs/RDMW0009_2024_1.png)
1. Cliquer sur ***Change Security Settings***.  
![Change Security Settings](https://cdnweb.devolutions.net/docs/RDMW0014_2024_1.png)
1. Dans le menu déroulant, sélectionner l'option ***Default*** et cliquer sur ***Apply***.  
![Default security type](https://cdnweb.devolutions.net/docs/RDMW0015_2024_1.png)
1. Cliquer sur ***Yes*** après l'apparition de la fenêtre d'avertissement (cela peut prendre du temps avec des bases de données plus importantes).  
![Warning window](https://cdnweb.devolutions.net/docs/RDMW0012_2024_1.png)
1. Cliquer sur ***Close***.  
![Close](https://cdnweb.devolutions.net/docs/RDMW0013_2024_1.png)

## Migrer MSSQL vers {{ fr.DVLS }}
Cette opération suppose que vous avez [{{ fr.DVLSCONSOLE }} installé](https://devolutions.net/server/home/download) sur votre hôte cible {{ fr.DVLSCONSOLE }}. Vous pouvez migrer une source de données MSSQL avant d'[installer complètement](/server/getting-started/installation/) une instance de {{ fr.DVLS }}.

{% snippet, "badgeCaution" %}
Cette procédure opère sur la base de données existante, et non sur une copie. Pour revenir en arrière, vous devrez restaurer à partir d'une sauvegarde, il est donc recommandé de faire une sauvegarde complète.
{% endsnippet %}

1. Ouvrir {{ fr.DVLSCONSOLE }}.
1. Naviguer vers ***Server*** – ***New*** – ***IIS Web Server*** – ***Migrate SQL Data Source***.  
![Migrate SQL Data Source](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0000_2024_1.png)
1. Entrer les informations dans les sections ***Database*** et ***Credentials***.
1. Activer ***Activate Encryption At Rest***. Avec cette option activée, un nouveau fichier *encryption.config* est généré et les données sont rechiffrées via la clé nouvellement créée.
1. Cliquer sur ***Test Connection***.  
![Test Connection](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0001_2024_1.png)
1. Cliquer sur ***OK***.  
![OK](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0002_2024_1.png)
   {% snippet, "badgeInfo" %}
   L'avertissement « Database contains encrypted data » est spécifique aux clés de chiffrement {{ fr.DVLS }} et non au chiffrement des données {{ fr.RDM }} par défaut.
   {% endsnippet %}
1. Entrer le ***Server name*** et cliquer sur ***Next***.  
![Server name](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0003_2024_1.png)
1. Choisir quelle version de {{ fr.DVLS }} télécharger et cliquer sur ***Next***.  
![Download version](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0004_2024_1.png)
1. Remplir les champs d'information pour les ***IIS Settings*** de la nouvelle installation {{ fr.DVLS }}.  
![IIS Settings](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0005_2024_1.png)
1. Entrer les informations pour le nouvel utilisateur administrateur.  
![Administrator user](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0006_2024_1.png)
   {% snippet, "badgeInfo" %}
   Installer le service Scheduler si c'est la première instance de {{ fr.DVLSCONSOLE }}.
   {% endsnippet %}
1. Configurer le ***Recovery Kit*** et cliquer sur ***Next***.  
![Recovery Kit](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0007_2024_1.png)
1. Cliquer sur ***Install***.  
![Install](https://cdnweb.devolutions.net/docs/DVLSCONSOLE0008_2024_1.png)

Une fois le processus terminé, la nouvelle installation {{ fr.DVLS }} sera immédiatement disponible à l'utilisation. À ce moment, vous voudrez [ajouter une nouvelle source de données](/rdm/commands/file/data-sources/) pour que vos clients {{ fr.RDM }} se connectent à la source de données {{ fr.DVLS }}.

{% snippet, "badgeInfo" %}
Il est également possible de migrer vos utilisateurs existants vers une nouvelle méthode d'[Authentification](/server/web-interface/administration/configuration/server-settings/general/authentication/), après avoir ajouté un nouveau fournisseur d'authentification. L'[outil de migration d'authentification](/server/kb/how-to-articles/authentication-migration/) peut être utilisé dans ce processus.
{% endsnippet %}

### {{ fr.DVLS }} gratuit
{{ fr.DVLS }} offre une licence gratuite pour jusqu'à 10 utilisateurs. Lors de la première connexion à l'interface web {{ fr.DVLS }}, il vous sera demandé d'entrer une licence. Cliquer sur le bouton [***Activer la Version Gratuite***](/server/getting-started/installation/create-server-instance/#basic-installation) pour utiliser la licence gratuite.

{% snippet, "badgeInfo" %}
Une licence {{ fr.RDM }} Team est nécessaire pour utiliser {{ fr.DVLS }} gratuit.
{% endsnippet %}
