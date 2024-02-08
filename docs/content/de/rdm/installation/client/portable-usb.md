---
title: Portable Anwendung (USB)
---
{{ de.RDM }} kann als portable Anwendung (ohne Installation) verwendet werden. Im Folgenden sind die Schritte aufgeführt, die gewährleisten, dass das Programm ordnungsgemäß funktioniert:  

{% snippet icon.badgeInfo %} 
Mittels der portablen Version können Sie mehrere Versionen von {{ de.RDM }} ausführen und verschiedene Konfigurationen verwenden. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Um eine einzelne portable Version Anwendung zu konfigurieren, folgen Sie bitte den Anweisungen in diesem Artikel:  [Portable Version von {{ de.RDM }}](/de/kb/remote-desktop-manager/how-to-articles/portable-rdm-installation/). 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Dieses Verfahren ist nicht empfehlenswert, wenn {{ de.RDM }} von mehreren Benutzern über eine Netzwerkfreigabe ausgeführt wird. Dies würde die Identifizierung einzelner Benutzer verhindern und zu Konflikten mit den Benutzereinstellungen führen. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
{{ de.RDM }} speichert den Offline Cache standardmäßig in Ihrem Windows-Profil. Wenn Sie eine erweiterte Datenquelle verwenden und den Offline Modus verwenden möchten, aktivieren Sie bitte in ***Datei - Optionen - Erweitert*** die Option ***Anwendungsverzeichnis für den Offline Cache verwenden***, damit dieser im Anwendungsverzeichnis gespeichert wird. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
Die folgenden Schritte gewährleisten echte Mobilität und einfache Wartung. Es kann leicht an Ihre Wünsche angepasst werden. 
{% endsnippet %}
 
## Vorgehen 

1. Laden Sie das ***ZIP***-Paket {{ de.RDM }} Team herunter.
![!!clip11586](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip11586.png) 
1. Erstellen Sie auf Ihrem Gerät einen Ordner *RemoteDesktopManager*. 
1. Erstellen Sie in dem in Schritt 2 erstellten Ordner zwei weitere Ordner: 
    1. Einen für die Konfiguration.
{type="a"}
    1. Einen für die Daten. 
    1. OPTIONAL: Einen für weitere Anwendungen (nur wenn Sie externe Werkzeuge wie FileZilla verwenden möchten). 
1. Entpacken Sie {{ de.RDM }} im Schritt 2 erstellten Ordner. 
1. Erstellen Sie weiters eine Textdatei namens **override.cfg** und speichern diese mit *.\config* als Inhalt. 
1. Öffnen Sie {{ de.RDM }} und über ***Datei – Datenquellen*** das Fenster Datenquellen. 
1. Erstellen Sie eine neue Datenquelle eines Typs, der auf Ihrem Gerät gespeichert werden kann, z. B. SQLite, XML etc. 
1. Konfigurieren Sie die Datenquelle mit einem relativen Pfad, damit sie auf dem Gerät gespeichert wird: .\Data\Connections.db  
![!!clip11276](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip11276.png) 
1. Konfigurieren Sie weitere Anwendungen (FileZilla, UltraVNC usw.) auf die gleiche Weise (relativ zum *RemoteDesktopManager* Ordner). Klicken Sie auf ***Installationspfad konfigurieren***, um die bevorzugte Anwendung auszuwählen.  
![!!clip10449](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip10449.png) 
![!!clip11277](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip11277.png) 
1. Sie können nun die bereits vorhandene ***Lokale Datenquelle*** löschen, die automatisch erstellt wurde.
