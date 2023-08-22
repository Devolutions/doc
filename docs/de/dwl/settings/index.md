---
title: Einstellungen
order: 20
---
Die Einstellungen von {{ de.DWL }} sind über die Schaltfläche ***Einstellungen*** in der Browser-Erweiterung in Windows zugänglich, unabhängig davon, welche Devolutions-Anwendung Sie zusammen mit {{ de.DWL }} verwenden.  

![!!{{ de.DWL }} Settings Button.png](https://webdevolutions.azureedge.net/docs/de/dwl/Dwl2000.png)  

Die ***Einstellungen*** sind in zwei Kategorien unterteilt: <a href="#configuration">***Konfiguration***</a> und <a href="#source">***Datenquellen***</a>.

![!!{{ de.DWL }} Settings.png](https://webdevolutions.azureedge.net/docs/de/dwl/Dwl4027.png)

### Konfiguration <a name="configuration"></a>

Die ***Allgemeinen*** Einstellungen betreffen die Nutzeroberfläche und die Interaktion.  

* Registerkarte ***Allgemein***  
	* Symbol für die Erweiterung {{ de.DWL }} in den Feldern für die Anmeldeinformationen anzeigen.  
	* Aufforderung zum Speichern der Anmeldedaten bei einer neuen Anmeldung anzeigen.  
	* Optionen des Kontexmenüs anzeigen.  
	* Felder einfärben, die mit {{ de.DWL }} gefüllt sind.  
	* Farb***schema*** der Anwendung festlegen.  

* Registerkarte ***Erweitert***  
	* Analytische Telemetrie deaktivieren.  
	* Beta-Versionen von {{ de.DWL }} aktivieren.  

Die ***Nie-Liste*** zeigt die Liste der lokal hinzugefügten Websites an, bei denen der Nutzer nie aufgefordert wird, seine Anmeldeinformationen zu speichern.  

* Die Gattungen sind: ***Nie Website hinzufügen***, ***Nie automatisch ausfüllen***, ***Nie irgendetwas tun*** und ***Nie Symbole in Feldern anzeigen***.  
* Übereinstimmende Optionen sind ***Basis-Domain***, ***Host***, ***Beginnt mit***, ***RegEx***, und ***Exakt***.  

Die ***Import-/Export-Einstellungen*** ermöglichen das Speichern und Übertragen Ihrer aktuell eingestellten bevorzugten Einstellungen.  

* Einstellungen von anderen Browsern oder Nutzern importieren. 
* Auswählen, ob die ***Einstellungen*** für {{ de.DWL }}, ***Passwort-Generator***-Vorlagen und ***Nie-Liste*** exportiert werden sollen.  

### Datenquellen <a name="source"></a>

Die Einstellungen für ***Datenquellen*** dienen der Anpassung der Interaktionen von {{ de.DWL }} mit <a href="#rdm">{{ de.RDM }}</a>, <a href="#server">{{ de.DVLS }}</a>, und <a href="#hub">{{ de.DHUBB }} oder {{ de.DHUBP }}</a>. 

### {{ de.RDM }} <a name="rdm"></a>

<table>
	<tr>
		<th>
REGISTERKARTE ALLGEMEIN 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
Die Anwendung {{ de.RDM }} aktivieren 
		</td>
		<td>
Abrufen von Einträgen aus {{ de.RDM }}, wenn die Anwendung geöffnet ist. 
		</td>
	</tr>
	<tr>
		<td>
Standard-Port verwenden (19443) 
		</td>
		<td>
Kommunikation zwischen den Anwendungen über den Standard-Port 19443. 
		</td>
	</tr>
	<tr>
		<td>
Eintrag standardmäßig im Nutzertresor hinzufügen 
		</td>
		<td>
Neue Einträge im Nutzertresor speichern. 
		</td>
	</tr>
	<tr>
		<td>
Zielordner 
		</td>
		<td>
Ordner auswählen, in dem die Anmeldeinformationen im Tresor gespeichert werden. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
REGISTERKARTE AKTIONEN 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
Automatisches Abrufen von Anmeldeinformationen beim Laden der Seite
		</td>
		<td>
{{ de.DWL }} sucht automatisch nach Anmeldeinformationen in der Datenquelle, wenn eine Verbindung zu einer Website hergestellt wird.
<br>

Falls deaktiviert, klicken Sie auf das Symbol der Erweiterung {{ de.DWL }}, um die Anmeldeinformationen manuell abzurufen. 
		</td>
	</tr>
	<tr>
		<td>
Automatisches Ausfüllen der Anmeldeinformationen beim Laden 
		</td>
		<td>
Füllt beim Laden der Website automatisch die Anmeldeinformationen aus. 
		</td>
	</tr>
	<tr>
		<td>
Automatisches Absenden des Formulars nach dem Ausfüllen 
		</td>
		<td>
Übermittelt automatisch die Anmeldeinformationen, wenn die Felder ausgefüllt sind. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
REGISTERKARTE ERWEITERT 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
Anwendungsschlüssel 
		</td>
		<td>
Sichern Sie den Port mit einem Anwendungsschlüssel, indem Sie denselben Code in {{ de.RDM }} und {{ de.DWL }} verwenden.<br>

Gehen Sie im {{ de.RDM }} zu <b><i>Datei – Optionen – Browser-Erweiterungen</b></i>, um den Anwendungsschlüssel festzulegen. 
		</td>
	</tr>
	<tr>
		<td>
Native Nachrichtenübermittlung aktivieren 
		</td>
		<td>
Tauschen Sie Nachrichten mit einer nativen Anwendung aus, die auf dem Computer des Nutzers installiert ist. 
		</td>
	</tr>
	<tr>
		<td>
Veraltete API verwenden 
		</td>
		<td>
Verwenden Sie für die Kompatibilität mit älteren Versionen von {{ de.RDM }} die alte API der Browser Erweiterung. 
		</td>
	</tr>
</table>

### {{ de.DVLS }} <a name="server"></a>

<table>
	<tr>
		<th>
REGISTERKARTE ALLGEMEIN 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
{{ de.DVLS }} aktivieren 
		</td>
		<td>
Einträge von {{ de.DVLS }} abrufen. 
		</td>
	</tr>
	<tr>
		<td>
Zielordner 
		</td>
		<td>
Ordner auswählen, in dem die Anmeldeinformationen im Tresor gespeichert werden. 
		</td>
	</tr>
	<tr>
		<td>
Server-URL 
		</td>
		<td>
Geben Sie die URL der {{ de.DVLS}}-Instanz ein, um eine Verbindung herzustellen. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
REGISTERKARTE AKTIONEN 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
Automatisches Abrufen von Anmeldedaten beim Laden der Seite 
		</td>
		<td>
{{ de.DWL }} sucht automatisch nach den Anmeldedaten in der Datenquelle beim Verbinden mit einer Website.

<br>

Falls deaktiviert, klicken Sie auf das Symbol der Erweiterung {{ de.DWL }}, um die Anmeldeinformationen manuell abzurufen. 
		</td>
	</tr>
	<tr>
		<td>
Automatisches Ausfüllen der Anmeldeinformationen beim Laden 
		</td>
		<td>
Füllt beim Laden der Website automatisch die Anmeldeinformationen aus. 
		</td>
	</tr>
	<tr>
		<td>
Automatisches Absenden des Formulars nach dem Ausfüllen 
		</td>
		<td>
Übermittelt automatisch die Anmeldeinformationen, wenn die Felder ausgefüllt sind. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ADVANCED TAB 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
Standard -Vergleichstyp 
		</td>
		<td>
Legen Sie einen Standard-Vergleichstyp fest zwischen <b><i>Basis-Domain</b></i>, <b><i>Host</b></i>,
<b><i>Beginnt mit</b></i>, <b><i>RegEx</b></i>, <b><i>Exakt</b></i> und <b><i>Nie</b></i>. 
		</td>
	</tr>
	<tr>
		<td>
Alle verfügbaren Tresore synchronisieren 
		</td>
		<td>
Synchronisiert alle verfügbaren Tresore von {{ de.DVLS }}. 
		</td>
	</tr>
</table>

### {{ de.DHUBB }} und {{ de.DHUBP }} <a name="hub"></a>

<table>
	<tr>
		<th>
REGISTERKARTE ALLGEMEIN 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
{{ de.DHUBB }}/Personal aktivieren 
		</td>
		<td>
Einträge vom {{ de.DHUB }} abrufen. 
		</td>
	</tr>
	<tr>
		<td>
Server-URL (nur mit {{ de.DHUBB }} verfügbar) 
		</td>
		<td>
Geben Sie die URL der {{ de.DHUBB }}-Instanz ein, um eine Verbindung herzustellen.
 
		</td>
	</tr>
	<tr>
		<td>
Nutzername 
		</td>
		<td>
Geben Sie einen Nutzernamen ein, um sich mit dem hub zu verbinden. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
REGISTERKARTE AKTIONEN 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
Automatisches Ausfüllen der Anmeldeinformationen beim Laden 
		</td>
		<td>
Füllt beim Laden der Website automatisch die Anmeldeinformationen aus. 
		</td>
	</tr>
	<tr>
		<td>
Automatisches Absenden des Formulars nach dem Ausfüllen 
		</td>
		<td>
Übermittelt automatisch die Anmeldeinformationen, wenn die Felder
ausgefüllt sind. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
REGISTERKARTE ERWEITERT 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
{{ de.DA }} Anmeldung 
		</td>
		<td>
Legen Sie die Anmelde-URL Ihres {{ de.DA }} fest. 
		</td>
	</tr>
	<tr>
		<td>
Favicon anzeigen 
		</td>
		<td>
Zeigt das Favicon von {{ de.DWL }} an. 
		</td>
	</tr>
	<tr>
		<td>
{{ de.DWL }} 
		</td>
		<td>
Aktivieren oder deaktivieren Sie {{ de.DWL}} mit {{ de.DHUB }}. 
		</td>
	</tr>
	<tr>
		<td>
Standard -Vergleichstyp 
		</td>
		<td>
Legen Sie einen Standard-Vergleichstyp fest zwischen <b><i>Basis-Domain</b></i>, <b><i>Host</b></i>,
<b><i>Beginnt mit</b></i>, <b><i>RegEx</b></i>, <b><i>Exakt</b></i> und <b><i>Nie</b></i>. 
		</td>
	</tr>
	<tr>
		<td>
Alle verfügbaren Tresore synchronisieren (nur mit {{ de.DHUBB }} verfügbar) 
		</td>
		<td>
Synchronisiert alle verfügbaren Tresore von {{ de.DHUBB }}. 
		</td>
	</tr>
</table>
