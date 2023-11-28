---
eleventyComputed:
  title: CyberArk system safe filtering
---
CyberArk safes do not have flags to indicate if they are for system or for general use. That being said, we can find in various CyberArk information sources that certain safes are indeed for the internal working of the {{ en.VLT }} exclusively.  
The following safes will be considered “system” safes, and by checking the appropriate option (typically labeled ***Hide system safes***), they will be hidden from lists.  
{% snippet icon.badgeNotice %}
Go to ***File - Options - Types - CyberArk*** to add or delete ***Excluded safes***.
{% endsnippet %}  

System  
VaultInternal  
Notification Engine  
PVWAConfig  
PVWAPrivateUserPrefs  
PVWAPublicData  
PVWAReports  
PVWATaskDefinitions  
PVWATicketingSystem  
PVWAUserPrefs  
PasswordManager  
PasswordManager_ADInternal  
PasswordManager_info  
PasswordManager_workspace  
PasswordManagerShared  
PasswordManager_Pending  

Please drop us a note at [service@devolutions.net](mailto:service@devolutions.net) if you feel this list should be modified.
