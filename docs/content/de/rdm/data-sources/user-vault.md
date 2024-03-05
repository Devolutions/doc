---
eleventyComputed:
  title: "{{ de.UVLT }}"
---
Der {{ de.UVLT }} ist ein benutzerspezifischer {{ de.VLT }} für Einträge aller Art. Dieser erlaubt es Benutzer, Einträge zu erstellen, auf die nur der jeweilige Benutzer Zugriff hat.

{% snippet icon.badgeInfo %}
Der {{ de.UVLT }} ist für alle [Erweiterten Datenquellen](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) verfügbar.
{% endsnippet %}

![Navigationsbereich – {{ de.UVLT }}](https://cdnweb.devolutions.net/docs/de/rdm/windows/clip11205.png)

## Ein Hinweis zu den Anmeldeinformationen

Anmeldeinformationen im {{ de.UVLT }} könne auf zwei Arten verwendet werden:

1. Aus einer Sitzung mit der ***Nach Namen suchen ({{ de.UVLT }})***.
1. Verwendung von [***Benutzerspezifische Einstellungen***](/de/rdm/windows/commands/edit/setting-overrides/specific-settings/).

Diese Einschränkung ergibt sich daraus, dass der {{ de.UVLT }} im Benutzerbereich der Datenbank gespeichert wird. Daher können diese nur direkt aus dem {{ de.UVLT }} oder über die benutzerspezifischen Einstellungen verwendet werden.
