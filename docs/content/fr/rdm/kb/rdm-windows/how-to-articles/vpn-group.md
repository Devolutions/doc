---
eleventyComputed:
  title: Groupes VPN
---
{% snippet, "badgeInfo" %}
Les groupes VPN sont définis à l'intérieur de chaque entrée individuelle dans la section VPN/SSH/Gateway.
{% endsnippet %}

Lorsque plusieurs entrées sont configurées pour utiliser le même groupe VPN, la connexion VPN restera active jusqu'à ce que la dernière session se déconnecte.
![!!KB4600](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4600.png)

Le mode de fermeture VPN doit être réglé sur ***À la fermeture des sessions*** pour utiliser cette fonctionnalité.

Le nom du groupe VPN doit être exactement le même pour garantir que {{ fr.RDM }} incrémente le compteur d'utilisation.
