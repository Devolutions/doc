---
eleventyComputed:
  title: "{{ en.RDMANDROID }} offline mode"
  description: The Offline mode allows you to connect to a read only copy of the data source when the live database is unavailable.
---
The Offline mode allows you to connect to a read only copy of the data source when the live database is unavailable.

For mobile workers we recommend creating a local data source.

For added security, offline files are set to expire after a delay, the default expiry is set to 7 days but can be modified via the Data Source Settings.

This feature is not available for all the data sources.

The offline mode file is first encrypted using our own private key mixed with some information taken from the local computer.

## Offline Mode

Validate the offline setting is enabled in your Data Source:

1. Tap on the Data Source menu, select ***Data Sources***.
![!!KB2034](https://cdnweb.devolutions.net/docs/en/kb/KB2034.png)
1. Tap on the Entry menu of the Data Source you wish to allow the Offline mode on and select ***Edit***.
![!!KB2035](https://cdnweb.devolutions.net/docs/en/kb/KB2035.png)
1. In the Advanced tab enable the option ***Allow offline mode***.
![!!KB2036](https://cdnweb.devolutions.net/docs/en/kb/KB2036.png)
1. In the Data Source menu select ***Settings***.
![!!KB2037](https://cdnweb.devolutions.net/docs/en/kb/KB2037.png)
1. Tap on the option ***Data source is online*** to activate the Offline mode of your current data source.
![!!KB2038](https://cdnweb.devolutions.net/docs/en/kb/KB2038.png)

## Online Mode

Switch back the data source to online mode:
1. Select your Offline data source.
1. In the Data Source menu select ***Setting*** menu tap on ***Data source is offline*** to go back Online. Or, if you have a network connection, refresh your window to automatically go back Online.
![!!KB2039](https://cdnweb.devolutions.net/docs/en/kb/KB2039.png)
