---
eleventyComputed:
  title: "{{ de.DVLS }}-Instanz erstellen"
  order: 30
---
{% snippet icon.badgeInfo %}
Wenn Sie kürzlich Ihren Lizenzschlüssel erhalten haben, lesen Sie bitte den Abschnitt [Erste Schritte](/server/getting-started/).
{% endsnippet %}

{% snippet icon.badgeInfo %}
Weitere Informationen zu den Funktionen des Bereitstellungsassistenten finden Sie im jeweiligen Abschnitt unter [Server Einstellungen](/server/management/devolutions-server-console/devolutions-server-settings/general/).
{% endsnippet %}

Auf einem Server können mehrere {{ de.DVLS }}-Instanzen gehostet werden. Jede Instanz verwendet ihre eigenen Webanwendung innerhalb von IIS. Die folgenden Schritte werden unter Verwendung der {{ de.DVLSCONSOLE }} durchgeführt.

## Anleitung
1. Installieren Sie die {{ de.DVLSCONSOLE }} auf dem Webserver. Diese kann auf unserer [Download](https://devolutions.net/de/server/home/download/)-Seite heruntergeladen werden.
1. Führen Sie die {{ de.DVLSCONSOLE }} mit erhöhten Rechten aus. (Rechtsklick => ***Als Administrator ausführen***)
   {% snippet icon.shieldWarning %}
   Alle über die {{ de.DVLSCONSOLE }} ausgeführten Operationen werden mit den Anmeldeinformationen durchgeführt, die zum Starten der {{ de.DVLSCONSOLE }} verwendet werden. Wenn Sie andere Anmeldedaten verwenden müssen, müssen Sie eine neue Windows-Sitzung starten. Der Befehl ***Ausführen als*** bietet nicht die Option, einen Prozess mit erhöhten Rechten zu starten. Die Option ***Als anderer Benutzer ausführen*** funktioniert nur, wenn das Konto ein Mitglied der lokalen Administratorengruppe ist.
   {% endsnippet %}

   ![Als Administrator ausführen](https://cdnweb.devolutions.net/docs/de/server/ServerOp8175.png)
3. Klicken Sie in der {{ de.DVLSCONSOLE }} auf ***Neu*** oder den blauen Link ***Neue Instanz installieren***, um mithilfe des Assistenten für die [***Basisinstallation***](#basisinstallation) eine neue Serverinstanz einzurichten. Es ist auch möglich, eine Instanz mit dem Assistenten für die [***Erweiterte Installation***](#erweiterte-installation) zu erstellen, indem Sie diesen im Drop-Down-Menü unter ***Neu*** auswählen.
![Neue {{ de.DVLS }} Instanz erstellen](https://cdnweb.devolutions.net/docs/de/server/ServerOp8048.png)

### Basisinstallation
1. Wenn auf dem Host, auf dem {{ de.DVLS }} gehostet wird, keine SQL Server-Instanz verfügbar ist, wird durch den Assistenten eine SQL Server-Express-Edition installiert.
![Basisinstallation Fenster](https://cdnweb.devolutions.net/docs/de/server/ServerOp8176.png)
1. Im folgenden Dialogfeld werden die Anmeldeinformationen für das SA-SQL-Konto, das Administratorkonto von {{ de.DVLS }} und das Verschlüsselungs-Passwort angezeigt. Klicken Sie auf ***Speichern als***, um die Informationen in einer Datei zu speichern.
![Wichtige Informationen](https://cdnweb.devolutions.net/docs/de/server/ServerOp8177.png)
1. Im folgenden Dialogfeld werden die SQL Server-Informationen angezeigt, einschließlich der Anmeldeinformationen für das SA-Konto, die von Devolutions Server zum Erstellen und Herstellen einer Verbindung mit der SQL-Datenbank verwendet werden.
1. Sobald die Installation erfolgreich abgeschlossen ist, zeigt der Assistent eine Zusammenfassung der Installation an und öffnet automatisch den Standardbrowser mit der {{ de.DVLS }}-URL.
![Installation summary report](https://cdnweb.devolutions.net/docs/de/server/ServerOp8181.png)
1. Verwenden Sie zur Anmeldung bei der {{ de.DVLS }}-Weboberfläche die Anmeldeinformationen von Punkt 2. Bevor Sie den Anmeldevorgang abschließen können, müssen Sie das Passwort ändern.
![Passwortänderung](https://cdnweb.devolutions.net/docs/de/server/ServerOp8182.png)
1. Geben Sie Ihren Lizenzkey ein. Um die Free Version zu aktivieren, klicken Sie auf die Schaltfläche „Free Version aktivieren“.

### Erweiterte Installation
1. Im ersten Schritt führt der Installationsassistent eine Diagnose auf dem Server durch, um zu überprüfen, ob der IIS Server alle notwendigen Voraussetzungen der Webfunktionen installiert hat und bereit ist, {{ de.DVLS }} auszuführen. Fehlende Funktionen werden mit einem Fehlersymbol gekennzeichnet. Mit Klick auf ***Voraussetzungen installieren*** werden alle fehlenden Funktionen mithilfe eines PowerShell-Skripts installiert. Für [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321), [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) und [IIS ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer) ist eine Internetverbindung erforderlich.
![IIS Features Diagnostic Dialog](https://cdnweb.devolutions.net/docs/de/server/ServerOp8049.png)
1. Um fortzufahren, müssen die Lizenzvereinbarungen akzeptiert werden.
![{{ de.DVLS }} Lizenzvereinbarungen](https://cdnweb.devolutions.net/docs/de/server/ServerOp8050.png)
1. Geben Sie unter ***Datenbank*** die Server- und Datenbankinformationen ein. Das Benutzerkonto, das zum Erstellen der Datenbank verwendet wird, muss über Sysadmin-Rechte in der SQL Server-Instanz verfügen. Weitere Informationen finden Sie unter [Datenbank](/server/management/devolutions-server-console/devolutions-server-settings/database/). Um die ***Windows-Authentifizierung*** für die Verbindung mit der Datenbank zu verwenden, ist es wichtig, die Identität des Anwendungspools im IIS Manager zu ändern und die richtigen Berechtigungen für das Konto auf der SQL-Datenbank festzulegen. Konsultieren Sie dazu bitte [Konfiguration von {{ de.DVLS }} zur Nutzung der Domänen Single Sign-On (SSO)](/kb/devolutions-server/how-to-articles/configure-server-use-domain-sso/). Der folgende Artikel über [Erforderliche Konten vor der Installation](/de/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/) beschreibt, welche Konten vor dem Einsatz von {{ de.DVLS }} erstellt werden können.
![Datenbankinformationen](https://cdnweb.devolutions.net/docs/de/server/ServerOp8054.png)
1. Geben Sie unter ***Allgemein*** einen beliebigen ***Servernamen*** und eine ***Serverbeschreibung*** ein. Unter ***Seriennummer*** die Seriennummer, die Sie beim Kauf des Produktes per E-Mail erhalten haben. Wenn Sie noch keine Lizenz für {{ de.DVLS }} erworben haben, können Sie eine [30-tägige Testversion anfordern](https://devolutions.net/de/server/trial/).
![Allgemeine Informationen](https://cdnweb.devolutions.net/docs/de/server/ServerOp8051.png)
1. Wählen Sie unter ***Installationsquelle*** entweder ***Version herunterladen*** (neueste Version) oder ***Aus ZIP-Datei installieren***, die auf der [Download](https://devolutions.net/de/server/home/download/)-Seite zur Verfügung steht.
![Installationsdatei auswählen](https://cdnweb.devolutions.net/docs/de/server/ServerOp8053.png)
1. Wählen Sie unter ***Allgemein*** die Website, den Namen der Web-Anwendung und die [Zugriffs-URI](/kb/devolutions-server/knowledge-base/access-uri/) aus, die erforderlich ist, um die Website von {{ de.DVLS }} zu erreichen. Legen Sie unter ***Installationsziel*** den Installationsordner fest, in dem die Dateien der Instanz gespeichert werden sollen. Der Prozess zum Ausführen von Websites hat die richtigen Berechtigungen unter **C:\inetpub\wwwroot** erhalten. Wir empfehlen, einen neuen Unterordner anzulegen und die {{ de.DVLS }}-Instanz in diesem Ordner zu erstellen.Unter ***Anwendungspool*** legen Sie den Namen des Anwendungspools fest.
   {% snippet icon.badgeCaution %}
   Wir empfehlen nicht, den Installationsordner auf **C:\Programme** oder **C:\Programme (x86)** zu speichern. {{ de.DVLS }} ist eine Webanwendung und dies könnte zu unerwünschtem Verhalten und Problemen führen, da IIS nicht genügend Berechtigungen hat, um Webanwendungen auszuführen, die sich in diesen Ordnern befinden. Wenn Sie den Ordner für Webanwendungen an einem anderen als dem voreingestellten Ordner **C:\inetpub\wwwroot** einrichten möchten, benötigt die **IIS_IUSRS** Lese- und Ausführungsrechte für die gesamte Ordnerstruktur der Webanwendung von {{ de.DVLS }}.
   {% endsnippet %}

   ![IIS Einstellungen](https://cdnweb.devolutions.net/docs/de/server/ServerOp8170.png)
7. Geben Sie unter ***Administrator-Anmeldeinformationen*** die Information ein, um ein {{ de.DVLS}}-Administratorkonto zu erstellen. Alle Felder sind erforderlich.
![Administratorkonto erstellen](https://cdnweb.devolutions.net/docs/de/server/clip10323.png)
1. Wenn Sie unter ***Scheduler Dienst*** die Option ***Scheduler Dienst installieren*** aktivieren, definieren Sie bitte das richtige Servicekonto. Der Scheduler wird für folgende Funktionen verwendet: [Backup manager](/server/web-interface/administration/backup/backup-manager/), [Domänenbenutzer- und Gruppen-Cache](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/), [Office365-Benutzer- und Gruppen-Cache](/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/), [E-Mail Benachrichtigungen](/server/web-interface/administration/security-management/notifications/), [Bereinigungsprotokolle](/server/web-interface/administration/logs/cleanup-logs/) und [Verwaltung privilegierter Zugriffe](/server/privileged-access-management/).
![Scheduler Fenster](https://cdnweb.devolutions.net/docs/de/server/ServerOp8055.png)
1. Wenn Sie sich entscheiden, den Scheduler nicht zu installieren, erhalten Sie folgende Warnmeldung:
![Scheduler Warnung](https://cdnweb.devolutions.net/docs/de/server/ServerOp8056.png)
1. Wählen Sie unter Wiederherstellungsset den Zielordner und den Dateinamen für die Datei des{{ de.DVLS }} Wiederherstellungssets aus. Legen Sie ein Passwort zum Schutz der Verschlüsselungsschlüssel fest. Wenn die Option **Vertrauliche Daten einbeziehen** aktiviert ist, werden die SQL-Authentifizierungsinformationen in das Wiederherstellungsset aufgenommen.
   {% snippet icon.shieldNotice %}
   Wir empfehlen, die Datei des Wiederherstellungssets an einem sicheren Ort aufzubewahren, um Datenverlust zu vermeiden, falls {{ de.DVLS }} wiederhergestellt werden muss.
   {% endsnippet %}

   ![Wiederherstellungsset](https://cdnweb.devolutions.net/docs/de/server/clip10324.png)
11. Überprüfen Sie unter ***Zusammenfassung*** die Konfiguration und klicken Sie auf ***Installieren***.
![Zusammenfassung](https://cdnweb.devolutions.net/docs/de/server/ServerOp8057.png)

Sobald die Installation abgeschlossen ist, zeigt die Zusammenfassung an, ob {{ de.DVLS }} korrekt installiert wurde.
![Zusammenfassung Installation](https://cdnweb.devolutions.net/docs/de/server/ServerOp8059.png)

### Testen der Installation
Um die Installation des Servers zu testen, navigieren Sie bitte mit einem beliebigen Webbrowser zu Ihrer in Schritt 6 erstellten Zugriffs-URI (z.B.: https://<Machine_Name>/<InstanceName>) oder mittels **Website öffnen** in der {{ de.DVLSCONSOLE}}.
![{{ de.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/de/server/ServerOp8060.png)

{% snippet icon.badgeNotice %}
Es kann vorkommen, dass die Website nicht richtig geladen werden kann. Stellen Sie sicher, dass die lokale **IIS_IUSRS**-Gruppe Lesezugriff auf die Datei **encryption.config** hat, die sich im Unterordner App_Data im Webanwendungsordner von {{ de.DVLS }} befindet (z. B. **C:\inetpub\wwwroot\dvls\App_Data**). Sollte das Problem weiterhin bestehen, kontaktieren Sie uns bitte unter [service@devolutions.net](mailto:service@devolutions.net)
{% endsnippet %}

Um die Verbindung von einem Client aus zu testen, erstellen Sie bitte eine Datenquelle im {{ de.RDM }}. Weitere Informationen dazu finden Sie in der [Anleitung zur Konfiguration einer Datenquelle](/kb/devolutions-server/how-to-articles/configure-client-data-source/).
