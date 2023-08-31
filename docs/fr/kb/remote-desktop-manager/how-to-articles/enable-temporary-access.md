---
title: Activer l'accès temporaire
description: Grâce à la fonction d'Accès temporaire, vous pouvez donner à un utilisateur désigné un accès temporaire à une entrée pendant une durée déterminée. Cette méthode est beaucoup plus sécuritaire que de modifier les droits d'accès de l'utilisateur, puis de les modifier à nouveau une fois la tâche accomplie.
keywords:
- temporary access
- accès temporaire
---
Grâce à la fonction d'***Accès temporaire***, vous pouvez donner à un utilisateur désigné un accès temporaire à une entrée pendant une durée déterminée. Cette méthode est beaucoup plus sécuritaire que de modifier les droits d'accès de l'utilisateur, puis de les modifier à nouveau une fois la tâche accomplie.

{% snippet icon.badgeCaution %}
Ces paramètres sont uniquement disponibles pour les sources de données avancées {{ fr.DVLS }}, Microsoft SQL Server et Microsoft Azure SQL.
{% endsnippet %}

## Paramètres globaux d'accès temporaire

Par défaut, l'***Accès temporaire*** est défini à ***Refusé*** dans {{ fr.RDM }}.
1. Pour activer la fonctionnalité, accéder à ***Administration – Paramètres du {{ fr.VLT }} – Paramètres de sécurité – Accès temporaire***.

![Administration – Paramètres du {{ fr.VLT }} – Paramètres de sécurité – Accès temporaire](https://webdevolutions.azureedge.net/docs/fr/kb/KB2082.png)

2. Définir le ***Mode*** à ***Autorisé***.
1. Facultatif : Définir les ***Autorisateurs*** à ***Personnalisé*** pour ajouter des utilisateurs à la liste des autorisateurs.

{% snippet icon.badgeInfo %}
Par défaut, seuls les administrateurs peuvent autoriser les demandes d'accès temporaire.
{% endsnippet %}

![Ajouter un autorisateur](https://webdevolutions.azureedge.net/docs/fr/kb/KB2084.png)

4. Cliquer sur ***OK***.

## Paramètres granulaires d'accès temporaire

L'***Accès temporaire*** peut également être défini de manière granulaire sur chaque entrée et dossier.
1. Ouvrir les ***Propriétés*** de l'entrée ou  du dossier.
1. Accéder à ***Paramètres de sécurité – Accès temporaire***.

![Propriétés – Paramètres de sécurité – Accès temporaire](https://webdevolutions.azureedge.net/docs/fr/kb/KB2083.png)

3. Sélectionner le ***Mode***.

{% snippet icon.badgeInfo %}
Par défaut, le ***Mode*** est configuré pour hériter des paramètres de la ***Racine***. Vous pouvez choisir d'hériter d'un autre dossier, d'autoriser ou même de refuser l'accès temporaire à cette entrée.
{% endsnippet %}

4. Sélectionner le ***Autorisateurs***.

{% snippet icon.badgeInfo %}
Par défaut, les ***Autorisateurs*** sont configurés pour hériter des paramètres de la ***Racine***. Vous pouvez choisir d'hériter d'un autre dossier, de permettre l'autorisation par les administrateurs uniquement ou de personnaliser et d'ajouter des utilisateurs à la liste de cette entrée.
{% endsnippet %}

5. Cliquer sur ***OK***.
