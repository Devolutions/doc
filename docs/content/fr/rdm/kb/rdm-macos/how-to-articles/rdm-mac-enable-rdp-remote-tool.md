---
eleventyComputed:
  title: "{{ fr.RDMMAC }} activer les outils à distance RDP"
---
{% snippet, "badgeInfo" %}
Devolutions Proxy est obsolète, cette fonction fonctionnera avec {{ fr.DVLS }}.
{% endsnippet %}

Il est possible d'obtenir l'accès aux outils à distance tels que les services de terminal, l'événement à distance ou le service à distance par exemple dans une session RDP dans {{ fr.RDMMAC }}.

Avant votre configuration dans {{ fr.RDMMAC }}, un Devolutions Proxy doit être configuré via {{ fr.RDM }} pour Windows.

## Méthode 1

1. Après le déploiement de votre Devolutions Proxy, ouvrir {{ fr.RDMMAC }} et cliquer sur ***{{ fr.RDM }} – Préférences***.
![!!KB4209](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4209.png)
1. Cliquer sur ***Outils - Outils à distance*** et dans le ***Mode d'accès***, sélectionner ***Via Devolutions Proxy personnalisé***.
![!!KB4210](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4210.png)
1. Entrer le nom du ***Serveur*** où votre Devolutions Proxy a été déployé et ***Enregistrer***.
![!!KB4211](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4211.png)
1. Aller dans le ***{{ fr.NPANE }}***, éditer votre entrée de session RDP et cliquer sur ***Outils à distance***. Définir le ***Mode d'accès*** sur ***Défaut*** pour utiliser le Devolutions Proxy.
![!!KB4212](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4212.png)

Les outils à distance seront désormais disponibles via le tableau de bord pour vos sessions RDP.

## Méthode 2

1. Après le déploiement de votre Devolutions Proxy, ouvrir {{ fr.RDMMAC }}. Faire un clic droit sur votre session RDP, cliquer ***Propriétés***.
1. Cliquer sur ***Outils à distance***.
![!!KB4213](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4213.png)
1. Dans ***Mode d'accès***, sélectionner ***Via Devolutions Proxy personnalisé*** et entrer le nom du ***Serveur*** pour le Devolutions Proxy, ***Enregistrer***.
![!!KB4214](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4214.png)

Les outils à distance seront désormais disponibles via le tableau de bord pour cette session RDP.

## Méthode 3

Après le déploiement de votre Devolutions Proxy, ouvrir {{ fr.RDMMAC }} et créer une nouvelle session Devolutions Proxy.

1. Lorsque la session Devolutions Proxy est créée, faire un clic droit sur votre session RDP, cliquer ***Propriétés***.
1. Cliquer sur ***Outils à distance***.
![!!KB4213](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4213.png)
1. Dans ***Mode d'accès***, sélectionner ***Via Devolutions Proxy*** et sélectionner votre session Devolutions Proxy.
![!!KB4215](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4215.png)

Les outils à distance seront désormais disponibles via le tableau de bord pour cette session RDP.