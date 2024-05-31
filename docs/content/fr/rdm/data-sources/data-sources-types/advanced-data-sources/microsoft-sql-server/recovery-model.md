---
eleventyComputed:
  title: Modèle de récupération
---
Les opérations de sauvegarde et de restauration de Microsoft SQL Server se déroulent dans le contexte du modèle de récupération de la base de données. Les modèles de récupération sont conçus pour contrôler la maintenance du journal des transactions. Un modèle de récupération est une propriété de la base de données qui contrôle comment les transactions sont enregistrées, si le journal des transactions nécessite (et permet) une sauvegarde, et quels types d'opérations de restauration sont disponibles. Il existe trois modèles de récupération : simple, complet et enregistré en masse. Typiquement, une base de données utilise le modèle de récupération complet ou le modèle de récupération simple. Une base de données peut être basculée vers un autre modèle de récupération à tout moment.

{% snippet, "badgeCaution" %}
Si le Modèle de Récupération est réglé sur Complet, il est crucial d'effectuer régulièrement des sauvegardes de la base de données ET du journal des transactions. Ne pas effectuer ces sauvegardes entraînera une augmentation de la taille des fichiers de la base de données à un rythme alarmant. Cela aura un impact sévère sur la performance à long terme.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Pour plus d'informations concernant les Modèles de Récupération SQL, se référer à [https://msdn.microsoft.com/en-CA/library/ms189275.aspx](https://msdn.microsoft.com/en-CA/library/ms189275.aspx).
{% endsnippet %}
