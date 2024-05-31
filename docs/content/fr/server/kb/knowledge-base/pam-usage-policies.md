---
eleventyComputed:
  title: Politiques d'utilisation de PAM
  description: Les politiques d'utilisation de PAM sont utiles pour définir quels types d'entrées et applications vos utilisateurs peuvent utiliser avec les comptes PAM.
---
Les politiques d'utilisation de PAM sont utiles pour définir quels types d'entrées et applications vos utilisateurs peuvent utiliser avec les comptes PAM, c'est une couche supplémentaire de sécurité appréciable à avoir. Modifier ces paramètres affectera l'ensemble du {{ fr.DVLS }}.

## Où trouver et modifier les politiques d'utilisation de PAM
1. Dans l'interface web pour {{ fr.DVLS }}, s'assurer d'être connecté à la bonne source de données.
1. Aller à ***Administration*** – ***Accès Privilégié*** – ***Politiques d'Utilisation***.
![Administration – Accès Privilégié – Politiques d'Utilisation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0159.png)
1. Modifier les politiques des applications ou types d'entrées souhaités.
1. Cliquer ***Enregistrer***.

{% snippet, "badgeInfo" %}
Assurer que les comptes privilégiés fonctionnent correctement et sont désactivés de manière appropriée en fonction de votre choix. Aussi, s'assurer que les connexions enregistrées avec des identifiants PAM sont bloquées à l'exécution avant de désactiver un type de connexion spécifique.
{% endsnippet %}