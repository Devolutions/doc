---
title: Bewährte Verfahren für die Migration von SQL Server-Datenbanken
description: Um den Inhalt Ihrer lokalen SQL Server-Datenbank zu migrieren, empfehlen wir Ihnen, die Schritte der jeweiligen Lösungen unten zu befolgen.
---
Um den Inhalt Ihrer lokalen SQL Server-Datenbank zu migrieren, empfehlen wir Ihnen, die Schritte der jeweiligen Lösungen unten zu befolgen.  

Zwei Tools stehen zur Verfügung: Sie können wählen zwischen dem <a href="#dma">Data Migration Assistant</a> (DMA) von Microsoft und dem <a href="#ssms">Microsoft SQL Server Management Studio</a> (SSMS).  

## Konfiguration
Wir raten Ihnen dringend, Ihre Datenbank vor dem Umzug zu reinigen.  

* ***Administration – [Gelöschten Verlauf bereinigen](/rdm/windows/commands/administration/clean-up/deleted-history/)***
* ***Administration – [Eintragsverlauf bereinigen](/rdm/windows/commands/administration/clean-up/entries-history/)***
* ***Administration – [Aktivitätsprotokolle bereinigen](/rdm/windows/commands/administration/clean-up/logs/)***

### Lösung 1 <a name="dma"></a>

1. Laden Sie den [Data Migration Assistant](https://docs.microsoft.com/de-de/sql/dma/dma-overview) (DMA) von Microsoft herunter und installieren Sie ihn.
1. Starten Sie die Anwendung DMA.
1. Klicken Sie auf das Pluszeichen „+“, um eine neue Migration zu erstellen.
1. Wählen Sie ***Migration*** und benennen Sie das ***Projekt***.
1. Wählen Sie die ***Quelle*** Ihres ***Servertyps*** und das ***Ziel*** Ihres ***Servertyps*** aus dem Dropdown-Menü aus und lassen Sie den Migrationsbereich auf Schema und Daten. Klicken Sie auf ***Erstellen***.  
![!!KB4728](https://webdevolutions.azureedge.net/docs/de/kb/KB4728.png)  

1. Geben Sie den lokalen ***Servernamen*** ein und wählen Sie ***Authentifizierungstyp***.  
   {% snippet icon.badgeInfo %}
   Vergewissern Sie sich, dass Sie über ausreichende Rechte und Berechtigungen verfügen, um diese Aktion durchzuführen.
   {% endsnippet %}  

1. Klicken Sie auf ***Verbinden***..
1. Wählen Sie Ihre Datenbank in der geladenen Auswahl und klicken Sie auf ***Weiter***.  
![!!KB4729](https://webdevolutions.azureedge.net/docs/de/kb/KB4729.png)
1. Geben Sie den lokalen ***Namen des Zielservers*** ein und wählen Sie ***Authentifizierungstyp***.  
   {% snippet icon.badgeInfo %}
   Vergewissern Sie sich, dass Sie über ausreichende Rechte und Berechtigungen verfügen, um diese Aktion durchzuführen.
   {% endsnippet %}  

1. Klicken Sie auf Verbinden..
1. Wählen Sie Ihre Datenbank in der geladenen Auswahl und klicken Sie auf ***Weiter***.  
   {% snippet icon.badgeCaution %}
   Ihre neue Datenbank muss bereits [erstellt](https://docs.microsoft.com/de-de/azure/azure-sql/database/single-database-create-quickstart) worden sein, um in dieser Liste zu erscheinen. 
   {% endsnippet %}  

   ![!!KB4730](https://webdevolutions.azureedge.net/docs/de/kb/KB4730.png)

1. Überprüfen Sie, ob Sie Probleme haben, indem Sie in der Liste der Schemaobjekte auf der linken Seite nach unten scrollen. Sie können auf ein Element klicken, um weitere Details zu einem speziellen Problem zu erhalten und zu erfahren, ob eine Lösung verfügbar ist.  
   {% snippet icon.badgeCaution %}
   Die Nutzerkonten mit dem Fehler „Windows-Nutzer können in der Azure SQL-Datenbank zu externen Nutzern konvertiert werden“ müssen in der Liste deaktiviert werden, damit die Migration funktioniert.  

   Diese speziellen Nutzer müssen ihren {{ de.UVLT }} und ihre Konfiguration vor der Migration [exportieren](/kb/remote-desktop-manager/how-to-articles/export-import-entries/). Wenn sie dies nicht tun, gehen die in folgenden Sektionen gespeicherten Daten verloren: ***Meine Kontoeinstellungen***, ***Nutzerspezifische Einstellungen*** und alle Einträge in ihrem ***{{ de.UVLT }}***.  

   Nach dem Exportieren der Nutzerdaten müssen Sie einen neuen Nutzer in ihrer Liste erstellen und die Daten erneut importieren.
   {% endsnippet %}  

1. Wenn alle Probleme behoben oder deaktiviert sind, klicken Sie bitte auf ***SQL-Skript erzeugen***.  
![!!KB4731](https://webdevolutions.azureedge.net/docs/de/kb/KB4731.png)  
1. Wenn das Skript erstellt ist, überprüfen Sie bitte, ob es irgendwelche Probleme gibt und klicken Sie dann auf ***Schema bereitstellen***.  
![!!KB4732](https://webdevolutions.azureedge.net/docs/de/kb/KB4732.png)    
   {% snippet icon.badgeInfo %}
   Dies kann einige Zeit in Anspruch nehmen, je nachdem, wie umfangreich Ihr Verbindungsverlauf in der Datenbank ist.
   {% endsnippet %}  

1. Wenn die ***Bereitstellungsergebnisse*** ausgeführt sind, überprüfen Sie bitte, ob es Probleme gibt, klicken Sie dann auf ***Daten migrieren***.
![!!KB4734](https://webdevolutions.azureedge.net/docs/de/kb/KB4734.png)
1. Klicken Sie auf ***Datenmigration starten***. Bitte beachten Sie, dass die Anzahl der Tabellen je nach Ihrer Version unterschiedlich sein kann.  
![!!KB4735](https://webdevolutions.azureedge.net/docs/de/kb/KB4735.png)
1. Warten Sie, bis die Migration abgeschlossen ist. Danach können Sie den ***Data Migration Assistant*** schließen.
![!!KB4736](https://webdevolutions.azureedge.net/docs/de/kb/KB4736.png)
1. Nun können Sie die neue Datenquelle in  <a href="#rdm">{{ de.RDM }}</a> erstellen oder die <a href="#dvls">{{ de.DVLSCONSOLE }}</a> aktualisieren.

### Lösung 2 [BACPAC](https://learn.microsoft.com/de-de/sql/relational-databases/data-tier-applications/data-tier-applications?view=sql-server-ver15#bacpac) <a name="ssms"></a>

1. Verwendung von Microsoft SQL Server Management Studio (SSMS).
1. Stellen Sie eine Verbindung zu Ihrer SQL Server-Datenbank her.
1. Klicken Sie mit der rechten Maustaste auf ***Name der Datenbank (Knoten) – Aufgaben – Datenebenenanwendung exportieren…***.
1. Folgen Sie den Schritten des Assistenten.
1. Stellen Sie mit SSMS eine Verbindung zum Ziel-SQL-Server her.
1. Klicken Sie mit der rechten Maustaste auf ***Datenbanken (Knoten) – Aufgaben – Datenebenenanwendung importieren…***.
1. Folgen Sie den Schritten des Assistenten.
1. Nun können Sie die neue Datenquelle in  <a href="#rdm">{{ de.RDM }}</a> erstellen oder die <a href="#dvls">{{ de.DVLSCONSOLE }}</a> aktualisieren.

### Lösung 3  

{% snippet icon.badgeCaution %}
Diese Lösung wird nicht für eine Migration von lokal zu lokal unterstützt. Wenn Sie dies versuchen, erhalten Sie von SSMS folgende Fehlermeldung:  

Sie können diesen Assistenten nicht verwenden, um Datenbanken zwischen lokalen Instanzen des SQL Servers zu verschieben. Zu den unterstützten Vorgängen gehören die Bereitstellung einer lokalen Instanz von SQL Server für die Microsoft Azure SQL-Datenbank, von Microsoft Azure SQL-Datenbank für eine lokalen Instanz von SQL Server oder von einer Microsoft Azure SQL-Datenbank für eine andere Microsoft Azure SQL-Datenbank.
{% endsnippet %}  

1. Verwendung von Microsoft SQL Server Management Studio (SSMS).
1. Klicken Sie mit der rechten Maustaste auf ***Name der Datenbank (Knoten) – Aufgaben – Datenbank für Microsoft Azure SQL-Datenbank bereitstellen…***.
1. Folgen Sie den Schritten des Assistenten.
1. Nun können Sie die neue Datenquelle in  <a href="#rdm">{{ de.RDM }}</a> erstellen oder die <a href="#dvls">{{ de.DVLSCONSOLE }}</a> aktualisieren. 

### Verbindung zu {{ de.RDM }} <a name="rdm"></a>

1. Erstellen Sie eine neue Datenquelle unter ***Datei – Datenquellen – Neue Datenquelle hinzufügen***.
1. Bei der ersten Verbindung erhalten Sie möglicherweise folgende Fehlermeldung. Klicken Sie in diesem Fall auf ***Beheben***.
![!!KB4646](https://webdevolutions.azureedge.net/docs/de/kb/KB4646.png)  

   {% snippet icon.badgeInfo %}
   Dies kann einige Zeit in Anspruch nehmen, je nachdem, wie umfangreich Ihr Verbindungsverlauf in der Datenbank ist.
   {% endsnippet %}  

### Verbindung zu  {{ de.DVLS }} <a name="dvls"></a>

Aktualisieren Sie den ***Host*** und den Namen der Datenbank für die {{ de.DVLSCONSOLE }} unter ***Server – Bearbeiten– Datenbank***.
![!!KB4971](https://webdevolutions.azureedge.net/docs/de/kb/KB4971.png)
