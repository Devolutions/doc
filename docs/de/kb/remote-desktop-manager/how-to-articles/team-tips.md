---
eleventyComputed:
  title: Tipps für Teams
---
Hier sind fünf Tipps für Teams zum {{ de.RDM }}. 

## Sicherheit, Nutzer und Nutzergruppen

Es ist großartig, auf Sitzungen Informationen auszutauschen - aber erst die Kontrolle des Zugriffs macht es perfekt.

Durch das Nutzergruppen-System von {{ de.RDM }} können Sie den Zugriff für spezifische Sitzungen und Aktionen steuern.

Beginnen Sie mit der Erstellung von Nutzergruppen und benennen Sie diese so, wie Sie sie sehen und verwenden möchten. Weisen Sie ihnen dann Nutzer zu. Jetzt müssen Sie nur noch die Nutzergruppen ganz nach Ihren Wünschen den Einträgen und Ordnern zuordnen.

## Rationalisierte Bereitstellung mit dem {{ de.CI }}

Okay: Sie sind bereit, {{ de.RDM }} zu implementieren und in aller Augen zum Helden des Unternehmens zu werden. Sie haben Ihre Datenquellen manuell konfiguriert, Ihre Standortlizenz festgelegt und die Systemoptionen definiert. Sie spüren die Aufregung, die durch Ihre Adern fließt. Sie sind auf einer Mission!  

Aber warten Sie - bevor Sie in Betrieb gehen, lassen Sie uns doch einen [{{ de.CI }}](/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/) für Sie entwickeln! Danach muss Ihr Team nur noch die davon erstellte MSI-Datei installieren, um auf die gebrauchsfertig vorkonfigurierte Installation von {{ de.RDM }} zuzugreifen. Alle werden Sie lieben, man wird Sie feiern und vielleicht wird sogar ein Land oder eine Auszeichnung nach Ihnen benannt.

## Versionsverwaltung

Das Szenario ist bekannt: Ihr Team arbeitet seit Monaten oder sogar Jahren mit {{ de.RDM }} und alles läuft prima. Dann kommt eine neue Version mit coolen neuen Funktionen auf den Markt und sie möchten, dass alle in ihrem Unternehmen ein Upgrade durchführen. Das folgende Fenster zeigt die verschiedenen Optionen, die Ihnen zur Steuerung der Client-Versionen zur Verfügung stehen.  
![!!KB4598](https://webdevolutions.azureedge.net/docs/de/kb/KB4598.png)  

Wir haben dies extrem einfach gemacht. Öffnen Sie einfach ***Administration - Datenquelleneinstellungen (Systemeinstellungen) - Versionsverwaltung***. Nachfolgend sind einige Einstellungen beschrieben:  

* Automatische Update-Benachrichtigung deaktivieren - Deaktiviert die Meldung „Neue Version verfügbar“. (Gern geschehen!)
* Minimale Version - Zeigt die minimal akzeptable Version an. Mitglieder Ihres Teams, die eine Version von {{ de.RDM }} verwendet, die unter diesem Wert liegt, werden zu einem Upgrade aufgefordert.
* Download-URL - Verbessert die Geschwindigkeit der Installation, indem die MSI-Datei in Ihr lokales Netzwerk heruntergeladen wird. Von diesem Pfad aus können alle Teammitglieder problemlos ein Upgrade ausführen. Kurz gesagt, dies spart Zeit und verhindert die Installation einer falschen Version..  

Der ***Abschnitt Administration – Datenquelleneinstellungen (Systemeinstellungen) – Seriennummer*** ist nützlich, wenn Sie eine Standort- oder Globallizenz haben, und erspart Ihnen das manuelle Festlegen des Schlüssels für jeden Klienten..

## Einstellungen der Datenquelle (Systemeinstellungen)

Auf der Registerkarte Allgemein unter ***Administration – Datenquelleneinstellungen (Systemeinstellungen)*** können Sie die Sicherheitsaspekte leicht kontrollieren.  

Eine großartige Funktion für Teams ist die Systemnachricht, mit der ein Administrator die Nutzer über bevorstehende Systemausfallzeiten, Änderungen der Richtlinien oder andere Dinge informieren kann. Jeder Nutzer erhält die Nachricht, sobald er die nächste Aktion (Öffnen, Bearbeiten, Aktualisieren...) in der Datenquelle ausführt. Verwenden Sie diese Funktion, um die Klauseln zur Vertraulichkeit des Unternehmens anzuzeigen oder mit einer Nachricht wie der folgenden ein wenig Chaos zu verbreiten. Ein kleines bisschen Chaos ist gut für die Seele.  

![!!KB4599](https://webdevolutions.azureedge.net/docs/de/kb/KB4599.png)

## {{ de.DVLS }}

Oder haben Sie vielleicht externe Nutzer, die auf die gemeinsame Datenquelle zugreifen müssen, aber keine VPN-Verbindung verwenden möchten? Vielleicht wollen Sie mehr Sicherheit und Caching? {{ de.DVLS }} bietet all das und noch viel mehr!  

Sie hosten {{ de.DVLS }} selbst und können entscheiden, ob Sie die Instanz nur in Ihrem Intranet (lokal) veröffentlichen, oder ob Sie sie auch online (private Cloud) anbieten. Damit können Sie einen exzellenten Datenspeicher für Ihr ganzes Unternehmen einrichten. Erfahren Sie mehr über {{ de.DVLS }} unter  [https://devolutions.net/de/server/](https://devolutions.net/de/server/).
