---
title: Coffre de l'utilisateur
---
Le ***{{ fr.PVLT }}*** est un coffre personnalisé pour l'utilisateur pour les entrées de tout type. Il permet à chaque utilisateur de créer des entrées que lui seul peut voir.  

Pour créer une nouvelle entrée dans votre {{ fr.PVLT }} , cliquer sur {{ fr.PVLT }} dans votre Volet de navigation et créer votre nouvelle entrée directement à partir de là.  

{% snippet icon.badgeInfo %} 
Le {{ fr.PVLT }} est uniquement disponible pour les sources de données suivantes: [SQL Server](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) et [{{ fr.DVLS }}](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/server/) . 
{% endsnippet %}
 
![Coffre de l'utilisateur](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4416.png) 

### Une note sur les identifiants 

Les identifiants dans le {{ fr.PVLT }} peuvent être utilisés de deux manières:  

1. À partir d'une session dans le {{ fr.PVLT }} . 
1. Lors de l'utilisation de l'entrée de modification ( [Paramètres spécifiques de l'usager](/fr/rdm/mac/commands/edit/setting-overrides/user-specific-settings/) ). 

Ces restrictions peuvent être facilement comprises lorsque vous gardez à l'esprit que le {{ fr.PVLT }} est en fait contenu dans la zone utilisateur de la base de données. Il doit être utilisé de l'intérieur de lui-même ou en utilisant notre mécanisme d'extension spécifique à l'utilisateur. 

