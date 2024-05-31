---
eleventyComputed:
  title: Licences
---
Gérer l'enregistrement de {{ fr.RDM }} globalement pour tous vos utilisateurs peut être fait avec une clé de licence stockée dans une source de données avancée telle que {{ fr.DVLS }}, Microsoft SQL Server ou Azure SQL.

{% snippet, "badgeInfo" %}
Il est possible de [demander un essai](/rdm/mac/installation/client/registration/trial-request/) pour essayer {{ fr.RDM }} pendant 30 jours. Si vous décidez de ne pas enregistrer l'application à la fin de la période de 30 jours, vos données ne seront pas altérées ou effacées, et vous aurez un accès complet à celles-ci une fois que vous fournirez une clé de licence valide
{% endsnippet %}


Avec la licence stockée dans une [Source de Données Avancée](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/), il n'est pas nécessaire d'enregistrer {{ fr.RDM }} car la clé de licence est récupérée directement à partir de celle-ci. Lors du lancement de l'application pour la première fois, ajouter la source de données contenant la clé.

1. Pour ajouter une clé de licence, naviguer vers ***Administration – Licences***.
![Administration – Licences](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6031.png)
1. Cliquer ***Ajouter Licence***.
![Gestion des Utilisateurs et de la Sécurité – Licence](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6032.png)
1. Entrer la clé de licence.
![Clé de licence](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6033.png)
1. Cliquer ***OK*** pour sauvegarder la licence.
1. Optionnel : L'option ***Auto assigner*** sera affichée lorsque vous entrez la clé. La case est déjà cochée pour fournir la clé de {{ fr.RDM }} à tous les nouveaux utilisateurs créés. Une fenêtre d'avertissement apparaîtra si vous décochez la case et cliquez sur ***OK***.
![Fenêtre d'avertissement](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6030.png)

Votre licence est maintenant sauvegardée dans la source de données avancée. Suivre [Attribuer des Licences](/rdm/mac/commands/administration/licenses/assign/) pour les assigner automatiquement aux utilisateurs sélectionnés, éliminant le besoin d'interagir localement avec leur {{ fr.RDM }}.
