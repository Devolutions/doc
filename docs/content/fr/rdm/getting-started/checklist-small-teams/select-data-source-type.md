---
eleventyComputed:
  title: Sélectionner un type de source de données – petites équipes
  description: Pour vous aider à sélectionner un type de source de données, voici un ensemble de préoccupations et la liste des sources de données SQL qui peuvent servir dans un tel contexte.
---
Ce sujet est destiné aux petites équipes de 15 utilisateurs au maximum qui utilisent les fonctionnalités offertes par notre Édition Équipe.

Pour vous aider à sélectionner un type de source de données, voici un ensemble de préoccupations et la liste des sources de données SQL qui peuvent servir dans un tel contexte.

{% snippet, "shieldWarning" %}
Lors du choix de tout type de source de données qui n'est pas sur site, vous devez considérer la sécurité des données au repos et en transit. Nous vous recommandons fortement de chiffrer davantage vos données en utilisant une clé maîtresse pour les solutions basées sur des fichiers ou un [fournisseur de sécurité](/rdm/commands/administration/security/security-providers/) pour [les sources de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). Cela garantit que vous seul pouvez lire les données.

Pour des fonctionnalités de sécurité supplémentaires telles que le chiffrement au repos et en transit, aucun accès direct à la base de données et le chiffrement à connaissance zéro, envisagez nos [sources de données d'entreprise](/rdm/windows/getting-started/checklist-teams/select-data-source-type/).
{% endsnippet %}

| PRÉOCCUPATION                        |       SQL SERVER       |       SQL AZURE        |
|--------------------------------------|:----------------------:|:----------------------:|
| Base de données non accessible aux utilisateurs finaux |     Notes 1 et 2      |         Note 1         |
| Comptes AD utilisés pour l'authentification  | {{ icon.badgeNotice }} |                        |
| Données stockées sur site              | {{ icon.badgeNotice }} |                        |
| Journaux d'activité                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Données accessibles globalement             |         Note 3         | {{ icon.badgeNotice }} |
| Cache local optionnel des connexions  | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |

## Notes

### Note 1

Les administrateurs peuvent créer des comptes d'utilisateurs finaux sans partager de mots de passe. Une définition de source de données verrouillée est importée pour chaque utilisateur final. Cela nécessite beaucoup de travail manuel de la part de l'administrateur.

### Note 2

La sécurité intégrée, une technologie Microsoft, permet d'accéder à une instance de SQL Server sans envoyer d'informations d'identification, en utilisant le jeton fourni par l'authentification sur votre ordinateur Windows. Cela permet aux utilisateurs de se connecter directement à la base de données en utilisant d'autres outils. Elle ne devrait pas être utilisée si vous devez empêcher l'accès direct à la base de données.

Notre source de données SQL Server offre une troisième option d'authentification, à savoir le type d'utilisateur ***Custom (Devolutions)***. Cela permet à l'utilisateur d'être impersonnalisé et donc de ne pas être informé des informations d'identification utilisées pour se connecter à la base de données. Voir [Gestion des utilisateurs](/rdm/windows/commands/administration/management/user-management/) pour plus de détails.

### Note 3

Vous pouvez exposer une base de données à Internet, mais vous devez utiliser SSL/TLS pour chiffrer le trafic et également vous protéger contre les attaques DDoS. Les services cloud comme Azure ont cette préoccupation au premier plan. Les paramètres par défaut du pare-feu doivent être de tout bloquer, puis d'ajouter des exceptions et des règles. Il est également nécessaire d'ouvrir le nombre minimum de ports requis, d'ajouter les numéros de ces ports à la liste des exceptions et de filtrer toutes les futures requêtes en fonction de leur origine.  
