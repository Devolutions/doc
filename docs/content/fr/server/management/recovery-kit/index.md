---
eleventyComputed:
  title: Générer un kit de récupération
  description: Ce sujet couvrira comment créer un Kit de Récupération.
---
Le ***Kit de Récupération*** est très utile si votre {{ fr.DVLS }} doit être restauré ou avec une nouvelle instance. Il est possible de [***Générer***](#generate) une sauvegarde locale ou d'utiliser Azure Key Vault pour stocker la sauvegarde. Si une sauvegarde est déjà créée avec Azure Key Vault, vous pouvez [***Télécharger***](#download) celle-ci.
{% snippet, "badgeHelp" %}
Pour en savoir plus sur la création et la gestion d'un compte Azure Key Vault, veuillez consulter la [documentation](https://learn.microsoft.com/en-us/azure/key-vault/) sur leur site officiel.
{% endsnippet %}

## Générer
1. Dans la {{ fr.DVLSCONSOLE }}, aller à l'onglet ***Outils***.
1. Cliquer sur ***Générer***.
![Générer](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0037.png)
1. Sélectionner l'***Emplacement***;
    * ***Local***
        * ***Chemin d'exportation*** : Le dossier de destination où la sauvegarde ***Locale*** sera enregistrée
![Local](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0038.png)
    * ***Azure Key Vault***
        * ***URL*** : L'URL de votre Azure Key Vault
        * ***ID de locataire*** : L'ID de locataire de votre Azure AD
        * ***ID client*** : L'ID de votre Azure Key Vault
        * ***Secret client*** : Un secret d'application de votre Azure AD
![Azure Key Vault](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0039.png)
4. Vérifier la section ***Fichier de réponse***.
   {% snippet, "badgeInfo" %}
   Cocher l'option ***Inclure les données sensibles*** inclura les mots de passe pour les informations d'identification de la base de données uniquement s'il s'agit d'une base de données SQL, sinon aucun mot de passe ne peut être enregistré.
   {% endsnippet %}
1. Entrer le ***Mot de passe***, puis entrer le même dans le champ ***Confirmer le mot de passe***.
   {% snippet, "badgeCaution" %}
   Si ce mot de passe est perdu, il sera impossible d'utiliser la sauvegarde.
   {% endsnippet %}
1. Cliquer sur ***OK*** pour sauvegarder cette configuration et créer la sauvegarde.
1. Cliquer sur ***Fermer*** une fois la génération terminée.
![Bouton Fermer](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0040.png)

## Télécharger
1. Dans la {{ fr.DVLSCONSOLE }}, aller à l'onglet ***Outils***.
1. Cliquer sur ***Télécharger***.
![Télécharger](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0041.png)
1. Le champ ***Nom de fichier*** sert à choisir le dossier de destination où la sauvegarde ***Azure Key Vault*** sera enregistrée ainsi qu'à nommer ledit fichier de sauvegarde.
![Kit de Récupération - Télécharger](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0042.png)
   {% snippet, "badgeInfo" %}
   Cliquer sur le bouton des points de suspension dans le champ ***Nom de fichier*** ouvre une boîte de dialogue Enregistrer sous.
   {% endsnippet %}
1. Entrer les informations correctes dans la section Azure Key Vault;
    * ***URL*** : L'URL de votre Azure Key Vault
    * ***ID de locataire*** : L'ID de locataire de votre Azure AD
    * ***ID client*** : L'ID de votre Azure Key Vault
    * ***Secret client*** : Un secret d'application de votre Azure AD
    * ***Nom du secret*** : Le nom du secret d'application
5. Cliquer sur ***OK*** pour télécharger le fichier zip de sauvegarde spécifique.
