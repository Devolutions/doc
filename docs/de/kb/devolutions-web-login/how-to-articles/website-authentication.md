---
eleventyComputed:
  title: Website-Authentifizierung
---
Bei manchen Websites funktioniert die Funktion des automatischen Ausfüllens nicht von selbst. Zudem ist es wichtig zu wissen, dass einige Websites das automatische Ausfüllen Ihrer Anmeldeinformationen unterbinden.  

Um den Benutzernamen und das Passwort korrekt zu übermitteln, sind einige Schritte erforderlich. Abhängig von der Website kann der Vorgang automatisch erfolgen oder zusätzliche, manuelle Schritte erfordern.

### Methode 1
### Automatische Anmeldung bei einer Website

1. Geben Sie die Anmeldeinformationen auf der Registerkarte ***Allgemein*** für die ***Website*** ein.  
![!!KB4606](https://webdevolutions.azureedge.net/docs/de/kb/KB4606.png)  
{% snippet icon.badgeInfo %}
{{ de.DWL }} ist standardmäßig aktiviert. Die Deaktivierung erfolgt über dieselbe Registerkarte, indem Sie ***Deaktiviert*** im Dropdown-Menü des ***{{ de.DWL }}*** auswählen.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
Der ***Typ*** definiert die URL, ob {{ de.DWL }} den Eintrag als verfügbaren Eintrag zum automatischen Ausfüllen anbieten soll.
{% endsnippet %}  

2. Wählen Sie auf der Registerkarte ***Anmeldung*** als ***Authentifizierung*** die Option ***Formular***.  
1. Überprüfen Sie auf der Registerkarte ***Anmeldung – Einstellungen***, ob die Optionen ***Automatisch Ausfüllen*** und ***Automatisch senden*** aktiviert sind.  
![!!KB4607](https://webdevolutions.azureedge.net/docs/de/kb/KB4607.png)
<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
BESCHREIBUNG
		</th>
	</tr>
	<tr>
		<td>
Nutzername
		</td>
		<td>
Geben Sie den Benutzernamen für die Website ein.
		</td>
	</tr>
	<tr>
		<td>
Domain
		</td>
		<td>
Geben Sie die Domäne  ein für die Website ein.
		</td>
	</tr>
	<tr>
		<td>
Passwort
		</td>
		<td>
Geben Sie das Passwort ein für die Website ein.
		</td>
	</tr>
	<tr>
		<td>
Automatisches Ausfüllen
		</td>
		<td>
Füllt beim Öffnen der Website automatisch die Felder für die Anmeldeinformationen aus.
		</td>
	</tr>
	<tr>
		<td>
Automatisches Ausfüllen verzögern
		</td>
		<td>
Legt eine Verzögerung zwischen dem Öffnen der Website und dem Versuch der Funktion zum automatischen Ausfüllen fest.
		</td>
	</tr>
	<tr>
		<td>
Automatisches Senden
		</td>
		<td>
Sendet die Anmeldeinformationen automatisch und versucht, die Anmeldedaten abzuschicken.
		</td>
	</tr>
</table>

1. Klicken Sie auf der Registerkarte ***Anmeldung*** auf die Schaltfläche ***Erkennen***, um die entsprechenden Felder zu definieren.  
![!!KB4608](https://webdevolutions.azureedge.net/docs/de/kb/KB4608.png)  

Der Befehl ***Erkennen*** sucht die Felder auf der Website, die den Feldern des Eintrags entsprechen. So kann die Anwendung die entsprechenden Felder definieren, die bei der Anmeldung auf der Website ausgefüllt werden müssen.  

Sobald alle erforderlichen Schritte abgeschlossen sind, werden die Anmeldeinformationen beim Start der Sitzungen automatisch eingegeben und bei der Website angemeldet.

### Methode 2
Bei der zweiten Methode müssen die IDs, die den Anmeldefeldern auf der Website entsprechen, manuelle ermittelt werden.  

In diesem Beispiel wird Chrome zur Überprüfung der Anmeldefelder verwendet.  

Sowohl für den Benutzernamen wie auch das Passwort müssen Sie mit der rechten Maustaste in das entsprechende Feld und auf ***Prüfen*** klicken.  
![!!KB4107](https://webdevolutions.azureedge.net/docs/de/kb/KB4107.png)  

Die entsprechend zu verwendenden IDs werden auf der Registerkarte ***HTML Steuerelement ID*** der ***Website*** Sitzung im {{ de.RDM }} angezeigt.  

Nachfolgend sehen Sie ein Beispiel für die Überprüfung des Feldes Benutzername. In diesem Fall ist die ID für Benutzername „username“.

![!!KB4108](https://webdevolutions.azureedge.net/docs/de/kb/KB4108.png)
