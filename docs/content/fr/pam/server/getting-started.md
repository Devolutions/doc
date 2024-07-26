---
eleventyComputed:
  title: Pour commencer
  description: Pour commencer avec les fonctionnalités de Gestion des Accès Privilégiés (PAM) de {{ fr.DVLS }}, connectez-vous d'abord en tant qu'administrateur dans votre {{ fr.DVLS }}.
---
Pour commencer avec la ***Gestion des Accès Privilégiés*** (PAM) dans {{ fr.DVLS }}, connectez-vous d'abord en tant qu'administrateur dans votre {{ fr.DVLS }}. Ensuite, suivre les étapes ci-dessous.

## Configurer les paramètres PAM

1. Dans {{ fr.DVLS }}, aller à ***Administration – Licences***.
1. Ajouter votre licence PAM en utilisant le bouton ***Ajouter*** (+). Une fois fait, la licence apparaît dans la liste des licences et le menu Accès Privilégié apparaît dans le panneau latéral de votre {{ fr.DVLS }}.
![Licence PAM](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2104.png)
1. Dans ***Administration – Accès Privilégié – Paramètres par défaut***, configurer les paramètres pour la [visibilité {{ fr.VLT }}](/server/web-interface/vault-access/), [système de réservation](/pam/server/checkout-process/request-checkout/), [injection des identifiants](/pam/server/view-sensitive-data-account-brokering/), [accès aux informations sensibles](/pam/server/view-sensitive-data-account-brokering/), durées de réservation par défaut, et synchronisations.
![Administration – Accès Privilégié – Paramètres par défaut](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2105.png)
1. Ensuite, aller à ***Administration – Permissions Système – Modules***.
1. Configurer l'accès au système PAM pour les utilisateurs/administrateurs et gérer les droits des comptes privilégiés sur qui peut modifier les entrées privilégiées. Ensuite, cliquer sur ***Enregistrer***.
![Administration – Permissions Système – Modules – Accès privilégié](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2106.png)

## Ajouter un fournisseur PAM

Dans ***Administration – Accès Privilégié – Fournisseurs***, ajouter un fournisseur. Les types disponibles sont :
* Fournisseurs ***gérés*** : ***Utilisateur de domaine*** (AD), ***Utilisateur local*** (SSH), ***SQL Server***, ***Utilisateur Windows***, ***Utilisateur Azure AD***
* Fournisseurs ***réinitialisation de mot de passe uniquement*** (non gérés) : ***Utilisateur MySQL***, ***Utilisateur Cisco***, ***Utilisateur Oracle***
* Fournisseurs ***AnyIdentity*** : ***Comptes Windows***, ***Comptes locaux Windows***

![Fournisseurs PAM gérés](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2107.png)
![Fournisseurs PAM réinitialisation de mot de passe uniquement](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2108.png)
![Fournisseurs PAM AnyIdentity](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2109.png)
Lors de l'ajout du fournisseur, assurez-vous d'activer les options ***Ajouter PAM {{ fr.VLT }}*** et ***Ajouter Configuration de Scan*** sous ***Actions***.
![Configuration fournisseur PAM](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2110.png)

{% snippet, "badgeHelp" %}
Pour plus d'informations, veuillez vous référer à [Fournisseurs](/pam/server/providers/).
{% endsnippet %}

Lorsque vous cliquez sur ***Enregistrer***, la ***Configuration de Scan*** apparaît.

## Ajouter une configuration de scan

1. Confirmer qu'il s'agit du bon fournisseur, nom de domaine, et conteneur de domaine (où les comptes sont situés).
1. Assurer que l'option ***Démarrer le Scan à l'Enregistrement*** est activée sous ***Actions***.
1. Cliquer sur ***OK***.
![Configuration de Scan PAM](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2111.png)

Pour plus d'informations, veuillez vous référer à [Configurations de scan](/pam/scan-configurations/).

## Ajouter un PAM {{ fr.VLT }}

Dans la section ***PAM {{ fr.VLT }}s*** de ***Administration – Accès Privilégié***, vous devez créer au moins un PAM {{ fr.VLT }} pour contenir les comptes. Vous pouvez personnaliser les options de sécurité de ce dossier particulier [options de sécurité du dossier](/pam/server/accounts/) si vous ne souhaitez pas qu'il ait la configuration initiale par défaut. Vous pouvez également [personnaliser les approbateurs sur le dossier](/pam/server/accounts/) directement, ce qui vous donne une liste des administrateurs.
![PAM {{ fr.VLT }}s](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2112.png)

## Importer des comptes à partir d'un scan

1. Dans ***Administration – Accès Privilégié – Configuration de Scan***, cliquer sur ***Voir le résultat*** à côté du scan.
![Voir les résultats](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2113.png)
1. Sélectionner tous les comptes que vous souhaitez importer. Ensuite, cliquer sur ***Importer les Comptes Sélectionnés***.
![Importer les comptes sélectionnés](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2114.png)
1. Les importer dans le {{ fr.VLT }} de votre choix. Vous pouvez également choisir de réinitialiser le mot de passe à l'importation ou au check-in (recommandé). De cette façon, le mot de passe est sécurisé dès que l'utilisateur le restitue.
![Importer des comptes](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2115.png)
Une fois importés, vous pouvez cliquer dans le {{ fr.VLT }} et vérifier manuellement le ***Statut de Synchronisation*** en haut à droite de l'écran. Vous saurez que les comptes sont bien synchronisés lorsque les identifiants n'ont pas d'avertissement rouge ***Hors de synchronisation*** à côté d'eux.
![Vérification de la Synchronisation des Comptes PAM](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2116.png)
Vous êtes maintenant prêt à utiliser la partie gestion des accès privilégiés de {{ fr.DVLS }}.