---
eleventyComputed:
  title: Mode de reconnexion RDP
  description: Le mode Reconnexion est disponible pour les entrées Microsoft RDP. Il peut être trouvé sous Propriétés – Commun – Général – Avancé.
---
Le ***mode de reconnexion*** est disponible pour les entrées ***Bureau à distance Microsoft***. Il peut être trouvé sous ***Propriétés – Commun – Général – Avancé***. Par défaut, l'option ***Standard*** est sélectionnée.
![Mode de reconnexion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0125.png)
* ***Standard*** : L'option ***mode de reconnexion Standard*** dans l'entrée, pointe vers les paramètres dans ***Fichier – Paramètres – Types – Bureau à distance – Bureau à distance – Mode de reconnexion***. Si réglé sur ***Standard*** là aussi, il utilise la même méthode que ***Legacy***.
* ***Complet*** : Il fermera complètement l'onglet et rouvrira la connexion.
* ***Reconnexion intelligente*** : Cette option utilise la fonctionnalité de reconnexion ActiveX. Sur un RDP 8.1+, elle redimensionnera l'écran si une reconnexion n'est pas nécessaire.
{% snippet, "badgeInfo" %}
Il est recommandé de changer le ***mode de dimensionnement de l'écran*** en ***Reconnexion intelligente***, au lieu de le sélectionner dans le menu ***mode de reconnexion***. L'option ***mode de dimensionnement de l'écran*** peut être trouvée sous l'onglet ***Affichage*** du même menu de propriétés.
{% endsnippet %}

* ***Legacy*** : Cette option appelle la méthode de déconnexion puis la méthode de connexion de l'ActiveX.
