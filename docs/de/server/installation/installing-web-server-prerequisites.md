---
title: Voraussetzungen zur Installation des Web-Servers
order: 40
keywords:
- Roles
---
{% snippet icon.badgeInfo %} 
Die Installation von {{ de.DVLS }} wird von Windows 10, Windows 11, Windows Server 2012 R2, 2016, 2019 und 2022 unterstützt.  
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Als Webanwendung benötigt {{ de.DVLS }} den IIS Manager, das [URL Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0), das [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a), das [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492) und bestimmte Web Server-Rollen auf dem Rechner, auf dem es gehostet wird. Diese Voraussetzungen können über die {{ de.DVLSCONSOLE }}  installiert werden oder über ein vorhandenes Powershell-Skript, das mit der {{ de.DVLSCONSOLE }}  bereitgestellt wird. 
{% endsnippet %}
 
![Für {{ de.DVLS }} benötigte Web-Rollen](https://webdevolutions.azureedge.net/docs/de/server/clip10313.png) 

{% snippet icon.badgeInfo %} 
Die Installation der Voraussetzungen über die [{{ de.DVLSCONSOLE }}](/server/management/devolutions-server-console/) oder über das PowerShell-Skript erfordert einen Internetzugang zum Herunterladen des [URL Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0), des [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a) und [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492). 
{% endsnippet %}
 
### Schritte 

Hier sind die zwei verschiedenen Methoden zur Installation der Voraussetzungen:  

1. {{ de.DVLSCONSOLE }}.  
    1. Öffnen Sie die [{{ de.DVLSCONSOLE }}](/server/management/devolutions-server-console/).  
    1. Gehen Sie zur Registerkarte ***Support*** und klicken Sie auf ‚***IIS-Diagnose***.  
    ![!!ServerOp8162.png](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8162.png)  
    1. Klicken Sie auf ***Voraussetzungen installieren***, um das PowerShell-Skript auszuführen.  

{% snippet icon.badgeInfo %} 
Dieses Fenster wird nur angezeigt, wenn bei einer Neuinstallation oder einer Aktualisierung eine Voraussetzung fehlt.. 
{% endsnippet %}
 
   ![!!ServerOp8171.png](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8171.png)  

2. PowerShell-Befehlszeile 
    1. Führen Sie Windows PowerShell mit erweiterten Rechten aus. 
    1. Ändern Sie den aktuellen Pfad zum Unterordner Scripts, der sich im aktuellen Installationsordner der {{ de.DVLSCONSOLE }} befindet. (C:\Program Files (x86)\Devolutions\Devolutions Server Console\Scripts)  
    ![Speicherort des PowerShell-Skripts](https://webdevolutions.azureedge.net/docs/de/server/clip10311.png)  
    1. Führen Sie das Skript **DVLS-Prerequisites.ps1** aus. 
    1. Das Skript installiert die fehlenden Webrollen und diese Komponenten: IIS URL Rewrite Module, IIS Application Request Routing Module und IIS [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492) Core Module. 
    ![!!ServerOp4020.png](https://webdevolutions.azureedge.net/docs/de/server/ServerOp4020.png) 

