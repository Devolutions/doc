---
title: CSV-Importstrategien und -Dateiformate
---
Beim Importieren von CSV-Dateien in {{ de.RDM }} müssen einige Entscheidungen bezüglich der anzuwendenden Strategie und des Formats des Inhalts getroffen werden. 

## Vorlagen 

Die wichtigste Entscheidung ist, ob und wie eine Vorlage als Teil des Prozesses verwendet werden soll.  

Bei beiden Methoden zum Importieren von CSV können Sie eine Vorlage für neu erstellte Einträge wählen. Wenn Sie eine Vorlage als Teil des Prozesses wählen, wird sie für alle Einträge verwendet, die aus diesem Stapel erstellt werden. Manchmal kann es eine gute Strategie sein, die Einträge in verschiedene CSV-Dateien aufzuteilen, indem Sie sie nach Eintragstypen gruppieren, die sie erstellen möchten.  

Wenn Sie eine genauere Kontrolle benötigen, können Sie die zu verwendende Vorlage in der ***Vorlagen***-Spalte der CSV-Datei festlegen. Da Sie jedoch die Art des Eintrags in der CSV-Datei selbst festlegen können, ist dies vielleicht nicht erforderlich.  

{% snippet icon.badgeNotice %} 
Unter ***Datei – Importieren*** empfehlen wir Ihnen, zunächst die Option ***Generischer CSV-Import-Assistent*** zu verwenden. Bei Bedarf können Sie die ***Anweisung für das Kopfzeilenformat*** ändern.  
![Import Csv Wizard](https://webdevolutions.azureedge.net/docs/de/rdm/windows/RdmWin4044.png) 
{% endsnippet %}
 
## Inhalt der Datei 

{% snippet icon.badgeCaution %} 
Einige Validierungen von Eintragseinstellungen befinden sich nicht im Business-Layer, sondern in den Eigenschaftsdialogen. Daher kann der Gebrauch des Importprozesses zu ungültigen Einträgen führen, die Fehler auslösen können. Bitte validieren Sie die betreffenden Einträge sorgfältig. 
{% endsnippet %}
 
In der CSV-Datei sind die Felder ***Host*** und ***Name*** obligatorisch. Wenn keine Vorlage angegeben ist, wird der RDP-Typ als Ersatztyp verwendet. Die Felder müssen durch Kommas getrennt sein..

Wir können keine Liste aller unterstützten Felder für alle Eintragstypen bereitstellen, da {{ de.RDM }} eine offene Architektur verwendet und daher nicht alle Felder für die Eintragstypen kennt, die von unserem Zusatzsystem bereitgestellt werden. Eine gute Methode, die Feldstruktur herauszufinden, besteht darin, einen Eintrag des gewünschten Typs zu erstellen, mit der rechten Maustaste darauf zu klicken, ***Zwischenablage – Kopieren*** auszuwählen und dann den Inhalt in Ihren bevorzugten Editor einzufügen. Dann können Sie die Struktur und die Feldnamen sehen.  

{% snippet icon.badgeInfo %} 
Standardwerte für Felder werden nicht serialisiert, d. h. sie werden einfach aus der serialen Struktur weggelassen. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Die Implementierung der Unterstützung aller Felder hat seinen Preis. Der Importprozess ist zeitaufwändig, da der Zugriff auf alle Felder dynamisch erfolgt. Ein massiver Erstimport von Einträgen sollte in Stapel von überschaubarer Größe aufgeteilt werden. Bitte führen Sie Versuche durch und stimmen Sie die Anzahl der Einträge ab, um eine akzeptable Leistung zu erreichen. 
{% endsnippet %}
 
Alle unsere Einträge haben eine Reihe von Feldern gemeinsam; der Rest hängt von der jeweiligen Technologie ab, mit der die Schnittstelle genutzt wird (RDP, SSH usw.). Einige Felder sind in Strukturen gruppiert, wie z. B. die Registerkarte Informationen. Auf diese Felder kann nur zugegriffen werden, wenn der Name der Struktur als Präfix angegeben wird, z. B. "MetaInformation\OS" oder "MetaInformation\PurchaseDate".  

{% snippet icon.badgeInfo %} 
Beachten Sie bitte, dass die CSV-Datei unsere Variablen enthalten. Sie werden beim Speichern gelöscht. Sie können zum Beispiel die Variable $HOST$ in Feldern wie ***Beschreibung***, ***URL***, ***Putty\StandardSitzungsName*** usw. verwenden. Sie wird dann durch den entsprechenden Wert ersetzt. 
{% endsnippet %}
 
Im Folgenden finden Sie eine nicht vollständige Liste einiger relevanter Felder.  

<table>
	<tr>
		<th>
FELD 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
Host 
		</td>
		<td>
Hostname des Geräts. Dieses Feld ist obligatorisch.. 
		</td>
	</tr>
	<tr>
		<td>
Name 
		</td>
		<td>
Name des Eintrags. Dieses Feld ist obligatorisch. 
		</td>
	</tr>
	<tr>
		<td>
Verbindungsart 
		</td>
		<td>

Zeichen, das die Verbindungsart angibt. Es empfiehlt sich, die Methode ***Zwischenablage - Kopieren*** zu verwenden, um die zulässigen Werte zu erhalten. Wenn keine Verbindungsart angegeben ist, wird standardmäßig RDP verwendet. 
		</td>
	</tr>
	<tr>
		<td>
Gruppe 
		</td>
		<td>
Zielordner. Wenn der Importprozess selbst einen Zielordner definiert, wird der hier aufgeführte Ordner unter diesem Ordner erstellt. 
		</td>
	</tr>
	<tr>
		<td>
Beschreibung 
		</td>
		<td>
Beschreibung des Eintrags. 
		</td>
	</tr>
	<tr>
		<td>
Öffnen (Eingebettet)ded) 
		</td>
		<td>
Boolescher Wert (richtig oder falsch), der angibt, dass die eingebettete Sitzung geöffnet werden soll. Der Standardwert ist falsch, was bedeutet, dass je nach Technologie (z. B. MSTSC.EXE) der Native Client verwendet wird. 
		</td>
	</tr>
	<tr>
		<td>
Nutzername 
		</td>
		<td>
Nutzername, der zum Öffnen einer Sitzung mit dem Gerät verwendet wird. 
		</td>
	</tr>
	<tr>
		<td>
Domain 
		</td>
		<td>
Domain, die zum Öffnen einer Sitzung mit dem Gerät verwendet wird. 
		</td>
	</tr>
	<tr>
		<td>
Passwort 
		</td>
		<td>
Passwort, das zum Öffnen einer Sitzung mit dem Gerät verwendet wird. Beachten Sie bitte, dass dieses Feld verschlüsselt ist und beim Import in einem anderen Feld gespeichert wird. 
		</td>
	</tr>
	<tr>
		<td>
MetaInformation\SerienNummer 
		</td>
		<td>
Seriennummer des Geräts. 
		</td>
	</tr>
	<tr>
		<td>
MetaInformation\ServiceTag 
		</td>
		<td>
Service-Tag des Geräts. 
		</td>
	</tr>
	<tr>
		<td>
MetaInformation\KaufDatum 
		</td>
		<td>
Kaufdatum in einem ISO8601-Format (z. B. jjjj-mm-tt). 
		</td>
	</tr>
</table>
