---
title: RDM iOS in Offline Mode
---
The offline mode allows you to connect to a read only copy of the data source when the live data source is unavailable.  

For mobile workers we recommend creating a local data source.  

For added security, offline files are set to expire after a delay, the default expiry is set to 7 days but can be modified via the Data Source Settings.  

This feature is not available for all the data sources.  

The offline mode file is first encrypted using our own private key mixed with some information taken from the local computer.  

Please note that there is no Read/Write level permission for the Offline Mode on the {{ en.RDM }} for iOS application.  

### Offline Mode

![!!KB4158.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4158.png)  

***Disabled***: Prevents an offline cache from being used.  

***Read-only***: Session data can be browsed and launched while not communicating back to the data source.
