---
eleventyComputed:
  title:  Mon {{ fr.UVLT }}
  status: Topic available in German language
---
Le ***{{ fr.UVLT }}*** est un {{ fr.VLT }} personnalisé pour l'utilisateur pour les entrées de tout type. Il permet à chaque utilisateur de créer des entrées que lui seul peut voir. 

{% snippet icon.badgeInfo %} 
Le {{ fr.UVLT }} est disponible pour toutes les [Sources de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
![Mon {{ fr.UVLT }}](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11205.png) 

### Une note sur les identifiants 

Les identifiants dans le {{ fr.UVLT }} peuvent être utilisés de deux manières :  

1. À partir d'une session dans le {{ fr.UVLT }}. 
1. Lors de l'utilisation des [Paramètres spécifiques de l'usager](/rdm/windows/commands/edit/setting-overrides/specific-settings/). 

Ces restrictions peuvent être facilement comprises lorsque vous gardez à l'esprit que le {{ fr.UVLT }} est en fait contenu dans la zone utilisateur de la base de données. Il doit être utilisé de l'intérieur de lui-même ou en utilisant notre mécanisme d'extension spécifique à l'utilisateur. 

