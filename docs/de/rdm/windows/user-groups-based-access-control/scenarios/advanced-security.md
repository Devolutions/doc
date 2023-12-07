---
eleventyComputed:
  title: Erweiterte Sicherheit
  status: Topic available in German language
---
{% snippet icon.badgeInfo %}
Diese Funktion ist nur verfügbar bei Gebrauch einer [Erweiterten Datenquelle (EN)](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet icon.badgeInfo %}
Das folgende Szenario ist für große Unternehmen konzipiert. Für ein Szenario, das eher für kleine Unternehmen geeignet ist, konsultieren Sie bitte den Artikel [Vereinfachte Sicherheit](/de/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/).
{% endsnippet %}

Dieses Beispiel ist für große Unternehmen geeignet. Denken Sie aber bitte daran, dass jede Berechtigung nur im Bedarfsfall gewährt werden sollte. Seien Sie vorsichtig, wenn Sie einem Benutzer oder einer Benutzergruppe Berechtigungen erteilen. Unser fiktives Unternehmen Windjammer hat drei Benutzergruppen: HelpDesk, ServiceDesk und Berater. Es gibt zwei Kundenunternehmen: Downhill Pro und Telemark.  

Die folgende Baumstruktur stellt Einträge dar, auf die Benutzer Zugriff haben, sobald alle Berechtigungen festgelegt sind:  
![Baumstruktur](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6129.png)

### Konfiguration von Benutzern
Hier ist ein Beispiel für die Benutzer-Konfiguration. Um Benutzer zu erstellen, gehen Sie zu ***Verwaltung*** – ***Benutzer*** – ***Benutzer hinzufügen***.

{% snippet icon.badgeNotice %}
In diesem Szenario sind alle Optionen im Abschnitt ***Privilegien*** der ***Nutzerverwaltung*** auf ***Keine*** gesetzt.
{% endsnippet %}

Hier wählen wir den Typus der Benutzer aus, um ihnen die grundlegenden Berechtigungen zu geben (***Hinzufügen***, ***Bearbeiten*** und ***Löschen***).  

***ServiceDesk***-Benutzer sind ***Eingeschränkte Benutzer***. Sie haben die Berechtigungen ***Hinzufügen*** und ***Bearbeiten***. Sie können jedoch keine Einträge in den Ordner {{ de.VLT }} hinzufügen.  
![Nutzerverwaltung – ServiceDesk – Eingeschränkte Benutzer](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6126.png)

***HelpDesk***-Benutzer sind ebenfalls ***Eingeschränkte Benutzer***. Sie haben nur die Berechtigung ***Hinzufügen***. Sie können jedoch keine Einträge in den Ordner {{ de.VLT }} hinzufügen.  
![Nutzerverwaltung – HelpDesk – Eingeschränkte Benutzer](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6127.png)

***Berater*** sind ***Read Only-Benutzer*** und können nur einen Teil der Einträge sehen. Sie können nichts hinzufügen oder bearbeiten.

### Konfiguration von Benutzergruppen
Nachdem die Benutzer erstellt sind, fügen wir die Benutzergruppen hinzu, denen wir später die Berechtigungen erteilen werden. Dazu müssen wir Benutzergruppen erstellen und den entsprechenden Benutzer der jeweiligen Gruppe zuweisen. Es ist nicht nötig, diesen Benutzergruppen irgendwelche Rechte zu gewähren, da sie nur als leer Hüllen fungieren, um mehrere Benutzer zu gruppieren. Auf diese Weise können mehrere Benutzer gleichzeitig kontrolliert werden, anstatt jedem Benutzer einzeln Berechtigungen zu erteilen.  

* ServiceDesk
* HelpDesk
* Berater

Um eine Benutzergruppe hinzuzufügen, klicken Sie bitte auf ***Benutzergruppe hinzufügen***, geben einen Namen für die Benutzergruppe ein und klicken auf ***Ok***.  

Um Benutzer einer Benutzergruppe zuzuweisen, wählen Sie eine Benutzergruppe und klicken auf Benutzergruppe zuweisen. Verwenden Sie die Kontrollkästchen Ist Mitglied, um Benutzer den Benutzergruppen hinzuzufügen.  
![Verwaltung von Nutzern und Sicherheit – Benutzergruppen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6088.png)

### Konfiguration von Einträgen
Jetzt ist alles bereit, um den Zugriff auf die Nutzergruppen zu gewähren oder zu verweigern.  

* Alle Berechtigungen für den Ordner {{ de.VLT }} sind auf ***Nie*** gesetzt. Durch Vererbung wird damit den untergeordneten Elementen der Standardzugriff auf alles verweigert.
* Der ServiceDesk hat die Berechtigung, alle Einträge anzuzeigen und zu öffnen, kann aber nur die Einträge in den Gruppen/Ordnern der Kunden bearbeiten.
* Der HelpDesk hat die Berechtigung, nur Einträge in den Gruppen/Ordnern der Kunden zu sehen und zu öffnen, kann sie aber nicht bearbeiten.
* Die Berater haben die Berechtigung, nur die Einträge im Montreal-Ordner zu sehen und zu öffnen, können aber weder diesen noch seine untergeordneten Elemente bearbeiten.

**{{ de.VLT }} Einstellungen**
Wie bereits erwähnt, sind die Berechtigungen für ALLE Einstellungen des Ordners {{ de.VLT }} auf ***Nie*** gesetzt. Dadurch wird der standardmäßige Zugriff für alle Nutzer verweigert.  
![{{ de.VLT }} Einstellungen – Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6089.png)

**Windjammer, Downhill Pro und Telemark, die Gruppen/Ordner der Tresorebene**
Die Berechtigung zur Einsicht des Ordners „Windjammer“ wird nur für den ServiceDesk festgelegt, da dieser die untergeordneten Einträge verwenden soll. Wir wollen nicht, dass der ServiceDesk etwas hinzufügen, bearbeiten oder löschen kann. Wir lassen die Berechtigungen ***Hinzufügen***, ***Bearbeiten*** und ***Löschen*** auf ***Vererbt***, sodass nur Administratoren diese Aktionen für den Ordner Windjammer und seine untergeordneten Elemente durchführen können.  
![Windjammer – Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6131.png)

* ***Ansicht: Nutzerdefiniert***; ServiceDesk.
* ***Hinzufügen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur der Administrator kann Einträge hinzufügen.
* ***Bearbeiten: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur der Administrator kann Einträge bearbeiten.
* ***Löschen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur der Administrator kann Einträge löschen.
* ***Verschieben: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.
* ***Verbinden (Ausführen): Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können verbinden (ausführen).

Für Downhill Pro erteilen wir Berechtigungen für den ServiceDesk und den HelpDesk.  
![Downhill Pro – Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6091.png)

* ***Ansicht: Nutzerdefiniert***; HelpDesk, ServiceDesk.
* ***Hinzufügen: Nutzerdefiniert***; ServiceDesk.
* ***Bearbeiten: Nutzerdefiniert***; ServiceDesk.
* ***Löschen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur der Administrator kann Einträge löschen.
* ***Verschieben: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.  

Wir haben bereits ein gutes Beispiel für die Flexibilität der Sicherheit von {{ de.RDM }}. Nutzer von ServiceDesk und HelpDesk können alle Einträge im Ordner „Downhill Pro“ einsehen und verwenden, sogar die Anmeldeinformationen. Aber sie können niemals ein Passwort einsehen, da sie dazu keine Berechtigung dazu habe, Passwörter anzuzeigen.  

Als Nächstes erteilen wir dem ServiceDesk, dem HelpDesk und den Beratern Berechtigungen für den Ordner „Telemark“. An dieser Stelle wird es kompliziert. Wenn wir wollen, dass die Berater nur den Ordner „Montreal“ sehen können, der ein untergeordnetes Element des Ordners „Telemark“ ist, müssen wir ihnen die Berechtigung erteilen, den übergeordneten Ordner und damit den gesamten Inhalt von Telemark einzusehen. Dann werden wir die Berechtigungen für untergeordnete Elemente nur der Nutzergruppe gewähren, die Zugriff auf diese Elemente haben soll. Mit diesem letzten Schritt wird den Beratern die Berechtigung zur Einsicht in die untergeordneten Elemente verweigert.  
![Telemark – Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6128.png)

* ***Ansicht: Nutzerdefiniert***; Consultants, HelpDesk, ServiceDesk.
* ***Hinzufügen: Nutzerdefiniert***; ServiceDesk.
* ***Bearbeiten: Nutzerdefiniert***; ServiceDesk.
* ***Löschen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur der Administrator kann Einträge löschen.
* ***Verschieben: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur der Administrator kann Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.

**Telemark untergeordnete Elemente**
Da wir möchten, dass die Benutzer die Anmeldeinformationen verwenden können, gewähren wir dem ServiceDesk und dem HelpDesk die Berechtigung, den Ordner „Anmeldeinformationen“ einzusehen. So können der ServiceDesk und der HelpDesk die Einträge in dem Ordner verwenden, ohne die Passwörter preiszugeben. Indem wir also festlegen, dass nur der HelpDesk und der ServiceDesk die Berechtigung zur Ansicht haben, verweigern wir allen anderen Benutzergruppen oder Benutzern die Einsicht, die nicht auf der Liste der Berechtigung stehen.  

Die Berechtigungen ***Hinzufügen*** und ***Bearbeiten*** sind auf ***Nie*** eingestellt. Die Berechtigung ***Löschen*** kann auf ***Vererbt*** belassen werden, da sie die Einstellung ***Nie*** vom {{ de.VLT }} erbt. Nur Administratoren können diese Aktionen in Gruppen/Ordnern mit Anmeldeinformationen durchführen.  
![Telemark/Anmeldeinformationen – Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6132.png)

* ***Ansicht: Nutzerdefiniert***; HelpDesk, ServiceDesk.
* ***Hinzufügen: Nie***; nur Administratoren können Anmeldeinformationen hinzufügen.
* ***Bearbeiten: Nie***; nur der Administrator kann Einträge bearbeiten.
* ***Löschen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge löschen.
* ***Verschieben: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen***: Vererbt; nie vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.
* ***Verbinden (Ausführen): Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können verbinden (ausführen).


Wir möchten, dass der ServiceDesk auch die Anmeldeeingaben des ***Domain-Administrators*** verwenden kann, aber nicht der HelpDesk. Dazu müssen wir dem ServiceDesk die Berechtigung zur ***Ansicht*** erteilen. Der ServiceDesk kann dann immer noch die Anmeldeeingaben verwenden, wird aber niemals das Passwort sehen.  
![Telemark/Anmeldeinformationen/Admin – Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6133.png)

* ***Ansicht: Nutzerdefiniert***; ServiceDesk.
* ***Hinzufügen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Anmeldeinformationen hinzufügen.
* ***Bearbeiten: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Anmeldeinformationen bearbeiten.
* ***Löschen: Vererbt***; nie von Telemark\Anmeldeiformationen geerbt. Nur Administratoren können Anmeldeinformationen löschen.
* ***Verschieben: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.
* ***Verbinden (Ausführen): Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können verbinden (ausführen).


Der letzte Schritt für die untergeordneten Elemente des Ordners „Telemark“ besteht darin, die Berechtigung ***Ansicht*** für den ServiceDesk und den HelpDesk auf den Ordner „Boston“ zu setzen und alle anderen Berechtigungen dieses Ordners auf ***Vererbt*** zu belassen. Dadurch wird den Beratern die Einsicht in den Ordner „Boston“ verweigert. Nun können die Berater nur Einträge im Ordner „Montreal“ einsehen und öffnen.  
![Telemark/Boston – Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6134.png)

* ***Ansicht: Nutzerdefiniert***; HelpDesk, ServiceDesk.
* ***Hinzufügen: Vererbt***; ServiceDesk geerbt vom Ordner „Telemark“.
* ***Bearbeiten: Vererbt***; ServiceDesk geerbt vom Ordner „Telemark“.
* ***Löschen: Vererbt***; nie vom {{ de.VLT }} geerbt.
* ***Passwort anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.


{% snippet icon.shieldCaution %}
Jedes Mal, wenn ein neuer Ordner als Unterordner des Ordners „Telemark“ hinzugefügt wird, muss die Berechtigung zur ***Ansicht*** für den ServiceDesk und/oder den HelpDesk gesetzt werden, um den neuen Ordner und seinen Inhalt vor den Beratern zu verbergen.
{% endsnippet %}

Für den Ordner „Montreal“ müssen keine Berechtigungen festgelegt werden, da sie von den übergeordneten Ordnern geerbt werden.  
![Telemark/Montreal – Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6135.png)

### Fazit
Die Berechtigungen sind nun korrekt festgelegt. Bitte beachten Sie, dass jeder Eintrag, der auf Tresorebene hinzugefügt wird, auch vom Tresor erbt. Das bedeutet, dass diese nur für Administratoren verfügbar sind, es sei denn, ihre Berechtigungen wurden geändert. Dies bestätigt ein Blick auf den nachstehenden Screenshot, auf dem der Eintrag ***Tägliche Routine*** für jeden zugänglich ist (seine Berechtigungen wurden auf ***Alle*** geändert). Hier sehen Sie, was jeder Nutzer in der Baumansicht sehen sollte:  
![Baumansicht Seite an Seite](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6099.png)

Sie können die Berechtigungen weiter anpassen, indem Sie beim Bearbeiten von Einträgen die Registerkarte ***Sicherheitseinstellungen*** verwenden. Wie immer muss bei der Vergabe von Berechtigungen große Sorgfalt gewahrt werden.
