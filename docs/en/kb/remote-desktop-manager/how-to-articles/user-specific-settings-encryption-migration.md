---
title: User Specific Settings Encryption Migration
---
# {{ en.TOPICTITLE }}
The ***User Specific Settings*** , in {{ en.RDM }} 2022.2, are being migrated to a newer encryption format.
### Scenarios
1. Users who connect for the first time with this new version will receive this warning prompt:  
![KB4947.png](/img/en/kb/KB4947.png)  

Options:  

* ***Yes*** : Will delete the existing ***User Specific Settings*** and save a new encrypted version. This will prevent the user to utilize the ***User Specific Settings*** with an older version of {{ en.RDM }}  
* ***No*** : This option will save a new encrypted version of the ***User Specific Settings*** , but will not delete the existing one. This will allow the user to keep on utilizing the previous ***User Specific Settings*** on an older version or on the {{ en.RDM }} mobile version who are not yet updated.  

2. While connecting, {{ en.RDM }} detects ***User Specific Settings*** that are encrypted from an older {{ en.RDM }} version.  
![KB4948.png](/img/en/kb/KB4948.png)  

Options:  

* ***Merge and Delete*** : Will overwrite the encrypted ***User Specific Settings*** with the data from the older {{ en.RDM }} and delete it.
* ***Merge*** : Will overwrite the encrypted ***User Specific Settings*** with the data from the older {{ en.RDM }}
* ***Delete*** : The encrypted ***User Specific Settings*** data will be kept and the previous one will be deleted.
* ***Cancel*** : Nothing is changed.
