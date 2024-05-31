---
eleventyComputed:
  title: Verrouiller la source de données
---
Pour protéger les données sensibles dans la configuration de votre source de données (par exemple, l'URL du serveur ou les identifiants), vous pouvez souhaiter verrouiller la configuration de la source de données avant de la déployer auprès de vos utilisateurs. Vous pouvez le faire en utilisant le bouton ***Verrouiller/Déverrouiller*** de la barre d'outils.

## Paramètres

![Barre d'outils Verrouiller la source de données](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10395.png)

La source de données verrouillée nécessitera un mot de passe. Le mot de passe doit être spécifié lors de l'application du verrou. Utilisez le même mot de passe pour la déverrouiller ou pour modifier la configuration de la source de données.
![Dialogue Verrouiller la source de données](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10396.png)

{% snippet, "badgeWarning" %}
Il n'y a aucun moyen de déverrouiller la source de données si le mot de passe est perdu ou oublié. Dans un tel événement, vous devrez configurer une nouvelle source de données. Cependant, le contenu de la base de données ne sera pas perdu.
{% endsnippet %}
