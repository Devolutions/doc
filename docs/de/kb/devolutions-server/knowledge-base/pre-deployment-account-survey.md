---
title: Kontoauswahl vor der Einrichtung
---
Vor der Einrichtung einer DVLS-Instanz werden einige Konten benötigt, um die verschiedenen Dienste zu betreiben, die an einer sicheren Bereitstellung von DVLS beteiligt sind. Zunächst muss entschieden werden, ob Domain-Konten für den Betrieb der Plattform genutzt werden sollen oder lokale SQL-Konten in Verbindung mit lokalen Dienstkonten. Da dies eine Frage der persönlichen Vorliebe ist, unterstützen wir beide Modelle.  

{% snippet icon.badgeInfo %}
Die in diesem Leitfaden verwendeten Namen dienen dem besseren Verständnis der Rolle, die das Konto spielt. In unserer Dokumentation werden die gleichen Namen verwendet, aber es ist nicht nötig, dass Sie sie verwenden.
{% endsnippet %}

Bitte wählen Sie den entsprechenden Bereich aus:  

- Domain-basierter Betrieb 
- Nicht Domain-basierter Betrieb oder Azure SQL-Umgebung 

## Domain-basierter Betrieb (Option integrierte Sicherheit) 

{% snippet icon.badgeInfo %}
Die ***Administrator-Anmeldeinformationen*** benötigen volles Leserecht für die AD-Struktur, dies führt aber zu KEINER Änderungen in Ihrem Verzeichnis. Leider gibt es aufgrund eines durch die Struktur der Net Directory Services hervorgerufenen Nebeneffekts ein Problem, wenn dieses Konto versucht, Eigenschaften von AD-Gruppen zu lesen, die sich möglicherweise in einem geschützten Bereich Ihres Verzeichnisses befinden.
Bisher besteht die einfachste Lösung darin, volle Administratorrechte zu gewähren. Wir arbeiten aber derzeit daran, eine bessere Notfallstrategie für den Fall zu implementieren, dass der Zugriff verweigert wird. Den Text in Rot ersetzten durch: Möglicherweise sind höhere Berechtigungen erforderlich als die Zugehörigkeit zur von den Nutzern der Domain eingerichteten Active Directory-Gruppe. In den meisten Fällen sollte dies aber ausreichen. 
{% endsnippet %}

| # | Name                  | Herkunft | Beschreibung                               | Eingerichtet in... |
| - | --------------------- | -------- | ------------------------------------------ | ------------------ |
| 1 | VaultDBOwner            | AD     | Konto mit allen Berechtigungen auf der DB. | Interaktive Windows-Sitzungen zum Installieren/Aktualisieren einer DVLS-Instanz. |
| 2 | VaultDBRunner           | AD     | Am wenigsten privilegiertes Konto zur Ausführung der Webanwendung. Wird zur Verbindung mit der DB und zum Lesen aus dem Dateisystem verwendet. | IIS-Anwendungspools, die eine DVLS-Instanz ausführen. |
| 3 | VaultADReader         | AD     | Am wenigsten privilegiertes Konto zur Abfrage der AD. | DVLS-Instanz-Einstellungen - Administrator-Anmeldeinformationen. |
| 4 | VaultDBSchedulerService | AD     | Am wenigsten privilegiertes Konto zum Betrieb des Planungsdienstes. Wird für die Verbindung zur DB und zum Lesen/Schreiben aus dem Dateisystem genutzt. | Windows Service Control Manager. |

## Nicht Domain-basierter Betrieb oder Azure SQL-Umgebung

{% snippet icon.badgeInfo %}
Bei nicht Domain-basiertem Betrieb wir eine einzelne Verbindungszeichenfolge für drei verschiedene Aspekte des Systems verwendet. Dies wird in einer zukünftigen Version verbessert werden, um das Prinzip der geringsten Berechtigungen zu respektieren.
{% endsnippet %}

{% snippet icon.badgeInfo %}
Für von Azur SQL gehostete Datenbanken wird der Domain-basierte Betrieb (Option integrierte Sicherheit) nicht unterstützt.
{% endsnippet %}

| # | Name                  | Herkunft | Beschreibung                               | Eingerichtet in... |
| - | --------------------- | -------- | ------------------------------------------ | ------------------ |
| 1 | VaultDBOwner            | SQL    | Konto mit vollen Rechten auf der DB.                | DVLS-Konsole nur für Sitzungen zur Installation/Aktualisierung. |
| 2 | VaultDBRunner           | SQL    | Am wenigsten privilegiertes Konto zur Ausführung der Webanwendung.   | DVLS-Konsole zum Betrieb der Instanz. |
| 3 | VaultADReader         | AD     | Am wenigsten privilegiertes Konto zur Abfrage der AD durch LDAP. | DVLS-Instanz-Einstellungen - Administrator-Anmeldeinformationen. |
| 4 | VaultDBSchedulerService | SQL    | Am wenigsten privilegiertes Konto zum Betrieb des Planungsdienstes. Wird zum Lesen/Schreiben aus dem Dateisystem genutzt. | Windows Service Control Manager. Der Zugriff auf die Datenbank erfolgt über eine einzelnen Verbindungszeichenfolge, welche Gegenstand der oben genannten Notiz ist. |