---
eleventyComputed:
  title: Verrouiller la source de données
---
Pour protéger les données sensibles dans la configuration de votre source de données (par exemple, l'URL du serveur ou les identifiants), vous pouvez souhaiter verrouiller la configuration de la source de données avant de la déployer auprès de vos utilisateurs. Vous pouvez le faire en utilisant le bouton Verrouiller/Déverrouiller de la barre d'outils.

## Paramètres

![Sources de données - Verrouiller la source de données](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip5070.png)

La source de données verrouillée nécessitera un mot de passe pour être déverrouillée, qui doit être spécifié lors de l'application du verrou. Utilisez le même mot de passe pour la déverrouiller afin de modifier la configuration de la source de données.
![Dialogue de verrouillage de la source de données](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_2014-05-29_13-46-00.png)

{% snippet, "badgeWarning" %}
Il n'y a AUCUN moyen de déverrouiller la source de données si le mot de passe est perdu ou oublié. Dans un tel événement, vous devrez configurer une nouvelle source de données. Cependant, le contenu de la base de données ne sera pas perdu.
{% endsnippet %}
