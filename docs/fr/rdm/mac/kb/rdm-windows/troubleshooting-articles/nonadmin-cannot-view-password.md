---
eleventyComputed:
  title: Les utilisateurs non-administrateurs ne peuvent plus voir les mots de passe
  keywords:
  - rôle
---
{% youtube 'sWb4mfD424o' %}

Les utilisateurs non administrateurs ne peuvent plus voir ou copier les mots de passe après la mise à jour vers {{ fr.RDM }} 2019+.
## Solution
Ce paramètre a été modifié pour des raisons de sécurité.

Si vous souhaitez permettre aux ***Utilisateurs*** ou à certains ***Groupes d'utilisateurs*** spécifiques de pouvoir voir le mot de passe de toutes vos sessions, vous devez configurer le paramètre ***Voir le Mot de Passe*** trouvé dans ***Administration - {{ fr.VLT_MAJ }} Paramètres - Permissions - Voir le Mot de Passe***.
![!!KB4007](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4007.png)

Selon vos politiques de sécurité, vous pourriez vouloir faire cela de manière plus granulaire. Vous pouvez définir les ***Permissions*** dans les ***Propriétés*** des ***Dossiers*** ou même d'une ***Entrée*** spécifique. Le bouton ***Octroyer l'Accès*** vous permettra de modifier en lot les ***Permissions*** pour plusieurs ***Groupes d'utilisateurs*** ou ***Utilisateurs***.
![!!KB4793](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4793.png)
