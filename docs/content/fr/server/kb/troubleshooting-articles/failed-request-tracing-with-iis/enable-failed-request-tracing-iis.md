---
eleventyComputed:
  title: Activer le traçage des requêtes échouées dans IIS
  description: Suivre ces instructions pour activer le traçage des requêtes échouées dans IIS.
---
Suivre ces instructions pour activer le traçage des requêtes échouées dans IIS :

{% snippet, "badgeInfo" %}
Les étapes suivantes s'appliquent à Windows Server 2016 et ultérieur.
{% endsnippet %}

1. Ouvrir le ***Gestionnaire de serveur***.
1. Dans l'onglet ***Gérer***, sélectionner ***Ajouter des rôles et fonctionnalités***.
![Gérer – Ajouter des rôles et fonctionnalités](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4317.png)
1. Dans la section ***Type d'installation***, sélectionner le type d'installation qui s'applique à votre situation, puis cliquer sur ***Suivant***.
![Type d'installation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4318.png)
1. Dans la section ***Sélection du serveur***, sélectionner le serveur de destination, puis cliquer sur ***Suivant***.
![Sélection du serveur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4319.png)
1. Dans la section ***Rôles du serveur***, déployer le rôle ***Serveur Web (IIS)***, ***Serveur Web***, puis ***Santé et Diagnostics***. Cocher la case ***Traçage*** et cliquer sur ***Suivant***.
![Rôles du serveur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4320.png)
1. Dans la section ***Fonctionnalités***, simplement cliquer sur ***Suivant***.
![Fonctionnalités](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4321.png)
1. Dans la section ***Confirmation***, cliquer sur ***Installer***.
![Confirmation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4322.png)
1. Dans la section ***Résultats***, cliquer sur ***Fermer***.
![Résultats](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4323.png)
