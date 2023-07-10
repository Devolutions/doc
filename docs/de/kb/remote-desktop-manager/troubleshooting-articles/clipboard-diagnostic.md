---
title: Zwischenablage-Diagnose
---
Es kann vorkommen, dass die Funktionen ***Benutzername kopieren*** und ***Passwort kopieren*** im {{ de.RDM }} nicht richtig funktionieren, weil andere Anwendungen und Prozesse Werte aus der Zwischenablage stehlen. Mit der ***Zwischenablage-Diagnose*** können Sie alle Anfragen in Echtzeit anzeigen und feststellen, welche Anwendung beteiligt ist.

## Schritte

1. Gehen Sie zu ***Hilfe – Zwischenablage-Diagnose***, um den Diagnosedialog zu öffnen.
1. Wählen Sie einen Ihrer Anmeldedaten-Einträge aus und führen Sie ***Benutzername und Passwort kopieren*** aus.
1. Fügen Sie die Information in ***Notepad*** ein.
1. In den Feldern ***Blockierliste*** und ***Erlaubnisliste*** sollten nun alle beteiligten Anwendungen angezeigt werden.  

In diesem Bildschirmfoto sehen Sie „notepad++“. Der Windows-Zwischenablageverlauf (Windows-Taste + V) ist standardmäßig blockiert. In Ihrem Fall sollte ***Notepad*** als erlaubt aufgeführt sein, aber höchstwahrscheinlich haben Sie einen anderen Prozess entweder auf der Blockierliste oder der Erlaubnisliste.  

![!!KB8042.png](https://webdevolutions.azureedge.net/docs/de/kb/KB8042.png)  

5. Sie möchten nun alle Prozesse, die nicht ***Notepad*** sind, daran hindern, den Inhalt der Zwischenablage einzusehen. Klicken Sie dazu mit der rechten Maustaste auf den Prozess der Erlaubnisliste, den Sie blockieren möchten und wählen Sie ***Hinzufügen***. Geben Sie die ***Beschreibung*** ein (nicht obligatorisch) und lassen Sie den Prozessnamen unverändert.. 

Das ***Hinzufügen*** sorgt dafür, dass von diesem Prozess kommende Anfragen zur Zwischenablage dauerhaft ignoriert werden..  

![!!KB4949.png](https://webdevolutions.azureedge.net/docs/de/kb/KB4949.png)  

6. Auf der Registerkarte ***Konfiguration*** gibt es einen weiteren Abschnitt namens ***Verzögerungen***, der für Anwendungen wie Chrome nützlich ist, die mehr als einmal nach dem Inhalt der Zwischenablage fragen. Hiermit kann durch eine Verzögerung festgelegt werden, wie lange z. B. Chrome nach dem Inhalt der Zwischenablage fragen darf. Die gleiche Logik gilt für die Auswahl der angewandten Regeln. Wir gleichen den Prozess und falls angegeben die Befehlszeile ab und wenden die Verzögerung an. Die Standardeinstellung beträgt 100 ms. Wenn Sie also aus irgendeinem Grund etwas in Chrome einfügen, aber nur das Passwort eingefügt wird, versuchen Sie, die Verzögerung zunächst auf 150 ms erhöhen, ***Speichern*** und dann ***Benutzername & Passwort kopieren***. 
1. Hat es funktioniert? Wenn ja, dann sind Sie fertig, wenn nicht, versuchen Sie es mit 200 ms.
1. Wenn es mit 200 ms immer noch nicht klappt, setzen Sie den ***Prozessnamen*** auf ***Beginnt mit*** statt ***Gleich*** und erhöhen Sie die ***Verzögerung*** auf 500 ms.  

![!!KB8044.png](https://webdevolutions.azureedge.net/docs/de/kb/KB8044.png)  

Am Ende des Formulars befindet sich eine Schaltfläche zum ***Senden***, mit der Sie Ihren ***Zwischenablage-Diagnose-Bericht*** an unser Support-Team senden können. Er enthält im Wesentlichen alles, was Sie auf den beiden Registerkarten sehen. Damit können wir Ihnen helfen, Ihren {{ en.RDM }} zu konfigurieren.
