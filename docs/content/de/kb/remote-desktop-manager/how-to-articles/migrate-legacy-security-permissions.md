---
eleventyComputed:
  title: Deaktivieren des veralteten Sicherheitskonzept in {{ de.RDM }}
---
{% snippet, "badgeWarning" %}
Sicherheitsgruppen sind seit {{ de.RDM }} Version 2023.3 veraltet.
In diesem Beitrag wird beschreiben, wie das alte Sicherheitssystem deaktiviert wird.

Vor dem Deaktivieren stellen sie bitte Sicher, dass zuvor die Berechtigungen migriert wurden: [Migration von Sicherheitsgruppen zu Gruppen](/de/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}

Befolgen Sie folgende Schritte, um das ***veraltete Sicherheitskonzept*** zu deaktivieren.

1. Gehen Sie im {{ de.RDM }} zur Registerkarte ***Administration***.
1. Wählen Sie unter ***Einstellungen*** die Option ***System Einstellungen***.
![Administration – System Einstellungen](https://cdnweb.devolutions.net/docs/de/kb/KB0026.png)
1. Gehen Sie zu ***{{ de.VLT }} Verwaltung – Sicherheit*** und deaktivieren Sie ***Alte Sicherheit verwenden***.
![Alte Sicherheit verwenden](https://cdnweb.devolutions.net/docs/de/kb/KB0027.png)
1. Klicken Sie auf ***OK***, um die Änderungen zu übernehmen und das Fenster zu schließen.
