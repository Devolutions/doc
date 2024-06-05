---
eleventyComputed:
  title: Informations sur ma source de données
---
La fenêtre ***Informations sur la Source de Données*** affiche diverses informations liées à la source de données actuelle, telles que l'utilisateur actuel et l'accès à la sécurité.

{% snippet, "badgeInfo" %}
La vue ***Informations sur Ma Source de Données*** peut être différente selon le [Type de Source de Données](/rdm/windows/data-sources/data-sources-types/). Ce sujet utilise une source de données SQL Server.
{% endsnippet %}

![Fichier – Informations sur Ma Source de Données](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3567.png)

## Utilisateur et sécurité

### Général

L'onglet Général affiche des informations sur l'utilisateur actuel et la configuration de la source de données.
![Informations sur Ma Source de Données - Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10881.png)

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Utilisateur de la base de données | Le nom de l'utilisateur actuellement connecté à la base de données.                             |
| Utilisateur                  | L'utilisateur Windows actuel.                                                                   |
| Description                 | Affiche la description de l'utilisateur connecté à la source de données.                       |
| Est administrateur          | Indique si l'utilisateur est un administrateur.                                                 |
| Autoriser le mode hors ligne | Indique si l'utilisateur peut utiliser la source de données en mode hors ligne.                 |
| Autoriser le glisser-déposer | Indique si l'utilisateur peut glisser-déposer des entrées dans la source de données.            |
| Est Auto Actualisation      | Indique si la source de données s'actualise automatiquement.                                    |
| Intervalle d'auto actualisation | Indique le délai pour que l'auto actualisation se produise.                                     |
| Est Configuration Deux Facteurs | Indique si la source de données est configurée avec un second facteur d'authentification.       |


### Entrées

![Informations sur Ma Source de Données – Entrées](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10065.png)

| OPTION                                 | DESCRIPTION                                                                   |
|----------------------------------------|-------------------------------------------------------------------------------|
| Ajouter, Modifier et Supprimer des entrées | Indique si l'utilisateur a le droit d'ajouter, de modifier ou de supprimer des entrées. |
| Voir la section d'informations         | Indique si l'utilisateur peut voir la section d'informations des entrées.     |
| Importer et Exporter des entrées       | Indique si l'utilisateur a le privilège d'importer ou d'exporter des entrées. |
| Autoriser l'ajout d'entrée dans le dossier {{ fr.VLT }} | Indique si l'utilisateur peut ajouter des entrées dans le {{ fr.VLT }} de la source de données. |


### Groupes d'utilisateurs

L'onglet ***Groupes d'Utilisateurs*** affiche les groupes d'utilisateurs dont l'utilisateur est membre et les droits liés à ces groupes d'utilisateurs.

{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible avec une source de données SQL Server/Azure SQL et une {{ fr.DVLS }} (DVLS).
{% endsnippet %}

![!!RDMWin2219](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2219.png)
