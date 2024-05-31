---
eleventyComputed:
  title: Le message INSERT a été en conflit avec la contrainte de clé étrangère
  description: En tant qu'administrateur de l'instance {{ fr.DVLS }}, vous recevez ce message d'erreur. SqlException - Le message INSERT a été en conflit avec la contrainte de clé étrangère
  keywords:
  - Message INSERT
  - SqlException
  - Clé étrangère
---
En tant qu'administrateur de l'instance {{ fr.DVLS }}, vous recevez ce message d'erreur.

### Erreur :
```
SqlException - Le message INSERT a été en conflit avec la contrainte de clé étrangère "FK_ConnectionState_ConnectionID".
Le conflit a eu lieu dans la base de données "DVLS", table "dbo.Connections", colonne 'ID'.
L'instruction a été arrêtée. à System.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction) à System.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose) à System.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady) à System.Data.SqlClient.SqlCommand.FinishExecuteReader(SqlDataReader ds, RunBehavior runBehavior, String resetOptionsString, Boolean isInternal, Boolean forDescribeParameterEncryption) à System.Data.SqlClient.SqlCommand.RunExecuteReaderTds(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, Boolean async, Int32 timeout, Task& task, Boolean asyncWrite, Boolean inRetry, SqlDataReader ds, Boolean describeParameterEncryptionRequest) à System.Data.SqlClient.SqlCommand.RunExecuteReader(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, String method, TaskCompletionSource`1 completion, Int32 timeout, Task& task, Boolean& usedCache, Boolean asyncWrite, Boolean inRetry) à System.Data.SqlClient.SqlCommand.InternalExecuteNonQuery(TaskCompletionSource`1 completion, String methodName, Boolean sendToPipe, Int32 timeout, Boolean& usedCache, Boolean asyncWrite, Boolean inRetry) à System.Data.SqlClient.SqlCommand.ExecuteNonQuery() à Devolutions.Server.DatabaseManager.ExecuteNonQuery(String sql, IEnumerable`1 parameters, CommandType commandType) à Devolutions.Server.ConnectionLogManager.AddLogEntry(SessionContext context, LogEntryEntity logEntry) --- INSERT INTO ConnectionLog ( [ID] ,[Username] ,[MachineName] ,[Message] ,[MessageType] ,[ConnectionName] ,[ConnectionTypeName] ,[ConnectionID] ,[ConnectionUserName] ,[StartDateTime] ,[EndDateTime] ,[StartDateTimeUTC] ,[EndDateTimeUTC] ,[GroupName] ,[CustomerID] ,[Comment] ,[LoggedUserName] ,[Prompt] ,[SecurityGroup] ,[Cost] ,[Data] ,[UserInfoID] ,[SupportClose] ,[CloseMode] ,[OpenMode] ,[HostName] ,[Application] ,[IsEmbedded] ,[RepositoryID] ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
```

Veuillez nous contacter à [service@devolutions.net](mailto:service@devolutions.net) et nous vous enverrons une instruction SQL à exécuter sur la base de données pour résoudre ce problème.
