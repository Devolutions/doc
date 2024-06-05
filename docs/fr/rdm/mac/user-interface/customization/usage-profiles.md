---
eleventyComputed:
  title: Profils d'interface utilisateur
  description: Les profils d'interface utilisateur permettent aux utilisateurs d'avoir une expérience sur mesure dans {{ fr.RDMMAC }} et d'autres produits Devolutions en fonction de leurs tâches et rôles.
---
***Les profils d'interface utilisateur*** permettent aux utilisateurs d'avoir une expérience sur mesure dans {{ fr.RDMMAC }} et d'autres produits Devolutions en fonction de leurs tâches et rôles. Il existe deux profils différents :

* ***Professionnel de l'informatique*** : Ce profil affiche tous les types d'entrées et options pourvu que l'utilisateur dispose des permissions nécessaires pour y accéder. Ce profil offre tout ce que nos solutions ont à offrir, des options avancées, et l'accès à toutes les entrées et informations.
* ***Utilisateur d'affaires*** : Ce profil est spécifiquement conçu pour les utilisateurs qui n'ont pas besoin d'accéder aux entrées de connexion à distance, aux options administratives, ou aux propriétés avancées. Nos interfaces ont été simplifiées pour minimiser les options principalement destinées aux professionnels de l'informatique, permettant ainsi aux utilisateurs d'affaires de se concentrer sur leurs tâches quotidiennes sans complexités inutiles.

Le profil est d'abord sélectionné lors du processus d'intégration de {{ fr.RDM }}.

![Sélection du profil d'interface utilisateur lors de l'intégration](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2076.png)

Si aucun n'est choisi ou si l'utilisateur décide d'en choisir un plus tard, il se verra attribuer le profil ***Par défaut***, qui peut être modifié dans ***Fichier – Préférences – Interface utilisateur – Interface utilisateur – Profil d'interface utilisateur*** ou dans l'interface web.

![Fichier – Préférences – Interface utilisateur – Interface utilisateur – Profil d'interface utilisateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2077.png)

Les utilisateurs peuvent individuellement changer ce paramètre dans l'onglet [***Compte***](/rdm/mac/user-interface/navigation-pane/account/) du ***{{ fr.NPANE }}***.

![Compte – Profil d'interface utilisateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2078.png)

## Vue détaillée

Ci-dessous, vous trouverez des tableaux détaillant les différences entre les profils d'interface utilisateur ***Utilisateur d'affaires*** et ***Professionnel de l'informatique***.

### Nouvelles entrées

![Nouvelles entrées](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2079.png)

Ce tableau montre les types d'entrées qui peuvent être créés en fonction de votre profil d'interface utilisateur.

{% snippet, "badgeInfo" %}
Notez que cela s'applique uniquement à la création de nouvelles entrées et n'affecte pas les entrées existantes.
{% endsnippet %}

| TYPES D'ENTRÉES         |     UTILISATEUR D'AFFAIRES      |    PROFESSIONNEL DE L'INFORMATIQUE     |
|-------------------------|:-------------------------------:|:--------------------------------------:|
| Session                 |                                 | {{ icon.badgeNotice }} |
| Gestion à distance      |                                 | {{ icon.badgeNotice }} |
| Gestion des identifiants|                                 | {{ icon.badgeNotice }} |
| Information             | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Dossier                 | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Contact                 | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Document                |                                 | {{ icon.badgeNotice }} |
| VPN/SSH/Passerelle      |                                 | {{ icon.badgeNotice }} |
| Gestion des actifs IT   |                                 | {{ icon.badgeNotice }} |
| Macro/Script/Outil      |                                 | {{ icon.badgeNotice }} |
| Synchroniseur           |                                 | {{ icon.badgeNotice }} |
| Divers                  |                                 | {{ icon.badgeNotice }} |
| Modèle                  | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |

### Widgets du tableau de bord {{ fr.VLT_MAJ }}

![Widgets du tableau de bord {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2080.png)

Ce tableau montre les différents widgets qui peuvent être affichés dans votre ***tableau de bord {{ fr.VLT_MAJ }}*** en fonction de votre profil d'interface utilisateur.

| WIDGETS                                |     UTILISATEUR D'AFFAIRES      |    PROFESSIONNEL DE L'INFORMATIQUE     |
|----------------------------------------|:-------------------------------:|:--------------------------------------:|
| Entrées rompues                        |                                 | {{ icon.badgeNotice }} |
| Certificats                            |                                 | {{ icon.badgeNotice }} |
| Réservés                               | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Entrées                                | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Entrées expirées                       | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Entrées expirant                       | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Tâches en retard                       | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Demandes d'accès en attente            | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Demandes d'accès {{ fr.VLT }} en attente| {{ icon.badgeNotice }}         | {{ icon.badgeNotice }} |
| Tâches à venir                         | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| {{ fr.VLT_MAJ }}s                      |                                 | {{ icon.badgeNotice }} |
| Âges des mots de passe                 |                                 | {{ icon.badgeNotice }} |
| Types                                  | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |

### Sections du ruban

![Sections du ruban](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2081.png)

Ce tableau montre les différentes sections disponibles dans votre ***Ruban*** en fonction de votre profil d'interface utilisateur.

| SECTIONS DU RUBAN |     UTILISATEUR D'AFFAIRES      |   PROFESSIONNEL DE L'INFORMATIQUE   |
|-------------------|:-------------------------------:|:-----------------------------------:|
| Accueil           | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Édition           | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Vue               | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Administration    |                                 | {{ icon.badgeNotice }} |
| Outils            |                                 | {{ icon.badgeNotice }} |
| Fenêtre           | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Aide              | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |

### Propriétés des entrées

![Propriétés des entrées](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2082.png)

Les sections disponibles dans ***les propriétés des entrées*** sont différentes en fonction de votre profil d'interface utilisateur. Les utilisateurs d'affaires voient la vue simplifiée des propriétés des entrées sans l'option de basculer vers toutes les propriétés, tandis que les professionnels de l'informatique voient toutes les propriétés par défaut mais ont l'option de basculer entre cette vue et la vue simplifiée.

{% snippet, "badgeInfo" %}
La disponibilité des sections des propriétés des entrées dépend également du type d'entrée comme d'habitude.
{% endsnippet %}

| PROPRIÉTÉS DES ENTRÉES                 |     UTILISATEUR D'AFFAIRES      |    PROFESSIONNEL DE L'INFORMATIQUE     |
|---------------------------------------|:-------------------------------:|:--------------------------------------:|
| Général                               | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Description                           | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Interface utilisateur                 | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Champs personnalisés                  |                                 | {{ icon.badgeNotice }} |
| Information sur l'entrée              | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Paramètres                            | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| VPN/SSH/Passerelle                    | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Événements                            |                                 | {{ icon.badgeNotice }} |
| Mot de passe à usage unique           |                                 | {{ icon.badgeNotice }} |
| Permissions / Permissions héritées    |                                 | {{ icon.badgeNotice }} |
| Gestion des mots de passe             |                                 | {{ icon.badgeNotice }} |
| Paramètres de sécurité                |                                 | {{ icon.badgeNotice }} |
| Enregistrement de session             |                                 | {{ icon.badgeNotice }} |
| Actif                                 |                                 | {{ icon.badgeNotice }} |
| Journaux                              |                                 | {{ icon.badgeNotice }} |
| Documentation                         |                                 | {{ icon.badgeNotice }} |
| Page d'accueil                        |                                 | {{ icon.badgeNotice }} |
| Gestion des actifs IT                 |                                 | {{ icon.badgeNotice }} |
| Gestion à distance                    |                                 | {{ icon.badgeNotice }} |
| Variables                             | {{ icon.badgeNotice }}          | {{ icon.badgeNotice }} |
| Outils                                |                                 | {{ icon.badgeNotice }} |
| Est en ligne (Ping/Scan de port)      |                                 | {{ icon.badgeNotice }} |
| Réveil par LAN                        |                                 | {{ icon.badgeNotice }} |
| Avancé                                |                                 | {{ icon.badgeNotice }} |

### Outils à distance

Les outils à distance ne sont pas disponibles avec le profil ***Utilisateur d'affaires***. Cela signifie que les utilisateurs ne verront pas les outils et sections d'outils dans le ***Ruban***, ***Tableau de bord***, propriétés des entrées, etc.
