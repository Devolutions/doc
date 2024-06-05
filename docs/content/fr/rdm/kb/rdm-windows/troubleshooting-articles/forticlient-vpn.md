---
eleventyComputed:
  title: FortiClient VPN
---
Voici une solution pour utiliser un VPN en combinaison avec FortiClient.
1. Récupérer les outils Fortinet chez Fortinet ex : FortiClientTools_7.0.2.0090.
{% snippet, "badgeNotice" %}
Vous devez garder votre FortiClient installé.
{% endsnippet %}

2. Copier ce répertoire dans un répertoire sur votre ordinateur.
1. Activer Forticlient VPN/SSL dans ***Outils - Gestionnaire d'Add-on***.
1. Dans une entrée RDP ***Propriétés*** aller à ***Connexion - VPN/SSH/GATEWAY***.
1. Changer le ***Type*** de VPN pour ***FortiClient VPN/SSL***.
![!!KB4973](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4973.png)
1. Cliquer sur l'onglet ***Paramètres (FortiClient VPN/SSL)***.
1. Changer le ***Mode de connexion*** pour ***FortiSSL***.
![!!KB4974](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4974.png)
1. Configurer votre tunnel et cliquer sur ***OK***.
1. Lancer la connexion pour votre entrée RDP.
{% snippet, "badgeInfo" %}
Lors de la première connexion, il demandera le chemin des outils FortiClient que vous avez sauvegardés sur votre ordinateur.
{% endsnippet %}
