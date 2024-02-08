---
eleventyComputed:
  title: Stapelverarbeitung im {{ de.RDM }}
---
Im {{ de.RDM }} können Sie mit der Funktion ***[Stapelverarbeitung](/de/rdm/windows/commands/edit/batch/batch-edit/)*** oder ***Bearbeiten (Spezielle Aktionen)*** die Eigenschaften mehrerer Einträge oder Ordner gleichzeitig bearbeiten.  

![Bearbeiten (Spezielle Aktionen) und Stapelverarbeitung](https://webdevolutions.azureedge.net/docs/de/kb/KB2104.png)

## Eintrag / Ordnerauswahl
Die zu bearbeitenden Einträge und Ordner können mit den folgenden Methoden ausgewählt werden.

{% snippet icon.badgeNotice %}
In der Praxis empfiehlt es sich, die ***[Erweiterte Suche](#erweiterte-suche)*** oder die ***[Multi {{ de.VLT }} Suche](#multi-tresor-suche)*** zu verwenden, da die manuelle Auswahl im ***Navigationsbereich*** zeitaufwändiger ist und das Risiko birgt, einige Einträge / Ordner zu übersehen. Die manuelle Auswahl macht nur Sinn, wenn Sie nur wenige ausgewählte Einträge bearbeiten möchten.  

Unabhängig von der verwendeten Methode ist es empfehlenswert, für jede Stapelverarbeitung nur eine Eintragsart auszuwählen.
{% endsnippet %}

{% snippet icon.badgeCaution %}
Um die Informationen von Ordnern zu bearbeiten, MÜSSEN Sie die ***[Erweiterte Suche](#erweiterte-suche)*** oder die ***[Multi {{ de.VLT }} Suche](#multi-tresor-suche)*** verwenden, um die Ordner auszuwählen. Wenn Sie die Ordner manuell im ***Navigationsbereich*** auswählen, werden die Informationen in den untergeordneten Einträgen bearbeitet, NICHT die Informationen in den Ordnern selbst.
{% endsnippet %}

* [Manuelle Auswahl](#manuelle-auswahl)
* [Erweiterte Suche](#erweiterte-suche)
* [Multi {{ de.VLT }} Suche](#multi-tresor-suche)

### Manuelle Auswahl
Wählen Sie im {{ de.RDM }} alle Einträge / Ordner im ***Navigationsbereich*** aus. Verwenden Sie <kbd>Strg</kbd>+Linksklick, um sie einzeln auszuwählen oder <kbd>Umschalt</kbd>+Linksklick, um mehrere gleichzeitig auszuwählen. *Beachten Sie bitte, dass Sie bei der Auswahl eines Ordners die Informationen der untergeordneten Einträge bearbeiten und nicht die des Ordners*.  

Gehen Sie für die nächsten Schritte zum Bereich [Stapelbearbeitungs-Aktionen](#stapelverarbeitung) oder lesen Sie weiter über die anderen Auswahlmethoden. 

### Erweiterte Suche
Mit der Funktion ***[Erweiterte Suche](/rdm/windows/commands/view/panels/search/advanced/)*** können Sie den aktuell ausgewählten {{ de.VLT }} durchsuchen.  
![Erweiterte Suche](https://webdevolutions.azureedge.net/docs/de/kb/KB2108.png)
1. Gehen Sie im {{ de.RDM }} zu ***Ansicht – Suche – Erweiterte Suche*** oder drücken Sie die Taste F11.
1. Wählen und bestimmen Sie auf der Registerkarte ***Suchen*** im Fenster ***Erweiterte Suche*** die Kriterien, nach denen Ihre Suche gefiltert werden soll. Auf der Registerkarte ***Einstellungen*** sind weitere Suchparameter verfügbar. Wenn Sie fertig sind, klicken Sie bitte auf ***Suche***. 
   {% snippet icon.badgeInfo %}
   Um Ihre Suche nach Ordnertyp zu filtern, müssen Sie die Funktion ***Erweiterte Suche*** verwenden, da diese Funktion in der ***Multi {{ de.VLT }} Suche*** nicht verfügbar ist. Suchen Sie nach ***Verbindungstyp*** und wählen Sie in der Drop-Down-Liste daneben den Ordnertyp aus.
   {% endsnippet %}  
1. Wählen Sie die Einträge / Ordner aus, die Sie bearbeiten möchten. Um alle auszuwählen, klicken Sie auf eine beliebige Stelle im Ergebnisfeld und verwenden Sie die Tastenkombination <kbd>Strg</kbd>+<kbd>A</kbd>.
1. Wenn Sie Ihre Auswahl getroffen haben, klicken Sie bitte in der unteren rechten Ecke des Fensters auf ***Im Navigationsbereich auswählen***.  

Gehen Sie für die nächsten Schritte zum Bereich [Stapelverarbeitung](#stapelverarbeitung) oder lesen Sie weiter über die anderen Auswahlmethoden.

### Multi {{ de.VLT }} Suche
![Multi {{ de.VLT }} Suche](https://webdevolutions.azureedge.net/docs/de/kb/KB2109.png)
Mit der Funktion [***Multi {{ de.VLT }} Suche***](/rdm/windows/commands/view/panels/search/multi-vault/) können Sie in allen {{ de.VLT }}en der ausgewählten Datenbank gleichzeitig suchen.  

1. Gehen Sie im {{ de.RDM }} zu ***Ansicht – Suche – Multi {{ de.VLT }} Suche*** oder drücken Sie die Taste F12.
1. Wählen und bestimmen Sie die Kriterien zum Filtern Ihrer Suche, klicken Sie dann auf ***Suche***.
   {% snippet icon.badgeInfo %}
   Um Ihre Suche nach Ordnertyp zu filtern, müssen Sie die Funktion ***[Erweiterte Suche](#erweiterte-suche)*** verwenden.
   {% endsnippet %}
1. Wählen Sie die Einträge / Ordner aus, die Sie bearbeiten möchten. Um alle auszuwählen, klicken Sie auf eine beliebige Stelle im Ergebnisfeld und verwenden Sie die Tastenkombination <kbd>Strg</kbd>+<kbd>A</kbd>.
1. Wenn Sie Ihre Auswahl getroffen haben, klicken Sie bitte in der unteren rechten Ecke des Fensters auf ***Im Navigationsbereich auswählen***.

Gehen Sie für die nächsten Schritte zum Bereich [Stapelverarbeitung](#stapelverarbeitung).

## Stapelverarbeitung
Mit der Funktion ***Stapelverarbeitung*** können Sie folgende Aktionen durchführen:  

* Gespeicherte Host-Namen / Anmeldeinformationen ändern
* Alle gespeicherten Anmeldeinformationen / Passwörter zurücksetzen
* Einträge bearbeiten (Allgemeine Einstellungen / Sitzungstyp Einstellungen / Sicherheitsgruppen (Veraltet) / Assets/ Benutzerspezifische Einstellungen / Lokale Einstellungen)  

{% snippet icon.badgeWarning %}
Sicherheitsgruppen gelten als veraltet und werden ab Version 2023.3 von {{ de.RDM }} vollständig entfernt. Siehe [Migration von Sicherheitsgruppen zu Gruppen](/de/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}  

Wenn die Optionen der ***Stapelverarbeitung*** Ihren Anforderungen entsprechen, gehen Sie zum [nächsten Bereich](#stapelverarbeitung). Wenn nicht, können Sie zu [diesem Bereich](#editspecialactions) gehen, und unter ***Bearbeiten (Spezielle Aktionen)*** einen benutzerdefinierten PowerShell-Befehl verwenden.

### Stapelverarbeitung
1. Wenn Sie Ihre Einträge ausgewählt haben, gehen Sie bitte in der Menüleiste zu ***Bearbeiten – Stapelverarbeitung – Stapelverarbeitung***. Alternativ können Sie auch mit der rechten Maustaste auf Ihre gewählten Einträge klicken und dann auf ***Bearbeiten – Stapelverarbeitung***. 
1. Wählen Sie aus der Liste eine der Optionen zur Bearbeitung aus, um ein Fenster zu öffnen. Beachten Sie, dass nur die Optionen verfügbar sind, die für Ihre Eintragstypen relevant sind.  
![Optionen der Stapelverarbeitung](https://webdevolutions.azureedge.net/docs/de/kb/KB2103.png)  
1. Bearbeiten Sie in dem Fenster die Informationen und Parameter Ihrer Wahl und speichern Sie dann. 
{% snippet icon.badgeInfo %} 
Jede Bearbeitungsoption zeigt unterschiedliche Informationen und Parameter an, die bearbeitet werden können. Eine Vorschau der einzelnen Optionen finden Sie unter [Stapelverarbeitung](/de/rdm/windows/commands/edit/batch/batch-edit/).
{% endsnippet %}  

Ihre Einträge/Ordner sind nun geändert worden.

### Bearbeiten (Spezielle Aktionen)
1. Wenn Sie Ihre Einträge ausgewählt haben, gehen Sie in der Menüleiste zu ***Start – Zwischenablage – Kopieren***. Alternativ können Sie auch mit der rechten Maustaste auf Ihre gewählten Einträge klicken und dann auf ***Zwischenablage – Kopieren***.  
![Home – Clipboard – Copy](https://webdevolutions.azureedge.net/docs/de/kb/KB2105.png)
1. Gehen Sie im Fenster ***Kopieroptionen*** auf die Registerkarte ***Vorschau***.
1. Markieren Sie den gesamten Inhalt des Feldes, kopieren diesen und fügen ihn in einen Texteditor ein, um den / die Namen des Feldes / der Felder später abrufen zu können, das / die Sie im weiteren Schritt bearbeiten möchten.
1. Schließen Sie im {{ de.RDM }} das Fenster ***Kopieroptionen***, stellen Sie aber sicher, dass Ihre im ***Navigationsbereich*** ausgewählten Einträge markiert bleiben.
1. Während Ihre Einträge noch markiert sind, gehen Sie in der Menüleiste zu ***Bearbeiten – Stapelverarbeitung – Bearbeiten Spezielle Aktionen***. Alternativ können Sie auch mit der rechten Maustaste auf Ihre gewählten Einträge klicken und dann auf ***Bearbeiten – Bearbeiten (Spezielle Aktionen)***.
1. Wählen Sie im Bereich ***Allgemein*** die Option ***Benutzerdefinierter PowerShell Befehl*** aus und klicken Sie dann auf ***OK***.  
![Special Action Selection](https://webdevolutions.azureedge.net/docs/de/kb/KB2106.png)
1. Schreiben Sie im Feld mit den Informationen, die Sie in Schritt 3 kopiert haben, Ihr benutzerdefiniertes PowerShell-Skript. Sie können auch eines dieser [Beispiele](/rdm/windows/powershell-scripting/custom-powershell-commands/batch-actions-samples/) verwenden.
1. Klicken Sie auf ***OK***.

Ihre Einträge / Ordner sind nun geändert worden.
