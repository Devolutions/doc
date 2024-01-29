---
eleventyComputed:
  title: Gruppenbasierter Zugriff
  order: 70
---
Die auf Gruppen basierende Zugriffskontrolle von {{ de.RDM }} ermöglicht es, granulare Zugriffe zu definieren, das gleichermaßen flexibel ist. Allerdings hat diese Flexibilität ihren Preis und manchmal können falsche Entscheidungen den Zeitaufwand für die Verwaltung des Systems erhöhen.  

Die folgenden Empfehlungen basieren auf unserer Erfahrung und den von unserer Community geteilten Ideen. Folgen Sie diesen Richtlinien, die dabei helfen, das gruppenbasierte Zugriffssystem effizient zu nutzen.  

Hier sind die wichtigsten Kernpunkte des gruppenbasierten Zugriffs:  

* Erhöhte Sicherheit: Untergeordnete Elemente und Ordner erben die Sicherheit (Berechtigung) eines übergeordneten Ordners.
* Berechtigungen können außer Kraft gesetzt werden: Eine für einen Unterordner festgelegte Berechtigung hat Vorrang vor der Berechtigung des übergeordneten Objekts.
* Berechtigungen sind detailliert: Mehrere Berechtigungen können gleichzeitig konfiguriert werden.

### Erhöhte Sicherheit
Die auf gruppenbasierte Konfiguration ist eine großartige Funktion, um den Zugriff auf Einträgen zu sichern, jedoch können viele zusätzliche Funktionen verwendet werden, um weitere Sicherheitsebenen hinzuzufügen. Für weitere Informationen finden Sie in den folgenden Themen:  

* [Sicherheitsanbieter](/rdm/windows/commands/administration/settings/security-providers/)
* [{{ de.VLT_MAJ }}e](/rdm/windows/commands/administration/management/vaults-overview/)
* [Passwortvorlagen](/rdm/windows/commands/file/templates/password-templates/)
* [Multi-Faktor-Authentifizierung](/rdm/windows/data-sources/multi-factor-authentication/)
* Einmaliges Passwort (OTP)

## Szenarien
Aufgrund der großen Flexibilität unseres Systems ist es schwierig, zu beschreiben, wie Sie genau das Sicherheitssystem finden, das Ihren Bedürfnissen entspricht. Aus diesem Grund haben wir uns dazu entschieden, die gängigsten Systeme zu beschreiben, die wir in der Community unserer derzeitigen Benutzer im Einsatz gesehen haben. Wir hoffen, dass eines davon Ihren Bedürfnissen entspricht. Natürlich können Sie die verschiedenen Strategien, die in unseren Szenarien zum Einsatz kommen, nach Ihren Wünschen kombinieren und anpassen.  

Weitere Informationen finden Sie in den folgenden Artikel:  

* [Vereinfachte Sicherheit](/de/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/)
* [Erweiterte Sicherheit](/de/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/)

## Konfiguration von Gruppen
Bei Verwendung der auf gruppenbasierter Zugriffskontrolle werden die Gruppen hauptsächlich dazu genutzt, den Zugriff für Benutzer gleichzeitig zu kontrollieren bzw- zu konfigurieren.  

Häufige Gruppen können sein:  

* ServiceDesk: zentrale Anlaufstelle für die Bearbeitung von Vorfällen, Problemen und Fragen von Mitarbeitern und Kunden. Bietet eine Schnittstelle für Aktivitäten wie Änderungen, Softwarelizenzen, Konfigurationsmanagement und mehr.
* HelpDesk: Verwaltung, Koordinierung und Lösung von Supportanfragen.
* Berater: befristet angestellte externe Mitarbeiter, die in der Regel nur über Lesezugriff verfügen und nur einen Bruchteil der Einträge verwenden können.

Tatsächlich werden wir diese Gruppennamen in unseren Szenarien verwenden.

### Gruppen erstellen
Um Gruppen zu erstellen, gehen Sie bitte zu ***Administration*** – ***Gruppen*** und klicken dann auf ***Gruppe hinzufügen***.  
![Gruppe erstellen](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3472.png)

Alle Einstellungen können auf den Standardwerten belassen werden, es sei denn, die Gruppe enthält nur Administratoren. Aktivieren Sie in diesem Fall das Kontrollkästchen ***Administrator***. Geben Sie einen ***Namen*** für die Gruppe ein und klicken Sie dann auf ***Ok***.  
![Gruppe konfigurieren](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3473.png)

Um Benutzer der Gruppe zuzuordnen, klicken Sie auf die Schaltfläche Gruppe und markieren Sie dann das Kästchen ***Mitglied*** des betreffenden Benutzers.  
![Benutzer einer Gruppe zuweisen](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3474.png)

## Benutzervorlage
Es ist möglich, die standardmäßige Vorlage für Benutzer zu ändern. Diese Optionen gehen Sie bitte zu ***Administration*** – ***System Einstellungen*** – ***Benutzerverwaltung*** – ***Benutzervorlage***. Dies Einstellungen bestimmen die standardmäßigen Einstellungen eines neuen Benutzers.

### Benutzer erstellen
Um Benutzer zu erstellen, gehen Sie zu ***Administration*** – ***Benutzer*** und klicken dann auf ***Benutzer hinzufügen***. Geben Sie einen ***Benutzernamen*** und ein ***Passwort*** für den Benutzer ein und wählen Sie den ***Benutzertyp***.  
![Benutzer erstellen](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3475.png)

Durch das Aktivieren des Kontrollkästchens ***Mitglied*** der entsprechenden Gruppe im Bereich ***Gruppen*** in der ***Benutzerverwaltung***, kann ein Benutzer mehreren Gruppen gleichzeitig zugeordnet werden.  
![Gruppen Zuordnung](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3476.png)

### Administratoren
***Administratoren*** können nicht eingeschränkt werden, unabhängig von den Sicherheitseinstellungen. Diese Benutzer sind in der Regel die leitenden Angestellten und die Geschäftsleitung.

### Eingeschränkte Benutzer
***Eingeschränkte Benutzer*** haben nur begrenzten Zugriff auf die Ressourcen. In der Regel haben sie nur die Berechtigungen ***Hinzufügen*** und ***Bearbeiten***. Bei diesen Benutzern kann es sich um Führungskräfte der mittleren und ersten Ebene handeln, z. B. ServiceDesk und HelpDesk.

### Benutzer
***Benutzer*** haben ebenso nur begrenzten Zugriff auf Ressourcen, ähnlich wie eingeschränkte Benutzer. Allerdings haben sie standardmäßig die Berechtigungen ***Hinzufügen***, ***Bearbeiten*** und ***Löschen*** und können diese Aktionen für alle nicht speziell konfigurierten Einträge durchführen.

### Benutzer (Leserechte)
***Benutzer (Leserechte)*** können Ressourcen nur einsehen, aber nicht bearbeiten. Diese Benutzer sind in der Regel externe Berater.

### Den passenden Benutzertyp auswählen
Bei der Erstellung von Benutzern müssen einige wichtige Punkte beachtet werden. Stellen Sie sich bei der Konfiguration neuer Benutzer die folgenden Fragen:  

* Sollen diese ohne Einschränkungen auf alle Ressourcen zugreifen können? Dies sind Ihre ***Administratoren***.
* Sollen sie in der Lage sein, Einträge hinzuzufügen, zu bearbeiten oder zu löschen? Ein ***Benutzer*** hat alle diese Berechtigungen. Alternativ dazu können Sie mit ***Eingeschränkter Benutzer*** spezielle Berechtigungen auswählen.
* Sollen sie vertrauliche Informationen einsehen oder Einträge importieren und exportieren können? 
Falls nicht, eignet sich der Benutzertyp ***Benutzer (Leserechte)*** am besten für Personen, die nur sehr eingeschränkten Zugriff haben sollen.

## Konfiguration von Einträgen
Der Zugriff wird gewährt oder verweigert, indem die Berechtigungen für Einträge festgelegt werden. ***Berechtigungen*** können für Benutzer und Gruppen festgelegt werden. Am besten ist es, Berechtigungen für Gruppen zu erteilen, um den Zugriff für mehrere Benutzer gleichzeitig zu kontrollieren.  

Um Berechtigungen für einen Eintrag festzulegen, bearbeiten sie einen beliebigen Eintrag und gehen dann zum Abschnitt ***Berechtigungen***.  
![Berechtigungen](https://webdevolutions.azureedge.net/docs/de/rdm/windows/RDMWin6038.png)

Berechtigungen werden normalerweise für Ordner festgelegt und gelten für alle untergeordneten Einträge. Am besten ist es, alle Berechtigungen des {{ de.VLT }} auf ***Niemand*** zu setzen. Dadurch werden standardmäßig alle Berechtigungen für alle Einträge verweigert.  
![{{ de.VLT }} Vererbte Berechtigungen](https://webdevolutions.azureedge.net/docs/de/rdm/windows/RDMWin6039.png)

Der Zugriff wird verweigert, ausser die Berechtigung wird für Benutzer / Gruppen ausdrücklich gewährt. Mit anderen Worten: Allen Benutzern / Gruppen, die nicht auf der Liste der Berechtigung stehen, wird der Zugriff verweigert.  

Damit der Zugriff auf einen Unterordner möglich ist, muss zumindest die Berechtigung ***Anzeigen*** aller übergeordneten Ordner konfiguriert werden.  

Betrachten Sie bitte folgende Struktur:  
![Drei Ordnerebenen](https://webdevolutions.azureedge.net/docs/de/rdm/windows/RDMWin6041.png)

Es gibt drei Ordnerebenen: {{ de.VLT }} (Windjammer), Telemark und untergeordnete Elemente von Telemark.  

Angenommen, eine Gruppe, z.B. Consultants, muss nur Zugriff auf den Ordner „Montreal“ haben. Der Gruppe muss auch die Berechtigung Anzeigen des Ordners „Telemark“ gewährt werden. Allerdings erhält diese mit dieser Berechtigung auch das Recht, alle untergeordneten Elemente von „Telemark“ einzusehen. Um der Gruppe diese Berechtigung zu verweigern, muss die Berechtigung Anzeigen dieser Elemente ausdrücklich für andere Gruppen festgelegt werden.  
![Die Berechtigungen zur Anzeige dieser Elemente müssen ausdrücklich für andere Gruppen festgelegt werden](https://webdevolutions.azureedge.net/docs/de/rdm/windows/RDMWin6042.png)
