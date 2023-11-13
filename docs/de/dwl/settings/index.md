---
eleventyComputed:
  title: Einstellungen
  order: 20
---
Die Einstellungen von {{ de.DWL }} sind über die Schaltfläche ***Einstellungen*** in der Oberfläche der Browser-Erweiterung verfügbar, unabhängig davon, welche Devolutions-Anwendung Sie zusammen mit {{ de.DWL }} verwenden.  

![{{ de.DWL }} Einstellungen](https://webdevolutions.azureedge.net/docs/de/dwl/Dwl2000.png)  

Die ***Einstellungen*** sind in zwei Kategorien unterteilt: <a href="#configuration">***Konfiguration***</a> und <a href="#source">***Datenquellen***</a>.

![{{ de.DWL }} Einstellungen](https://webdevolutions.azureedge.net/docs/de/dwl/Dwl4027.png)

### Konfiguration <a name="configuration"></a>

Die ***Allgemeinen*** Einstellungen betreffen die Benutzeroberfläche und die Interaktion.  

* Registerkarte ***Allgemein***  
	* {{ de.DWL }} Symbol in Felder für Anmeldeinformationen anzeigen.  
	* Aufforderung zum Speichern der Anmeldedaten bei einer neuen Anmeldung anzeigen.  
	* Optionen des Kontexmenü anzeigen.  
	* Felder einfärben, wenn {{ de.DWL }} diese befüllt.  
	* ***Farbschema*** der Anwendung festlegen.  

* Registerkarte ***Erweitert***  
	* Telemetrie deaktivieren.  
	* Beta-Versionen von {{ de.DWL }} aktivieren.  

Die ***Ausnahmen*** ermöglichen eine Liste von Websites zu hinterlegen, bei denen der Benutzer keine Benachrichtigung erhält, die eingegebenen Anmeldeinformationen zu speichern.  

* Die möglichen Optionen lauten: ***Diese Seite nicht hinzufügen***, ***Nie Automatisch ausfüllen***, ***Nie etwas durchführen*** und ***Keine Symbole in Felder anzeigen***.  
* Diese Einstellungen lassen sich für ***Basisdomäne***, ***Host***, ***Beginnt mit***, ***RegEx***, und ***Exakt***e Werte konfigurieren.  

Die ***Import- / Export- Einstellungen*** ermöglichen das Speichern und Übertragen der aktuellen Einstellungen.  

* Einstellungen von anderen Browsern oder Benutzern importieren. 
* Auswählen, ob die ***Einstellungen*** für {{ de.DWL }}, ***Passwort Generator***  und ***Ausnahmen*** exportiert werden sollen.  

### Datenquellen <a name="source"></a>

Die Einstellungen für ***Datenquellen*** dienen der Anpassung der Interaktionen von {{ de.DWL }} mit <a href="#rdm">{{ de.RDM }}</a>, <a href="#server">{{ de.DVLS }}</a>, <a href="#hub">{{ de.DHUBB }} und {{ de.DHUBP }}</a>. 

### {{ de.RDM }} <a name="rdm"></a>

| REGISTERKARTE ALLGEMEIN         | BESCHREIBUNG                                                |
| ------------------------------ | ----------------------------------------------------------- |
| {{ de.RDM }} aktivieren        | Einträge aus {{ de.RDM }} abrufen, wenn die Anwendung geöffnet ist. |
| Standardport verwenden (19443)  | Port für die Kommunikation zwischen {{ de.RDM }} und {{ de.DWL }}. |
| Einträge standardmäßig im {{ de.UVLT }}  hinzufügen | Neue Einträge werden standardmäßig im {{ de.UVLT }} gespeichert. |
| Zielordner                      | Ordner auswählen, in dem die Anmeldeinformationen gespeichert werden. |

| REGISTERKARTE AKTIONEN                                         | BESCHREIBUNG                                                                                                                                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Anmeldeinformationen beim Laden automatisch abrufen           | {{ de.DWL }} sucht automatisch nach Anmeldeinformationen in der Datenquelle, wenn eine Verbindung zu einer Website hergestellt wird. <br> <br> Falls deaktiviert, klicken Sie auf das Symbol der Erweiterung {{ de.DWL }}, um die Anmeldeinformationen manuell abzurufen. |
| Anmeldeinformationen beim Laden automatisch ausfüllen         | Füllt beim Laden der Website automatisch die Anmeldeinformationen aus.                                                                                                |
| Formular nach dem Ausfüllen automatisch absenden              | Übermittelt automatisch die Anmeldeinformationen, wenn die Felder ausgefüllt sind.                                                                                     |

| REGISTERKARTE ERWEITERT                | BESCHREIBUNG                                                                                              |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Anwendungsschlüssel                  | Sichert die Kommunikation zwischen {{ de.RDM }} und {{ de.DWL }} zusätzlich mittels einem Anwendungsschlüssel. <br> <br> Gehen Sie in {{ de.RDM }} zu ***Datei – Optionen – Browsererweiterungen***, um den Anwendungsschlüssel festzulegen. |
| Nativen Nachrichtenaustausch aktivieren | Tauschen Sie Nachrichten mit einer nativen Anwendung aus, die auf dem Computer des Benutzers installiert ist. |
| Alte API verwenden                   | Für die Kompatibilität mit älteren Versionen von {{ de.RDM }}.                                           |

### {{ de.DVLS }} <a name="server"></a>

| REGISTERKARTE ALLGEMEIN | BESCHREIBUNG                                                |
| ----------------------- | ----------------------------------------------------------- |
| {{ de.DVLS }} aktivieren | Einträge von {{ de.DVLS }} abrufen.                         |
| Zielordner              | Ordner auswählen, in dem die Anmeldeinformationen im {{ de.VLT }} gespeichert werden. |
| Server URL              | URL der {{ de.DVLS}} Instanz.                               |

| REGISTERKARTE AKTIONEN                                         | BESCHREIBUNG                                                                                             |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| Anmeldeinformationen beim Laden automatisch abrufen           | {{ de.DWL }} sucht automatisch nach Anmeldeinformationen in der Datenquelle, wenn eine Verbindung zu einer Website hergestellt wird. <br> <br> Falls deaktiviert, klicken Sie auf das Symbol der Erweiterung {{ de.DWL }}, um die Anmeldeinformationen manuell abzurufen. |
| Anmeldeinformationen beim Laden automatisch ausfüllen         | Füllt beim Laden der Website automatisch die Anmeldeinformationen aus.                                  |
| Formular nach dem Ausfüllen automatisch absenden              | Übermittelt automatisch die Anmeldeinformationen, wenn die Felder ausgefüllt sind.                     |

| REGISTERKARTE ERWEITERT | BESCHREIBUNG                                                                                          |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| Standard Vergleich     | Legen Sie einen Standard-Vergleichstyp fest zwischen ***Basisdomäne***, ***Host***, ***Beginnt mit***, ***RegEx***, ***Exakt*** und ***Niemals***. |
| Alle verfügbaren {{ de.VLT }}e synchronisieren | Synchronisiert alle verfügbaren {{ de.VLT }}e von {{ de.DVLS }}.                                      |

### {{ de.DHUBB }} und {{ de.DHUBP }} <a name="hub"></a>

| REGISTERKARTE ALLGEMEIN              | BESCHREIBUNG                                               |
| ---------------------------------- | ---------------------------------------------------------- |
| {{ de.DHUBB }} / Personal aktivieren | Einträge von {{ de.DHUB }} abrufen.                        |
| Server URL (nur mit {{ de.DHUBB }} verfügbar) | URL der {{ de.DHUBB }}-Instanz.                           |
| Benutzername                        | Geben Sie einen Benutzernamen ein, um sich mit dem Hub zu verbinden. |

| REGISTERKARTE AKTIONEN                       | BESCHREIBUNG                                                       |
| ------------------------------------------ | ------------------------------------------------------------------ |
| Anmeldeinformationen beim Laden automatisch ausfüllen | Füllt beim Laden der Website automatisch die Anmeldeinformationen aus. |
| Formular nach dem Ausfüllen automatisch absenden | Übermittelt automatisch die Anmeldeinformationen, wenn die Felder ausgefüllt sind. |

| REGISTERKARTE ERWEITERT                      | BESCHREIBUNG                                                       |
| ------------------------------------------ | ------------------------------------------------------------------ |
| {{ de.DA }} Anmeldung                       | Legen Sie die Anmelde-URL Ihres {{ de.DA }} fest.                  |
| Favicon anzeigen                           | Zeigt das Favicon von {{ de.DWL }} an.                             |
| {{ de.DWL }}                               | Aktiviert {{ de.DWL }} mit {{ de.DHUB }}.                          |
| Standard Vergleich                         | Legen Sie einen Standard-Vergleichstyp fest zwischen ***Basisdomäne***, ***Host***, ***Beginnt mit***, ***RegEx***, ***Exakt*** und ***Niemals***. |
| Alle verfügbaren {{ de.VLT }}e synchronisieren (nur mit {{ de.DHUBB }} verfügbar) | Synchronisiert alle verfügbaren {{ de.VLT }}e von {{ de.DHUBB }}. |
