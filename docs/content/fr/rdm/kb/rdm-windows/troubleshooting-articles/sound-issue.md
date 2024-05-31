---
eleventyComputed:
  title: "{{ fr.RDMMAC }} problèmes de son"
---
Lors du lancement d'une entrée RDP, qui est configurée avec approbation pour le son, les utilisateurs de {{ fr.RDMMAC }} ne peuvent pas entendre sur le distant même si Windows détecte l'audio distant.
## Solution
Un paramètre de stratégie informatique dans Windows doit être modifié.

1. Ouvrir l'***Éditeur de stratégie de groupe local*** de Windows.
1. Aller à ***Configuration de l'ordinateur - Modèles d'administration - Composants Windows - Confidentialité des applications***.
1. Activer ***Laisser les applications Windows passer des appels téléphoniques***.
1. Le définir sur ***L'utilisateur est en contrôle*** et enregistrer.

{% snippet, "badgeCaution" %}
Le paramètre ***Forcer l'autorisation*** ne fonctionnera pas.
{% endsnippet %}

![!!KB4941](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4941.png)
