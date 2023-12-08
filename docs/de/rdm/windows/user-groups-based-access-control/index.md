---
eleventyComputed:
  title: Auf Benutzergruppen basierende Zugriffskontrolle
  order: 70
---
Die auf Benutzergruppen basierende Zugriffskontrolle des {{ de.RDM }} ermöglicht es, ein detailliertes Schutzsystem zu schaffen, das sehr flexibel ist. Allerdings hat diese Flexibilität ihren Preis und manchmal können falsche Entscheidungen den Zeitaufwand für die Verwaltung des Systems erhöhen.  

Die folgenden Empfehlungen basieren auf unserer Erfahrung mit dem System und den von unserer Community geteilten Ideen. Folgen Sie diesen Richtlinien, die Ihnen helfen werden, die auf Benutzergruppen basierende Zugriffskontrolle effizient zu nutzen.  

Hier sind die wichtigsten Kernpunkte der auf Benutzergruppen basierende Zugriffskontrolle:  

* Die Sicherheit ist erhöht: Untergeordnete Elemente und Ordner werden von der Sicherheit eines übergeordneten Ordners abgedeckt.
* Berechtigungen können außer Kraft gesetzt werden: Eine für einen Unterordner festgelegte Berechtigung hat Vorrang vor der Berechtigung des übergeordneten Objekts.
* Berechtigungen sind detailliert: Mehrere Berechtigungen können gleichzeitig für Einträge vergeben werden.

### Erhöhte Sicherheit
Die auf Benutzergruppen basierende Zugriffskontrolle ist eine großartige Funktion, um den Zugriff auf Einträgen zu sichern, aber viele andere Funktionen können verwendet werden, um weitere Sicherheitsebenen hinzuzufügen. Für weitere Informationen konsultieren Sie bitte die folgenden Artikel:  

* [Sicherheitsprovider](/rdm/windows/commands/administration/settings/security-providers/)
* [{{ de.VLT_MAJ }}-Verknüpfung](/rdm/windows/commands/administration/management/vaults-overview/)
* [Passwort-Vorlagen](/rdm/windows/commands/file/templates/password-templates/)
* [Zwei-Faktor-Authentifizierung](/rdm/windows/data-sources/multi-factor-authentication/)
* Einmaliges Passwort

## Szenarien
Aufgrund der großen Flexibilität unseres Systems ist es schwierig, zu beschreiben, wie Sie genau das Sicherheitssystem finden, das Ihren Bedürfnissen entspricht. Aus diesem Grund haben wir uns dazu entschieden, die gängigsten Systeme zu beschreiben, die wir in der Community unserer derzeitigen Benutzer im Einsatz gesehen haben. Wir hoffen, dass eines davon Ihren Bedürfnissen entspricht. Natürlich können Sie die verschiedenen Strategien, die in unseren Szenarien zum Einsatz kommen, nach Ihren Wünschen kombinieren und anpassen.  

Bitte konsultieren Sie die folgenden Artikel:  

* [Vereinfachte Sicherheit](/de/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/)
* [Erweiterte Sicherheit](/de/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/)

## Konfiguration von Benutzergruppen
Bei Verwendung der auf Benutzergruppen basierende Zugriffskontrolle werden die Benutzergruppen hauptsächlich dazu genutzt, den Zugriff mehrerer Benutzer gleichzeitig zu kontrollieren.  

Häufige Benutzergruppen können sein:  

* ServiceDesk: zentrale Anlaufstelle für die Bearbeitung von Vorfällen, Problemen und Fragen von Mitarbeitern und Kunden. Bietet eine Schnittstelle für Aktivitäten wie Änderungsanträge, Softwarelizenzen, Konfigurationsmanagement und mehr.
* HelpDesk: Verwaltung, Koordinierung und Lösung von Supportanfragen.
* Berater: befristet angestellte externe Mitarbeiter, die in der Regel nur Lesezugriff haben und nur eine Teilmenge der Einträge verwenden können.

Tatsächlich werden wir diese Gruppennamen in unseren Szenarien verwenden.

### Benutzergruppen erstellen
Um Benutzergruppen zu erstellen, gehen Sie bitte zu ***Verwaltung*** – ***Benutzergruppen*** und klicken dann auf ***Benutzergruppen hinzufügen***.  
![Eine Benutzergruppe erstellen](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3472.png)

Alle Einstellungen können auf den Standardwerten belassen werden, es sei denn, die Benutzergruppe enthält nur Administratoren. Aktivieren Sie in diesem Fall das Kontrollkästchen ***Administrator***, wenn Sie die Benutzergruppe konfigurieren. Geben Sie einen ***Namen*** für die Benutzergruppe ein und klicken Sie dann auf ***Ok***.  
![Eine Benutzergruppe konfigurieren](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3473.png)

Um Benutzer der Benutzergruppe zuzuordnen, klicken Sie auf die Schaltfläche Benutzergruppe und markieren Sie dann das Kästchen ***Ist Mitglied*** des betreffenden Benutzers.  
![Einen Benutzer einer Benutzergruppe zuweisen](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3474.png)

## Konfiguration von Benutzern
Es ist möglich, die standardmäßige Vorlage für Benutzer zu ändern. Dazu gehen Sie bitte zu ***Datei*** – ***Optionen*** – ***Sicherheit*** – ***Benutzervorlage***. Dies Einstellungen bestimmen die standardmäßigen Einstellungen eines neuen Benutzers. Die beste Methode ist es, alle Privilegien zu deaktivieren.  

### Benutzer erstellen
Um Benutzer zu erstellen, gehen Sie zu ***Verwaltung*** – ***Benutzer*** und klicken dann auf ***Benutzer hinzufügen***. Geben Sie einen ***Benutzernamen*** und ein ***Passwort*** für den Benutzer ein und wählen Sie den ***Benutzertyp***.  
![Einen Benutzer erstellen](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3475.png)

Durch das Aktivieren des Kontrollkästchens ***Ist Mitglied*** der entsprechenden Benutzergruppe im Bereich ***Benutzergruppen*** in der ***Benutzerverwaltung*** kann ein Benutzer mehreren Benutzergruppen gleichzeitig zugeordnet werden.  
![Einen Benutzer Benutzergruppen hinzufügen](https://webdevolutions.azureedge.net/docs/de/rdm/windows/clip3476.png)

### Administratoren
***Administratoren*** können alles tun, unabhängig von den Sicherheitseinstellungen. Diese Benutzer sind in der Regel die leitenden Angestellten und die Geschäftsleitung.

### Eingeschränkte Benutzer
***Eingeschränkte Benutzer*** haben nur begrenzten Zugriff auf die Ressourcen. In der Regel haben sie nur die Berechtigungen ***Hinzufügen*** und ***Bearbeiten***. Bei diesen Benutzern kann es sich um Führungskräfte der mittleren und ersten Ebene handeln, z. B. ServiceDesk und HelpDesk.

### Benutzer
***Benutzer*** haben ebenso nur begrenzten Zugriff auf Ressourcen, ähnlich wie eingeschränkte Benutzer. Allerdings haben sie standardmäßig die Berechtigungen ***Hinzufügen***, ***Bearbeiten*** und ***Löschen*** und können diese Aktionen für alle ungesicherten Einträge durchführen.

### Read-only-Benutzer
***Read-only-Benutzer*** können Ressourcen nur einsehen, aber nicht bearbeiten. Diese Benutzer sind in der Regel externe Berater.

### Den passenden Benutzertyp auswählen
Bei der Erstellung von Benutzern müssen einige wichtige Punkte beachtet werden. Stellen Sie sich bei der Konfiguration neuer Benutzer die folgenden Fragen:  

* Sollen sie ohne Einschränkungen auf alle Ressourcen zugreifen können? Dies sind Ihre ***Administratoren***.
* Sollen sie in der Lage sein, Einträge hinzuzufügen, zu bearbeiten oder zu löschen? Ein ***Benutzer*** hat alle diese Berechtigungen. Alternativ dazu können Sie mit ***Eingeschränkter Benutzer*** spezielle Berechtigungen auswählen.
* Sollen sie vertrauliche Informationen einsehen oder Einträge importieren und exportieren können? Der Benutzertyp ***Read-only-Benutzer*** eignet sich am besten für Personen, die nur sehr eingeschränkten Zugriff haben sollen.

## Konfiguration von Einträgen
Der Zugriff wird Benutzern gewährt oder verweigert, indem die Berechtigung für Einträge festgelegt wird. ***Berechtigungen*** können für Benutzer und Benutzergruppen festgelegt werden. Am besten ist es, Berechtigungen für Benutzergruppen zu erteilen, um den Zugriff für mehrere Benutzer gleichzeitig zu kontrollieren.  

Um Berechtigungen für einen Eintrag festzulegen, bearbeiten sie einen beliebigen Eintrag und gehen dann zum Abschnitt ***Berechtigungen***.  
![Berechtigungen für Einträge](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6038.png)

Berechtigungen werden normalerweise für Ordner festgelegt und gelten für alle untergeordneten Einträge. Am besten ist es, alle Berechtigungen des {{ en.VLT }}-Ordners auf ***Nie*** zu setzen. Dadurch werden standardmäßig alle Berechtigungen für alle Einträge verweigert.  
![{{ en.VLT }}einstellungen Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6039.png)

Der Zugriff wird Benutzern verweigert, indem der Zugang anderen Benutzern ausdrücklich gewährt wird. Mit anderen Worten: Allen Benutzern, die nicht auf der Liste der Berechtigung stehen, wird der Zugriff verweigert.  

Damit ein Benutzer auf einen Unterordner zugreifen kann, muss er zumindest die Berechtigung zur Einsicht aller übergeordneten Ordner besitzen.  

Betrachten Sie bitte folgende Struktur:  
![Drei Ebenen von Ordnern](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6041.png)

Es gibt drei Ebenen von Ordnern: der {{ en.VLT }}, Telemark und untergeordnete Elemente von Telemark.  

Angenommen, ein Benutzer, z. B. ein Berater, muss nur Zugriff auf den Ordner „Montreal“ haben. Dem Berater muss auch die Berechtigung zur Einsicht des Ordners „Telemark“ gewährt werden. Allerdings erhält er mit dieser Berechtigung auch das Recht, alle untergeordneten Elemente von „Telemark“ einzusehen. Um dem Berater diese Berechtigung zu verweigern, muss die Berechtigung zur Einsicht dieser Elemente ausdrücklich für andere Benutzer festgelegt werden.  
![Die Berechtigungen zur Einsicht dieser Elemente müssen ausdrücklich für andere Benutzer festgelegt werden](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6042.png)
