---
eleventyComputed:
  title: System Berechtigungen
---
Die ***Systemberechtigungen*** ermöglichen es, Standardbenutzern einige administrative Rechte zu gewähren, ohne sie zu Administratoren zu machen. Die ***Standard***einstellung erbt die für den Nutzer oder die Nutzergruppen festgelegten Berechtigungen. Weitere Informationen über Berechtigungen finden Sie unter Allgemeine Sicherheit.  

{% snippet icon.badgeInfo %} 
Diese Funktion ist nur verfügbar bei Gebrauch einer [Erweiterte Datenquelle](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
### Einträge 

![System Berechtigungen - Einträge](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3432.png) 

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
Importieren 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen, Einträge in die Datenquelle zu importieren.
		</td>
	</tr>
	<tr>
		<td>
Exportieren 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen, Einträge aus der Datenquelle zu exportieren. 
		</td>
	</tr>
	<tr>
		<td>
Dem Stammordner hinzufügen 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen, Einträge in einem Stammordner zu erstellen. 
		</td>
	</tr>
	<tr>
		<td>
{{ de.VLT }} Einstellungen 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen den Zugriff auf die Eigenschaften des {{ de.VLT }}s. 
		</td>
	</tr>
</table>

### Sonstiges 

![System Berechtigungen - Sonstiges](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3434.png) 

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
Aktivitätsprotokolle 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen, die Aktivitätsprotokolle einzusehen. 
		</td>
	</tr>
	<tr>
		<td>
Berichte 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen, Berichte zu erstellen und einzusehen. 
		</td>
	</tr>
	<tr>
		<td>
Gelöschte Einträge einsehen 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen, gelöschte Einträge einzusehen und wiederherzustellen. 
		</td>
	</tr>
	<tr>
		<td>
Administrationsprotokolle 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen, die Administrationsprotokolle einzusehen. 
		</td>
	</tr>
	<tr>
		<td>
Einchecken (erzwungen) 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen das Einchecken von Einträgen mit dem Status "ausgecheckt".. 
		</td>
	</tr>
</table>

### Werkzeuge 

![System Berechtigungen - Werkzeuge](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3621.png) 

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
Tools zur Konsolenverwaltung 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen die Verwendung von Tools zur Konsolenverwaltung. 
		</td>
	</tr>
	<tr>
		<td>
Integrierte Tools  (Wake-on-LAN, NetStat, Ping...) 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen die Verwendung von sitzungsrelevanten Tools. 
		</td>
	</tr>
	<tr>
		<td>
Eintrag Makros/Skripte/Tools 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen die Verwendung von Makros/Skripten/Tools-Einträgen. 
		</td>
	</tr>
	<tr>
		<td>
Verwaltungs-Tools 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen die Verwendung von Verwaltungs-Tools. 
		</td>
	</tr>
	<tr>
		<td>
Web-Management-Tools 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen die Verwendung von Web-Management-Tools. 
		</td>
	</tr>
</table>

### Verwaltung 

{% snippet icon.badgeHelp %} 
Der ***Standard***wert in ***Werkzeuge*** ist gleichbedeutend mit ***Nie***. 
{% endsnippet %}
 
![System Berechtigungen - Verwaltung](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3433.png) 

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
Nutzer 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen den Zugriff auf die Verwaltung der Nutzer. 
		</td>
	</tr>
	<tr>
		<td>
Sicherheitsgruppe 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen den Zugriff auf die Verwaltung der Sicherheitsgruppen. 
		</td>
	</tr>
	<tr>
		<td>
Gruppen 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen den Zugriff auf die Verwaltung der Nutzergruppen. 
		</td>
	</tr>
	<tr>
		<td>
{{ de.VLT }} 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen die Verwaltung von {{ de.VLT }}en. 
		</td>
	</tr>
	<tr>
		<td>
Einstellungen der Datenquelle (Systemeinstellungen) 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen den Zugriff auf Einstellungen der Datenquelle. 
		</td>
	</tr>
	<tr>
		<td>
Vorlagen 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen, Vorlagen zu erstellen und zu verwalten. 
		</td>
	</tr>
	<tr>
		<td>
Passwortvorlagen 
		</td>
		<td>
Erlaubt Nutzern/Nutzergruppen, Passwort-Vorlagen zu erstellen und zu verwalten. 
		</td>
	</tr>
</table>
