---
eleventyComputed:
  title: Profils de l'interface utilisateur
  description: Les profils de l'interface utilisateur permettent aux utilisateurs d'avoir une expérience sur mesure dans {{ fr.DVLS }} et d'autres produits Devolutions en fonction de leurs tâches et rôles.
---
***Les profils de l'interface utilisateur*** permettent aux utilisateurs d'avoir une expérience sur mesure dans {{ fr.DVLS }} et d'autres produits Devolutions
en fonction de leurs tâches et rôles. Il existe deux profils différents :

* ***Professionnel de l'informatique*** : Ce profil affiche tous les types d'entrées et options à condition que l'utilisateur dispose des permissions nécessaires pour y accéder. Ce profil offre tout ce que nos solutions ont à offrir, des options avancées et l'accès à toutes les entrées et informations.
* ***Utilisateur d'affaires*** : Ce profil est spécifiquement conçu pour les utilisateurs qui n'ont pas besoin d'accéder aux entrées de connexion à distance et aux options administratives. Nos interfaces ont été simplifiées pour minimiser les options principalement destinées aux professionnels de l'informatique, permettant ainsi aux utilisateurs d'affaires de se concentrer sur leurs tâches quotidiennes sans complexités inutiles.

Les utilisateurs se verront attribuer le profil ***Par défaut***, qui peut être modifié dans
***Administration – Paramètres système – Général – Modèle d'utilisateur***. Pour les administrateurs, le profil par défaut est
***Professionnel de l'informatique***. Pour les utilisateurs, c'est ***Utilisateur d'affaires***.

![Administration – Paramètres système – Général – Modèle d'utilisateur](https://cdnweb.devolutions.net/docs/DVLS2022_2024_1.png)

Les utilisateurs peuvent individuellement le changer dans la section ***Préférences*** de leur compte.

![Compte – Préférences – Général – Profil de l'interface utilisateur](https://cdnweb.devolutions.net/docs/DVLS2023_2024_1.png)

## Vue d'ensemble détaillée

Ci-dessous, vous pouvez trouver des tableaux détaillant les différences entre les profils ***Utilisateur d'affaires*** et ***Professionnel de l'informatique***
dans {{ fr.DVLS }}.

### Nouvelles entrées

![Nouvelles entrées](https://cdnweb.devolutions.net/docs/DVLS2024_2024_1.png)

Ce tableau montre les types d'entrées qui peuvent être créés en fonction de votre profil d'interface utilisateur.

{% snippet, "badgeInfo" %}
Notez que cela s'applique uniquement à la création de nouvelles entrées et n'affecte pas les entrées existantes.
{% endsnippet %}

| TYPES D'ENTRÉES         |                                            UTILISATEUR D'AFFAIRES                                            |    PROFESSIONNEL DE L'INFORMATIQUE     |
|-------------------------|:------------------------------------------------------------------------------------------------------------:|:--------------------------------------:|
| Populaires              | {{ icon.badgeNotice }}<br>(seulement ***Carte de crédit***, ***Document***, ***Dossier***, et ***Site Web***) | {{ icon.badgeNotice }}                 |
| Session                 |                                                                                                              | {{ icon.badgeNotice }}                 |
| Gestion à distance      |                                                                                                              | {{ icon.badgeNotice }}                 |
| Gestion des identifiants|                                                                                                              | {{ icon.badgeNotice }}                 |
| Information             |                                       {{ icon.badgeNotice }}                                                 | {{ icon.badgeNotice }}                 |
| Dossier                 |                                       {{ icon.badgeNotice }}                                                 | {{ icon.badgeNotice }}                 |
| Contact                 |                                       {{ icon.badgeNotice }}                                                 | {{ icon.badgeNotice }}                 |
| Document                |                                       {{ icon.badgeNotice }}                                                 | {{ icon.badgeNotice }}                 |
| VPN/Tunnel/Passerelle   |                                                                                                              | {{ icon.badgeNotice }}                 |
| Gestion des actifs IT   |                                                                                                              | {{ icon.badgeNotice }}                 |
| Synchroniseur           |                                                                                                              | {{ icon.badgeNotice }}                 |
| Divers                  |                                       {{ icon.badgeNotice }}                                                 | {{ icon.badgeNotice }}                 |
| Modèle                  |                                       {{ icon.badgeNotice }}                                                 | {{ icon.badgeNotice }}                 |

### Widgets du tableau de bord {{ fr.VLT_MAJ }}

![Widgets du tableau de bord {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/DVLS2025_2024_1.png)

Ce tableau montre les différents widgets qui peuvent être affichés dans votre ***tableau de bord {{ fr.VLT_MAJ }}*** en fonction de votre
profil d'interface utilisateur. La visibilité du widget peut être réglée sur ***Toujours***, ***Jamais***, ou ***Si non vide***.

| WIDGETS                                |     UTILISATEUR D'AFFAIRES      |    PROFESSIONNEL DE L'INFORMATIQUE     |
|----------------------------------------|:-------------------------------:|:--------------------------------------:|
| Demandes d'accès approuvées            | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }}                 |
| Entrées rompues                        | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }}                 |
| Certificats                            |                                 | {{ icon.badgeNotice }}                 |
| Réservées                              | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }}                 |
| Entrées                                | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }}                 |
| Entrées expirées                       | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }}                 |
| Entrées expirant                       | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }}                 |
| Tâches en retard                       | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }}                 |
| Réservations PAM                       | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }}                 |
| Demandes d'accès en attente            | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }}                 |
| Demandes d'accès {{ fr.VLT }} en attente| {{ icon.badgeNotice }}          | {{ icon.badgeNotice }}                 |
| Tâches à venir                         | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }}                 |
| {{ fr.VLT_MAJ }}s                      | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }}                 |
| Âges des mots de passe                 |                                 | {{ icon.badgeNotice }}                 |
| Types                                  |                                 | {{ icon.badgeNotice }}                 |
