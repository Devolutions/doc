---
eleventyComputed:
  title: Gestion des utilisateurs et sécurité intégrée
---
***Sécurité Intégrée*** est une technologie Microsoft, qui utilise les informations d'identification de la session Windows actuelle et les envoie automatiquement aux ressources distantes pour authentification.

{% snippet, "badgeInfo" %}
Cette fonctionnalité est disponible avec les sources de données [SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) ou [{{ fr.DVLS }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/).
{% endsnippet %}

## Paramètres
Pour utiliser la ***Sécurité Intégrée***, activer la case ***Sécurité Intégrée*** dans la fenêtre ***Gestion des Utilisateurs***. Le champ ***Mot de passe*** est désactivé car le système d'exploitation fournira automatiquement une copie mise en cache.
![Sécurité Intégrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10291.png)

Lorsque l'option est activée, un bouton d'ellipsis apparaît ou est activé. Cliquer sur ce bouton pour afficher la boîte de dialogue ***Sélectionner l'Utilisateur***.
![Sélectionner l'Utilisateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10294.png)

{% snippet, "badgeInfo" %}
Assurer que le domaine approprié est affiché dans le champ ***De cet emplacement***. Parfois, l'emplacement par défaut est l'ordinateur local. Cliquer sur le bouton ***Emplacements*** pour parcourir le domaine à la place.
{% endsnippet %}

Lors de l'utilisation de la ***Sécurité Intégrée***, la session Windows en cours d'exécution doit être d'un utilisateur du domaine. Si vous avez besoin d'utiliser d'autres informations d'identification, {{ fr.RDM }} doit être démarré en utilisant la commande RUNAS comme décrit dans Exécuter {{ fr.RDM }} en tant qu'Autre Utilisateur.
