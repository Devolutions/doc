---
  title: Modèle de récupération
---
Les opérations de sauvegarde et de restauration de SQL Server se produisent dans le contexte du modèle de récupération de la base de données. Les modèles de récupération sont conçus pour contrôler la maintenance du journal des transactions. Un modèle de récupération est une propriété de base de données qui contrôle la façon dont les transactions sont enregistrées, si le journal des transactions nécessite (et autorise) la sauvegarde et quels types d'opérations de restauration sont disponibles. Il existe trois modèles de récupération : ***simple***, ***complet*** et ***enregistré en masse***. En règle générale, une base de données utilise le modèle de récupération complète ou le modèle de récupération simple. Une base de données peut être basculée vers un autre modèle de récupération à tout moment.  

{% snippet icon.badgeInfo %} 
Pour plus d'informations sur les modèles de récupération SQL, consultez [https://msdn.microsoft.com/en-CA/library/ms189275.aspx](https://msdn.microsoft.com/en-CA/library/ms189275.aspx). 
{% endsnippet %}
 

