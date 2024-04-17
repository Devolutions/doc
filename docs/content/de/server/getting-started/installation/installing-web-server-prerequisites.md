---
eleventyComputed:
  title: Voraussetzungen zur Installation des Web-Servers
  order: 40
  keywords:
  - Roles
---
{% snippet icon.badgeInfo %}
Die Installation von {{ de.DVLS }} wird unter Windows Server 2016, 2019 und 2022 unterstützt.
{% endsnippet %}

{% snippet icon.badgeInfo %}
Als Webanwendung benötigt {{ de.DVLS }} den IIS Manager, das [URL Rewrite Modul](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0), das [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a), [ASP.Net 8.0](https://redirection.devolutions.com/dvls/asp-net-core-8.0.3) und bestimmte Web Server-Rollen. Diese Voraussetzungen können über die {{ de.DVLSCONSOLE }} oder über ein vorhandenes Powershell-Skript, das mit der {{ de.DVLSCONSOLE }} bereitgestellt wird, installiert werden. 
{% endsnippet %}

![Für {{ de.DVLS }} benötigte Web-Rollen](https://cdnweb.devolutions.net/docs/de/server/clip10313.png)

{% snippet icon.badgeInfo %}
Für die Installation der Voraussetzungen über die [{{ de.DVLSCONSOLE }}](/server/management/devolutions-server-console/) oder mittels dem PowerShell-Skript ist eine Internetzugang zum Herunterladen des [URL Rewrite Modul](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0), [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a) und [ASP.Net 8.0](https://redirection.devolutions.com/dvls/asp-net-core-8.0.3) erforderlich.
{% endsnippet %}

### Anleitung

Nachfolgend beide Methoden zur Installation der Voraussetzungen:

1. {{ de.DVLSCONSOLE }}.
    1. [{{ de.DVLSCONSOLE }}](/server/management/devolutions-server-console/) öffnen.
{type="a"}
    1. Zur Registerkarte ***Unterstützung*** wechseln und ***IIS-Diagnose*** auswählen.
![!!ServerOp8162](https://cdnweb.devolutions.net/docs/de/server/ServerOp8162.png)
    1. ***Voraussetzungen installieren*** auswählen, um das PowerShell-Skript auszuführen.
   {% snippet icon.badgeInfo %}
   Dieses Fenster wird nur angezeigt, wenn bei einer Neuinstallation oder einer Aktualisierung eine Voraussetzung fehlt.
   {% endsnippet %}

   ![!!ServerOp8171](https://cdnweb.devolutions.net/docs/de/server/ServerOp8171.png)

2. PowerShell-Befehlszeile
    1. Windows PowerShell mit erhöhten Rechten ausführen.
{type="a"}
    1. Zum Installationsordner der {{ de.DVLSCONSOLE }} wechseln, welcher das Skript enthält (**C:\Program Files (x86)\Devolutions\Devolutions Server Console\Scripts**)
![Speicherort des PowerShell-Skripts](https://cdnweb.devolutions.net/docs/de/server/clip10311.png)
    1. Skript **DVLS-Prerequisites.ps1** ausführen.
    1. Das Skript installiert nun die fehlenden Web Server Rollen sowie folgende Komponenten:
        * IIS URL Rewrite Module
        * IIS Application Request Routing Module
        * IIS [ASP.Net 8.0](https://redirection.devolutions.com/dvls/asp-net-core-8.0.3) Core Module
![!!ServerOp4020](https://cdnweb.devolutions.net/docs/de/server/ServerOp4020.png)
