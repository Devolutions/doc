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

- Créer ou sélectionner un dossier.
- Aller à ***Propriétés du dossier*** – ***Sécurité*** – ***Permissions*** – ***Définir les permissions à Jamais*** (ce qui signifie que personne à part les admins ne peut accéder au dossier). ***Accorder l'accès*** peut toujours être utilisé pour plus de granularité.
- Cliquer ***OK*** pour sauvegarder.

## Créer l'entrée du tableau de bord Active Directory

- Sélectionner le dossier créé et cliquer ***Nouvelle entrée***.
- Sélectionner ***Tableau de bord Active Directory***.
- Entrer les informations.
- Aller à ***Journaux***.
- Choisir ***Personnalisé*** dans le menu déroulant ***Ouvrir les journaux***.
- Cocher ***Demander un commentaire à l'ouverture***.
- Sélectionner ***Le commentaire à l'ouverture est requis*** et ***le numéro de ticket est requis***.

{% snippet, "badgeInfo" %}
En activant la fonctionnalité [***Journaux***](/rdm/commands/window/panels/logs), les utilisateurs devront commenter et créer un numéro de ticket pour expliquer pourquoi ils effectuent une action sur l'entrée. Ce type de comportement peut être appliqué à presque toutes les entrées dans {{ fr.RDM }}.
{% endsnippet %}

- Cliquer ***Ajouter*** pour sauvegarder.
- Ouvrir votre session.
- La ***fenêtre de commentaire de session ouverte*** s'ouvre.
- Entrer le ***Numéro de ticket*** et le ***Commentaire***.
- Cliquer ***OK***.

### Ajouter un utilisateur à un groupe AD

- Ouvrir votre session.
- Naviguer jusqu'à l'emplacement du groupe d'utilisateurs.
- Cliquer ***Propriétés***.
- Naviguer jusqu'à l'onglet ***Membres***.
- Cliquer ***Ajouter***.
- Sélectionner l'utilisateur et cliquer ***OK*** pour sauvegarder.
- L'utilisateur a été ajouté avec succès.

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
| Recherche       | Localiser tout objet dans le domaine, tels que les utilisateurs, les groupes ou les ordinateurs. |
