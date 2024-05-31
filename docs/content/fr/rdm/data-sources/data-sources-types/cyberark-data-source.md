---
eleventyComputed:
  title: Cyberark (Aperçu)
  description: Accéder directement à votre serveur CyberArk, sans nécessiter une source de données SQL ou un {{ fr.DVLS}} pour héberger la session du tableau de bord CyberArk.
---
{{ fr.RDM}} 2024.1 introduit la source de données CyberArk (aperçu) qui permet de se connecter directement à votre CyberArk et de lancer vos sessions facilement, sans la complexité ajoutée d'une source de données {{ fr.DVLS}} ou SQL Server.

## Prérequis

* {{ fr.RDM}} édition équipe, version 2024.1 ou supérieure.
* CyberArk Version 14 ou supérieure.
* Une licence d'intégration CyberArk {{ fr.RDM}}.

## Ajouter une nouvelle source de données CyberArk

1. Naviguer vers ***Fichier – Sources de données – Ajouter une nouvelle source de données***.
1. Sélectionner ***CyberArk (Aperçu)*** dans la section Entreprise.
![Sélectionner la source de données CyberArk (Aperçu)](https://cdnweb.devolutions.net/docs/RDMW6001_2024_1.png)
1. Ensuite, entrer vos détails de connexion CyberArk.
![Configuration de la fenêtre CyberArk](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6224.png)

* ***Nom*** : Un nom unique pour la source de données.

* ***URL des services Web*** : Votre URL hôte PVWA CyberArk.

* ***Répertoire virtuel*** : Vide par défaut.

* ***Version*** : Par défaut (V12).

* ***Mode d'authentification*** : Choisir la méthode d'authentification : ***CyberArk, Windows, LDAP, SAML, ou Radius***.

* ***Identifiants d'authentification*** : Peut être ***Personnalisé*** (si vous choisissez ***SAML*** comme mode d'authentification, les identifiants ne sont pas disponibles) où vous entrerez un ***Nom d'utilisateur et Mot de passe***, ou ***Mes paramètres de compte PVWA***.

4. Une fois connecté, cliquer sur un hôte ou un compte pour voir toutes les entrées liées et se connecter selon le besoin.

![Visualiser les machines et comptes disponibles](https://cdnweb.devolutions.net/docs/RDMW6002_2024_1.png)

### Première connexion

Lors de la première connexion à CyberArk, {{ fr.RDM }} va :

* Importer une Plateforme appelée ***Devolutions Remote Desktop Manager*** (PlatformID : ***DevolutionsRDM***)

* Créer un Coffre (***RDM_Settings***)

* Créer un compte (***DataSourceSettings***)

{% snippet, "badgeInfo" %}
Note : Ceci suppose que vous avez les droits pour effectuer les étapes ci-dessus.
{% endsnippet %}

Vous serez ensuite invité à entrer une ***licence du Module d'intégration CyberArk***. Pour demander une licence d'essai, [cliquer ici](mailto:sales@devolutions.net?subject=Remote%20Desktop%20Manager%20Module%20CyberArk%20-%20CyberArk%20-%20Trial).

### Utilisateur

Dans CyberArk, vous devez manuellement accorder l'accès en lecture au coffre ***RDM_Settings*** à tous dans l'organisation que vous souhaitez autoriser à utiliser la source de données CyberArk {{ fr.RDM }}.

### Administrateur

Les ***Administrateurs*** sont définis comme des utilisateurs ayant les privilèges ***Ajouter un Coffre***. Les utilisateurs admin dans {{ fr.RDM }} peuvent, en respectant les permissions CyberArk :

* Modifier les Paramètres Système de la source de données {{ fr.RDM}}

* Ajouter/Supprimer des licences d'intégration CyberArk

* Lancer directement CyberArk PVWA

## Utiliser la source de données CyberArk

Maintenant que vous avez configuré et authentifié votre source de données CyberArk, vous pouvez maintenant vous connecter rapidement et facilement aux hôtes. Il y a deux façons de se connecter à un hôte, en partant d'un compte et en sélectionnant l'hôte ou à partir d'un hôte et en sélectionnant le compte. Avec cette flexibilité, choisissez le point de départ le plus efficace pour vous.

### En partant d'un compte

À partir d'un compte, vous avez plusieurs options. En plus des actions de connexion, vous pouvez choisir de modifier les ***Propriétés*** (compte admin requis) qui ouvre directement la ***page des propriétés du compte*** depuis le CyberArk PVWA. Vous pouvez également choisir de créer une ***Nouvelle Entrée*** (compte admin requis) dans la source de données CyberArk {{ fr.RDM }} qui ouvre directement la ***page Nouveau Compte*** depuis le CyberArk PVWA. Enfin, les détails basiques du compte sont montrés dans le volet ***Aperçu***.

![Visualiser un compte](https://cdnweb.devolutions.net/docs/RDMW6003_2024_1.png)

Il y a trois façons de se connecter à un hôte à partir de la vue compte.

1. Dans la vue ***Aperçu – Machines***, double-cliquer sur une ***Machine*** pour se connecter. Cette liste est peuplée à partir des ***Machines distantes suggérées*** listées dans la vue ***CyberArk PVWA Comptes – Vue Comptes – (compte) – Détails***.

1. Cliquer sur le bouton ***Connecter*** pour afficher une liste de machines auxquelles se connecter. Selon vos paramètres de compte CyberArk, vous êtes montré l'une des fenêtres suivantes. La première option s'affiche si vous n'avez pas activé l'option ***Limiter l'accès à ces machines uniquement*** dans l'écran ***Compte – Propriétés du Compte*** dans le CyberArk PVWA. Si vous avez activé cette option, alors la deuxième fenêtre s'affiche sous forme de liste déroulante avec la liste peuplée à partir des ***Machines distantes suggérées*** sur la page ***Propriétés du Compte***.

Vous êtes montré deux volets, un champ ***Hôte*** pour choisir ou entrer manuellement l'hôte, ou une vue {{ fr.RDM}} {{ fr.VLT}} de tous les hôtes disponibles à choisir.
![Sélectionner un hôte](https://cdnweb.devolutions.net/docs/RDMW6004_2024_1.png)

Avec l'option ***Limiter l'accès à ces machines uniquement*** cochée dans CyberArk PVWA pour un compte, montrer uniquement les hôtes autorisés à se connecter.

![Sélectionner uniquement un hôte autorisé](https://cdnweb.devolutions.net/docs/RDMW6005_2024_1.png)

3. Cliquer sur le bouton Connecter à ***Hôte*** pour afficher une liste de machines auxquelles se connecter. Cette option contourne PSM (non recommandé), et est seulement montrée si l'option ***Paramètres Système – Général – Autoriser à se connecter à l'hôte*** est cochée. Les fenêtres montrées reflètent les mêmes que dans l'action ***Connecter***, seulement en contournant PSM.

### En partant d'une machine

Comme pour un compte, vous pouvez vous connecter à un hôte via les actions de connexion, mais ici vous pouvez seulement créer une ***Nouvelle Entrée*** (compte admin requis) dans la source de données CyberArk {{ fr.RDM }} qui ouvre directement la page Nouveau Compte depuis le CyberArk PVWA

![Visualiser une machine](https://cdnweb.devolutions.net/docs/RDMW6006_2024_1.png)

Similaire à un compte, il y a trois façons de se connecter à un hôte à partir de la vue machine.

1. Dans la vue ***Aperçu***, double-cliquer sur un ***Compte*** pour se connecter à un hôte avec. Cette liste est peuplée en filtrant tous les comptes montrés dans la source de données CyberArk {{ fr.RDM}} par leurs ***Machines distantes suggérées*** pour créer la liste des comptes disponibles.
1. Cliquer sur le bouton ***Connecter*** pour afficher une liste de comptes avec lesquels se connecter. La liste déroulante ***Compte*** reflète la même liste que celle montrée dans l'***Aperçu***, tandis que vous pouvez utiliser la vue {{ fr.RDM}} CyberArk data source {{ fr.VLT}} pour vous connecter avec un compte différent.
![Sélectionner un compte](https://cdnweb.devolutions.net/docs/RDMW6007_2024_1.png)
1. Cliquer sur le bouton ***Connecter à Hôte*** pour afficher une liste de comptes avec lesquels se connecter. Cette option contourne PSM (non recommandé), et est seulement montrée si l'option ***Paramètres Système – Général – Autoriser à se connecter à l'hôte*** est cochée. Les fenêtres montrées reflètent les mêmes que dans l'action ***Connecter***, seulement en contournant PSM.

## Paramètres de la Source de Données

Si vous vous êtes connecté en utilisant un compte Administrateur à votre source de données CyberArk, dans l'onglet Administration {{ fr.RDM}}, vous êtes montré trois options supplémentaires : ***Licences, Paramètres Système***, et un bouton direct ***CyberArk PVWA***.

![Visualiser l'onglet Administration](https://cdnweb.devolutions.net/docs/RDMW6008_2024_1.png)

## Licences

Ici, vous avez l'option d'ajouter, modifier ou supprimer une licence d'intégration CyberArk qui est requise pour une source de données CyberArk dans {{ fr.RDM}} édition gratuite ou équipe.

{% snippet, "badgeInfo" %}
Cette licence est stockée dans le coffre CyberArk (***RDM_Settings***) créé à partir de l'étape d'initialisation de la source de données.
{% endsnippet %}

![Visualiser les licences](https://cdnweb.devolutions.net/docs/RDMW6009_2024_1.png)

## Paramètres Système

Si vous ouvrez les ***Paramètres Système***, vous êtes montré trois sections différentes, ***Général, PVWA***, et ***Message Système***. Puisque la source de données CyberArk est une source de données spécialisée, de nombreuses options traditionnelles de source de données RDM ne sont pas disponibles.

![Visualiser les Paramètres Système {{ fr.RDM}}](https://cdnweb.devolutions.net/docs/RDMW6010_2024_1.png)

## Page Générale

| Paramètre                  | Description |
|----------------------------|-------------|
| Actualisation automatique | Rafraîchir périodiquement les données dans l'affichage. |
| Ouvrir les sessions en externe | Lancer une fenêtre externe au lieu de la vue intégrée par défaut. |
| Autoriser la connexion à l'hôte | Afficher ou non le bouton Connecter à l'Hôte, qui est une connexion directe à un hôte, contournant CyberArk PSM (non recommandé). |
| Demander une raison | Afficher ou non une invite pour demander une raison à chaque connexion. |
| Demander un numéro de ticket | Afficher ou non une invite pour demander un numéro de ticket à chaque connexion. |
| Système de ticketing | Le lien URL vers un système de ticketing. |
| Format du nom d'utilisateur | Le format du nom d'utilisateur utilisé pour s'authentifier aux hôtes. |
| Méthode de recherche de domaine | Spécifier où localiser un domaine utilisateur pour s'authentifier aux hôtes. |
| Champ de domaine | Si le champ est choisi pour la méthode de recherche de domaine, quel champ rechercher pour les informations de domaine de l'utilisateur. |

## Page PVWA

| Paramètre                      | Description |
|--------------------------------|-------------|
| Autoriser la connexion directe (PVWA) | Cette option contrôle si l'action Connecter est montrée. |
| Remplacer les Paramètres RDP | Forcer le remplacement de paramètres RDP spécifiques pour les hôtes à travers toute la source de données. |

## Message Système
Ici, définir un message à afficher à l'ouverture de la source de données CyberArk {{ fr.RDM}} ou chaque fois que le message est changé.

![Visualiser le Message Système](https://cdnweb.devolutions.net/docs/RDMW6011_2024_1.png)

## Dépannage

[Cliquer ici](/rdm/kb/rdm-windows/troubleshooting-articles/cyberark-data-source-issues/) pour les étapes de dépannage concernant les problèmes de source de données CyberArk, ou contacter notre [équipe de support](mailto:service@devolutions.net).


