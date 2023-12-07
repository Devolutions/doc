---
eleventyComputed:
  title: Einträge exportieren und importieren
---
{% youtube 'jipoCzhIEs8' %}

Es ist möglich, Einträge aus einer Datenquelle in eine andere zu exportieren und zu importieren. Es gibt viele Möglichkeiten, Einträge mit {{ de.RDM }} zu exportieren.

{% snippet icon.badgeCaution %}
Wenn Sie Benutzer haben, die Eigenschaften von Einträgen mit ***Benutzerspezifischen Einstellungen*** überschreiben, müssen diese ihre ***Liste der Benutzerspezifischen Einstellungen*** exportieren und importieren. Siehe [Benutzerspezifische Einstellungen exportieren und importieren (EN)](/kb/remote-desktop-manager/how-to-articles/export-import-user-specific-settings/).
{% endsnippet %}

Die erste Methode wird direkt im <a href="#exportierenimportieren-uber-remote-desktop-manager">{{ de.RDM }}</a> durchgeführt, während die zweite einen <a href="#exportierenimportieren-mit-powershell">PowerShell-Skript</a> verwendet.

## Exportieren/Importieren über {{ de.RDM }}
1. Wählen sie im {{ de.RDM }} im ***{{ de.NPANE }}*** Ihre Datenquelle aus.
   {% snippet icon.badgeNotice %}
   Um den gesamten {{ de.VLT }} zu exportieren, gehen Sie zu ***Datei – Exportieren – {{ de.VLT }} exportieren (.rdm)*** und fahren Sie mit <a href="#step4">Schritt 4</a> fort.
   {% endsnippet %}  

1. Wählen Sie die Einträge und/oder Ordner aus, die Sie exportieren möchten. Verwenden Sie die Tastenkombination <kbd>Strg</kbd>+Klick, um mehrere Einträge auf einmal auszuwählen.
1. Klicken Sie mit der rechten Maustaste auf die Auswahl. Wählen Sie im Kontextmenü ***Exportieren – Auswahl exportieren (.rdm)***.  
![Auswahl exportieren (.rdm)](https://webdevolutions.azureedge.net/docs/de/kb/KB4998.png)
1. <a name="step4"></a>Markieren Sie im Fenster ***Einträge exportieren*** die Optionen, die Sie aktivieren möchten. Für eine typische Migration sollten Sie die Optionen ***Anmeldeinformationen einbeziehen, Anhänge und Dokumente einbeziehen*** und ***Mit Hauptschlüssel verschlüsseln*** wählen.
   {% snippet icon.badgeInfo %}
   Standardmäßig werden die Anmeldeinformationen **nicht** einbezogen. Es ist wichtig, dass Sie die Option ***Anmeldeinformationen einbeziehen*** aktivieren, damit die exportierten Daten diese enthalten.
   {% endsnippet %}  
   {% snippet icon.shieldWarning %}
   Durch die Angabe eines Hauptschlüssels wird der gesamte Inhalt der **.rdm** Datei verschlüsselt. Dies ist zum Schutz der Daten sehr zu empfehlen, der Schlüssel ist jedoch für die Entschlüsselung unbedingt erforderlich. Bewahren Sie ihn zur Sicherheit an einem sicheren Ort auf.
   {% endsnippet %}  

   ![Export-Optionen für Einträge](https://webdevolutions.azureedge.net/docs/de/kb/KB4839.png)
1. Klicken Sie auf ***OK***.
1. Speichern Sie die **.rdm**-Datei auf Ihrem Computer.
1. Wählen Sie im ***{{ de.NPANE }}*** die Datenquelle und den {{ de.VLT }} aus, in den die Einträge importiert werden sollen.
1. Klicken Sie mit der rechten Maustaste auf den Ordner und wählen ***Sie Importieren – Importieren (.rdm)***.
![Importieren (.rdm)](https://webdevolutions.azureedge.net/docs/de/kb/KB4999.png)
   {% snippet icon.badgeNotice %}
   Über ***Datei*** – ***Importieren*** – ***Importieren (.rdm)*** können Sie den gesamten {{ de.VLT }} importieren.
   {% endsnippet %}  

1. Lokalisieren Sie die auf Ihrem Computer gespeicherte **.rdm** Datei und klicken Sie auf ***Öffnen***.
1. Wählen Sie ***Importieren ins Stammverzeichnis***, ***Importieren in den aktuellen Ordner*** oder ***Importieren in einen spezifischen Ordner***.
![Ort der importierten Einträge](https://webdevolutions.azureedge.net/docs/de/kb/KB5000.png)
1. Klicken Sie auf ***OK***.
1. Im nächsten Dialogfeld wird eine Liste mit allen Einträgen in der Datendatei angezeigt. Sie können bestimmte Einträge auswählen, die Sie importieren möchten, oder ***Alle auswählen***, um alle Einträge zu importieren.
   {% snippet icon.badgeCaution %}
   Wenn Sie Benutzer haben, die Eigenschaften von Einträgen mit ***Benutzerspezifischen Einstellungen*** überschreiben, deaktivieren Sie ***ID ändern***.
   {% endsnippet %}  

1. Klicken Sie auf ***OK***.

## Exportieren/Importieren mit PowerShell
Das folgende PowerShell-Skript dient zum Exportieren aller Einträge aus einer Datenquelle in **.rdm** Dateien. Es wird eine Datei pro Repository erstellt. Bevor Sie die Einträge aus der Datenquelle exportieren können, sind einige Vorbereitungen erforderlich.

1. Installieren Sie {{ de.RDM }} auf dem Computer, auf dem das PowerShell-Skript ausgeführt werden soll.
1. Erstellen Sie eine neue Datenquellenkonfiguration in {{ de.RDM }} innerhalb des Windows-Profils des Benutzers.
1. Weisen Sie dem Nutzerkonto, das das Skript ausführen wird, die nötigen Berechtigungen für den Zielordner zu.
1. Aktualisieren Sie das Passwort im Skript.
1. Passen Sie den Zielpfad im Skript an, in dem die **.rdm** Dateien gespeichert werden sollen.
1. Speichern Sie das PowerShell-Skript in einer **.ps1** Datei auf dem Computer, auf dem es ausgeführt werden soll.
1. Erstellen Sie eine geplante Aufgabe, um das Skript regelmäßig auszuführen.  

   ```powershell
   Import-Module 'C:\Program Files (x86)\Devolutions\Remote Desktop Manager\RemoteDesktopManager.PowerShellModule.psd1'

   $ds = Get-RDMDataSource -Name "NameOfYourDataSourceHere"
   Set-RDMCurrentDataSource $ds

   # Update the password
   $passwd = ConvertTo-SecureString -AsPlainText -Force "YourPasswordHere"

   $repos = Get-RDMRepository

   foreach ($repo in $repos)
   {
       Set-RDMCurrentRepository $repo
       Update-RDMUI

       $sessions = Get-RDMSession
       $reponame = $repo.name

       # Adapt the destination path for the .rdm files
       Export-RDMSession -Path "C:\temp\$reponame.rdm" -Sessions $sessions -IncludeCredentials -XML -Password $passwd
   }
   ```
