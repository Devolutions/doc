---
eleventyComputed:
  title:  '{{ fr.DVLS }} erreurs'
  description: Ici toutes les erreurs possibles dans {{ fr.DVLS }} avec le numéro de code.
  permalink: false  
---
Voici toutes les erreurs possibles dans {{ fr.DVLS }} avec les ressources manquantes correspondantes.

## (101000) - SERVICES/SMTP ---- [Admin seulement]

| Id     | Nom                | Domaine           | | Ressources Manquantes                 |
|--------|---------------------|------------------|-------|-----------------------------------|
| 101001 | SMTP_CREATED        | GestionDesChangements |       | LogMsgSmtpCreated<br>LogNotifMsgSmtpCreated<br>LogEvent_SmtpCreated |
| 101002 | SMTP_READ           | GestionDesChangements |       | LogMsgSmtpRead<br>LogNotifMsgSmtpRead<br>LogEvent_SmtpRead |
| 101003 | SMTP_UPDATED        | GestionDesChangements |       | LogMsgSmtpUpdated<br>LogNotifMsgSmtpUpdated<br>LogEvent_SmtpUpdated |
| 101004 | SMTP_DELETED        | GestionDesChangements |       | LogMsgSmtpDeleted<br>LogNotifMsgSmtpDeleted<br>LogEvent_SmtpDeleted |
| 101005 | SMTP_ONLINE         | Système           |       | LogMsgSmtpOnline<br>LogNotifMsgSmtpOnline<br>LogEvent_SmtpOnline |
| 101006 | SMTP_OFFLINE        | Système           |       | LogMsgSmtpOffline<br>LogNotifMsgSmtpOffline<br>LogEvent_SmtpOffline |
| 101007 | SMTP_GENERAL_FAILURE| Système           |       | LogMsgSmtpGeneralFailure<br>LogNotifMsgSmtpGeneralFailure<br>LogEvent_SmtpGeneralFailure |
| 101008 | SMTP_SEND_FAILURE   | Système           |       | LogMsgSmtpSendFailure<br>LogNotifMsgSmtpSendFailure<br>LogEvent_SmtpSendFailure |
| 101009 | SMTP_SEND           | Système           |       | LogMsgSmtpSend<br>LogNotifMsgSmtpSend<br>LogEvent_SmtpSend |

## (102000) - SERVICES/SYSLOG ---- [Admin seulement]

| Id     | Nom            | Domaine           | Ressources Manquantes                 |
|--------|-----------------|------------------|-----------------------------------|
| 102001 | SYSLOG_CREATED  | GestionDesChangements | LogMsgSyslogCreated<br>LogNotifMsgSyslogCreated<br>LogEvent_SyslogCreated |
| 102002 | SYSLOG_READ     | GestionDesChangements | LogMsgSyslogRead<br>LogNotifMsgSyslogRead<br>LogEvent_SyslogRead |
| 102003 | SYSLOG_UPDATED  | GestionDesChangements | LogMsgSyslogUpdated<br>LogNotifMsgSyslogUpdated<br>LogEvent_SyslogUpdated |
| 102004 | SYSLOG_DELETED  | GestionDesChangements | LogMsgSyslogDeleted<br>LogNotifMsgSyslogDeleted<br>LogEvent_SyslogDeleted |
| 102005 | SYSLOG_FAILURE  | Système           | LogMsgSyslogFailure<br>LogNotifMsgSyslogFailure<br>LogEvent_SyslogFailure |

## (103000) - SERVICES/SCHEDULER ---- [Admin seulement]

| Id     | Nom                        | Domaine           | Ressources Manquantes                   |
|--------|-----------------------------|------------------|-------------------------------------|
| 103001 | SCHEDULER_CREATED           | GestionDesChangements | LogMsgSchedulerCreated<br>LogNotifMsgSchedulerCreated<br>LogEvent_SchedulerCreated |
| 103002 | SCHEDULER_UPDATED           | GestionDesChangements | LogMsgSchedulerUpdated<br>LogNotifMsgSchedulerUpdated<br>LogEvent_SchedulerUpdated |
| 103003 | SCHEDULER_DELETED           | GestionDesChangements | LogMsgSchedulerDeleted<br>LogNotifMsgSchedulerDeleted<br>LogEvent_SchedulerDeleted |
| 103004 | SCHEDULER_ONLINE            | Système           | LogNotifMsgSchedulerOnline |
| 103005 | SCHEDULER_OFFLINE           | Système           | LogNotifMsgSchedulerOffline |
| 103006 | SCHEDULER_FAILURE           | Système           | LogMsgSchedulerFailure<br>LogNotifMsgSchedulerFailure<br>LogEvent_SchedulerFailure |
| 103007 | SCHEDULER_PROCESSING        | Système           | LogMsgSchedulerProcessing<br>LogNotifMsgSchedulerProcessing<br>LogEvent_SchedulerProcessing |
| 103008 | SCHEDULER_STANDBY           | Système           | LogNotifMsgSchedulerStandby |
| 103009 | SCHEDULER_ACTIVE            | Système           | LogNotifMsgSchedulerActive |
| 103010 | SCHEDULER_NO_STANDBY_AVAILABLE | Système       | LogNotifMsgSchedulerNoStandbyAvailable |
| 103011 | SCHEDULER_ACTIVE_CHANGED    | Système           | LogNotifMsgSchedulerActiveChanged |

## (104000) - ADMINISTRATION/BACKUP ---- [Admin seulement]

| Id     | Nom                     | Domaine |  | Ressources Manquantes             |
|--------|--------------------------|--------|-------|-------------------------------|
| 104001 | BACKUP_SUCCESS           | Système |       | LogNotifMsgBackupSuccess      |
| 104002 | BACKUP_FAILURE           | Système |       | LogNotifMsgBackupFailure      |
| 104003 | BACKUP_VALIDATION_FAILED | Système |       |                               |

## (106000) - SERVICES/GATEWAY ---- [GestionDesPasserelles]

| Id     | Nom                        | Domaine           |  | Ressources Manquantes                  |
|--------|-----------------------------|------------------|-------|------------------------------------|
| 106001 | GATEWAY_CREATED             | GestionDesChangements |       | LogNotifMsgGatewayCreated           |
| 106002 | GATEWAY_READ                | GestionDesChangements |       | LogNotifMsgGatewayRead              |
| 106003 | GATEWAY_UPDATED             | GestionDesChangements |       | LogNotifMsgGatewayUpdated           |
| 106004 | GATEWAY_DELETED             | GestionDesChangements |       | LogNotifMsgGatewayDeleted           |
| 106005 | GATEWAY_ONLINE              | Système           |       | LogNotifMsgGatewayOnline            |
| 106006 | GATEWAY_OFFLINE             | Système           |       | LogNotifMsgGatewayOffline           |
| 106007 | GATEWAY_FAILURE             | Système           |       | LogNotifMsgGatewayFailure           |
| 106008 | GATEWAY_SESSION_START       | Système           |       | LogNotifMsgGatewaySessionStart      |
| 106009 | GATEWAY_SESSION_INTERRUPTED | Système           |       | LogNotifMsgGatewaySessionInterrupted|

## (107000) - SERVICES/GATEWAY_RECORDING ---- [GestionDesPasserelles]

| Id     | Nom                              | Domaine           | Ressources Manquantes                                           |
|--------|-----------------------------------|------------------|-------------------------------------------------------------|
| 107001 | GATEWAY_RECORDING_CREATED         | GestionDesChangements | LogMsgGatewayRecordingCreated<br>LogNotifMsgGatewayRecordingCreated<br>LogEvent_GatewayRecordingCreated |
| 107002 | GATEWAY_RECORDING_READ            | GestionDesChangements | LogMsgGatewayRecordingRead<br>LogNotifMsgGatewayRecordingRead<br>LogEvent_GatewayRecordingRead |
| 107003 | GATEWAY_RECORDING_UPDATED         | GestionDesChangements | LogMsgGatewayRecordingUpdated<br>LogNotifMsgGatewayRecordingUpdated<br>LogEvent_GatewayRecordingUpdated |
| 107004 | GATEWAY_RECORDING_DELETED         | GestionDesChangements | LogMsgGatewayRecordingDeleted<br>LogNotifMsgGatewayRecordingDeleted<br>LogEvent_GatewayRecordingDeleted |
| 107005 | GATEWAY_RECORDING_ONLINE          | Système           | LogMsgGatewayRecordingOnline<br>LogNotifMsgGatewayRecordingOnline<br>LogEvent_GatewayRecordingOnline |
| 107006 | GATEWAY_RECORDING_OFFLINE         | Système           | LogMsgGatewayRecordingOffline<br>LogNotifMsgGatewayRecordingOffline<br>LogEvent_GatewayRecordingOffline |
| 107007 | GATEWAY_RECORDING_FAILURE         | Système           | LogMsgGatewayRecordingFailure<br>LogNotifMsgGatewayRecordingFailure<br>LogEvent_GatewayRecordingFailure |
| 107008 | GATEWAY_RECORDING_QUOTA_LIMIT     | Système           | LogMsgGatewayRecordingQuotaLimit<br>LogNotifMsgGatewayRecordingQuotaLimit<br>LogEvent_GatewayRecordingQuotaLimit |
| 107009 | GATEWAY_RECORDING_FREE_SPACE      | Système           | LogMsgGatewayRecordingFreeSpace<br>LogNotifMsgGatewayRecordingFreeSpace<br>LogEvent_GatewayRecordingFreeSpace |

## (108000) - SERVICES/GATEWAY_FARM ---- [GestionDesPasserelles]

| Id     | Nom                          | Domaine           |  | Ressources Manquantes                          |
|--------|-------------------------------|------------------|-------|--------------------------------------------|
| 108001 | GATEWAY_FARM_CREATED          | GestionDesChangements |       | LogNotifMsgGatewayFarmCreated              |
| 108002 | GATEWAY_FARM_UPDATED          | GestionDesChangements |       | LogNotifMsgGatewayFarmUpdated              |
| 108003 | GATEWAY_FARM_DELETED          | GestionDesChangements |       | LogNotifMsgGatewayFarmDeleted              |
| 108004 | GATEWAY_FARM_ONLINE           | Système           |       | LogMsgGatewayFarmOnline<br>LogNotifMsgGatewayFarmOnline |
| 108005 | GATEWAY_FARM_OFFLINE          | Système           |       | LogMsgGatewayFarmOffline<br>LogNotifMsgGatewayFarmOffline |
| 108006 | GATEWAY_FARM_FAILURE          | Système           |       | LogMsgGatewayFarmFailure<br>LogNotifMsgGatewayFarmFailure |
| 108007 | GATEWAY_FARM_MEMBER_ADDED     | GestionDesChangements |       | LogMsgGatewayFarmMemberAdded<br>LogNotifMsgGatewayFarmMemberAdded<br>LogEvent_GatewayFarmMemberAdded |
| 108008 | GATEWAY_FARM_MEMBER_DELETED   | GestionDesChangements |       | LogMsgGatewayFarmMemberDeleted<br>LogNotifMsgGatewayFarmMemberDeleted<br>LogEvent_GatewayFarmMemberDeleted |

## (109000) - ADMINISTRATION/SERVERCORE ---- [Admin seulement]

| Id       | Nom                                 | Domaine |  | Ressources Manquantes                                           |
|----------|--------------------------------------|--------|-------|-------------------------------------------------------------|
| 109001   | SERVERCORE_EMERGENCY_LOGIN_USED      | Système |       | LogNotifMsgServercoreEmergencyLoginUsed                     |
| -109001  | SERVERCORE_UNEXPECTED_ERROR          | Système |       | LogMsgServercoreUnexpectedError<br>LogNotifMsgServercoreUnexpectedError<br>LogEvent_ServercoreUnexpectedError |

## (110000) - SERVICES/PAM ---- [Admin seulement]

| Id     | Nom                                       | Domaine           |  | Ressources Manquantes                                                         |
|--------|--------------------------------------------|------------------|-------|---------------------------------------------------------------------------|
| 110001 | PAM_PRIVILEGED_ACCOUNT_CREATED             | GestionDesChangements |       | LogMsgPamPrivilegedAccountCreated<br>LogNotifMsgPamPrivilegedAccountCreated<br>LogEvent_PamPrivilegedAccountCreated |
| 110002 | PAM_PRIVILEGED_ACCOUNT_READ                | GestionDesChangements |       | LogMsgPamPrivilegedAccountRead<br>LogNotifMsgPamPrivilegedAccountRead<br>LogEvent_PamPrivilegedAccountRead |
| 110003 | PAM_PRIVILEGED_ACCOUNT_UPDATED             | GestionDesChangements |       | LogMsgPamPrivilegedAccountUpdated<br>LogNotifMsgPamPrivilegedAccountUpdated<br>LogEvent_PamPrivilegedAccountUpdated |
| 110004 | PAM_PRIVILEGED_ACCOUNT_DELETED             | Système           |       | LogMsgPamPrivilegedAccountDeleted<br>LogNotifMsgPamPrivilegedAccountDeleted<br>LogEvent_PamPrivilegedAccountDeleted |
| 110005 | PAM_PRIVILEGED_ACCOUNT_HEARTBEAT_SUCCESS   | Système           |       | LogMsgPamPrivilegedAccountHeartbeatSuccess<br>LogNotifMsgPamPrivilegedAccountHeartbeatSuccess<br>LogEvent_PamPrivilegedAccountHeartbeatSuccess |
| 110006 | PAM_PRIVILEGED_ACCOUNT_HEART_BEAT_FAILURE | Système           |       | LogNotifMsgPamPrivilegedAccountHeartBeatFailure                           |

## (111000) - SERVICES/TELEMETRY ---- [Admin seulement]

| Id      | Nom             | Domaine |  | Ressources Manquantes                          |
|---------|------------------|--------|-------|--------------------------------------------|
| -111001 | ANALYTICS_SENT   | Système |       | LogMsgAnalyticsSent<br>LogNotifMsgAnalyticsSent<br>LogEvent_AnalyticsSent |
| -111002 | ANALYTICS_ERROR  | Système |       | LogMsgAnalyticsError<br>LogNotifMsgAnalyticsError<br>LogEvent_AnalyticsError |

## (112000) - ENTRIES/{{ fr.VLT_MAJ }} ---- [Admin seulement]

| Id     | Nom                               | Domaine        |  | Ressources Manquantes                                  |
|--------|------------------------------------|---------------|-------|----------------------------------------------------|
| 112001 | VAULT_CREATED                      | ActivitéUtilisateur  |       | LogNotifMsgVaultCreated<br>LogEvent_VaultCreated   |
| 112002 | VAULT_READ                         | ActivitéUtilisateur  |       | LogNotifMsgVaultRead<br>LogEvent_VaultRead         |
| 112003 | VAULT_UPDATED                      | ActivitéUtilisateur  |       | LogNotifMsgVaultUpdated<br>LogEvent_VaultUpdated   |
| 112004 | VAULT_DELETED                      | ActivitéUtilisateur  |       | LogNotifMsgVaultDeleted<br>LogEvent_VaultDeleted   |
| 112005 | VAULT_DOWNLOADED_FOR_AUTOFILL      | ActivitéUtilisateur  |       | LogNotifMsgVaultDownloadedForAutofill<br>LogEvent_VaultDownloadedForAutofill |

## (113000) - SERVICES/DIRECTORY ---- [Admin seulement]

| Id      | Nom             | Domaine |  | Ressources Manquantes                         |
|---------|------------------|--------|-------|-------------------------------------------|
| -113001 | DIRECTORY_DEBUG  | Système |       | LogMsgDirectoryDebug<br>LogNotifMsgDirectoryDebug<br>LogEvent_DirectoryDebug |

## (114000) - SERVICES/PAM_SYSTEM_VAULT ---- [Admin seulement]

| Id     | Nom                                  | Domaine           |  | Ressources Manquantes                                                        |
|--------|---------------------------------------|------------------|-------|--------------------------------------------------------------------------|
| 114001 | PAM_SYSTEM_VAULT_ACCOUNT_CREATED      | GestionDesChangements |       | LogMsgPamSystemVaultAccountCreated<br>LogNotifMsgPamSystemVaultAccountCreated<br>LogEvent_PamSystemVaultAccountCreated |
| 114002 | PAM_SYSTEM_VAULT_ACCOUNT_UPDATED      | GestionDesChangements |       | LogMsgPamSystemVaultAccountUpdated<br>LogNotifMsgPamSystemVaultAccountUpdated<br>LogEvent_PamSystemVaultAccountUpdated |
| 114003 | PAM_SYSTEM_VAULT_ACCOUNT_DELETED      | GestionDesChangements |       | LogMsgPamSystemVaultAccountDeleted<br>LogNotifMsgPamSystemVaultAccountDeleted<br>LogEvent_PamSystemVaultAccountDeleted |
