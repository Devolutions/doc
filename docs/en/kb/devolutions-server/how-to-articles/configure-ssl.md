---
title: Configure SSL
---
Please perform these steps only after you have configured the {{ en.DPS }} instance and that you have indeed connected through a client application. Performing these steps right from the start may add a layer of complexity that may prevent you from succeeding in the initial configuration. 

## Import Certificate or Create Self-Signed Certificate

1. Select the server node in the Tree View and double-click the ***Server Certificates*** feature in the ***List View***:  
![!!KB4391.png](/img/en/kb/KB4391.png)
1. Click ***Import...*** in the ***Actions*** pane.  
![!!KB4392.png](/img/en/kb/KB4392.png) 

## Create a SSL Binding

1. Select the web site in the Tree View. Click ***Bindings...*** in the ***Actions*** pane. This brings up the binding editor that lets you create, edit, and delete bindings for your Web site.  
![!!KB4393.png](/img/en/kb/KB4393.png) 
1. Click ***Add...*** to add your new SSL binding to the site.  
![!!KB4394.png](/img/en/kb/KB4394.png) 
1. Select ***https*** in the ***Type*** drop-down list. Select the certificate you have imported or created from the ***SSL Certificate*** drop-down list and then click ***OK***.  
![!!KB4395.png](/img/en/kb/KB4395.png) 
1. Now you have a new ***SSL*** binding on your site.  
![!!KB4396.png](/img/en/kb/KB4396.png) 

## Modify the {{ en.DPS }} configuration

1. From the {{ en.DVLSCONSOLE }}, edit the {{ en.DPS }} instance.
2. Go in the IIS tab and uncheck the ***Disable HTTPS*** option.  
![!!KB4400.png](/img/en/kb/KB4400.png)
1. Save the modification with the ***Save*** button.

## Configure SSL Settings in the Client applications

1. Edit the {{ en.DPS }} data source
2. Change the server URL to use the ***https://*** protocol.