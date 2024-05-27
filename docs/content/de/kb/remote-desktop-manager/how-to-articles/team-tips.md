---
eleventyComputed:
  title: Tipps für Teams
---
Hier sind fünf Tipps für Teams zum {{ de.RDM }}.

## Sicherheit, Benutzer und Gruppen

Es ist großartig, Sitzungen und Informationen auszutauschen - aber erst der kontrollierte Zugriff macht es perfekt.

Mittels dem Berechtigungssystem von {{ de.RDM }} können Sie den Zugriff für Ihre Sitzungen und Aktionen steuern.

Beginnen Sie mit der Erstellung von Gruppen und benennen Sie diese so, wie diese angezeigt- und verwendet werden sollen. Weisen Sie diesen dann Benutzer zu. Jetzt müssen Sie nur noch die Gruppen ganz nach Ihren Wünschen den Einträgen und Ordnern zuordnen bzw. berechtigen. Fertig.

## Optimierte Bereitstellung mit dem {{ de.CIS }}

Okay: Sie sind bereit, {{ de.RDM }} zu implementieren und in aller Augen zum Helden des Unternehmens zu werden. Sie haben Ihre Datenquellen manuell konfiguriert, Ihre Lizenz festgelegt und einige Optionen definiert. Sie spüren die Aufregung, die durch Ihre Adern fließt. Sie sind auf einer Mission!

Aber warten Sie - bevor Sie in Betrieb gehen, lassen Sie uns doch [{{ de.CI }}](/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/) für Sie erstellen! Danach muss Ihr Team nur noch die davon erstellte MSI-Datei installieren, um auf die fertig vorkonfigurierte Installation von {{ de.RDM }} zuzugreifen. Alle werden Sie lieben, man wird Sie feiern und vielleicht wird sogar ein Land oder eine Auszeichnung nach Ihnen benannt.

## Versionsverwaltung

Das Szenario ist bekannt: Ihr Team arbeitet seit Monaten oder sogar Jahren mit {{ de.RDM }} und alles läuft prima. Dann kommt eine neue Version mit coolen neuen Funktionen auf den Markt und sie möchten, dass alle in ihrem Unternehmen eine Aktualisierung durchführen. Das folgende Fenster zeigt die verschiedenen Optionen, die Ihnen zur Steuerung der Versionen zur Verfügung stehen.
![!!KB4598](https://cdnweb.devolutions.net/docs/de/kb/KB4598.png)

Wir haben diese Optionen extrem einfach gehalten. Öffnen Sie einfach ***Administration - System Einstellungen - Versionsverwaltung***.

{% snippet, "badgeHelp" %}
Weitere Informationen zur Lizenz- sowie Versionsverwaltung finden Sie unter [Lizenzen](/rdm/windows/commands/administration/management/licenses/) und [Versionsverwaltung](/de/rdm/windows/commands/administration/settings/system-settings/application/version-management/) respectively.
{% endsnippet %}

## System Einstellungen

Im Abschnitt Allgemein unter ***Administration – System Einstellungen*** können Sie diverse Einstellungen zentral definieren.

Eine großartige Funktion für Teams ist die Systemnachricht, mit der ein Administrator die Benutzer über bevorstehende Systemaktualisierungen, Änderungen der Richtlinien oder andere Dinge informieren kann. Jeder Benutzer erhält die Nachricht, sobald eine Verbindung zur Datenquelle hergestellt wird oder die NAchricht geändert wird. Verwenden Sie diese Funktion, um die Klauseln zur Vertraulichkeit des Unternehmens anzuzeigen oder mit einer Nachricht wie der folgenden ein wenig Chaos zu verbreiten. Ein kleines bisschen Chaos ist gut für die Seele.

![!!KB4599](https://cdnweb.devolutions.net/docs/de/kb/KB4599.png)

## {{ de.DVLS }}

Oder haben Sie vielleicht externe Benutzer, die auf die gemeinsame Datenquelle zugreifen müssen, aber keine VPN-Verbindung verwenden möchten? Sie wollen dennoch Sicherheit und Caching? {{ de.DVLS }} bietet all das und noch viel mehr!

Sie hosten {{ de.DVLS }} selbst und können entscheiden, ob Sie die Instanz nur in Ihrem Intranet (lokal) veröffentlichen, oder ob Sie sie auch online (private Cloud) anbieten. Damit können Sie einen exzellenten Datenspeicher für Ihr ganzes Unternehmen einrichten. Erfahren Sie mehr über {{ de.DVLS }} unter  [https://devolutions.net/de/server/](https://devolutions.net/de/server/).
