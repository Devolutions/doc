---
title: Liste der Eigenschaftsnamen für das PowerShell-Skript
---
Wir werden oft um eine vollständige Liste der Eigenschaftsnamen gebeten, aber es ist aus verschiedenen Gründen schwierig, diese zu liefern. Der effektivste Ansatz ist nach wie vor die Untersuchung der XML-Struktur eines relevanten Eintrags, um die Feldnamen zu ermitteln.  

## Reverse-Engineering einer Eintragsstruktur

1. Erstellen Sie einen Eintrag des gewünschten Typs, fügen Sie zu diesem Zeitpunkt nur die obligatorischen Daten hinzu. Klicken Sie auf ***OK***, um den Eintrag zu speichern.
1. Klicken Sie mit der rechten Maustaste auf den Eintrag und wählen Sie ***Zwischenablage – Kopieren***.
1. Wechseln Sie im darauf angezeigten Dialog zur Registerkarte ***Vorschau*** und kopieren Sie die XML-Struktur in eine Textdatei. Dies ist die AUSGANGSVERSION.
1. Nehmen Sie die Änderungen, die mit PowerShell automatisiert werden sollen, manuell vor und speichern Sie den Eintrag.
1. Speichern Sie die geänderte XML-Datei mithilfe von ***Zwischenablage – Kopieren*** in einer anderen Datei. Dies ist die ENDVERSION.
1. Vergleichen Sie die beiden Dateien mit einem Datenvergleichs-Tool. Die geänderten Felder und die zugewiesenen Werte zeigen an, was das Skript tun soll.  
{% snippet icon.badgeHelp %}
Mehr erfahren [{{ de.RDM }} Anmeldedaten GUID](/kb/devolutions-powershell/remote-desktop-manager/xml-information/).
{% endsnippet %}

{% snippet icon.badgeHelp %}
Mehr erfahren [{{ de.DVLS }} Anmeldedaten GUID](/kb/devolutions-powershell/devolutions-server/xml-information/).
{% endsnippet %}

## Tipps und tricks

* To find properties and paths, reverse engineer the session XML file format. Create a sample session in {{ de.RDM }} and export it using the right click menu ***Import/Export – Export Session (.rdm)***. Once exported, open the .rdm file with an editor. Browse the XML structure to find the property path and name.
* To list all properties of an entry, pipe the session object to Get-Member cmdlet.

```powershell
$session = Get-RDMSession -Name "MyRDPSession"  
$session | Get-Member
```

* Use the AddDataEntryKind method to set the data entry type to Web.
