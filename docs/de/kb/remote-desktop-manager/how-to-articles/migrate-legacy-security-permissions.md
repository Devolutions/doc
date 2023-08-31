---
eleventyComputed:
  title: Im {{ de.RDM }} vom veralteten Sicherheitssystem zu Berechtigungen wechseln
---
{% snippet icon.badgeWarning %}
Sicherheitsgruppen sind ab der Version 2023.3 von {{ de.RDM }} veraltet.
In diesem Beitrag wird dargelegt, wie man im {{ de.RDM }} sicher vom alten Sicherheitssystem zu Berechtigungen wechselt.  

Vor dem Wechsel vom alten Sicherheitssystem ist es ratsam, zunächst auch die Nutzergruppen zu konfigurieren. Erfahren Sie mehr darüber in [Wechsel von Sicherheitsgruppen zu Nutzergruppen](/de/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}  

Befolgen Sie diese Schritte, um sicher von der ***veralteten Sicherheitssystem*** zu ***Berechtigungen*** im {{ de.RDM }}er zu migrieren.

1. Gehen Sie im {{ de.RDM }} zur Registerkarte  ***Administration***.
1. Wählen Sie unter ***Einstellungen*** die Option ***Systemeinstellungen***.  
![Administration – Systemeinstellungen](https://webdevolutions.azureedge.net/docs/de/kb/KB0026.png)
1. Gehen Sie zu ***{{ de.VLT }}verwaltung – Sicherheitseinstellungen – Sicherheit*** und deaktivieren Sie ***Altes Sicherheitssystem verwenden***.  
![Altes Sicherheitssystem verwenden](https://webdevolutions.azureedge.net/docs/de/kb/KB0027.png)
1. Klicken Sie auf ***OK***, um die Änderungen zu übernehmen und das Fenster zu schließen.
