---
eleventyComputed:
  title: Portable Installation von  {{ de.RDM }} 
---
Es kann vorkommen, dass die Mitarbeiter des Devolutions-Support-Teams Sie bitten, eine portable Installation von {{ de.RDM }} auszuprobieren, um die Anwendung von einem möglichen Problem zu isolieren, das von einer lokalen Datei, Konfiguration oder spezifischen Einstellung verursacht wird.  

Dazu müssen Sie folgende Schritte ausführen:  

1. Laden Sie die ZIP-Datei der [kostenlosen](https://devolutions.net/de/remote-desktop-manager/home/downloadfree/) oder [Team](https://devolutions.net/de/remote-desktop-manager/home/downloadenterprise/)-Version von {{ de.RDM }} herunter. 
1. Erstellen Sie einen neuen Ordner auf Ihrem Desktop. 
1. Extrahieren Sie den Inhalt der ZIP-Datei in den in Schritt 2 erstellten Ordner. 
1. Wechseln Sie in diesen Ordner, sobald die ZIP-Datei entpackt wurde, und führen Sie  **RemoteDesktopManager.exe** aus. 

Wenn das Problem behoben ist, können Sie die portable Anwendung von {{ de.RDM }} so verwenden. Wir empfehlen Ihnen jedoch, sie als Hauptinstallation zu verwenden.  

Dazu müssen Sie Folgendes tun:  

## Verschieben der portablen Installation von  {{ de.RDM }} 

{% snippet icon.badgeInfo %}
Die folgenden Schritte gelten für den Fall, dass Sie die Standard-SQLite-Datenquellen verwenden, die von {{ de.RDM }} bei der Erstinstallation erstellt wurde. Sollte dies nicht der Fall sein, gehen Sie bitte zu Schritt 4..
{% endsnippet %}

1. Gehen Sie zu Ihrem Ordner **%localappdata%\Devolutions\RemoteDesktopManager**.
1. Suchen Sie die Datei **Connections.db**, die mit Ihrer SQLite-Datenquellen verknüpft ist.
1. Kopieren Sie diese in Ihre portable Version von {{ de.RDM }}.
1. Verschieben Sie den Inhalt Ihres Ordners **RemoteDesktopManager** in einen Sicherungsordner, den Sie hierfür erstellen. Auf diese Weise haben Sie später bei Bedarf eine Sicherungskopie Ihrer lokalen Konfiguration von {{ de.RDM }}.
1. Kopieren Sie den Inhalt Ihrer portablen Version von {{ de.RDM }} in den Ordner **RemoteDesktopManager**, der sich unter **%localappdata%\Devolutions\RemoteDesktopManager** befindet. Dadurch wird Ihre portable Version von {{ de.RDM }} zu Ihrer lokalen Installation.
1. Erstellen Sie eine neue Verknüpfung von {{ de.RDM }} mit der in diesem Ordner enthaltenen Datei **RemoteDesktopManager.exe**.
1. Starten Sie {{ de.RDM }}.
1. Greifen Sie auf Ihre Daten zu.
   - Wenn Sie die Standard-SQLite-Datenquelle verwenden und die Datei ***Connections.db*** wie in den Schritten 1 bis 3 beschrieben verschoben haben, sollte die Anwendung automatisch eine Verbindung herstellen und sie sollten Zugriff auf Ihre Daten haben.
   - Wenn Sie einen anderen Datenquellentyp als SQLite verwenden, müssen Sie ihn im {{ de.RDM }} erstellen und zuordnen, wie in diesem Artikel gezeigt: [Eine Datenquelle erstellen](/rdm/windows/data-sources/create-new-data-source/).
