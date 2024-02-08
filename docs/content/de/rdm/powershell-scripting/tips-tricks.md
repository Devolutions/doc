---
eleventyComputed:
  title: Liste der Eigenschaften für das PowerShell-Skript
---
Oft wird um eine vollständige Liste der Eigenschaften gebeten, aber es ist aus verschiedenen Gründen schwierig, diese zu liefern. Der effektivste Ansatz ist nach wie vor die Untersuchung der XML-Struktur eines relevanten Eintrags, um die Namen und Werte zu ermitteln.  

## Reverse-Engineering der Struktur

1. Erstellen Sie einen Eintrag des gewünschten Typs und fügen Sie nur die obligatorischen Daten hinzu. Klicken Sie auf ***OK***, um den Eintrag zu speichern.
1. Klicken Sie mit der rechten Maustaste auf den Eintrag und wählen Sie ***Zwischenablage – Kopieren***.
1. Wechseln Sie im darauf angezeigten Dialog zur Registerkarte ***Vorschau*** und kopieren Sie die XML-Struktur in eine Textdatei. Dies ist die AUSGANGSVERSION.
1. Nehmen Sie die Änderungen, die mit PowerShell automatisiert werden sollen, manuell vor und speichern Sie den Eintrag.
1. Speichern Sie die geänderte XML-Datei mithilfe von ***Zwischenablage – Kopieren*** in einer anderen Datei. Dies ist die ENDVERSION.
1. Vergleichen Sie die beiden Dateien mit einem Datenvergleichs-Applikation. Die geänderten Felder und die zugewiesenen Werte zeigen an, welche Werte und Optionen im Skript erforderlich sind.  
{% snippet icon.badgeHelp %}
Weitere Informationen zu [{{ de.RDM }} Anmeldeinformationen](/kb/devolutions-powershell/remote-desktop-manager/xml-information/) GUIDs.
{% endsnippet %}

{% snippet icon.badgeHelp %}
Weitere Informationen zu [{{ de.DVLS }} Anmeldeinformationen](/kb/devolutions-powershell/devolutions-server/xml-information/) GUIDs.
{% endsnippet %}

## Tipps und Tricks

* Um Eigenschaften und Pfade zu finden, führen Sie ein Reverse Engineering des Sitzungs-XML-Dateiformats durch. Erstellen Sie eine Beispielsitzung in {{ de.RDM }} und exportieren Sie diesen über das Rechtsklick-Menü ***Exportieren – Auswahl exportieren (.rdm)...***. Öffnen Sie nach dem Export die .rdm-Datei mit einem Editor. Durchsuchen Sie die XML-Struktur, um die Eigenschaften und -werte zu finden.
* Um alle Eigenschaften eines Eintrags aufzulisten, leiten Sie das Sitzungsobjekt an das cmdlet Get-Member weiter.

```powershell
$session = Get-RDMSession -Name "MyRDPSession"  
$session | Get-Member
```
