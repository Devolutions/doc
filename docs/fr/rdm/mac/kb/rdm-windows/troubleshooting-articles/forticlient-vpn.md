---
eleventyComputed:
  title: FortiClient VPN
---
Voici une solution de contournement pour utiliser un VPN en combinaison avec FortiClient.
- Récupérer les outils Fortinet chez Fortinet ex : FortiClientTools_7.0.2.0090.
{% snippet, "badgeNotice" %}
Vous devez garder votre FortiClient installé.
{% endsnippet %}

- Copier ce répertoire dans un répertoire sur votre ordinateur.
- Activer Forticlient VPN/SSL dans ***Outils - Gestionnaire d'Add-on***.
- Dans une entrée RDP ***Propriétés*** aller à ***Connexion - VPN/SSH/GATEWAY***.
- Changer le ***Type*** de VPN pour ***FortiClient VPN/SSL***.
![!!KB4973](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4973.png)
- Cliquer sur l'onglet ***Paramètres (FortiClient VPN/SSL)***.
- Changer le ***Mode de connexion*** pour ***FortiSSL***.
![!!KB4974](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4974.png)
- Configurer votre tunnel et cliquer sur ***OK***.
- Lancer la connexion pour votre entrée RDP.
{% snippet, "badgeInfo" %}
Lors de la première connexion, il vous sera demandé le chemin des outils FortiClient que vous avez sauvegardés sur votre ordinateur.
{% endsnippet %}
