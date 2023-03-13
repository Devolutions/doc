---
title: RDM Android Import XML Data Source
---
You can import an XML data source in {{ en.RDM }} for Android by overwriting or by creating a new XML data source.

Please note that to be able to copy an XML data source file, the device has to be rooted, we are not responsible if a problem occurs at that point.

We suggest using a Devolutions Online Drive data source to import an XML data source from Windows to Android instead of importing an XML data source directly. The Devolutions Online Drive is free and can be synchronized across all your devices.

## Overwriting an existing xml data source

1. In the Data Source menu tap on ***Data Sources*** Select the data source to overwrite and in the Entry menu select ***Edit***.  
![KB2040.png](/img/en/kb/KB2040.png)
1. Validate the data source file name (in our example it's Connections.xml).
1. Copy the XML data source that you want to import from your Windows/MAC computer to your device. Make sure that the file you want to import has the same name as the current file on your Android device.
1. Copy the file in data/data/com.devolutions.remotedesktopmanager/files on your Android device (this will overwrite the existing file).
1. In {{ en.RDM }} for Android, open the connections section.
1. Select the data source for which you imported the file or execute a refresh on the data source.  

You should now see your imported connections.