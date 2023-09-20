---
  title: Recovery Model
---
SQL Server backup and restore operations occur within the context of the recovery model of the database. Recovery models are designed to control transaction log maintenance. A recovery model is a database property that controls how transactions are logged, whether the transaction log requires (and allows) backing up, and what kinds of restore operations are available. Three recovery models exist: simple, full, and bulk-logged. Typically, a database uses the full recovery model or simple recovery model. A database can be switched to another recovery model at any time.  

{% snippet icon.badgeCaution %} 
If the Recovery Model is set to Full, it is critical that regular backup of BOTH the database and the transaction log are performed Not performing these backup will result in the database files to increase in size at an alarming rate. This will severely impact the performance in the long run. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
For further information regarding SQL Recovery Models, refer to [https://msdn.microsoft.com/en-CA/library/ms189275.aspx](https://msdn.microsoft.com/en-CA/library/ms189275.aspx). 
{% endsnippet %}
