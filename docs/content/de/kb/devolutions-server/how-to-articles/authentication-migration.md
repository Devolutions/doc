---
eleventyComputed:
  title: Authentifizierungsmigration
  description: Nachfolgend erklärt, wie Sie die Benutzerkonten und Gruppen von einem Authentifizierungsanbieter zu einem anderen migrieren können.
---
Nachfolgend erklärt, wie Sie die Benutzerkonten und Gruppen von einem Authentifizierungsanbieter zu einem anderen migrieren können. Weiterhin wird beschrieben, wie Sie die Active Directory oder die Azure Active Directory-Domäne in eine andere migrieren können. Sie finden die Option zur Authentifizierungsmigration an 3 verschiedenen Stellen in Ihrer {{ de.DVLS }} Weboberfläche:
* ***Administration*** – ***Server Einstellungen*** – ***Authentifizierung***
* ***Administration*** – ***Benutzer***
* ***Administration*** – ***Gruppen***

## Migration
1. Wie unter ***Einleitung*** gezeigt, sind vor der Durchführung dieses Prozesses wichtige Schritte erforderlich.
![!!KB8124](https://webdevolutions.azureedge.net/docs/de/kb/KB8124.png)

1. Wählen Sie unter ***Optionen*** die Quelle und das Ziel der Migration aus.
![!!KB8125](https://webdevolutions.azureedge.net/docs/de/kb/KB8125.png)

1. Unter ***Benutzerzuordnung*** sollte der Assistent automatisch die Konten abgleichen, die er auf beiden Seiten findet. Alle anderen Konten müssen manuell ausgewählt werden.
![!!KB8126](https://webdevolutions.azureedge.net/docs/de/kb/KB8126.png)

1. Das Gleiche gilt für die ***Gruppenzuordnung***. Einige Gruppen werden vom Assistenten automatisch zugeordnet, andere müssen manuell zugeordnet werden.
![!!KB8127](https://webdevolutions.azureedge.net/docs/de/kb/KB8127.png)

1. Unter ***Bestätigung*** wird eine Zusammenfassung der ausgewählten Benutzer und Gruppen angezeigt, sowie derjenigen, die nicht für den Migrationsprozess ausgewählt wurden.
![!!KB8128](https://webdevolutions.azureedge.net/docs/de/kb/KB8128.png)

1. Klicken Sie auf ***Migration starten***, um den Prozess zu starten und den Bestätigungsbericht für die Migration zu erhalten.
![!!KB8129](https://webdevolutions.azureedge.net/docs/de/kb/KB8129.png)
