---
eleventyComputed:
  title: Empfohlene Vorgehensweise für die Migration von SQL Server-Datenbanken
  description: Um den Inhalt Ihrer SQL-Server-Datenbank zu migrieren, empfehlen wir die Schritte einer der folgenden Lösungen zu befolgen.
---
Um den Inhalt Ihrer SQL-Server-Datenbank zu migrieren, empfehlen wir die Schritte einer der folgenden Lösungen zu befolgen.  

Zwei Möglichkeiten stehen zur Verfügung: Sie können dafür den <a href="#dma">Data Migration Assistant</a> (DMA) von Microsoft oder das <a href="#ssms">Microsoft SQL Server Management Studio</a> (SSMS) verwenden.  

## Konfiguration
Wir empfehlen, folgende Bereinigungen vor der Migration durchzuführen.  

* ***Administration – [Gelöschte Einträge bereinigen](/rdm/windows/commands/administration/clean-up/deleted-history/)***
* ***Administration – [Versionsverlauf bereinigen](/rdm/windows/commands/administration/clean-up/entries-history/)***
* ***Administration – [Aktivitätsprotokolle bereinigen](/rdm/windows/commands/administration/clean-up/logs/)***

### Lösung 1 <a name="dma"></a>

1. Laden Sie den [Data Migration Assistant](https://learn.microsoft.com/de-de/sql/dma/dma-overview) (DMA) von Microsoft herunter und installieren Sie diesen.
1. Starten Sie die Anwendung DMA.
1. Klicken Sie auf das Plus „+“, um eine neue Migration zu erstellen.
1. Wählen Sie ***Migration*** und benennen Sie das ***Projekt***.
1. Wählen Sie den ***Servertyps*** der ***Quelle*** und des ***Ziels*** aus dem Dropdown-Menü aus und lassen Sie den Migrationsbereich auf Schema und Daten. Klicken Sie auf ***Erstellen***.  
![!!KB4728](https://webdevolutions.azureedge.net/docs/de/kb/KB4728.png)  

1. Geben Sie den ***Servernamen*** des Quell-Server ein und wählen Sie ***Authentifizierungstyp***. 
   {% snippet icon.badgeInfo %}
   Vergewissern Sie sich, dass Sie über ausreichende Berechtigungen verfügen, um diese Aktion durchzuführen.
   {% endsnippet %}  

1. Klicken Sie auf ***Verbinden***.
1. Wählen Sie Ihre Datenbank in der geladenen Auswahl und klicken Sie auf ***Weiter***.  
![!!KB4729](https://webdevolutions.azureedge.net/docs/de/kb/KB4729.png)

1. Geben Sie den ***Namen des Zielservers*** ein und wählen Sie ***Authentifizierungstyp***.  
   {% snippet icon.badgeInfo %}
   Vergewissern Sie sich, dass Sie über ausreichende Rechte und Berechtigungen verfügen, um diese Aktion durchzuführen.
   {% endsnippet %}  

1. Klicken Sie auf Verbinden..
1. Wählen Sie Ihre Datenbank in der geladenen Auswahl und klicken Sie auf ***Weiter***.  
   {% snippet icon.badgeCaution %}
   Die neue Datenbank muss bereits [erstellt](https://learn.microsoft.com/de-de/azure/azure-sql/database/single-database-create-quickstart) worden sein, um in dieser Liste zu erscheinen. 
   {% endsnippet %}  

   ![!!KB4730](https://webdevolutions.azureedge.net/docs/de/kb/KB4730.png)

1. Überprüfen Sie, ob Sie Probleme haben, indem Sie in der Liste der Schemaobjekte auf der linken Seite nach unten scrollen. Sie können auf ein Element klicken, um weitere Details zu einem speziellen Problem zu erhalten und zu erfahren, ob eine Lösung verfügbar ist.  
   {% snippet icon.badgeCaution %}
   Die Benutzerkonten mit dem Fehler „Windows-Benutzer können in der Azure SQL-Datenbank zu externen Nutzern konvertiert werden“ müssen in der Liste deaktiviert werden, damit die Migration funktioniert.  

   Diese speziellen Benutzer müssen Ihren {{ de.UVLT }} und ihre Konfiguration vor der Migration [exportieren](/kb/remote-desktop-manager/how-to-articles/export-import-entries/). Wenn dieser Schritt nicht durchgeführt wird, gehen alle Einstellungen der folgenden Bereiche verloren: ***Meine Kontoeinstellungen***, ***Benutzerspezifische Einstellungen*** und alle Einträge im jeweiligen ***{{ de.UVLT }}***.  

   Nach dem Exportieren der Benutzerdaten müssen Sie einen neuen Benutzer erstellen und diese Daten importieren.
   {% endsnippet %}  

1. Wenn alle Probleme behoben oder deaktiviert sind, klicken Sie bitte auf ***SQL-Skript erzeugen***.  
![!!KB4731](https://webdevolutions.azureedge.net/docs/de/kb/KB4731.png)  
1. Wenn das Skript erstellt ist, überprüfen Sie bitte, ob es irgendwelche Probleme gibt und klicken Sie dann auf ***Schema bereitstellen***.  
![!!KB4732](https://webdevolutions.azureedge.net/docs/de/kb/KB4732.png)  

   {% snippet icon.badgeInfo %}
   Dies kann einige Zeit in Anspruch nehmen, abhängig von der Datenbankgröße. 
   {% endsnippet %}  

1. Wenn die ***Bereitstellungsergebnisse*** ausgeführt sind, überprüfen Sie bitte, ob Probleme angezeigt werden, ansonsten klicken Sie auf ***Daten migrieren***.
![!!KB4734](https://webdevolutions.azureedge.net/docs/de/kb/KB4734.png)
1. Klicken Sie auf ***Datenmigration starten***. Bitte beachten Sie, dass die Anzahl der Tabellen je nach Ihrer Version unterschiedlich sein kann.  
![!!KB4735](https://webdevolutions.azureedge.net/docs/de/kb/KB4735.png)
1. Warten Sie, bis die Migration abgeschlossen ist. Danach können Sie den ***Data Migration Assistant*** schließen.
![!!KB4736](https://webdevolutions.azureedge.net/docs/de/kb/KB4736.png)
1. Nun können Sie die neue Datenquelle in  <a href="#rdm">{{ de.RDM }}</a> erstellen oder die <a href="#dvls">{{ de.DVLSCONSOLE }}</a> aktualisieren.

### Lösung 2 [BACPAC](https://learn.microsoft.com/de-de/sql/relational-databases/data-tier-applications/data-tier-applications?view=sql-server-ver15#bacpac) <a name="ssms"></a>

1. Verwendung von Microsoft SQL Server Management Studio (SSMS).
1. Stellen Sie eine Verbindung zu Ihrer SQL Server-Datenbank her.
1. Markiere Sie die Datenbank und klicken Sie mit der rechten Maustaste auf ***Tasks – Datenebenenanwendung exportieren...***.
1. Folgen Sie den Schritten des Assistenten.
1. Stellen Sie mit SSMS eine Verbindung zum Ziel-SQL-Server her.
1. Klicken Sie mit der rechten Maustaste auf ***Datenbanken (Knoten) – Datenschichtanwendung importieren…***.
1. Folgen Sie den Schritten des Assistenten.
1. Nun können Sie die neue Datenquelle in  <a href="#rdm">{{ de.RDM }}</a> erstellen oder die <a href="#dvls">{{ de.DVLSCONSOLE }}</a> aktualisieren.

### Lösung 3  

{% snippet icon.badgeCaution %}
Diese Lösung wird nicht für ein Migration von lokal zu lokal unterstützt. Wenn Sie dies versuchen, erhalten Sie von SSMS folgende Fehlermeldung:  

Sie können diesen Assistenten nicht verwenden, um Datenbanken zwischen lokalen Instanzen des SQL Servers zu verschieben. Zu den unterstützten Vorgängen gehören die Bereitstellung einer lokalen Instanz von SQL Server für die Microsoft Azure SQL-Datenbank, von Microsoft Azure SQL-Datenbank für eine lokalen Instanz von SQL Server oder von einer Microsoft Azure SQL-Datenbank für eine andere Microsoft Azure SQL-Datenbank.
{% endsnippet %}  

1. Verwendung von Microsoft SQL Server Management Studio (SSMS).
1. Markiere Sie die Datenbank und klicken Sie mit der rechten Maustaste auf ***Tasks – Datenbank in Microsoft Azure SQL-Datenbank bereitstellen…***.
1. Folgen Sie den Schritten des Assistenten.
1. Nun können Sie die neue Datenquelle in  <a href="#rdm">{{ de.RDM }}</a> erstellen oder die <a href="#dvls">{{ de.DVLSCONSOLE }}</a> aktualisieren. 

### Verbindung zu {{ de.RDM }} <a name="rdm"></a>

1. Erstellen Sie eine neue Datenquelle unter ***Datei – Datenquellen – Neue Datenquelle hinzufügen***.
1. Bei der ersten Verbindung erhalten Sie möglicherweise folgende Fehlermeldung. Klicken Sie in diesem Fall auf ***Reparieren***.
![!!KB4646](https://webdevolutions.azureedge.net/docs/de/kb/KB4646.png)  

   {% snippet icon.badgeInfo %}
   Dies kann einige Zeit in Anspruch nehmen, abhängig von der Datenbankgröße. 
   {% endsnippet %}  

### Verbindung zu  {{ de.DVLS }} <a name="dvls"></a>

Aktualisieren Sie den ***Host*** und den Namen der Datenbank für die {{ de.DVLSCONSOLE }} unter ***Server – Bearbeiten– Datenbank***.
![!!KB4971](https://webdevolutions.azureedge.net/docs/de/kb/KB4971.png)
