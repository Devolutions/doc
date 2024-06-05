---
eleventyComputed:
  title: Configurer une entrée 1Password dans {{ fr.RDM }}
  description: Il existe deux modes pour configurer une entrée 1Password dans {{ fr.RDM }}.
---
Il existe deux modes pour configurer une entrée 1Password dans {{ fr.RDM }}. ***Connecteur Web*** se connecte à une base de données 1Password via le web. ***Lié à un fichier local*** est utilisé pour connecter une entrée 1Password à un fichier de base de données local exporté directement depuis 1Password.

## Mode connecteur Web
1. Dans {{ fr.RDM }}, aller à ***Modifier*** – ***Nouvelle Entrée***, et sélectionner l'entrée 1Password.
1. Nommer l'entrée 1Password.
1. Sélectionner le mode ***Connecteur Web***.
![Mode connecteur Web](https://cdnweb.devolutions.net/docs/RDMW2017_2024_1.png)
1. Définir l'***Hôte*** comme ***Par défaut*** ou ***Personnalisé***.
    1. Si défini comme ***Par défaut***, sélectionner une ***Région***. {type="a"}
    1. Si défini comme ***Personnalisé***, ajouter l'***URL*** personnalisé nécessaire pour accéder à la base de données. {type="a"}
1. Configurer le ***Nom d'utilisateur***, ***Mot de passe***, et ***Clé secrète*** ou cocher ***Utiliser “Mes Paramètres de Compte“*** s'ils sont déjà configurés là. Se référer à [Mes Paramètres de Compte](/rdm/commands/file/my-account-settings/) pour plus d'informations.
1. Sélectionner l'entrée de votre base de données 1Password que vous souhaitez référencer en cliquant sur les points de suspension à côté du champ ***Titre***, ou cocher ***Toujours demander avec la liste*** pour que l'entrée affiche toutes les entrées disponibles de la base de données 1Password.
1. Cliquer sur ***Ajouter*** pour sauvegarder la configuration.
## Mode lié à un fichier local
{% snippet, "badgeInfo" %}
Les étapes ci-dessous sont uniquement disponibles dans les anciennes versions de 1Password.
{% endsnippet %}

1. Dans l'application de bureau 1Password, sélectionner ***1Password*** – ***Nouveau coffre sur cet ordinateur***.
1. Configurer le coffre et choisir un dossier pour synchroniser ce coffre.
1. Sélectionner la destination de la base de données locale.
1. Dans {{ fr.RDM }}, aller à ***Modifier*** – ***Nouvelle Entrée***, et sélectionner l'entrée 1Password.
1. Nommer l'entrée 1Password.
1. Définir le ***Mode*** à ***Lié à un fichier local***.
![Mode lié à un fichier local](https://cdnweb.devolutions.net/docs/RDMW2018_2024_1.png)
1. Cliquer sur le bouton des points de suspension pour sélectionner le fichier de base de données local. Son extension est **.opvault**, et se trouve à l'emplacement sélectionné précédemment.
1. Sélectionner l'entrée de votre base de données 1Password que vous souhaitez référencer en sélectionnant les points de suspension à côté du champ ***Titre***, ou cocher ***Toujours demander avec la liste*** pour que l'entrée affiche toutes les entrées disponibles dans la base de données 1Password.
1. Cliquer sur ***Ajouter*** pour sauvegarder la configuration.
