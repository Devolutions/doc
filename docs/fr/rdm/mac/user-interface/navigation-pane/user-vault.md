---
eleventyComputed:
  title: "{{ fr.UVLT_MAJ }}"
---
Le ***{{ fr.UVLT }}*** est un {{ fr.VLT }} personnalisé pour l'utilisateur pour les entrées de tout type. Il permet à chaque utilisateur de créer des entrées que lui seul peut voir.  

Pour créer une nouvelle entrée dans votre {{ fr.UVLT }}, cliquer sur {{ fr.UVLT }} dans votre ***{{ fr.NPANE }}*** et créer votre nouvelle entrée directement à partir de là.  

{% snippet icon.badgeInfo %} 
Le {{ fr.UVLT }} est uniquement disponible pour les sources de données suivantes : [SQL Server](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) et [{{ fr.DVLS }}](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/server/). 
{% endsnippet %}
 
![{{ fr.UVLT_MAJ }}](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4416.png) 

### Une note sur les identifiants 

Les identifiants dans le {{ fr.UVLT }} peuvent être utilisés de deux manières :  

1. À partir d'une session dans le {{ fr.UVLT }}. 
1. Lors de l'utilisation de l'entrée de modification ([Paramètres spécifiques de l'usager](/fr/rdm/mac/commands/edit/setting-overrides/user-specific-settings/)). 

Ces restrictions peuvent être facilement comprises lorsque vous gardez à l'esprit que le {{ fr.UVLT }} est en fait contenu dans la zone utilisateur de la base de données. Il doit être utilisé de l'intérieur de lui-même ou en utilisant notre mécanisme d'extension spécifique à l'utilisateur. 
