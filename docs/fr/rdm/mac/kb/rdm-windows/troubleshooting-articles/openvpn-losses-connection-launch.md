---
eleventyComputed:
  title: OpenVPN perd la connexion au lancement
---
{% snippet, "badgeCaution" %}
Notez que pour qu'OpenVPN fonctionne correctement, vous aurez besoin de la version 11.15.0.0 de l'interface graphique OpenVPN.
{% endsnippet %}

OpenVPN perd constamment la connexion VPN lorsqu'un autre VPN s'ouvre dans {{ fr.RDM }}.
## Solution
Pour que cela fonctionne, le chemin du fichier de configuration doit être le même dans {{ fr.RDM }} et l'interface graphique OpenVPN.

De plus, l'option ***Autoriser plusieurs connexions*** doit être activée dans ***Fichier – Paramètres – Types – VPN***.
![!!KB4626](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4626.png)
