```
---
eleventyComputed:
  title: Journaux
  description: La section Journaux fournit des outils pour consulter les Journaux d'Activité, de Sources de Données, d'Administration et de Dernière Utilisation. La section Entrées Supprimées est où vous gérerez toutes les entrées supprimées par les utilisateurs.
---
La section ***Journaux*** fournit des outils pour consulter les ***Activités***, ***Sources de Données***, ***Administration*** et ***Journaux de Dernière Utilisation***. La section ***Entrées Supprimées*** est où vous gérerez toutes les entrées supprimées par les utilisateurs.

Affiner votre recherche avec les filtres pour chaque rapport et cliquer sur le bouton ***Exporter*** de chaque section pour créer un rapport CSV.

![Journaux](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6083.png)
### Journaux d'Activité
Le rapport ***Journaux d'Activité*** affiche les actions spécifiques {{ fr.VLT }} sur l'activité des utilisateurs sélectionnés ou de tous vos utilisateurs. Les ***Messages*** d'Activité sont listés dans un menu déroulant pour choisir et affiner votre recherche.

Cliquer sur le bouton ***Entrée de Journal*** pour voir plus d'informations sur l'activité.

![Journaux d'Activité](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6086.png)
### Journaux des Sources de Données
Les ***Journaux des Sources de Données*** affichent les journaux de la source de données {{ fr.DVLS }}. Pour plus d'informations sur un journal spécifique, cliquer sur la flèche au début de la ligne.

![Journaux des Sources de Données](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4067.png)
### Journaux d'Administration
Les ***Journaux d'Administration*** gardent une trace des activités de niveau administratif, telles que l'accès refusé, la demande d'accès temporaire et la mise à jour de l'utilisateur ou du groupe d'utilisateurs.

![Journaux d'Administration](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4068.png)
### Entrées Supprimées
Les ***Entrées Supprimées*** listent chaque entrée supprimée dans la source de données, y compris le dossier d'origine, quand et par qui elle a été supprimée. Affiner votre recherche par {{ fr.VLT }} avec le filtre et cliquer sur ***Ressusciter l'Entrée*** pour récupérer l'entrée dans son {{ fr.VLT }} et dossier d'origine.

{% snippet, "badgeWarning" %}
Une fois que vous confirmez la suppression d'une entrée de la liste des ***Entrées Supprimées***, elle sera complètement supprimée des données {{ fr.DVLS }}.
{% endsnippet %}

![Entrées Supprimées](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4070.png)
### Journaux de Dernière Utilisation
Les ***Journaux de Dernière Utilisation*** affichent la date et l'heure de la dernière modification effectuée sur une entrée.

Depuis la liste, vous pouvez également déplacer les entrées affichées vers un autre {{ fr.VLT }}. Pour cela, sélectionner les entrées et cliquer sur le bouton ***Déplacer vers {{ fr.VLT }}***.

![Journaux de Dernière Utilisation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4069.png)

### Analytique du Comportement Utilisateur

L'***Analytique du Comportement Utilisateur*** vous permet de suivre le comportement des utilisateurs. Détecter plusieurs tentatives de connexion échouées et des connexions depuis un pays ou un lieu qui s'écarte des modèles établis. Voir quand l'accès d'urgence est utilisé et quand les demandes de connexion sont faites via le navigateur Tor.

![Analytique du Comportement Utilisateur](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6085.png)

```
