---
eleventyComputed:
  title: Activer l'accès temporaire
---
Avec la fonctionnalité ***Accès Temporaire***, vous pouvez fournir à un utilisateur désigné un accès temporaire à une entrée pendant un cadre temporel désigné. Cela est beaucoup plus sécurisé que de changer les droits d'accès de l'utilisateur puis de les rétablir une fois la tâche accomplie.

{% snippet, "badgeCaution" %}
Ces paramètres sont uniquement disponibles pour les sources de données avancées {{ fr.DVLS }}, Microsoft SQL Server et Microsoft Azure SQL.
{% endsnippet %}

## Paramètres Globaux d'Accès Temporaire

***L'Accès Temporaire*** est réglé sur ***Refusé*** par défaut dans {{ fr.RDM }}.

1. Pour activer la fonctionnalité, aller à ***Administration – {{ fr.VLT_MAJ }} Paramètres – Paramètres de Sécurité – Accès Temporaire***.
![Administration – {{ fr.VLT_MAJ }} Paramètres – Paramètres de Sécurité – Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4856.png)

1. Régler le ***Mode*** sur ***Autorisé***.
1. Optionnel : Changer les ***Autorisateurs*** en ***Personnalisé*** pour ajouter des utilisateurs à la liste des autorisateurs.
{% snippet, "badgeInfo" %}
Par défaut, seuls les administrateurs peuvent autoriser les demandes d'accès temporaire.
{% endsnippet %}

![Ajouter des Autorisateurs](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4857.png)

4. Cliquer sur ***OK***.

## Paramètres d'Accès Temporaire Granulaires

***L'Accès Temporaire*** peut également être réglé de manière granulaire sur chaque entrée et dossier.

1. Ouvrir les ***Propriétés*** de votre entrée ou dossier.
1. Aller à ***Paramètres de Sécurité – Accès Temporaire***.

![Propriétés – Paramètres de Sécurité – Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4858.png)

3. Sélectionner un ***Mode***.
{% snippet, "badgeInfo" %}
Par défaut, le ***Mode*** est réglé pour hériter des paramètres du ***Racine***. Vous pouvez choisir d'hériter d'un autre dossier, autoriser, ou même refuser l'accès temporaire de cette entrée ou dossier.
{% endsnippet %}

4. Sélectionner ***Autorisateurs***.
{% snippet, "badgeInfo" %}
Par défaut, les ***Autorisateurs*** sont réglés pour hériter des paramètres du ***Racine***. Vous pouvez choisir d'hériter d'un autre dossier, autoriser l'autorisation par les administrateurs seulement, ou personnaliser et ajouter des utilisateurs à la liste de cette entrée ou dossier.
{% endsnippet %}

5. Cliquer sur ***OK***.
