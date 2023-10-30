---
eleventyComputed:
  title: Vereinfachte Sicherheit
---
{% snippet icon.badgeInfo %}
Diese Funktion ist nur verfügbar bei Gebrauch [Erweiterten Datenquelle](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet icon.shieldCaution %}
Das folgende Szenario ist für kleine und mittlere Unternehmen konzipiert und für größere Unternehmen nicht zu empfehlen. Für ein Szenario, das eher für große Unternehmen geeignet ist, konsultieren Sie bitte den Artikel [Erweiterte Sicherheit](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/) scenario.
{% endsnippet %}

Unser fiktives Unternehmen Windjammer hat vier Nutzergruppen: HelpDesk, ServiceDesk, Administratoren und Berater. Es gibt zwei Kundenunternehmen: Downhill Pro und Telemark.  

Die folgende Baumstruktur stellt Einträge dar, auf die Benutzer Zugriff haben, sobald alle Berechtigungen festgelegt sind:  
![Baumstruktur](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6055.png)

### Konfiguration von Nutzern
Hier ist ein Beispiel für die Benutzer-Konfiguration. Um Benutzer zu erstellen, gehen Sie zu ***Verwaltung*** – ***Benutzer*** – ***Benutzer hinzufügen***.  

Die folgende Auswahl an Berechtigungen ist verfügbar, wenn ein Benutzer als ***Eingeschränkter Benutzer*** festgelegt ist.  
![Benutzerverwaltung – Bereich Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6105.png)

***Administratoren***: Administratoren haben einen viel umfangreicheren Zugriff als normale Benutzer. Wenn Sie diese Benutzer erstellen, setzen Sie den Nutzertyp auf Administrator, um ihnen Zugriff auf alles zu gewähren. Der Administrator kann auf alle Einträge zugreifen, unabhängig der Berechtigungen.  
![Nutzerverwaltung – Administrator](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6057.png)

***Normale Benutzer (Benutzer)***: Dies Benutzer haben weniger Rechte als Administratoren. Sie verfügen im Wesentlichen über alle grundlegenden Rechte (mit Ausnahme von ***Passwort anzeigen***), sind aber von allen verweigerten Berechtigungen betroffen. Später werden wir diese Rechte verweigern, indem wir festlegen, welche Benutzer diese Aktionen tatsächlich durchführen können.  

***Berater***: Berater können nur den Teil der Einträge einsehen, den wir als ***Schreibgeschützt*** festlegen. Sie können keine Informationen hinzufügen, bearbeiten oder anderweitig verändern.  

### Konfiguration von Benutzergruppen
Nachdem die Benutzer erstellt sind, fügen wir die Nutzergruppen hinzu, denen wir später die Berechtigungen erteilen werden. Wir müssen die Nutzergruppen erstellen, um ihnen Benutzer zuzuweisen. Es ist nicht nötig, diesen Benutzergruppen irgendwelche Rechte zu gewähren.
* ServiceDesk
* HelpDesk
* Berater  
![Verwaltung von Nutzern und Sicherheit – Benutzergruppen](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6106.png) 

### Konfiguration von Einträgen
Jetzt ist alles bereit, um den Zugriff auf die Nutzergruppen zu gewähren oder zu verweigern.  

* Der ServiceDesk hat die Berechtigung, alle Einträge zu sehen und zu öffnen, kann aber nur die Einträge in den Kundengruppen/-ordnern bearbeiten.
* Der HelpDesk hat nur die Berechtigung, Einträge in den Kundengruppen/-ordnern zu sehen und zu öffnen, kann sie aber nicht bearbeiten.
* Die Berater haben die Berechtigung, nur die Einträge im Montreal-Ordner zu sehen und zu öffnen, können aber weder diesen noch seine untergeordneten Elemente bearbeiten.  

Wir beginnen mit den {{ de.VLT }}-Ebenen-Ordnern: Downhill Pro, Telemark und Windjammer.  

Die Berechtigung zur Einsicht des Ordners „Windjammer“ wird nur für den ServiceDesk festgelegt, da dieser die untergeordneten Einträge verwenden soll. Wir wollen nicht, dass der ServiceDesk etwas hinzufügen oder bearbeiten kann. Wir setzen die Berechtigungen für ***Hinzufügen***, ***Bearbeiten*** und ***Löschen*** auf ***Nie***. Nur der Administrator ist in der Lage, Einträge im Ordner „Windjammer“ hinzuzufügen oder zu bearbeiten.  
![Windjammer - Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6112.png)

* ***Ansicht: Nutzerdefiniert***; ServiceDesk.
* ***Hinzufügen: Nie***; nur der Administrator kann Einträge hinzufügen.
* ***Bearbeiten: Nie***; nur der Administrator kann Einträge bearbeiten.
* ***Löschen: Nie***; nur der Administrator kann Einträge löschen.
* ***Verschieben: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.

Für Downhill Pro erteilen wir Berechtigungen für den ServiceDesk und den HelpDesk.  
![Downhill Pro - Berechtigungen](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6116.png) 

* ***Ansicht: Nutzerdefiniert***; HelpDesk, ServiceDesk.
* ***Hinzufügen: Nutzerdefiniert***; ServiceDesk.
* ***Bearbeiten: Nutzerdefiniert***; ServiceDesk.
* ***Löschen: Nie***; nur der Administrator kann Einträge löschen.
* ***Verschieben: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können Einträge verschieben.
* ***Passwort anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können das Passwort einsehen.
* ***Vertrauliche Informationen anzeigen: Vererbt***; nie vom {{ de.VLT }} geerbt. Nur Administratoren können vertrauliche Informationen einsehen.

Wir haben bereits ein gutes Beispiel für die Sicherheit von {{ de.RDM }}. Ein ServiceDesk-Nutzer kann alle Einträge im Ordner „Downhill Pro“ einsehen und verwenden, sogar die Anmeldeinformationen. Aber er kann niemals ein Passwort einsehen, da „Passwort anzeigen“ (aus dem Ordner „{{ de.VLT }}“) nicht zulässig ist.  

Next, for the Telemark folder, we will grant permissions to the ServiceDesk, the HelpDesk and the Consultants. This is where things get complex. If we want the Consultants to be able to view only the Montreal folder which is a child item of Telemark, we must grant to consultants the permission to view the entire Telemark content. Then we will grant permissions on child items only to the user group that should have access to these items. This last step will deny the view permission for the consultants on the child items.  
![Telemark - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6110.png)

* ***View: Custom***; Consultants, HelpDesk, ServiceDesk.
* ***Add: Custom***; ServiceDesk.
* ***Edit: Custom***; ServiceDesk.
* ***Delete: Never***; Only the administrator can delete entries.
* ***Move: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can move entries.
* ***View password: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view password.
* ***View sensitive information: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view sensitive information.

Since we want the users to be able to use the credential entries, we will grant the ServiceDesk and the HelpDesk the permission to view the Credentials folder. This way, the ServiceDesk and HelpDesk will be able to use the entries in the folder without revealing the passwords. Therefore, by specifying that only the HelpDesk and ServiceDesk have the ***View*** permission, we deny the view access to any user group or user that is not in the list of the permission.  

The ***Add***, ***Edit***, and ***Delete*** permissions can be left to ***Inherited*** since they inherit the settings from the Telemark parent folder. The ServiceDesk is the only user group that has been granted the ***Add*** and ***Edit*** permission in the parent folder and the ***Delete*** permission inherits the Never setting.  
![Telemark/Credentials - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6115.png) 

* ***View: Custom***; HelpDesk, ServiceDesk.
* ***Add: Inherited***; ServiceDesk inherited from Telemark folder.
* ***Edit: Inherited***; ServiceDesk inherited from Telemark folder.
* ***Delete: Inherited***; Never inherited from Telemark folder.
* ***Move: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can move entries.
* ***View password: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view password.
* ***View sensitive information: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view sensitive information.

We want the ServiceDesk to be able to use the Domain Admin credential entry as well but not the HelpDesk. For this we must grant the ***View*** permission to the ServiceDesk. The ServiceDesk will still be able to edit the credential entry but will never see the password. The delete permission is set to ***Never***.  
![Domain Admin credential entry](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6108.png)

The last step for the Telemark child items is to set the ***View*** permission to the ServiceDesk and the HelpDesk on the Boston folder and leave every other permission of this folder to ***Inherited***. This denies the Consultants to view the Boston folder. Now, the Consultants will be able to view and open entries only in the Montreal folder.  
![Telemark/Boston - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6109.png)

{% snippet icon.shieldCaution %}
Every time a new folder is added, the ***View*** permission must be set for ServiceDesk and HelpDesk to hide the new folder and its content from the Consultants.
{% endsnippet %}

No need to set any permissions on the Montreal folder, since they are inherited from the parent folders.  
![Telemark/Montreal - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6120.png)

### In Conclusion
The permissions are now correctly set. Note that every entry added at {{ en.VLT }} level will have no security by default. This means they would be available for anyone, even the consultants. This can be confirmed by looking at the screenshot below in which the entry ***Daily routine*** is available for everyone. Here is what each user should see in the tree view:  
![Side by Side Tree View](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6065.png)

You can further customize your permissions by using the ***Security Settings*** tab when editing entries, or the ***Logs*** tab to add more traces of coming and goings. As always, great care must be taken when granting permissions.
