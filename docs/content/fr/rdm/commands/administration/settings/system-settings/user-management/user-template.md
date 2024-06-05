---
eleventyComputed:
  title: Modèle d'utilisateur
  description: Le modèle d'utilisateur vous permet de modifier les paramètres utilisateur qui sont sélectionnés par défaut lors de la création d'un nouvel utilisateur.
---
***Modèle d'utilisateur*** permet de modifier les paramètres utilisateur qui sont sélectionnés par défaut lors de la création d'un nouvel utilisateur dans [***Gestion des utilisateurs***](/rdm/windows/commands/administration/management/user-management/).

![Administration – Paramètres du système – Gestion des utilisateurs – Modèle d'utilisateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2173.png)

| PARAMÈTRE            | DESCRIPTION                                                           |
|--------------------|-----------------------------------------------------------------------|
| Mode hors ligne       | Définit le paramètre par défaut pour ce que les utilisateurs peuvent faire en [***Mode hors ligne***](/rdm/windows/data-sources/offline-mode/) lors de la création d'un nouvel utilisateur. Choisir entre ***Désactivé*** (désactive le mode hors ligne), ***Cache seulement***, ***Lecture seule***, et ***Lecture/écriture***.                |
| Type d'utilisateur          | Définit le [type d'utilisateur](/rdm/windows/commands/administration/management/user-management/user-types/) sélectionné par défaut lors de la création d'un nouvel utilisateur. Choisir entre ***Administrateur***, ***Utilisateur***, et ***Utilisateur en lecture seule***.                                                       |
| Type de licence utilisateur  | Définit le type de licence utilisateur sélectionné par défaut lors de la création d'un nouvel utilisateur. Choisir entre ***Par défaut***, ***Gestion des connexions***, et ***Gestion des mots de passe***.                                                                                                           |
| Profil d'interface utilisateur      | Définit le [profil d'interface utilisateur](/rdm/windows/user-interface/customization/usage-profiles/) sélectionné par défaut lors de la création d'un nouvel utilisateur. Choisir entre ***Par défaut***, ***Professionnel de l'IT***, et ***Utilisateur d'affaires***.                                                           |
| {{ fr.VLT }} par défaut de l'utilisateur | Définit le(s) {{ fr.VLT }}(s) par défaut pour les utilisateurs. Les sélectionner à partir d'une liste de {{ fr.VLT }}.   |
| Désactiver {{ fr.UVLT }}     | Définit si le {{ fr.UVLT }} est désactivé ou non par défaut lors de la création d'un nouvel utilisateur.    |

{% snippet, "badgeInfo" %}
D'autres options peuvent être activées/désactivées en fonction du type de source de données.
{% endsnippet %}
