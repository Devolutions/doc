---
title: Website-Authentifizierung
---
Bei manchen Websites funktioniert die Funktion des automatischen Ausfüllens nicht von selbst. Es ist wichtig, zu wissen, dass einige Websites das automatische Ausfüllen Ihrer Anmeldeinformationen unterbinden.  

Um den Nutzernamen und das Passwort korrekt zu übermitteln, sind einige Schritte erforderlich. Abhängig von der Website kann der Vorgang automatisch erfolgen oder zusätzliche Schritte erfordern.  

### Methode 1
### Automatische Anmeldung bei einer Website

1. Geben Sie die Anmeldeinformationen auf der Registerkarte ***Allgemein*** der Anmeldeseite der ***Website*** ein.  
![!!KB4606.png](https://webdevolutions.azureedge.net/docs/de/kb/KB4606.png)  
{% snippet icon.badgeInfo %}
Login-Erweiterung ist standardmäßig aktiviert. Die Deaktivierung erfolgt über dieselbe Registerkarte, indem Sie ***Deaktiviert*** im Dropdown-Menü des ***{{ de.DWL }}*** auswählen.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
Der ***Typenvergleich*** bestimmt, ob {{ de.DWL }} den Eintrag als verfügbaren Eintrag zum automatischen Ausfüllen anbieten soll.
{% endsnippet %}  

2. Stellen Sie auf der Registerkarte ***Anmeldung*** die ***Authentifizierung*** auf ***Formular*** ein.  
1. Überprüfen Sie auf der Registerkarte ***Anmeldung – Einstellungen***, ob die Optionen ***Automatisch Ausfüllen*** und ***Automatisch Senden*** aktiviert sind.  
![!!KB4607.png](https://webdevolutions.azureedge.net/docs/de/kb/KB4607.png)
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
Geben Sie den Nutzernamen ein, um sich mit der Website zu verbinden.
		</td>
	</tr>
	<tr>
		<td>
Domain
		</td>
		<td>
Geben Sie die Domain ein, um sich mit der Website zu verbinden.
		</td>
	</tr>
	<tr>
		<td>
Passwort
		</td>
		<td>
Geben Sie das Passwort ein, um sich mit der Website zu verbinden.
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
Sendet die Anmeldeinformationen automatisch und versucht, eine Verbindung zur Website herzustellen.

		</td>
	</tr>
</table>

1. Klicken Sie auf der Registerkarte ***Anmeldung*** auf die Schaltfläche ***Entdecken***, um die entsprechenden Felder zu definieren.  
![!!KB4608.png](https://webdevolutions.azureedge.net/docs/de/kb/KB4608.png)  

Der Befehl ***Entdecken*** sucht die Felder auf der Website, die den Feldern des Eintrags entsprechen. So kann die Anwendung die entsprechenden Felder finden, die bei der Verbindung mit der Website ausgefüllt werden müssen.  

Sobald alle erforderlichen Schritte abgeschlossen sind, werden die Anmeldeinformationen beim Start der Sitzungen automatisch eingegeben und bei der Website angemeldet.  

### Methode 2
Bei der zweiten Methode müssen die IDs, die den Anmeldefeldern auf der Anmelde-Website entsprechen, manuelle ermittelt werden.  

In diesem Beispiel wird Chrome zur Überprüfung der Anmeldefelder verwendet.  

Sowohl für den Nutzernamen wie auch das Passwort müssen Sie mit der rechten Maustaste in das entsprechende Feld und auf ***Prüfen*** klicken.  
![!!KB4107.png](https://webdevolutions.azureedge.net/docs/de/kb/KB4107.png)  

Die entsprechend zu verwendenden IDs werden auf der Registerkarte ***HTML-Steuerungs-ID*** der ***Website***-Sitzung im {{ de.RDM }} angezeigt.  

Nachfolgend sehen Sie ein Beispiel für die Überprüfung des Feldes Nutzername. Sie können sehen, dass die ID des Nutzernamens „username“ ist.  

![!!KB4108.png](https://webdevolutions.azureedge.net/docs/de/kb/KB4108.png)
