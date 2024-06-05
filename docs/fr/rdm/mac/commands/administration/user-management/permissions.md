---
eleventyComputed:
  title: Permissions
---
La section Permissions vous permet d'attribuer des permissions. Les contrôles sont parfois cachés en fonction de la source de données ou de l'état d'autres contrôles.

## Paramètres

### Permissions
![Gestion des utilisateurs – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10389.png)

Les options situées juste au-dessus de la grille sont destinées aux dossiers publics, ce qui signifie que tout dossier qui n'a pas été attribué à un groupe d'utilisateurs se verra attribuer ces droits. Elles agissent également comme la permission la plus basique que vous pouvez attribuer car elles sont nécessaires pour permettre les permissions pour chacun des groupes d'utilisateurs listés ci-dessous, lorsqu'elles ne sont pas cochées la colonne correspondante de la grille est grisée.

| OPTION | DESCRIPTION                                                      |
|--------|------------------------------------------------------------------|
| Voir   | Permet à l'utilisateur de Voir ET UTILISER les entrées pour ce groupe d'utilisateurs. |
| Ajouter| Permet à l'utilisateur d'ajouter des entrées dans les groupes/dossiers pour ce groupe d'utilisateurs. Accorde également le privilège Ajouter pour les groupes publics. Contrôle également la visibilité de la colonne Ajouter dans la grille des Groupes. Le privilège Ajouter doit être coché si l'utilisateur a besoin d'ajouter des sessions dans le {{ fr.UVLT }}. |
| Modifier| Permet à l'utilisateur de modifier des entrées dans les groupes/dossiers pour ce groupe d'utilisateurs. Accorde également le privilège Modifier pour les groupes publics. Contrôle également la visibilité de la colonne Modifier dans la grille des Groupes. Le privilège Modifier doit être coché si l'utilisateur a besoin de modifier des sessions dans le {{ fr.UVLT }}. |
| Supprimer | Permet à l'utilisateur de supprimer des entrées dans les groupes/dossiers pour ce groupe d'utilisateurs. Accorde également le privilège Supprimer pour les groupes publics. Contrôle également la visibilité de la colonne Supprimer dans la grille des Groupes. Le privilège Supprimer doit être coché si l'utilisateur a besoin de supprimer des sessions dans le {{ fr.UVLT }}. |


{% snippet, "shieldWarning" %}
Pour une sécurité renforcée, il est recommandé de définir des groupes d'utilisateurs sur tous les dossiers de niveau {{ fr.VLT }}. Cela garantit qu'il n'y a pas de dossiers publics et que vous avez un bon contrôle sur l'activité dans votre système.
{% endsnippet %}

Tous les groupes d'utilisateurs sont listés dans la grille, et vous pouvez attribuer des permissions en utilisant les colonnes correspondantes.

{% snippet, "shieldWarning" %}
Accorder la permission Voir permet également le droit de lancer/ouvrir les sessions de ce groupe.
{% endsnippet %}
