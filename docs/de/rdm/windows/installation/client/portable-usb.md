---
eleventyComputed:
  title: Mobil (USB)
---
{{ de.RDM }} kann als mobile Anwendung verwendet werden. Im Folgenden sind die Schritte aufgeführt, die gewährleisten, dass das Programm ordnungsgemäß funktioniert:  

{% snippet icon.badgeInfo %} 
Mit dem mobilen Installationsmodus können Sie mehrere Versionen von {{ de.RDM }} ausführen, indem Sie verschiedene Lizenznummern und Konfigurationen verwenden. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Um eine einzelne mobile Anwendung zu installieren, folgen Sie bitte den Anweisungen in diesem Artikel:  [Mobile Installation von {{ de.RDM }}](/de/kb/remote-desktop-manager/how-to-articles/portable-rdm-installation/). 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Dieses Verfahren ist nicht empfehlenswert, wenn {{ de.RDM }} über ein von mehreren Nutzern gemeinsam verwendetes Netzwerk ausgeführt wird. Dies würde die Identifizierung einzelner Nutzer verhindern und zu Konflikten mit den Nutzereinstellungen führen. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
{{ de.RDM }} speichert den Offline-Cache standardmäßig in Ihrem Windows-Profil. Wenn Sie eine erweiterte Datenquelle verwenden und den Offline-Modus nutzen möchten, gehen Sie bitte zu ***Datei - Optionen - Erweitert*** und aktivieren Sie ***Anwendungsverzeichnis für Offline-Cache verwenden***, damit der Offline-Cache stattdessen im Anwendungsordner gespeichert wird.ication directory for offline cache to have the offline cached stored in the application folder instead. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
Die folgenden Schritte gewährleisten echte Mobilität und einfache Wartung. Es kann leicht an Ihre Wünsche angepasst werden. 
{% endsnippet %}
 
## Verfahren 

1. Laden Sie das ***ZIP***-Paket {{ de.RDM }} Team herunter.
![!!clip11586](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip11586.png) 
1. Erstellen Sie auf Ihrem mobilen Gerät einen Ordner für RemoteDesktopManager. 
1. Erstellen Sie in dem in Schritt 2 erstellten Installationsordner zwei Ordner: 
    1. Einen Konfigurations-Ordner. 
    1. Einen Daten-Ordner. 
    1. Einen Tools-Ordner (optional, nur wenn Sie beabsichtigen, externe Tools wie Fillezilla zu verwenden). 
1. Entpacken Sie {{ de.RDM }} im Installationsordner. 
1. Erstellen Sie im Installationsordner eine Textdatei namens  **override.cfg** Setzen Sie den Inhalt der Datei auf .\config 
1. Öffnen Sie {{ de.RDM }} und dann über ***Datei – Datenquellen*** das Fenster Datenquellen. 
1. Erstellen Sie eine neue Datenquelle eines Typs, der auf Ihrem mobilen Gerät gespeichert werden kann, z. B. SQLite, XML usw. 
1. Konfigurieren Sie die Datenquelle mit einem relativen Pfad, damit sie auf dem mobilen Gerät gespeichert wird: .\Data\Connections.db  
![!!clip11276](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip11276.png) 
1. Konfigurieren Sie Ihre mobilen Anwendungen (FileZilla, UltraVNC usw.) auf die gleiche Weise (relativ zum Installationsordner). Klicken Sie auf ***Installationspfad konfigurieren***, um Ihre bevorzugte mobile Anwendung auszuwählen.  
![!!clip10449](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip10449.png) 
![!!clip11277](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip11277.png) 
1. Sie können nun die bereits vorhandene ***Lokale Datenquelle*** löschen, die automatisch erstellt wurde.
