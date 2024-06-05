---
eleventyComputed:
  title: Utiliser l'option NLA pour une connexion RDP via {{ fr.DGW }}
  description: Depuis 2022.3, {{ fr.DGW }} prend en charge le Proxy KDC combiné avec l'accrochage d'API RDP dans {{ fr.RDM }}.
  keywords:
  - NLA
---
Depuis 2022.3, {{ fr.DGW }} prend en charge le Proxy KDC combiné avec l'accrochage d'API RDP dans {{ fr.RDM }}, permettant à Kerberos de fonctionner sans effort avec RDP NLA.

## Étapes
1. Accéder à l'onglet ***Administration*** sur la gauche.
1. Sous la section ***Modules***, cliquer sur ***{{ fr.DGW }}***.
1. Cliquer ***Modifier*** sur le {{ fr.DGW }} désiré.
1. Aller à l'onglet ***Proxy KDC***.
![Onglet Proxy KDC](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0025.png)
1. Entrer le contrôleur de domaine (en ajoutant tcp:// avant) dans le champ ***URL du serveur KDC***.
1. Entrer le nom de domaine {{ fr.DVLS }} dans le champ ***Royaume Kerberos***.
{% snippet, "badgeCaution" %}
Si cela ne fonctionne pas, vérifier l'onglet ***Avancé*** et s'assurer que l'option ***Forcer l'utilisation de l'adresse IP pour les connexions RDP*** est désactivée.
{% endsnippet %}