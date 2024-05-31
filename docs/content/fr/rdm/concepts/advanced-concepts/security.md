---
eleventyComputed:
  title: Sécurité
  description: "{{ fr.RDM }} impose deux étapes d'authentification successives pour accorder l'accès à la source de données. L'authentification à deux facteurs est intégrée directement dans le logiciel et les identifiants sont injectés au nom de l'utilisateur lors du lancement d'une connexion, empêchant ainsi l'utilisateur de jamais connaître les identifiants."
---
Au cœur de {{ fr.RDM }} se trouve la sécurité. Les champs sensibles, tels que les mots de passe, sont toujours chiffrés quelle que soit la [source de données](/rdm/windows/concepts/basic-concepts/data-sources/) utilisée. Avec les sources de données Microsoft SQL Server (et Azure SQL Server), ajouter un [Fournisseurs de Sécurité](/rdm/windows/commands/administration/settings/security-providers/) pour garantir que les données de configuration soient illisibles même en cas d'accès direct à la base de données.

De plus, protéger l'accès direct à {{ fr.RDM }} via un [mot de passe d'application](/rdm/kb/rdm-windows/knowledge-base/rdm-security-dashboard/#configuration-files-should-be-encrypted-using-an-application-password) (chiffrant davantage les fichiers de configuration) et ajouter une [authentification à deux facteurs](/rdm/kb/rdm-windows/how-to-articles/enable-2fa-users-sql-server/) (A2F) pour se protéger contre les accès non autorisés. Disponible pour les Sources de Données Avancées, utiliser des rôles, des groupes et des [permissions avec contrôle d'accès basé sur les rôles](/rdm/windows/concepts/advanced-concepts/permissions-rbac-roles/) (RBAC) pour verrouiller correctement les entrées, dossiers et coffres uniquement aux personnes qui en ont besoin.

{{ fr.RDM }} s'intègre de manière transparente avec [{{ fr.DVLS }}](/server/getting-started/), offrant des [rapports et audits](/rdm/windows/concepts/advanced-concepts/logs-reports-audits/) avancés avec un accès intuitif basé sur le Web. Allégeant la charge des équipes, l'intégration de {{ fr.RDM }} avec [{{ fr.DHUB }}](/hub/getting-started/create-hub/) est un gestionnaire de mots de passe sécurisé basé sur le cloud pour les équipes.

### Sujets associés
* [Tableau de Bord de Sécurité {{ fr.RDM }}](/rdm/kb/rdm-windows/knowledge-base/rdm-security-dashboard/)
* [Changer la Clé Maîtresse](/rdm/windows/commands/file/change-master-key/)
* [{{ fr.DSEND }}](/rdm/kb/general-knowledge/devolutions-send-standalone/)
* [Fournisseurs de Sécurité](/rdm/windows/commands/administration/settings/security-providers/)
* [Groupes d'Utilisateurs](/rdm/windows/commands/administration/management/user-management/#user-groups)
* [Yubikey](/rdm/windows/data-sources/multi-factor-authentication/yubikey/)

### Voir aussi
* [Sécurité](/rdm/windows/commands/file/options/security/)
* [Paramètres de Sécurité](/rdm/commands/administration/settings/system-settings/vault-management/security/)