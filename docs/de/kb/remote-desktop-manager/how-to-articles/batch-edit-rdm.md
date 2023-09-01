---
eleventyComputed:
  title: Stapelverarbeitung im  {{ de.RDM }}
---
Im {{ de.RDM }} können Sie mit der Funktion ***[Stapelverarbeitung](/de/rdm/windows/commands/edit/batch/batch-edit/)*** oder ***Bearbeiten (Sonderaktionen)*** die Eigenschaften mehrerer Einträge oder Ordner gleichzeitig bearbeiten.  

![Edit (Special Actions) and Batch Edit](https://webdevolutions.azureedge.net/docs/de/kb/KB2104.png)

## Eintrag/Ordnerauswahl 

Die zu bearbeitenden Einträge und Ordner können mit den folgenden Methoden ausgewählt werden. Wählen Sie diejenige aus, die Ihren Bedürfnissen am besten entspricht.  

{% snippet icon.badgeNotice %}
In der Praxis empfiehlt es sich, die ***[Erweiterte Suche](#advanced)*** oder die ***[Multi-{{ de.VLT }}-Suche](#multi)*** zu verwenden, da die manuelle Auswahl im ***Navigationsbereich*** zeitaufwändiger ist und das Risiko birgt, einige Einträge/Ordner zu vergessen. Die letztgenannte Methode kann nur empfohlen werden, wenn Sie nur wenige ausgewählte Einträge zu bearbeiten haben.  

Unabhängig von der verwendeten Methode ist es empfehlenswert, für jede Stapelverarbeitung nur eine Eintragsart auszuwählen.
{% endsnippet %}

{% snippet icon.badgeCaution %}
Um die Informationen von Ordnern zu bearbeiten, MÜSSEN Sie die ***[Erweiterte Suche](#advanced)*** oder die ***[Multi-{{ de.VLT }} Suche](#multi)*** verwenden, um die Ordner auszuwählen. Wenn Sie die Ordner manuelle im ***Navigationsbereich*** auswählen, werden die Informationen in den untergeordneten Einträgen bearbeitet, NICHT die Informationen in den Ordnern selbst.
{% endsnippet %}

* [Manuelle Auswahl](#manual)
* [Erweiterte Suche](#advanced)
* [Multi-{{ de.VLT }}-Suche](#multi)

### Manuelle Auswahl 
<a name="manual"></a>

Wählen Sie im {{ de.RDM }} alle Einträge/Ordner manuell im ***Navigationsbereich*** aus. Verwenden Sie **Strg+Linksklick**, um sie einzeln auszuwählen oder **Umschalt+Linksklick**, um mehrere gleichzeitig auszuwählen. Beachten Sie bitte, dass Sie bei der Auswahl eines Ordners die Informationen der untergeordneten Einträge bearbeiten und nicht die des Ordners.  

Gehen Sie für die nächsten Schritte zum Bereich [Stapelbearbeitungs-Aktionen](#edit) oder lesen Sie weiter über die anderen Auswahlmethoden. 

### Erweiterte Suche
<a name="advanced"></a>

Mit der Funktion ***[Erweiterte Suche](/rdm/windows/commands/view/panels/search/advanced/)*** können Sie den aktuell ausgewählten {{ de.VLT }} durchsuchen.  
![Erweiterte Suche](https://webdevolutions.azureedge.net/docs/de/kb/KB2108.png) 
1. Gehen Sie im {{ de.RDM }} zu ***Ansicht – Suche – Erweiterte Suche*** oder drücken Sie die Taste F11. 
1. Wählen und bestimmen Sie auf der Registerkarte ***Suchen*** im Fenster ***Erweiterte Suche*** die Kriterien, nach denen Ihre Suche gefiltert werden soll. Auf der Registerkarte ***Einstellungen*** sind weitere Suchparameter verfügbar. Wenn Sie fertig sind, klicken Sie bitte auf ***Suche***. 
{% snippet icon.badgeInfo %}
Um Ihre Suche nach Ordnertyp zu filtern, müssen Sie die Funktion ***Erweiterte Suche*** verwenden, da diese Funktion in der ***Multi-{{ de.VLT }}-Suche*** nicht verfügbar ist. Suchen Sie nach ***Verbindungsart*** und wählen Sie in der Drop-Down-Liste daneben den Ordnertyp aus.
{% endsnippet %}  
 
3. Wählen Sie die Einträge/Ordner aus, die Sie bearbeiten möchten. Um alle auszuwählen, klicken Sie auf eine beliebige Stelle im Ergebnisfeld und verwenden Sie die Tastenkombination Strg+A 
1. Wenn Sie Ihre Auswahl getroffen haben, klicken Sie bitte in der unteren rechten Ecke des Fensters auf ***Im Navigationsbereich auswählen***.  

Gehen Sie für die nächsten Schritte zum Bereich [Stapelverarbeitungs-Aktionen](#edit) oder lesen Sie weiter über die anderen Auswahlmethoden.

### Multi-{{ de.VLT }}-Suche
<a name="multi"></a>

![Multi-{{ de.VLT }}-Suche](https://webdevolutions.azureedge.net/docs/de/kb/KB2109.png)  
Mit der Funktion [***Multi-{{ de.VLT }}-Suche***](/rdm/windows/commands/view/panels/search/multi-vault/) können Sie in allen {{ de.VLT }}en der ausgewählten Datenbank gleichzeitig suchen.  

1. Gehen Sie im {{ de.RDM }} zu ***Ansicht – Suche – Multi-{{ de.VLT }}-Suche*** oder drücken Sie die Taste F12. 
1. Wählen und bestimmen Sie die Kriterien zum Filtern Ihrer Suche, klicken Sie dann auf ***Suche***. 
{% snippet icon.badgeInfo %} 
Um Ihre Suche nach Ordnertyp zu filtern, müssen Sie die Funktion ***[Erweiterte Suche](#advanced)*** verwenden. 
{% endsnippet %}  
 
3. Wählen Sie die Einträge/Ordner aus, die Sie bearbeiten möchten. Um alle auszuwählen, klicken Sie auf eine beliebige Stelle im Ergebnisfeld und verwenden Sie die Tastenkombination Strg+A. 
1. Wenn Sie Ihre Auswahl getroffen haben, klicken Sie bitte in der unteren rechten Ecke des Fensters auf ***Im Navigationsbereich auswählen***.  

Gehen Sie für die nächsten Schritte zum Bereich  [Stapelverarbeitungs-Aktionen.](#edit).  

## Stapelverarbeitungs-Aktionen
<a name="edit"></a>

Mit der Funktion ***Stapelverarbeitung*** können Sie folgende Aktionen durchführen:  

* Gespeicherte Host-Namen / Anmeldeinformationen ändern 
* Alle gespeicherten Anmeldeinformationen / Passwörter zurücksetzen 
* Einträge bearbeiten (Allgemeine Einstellungen / Einstellungen zur Art der Sitzung / Legacy der Sicherheitsgruppe / Assets / Nutzerspezifische Einstellungen / Lokale Einstellungen)  

{% snippet icon.badgeWarning %}
Ältere Sicherheits- und Sicherheitsgruppen gelten als veraltet und werden ab Version 2023.3 von {{ de.RDM }} vollständig entfernt. Siehe [Migration von Sicherheitsgruppen zu Benutzergruppen](/de/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}  

Wenn die Optionen der ***Stapelverarbeitung*** Ihren Anforderungen entsprechen, gehen Sie zum [nächsten Bereich](#batchedit). Wenn nicht, können Sie zu [diesem Bereich](#editspecialactions) gehen, und unter ***Bearbeiten (Sonderaktionen)*** einen nutzerdefinierten PowerShell-Befehl verwenden.

### Stapelverarbeitung
<a name="batchedit"></a>

1. Wenn Sie Ihre Einträge ausgewählt haben, gehen Sie bitte in der Menüleiste zu ***Bearbeiten – Stapel – Stapelverarbeitung***. Alternativ können Sie auch mit der rechten Maustaste auf Ihre gewählten Einträge klicken und dann auf ***Bearbeiten – Stapelverarbeitung***. 
1. Wählen Sie aus der Liste eine der Optionen zur Bearbeitung aus, um ein Fenster zu öffnen. Beachten Sie, dass nur die Optionen verfügbar sind, die für Ihre Eintragstypen relevant sind.  
![Optionen der Stapelverarbeitung](https://webdevolutions.azureedge.net/docs/de/kb/KB2103.png)  
1. Bearbeiten Sie in dem Fenster die Informationen und Parameter Ihrer Wahl und speichern Sie dann. 
{% snippet icon.badgeInfo %} 
Jede Bearbeitungsoption zeigt unterschiedliche Informationen und Parameter an, die bearbeitet werden können. Eine Vorschau der einzelnen Optionen finden Sie unter [Stapelverarbeitung](/de/rdm/windows/commands/edit/batch/batch-edit/).
{% endsnippet %}  
 
Ihre Einträge/Ordner sind nun geändert worden.

### Bearbeiten (Sonderaktionen)
<a name="editspecialactions"></a>

1. Wenn Sie Ihre Einträge ausgewählt haben, gehen Sie in der Menüleiste zu ***Start – Zwischenablage – Kopieren***. Alternativ können Sie auch mit der rechten Maustaste auf Ihre gewählten Einträge klicken und dann auf ***Zwischenablage – Kopieren***.  
![Home – Clipboard – Copy](https://webdevolutions.azureedge.net/docs/de/kb/KB2105.png) 
1. Gehen Sie im Fenster ***Kopieroptionen*** auf die Registerkarte ***Vorschau***. 
1. Markieren Sie den gesamten Inhalt des Feldes, kopieren Sie ihn und fügen Sie ihn in einen Texteditor ein, um den/die Namen des Feldes/der Felder später abrufen zu können, das/die Sie in einem weiteren Schritt bearbeiten möchten. 
1. Schließen Sie im {{ de.RDM }} das Fenster ***Kopieroptionen***, stellen Sie aber sicher, dass Ihre im ***Navigationsbereich*** ausgewählten Einträge markiert bleiben.. 
1. Während Ihre Einträge noch markiert sind, gehen Sie in der Menüleiste zu ***Bearbeiten – Stapel – Bearbeiten (Sonderaktionen)***. Alternativ können Sie auch mit der rechten Maustaste auf Ihre gewählten Einträge klicken und dann auf ***Bearbeiten – Bearbeiten (Sonderaktionen)***. 
1. Wählen Sie im Bereich ***Allgemein*** die Option ***Nutzerdefinierter PowerShell-Befehl*** aus und klicken Sie dann auf ***OK***.  
![Special Action Selection](https://webdevolutions.azureedge.net/docs/de/kb/KB2106.png) 
1. Schreiben Sie im Feld mit den Informationen, die Sie in Schritt 3 kopiert haben, Ihr nutzerdefiniertes PowerShell-Skript. Sie können auch eines dieser [Muster](/rdm/windows/powershell-scripting/custom-powershell-commands/batch-actions-samples/) verwenden. 
1. Klicken Sie auf ***OK***.  

Ihre Einträge/Ordner sind nun geändert worden.
