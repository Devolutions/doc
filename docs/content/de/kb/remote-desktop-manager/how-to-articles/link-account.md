---
eleventyComputed:
  title: Benutzerkonten in {{ de.RDMWIN }} verknüpfen
---
Die Funktion ***Verknüpftes Konto*** ermöglicht es Benutzern ein zusätzliches Konto zu verknüpfen. Dies ist von Vorteil, wenn ein Benutzer mehrere Konten gleichzeitig verwalten muss. So kann ein Benutzer beispielsweise über ein Konto mit der E-Mail-Adresse "bob@windjammer.co" verfügen und ein weiteres mit der E-Mail-Adresse "_bob@windjammer.co", das als erhöhtes oder privilegiertes Konto dient.
{% snippet icon.badgeInfo %}
Beide Konten müssen zunächst erstellt werden, bevor sie miteinander verknüpft werden können.
{% endsnippet %}

Der Hauptzweck von ***Verknüpften Konten*** besteht darin, den Bedienkomfort zu erhöhen und die Kontoverwaltung zu optimieren.
{% snippet icon.badgeInfo %}
Für jedes Paar ***Verknüpfter Konten*** wird nur eine Lizenz benötigt.
{% endsnippet %}

## Schritte

1. Melden Sie sich in einer Datenquelle eines ***kleinen Teams*** oder ***Enterprise*** als Administrator an.
1. Gehen Sie in der ***Menüleiste*** zu ***Administration – Benutzer***.
![Administration – Benutzer](https://cdnweb.devolutions.net/docs/de/kb/KB0073.png)
1. Wählen Sie eines der Konten aus, das Sie verknüpfen möchten. Klicken Sie dann auf ***Bearbeiten***.
![Benutzer bearbeiten](https://cdnweb.devolutions.net/docs/de/kb/KB0074.png)
1. Klicken Sie auf ***Verknüpftes Konto*** unter Benutzerverwaltung.
1. Wählen Sie das andere Konto aus der Dropdown-Liste aus.
![Verknüpftes Konto](https://cdnweb.devolutions.net/docs/de/kb/KB0075.png)
1. Klicken Sie auf ***OK***, um die Änderungen zu speichern und das Fenster zu schließen und anschließend auf ***Schließen***.

Die beiden Konten sind jetzt verknüpft. Sie können überprüfen, welche Konten verknüpft sind, indem sie zum Fenster ***Benutzer- und Sicherheitsverwaltung***, unter der Schaltfläche ***Benutzer*** und bis zur Spalte ***Verknüpftes Konto*** scrollen.
{% snippet icon.badgeInfo %}
Bei dieser Funktion gibt es keine primäre oder sekundäre Kontofunktion, d. h. die Reihenfolge, in der die Konten verknüpft sind, spielt keine Rolle. Jedes Konto kann separiert und dann mit einem anderen Konto verknüpft werden.
{% endsnippet %}
{% snippet icon.badgeInfo %}
Um zwischen den beiden verknüpften Konten zu wechseln, empfiehlt es sich, für jeden Benutzer eine entsprechende Datenquelle zu konfigurieren.
{% endsnippet %}
