---
eleventyComputed:
  title: L'utilisateur ne peut pas créer de modèles
---
Les utilisateurs ne peuvent pas créer de modèles, l'icône "+" plus est grisée.
{% snippet, "badgeInfo" %}
Par défaut, les utilisateurs standards ne peuvent pas créer ou gérer des modèles. Pour permettre aux utilisateurs de créer ou de gérer des modèles, des permissions doivent être accordées aux utilisateurs.
{% endsnippet %}

## Solution
Vous devrez autoriser la permission dans 3 emplacements de {{ fr.RDM }} dans l'onglet ***Administration***.
1. Dans ***Administration - Permissions Système - Modèles - Modèles***.
![!!KB4724](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4724.png)
1. Dans ***Administration - Permissions Système - Entrées - Ajouter à la racine***.
![!!KB4723](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4723.png)
1. Dans ***Administration - Paramètres des {{ fr.VLT_MAJ }}s - Permissions - Ajouter à la racine***.
![!!KB4722](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4722.png)
