---
title: Zwischenablage Diagnose
---
Es kann vorkommen, dass die Funktionen ***Benutzername kopieren*** und ***Passwort kopieren*** im {{ de.RDM }} nicht richtig funktionieren, weil andere Anwendungen oder Prozesse die Zwischenablage überwachen. Mit der ***Zwischenablage Diagnose*** können Sie alle Anfragen in Echtzeit anzeigen und feststellen, welche Anwendung beteiligt ist.

## Schritte

1. Wechseln Sie zu ***Hilfe – Zwischenablage Diagnose***, um die Diagnose zu öffnen.
1. Wählen Sie einen Ihrer Einträge und führen Sie ***Benutzername und Passwort kopieren*** aus.
1. Fügen Sie die Information in ***Notepad*** ein.
1. In den Feldern ***Verboten*** und ***Zugelassen*** sollten nun alle beteiligten Anwendungen angezeigt werden.  

In diesem Bildschirmfoto sehen Sie „notepad++“. Der Windows-Zwischenablageverlauf (Windows+V) ist standardmäßig blockiert. In Ihrem Fall sollte ***Notepad*** als zugelassen aufgeführt sein, aber höchstwahrscheinlich haben Sie einen anderen Eintrag entweder als Blockiert oder Zugelassen aufgelistet.

![!!KB8042](https://webdevolutions.azureedge.net/docs/de/kb/KB8042.png)  

5. Sie möchten nun alle Prozesse ausser ***Notepad*** daran hindern, auf den Inhalt der Zwischenablage zuzugreifen. Klicken Sie dazu mit der rechten Maustaste auf den Prozess der Zugelassen-Liste den Sie blockieren möchten und wählen Sie ***Hinzufügen***. Geben Sie eine ***Beschreibung*** ein (optional) und lassen Sie den Prozessnamen unverändert.. 

Das ***Hinzufügen*** sorgt dafür, dass von diesem Prozess kommende Anfragen zur Zwischenablage dauerhaft blockiert werden..  

![!!KB4949](https://webdevolutions.azureedge.net/docs/de/kb/KB4949.png)  

6. Auf der Registerkarte ***Konfiguration*** gibt es einen weiteren Abschnitt namens ***Verzögerungen***, der für Anwendungen wie Chrome nützlich ist, die mehr als einmal den Inhalt der Zwischenablage abfragen. Hiermit kann durch eine Verzögerung festgelegt werden, wie lange z. B. Chrome den Inhalt der Zwischenablage abfragen darf. Die gleiche Logik gilt für die Auswahl der angewandten Regeln. Der Prozess und falls angegeben die Befehlszeile werden abgeglichen und die Verzögerung angewandt. Die Standardeinstellung beträgt 100 ms. Falls Sie etwas in Chrome einfügen, aber nur das Passwort eingefügt wird, versuchen Sie, die Verzögerung zunächst auf 150 ms erhöhen, mit ***OK*** bestätigen und dann ***Benutzername & Passwort kopieren***.
7. Wurde beide Werte eingefügt? Wenn ja, dann sind Sie fertig, wenn nicht, erhöhen Sie den Wert auf 200 ms.
8. Wenn es mit 200 ms immer noch nicht funktioniert, setzen Sie den ***Prozessnamen*** auf ***Beginnt mit*** statt ***Ist*** und erhöhen Sie die ***Verzögerung*** auf 500 ms.  

![!!KB8044](https://webdevolutions.azureedge.net/docs/de/kb/KB8044.png)  

Am Ende des Formulars befindet sich eine Schaltfläche zum ***Senden***, mit der Sie einen ***Zwischenablage Diagnose-Bericht*** an unser Support-Team senden können. Er enthält im Wesentlichen alle Informationen die auf den beiden Registerkarten angezeigt werden. Damit können wir Ihnen helfen, Ihren {{ de.RDM }} zu konfigurieren.
