---
eleventyComputed:
  title: Permissions
  status: Sujet traduit en allemand
---
{% youtube 'FQACxCIj_GU' %}

La fenêtre ***Permissions***, qui est uniquement disponible dans une [source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), peut être trouvée dans chaque propriété d'entrée dans la section ***Sécurité*** – ***Permission*** (ou ***Sécurité*** – ***Permissions héritées*** pour la racine {{ fr.VLT }}).

Le système de permission basé sur les groupes d'utilisateurs peut offrir un contrôle très précis de la sécurité. Voici un aperçu de la fenêtre de permission :
![Panneau de permission](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6083.png)

| OPTION              | DESCRIPTION                                                                                                                |
|---------------------|----------------------------------------------------------------------------------------------------------------------------|
| Permission          | Définit le mode de permission. Sélectionner entre : <br> <ul><li>***Hérité (Par défaut)*** : Hérite des permissions des groupes parents.</li><li>***Personnalisé*** : Vous permet de spécifier une valeur personnalisée pour chacune des permissions.</li><li>***Autorisé*** : Accorde toutes les permissions ci-dessous à tout le monde.</li><li>***Interdit*** : N'accorde la permission à personne sauf aux administrateurs.</li></ul>                                                                                                           |
| Octroyer l'accès    | Permet [d'octroyer l'accès par lot](/rdm/commands/administration/settings/system-settings/vault-management/default-permissions/batch-grant-access/) à une entrée spécifique ou à des entrées.              |
| Valeurs héritées    | Indique ce qui est hérité des groupes parents.                                                                            |
| Sélectionner les groupes d'utilisateurs  | Vous permet de sélectionner les utilisateurs / groupes d'utilisateurs à qui accorder la permission. Disponible uniquement si la permission est définie sur ***Personnalisé***. |

![Octroi d'accès par lot](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6082.png)
