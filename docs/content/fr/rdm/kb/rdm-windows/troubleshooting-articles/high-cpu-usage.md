---
eleventyComputed:
  title: Utilisation élevée du CPU
---
Depuis la sortie de {{ fr.RDM }} 13, certains utilisateurs ont constaté une utilisation élevée du CPU sur leurs systèmes, en particulier dans un environnement de Services Terminal / Services Bureau à Distance (RDS). Ceci est causé par la fonctionnalité de vérification de l'état des entrées.
{% snippet, "badgeInfo" %}
Cette option est disponible avec la version 13.0.13.0 et ultérieures.
{% endsnippet %}

## Solution
Désactiver l'option ***Autoriser les états des entrées (Verrouillage, Exécution, Réservation)*** dans ***Administration – Paramètres Système – Général*** pour améliorer les performances sur vos serveurs et vos postes de travail.
![!!KB2024](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2024.png)
