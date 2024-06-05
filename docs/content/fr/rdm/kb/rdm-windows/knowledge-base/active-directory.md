---
eleventyComputed:
  title: Entrée du tableau de bord Active Directory
  description: L'entrée du tableau de bord Active Directory offre un moyen centralisé et efficace pour les administrateurs système et les professionnels de l'informatique de gérer et d'interagir avec les services Active Directory (AD) directement au sein de {{ fr.RDM }}.
---
L'***entrée du tableau de bord Active Directory*** offre un moyen centralisé et efficace pour les administrateurs système et les professionnels de l'informatique de gérer et d'interagir avec les services Active Directory (AD) directement au sein de {{ fr.RDM }}.

Il est possible de modifier les groupes Active Directory et d'ajouter un utilisateur à ceux-ci en utilisant le ***tableau de bord AD*** (console). Pour ce faire, vous devez d'abord restreindre l'accès au dossier qui contient les outils administratifs.

{% snippet, "badgeInfo" %}
Les étapes dans la vidéo sont les mêmes que celles décrites ci-dessus.
{% endsnippet %}

 {% youtube 'FtSlp_TVAxE?si=Smo9UcN83hrjkXQr&start=1099' %}

1. Créer ou sélectionner un dossier.
1. Aller à ***Propriétés du dossier*** – ***Sécurité*** – ***Permissions*** – ***Définir les permissions à Jamais*** (ce qui signifie que personne sauf les admins ne peut accéder au dossier). ***Accorder l'accès*** peut toujours être utilisé pour plus de granularité.
1. Cliquer ***OK*** pour sauvegarder.

## Créer l'entrée du tableau de bord Active Directory

1. Sélectionner le dossier créé et cliquer ***Nouvelle entrée***.
1. Sélectionner ***Tableau de bord Active Directory***.
1. Entrer les informations.
1. Aller à ***Journaux***.
1. Choisir ***Personnalisé*** dans le menu déroulant ***Ouvrir les journaux***.
1. Cocher ***Demander un commentaire à l'ouverture***.
1. Sélectionner ***Le commentaire à l'ouverture est requis*** et ***le numéro de ticket est requis***.

{% snippet, "badgeInfo" %}
En activant la fonctionnalité [***Journaux***](/rdm/commands/window/panels/logs), les utilisateurs devront commenter et créer un numéro de ticket pour expliquer pourquoi ils effectuent une action sur l'entrée. Ce type de comportement peut être appliqué à presque toutes les entrées dans {{ fr.RDM }}.
{% endsnippet %}

6. Cliquer ***Ajouter*** pour sauvegarder.
1. Ouvrir votre session.
1. La ***fenêtre de commentaire de session ouverte*** s'ouvre.
1. Entrer le ***Numéro de ticket*** et le ***Commentaire***.
1. Cliquer ***OK***.

### Ajouter un utilisateur à un groupe AD

1. Ouvrir votre session.
1. Naviguer jusqu'à l'emplacement du groupe d'utilisateurs.
1. Cliquer ***Propriétés***.
1. Naviguer jusqu'à l'onglet ***Membres***.
1. Cliquer ***Ajouter***.
1. Sélectionner l'utilisateur et cliquer ***OK*** pour sauvegarder.
1. L'utilisateur a été ajouté avec succès.

### Paramètres de l'entrée du tableau de bord Active Directory

Voici une liste des paramètres disponibles dans l'interface de l'***entrée du tableau de bord Active Directory***.

![Interface de l'entrée du tableau de bord Active Directory](https://cdnweb.devolutions.net/docs/RDMW6024_2024_1.png)

| Paramètres      | Description                                                         |
|-----------------|---------------------------------------------------------------------|
| Nouvel Utilisateur | Créer un ***nouvel utilisateur*** dans Active Directory.            |
| Nouveau Groupe  | Créer un ***nouveau groupe*** dans Active Directory                 |
| Activer        | Réactiver un objet, le rendant actif.                               |
| Désactiver      | Désactiver un objet sans le supprimer.                              |
| Déverrouiller   | Libérer un compte utilisateur qui a été verrouillé.                 |
| Réinitialiser le Mot de Passe | Attribuer un ***nouveau mot de passe*** à un compte utilisateur.    |
| Supprimer       | Supprimer définitivement un objet d'Active Directory.               |
| Propriétés      | Voir ou modifier les attributs et paramètres d'un objet.            |
| BitLocker       | Récupérer le mot de passe de récupération pour une clé ***chiffrée par BitLocker***. |
| Recherche       | Localiser tout objet dans le domaine, tels que les utilisateurs, groupes, ou ordinateurs. |
