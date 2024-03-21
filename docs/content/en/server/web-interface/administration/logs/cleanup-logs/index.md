---
eleventyComputed:
  title: Cleanup logs
---
The ***Cleanup Logs*** functionality will allow to archive logs available in the database that are older than the selected period. It can also delete these archived logs based on the selected time limit in the parameters.
![Cleanup Logs](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8160.png)

## Cleanup Logs
| Option                                | Description                                                                         |
|---------------------------------------|-------------------------------------------------------------------------------------|
| Enable automatic cleanup              | Enable the automatic cleanup logs feature to automatically archive and delete logs. |
| Run every day at                      | Set the time when the feature will run. |
| Use archiving                         | If enable, the job will archive and delete logs based on the period selected in the two drop down lists. |
| Archive logs older than               | Will archive logs that are older than the selected value in the drop down list.<ul><li>Custom</li><li>One month</li><li>Three months</li><li>Six months</li><li>One year</li></ul> |
| Delete archived logs older than       | Will delete all archived logs that are older than the selected value in the drop down list.<ul><li>Three months</li><li>Six months</li><li>One year</li><li>Two years</li></ul> |
| Skip archiving and permanently delete | If enable, will not archive the logs and will permanently delete them.              |
| Delete logs older than                | Will permanently delete all logs older than the selected value in the drop down list.<ul><li>Custom</li><li>One month</li><li>Three months</li><li>Six months</li><li>One year</li><li>Two years</li></ul> |
| Advanced                              | [Advanced](/server/web-interface/administration/logs/cleanup-logs/advanced-cleanup-logs-configuration/) configuration is for setting up the archiving and deleting operation on each type of logs. |
