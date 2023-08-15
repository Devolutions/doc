---
title: Recovery model
---
Les opérations de sauvegarde et de restauration de SQL Server se produisent dans le contexte du modèle de récupération de la base de données. Les modèles de récupération sont conçus pour contrôler la maintenance du journal des transactions. Un modèle de récupération est une propriété de base de données qui contrôle la façon dont les transactions sont enregistrées, si le journal des transactions nécessite (et autorise) la sauvegarde et quels types d'opérations de restauration sont disponibles. Il existe trois modèles de récupération : simple, complet et enregistré en masse. En règle générale, une base de données utilise le modèle de récupération complète ou le modèle de récupération simple. Une base de données peut être basculée vers un autre modèle de récupération à tout moment. 

{% snippet icon.badgeCaution %} 
Si le « Recovery Model » est défini sur « Full », il est essentiel que des sauvegardes régulières de la base de données ET du journal des transactions soient effectuées. Ne pas effectuer ces sauvegardes entraînera une augmentation de la taille des fichiers de base de données à un rythme alarmant. Cela affectera gravement les performances à long terme. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Pour plus d'informations sur les modèles de récupération SQL, consultez [https://learn.microsoft.com/fr-fr/sql/relational-databases/backup-restore/recovery-models-sql-server?view=sql-server-ver15](https://learn.microsoft.com/fr-fr/sql/relational-databases/backup-restore/recovery-models-sql-server?view=sql-server-ver15). 
{% endsnippet %}
