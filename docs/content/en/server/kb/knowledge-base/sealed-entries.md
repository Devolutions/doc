---
eleventyComputed:
  title: Sealed entries 
  description: When an attempt is made to access a sealed entry, the system displays a confirmation message to the user, indicating that the entry is protected. 
---
Sealed entries protect sensitive information from being accessed by users with higher privileges and can be used in case of emergency. When an attempt is made to access a sealed entry, the system displays a confirmation message to the user, indicating that the entry is protected. Additionally, a notification is sent to the administrators, alerting them of the access attempt.

 ### Sealing the entry

1. Go to the properties of the entry.
1. Click ***Security Settings***.
1. Select ***Sealed*** under ***Seal State***.
![Select Sealed under Seal State](https://cdnweb.devolutions.net/docs/DVLS6001_2024_2.png)
1. Click ***Update*** to save.

 ### Access Attempts

Unseal an entry sends a notification to the administrators, providing details about the access attempt. This includes the identity of the user attempting access, the time and date of the attempt, and the name of the {{ en.VLT }}.

### Notification preferences

Enable and disable sealed entries [notifications](/server/web-interface/account-menu/notifications-preferences/) under ***Security – Entry unsealed***.

### Devolutions Server REST API and sealed entries

 Details of an entry can be retrieved through the REST API. {{ en.DVLS }} will respond with a sealed entry error message if anyone attempts to access a sealed entry programmatically.