---
eleventyComputed:
  title: Entrée de tableau de bord Active Directory
  description: L'entrée de tableau de bord Active Directory offre un moyen centralisé et efficace aux administrateurs système et aux professionnels de l'informatique de gérer et d'interagir avec les services Active Directory (AD) directement au sein de {{ fr.RDM }}.
---
L'***entrée de tableau de bord Active Directory*** offre un moyen centralisé et efficace aux administrateurs système et aux professionnels de l'informatique de gérer et d'interagir avec les services Active Directory (AD) directement au sein de {{ fr.RDM }}.

Il est possible de modifier les groupes Active Directory et d'ajouter un utilisateur à ces derniers en utilisant le ***tableau de bord AD***. Vous devez d'abord restreindre l'accès au dossier qui contient les outils administratifs.

{% snippet, "badgeInfo" %}
Les étapes dans la vidéo sont les mêmes que celles décrites ci-dessous.
{% endsnippet %}

{% youtube 'FtSlp_TVAxE?si=Smo9UcN83hrjkXQr&start=1099' %}

1. Créer ou sélectionner un dossier dans {{ fr.RDM }}.
1. Faire un clic droit sur le dossier et aller dans ***Propriétés***
1. Dans ***Sécurité*** – ***Permissions***, définir ***Permission*** sur ***Interdit***, ce qui signifie que personne sauf les administrateurs ne peut accéder au dossier. L'option ***Octroyer l'accès*** peut toujours être utilisée pour plus de granularité.
1. Cliquer sur ***Ajouter*** pour enregistrer.

## Créer l'entrée de tableau de bord Active Directory

1. Sélectionner le dossier créé.
1. Dans le ruban, aller dans ***Modifier*** – ***Nouvelle entrée***.
1. Sélectionner l'entrée ***Tableau de bord Active Directory*** (type d'entrée ***Gestion à distance***).
1. Dans ***Commun – Général***, saisir les informations générales et d'Active directory.
1. Aller dans ***Affichage*** – ***Journaux***.
1. Dans le menu déroulant ***Ouvrir les journaux***, sélectionner ***Personnalisé***.
1. Cocher ***Demander un commentaire à l'ouverture*** et activer ***Le commentaire d'ouverture est requis*** et ***Le numéro de ticket est requis*** en dessous.
   {% snippet, "badgeInfo" %}
   En activant la fonctionnalité [***Journaux***](/rdm/commands/window/panels/logs), les utilisateurs devront commenter et créer un numéro de ticket pour expliquer pourquoi ils effectuent une action sur l'entrée. Ce type de comportement peut être appliqué à presque toutes les entrées dans {{ fr.RDM }}.
   {% endsnippet %}
1. Cliquer sur ***Ajouter*** pour enregistrer.
1. Ouvrir votre session.
1. Dans la fenêtre ***Commentaire de session ouverte*** qui s'ouvre, saisir un ***Numéro de ticket*** et un ***Commentaire***.
1. Cliquer sur ***OK***.

### Ajouter un utilisateur à un groupe AD

1. Ouvrir votre session.
1. Naviguer jusqu'à l'emplacement du groupe d'utilisateurs.
1. Cliquer sur ***Propriétés***.
1. Naviguer jusqu'à l'onglet ***Membres***.
1. Cliquer sur ***Ajouter***.
1. Sélectionner l'utilisateur et cliquer sur ***OK*** pour enregistrer.

L'utilisateur a été ajouté avec succès.

### Paramètres de l'entrée de tableau de bord Active Directory

Voici une liste des paramètres disponibles dans l'interface de l'***entrée de tableau de bord Active Directory***.

![Interface de l'entrée de tableau de bord Active Directory](https://cdnweb.devolutions.net/docs/RDMW6024_2024_1.png)

| Paramètres       | Description                                                               |
|------------------|---------------------------------------------------------------------------|
| Nouvel utilisateur | Créer un nouvel utilisateur dans Active Directory.                        |
| Nouveau groupe    | Créer un nouveau groupe dans Active Directory                             |
| Activer          | Réactiver un objet, le rendant actif.                                     |
| Désactiver       | Désactiver un objet sans le supprimer.                                    |
| Déverrouiller    | Libérer un compte utilisateur qui a été verrouillé.                       |
| Réinitialiser le mot de passe | Attribuer un nouveau mot de passe à un compte utilisateur.                |
| Supprimer        | Supprimer définitivement un objet d'Active Directory.                     |
| Propriétés       | Voir ou modifier les attributs et paramètres d'un objet.                  |
| BitLocker        | Récupérer le mot de passe de récupération pour une clé chiffrée par BitLocker. |
| Rechercher       | Localiser tout objet dans le domaine, comme des utilisateurs, groupes ou ordinateurs. |