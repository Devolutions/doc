---
eleventyComputed:
  title: Vereinfachte Sicherheit
---
{% snippet icon.badgeInfo %}
Diese Funktion ist nur verfügbar bei Gebrauch [Erweiterten Datenquelle](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet icon.shieldCaution %}
Das folgende Szenario ist für kleine und mittlere Unternehmen konzipiert und für größere Unternehmen nicht zu empfehlen. Für ein Szenario, das eher für große Unternehmen geeignet ist, konsultieren Sie bitte den Artikel [Erweiterte Sicherheit](/de/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/) scenario.
{% endsnippet %}

Unser fiktives Unternehmen Windjammer hat vier Nutzergruppen: HelpDesk, ServiceDesk, Administratoren und Berater. Es gibt zwei Kundenunternehmen: Downhill Pro und Telemark.  

Die folgende Baumstruktur stellt Einträge dar, auf die Benutzer Zugriff haben, sobald alle Berechtigungen festgelegt sind:  
![Baumstruktur](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6055.png)

### Konfiguration von Nutzern
Hier ist ein Beispiel für die Benutzer-Konfiguration. Um Benutzer zu erstellen, gehen Sie zu ***Verwaltung*** – ***Benutzer*** – ***Benutzer hinzufügen***.  

Die folgende Auswahl an Berechtigungen ist verfügbar, wenn ein Benutzer als ***Eingeschränkter Benutzer*** festgelegt ist.  
![Benutzerverwaltung – Bereich Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6105.png)

***Administratoren***: Administratoren haben einen viel umfangreicheren Zugriff als normale Benutzer. Wenn Sie diese Benutzer erstellen, setzen Sie den Nutzertyp auf Administrator, um ihnen Zugriff auf alles zu gewähren. Der Administrator kann auf alle Einträge zugreifen, unabhängig der Berechtigungen.  
![Nutzerverwaltung – Administrator](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6057.png)

***Normale Benutzer (Benutzer)***: Dies Benutzer haben weniger Rechte als Administratoren. Sie verfügen im Wesentlichen über alle grundlegenden Rechte (mit Ausnahme von ***Passwort anzeigen***), sind aber von allen verweigerten Berechtigungen betroffen. Später werden wir diese Rechte verweigern, indem wir festlegen, welche Benutzer diese Aktionen tatsächlich durchführen können.  

***Berater***: Berater können nur den Teil der Einträge einsehen, den wir als ***Schreibgeschützt*** festlegen. Sie können keine Informationen hinzufügen, bearbeiten oder anderweitig verändern.  

### Konfiguration von Benutzergruppen
Nachdem die Benutzer erstellt sind, fügen wir die Nutzergruppen hinzu, denen wir später die Berechtigungen erteilen werden. Wir müssen die Nutzergruppen erstellen, um ihnen Benutzer zuzuweisen. Es ist nicht nötig, diesen Benutzergruppen irgendwelche Rechte zu gewähren.
* ServiceDesk
* HelpDesk
* Berater  
![Verwaltung von Nutzern und Sicherheit – Benutzergruppen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6106.png) 

### Konfiguration von Einträgen
Jetzt ist alles bereit, um den Zugriff auf die Nutzergruppen zu gewähren oder zu verweigern.  

* Der ServiceDesk hat die Berechtigung, alle Einträge zu sehen und zu öffnen, kann aber nur die Einträge in den Kundengruppen/-ordnern bearbeiten.
* Der HelpDesk hat nur die Berechtigung, Einträge in den Kundengruppen/-ordnern zu sehen und zu öffnen, kann sie aber nicht bearbeiten.
* Die Berater haben die Berechtigung, nur die Einträge im Montreal-Ordner zu sehen und zu öffnen, können aber weder diesen noch seine untergeordneten Elemente bearbeiten.  

Wir beginnen mit den {{ de.VLT }}-Ebenen-Ordnern: Downhill Pro, Telemark und Windjammer.  

Die Berechtigung zur Einsicht des Ordners „Windjammer“ wird nur für den ServiceDesk festgelegt, da dieser die untergeordneten Einträge verwenden soll. Wir wollen nicht, dass der ServiceDesk etwas hinzufügen oder bearbeiten kann. Wir setzen die Berechtigungen für ***Hinzufügen***, ***Bearbeiten*** und ***Löschen*** auf ***Nie***. Nur der Administrator ist in der Lage, Einträge im Ordner „Windjammer“ hinzuzufügen oder zu bearbeiten.  
![Windjammer - Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6112.png)

* ***Ansicht: Nutzerdefiniert***; ServiceDesk.
* ***Hinzufügen: Nie***; nur der Administrator kann Einträge hinzufügen.
* ***Bearbeiten: Nie***; nur der Administrator kann Einträge bearbeiten.
* ***Löschen: Nie***; nur der Administrator kann Einträge löschen.
* ***Verschieben: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.

Für Downhill Pro erteilen wir Berechtigungen für den ServiceDesk und den HelpDesk.  
![Downhill Pro - Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6116.png) 

* ***Ansicht: Nutzerdefiniert***; HelpDesk, ServiceDesk.
* ***Hinzufügen: Nutzerdefiniert***; ServiceDesk.
* ***Bearbeiten: Nutzerdefiniert***; ServiceDesk.
* ***Löschen: Nie***; nur der Administrator kann Einträge löschen.
* ***Verschieben: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.

Wir haben bereits ein gutes Beispiel für die Sicherheit von {{ de.RDM }}. Ein ServiceDesk-Nutzer kann alle Einträge im Ordner „Downhill Pro“ einsehen und verwenden, sogar die Anmeldeinformationen. Aber er kann niemals ein Passwort einsehen, da „Passwort anzeigen“ (aus dem Ordner „{{ de.VLT }}“) nicht zulässig ist.  

Als Nächstes werden wir dem ServiceDesk, dem HelpDesk und den Beratern Berechtigungen für den Ordner „Telemark“ erteilen. An dieser Stelle wird es kompliziert. Wenn wir wollen, dass die Berater nur den Ordner „Montreal“ sehen können, der ein untergeordnetes Element des Ordners „Telemark“ ist, müssen wir ihnen die Berechtigung erteilen, den gesamten Inhalt von Telemark einzusehen. Dann werden wir die Berechtigungen für untergeordnete Elemente nur der Nutzergruppe gewähren, die Zugriff auf diese Elemente haben soll. Mit diesem letzten Schritt wird den Beratern die Berechtigung zur Einsicht in die untergeordneten Elemente verweigert.  
![Telemark - Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6110.png)

* ***Ansicht: Nutzerdefiniert***; Berater, HelpDesk, ServiceDesk.
* ***Hinzufügen: Nutzerdefiniert***; ServiceDesk.
* ***Bearbeiten: Nutzerdefiniert***; ServiceDesk.
* ***Löschen: Nie***; nur der Administrator kann Einträge löschen.
* ***Verschieben: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.

Da wir möchten, dass die Benutzer die Anmeldeinformationen verwenden können, gewähren wir dem ServiceDesk und dem HelpDesk die Berechtigung, den Ordner „Anmeldeinformationen“ einzusehen. So können der ServiceDesk und der HelpDesk die Einträge in dem Ordner verwenden, ohne die Passwörter preiszugeben. Indem wir also festlegen, dass nur der HelpDesk und der ServiceDesk die Berechtigung zur ***Einsicht*** haben, verweigern wir allen anderen Nutzergruppen oder Nutzern die ***Einsicht***, die nicht in der Liste der Berechtigung stehen.  

Die Berechtigungen ***Hinzufügen***, ***Bearbeiten*** und ***Löschen*** können auf ***Vererbt*** belassen werden, da sie die Einstellungen aus dem übergeordneten Ordner „Telemark“ übernehmen. Der ServiceDesk ist die einzige Nutzergruppe, der die Berechtigung ***Hinzufügen*** und ***Bearbeiten*** im übergeordneten Ordner erteilt wurde, wobei die Berechtigung ***Löschen*** die Einstellung ***Nie*** erbt.  
![Telemark/Anmeldeinformationen - Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6115.png) 

* ***Ansicht: Nutzerdefiniert***; HelpDesk, ServiceDesk.
* ***Hinzufügen: Vererbt***; ServiceDesk geerbt vom Ordner „Telemark“.
* ***Bearbeiten: Vererbt***; ServiceDesk geerbt vom Ordner „Telemark“.
* ***Löschen: Vererbt***; ServiceDesk geerbt vom Ordner „Telemark“.
* ***Verschieben: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.

Wir möchten, dass der ServiceDesk auch die Anmeldeeingaben des Domain-Administrators verwenden kann, aber nicht der HelpDesk. Dazu müssen wir dem ServiceDesk die Berechtigung zur ***Ansicht*** erteilen. Der ServiceDesk kann dann immer noch die Anmeldeeingaben bearbeiten, wird aber niemals das Passwort sehen. Die Berechtigung Löschen ist auf ***Nie*** eingestellt.  
![Anmeldeeingaben Domain-Administrator](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6108.png)

Der letzte Schritt für die untergeordneten Elemente des Ordners „Telemark“ besteht darin, die Berechtigung ***Ansicht*** für den ServiceDesk und den HelpDesk auf den Ordner „Boston“ zu setzen und alle anderen Berechtigungen dieses Ordners auf ***Vererbt*** zu belassen. Dadurch wird den Beratern die Einsicht in den Ordner „Boston“ verweigert. Nun können die Berater nur Einträge im Ordner „Montreal“ einsehen und öffnen.  
![Telemark/Boston - Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6109.png)

{% snippet icon.shieldCaution %}
Jedes Mal, wenn ein neuer Ordner hinzugefügt wird, muss die Berechtigung ***Ansicht*** für den ServiceDesk und den HelpDesk gesetzt werden, um den neuen Ordner und seinen Inhalt vor den Beratern zu verbergen.
{% endsnippet %}

Für den Ordner „Montreal“ müssen keine Berechtigungen festgelegt werden, da sie von den übergeordneten Ordnern geerbt werden.  
![Telemark/Montreal - Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6120.png)

### In Conclusion
Die Berechtigungen sind nun korrekt festgelegt. Beachten Sie bitte, dass jeder Eintrag, der auf {{ de.VLT }} hinzugefügt wird, standardmäßig keine Sicherheit hat. Das bedeutet, dass diese für jeden zugänglich sind, auch für Berater. Dies bestätigt ein Blick auf den nachstehenden Screenshot, auf dem die der Eintrag ***Tägliche Routine*** für jeden zugänglich ist. Hier sehen Sie, was jeder Nutzer in der Baumansicht sehen sollte:  
![Baumansicht - Seite an Seite](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6065.png)

Sie können Ihre Berechtigungen weiter anpassen, indem Sie bei der Bearbeitung von Einträgen die Registerkarten ***Sicherheitseinstellungen*** oder ***Protokolle*** verwenden, um weitere Spuren des Kommens und Gehens hinzuzufügen. Wie immer muss bei der Vergabe von Berechtigungen große Sorgfalt gewahrt werden.
