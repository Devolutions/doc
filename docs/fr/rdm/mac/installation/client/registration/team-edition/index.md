---
eleventyComputed:
  title: Édition d'équipe
  order: 10
  description: Lors de l'utilisation d'une source de données avancée, il n'est pas nécessaire d'enregistrer {{ fr.RDMMAC }} puisque la clé de licence est stockée dans la source de données et récupérée directement à partir de celle-ci.
---
Lors de l'utilisation d'une [source de données avancée](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/), il n'est pas nécessaire d'enregistrer {{ fr.RDMMAC }} puisque la clé de licence est stockée dans la source de données et récupérée directement à partir de celle-ci. Lors du lancement de l'application pour la première fois, simplement [ajouter la source de données](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/create-account-website/) contenant la série. Le menu de licence pour enregistrer {{ fr.RDMMAC }} est disponible pour SQLite, mais pas pour d'autres sources de données individuelles.

{% snippet, "badgeInfo" %}
Il est possible de [demander un essai](/rdm/mac/installation/client/registration/trial-request/) pour essayer {{ fr.RDM }} Team pendant 30 jours. Si vous décidez de ne pas enregistrer l'application avec une clé de licence Édition d'équipe à la fin de la période de 30 jours, vos données ne seront ni altérées ni effacées, et vous aurez un accès complet à celles-ci une fois que vous fournirez une clé de licence.
{% endsnippet %}

- Ajouter une clé de licence à la source de données, naviguer vers ***Administration – Licences***.
![Administration – Licences](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0000.png)
- Cliquer ***Ajouter Licence***.
![Add License Button](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0001.png)
- Entrer la clé de licence dans le champ ***Licence***.
![License Field](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0002.png)
- Optionnel : Cocher la case ***Auto assigner*** pour fournir automatiquement la série {{ fr.RDMMAC }} à tous les nouveaux utilisateurs créés.
![Auto Assign Setting](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0003.png)
- Cliquer ***OK***.
- Cliquer le bouton ***Modifier*** dans la ***Gestion des utilisateurs et de la sécurité***.
![Edit Button](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0004.png)
- Cliquer ***Assigné à*** dans le menu de gauche.
- Cliquer ***Assigner à tous*** ou sélectionner dans la colonne ***Assigné*** qui devrait avoir un accès à la série {{ fr.RDMMAC }}. Cette étape assignera automatiquement la licence aux utilisateurs sélectionnés, supprimant le besoin d'interagir avec chaque utilisateur.
![Assigned To Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0005.png)
- Cliquer ***OK*** et ***Fermer*** la fenêtre de ***Gestion des utilisateurs et de la sécurité***.
