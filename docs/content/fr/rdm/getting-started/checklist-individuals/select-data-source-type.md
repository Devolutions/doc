---
eleventyComputed:
  title: Sélectionner un type de source de données – Individus
  description: Pour vous aider à sélectionner un type de source de données, voici un ensemble de préoccupations et la liste des sources de données qui peuvent servir dans un tel contexte.
---
Ce sujet est destiné principalement aux individus, mais aussi aux équipes de trois utilisateurs ou moins qui ne souhaitent pas mettre en place
de sécurité.

Pour vous aider à sélectionner un type de source de données, voici un ensemble de préoccupations et la liste des sources de données qui peuvent servir dans un tel
contexte. Si vous avez plusieurs préoccupations, créer l'intersection de tous les ensembles pour isoler une liste de choix.

{% snippet, "shieldWarning" %}
Lors du choix de tout type de source de données qui n'est pas en local, vous devez considérer la sécurité des données au repos et en
transit. Nous vous recommandons fortement de chiffrer davantage vos données en utilisant une clé maîtresse pour les solutions basées sur des fichiers ou
un [fournisseur de sécurité](/rdm/commands/administration/security/security-providers/)
pour [les sources de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). Cela garantit que seulement
vous pouvez lire les données.

Pour des fonctionnalités de sécurité supplémentaires telles que le chiffrement au repos et en transit, aucun accès direct à la base de données, et
le chiffrement à connaissance zéro, considérer
nos [sources de données d'entreprise](/rdm/windows/getting-started/checklist-teams/select-data-source-type/).
{% endsnippet %}

| SOURCE DE DONNÉES |         LOCAL          | AUTO-HÉBERGÉ |      BASÉ SUR LE NUAGE       | PARTAGÉ ENTRE VOS ORDINATEURS |     FONCTIONNE HORS LIGNE      | MULTI-UTILISATEUR |
|-------------------|:----------------------:|:------------:|:----------------------------:|:-----------------------------:|:------------------------------:|:-----------------:|
| {{ fr.DHUBP }}    |                        |              | {{ icon.badgeNotice }}       |    {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}         |                   |
| SQLite            | {{ icon.badgeNotice }} |              |                              |                               | {{ icon.badgeNotice }}         |                   |
| XML               | {{ icon.badgeNotice }} |              |                              |                               | {{ icon.badgeNotice }}         |                   |
| {{ fr.DOD }}      |                        |              | {{ icon.badgeNotice }}       |    {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}         |                   |
| Dropbox           |                        |              | {{ icon.badgeNotice }}       |    {{ icon.badgeNotice }}     |                                |  *Note 1*         |
| Google Drive      |                        |              | {{ icon.badgeNotice }}       |    {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}         |                   |

## Notes

### Note 1

Il n'y a pas de protection contre les problèmes de contention de données. La source de données est conçue pour permettre à un utilisateur d'accéder aux données
depuis plusieurs ordinateurs. Par conséquent, il est impossible pour plusieurs utilisateurs d'utiliser les données en même temps.

### Note 2

Le fichier XML maître est maintenu par un seul utilisateur et synchronisé par {{ fr.RDM }} vers un site Web qui est hébergé selon vos
spécifications. L'accès aux données via une URL garantit qu'elles sont en lecture seule pour les autres utilisateurs.  
