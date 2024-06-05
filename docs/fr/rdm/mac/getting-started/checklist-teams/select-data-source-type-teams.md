---
eleventyComputed:
  title: Sélectionner un type de source de données – entreprises
  description: Pour vous aider à sélectionner un type de source de données, voici un ensemble de préoccupations et la liste des sources de données qui peuvent servir dans un tel contexte.
---
Ce sujet est destiné aux entreprises qui utilisent les fonctionnalités proposées par notre Édition Équipe.

Pour vous aider à sélectionner un type de source de données, voici un ensemble de préoccupations et la liste des sources de données qui peuvent servir dans un tel contexte.

{% snippet, "shieldWarning" %}
Lors du choix de tout type de source de données qui n'est pas hébergé localement, vous devez prendre en compte la sécurité des données au repos et en transit. Nous vous recommandons fortement de chiffrer davantage vos données en utilisant une clé maîtresse pour les solutions basées sur des fichiers ou un [fournisseur de sécurité](/rdm/mac/commands/administration/security-provider/) pour les [sources de données avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). Cela garantit que vous seul pouvez lire les données.
{% endsnippet %}

| PRÉOCCUPATION                                   |     {{ fr.DVLS }}      |     {{ fr.DHUBB }}     |
|-------------------------------------------------|:----------------------:|:----------------------:|
| Données auto-hébergées                          | {{ icon.badgeNotice }} |                        |
| Données hébergées dans le nuage                 |                        | {{ icon.badgeNotice }} |
| Base de données non accessible aux utilisateurs finaux | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Chiffrement au repos et en transit              | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Connaissance zéro sur les données sensibles     |                        | {{ icon.badgeNotice }} |
| Module de Gestion des Accès Privilégiés (PAM)   | {{ icon.badgeNotice }} |        *Note 1*        |
| Comptes AD utilisés pour l'authentification     | {{ icon.badgeNotice }} |                        |
| Appartenance à un groupe AD utilisée pour assigner des permissions | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Journaux d'activité                             | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Données accessibles globalement                 |        *Note 2*        | {{ icon.badgeNotice }} |
| Connexions Juste-à-Temps (JAT) via {{ fr.DGW }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |

## Notes

### Note 1

Le module ***Gestion des Accès Privilégiés*** dans {{ fr.DHUBB }} est actuellement en développement bêta. Veuillez contacter notre [département des ventes](mailto:sales@devolutions.net) pour plus d'informations.

### Note 2

Vous ne devriez pas exposer une instance {{ fr.DVLS }} à Internet sans être capable de la protéger contre les attaques DDoS. Des mots de passe forts doivent être utilisés, ainsi que des noms de compte obscurs qui ne sont pas facilement déduits par l'exploration de données sociales.  
