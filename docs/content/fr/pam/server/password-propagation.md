---
eleventyComputed:
  title: Propagation de mot de passe
---
***Propagation de mot de passe*** permet de réinitialiser les mots de passe des comptes privilégiés pour les propager vers les services des serveurs distants. Ce sujet couvre la [Propagation par script](#propagation-par-script) et la [Propagation spécifique à Active Directory](#propagation-spécifique-à-active-directory).

{% youtube 'drRLA7U8YsQ?si=ihVhTcJOKxAh5kKS&amp;start=225' %}

## Propagation par script
Les sections suivantes décrivent les propriétés de la fonctionnalité ***Propagation*** par script au sein de la solution de Gestion des Accès Privilégiés. La section [Étapes](#étapes-avec-modèle) explique comment configurer cette fonctionnalité en utilisant un modèle Devolutions, mais il est également possible de [Créer un modèle](#créer-un-modèle-powershell).

{% snippet, "badgeInfo" %}
Cette méthode couvre tous les fournisseurs de comptes PAM.
{% endsnippet %}

### Étapes (avec modèle)
1. Télécharger notre [fichier modèle .json](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/templates) depuis GitHub.
1. Se connecter à {{ fr.DVLS }} avec un compte administrateur.
1. Aller à ***Administration*** – ***Modules*** – ***Accès Privilégié*** – ***Propagation (Aperçu)***.
![Propagation (Aperçu)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0096.png)
1. Cliquer sur ***Modèles de Script***.
![Modèles de Script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0097.png)
1. Cliquer sur ***Importer***.
![Importer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0098.png)
1. Sélectionner le fichier modèle .json précédemment téléchargé et cliquer sur ***Importer***.
![Bouton Importer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0099.png)
1. Cliquer sur ***Enregistrer***.
![Bouton Enregistrer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0100.png)
1. Revenir à la page ***Propagation (Aperçu)***.
1. Cliquer sur ***Ajouter***.
![Ajouter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0101.png)
1. Sélectionner le modèle désiré et cliquer sur ***Sélectionner***.
![Bouton Sélectionner](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0102.png)
1. Dans l'onglet ***Général***, nommer cette configuration.
1. Dans l'onglet ***Propriétés de Propagation***, entrer les informations pour la machine distante.
1. Dans l'onglet ***Mappage des Propriétés***, cliquer sur ***Configurer une entrée PAM*** pour sélectionner un type de compte privilégié.
![Configurer une entrée PAM](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0103.png)
1. Cliquer sur ***Continuer***.
1. Sélectionner les champs du compte (ou fournisseur) à associer aux variables et cliquer sur ***Enregistrer***.
1. Cliquer sur ***Enregistrer*** pour sauvegarder cette nouvelle configuration et fermer la fenêtre.
![Bouton Enregistrer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0104.png)
1. Aller à l'onglet ***Accès Privilégié*** et sélectionner un type de compte précédemment configuré avec ***Propagation***.
1. Cliquer sur ***Modifier***.
1. Aller à l'onglet Propagation et cliquer sur le bouton "***+***".
![Bouton +](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0105.png)
1. Sélectionner la configuration à lier à ce compte, et cliquer sur ***Confirmer***.
![Bouton Confirmer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0106.png)
   {% snippet, "badgeInfo" %}
   Il est possible de sélectionner plusieurs configurations.
   {% endsnippet %}

1. Cliquer sur ***OK*** pour sauvegarder les modifications et fermer la fenêtre.
![Bouton OK](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0107.png)
   {% snippet, "badgeInfo" %}
   Pour tester si le lien est réussi, cliquer sur ***Plus*** puis ***Réinitialiser le mot de passe***. Si cela fonctionne correctement, le fichier nouvellement créé apparaîtra sur la machine distante. Sinon, il est recommandé de vérifier les journaux du compte.
   {% endsnippet %}

### Créer un modèle PowerShell
1. Se connecter à {{ fr.DVLS }} avec un compte administrateur.
1. Aller à ***Administration*** – ***Modules*** – ***Accès Privilégié*** – ***Propagation (Aperçu)***.
![Propagation (Aperçu)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0096.png)
1. Cliquer sur ***Modèles de Script***.
![Modèles de Script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0097.png)
1. Cliquer sur ***Ajouter***.
![Ajouter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0112.png)
1. Dans l'onglet Général, ajouter un ***Nom*** pour ce modèle.
   {% snippet, "badgeInfo" %}
   Il est possible d'ajouter une ***Description***. L'icône peut également être changée en cliquant dessus.
   {% endsnippet %}

1. Dans l'onglet ***Propriétés de Propagation***, ajouter les variables pour le script en cliquant sur ***+ Ajouter propriété***. Les variables ajoutées dans cet onglet doivent représenter l'URL de la machine distante (par exemple, ComputerIP, Username, Password et RootFolder).
![Propriétés de Propagation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0113.png)
1. Dans l'onglet ***Mappage des Propriétés***, ajouter les variables pour le script en cliquant sur ***+ Ajouter propriété***. Les variables ajoutées dans cet onglet doivent représenter le ***Mappage des Champs*** de la machine distante (par exemple, FileName et FilePath).
![Mappage des Propriétés](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0114.png)
1. Dans l'onglet ***Script***, les variables précédentes apparaissent ainsi que la variable ***NewPassword***. Cette nouvelle variable contiendra le nouveau mot de passe pour le compte lors de l'exécution du script.
1. Cliquer sur ***Générer script de base***.
![Générer script de base](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0115.png)
   {% snippet, "badgeInfo" %}
   Cliquer sur ***Modifier*** pour modifier ou ajouter au script.
   {% endsnippet %}

1. Cliquer sur ***Enregistrer*** pour sauvegarder cette configuration et fermer la fenêtre.
   {% snippet, "badgeInfo" %}
   Pour en savoir plus sur les scripts personnalisés pour cette fonctionnalité, visiter notre [GitHub public](https://github.com/Devolutions/PAM-Providers/blob/master/Propagation-Scripts/Create-A-Template.md).
   {% endsnippet %}

## Propagation spécifique à Active Directory
{% snippet, "badgeNotice" %}
Le WinRM doit être correctement configuré comme décrit dans l'article [WinRM et Liste des Hôtes de Confiance](/server/kb/how-to-articles/winrm-trustedhostslist/).
{% endsnippet %}
{% snippet, "badgeCaution" %}
Cette fonctionnalité de ***Propagation de mot de passe*** est uniquement disponible pour les comptes de domaine.
{% endsnippet %}

La section suivante décrit les propriétés de la fonctionnalité de ***Propagation de mot de passe*** Active Directory au sein de la solution de Gestion des Accès Privilégiés.
![Propagation de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8174.png)

### Propriétés
| Option                         | Description                                                              |
|--------------------------------|--------------------------------------------------------------------------|
| ***Ordinateurs***              | ***Hérité*** : Hérite de la liste des ordinateurs du dossier parent.<br>***Personnalisé*** : Définit une liste personnalisée d'ordinateurs.<br>***Personnalisé + Hérité*** : Hérite de la liste des ordinateurs du dossier parent et définit une liste personnalisée d'ordinateurs. |
| ***Nom de l'ordinateur***      | Nom de chaque ordinateur sur lequel la propagation du mot de passe aura lieu. |
| ***Parcourir les conteneurs de domaine*** | Parcourir le domaine pour sélectionner les ordinateurs.                               |
