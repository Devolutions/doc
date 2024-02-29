---
eleventyComputed:
  title: CSV-Importstrategien und -Dateiformate
---
Beim Importieren von CSV-Dateien in {{ de.RDM }} müssen einige Entscheidungen bezüglich der anzuwendenden Strategie und des Formats des Inhalts getroffen werden.

## Vorlagen

Die wichtigste Entscheidung ist, ob und wie eine Vorlage als Teil des Prozesses verwendet werden soll.

Bei beiden Methoden zum Importieren von CSV kann eine Vorlage für neu erstellte Einträge verwendet werden. Wenn Sie eine Vorlage wählen, wird diese für alle Einträge verwendet, die aus diesem Stapel erstellt werden. Manchmal kann es eine gute Strategie sein, die Einträge in verschiedene CSV-Dateien aufzuteilen, indem Sie sie nach Eintragstypen gruppieren, die sie erstellen möchten.

Wenn Sie eine spezifischere Konfiguration wünschen, können Sie die zu verwendende Vorlage in der ***Template***-Spalte der CSV-Datei festlegen. Da Sie jedoch die Art des Eintrags für jeden Eintrag individuell in der CSV-Datei festlegen (**ConnectionType**) können, ist dies vielleicht nicht erforderlich.

{% snippet icon.badgeNotice %}
Unter ***Datei – Importieren*** empfehlen wir Ihnen, zunächst die Option ***Allgemeiner CSV-Import Assistent...*** zu verwenden. Bei Bedarf können Sie das ***Format*** ändern.
![Allgemeiner CSV-Import Assistent](https://cdnweb.devolutions.net/docs/de/rdm/windows/RdmWin4044.png)
{% endsnippet %}

## Dateiinhalt

{% snippet icon.badgeCaution %}
Einige Überprüfungen von Eintragseinstellungen werden nicht während des Imports durchgeführt, sondern bei Aufruf der Eigenschaftsdialogen der Sitzung(en) nach dem Import. Daher kann der Gebrauch des Importprozesses zu ungültigen Einträgen führen, die Fehler auslösen können. Bitte validieren Sie die betreffenden Einträge sorgfältig.
{% endsnippet %}

In der CSV-Datei sind die Felder ***Host*** und ***Name*** obligatorisch. Wenn keine Vorlage angegeben ist, wird der RDP-Typ als Ersatztyp verwendet. Die Felder müssen durch Kommas getrennt sein.

Wir können keine Liste aller unterstützten Felder für alle Eintragstypen bereitstellen, da {{ de.RDM }} eine offene Architektur verwendet und daher nicht alle Felder für die Eintragstypen kennt, die zusätzlich von Add-Ons bereitgestellt werden. Eine gute Methode, die Feldstruktur herauszufinden, besteht darin, einen Eintrag des gewünschten Typs zu erstellen, mit der rechten Maustaste darauf zu klicken, ***Zwischenablage – Kopieren*** auszuwählen und den Inhalt in einem Texteditor einzufügen. Hier können Sie anschließend die Struktur und die Feldnamen finden.

{% snippet icon.badgeInfo %}
Standardwerte für Felder werden nicht serialisiert, d. h. diese werden aus der serialisierten Struktur weggelassen.
{% endsnippet %}

{% snippet icon.badgeInfo %}
Die Unterstützung aller Felder hat seinen Preis. Der Importprozess ist zeitaufwändig, da der Zugriff auf alle Felder dynamisch erfolgt. Ein massiver Erstimport von Einträgen sollte in Stapel von überschaubarer Größe aufgeteilt werden. Bitte führen Sie Versuche durch und stimmen Sie die Anzahl der Einträge ab, um eine akzeptable Leistung zu erreichen.
{% endsnippet %}

Alle unsere Einträge haben eine Reihe von Feldern gemeinsam; der Rest hängt von der jeweiligen Technologie ab, mit der die Schnittstelle genutzt wird (RDP, SSH usw.). Einige Felder sind in Strukturen gruppiert, wie z. B. die Registerkarte Informationen. Auf diese Felder kann nur zugegriffen werden, wenn der Name der Struktur als Präfix angegeben wird, z. B. "MetaInformation\OS" oder "MetaInformation\PurchaseDate".

{% snippet icon.badgeInfo %}
Beachten Sie, dass die CSV-Datei unsere Variablen enthalten kann: Diese werden beim Speichern aufgelöst. Sie können zum Beispiel die Variable $HOST$ in Feldern wie ***Beschreibung***, ***URL***, ***Putty\CustomSessionName*** usw. verwenden. Diese wird dann durch den entsprechenden Wert ersetzt.
{% endsnippet %}

Im Folgenden finden Sie eine nicht vollständige Liste einiger relevanter Felder.

| FELD                              | BESCHREIBUNG                                               |
| --------------------------------- | ---------------------------------------------------------- |
| Host                              | Hostname des Geräts. Dieses Feld ist **obligatorisch**.    |
| Name                              | Name des Eintrags. Dieses Feld ist **obligatorisch**.      |
| ConnectionType                    | Verbindungsart. Es empfiehlt sich, die Methode ***Zwischenablage – Kopieren*** zu verwenden, um die zulässigen Werte zu erhalten. Wenn keine Verbindungsart angegeben ist, wird standardmäßig RDP verwendet. |
| Group                             | Zielordner. Wenn der Importprozess selbst einen Zielordner definiert, wird der hier aufgeführte Ordner als Unterordner erstellt. |
| Description                       | Beschreibung des Eintrags.                                 |
| Open (Embedded)                   | Boolescher Wert (true oder false), der angibt, dass die Sitzung eingebettet geöffnet werden soll. Der Standardwert ist false, was bedeutet, dass je nach Technologie (z. B. MSTSC.EXE) der Native Client verwendet wird. |
| Username                          | Benutzername, der zum Öffnen einer Sitzung verwendet wird. |
| Domain                            | Domäne, die zum Öffnen einer Sitzung verwendet wird.      |
| Passwort                          | Passwort, das zum Öffnen einer Sitzung verwendet wird. Beachten Sie bitte, dass dieses Feld verschlüsselt ist und beim Import in einem anderen Feld gespeichert wird. |
| MetaInformation\SerialNumber      | Seriennummer des Geräts.                                    |
| MetaInformation\ServiceTag         | Service-Tag des Geräts.                                    |
| MetaInformation\PurchaseDate       | Kaufdatum in einem ISO8601-Format (z. B. JJJJ-MM-TT).      |
