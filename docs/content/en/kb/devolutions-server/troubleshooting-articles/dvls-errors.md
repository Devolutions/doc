---
eleventyComputed:
  title:  '{{ en.DVLS }} errors'
  description: Here all the possible errors in {{ en.DVLS }} with the code number.
---

Here are all the possible errors in {{ en.DVLS }} with the corresponding missing resources.

## (101000) - SERVICES/SMTP ---- [Admin only]

| Id     | Name                | Domain           | | Missing Resources                 |
|--------|---------------------|------------------|-------|-----------------------------------|
| 101001 | SMTP_CREATED        | ChangeManagement |       | LogMsgSmtpCreated<br>LogNotifMsgSmtpCreated<br>LogEvent_SmtpCreated |
| 101002 | SMTP_READ           | ChangeManagement |       | LogMsgSmtpRead<br>LogNotifMsgSmtpRead<br>LogEvent_SmtpRead |
| 101003 | SMTP_UPDATED        | ChangeManagement |       | LogMsgSmtpUpdated<br>LogNotifMsgSmtpUpdated<br>LogEvent_SmtpUpdated |
| 101004 | SMTP_DELETED        | ChangeManagement |       | LogMsgSmtpDeleted<br>LogNotifMsgSmtpDeleted<br>LogEvent_SmtpDeleted |
| 101005 | SMTP_ONLINE         | System           |       | LogMsgSmtpOnline<br>LogNotifMsgSmtpOnline<br>LogEvent_SmtpOnline |
| 101006 | SMTP_OFFLINE        | System           |       | LogMsgSmtpOffline<br>LogNotifMsgSmtpOffline<br>LogEvent_SmtpOffline |
| 101007 | SMTP_GENERAL_FAILURE| System           |       | LogMsgSmtpGeneralFailure<br>LogNotifMsgSmtpGeneralFailure<br>LogEvent_SmtpGeneralFailure |
| 101008 | SMTP_SEND_FAILURE   | System           |       | LogMsgSmtpSendFailure<br>LogNotifMsgSmtpSendFailure<br>LogEvent_SmtpSendFailure |
| 101009 | SMTP_SEND           | System           |       | LogMsgSmtpSend<br>LogNotifMsgSmtpSend<br>LogEvent_SmtpSend |

## (102000) - SERVICES/SYSLOG ---- [Admin only]

| Id     | Name            | Domain           | Missing Resources                 |
|--------|-----------------|------------------|-----------------------------------|
| 102001 | SYSLOG_CREATED  | ChangeManagement | LogMsgSyslogCreated<br>LogNotifMsgSyslogCreated<br>LogEvent_SyslogCreated |
| 102002 | SYSLOG_READ     | ChangeManagement | LogMsgSyslogRead<br>LogNotifMsgSyslogRead<br>LogEvent_SyslogRead |
| 102003 | SYSLOG_UPDATED  | ChangeManagement | LogMsgSyslogUpdated<br>LogNotifMsgSyslogUpdated<br>LogEvent_SyslogUpdated |
| 102004 | SYSLOG_DELETED  | ChangeManagement | LogMsgSyslogDeleted<br>LogNotifMsgSyslogDeleted<br>LogEvent_SyslogDeleted |
| 102005 | SYSLOG_FAILURE  | System           | LogMsgSyslogFailure<br>LogNotifMsgSyslogFailure<br>LogEvent_SyslogFailure |

## (103000) - SERVICES/SCHEDULER ---- [Admin only]

| Id     | Name                        | Domain           | Missing Resources                   |
|--------|-----------------------------|------------------|-------------------------------------|
| 103001 | SCHEDULER_CREATED           | ChangeManagement | LogMsgSchedulerCreated<br>LogNotifMsgSchedulerCreated<br>LogEvent_SchedulerCreated |
| 103002 | SCHEDULER_UPDATED           | ChangeManagement | LogMsgSchedulerUpdated<br>LogNotifMsgSchedulerUpdated<br>LogEvent_SchedulerUpdated |
| 103003 | SCHEDULER_DELETED           | ChangeManagement | LogMsgSchedulerDeleted<br>LogNotifMsgSchedulerDeleted<br>LogEvent_SchedulerDeleted |
| 103004 | SCHEDULER_ONLINE            | System           | LogNotifMsgSchedulerOnline |
| 103005 | SCHEDULER_OFFLINE           | System           | LogNotifMsgSchedulerOffline |
| 103006 | SCHEDULER_FAILURE           | System           | LogMsgSchedulerFailure<br>LogNotifMsgSchedulerFailure<br>LogEvent_SchedulerFailure |
| 103007 | SCHEDULER_PROCESSING        | System           | LogMsgSchedulerProcessing<br>LogNotifMsgSchedulerProcessing<br>LogEvent_SchedulerProcessing |
| 103008 | SCHEDULER_STANDBY           | System           | LogNotifMsgSchedulerStandby |
| 103009 | SCHEDULER_ACTIVE            | System           | LogNotifMsgSchedulerActive |
| 103010 | SCHEDULER_NO_STANDBY_AVAILABLE | System       | LogNotifMsgSchedulerNoStandbyAvailable |
| 103011 | SCHEDULER_ACTIVE_CHANGED    | System           | LogNotifMsgSchedulerActiveChanged |

## (104000) - ADMINISTRATION/BACKUP ---- [Admin only]

| Id     | Name                     | Domain |  | Missing Resources             |
|--------|--------------------------|--------|-------|-------------------------------|
| 104001 | BACKUP_SUCCESS           | System |       | LogNotifMsgBackupSuccess      |
| 104002 | BACKUP_FAILURE           | System |       | LogNotifMsgBackupFailure      |
| 104003 | BACKUP_VALIDATION_FAILED | System |       |                               |

## (106000) - SERVICES/GATEWAY ---- [GatewaysManage]

| Id     | Name                        | Domain           |  | Missing Resources                  |
|--------|-----------------------------|------------------|-------|------------------------------------|
| 106001 | GATEWAY_CREATED             | ChangeManagement |       | LogNotifMsgGatewayCreated           |
| 106002 | GATEWAY_READ                | ChangeManagement |       | LogNotifMsgGatewayRead              |
| 106003 | GATEWAY_UPDATED             | ChangeManagement |       | LogNotifMsgGatewayUpdated           |
| 106004 | GATEWAY_DELETED             | ChangeManagement |       | LogNotifMsgGatewayDeleted           |
| 106005 | GATEWAY_ONLINE              | System           |       | LogNotifMsgGatewayOnline            |
| 106006 | GATEWAY_OFFLINE             | System           |       | LogNotifMsgGatewayOffline           |
| 106007 | GATEWAY_FAILURE             | System           |       | LogNotifMsgGatewayFailure           |
| 106008 | GATEWAY_SESSION_START       | System           |       | LogNotifMsgGatewaySessionStart      |
| 106009 | GATEWAY_SESSION_INTERRUPTED | System           |       | LogNotifMsgGatewaySessionInterrupted|

## (107000) - SERVICES/GATEWAY_RECORDING ---- [GatewaysManage]

| Id     | Name                              | Domain           | Missing Resources                                           |
|--------|-----------------------------------|------------------|-------------------------------------------------------------|
| 107001 | GATEWAY_RECORDING_CREATED         | ChangeManagement | LogMsgGatewayRecordingCreated<br>LogNotifMsgGatewayRecordingCreated<br>LogEvent_GatewayRecordingCreated |
| 107002 | GATEWAY_RECORDING_READ            | ChangeManagement | LogMsgGatewayRecordingRead<br>LogNotifMsgGatewayRecordingRead<br>LogEvent_GatewayRecordingRead |
| 107003 | GATEWAY_RECORDING_UPDATED         | ChangeManagement | LogMsgGatewayRecordingUpdated<br>LogNotifMsgGatewayRecordingUpdated<br>LogEvent_GatewayRecordingUpdated |
| 107004 | GATEWAY_RECORDING_DELETED         | ChangeManagement | LogMsgGatewayRecordingDeleted<br>LogNotifMsgGatewayRecordingDeleted<br>LogEvent_GatewayRecordingDeleted |
| 107005 | GATEWAY_RECORDING_ONLINE          | System           | LogMsgGatewayRecordingOnline<br>LogNotifMsgGatewayRecordingOnline<br>LogEvent_GatewayRecordingOnline |
| 107006 | GATEWAY_RECORDING_OFFLINE         | System           | LogMsgGatewayRecordingOffline<br>LogNotifMsgGatewayRecordingOffline<br>LogEvent_GatewayRecordingOffline |
| 107007 | GATEWAY_RECORDING_FAILURE         | System           | LogMsgGatewayRecordingFailure<br>LogNotifMsgGatewayRecordingFailure<br>LogEvent_GatewayRecordingFailure |
| 107008 | GATEWAY_RECORDING_QUOTA_LIMIT     | System           | LogMsgGatewayRecordingQuotaLimit<br>LogNotifMsgGatewayRecordingQuotaLimit<br>LogEvent_GatewayRecordingQuotaLimit |
| 107009 | GATEWAY_RECORDING_FREE_SPACE      | System           | LogMsgGatewayRecordingFreeSpace<br>LogNotifMsgGatewayRecordingFreeSpace<br>LogEvent_GatewayRecordingFreeSpace |

## (108000) - SERVICES/GATEWAY_FARM ---- [GatewaysManage]

| Id     | Name                          | Domain           |  | Missing Resources                          |
|--------|-------------------------------|------------------|-------|--------------------------------------------|
| 108001 | GATEWAY_FARM_CREATED          | ChangeManagement |       | LogNotifMsgGatewayFarmCreated              |
| 108002 | GATEWAY_FARM_UPDATED          | ChangeManagement |       | LogNotifMsgGatewayFarmUpdated              |
| 108003 | GATEWAY_FARM_DELETED          | ChangeManagement |       | LogNotifMsgGatewayFarmDeleted              |
| 108004 | GATEWAY_FARM_ONLINE           | System           |       | LogMsgGatewayFarmOnline<br>LogNotifMsgGatewayFarmOnline |
| 108005 | GATEWAY_FARM_OFFLINE          | System           |       | LogMsgGatewayFarmOffline<br>LogNotifMsgGatewayFarmOffline |
| 108006 | GATEWAY_FARM_FAILURE          | System           |       | LogMsgGatewayFarmFailure<br>LogNotifMsgGatewayFarmFailure |
| 108007 | GATEWAY_FARM_MEMBER_ADDED     | ChangeManagement |       | LogMsgGatewayFarmMemberAdded<br>LogNotifMsgGatewayFarmMemberAdded<br>LogEvent_GatewayFarmMemberAdded |
| 108008 | GATEWAY_FARM_MEMBER_DELETED   | ChangeManagement |       | LogMsgGatewayFarmMemberDeleted<br>LogNotifMsgGatewayFarmMemberDeleted<br>LogEvent_GatewayFarmMemberDeleted |

## (109000) - ADMINISTRATION/SERVERCORE ---- [Admin only]

| Id       | Name                                 | Domain |  | Missing Resources                                           |
|----------|--------------------------------------|--------|-------|-------------------------------------------------------------|
| 109001   | SERVERCORE_EMERGENCY_LOGIN_USED      | System |       | LogNotifMsgServercoreEmergencyLoginUsed                     |
| -109001  | SERVERCORE_UNEXPECTED_ERROR          | System |       | LogMsgServercoreUnexpectedError<br>LogNotifMsgServercoreUnexpectedError<br>LogEvent_ServercoreUnexpectedError |

## (110000) - SERVICES/PAM ---- [Admin only]

| Id     | Name                                       | Domain           |  | Missing Resources                                                         |
|--------|--------------------------------------------|------------------|-------|---------------------------------------------------------------------------|
| 110001 | PAM_PRIVILEGED_ACCOUNT_CREATED             | ChangeManagement |       | LogMsgPamPrivilegedAccountCreated<br>LogNotifMsgPamPrivilegedAccountCreated<br>LogEvent_PamPrivilegedAccountCreated |
| 110002 | PAM_PRIVILEGED_ACCOUNT_READ                | ChangeManagement |       | LogMsgPamPrivilegedAccountRead<br>LogNotifMsgPamPrivilegedAccountRead<br>LogEvent_PamPrivilegedAccountRead |
| 110003 | PAM_PRIVILEGED_ACCOUNT_UPDATED             | ChangeManagement |       | LogMsgPamPrivilegedAccountUpdated<br>LogNotifMsgPamPrivilegedAccountUpdated<br>LogEvent_PamPrivilegedAccountUpdated |
| 110004 | PAM_PRIVILEGED_ACCOUNT_DELETED             | System           |       | LogMsgPamPrivilegedAccountDeleted<br>LogNotifMsgPamPrivilegedAccountDeleted<br>LogEvent_PamPrivilegedAccountDeleted |
| 110005 | PAM_PRIVILEGED_ACCOUNT_HEARTBEAT_SUCCESS   | System           |       | LogMsgPamPrivilegedAccountHeartbeatSuccess<br>LogNotifMsgPamPrivilegedAccountHeartbeatSuccess<br>LogEvent_PamPrivilegedAccountHeartbeatSuccess |
| 110006 | PAM_PRIVILEGED_ACCOUNT_HEART_BEAT_FAILURE | System           |       | LogNotifMsgPamPrivilegedAccountHeartBeatFailure                           |

## (111000) - SERVICES/TELEMETRY ---- [Admin only]

| Id      | Name             | Domain |  | Missing Resources                          |
|---------|------------------|--------|-------|--------------------------------------------|
| -111001 | ANALYTICS_SENT   | System |       | LogMsgAnalyticsSent<br>LogNotifMsgAnalyticsSent<br>LogEvent_AnalyticsSent |
| -111002 | ANALYTICS_ERROR  | System |       | LogMsgAnalyticsError<br>LogNotifMsgAnalyticsError<br>LogEvent_AnalyticsError |

## (112000) - ENTRIES/{{ en.VLT_MAJ }} ---- [Admin only]

| Id     | Name                               | Domain        |  | Missing Resources                                  |
|--------|------------------------------------|---------------|-------|----------------------------------------------------|
| 112001 | VAULT_CREATED                      | UserActivity  |       | LogNotifMsgVaultCreated<br>LogEvent_VaultCreated   |
| 112002 | VAULT_READ                         | UserActivity  |       | LogNotifMsgVaultRead<br>LogEvent_VaultRead         |
| 112003 | VAULT_UPDATED                      | UserActivity  |       | LogNotifMsgVaultUpdated<br>LogEvent_VaultUpdated   |
| 112004 | VAULT_DELETED                      | UserActivity  |       | LogNotifMsgVaultDeleted<br>LogEvent_VaultDeleted   |
| 112005 | VAULT_DOWNLOADED_FOR_AUTOFILL      | UserActivity  |       | LogNotifMsgVaultDownloadedForAutofill<br>LogEvent_VaultDownloadedForAutofill |

## (113000) - SERVICES/DIRECTORY ---- [Admin only]

| Id      | Name             | Domain |  | Missing Resources                         |
|---------|------------------|--------|-------|-------------------------------------------|
| -113001 | DIRECTORY_DEBUG  | System |       | LogMsgDirectoryDebug<br>LogNotifMsgDirectoryDebug<br>LogEvent_DirectoryDebug |

## (114000) - SERVICES/PAM_SYSTEM_VAULT ---- [Admin only]

| Id     | Name                                  | Domain           |  | Missing Resources                                                        |
|--------|---------------------------------------|------------------|-------|--------------------------------------------------------------------------|
| 114001 | PAM_SYSTEM_VAULT_ACCOUNT_CREATED      | ChangeManagement |       | LogMsgPamSystemVaultAccountCreated<br>LogNotifMsgPamSystemVaultAccountCreated<br>LogEvent_PamSystemVaultAccountCreated |
| 114002 | PAM_SYSTEM_VAULT_ACCOUNT_UPDATED      | ChangeManagement |       | LogMsgPamSystemVaultAccountUpdated<br>LogNotifMsgPamSystemVaultAccountUpdated<br>LogEvent_PamSystemVaultAccountUpdated |
| 114003 | PAM_SYSTEM_VAULT_ACCOUNT_DELETED      | ChangeManagement |       | LogMsgPamSystemVaultAccountDeleted<br>LogNotifMsgPamSystemVaultAccountDeleted<br>LogEvent_PamSystemVaultAccountDeleted |
