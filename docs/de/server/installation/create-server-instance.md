---
title: Devolutions Server-Instanz erstellen
order: 30
---

{% snippet icon.badgeInfo %} 
Wenn Sie kürzlich Ihre Serienlizenzschlüssel erhalten haben, lesen Sie bitte den Abschnitt [Erste Schritte](/server/getting-started/). 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Weitere Informationen zu den Funktionen des Bereitstellungsassistenten finden Sie unter dem entsprechenden Thema im Kapitel [Servereinstellungen](/server/management/devolutions-server-console/devolutions-server-settings/general/).
{% endsnippet %}
 
Auf einem Server können mehrere {{ de.DVLS }}-Instanzen gehostet werden. Jede Instanz befindet sich in ihrer eigenen Webanwendung innerhalb von IIS. Die folgenden Schritte werden unter Verwendung der {{ de.DVLSCONSOLE }} durchgeführt.  

## Verfahren 

1. Installieren Sie die {{ de.DVLSCONSOLE }} auf dem Webserver. Sie ist auf der [Download](https://devolutions.net/de/server/home/download/)-Seite verfügbar. 
1. Führen Sie die {{ de.DVLSCONSOLE }} mit erweiterten Rechten aus (als Administrator ausführen). Dies geschieht durch Rechtsklick auf die Anwendung, und die Auswahl ***Als Administrator ausführen***. 
{% snippet icon.shieldWarning %} 
Alle über die {{ de.DVLSCONSOLE }} ausgeführten Operationen werden mit den Anmeldeinformationen durchgeführt, die zum Starten der {{ de.DVLSCONSOLE }} verwendet werden. Wenn Sie andere Anmeldedaten verwenden müssen, müssen Sie eine neue Windows-Sitzung starten. Der Befehl ***Ausführen als*** bietet nicht die Option, einen Prozess mit erweiterten Rechten zu starten. Die Option ***Als anderer Nutzer ausführen*** kann nur funktionieren, wenn das Konto einem Mitglied der lokalen Administratorgruppe gehört.
{% endsnippet %}
 
![Als Administrator ausführen](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8175.png)  

3. Klicken Sie in der {{ de.DVLSCONSOLE }} auf ***Neu*** oder den blauen Link ***Neue Instanz installieren***, um mithilfe des Assistenten für die <a href="#Basic">***Basisinstallation***</a> eine neue Serverinstanz einzurichten. Es ist auch möglich, eine Instanz mit dem Assistenten für die <a href="#Advanced">***Erweiterte Installation***</a> zu erstellen, indem Sie diesen im Drop-Down-Menü unter ***Neu*** auswählen.
![!!Deploy a new {{ de.DVLS }}](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8048.png)  

### Basisinstallation <a name="Basic"></a>

1. Wenn auf dem Rechner, auf dem {{ de.DVLS }} gehostet wird, keine SQL Server-Instanz verfügbar ist, wird durch den Assistenten eine SQL Server-Express-Edition installiert.  
![!!Basic Installation dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8176.png)  
1. Im folgenden Dialogfeld werden die Anmeldeinformationen für das SA-SQL-Konto, das Administratorkonto von {{ de.DVLS }} und das Passwort für den Verschlüsselungscode angezeigt. Klicken Sie auf ***Speichern als***, um die Informationen in einer Datei zu speichern.  
![!!Important credentials dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8177.png)  
1. Das folgende Dialogfeld zeigt die SQL Server-Informationen an, einschließlich der Zugangsdaten für das ***SA***-Konto, die von {{ de.DVLS }} zur Erstellung und Verbindung mit der SQL-Datenbank verwendet werden..
1. Sobald die Installation erfolgreich abgeschlossen ist, zeigt der Assistent eine Zusammenfassung der Installation an und öffnet automatisch den Standardbrowser, um sich mit der {{ de.DVLS }}-Webschnittstelle zu verbinden.  
![!!Installation summary report](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8181.png)  
1. Verwenden Sie zur Anmeldung bei der {{ de.DVLS }}-Webschnittstelle die oben in Schritt 2 angegebenen Anmeldeinformationen. Danach werden Sie zu einer Änderung des Passworts aufgefordert, bevor Sie mit dem Anmeldevorgang fortfahren können.  
![!!Change your password prompt](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8182.png)  

### Erweiterte Installation <a name="Advanced"></a>

1. Im ersten Schritt führt der Installationsassistent eine Diagnose auf dem Server durch, um zu überprüfen, ob der IIS Server alle notwendigen Voraussetzungen für Web-Nutzergruppen installiert hat und bereit ist, {{ de.DVLS }} auszuführen. Fehlende Funktionen werden mit einem Fehlersymbol gekennzeichnet. Mit Klick auf ***Voraussetzungen installieren*** werden alle fehlenden Funktionen mithilfe eines PowerShell-Skripts installiert. Für [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321), [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) und [IIS ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer) ist eine Internetverbindung erforderlich.  
![!!IIS Features Diagnostic Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8049.png)  
1. Um fortzufahren, müssen die Lizenzvereinbarungen akzeptiert werden.  
![!!{{ de.DVLS }} License Agreement Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8050.png)  
1. Geben Sie unter ***Datenbank*** die Server- und Datenbankinformationen ein. Das Nutzerkonto, das zum Erstellen der Datenbank verwendet wird, muss über Sysadmin-Rechte in der SQL Server-Instanz verfügen. Weitere Informationen finden Sie unter [Datenbank](/server/management/devolutions-server-console/devolutions-server-settings/database/). Um die ***Windows-Authentifizierung*** für die Verbindung mit der Datenbank zu verwenden, ist es wichtig, die Identität des Anwendungspools im IIS Manager zu ändern und die richtigen Berechtigungen für das Dienstkonto auf der SQL-Datenbank festzulegen. Konsultieren Sie dazu bitte [Konfiguration von {{ de.DVLS }} zur Nutzung der integrierten Sicherheit](/kb/devolutions-server/how-to-articles/configure-server-use-integrated-security/). Der folgende Artikel über [Kontoauswahl vor der Einrichtung](/de/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/) beschreibt, welche Konten vor dem Einsatz von Devolutions Server erstellt werden können. 
![!!Database Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8054.png)  
1. Geben Sie unter ***Allgemein*** einen nutzerdefinierten ***Namen*** und eine ***Beschreibung*** ein. Geben Sie unter ***Serie*** die Seriennummer Ihrer Lizenz ein, die Sie beim Kauf des Produktes per E-Mail erhalten haben. Wenn Sie noch keine Lizenz für Devolutions Server erworben haben, können Sie eine [30-tägige Testversion anfordern](https://devolutions.net/de/server/trial/).  
![!!General and Registration Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8051.png)  
1. Wählen Sie unter ***Installationsquelle*** entweder ***Herunterladen aus dem Internet*** (neueste Version) oder ***Installieren aus der Zip-Datei***, die auf der [Download](https://devolutions.net/de/server/home/download/)-Seite verfügbar ist.
![!!Source Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8053.png)  
1. Wählen Sie unter ***Allgemein*** die Website, den Namen der Web-Anwendung und die [Access URI](/kb/devolutions-server/knowledge-base/access-uri/) aus, die erforderlich ist, um die Website von {{ de.DVLS }} zu erreichen. Legen Sie unter ***Installationsziel*** den Installationsordner fest, in dem die Dateien der Instanz gespeichert werden sollen. Der Prozess zum Ausführen von Websites hat die richtigen Berechtigungen unter **C:\inetpub\wwwroot** erhalten. Wir empfehlen, einen neuen Ordner darunter anzulegen und die {{ de.DVLS }}-Instanz in diesem Ordner zu erstellen. Legen Sie unter ***Anwendungspool*** den Namen des Anwendungspools fest.
{% snippet icon.badgeCaution %} 
Wir empfehlen nicht, den Installationsordner auf **C:\Programme** oder **C:\Programme (x86)** zu speichern. {{ de.DVLS }} ist eine Webanwendung und dies könnte zu unerwünschtem Verhalten und Problemen führen, da IIS nicht genügend Berechtigungen hat, um Webanwendungen auszuführen, die sich in diesen Ordnern befinden. Wenn Sie den Ordner für Webanwendungen an einem anderen als dem voreingestellten Ordner **C:\Inetpub\wwwroot** einrichten möchten, benötigt die in IIS_IUSRS integrierte lokale Rechnergruppe Lese- und Lese- und Ausführungsrechte für die gesamte Ordnerstruktur der Webanwendung von {{ de.DVLS }}.
{% endsnippet %} 

![!!Destination dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8170.png)  

7. Geben Sie unter ***Administrator-Anmeldeinformationen*** die Information ein, um ein nutzerdefiniertes {{ de.DVLS}}-Administratorkonto zu erstellen. Alle Felder sind erforderlich.  
![!!Create An Administrator User](https://webdevolutions.azureedge.net/docs/de/server/clip10323.png)  
1. Wenn Sie unter ***Scheduler-Service*** die Option ***Scheduler-Service installieren*** aktivieren, stellen Sie bitte das richtige Dienstkonto ein. Die folgenden Funktionen hängen vom Scheduler ab: [Backup manager](/server/web-interface/administration/backup/backup-manager/), [Domainbenutzer- und Nutzergruppen-Cache](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/), [Office365-Nutzer- und Nutzergruppen-Cache](/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/), [E-Mail Benachrichtigungen](/server/web-interface/administration/security-management/notifications/), [Bereinigungsprotokolle](/server/web-interface/administration/logs/cleanup-logs/) und [Verwaltung privilegierter Zugriffe](/server/privileged-access-management/).  
![!!Scheduler Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8055.png)  
1. Wenn Sie sich entscheiden, den Scheduler nicht zu installieren, erhalten Sie folgende Warnmeldung:  
![!!Scheduler Warning](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8056.png)  
1. Wählen Sie unter Wiederherstellungs-Set den Zielordner und den Dateinamen für die Datei des Wiederherstellungs-Sets von {{ de.DVLS }} aus. Legen Sie ein Passwort zum Schutz der Verschlüsselungsschlüssel fest. Wenn die Option Sensible Daten einbeziehen aktiviert ist, werden die SQL-Authentifizierungsinformationen in das Wiederherstellungs-Set aufgenommen. 
{% snippet icon.shieldNotice %} 
Wir empfehlen, die Datei des Wiederherstellungs-Sets in einem Tresor zu sichern, um Datenverlust zu vermeiden, falls {{ de.DVLS }} wiederhergestellt werden muss. 
{% endsnippet %} 

![!!Backup the Encryption Keys Dialog](https://webdevolutions.azureedge.net/docs/de/server/clip10324.png)  
11. Bestätigen Sie unter ***Einstellungen*** die Konfiguration und klicken Sie auf ***Installieren***.  
![!!Settings Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8057.png)   

Sobald die Installation abgeschlossen ist, zeigt eine Zusammenfassung an, ob {{ de.DVLS }} korrekt installiert wurde.  

![!!Progress Installation Dialog](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8059.png)  

### Testen der Installation

Um die Installation des Servers zu testen, klicken Sie bitte in einem beliebigen Webbrowser auf Zur Instanz-URL navigieren (z. B.: http://<Machine_Name>/<InstanceName>) oder auf Zur Website navigieren in der {{ de.DVLSCONSOLE}}.  

![{{ de.DVLSCONSOLE }}](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8060.png)   

{% snippet icon.badgeNotice %} 
Es kann vorkommen, dass die Website nicht richtig geladen werden kann. Stellen Sie sicher, dass die lokale IIS IUSRS-Gruppe vollen Lesezugriff auf die Datei **encryption.config** hat, die sich im Unterordner App_Data im Webanwendungsordner von {{ de.DVLS }} befindet (z. B. **C:\inetpub\wwwroot\dvls\App_Data**). Sollte das Problem weiterhin bestehen, kontaktieren Sie uns bitte unter [service@devolutions.net](mailto:service@devolutions.net) 
{% endsnippet %}
 
Um die Verbindung von einem Kunden aus zu testen, erstellen Sie bitte eine Datenquelle im Remote Desktop Manager. Weitere Informationen dazu finden Sie in der [Anleitung zur Konfiguration einer Kunden-Datenquelle](/kb/devolutions-server/how-to-articles/configure-client-data-source/).
