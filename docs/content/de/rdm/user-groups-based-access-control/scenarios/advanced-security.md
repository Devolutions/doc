---
eleventyComputed:
  title: Erweiterte Sicherheit
  status: Topic available in German language
---
{% snippet, "badgeInfo" %}
Diese Funktion ist nur in [Erweiterten Datenquellen (EN)](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) verfügbar.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Das folgende Szenario ist für größere Umgebungen konzipiert. Für ein Szenario, das eher für kleinere Umgebungen geeignet ist, konsultieren Sie bitte den Artikel [Vereinfachte Sicherheit](/de/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/).
{% endsnippet %}

Dieses Beispiel ist für große Umgebungen geeignet. Denken Sie aber bitte daran, dass jede Berechtigung nur im Bedarfsfall zugewiesen werden sollte. Seien Sie vorsichtig, wenn Sie einem Benutzer oder einer Gruppe Berechtigungen erteilen.
Unser fiktives Unternehmen Windjammer hat drei Gruppen konfiguriert: **HelpDesk**, **ServiceDesk** und **Consultants**.
Zudem gibt es zwei Kundenunternehmen: **Downhill Pro** und **Telemark**.

Die folgende Baumstruktur stellt Einträge dar, auf die Benutzer Zugriff haben, sobald alle Berechtigungen festgelegt sind:
![Baumstruktur](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6129.png)

### Benutzerkonfiguration
Hier ist ein Beispiel für die Benutzerkonfiguration. Um Benutzer zu erstellen, gehen Sie zu ***Administration*** – ***Benutzer*** – ***Benutzer hinzufügen***.

Hier wählen wir den Benutzertyp aus, um die grundlegenden Berechtigungen zu konfigurieren (***Hinzufügen***, ***Bearbeiten*** und ***Löschen***).

***ServiceDesk***-Benutzer sind ***Eingeschränkte Benutzer***. Diese erhalten die Berechtigungen ***Hinzufügen*** und ***Bearbeiten***. Sie können jedoch keine Einträge auf {{ de.VLT }}-Ebene hinzufügen.
![Benutzerverwaltung – ServiceDesk – Eingeschränkte Benutzer](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6126.png)

***HelpDesk***-Benutzer sind ebenfalls ***Eingeschränkte Benutzer***. Sie erhalten nur die Berechtigung ***Hinzufügen***. Sie können jedoch keine Einträge auf {{ de.VLT }}-Ebene hinzufügen.
![Benutzerverwaltung – HelpDesk – Eingeschränkte Benutzer](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6127.png)

***Consultants*** sind ***Benutzer (Leserechte)*** und können nur einen Teil der Einträge sehen. Sie können nichts hinzufügen oder bearbeiten.

### Konfiguration von Gruppen
Nachdem die Benutzer erstellt sind, fügen wir die Gruppen hinzu, denen wir später die Berechtigungen erteilen werden. Dazu müssen wir Gruppen erstellen und den entsprechenden Benutzer der jeweiligen Gruppe zuweisen. Es ist nicht nötig, diesen Gruppen irgendwelche Rechte zu gewähren, da sie nur als leere Hüllen fungieren, um mehrere Benutzer zu gruppieren. Auf diese Weise können mehrere Benutzer gleichzeitig kontrolliert werden, anstatt jedem Benutzer einzeln Berechtigungen zu erteilen.

* ServiceDesk
* HelpDesk
* Consultants

Um eine Gruppe hinzuzufügen, klicken Sie bitte auf ***Gruppe hinzufügen***, geben einen Namen für die Gruppe ein und klicken auf ***Ok***.

Um Benutzer einer Gruppe zuzuweisen, wählen Sie eine Gruppe und klicken auf Gruppe zuweisen. Verwenden Sie die Kontrollkästchen **Mitglied**, um Benutzer den Gruppen hinzuzufügen.
![Benutzer und Sicherheitsverwaltung – Gruppen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6088.png)

### Konfiguration von Einträgen
Jetzt ist alles bereit, um den Zugriff auf die Gruppen zu gewähren oder zu verweigern.

* Alle Berechtigungen für den Ordner {{ de.VLT }} sind auf ***Niemand*** gesetzt. Durch Vererbung wird damit den untergeordneten Elementen der Standardzugriff auf alles verweigert.
* ServiceDesk hat die Berechtigung, alle Einträge anzuzeigen und zu öffnen, kann aber nur die Einträge in den Gruppen/Ordnern der Kunden bearbeiten.
* HelpDesk hat die Berechtigung, nur Einträge in den Gruppen/Ordnern der Kunden zu sehen und zu öffnen, kann sie aber nicht bearbeiten.
* Consultants haben die Berechtigung, nur die Einträge im Montreal-Ordner zu sehen und zu öffnen, können aber weder diesen noch seine untergeordneten Elemente bearbeiten.

**{{ de.VLT }} Einstellungen** -
wie bereits erwähnt, sind die Berechtigungen für ALLE Einstellungen des {{ de.VLT }} auf ***Niemand*** gesetzt. Dadurch wird der standardmäßige Zugriff für alle Benutzer verweigert.
![{{ de.VLT }} Einstellungen – Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6089.png)

**Windjammer, Downhill Pro und Telemark, die Gruppen/Ordner auf der Tresorebene**
Die Berechtigung zur Einsicht des Ordners „Windjammer“ wird nur für den ServiceDesk festgelegt, da dieser die untergeordneten Einträge verwenden soll. Wir wollen nicht, dass der ServiceDesk etwas hinzufügen, bearbeiten oder löschen kann. Wir lassen die Berechtigungen ***Hinzufügen***, ***Bearbeiten*** und ***Löschen*** auf ***Vererbt***, sodass nur Administratoren diese Aktionen für den Ordner Windjammer und seine untergeordneten Elemente durchführen können.
![Windjammer – Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6131.png)

* ***Anzeigen: Benutzerdefiniert***; ServiceDesk.
* ***Hinzufügen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge hinzufügen.
* ***Bearbeiten: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge bearbeiten.
* ***Löschen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge löschen.
* ***Verschieben: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.
* ***Verbinden (Ausführen): Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können verbinden (ausführen).

Für Downhill Pro erteilen wir Berechtigungen für  ServiceDesk und HelpDesk.
![Downhill Pro – Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6091.png)

* ***Anzeigen: Benutzerdefiniert***; HelpDesk, ServiceDesk.
* ***Hinzufügen: Benutzerdefiniert***; ServiceDesk.
* ***Bearbeiten: Benutzerdefiniert***; ServiceDesk.
* ***Löschen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge löschen.
* ***Verschieben: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.

Wir haben bereits ein gutes Beispiel für die Flexibilität der Sicherheit von {{ de.RDM }}. Benutzer von ServiceDesk und HelpDesk können alle Einträge im Ordner „Downhill Pro“ einsehen und verwenden, sogar die Anmeldeinformationen. Sie können aber kein Passwort einsehen, da sie nicht über die Berechtigung Passwort anzeigen verfügen.

Als Nächstes erteilen wir dem ServiceDesk, dem HelpDesk und den Consultants Berechtigungen für den Ordner „Telemark“. An dieser Stelle wird es kompliziert. Wenn wir wollen, dass die Consultants nur den Ordner „Montreal“ sehen können, der ein untergeordnetes Element des Ordners „Telemark“ ist, müssen wir ihnen die Berechtigung erteilen, den übergeordneten Ordner und damit den gesamten Inhalt von Telemark einzusehen. Dann werden wir die Berechtigungen für untergeordnete Elemente nur der Gruppe gewähren, die Zugriff auf diese Elemente haben soll. Mit diesem letzten Schritt wird den Consultants die Berechtigung zur Ansicht in die untergeordneten Elemente verweigert.
![Telemark – Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6128.png)

* ***Anzeigen: Benutzerdefiniert***; Consultants, HelpDesk, ServiceDesk.
* ***Hinzufügen: Benutzerdefiniert***; ServiceDesk.
* ***Bearbeiten: Benutzerdefiniert***; ServiceDesk.
* ***Löschen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge löschen.
* ***Verschieben: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.

**Telemark untergeordnete Elemente**
Da wir möchten, dass die Benutzer die Anmeldeinformationen verwenden können, gewähren wir dem ServiceDesk und dem HelpDesk die Berechtigung, den Ordner „Anmeldeinformationen“ einzusehen. So können der ServiceDesk und der HelpDesk die Einträge in dem Ordner verwenden, ohne die Passwörter preiszugeben. Indem wir also festlegen, dass nur der HelpDesk und der ServiceDesk die Berechtigung zum Anzeigen haben, verweigern wir allen anderen Gruppen oder Benutzern die Ansicht, die nicht auf der Liste der Berechtigung stehen.

Die Berechtigungen ***Hinzufügen*** und ***Bearbeiten*** sind auf ***Niemand*** eingestellt. Die Berechtigung ***Löschen*** kann auf ***Vererbt*** belassen werden, da sie die Einstellung ***Niemand*** vom {{ de.VLT }} erbt. Nur Administratoren können diese Aktionen in Gruppen /Ordnern mit Anmeldeinformationen durchführen.
![Telemark / Anmeldeinformationen – Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6132.png)

* ***Anzeigen: Benutzerdefiniert***; HelpDesk, ServiceDesk.
* ***Hinzufügen: Niemand***; Nur Administratoren können Einträge hinzufügen.
* ***Bearbeiten: Niemand***; Nur Administratoren können Einträge bearbeiten.
* ***Löschen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge löschen.
* ***Verschieben: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen***: Vererbt; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.
* ***Verbinden (Ausführen): Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können verbinden (ausführen).


Wir möchten, dass der ServiceDesk auch die Anmeldeinformationen des ***Domain-Admin*** verwenden kann, aber nicht der HelpDesk. Dazu müssen wir dem ServiceDesk die Berechtigung ***Anzeigen*** erteilen. Der ServiceDesk kann dann immer noch die Anmeldeinformation verwenden, wird aber niemals das Passwort sehen.
![Telemark / Anmeldeinformationen / Admin – Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6133.png)

* ***Anzeigen: Benutzerdefiniert***; ServiceDesk.
* ***Hinzufügen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Anmeldeinformationen hinzufügen.
* ***Bearbeiten: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Anmeldeinformationen bearbeiten.
* ***Löschen: Vererbt***; Niemand von Telemark\Anmeldeinformationen geerbt. Nur Administratoren können Anmeldeinformationen löschen.
* ***Verschieben: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.
* ***Verbinden (Ausführen): Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können verbinden (ausführen).


Der letzte Schritt für die untergeordneten Elemente des Ordners „Telemark“ besteht darin, die Berechtigung ***Anzeigen*** für den ServiceDesk und den HelpDesk auf den Ordner „Boston“ zu setzen und alle anderen Berechtigungen dieses Ordners auf ***Vererbt*** zu belassen. Dadurch wird den Consultants die Einsicht in den Ordner „Boston“ verweigert. Nun können die Consultants nur Einträge im Ordner „Montreal“ einsehen und öffnen.
![Telemark/Boston – Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6134.png)

* ***Anzeigen: Benutzerdefiniert***; HelpDesk, ServiceDesk.
* ***Hinzufügen: Vererbt***; ServiceDesk geerbt vom Ordner „Telemark“.
* ***Bearbeiten: Vererbt***; ServiceDesk geerbt vom Ordner „Telemark“.
* ***Löschen: Vererbt***; Niemand vom {{ de.VLT }} geerbt.
* ***Passwort anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.


{% snippet, "shieldCaution" %}
Jedes Mal, wenn ein neuer Ordner als Unterordner des Ordners „Telemark“ hinzugefügt wird, muss die Berechtigung ***Anzeigen*** für den ServiceDesk und/oder den HelpDesk gesetzt werden, um den neuen Ordner und seinen Inhalt vor den Consultants zu verbergen.
{% endsnippet %}

Für den Ordner „Montreal“ müssen keine Berechtigungen festgelegt werden, da sie von den übergeordneten Ordnern geerbt werden.
![Telemark/Montreal – Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6135.png)

### Fazit
Die Berechtigungen sind nun korrekt festgelegt. Bitte beachten Sie, dass jeder Eintrag, der auf Tresorebene hinzugefügt wird, auch vom Tresor erbt. Das bedeutet, dass diese nur für Administratoren verfügbar sind, es sei denn, ihre Berechtigungen wurden geändert. Dies bestätigt ein Blick auf den nachstehenden Screenshot, auf dem der Eintrag ***Daily Routine*** für jeden zugänglich ist (seine Berechtigungen wurden auf ***Alle*** geändert). Hier sehen Sie, was jeder Benutzer in der Baumansicht sehen sollte:
![Baumansicht Seite an Seite](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6099.png)

Sie können die Berechtigungen weiter anpassen, indem Sie beim Bearbeiten von Einträgen den Bereich ***Sicherheit*** verwenden. Wie immer muss bei der Vergabe von Berechtigungen große Sorgfalt gewahrt werden.
![Sicherheit](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2258.png)
