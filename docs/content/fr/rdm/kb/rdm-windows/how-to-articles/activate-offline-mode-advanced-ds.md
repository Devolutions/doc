---
eleventyComputed:
  title: Activer le mode hors ligne pour une source de données avancée
---
{% youtube 'W7jK8g4WbNQ' %}

{% snippet, "badgeCaution" %}
Vous devez activer le mode hors ligne à plusieurs niveaux ; la Source de Données, les Utilisateurs, les Groupes d'utilisateurs (uniquement pour {{ fr.DVLS }}), les Paramètres Système et chaque {{ fr.VLT }}.
{% endsnippet %}

1. Pour la source de données, aller dans ***Fichier – Sources de données - Avancé - Mode de mise en cache***, et régler sur ***Fichier*** ou ***En mémoire***. Nous recommandons également de cocher l'option ***Passer automatiquement en mode hors ligne***.
![Paramètres de la source de données](https://cdnweb.devolutions.net/docs/RDMW4083_2024_2.png)
1. Pour les utilisateurs, aller dans ***Administration - Utilisateurs - Modifier - Paramètres - Mode hors ligne***.
![Gestion des utilisateurs](https://cdnweb.devolutions.net/docs/RDMW4088_2024_2.png)
1. Si vous avez un {{ fr.DVLS }}, pour les groupes d'utilisateurs, aller dans ***Administration - Groupes d'utilisateurs - Modifier - Paramètres***.
![Paramètres des groupes d'utilisateurs {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/RDMW4084_2024_2.png)
1. Pour les paramètres système, aller dans ***Administration - Paramètres du système - Spécifique à l'application - Mode hors ligne***.
![Paramètres du système](https://cdnweb.devolutions.net/docs/RDMW4087_2024_2.png)
1. Pour chaque {{ fr.VLT }} dans ***Administration - Paramètres de {{ fr.VLT_MAJ }} - Paramètres de sécurité - Autoriser le mode hors ligne***.
![Paramètres de {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/RDMW4086_2024_2.png)