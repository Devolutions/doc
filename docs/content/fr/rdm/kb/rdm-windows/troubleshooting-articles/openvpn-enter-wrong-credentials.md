---
eleventyComputed:
  title: Saisir des identifiants incorrects dans OpenVPN
---
{% snippet, "badgeCaution" %}
Notez que pour le bon fonctionnement d'OpenVPN, vous aurez besoin de la version 11.15.0.0 de l'interface utilisateur OpenVPN.
{% endsnippet %}

Lancer OpenVPN dans {{ fr.RDM }} entraîne la saisie partielle des identifiants.
## Solution
Activer la fonctionnalité ***Utiliser un fichier d'authentification*** dans l'entrée OpenVpn.

1. Ouvrir les ***Propriétés*** d'OpenVPN.
1. Dans l'onglet ***Avancé***, activer ***Utiliser un fichier d'authentification***.
![!!KB4006](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4006.png)
