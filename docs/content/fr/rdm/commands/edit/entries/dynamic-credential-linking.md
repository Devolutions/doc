---
eleventyComputed:
  title: Liaison dynamique des identifiants
  description: La liaison dynamique des identifiants crée une seule entrée d'identifiant pour un gestionnaire d'identifiants pris en charge et utilise cet identifiant avec tout type d'entrée qui supporte le dépôt d'identifiants.
---
La liaison dynamique des identifiants crée une seule entrée d'identifiant pour un gestionnaire d'identifiants pris en charge et utilise cet identifiant avec tout type d'entrée qui supporte le dépôt d'identifiants.

## Gestionnaires d'identifiants pris en charge

{% snippet, "badgeInfo" %}
Les entrées d'identifiants suivantes sont uniquement prises en charge avec {{ fr.RDM }} Équipe.
{% endsnippet %}

Voici la liste de tous les gestionnaires d'identifiants implémentés qui prennent en charge la liaison dynamique des identifiants :

* 1Password
* Bitwarden
* Dashlane
* {{ fr.DHUB }}
* {{ fr.DVLS }}
* KeePass
* Keeper
* LastPass
* Mateso Password Safe
* PassPortal
* Password List
* Password Manager Pro
* Password Safe
* PasswordState
* Pleasant Password Server
* RoboForm
* Secret Server
* Sticky Password
* TeamPass
* True Key
* Zoho Vault

{% snippet, "badgeInfo" %}
Un lien d'identifiant dynamique peut également être appliqué à un type d'entrée Dossier ou VPN si souhaité.
{% endsnippet %}

## Paramètres

1. Créer une entrée d'identifiant et cocher ***Toujours demander avec la liste***.
![Paramètres 1Password](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11064.png)
1. Lors de la création d'une entrée, sélectionner ***Dépôt d'identifiants*** dans la liste déroulante ***Identifiants***, puis sélectionner l'entrée d'identifiant créée à l'étape précédente. Remarquer qu'une nouvelle action apparaît juste en dessous de la liste déroulante de sélection d'identifiant.
![Sélectionner dans la liste](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11065.png)
1. Sélectionner un identifiant dans la liste.
![Liste des identifiants LastPass](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10657.png)
1. Le lien change pour le nom de l'identifiant. Pour supprimer l'identifiant lié et ramener la demande automatique de la liste, cliquer simplement sur le "X".
![Nom de l'identifiant](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11066.png)
