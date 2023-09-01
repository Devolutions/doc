---
title: Erforderliche Konten vor der Installation
---
Vor der Einrichtung einer {{ de.DVLS }}-Instanz werden einige Konten benötigt, um die verschiedenen Dienste zu betreiben, die eine sichere Bereitstellung von {{ de.DVLS }} ermöglichen. Zunächst muss entschieden werden, ob Domänen- oder lokale SQL-Konten verwendet werden sollen. Unterstützt werden beide Varianten.  

{% snippet icon.badgeInfo %}
Die in diesem Leitfaden verwendeten Namen dienen nur zum besseren Verständnis. Diese Namen werde auch in anderen Dokumentationen verwendet, aber es ist nicht erforderlich, dass Sie die gleichen Namen verwenden.
{% endsnippet %}

Bitte wählen Sie den entsprechenden Bereich aus:

* Domänenkonten
* Lokale SQL-Konten oder Azure SQL-Umgebung

## Domänenkonten (Integrierte Sicherheit) 

{% snippet icon.badgeInfo %}
Die ***Administrative Anmeldeinformationen*** benötigen Leserecht für die AD-Struktur, dies führt aber zu KEINER Änderungen in Ihrem Verzeichnis. Leider gibt es aufgrund eines durch die Struktur der Net Directory Services hervorgerufenen Nebeneffekts ein Problem, wenn dieses Konto versucht, Eigenschaften von AD-Gruppen zu lesen, die sich möglicherweise in einem geschützten Bereich Ihres Verzeichnisses befinden.
Bisher besteht die Lösung darin, volle Administratorrechte für dieses Konto zu konfigurieren. Wir arbeiten aber derzeit daran, eine bessere Notfallstrategie für den Fall zu implementieren, dass der Zugriff verweigert wird. Den Text in Rot ersetzten durch: Möglicherweise sind höhere Berechtigungen erforderlich als die Zugehörigkeit zur von den Nutzern der Domain eingerichteten Active Directory-Gruppe. In den meisten Fällen sollte dies aber ausreichen. 
{% endsnippet %}

| # | Name                  | Herkunft | Beschreibung                               | Konfiguriert in... |
| - | --------------------- | -------- | ------------------------------------------ | ------------------ |
| 1 | VaultDBOwner            | AD     | Konto mit allen Berechtigungen auf der DB. | Interaktive Windows-Sitzungen zum Installieren/Aktualisieren einer {{ de.DVLS }}-Instanz. |
| 2 | VaultDBRunner           | AD     | Am wenigsten privilegiertes Konto zur Ausführung der Webanwendung. Wird zur Verbindung mit der DB und für den Zugriff auf das Dateisystem verwendet. | IIS-Anwendungspools, die einer {{ de.DVLS }}-Instanz zugeordnet sind. |
| 3 | VaultADReader         | AD     | Am wenigsten privilegiertes Konto zur Abfrage des Active Directory. | {{ de.DVLS }}-Instanz-Einstellungen - Administrative Anmeldeinformationen. |
| 4 | VaultDBSchedulerService | AD     | Am wenigsten privilegiertes Konto zur Ausführung des Scheduler Dienst. Wird für die Verbindung zur DB und zum Lesen / Schreiben aus dem Dateisystem verwendet. | Windows Dienste |

## Lokale SQL-Konten oder Azure SQL-Umgebung

{% snippet icon.badgeInfo %}
Bei lokalen Konten wird eine einzelne Verbindungszeichenfolge für drei verschiedene Bereiche des Systems verwendet. Dies wird in einer zukünftigen Version verbessert, um das Prinzip der geringsten Berechtigungen zu respektieren.
{% endsnippet %}

{% snippet icon.badgeInfo %}
Für Azure SQL-Datenbanken werden Domänenkonten (Integrierte Sicherheit) nicht unterstützt.
{% endsnippet %}

| # | Name                  | Herkunft | Beschreibung                               | Konfiguriert in... |
| - | --------------------- | -------- | ------------------------------------------ | ------------------ |
| 1 | VaultDBOwner            | SQL    | Konto mit allen Berechtigungen auf der DB.                | {{ de.DVLSCONSOLE }} nur für Sitzungen zur Installation/Aktualisierung. |
| 2 | VaultDBRunner           | SQL    | Am wenigsten privilegiertes Konto zur Ausführung der Webanwendung.   | {{ de.DVLSCONSOLE }} - Webanwendung. |
| 3 | VaultADReader         | AD     | Am wenigsten privilegiertes Konto zur Abfrage des Active Directory durch LDAP. | {{ de.DVLS }}-Instanz-Einstellungen - Administrative Anmeldeinformationen. |
| 4 | VaultDBSchedulerService | SQL    | Am wenigsten privilegiertes Konto zur Ausführung des Scheduler Dienst. Wird zum Lesen/Schreiben aus dem Dateisystem verwendet. | {{ de.DVLSCONSOLE }} - Scheduler Dienst. <br><br>Der Zugriff auf die Datenbank erfolgt über eine einzelne Verbindungszeichenfolge (wie oben beschrieben.) |