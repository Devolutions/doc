---
eleventyComputed:
  title: Notifications preferences
  description: Notifications preferences in {{ en.DVLS }} enable administrators and users with specific permissions to receive only the most relevant updates.
---

Notifications preferences in {{ en.DVLS }} enable administrators and users with [system permissions](/server/web-interface/administration/configuration/system-permissions/modules/) to receive only the most relevant updates.

## Notifications preferences

Choose the type of notifications you want to receive.

![Notifications preferences](https://webdevolutions.blob.core.windows.net/docs/en/server/DVLS6000_2024_1.png)

* ***Error***: Error notifications indicate a significant problem that has occurred within the Devolutions Server environment.
* ***Warning***: Warning notifications represent issues that, while not immediately critical, could lead to errors if not addressed.
* ***Information***: Information notifications provide updates about the normal operation of Devolutions Server or confirm the successful completion of operations. 

## Enable personalized selection

Administrators and users with system permissions can choose the actions they wish to receive notifications for.

![Enable personalized selection](https://webdevolutions.blob.core.windows.net/docs/en/server/DVLS6002_2024_1.png)

## Administration 

### Backup
* Success: Notification is sent upon backup success.
* Failure: Notification is sent upon backup failure.
* Validation Failed: Notification is sent for validation errors during backup.

### Server 
* Emergency Login: Notification is sent for emergency login usage.
* Unexpected Error: Notification is sent for any unexpected error.

## Service 

### Gateway 
* Create: Notification is sent when a gateway is created.
* Update: Notification is sent when a gateway is updated.
* Delete: Notification is sent when a gateway is deleted.
* Online: Notification is sent when a gateway comes online.
* Offline: Notification is sent when a gateway goes offline.

### PAM
* Heartbeat Failure: Notification is sent when a PAM heartbeat check fails.

### Gateway Farm 
* Create: Notification is sent when a gateway farm is created.
* Update: Notification is sent when a gateway farm is updated.
* Delete: Notification is sent when a gateway farm is deleted.

### Scheduler 
* Offline: Notification is sent when the scheduler goes offline.
* On Standby: Notification is sent when the scheduler enters standby mode.
* On Activation: Notification is sent when the scheduler is activated.
* No Standby Scheduler Available: Notification is sent when no standby scheduler is available.
* Active Scheduler Change: Notification is sent when the active scheduler changes.

## Entries

### {{ en.VLT_MAJ }}
* Create: Notification is sent when a {{ en.VLT }} is created.
* Update: Notification is sent when a {{ en.VLT }} is updated.
* Delete: Notification is sent when a {{ en.VLT }} is deleted.
* Download {{ en.VLT_MAJ }} Data for Autofill: Notification is sent for downloading {{ en.VLT }} data for autofill.