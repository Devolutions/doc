---
eleventyComputed:
  title: Vereinfachte Sicherheit
---
{% snippet icon.badgeInfo %}
Diese Funktion ist nur in [Erweiterten Datenquellen (EN)](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) verfügbar.
{% endsnippet %}

{% snippet icon.shieldCaution %}
Das folgende Szenario ist für kleine und mittlere Umgebungen konzipiert und für größere Umgebungen nicht zu empfehlen. Für ein Szenario, das eher für große Umgebungen geeignet ist, konsultieren Sie bitte den Artikel [Erweiterte Sicherheit](/de/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/).
{% endsnippet %}

Unser fiktives Unternehmen Windjammer hat vier Gruppen konfiguriert: **HelpDesk**, **ServiceDesk**, **Administratoren** und **Consultants**.
Zudem gibt es zwei Kundenunternehmen: **Downhill Pro** und **Telemark**.

Die folgende Baumstruktur stellt Einträge dar, auf die Benutzer Zugriff haben, sobald alle Berechtigungen festgelegt sind:
![Baumstruktur](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6055.png)

### Benutzerkonfiguration
Hier ist ein Beispiel für die Benutzerkonfiguration. Um Benutzer zu erstellen, gehen Sie zu ***Administration*** – ***Benutzer*** – ***Benutzer hinzufügen***.

Die folgende Auswahl an Berechtigungen ist verfügbar, wenn ein Benutzer als ***Eingeschränkter Benutzer*** festgelegt ist.
![Benutzerverwaltung – Bereich Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6105.png)

***Administratoren***: Administratoren haben einen viel umfangreicheren Zugriff als normale Benutzer. Wenn Sie diese Benutzer erstellen, setzen Sie den Benutzertyp auf Administrator, um ihnen Zugriff auf alles zu gewähren. Der Administrator kann auf alle Einträge zugreifen, unabhängig der Berechtigungen.
![Nutzerverwaltung – Administrator](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6057.png)

***Benutzer***: Benutzer haben weniger Rechte als Administratoren. Sie verfügen im Wesentlichen über alle grundlegenden Rechte (mit Ausnahme von ***Passwort anzeigen***), sind aber von allen verweigerten Berechtigungen betroffen. Später werden wir diese Rechte verweigern, indem wir festlegen, welche Benutzer diese Aktionen tatsächlich durchführen können.

***Consultants***: Consultants können nur den Teil der Einträge einsehen, den wir als ***Schreibgeschützt*** festlegen. Sie können keine Informationen hinzufügen, bearbeiten oder anderweitig verändern.

### Konfiguration von Gruppen
Nachdem die Benutzer erstellt sind, fügen wir die Gruppen hinzu, denen wir später die Berechtigungen erteilen werden. Dazu müssen wir Gruppen erstellen und den entsprechenden Benutzer der jeweiligen Gruppe zuweisen. Es ist nicht nötig, diesen Gruppen irgendwelche Rechte zu gewähren
* ServiceDesk
* HelpDesk
* Consultants
![Benutzer und Sicherheitsverwaltung – Gruppen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6106.png)

### Konfiguration von Einträgen
Jetzt ist alles bereit, um den Zugriff auf die Gruppen zu gewähren oder zu verweigern.

* ServiceDesk hat die Berechtigung, alle Einträge zu sehen und zu öffnen, kann aber nur die Einträge in den Kundengruppen/-ordnern bearbeiten.
* HelpDesk hat nur die Berechtigung, Einträge in den Kundengruppen/-ordnern zu sehen und zu öffnen, kann sie aber nicht bearbeiten.
* Consultants haben die Berechtigung, nur die Einträge im Montreal-Ordner zu sehen und zu öffnen, können aber weder diesen noch seine untergeordneten Elemente bearbeiten.

Wir beginnen mit den Ordnern auf {{ de.VLT }}ebene: Downhill Pro, Telemark und Windjammer.

Die Berechtigung zur Einsicht des Ordners „Windjammer“ wird nur für ServiceDesk festgelegt, da dieser die untergeordneten Einträge verwenden soll. Wir wollen nicht, dass der ServiceDesk etwas hinzufügen oder bearbeiten kann. Wir setzen die Berechtigungen für ***Hinzufügen***, ***Bearbeiten*** und ***Löschen*** auf ***Niemand***. Nur der Administrator ist in der Lage, Einträge im Ordner „Windjammer“ hinzuzufügen oder zu bearbeiten.
![Windjammer - Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6112.png)

* ***Anzeigen: Benutzerdefiniert***; ServiceDesk.
* ***Hinzufügen: Niemand***; Nur Administratoren können Einträge hinzufügen.
* ***Bearbeiten: Niemand***; Nur Administratoren können Einträge bearbeiten.
* ***Löschen: Niemand***; Nur Administratoren können Einträge löschen.
* ***Verschieben: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.

Für Downhill Pro erteilen wir Berechtigungen für ServiceDesk und HelpDesk.
![Downhill Pro - Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6116.png)

* ***Anzeigen: Benutzerdefiniert***; HelpDesk, ServiceDesk.
* ***Hinzufügen: Benutzerdefiniert***; ServiceDesk.
* ***Bearbeiten: Benutzerdefiniert***; ServiceDesk.
* ***Löschen: Niemand***; Nur Administratoren können Einträge löschen.
* ***Verschieben: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.

Wir haben bereits ein gutes Beispiel für die Sicherheit von {{ de.RDM }}. Ein ServiceDesk-Benutzer kann alle Einträge im Ordner „Downhill Pro“ einsehen und verwenden, sogar die Anmeldeinformationen. Er kann aber kein Passwort einsehen, da er nicht über die Berechtigung Passwort anzeigen verfügt.

Als Nächstes werden wir dem ServiceDesk, dem HelpDesk und den Consultants Berechtigungen für den Ordner „Telemark“ erteilen. An dieser Stelle wird es kompliziert. Wenn wir wollen, dass die Consultants nur den Ordner „Montreal“ sehen können, der ein untergeordnetes Element des Ordners „Telemark“ ist, müssen wir ihnen die Berechtigung erteilen, den gesamten Inhalt von Telemark einzusehen. Dann werden wir die Berechtigungen für untergeordnete Elemente nur der Gruppe gewähren, die Zugriff auf diese Elemente haben soll. Mit diesem letzten Schritt wird den Consultants die Berechtigung zur Einsicht in die untergeordneten Elemente verweigert.
![Telemark - Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6110.png)

* ***Anzeigen: Benutzerdefiniert***; Consultants, HelpDesk, ServiceDesk.
* ***Hinzufügen: Benutzerdefiniert***; ServiceDesk.
* ***Bearbeiten: Benutzerdefiniert***; ServiceDesk.
* ***Löschen: Niemand***; Nur Administratoren können Einträge löschen.
* ***Verschieben: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.

Da wir möchten, dass die Benutzer die Anmeldeinformationen verwenden können, gewähren wir dem ServiceDesk und dem HelpDesk die Berechtigung, den Ordner „Anmeldeinformationen“ einzusehen. So können der ServiceDesk und HelpDesk die Einträge in dem Ordner verwenden, ohne die Passwörter preiszugeben. Indem wir also festlegen, dass nur der HelpDesk und der ServiceDesk die Berechtigung zur ***Ansicht*** haben, verweigern wir allen anderen Gruppen oder Benutzern die ***Ansicht***, die nicht in der Liste der Berechtigung stehen.

Die Berechtigungen ***Hinzufügen***, ***Bearbeiten*** und ***Löschen*** können auf ***Vererbt*** belassen werden, da sie die Einstellungen aus dem übergeordneten Ordner „Telemark“ übernehmen. Der ServiceDesk ist die einzige Gruppe, der die Berechtigung ***Hinzufügen*** und ***Bearbeiten*** im übergeordneten Ordner erteilt wurde, wobei die Berechtigung ***Löschen*** die Einstellung ***Niemand*** erbt.
![Telemark/Anmeldeinformationen - Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6115.png)

* ***Anzeigen: Benutzerdefiniert***; HelpDesk, ServiceDesk.
* ***Hinzufügen: Vererbt***; ServiceDesk geerbt vom Ordner „Telemark“.
* ***Bearbeiten: Vererbt***; ServiceDesk geerbt vom Ordner „Telemark“.
* ***Löschen: Vererbt***; ServiceDesk geerbt vom Ordner „Telemark“.
* ***Verschieben: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; Niemand vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.

Wir möchten, dass der ServiceDesk auch die Anmeldeinformationen des ***Domain-Admin*** verwenden kann, aber nicht der HelpDesk. Dazu müssen wir dem ServiceDesk die Berechtigung ***Anzeigen*** erteilen. Der ServiceDesk kann dann immer noch die Anmeldeinformation bearbeiten, wird aber niemals das Passwort sehen. Die Berechtigung Löschen ist auf ***Niemand*** eingestellt.
![Anmeldeinformation Domain-Admin](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6108.png)

Der letzte Schritt für die untergeordneten Elemente des Ordners „Telemark“ besteht darin, die Berechtigung ***Anzeigen*** für den ServiceDesk und den HelpDesk auf den Ordner „Boston“ zu setzen und alle anderen Berechtigungen dieses Ordners auf ***Vererbt*** zu belassen. Dadurch wird den Consultants die Einsicht in den Ordner „Boston“ verweigert. Nun können die Consultants nur Einträge im Ordner „Montreal“ einsehen und öffnen.
![Telemark/Boston - Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6109.png)

{% snippet icon.shieldCaution %}
Jedes Mal, wenn ein neuer Ordner hinzugefügt wird, muss die Berechtigung ***Anzeigen*** für den ServiceDesk und den HelpDesk gesetzt werden, um den neuen Ordner und seinen Inhalt vor den Consultants zu verbergen.
{% endsnippet %}

Für den Ordner „Montreal“ müssen keine Berechtigungen festgelegt werden, da sie von den übergeordneten Ordnern geerbt werden.
![Telemark/Montreal - Berechtigungen](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6120.png)

### Fazit
Die Berechtigungen sind nun korrekt festgelegt. Beachten Sie bitte, dass jeder Eintrag, der auf {{ de.VLT }} hinzugefügt wird, standardmäßig keine Sicherheit hat. Das bedeutet, dass diese für jeden zugänglich sind, auch für Consultants. Dies bestätigt ein Blick auf den nachstehenden Screenshot, auf dem der Eintrag ***Daily Routine*** für jeden zugänglich ist. Hier sehen Sie, was jeder Benutzer in der Baumansicht sehen sollte:
![Baumansicht - Seite an Seite](https://cdnweb.devolutions.net/docs/de/rdm/windows/RDMWin6065.png)

Sie können die Berechtigungen weiter anpassen, indem Sie beim Bearbeiten von Einträgen den Bereich ***Sicherheit*** verwenden. Wie immer muss bei der Vergabe von Berechtigungen große Sorgfalt gewahrt werden.
![Sicherheit](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2258.png)
