---
eleventyComputed:
  title: Aktualisierung der Datenbank
---
Dieser Artikel bezieht sich auf Installationen, die eine Datenbank als Datenquelle verwenden.  

Bei einigen {{ de.RDM }} Versionen muss die Struktur der Datenbank geändert werden. Diese Änderungen werden automatisch durchgeführt, aber es ist ratsam, vorher eine Sicherung Ihrer Datenquelle zu erstellen. Wenn Sie im Team arbeiten, dürfen keine weiteren Benutzer während der Aktualisierung mit der Datenbank verbunden sein.  

{% snippet icon.badgeWarning %} 
Der Benutzer, der die Aktualisierung durchführt, muss über administrative Rechte für die Datenbank verfügen. (SYSDBA oder DB_OWNER). 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Erstellen Sie eine Sicherung der Datenbank und stellen Sie sicher, dass Sie diese bei Bedarf schnell wiederherstellen können. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Wenn Lese-/Schreibzugriff für den Offline-Cache konfiguriert ist, stellen Sie sicher, dass alle Benutzer ihre Offline Änderungen synchronisiert haben. 
{% endsnippet %}
 
## Schritte 

Für eine erfolgreichen Aktualisierung befolgen Sie bitte folgende Schritte:  

1. Stellen Sie sicher, dass Sie während der Aktualisierung der einzige Benutzer sind, der die Datenbank verwendet. Wenn der Offline Modus aktiviert ist, weisen  Sie Ihr Team an in den Offline Modus- oder zu einer anderen Datenquelle zu wechseln. 
1. Erstellen Sie eine Sicherung Ihrer Datenbank. 
1. Installieren Sie die gewünschte {{ de.RDM }} Version. Wenn Sie den Vorgang auf Ihrem eigenen Rechner durchführen, kann auch die [Portable (USB)](/de/rdm/windows/installation/client/portable-usb/) Version verwendet werden. 
1. Öffnen Sie {{ de.RDM }}, mit einem administrativen Konto, der zudem auch über SYSDBA oder DB_OWNER Rechte auf der Datenbank verfügt. 
1. Möglicherweise erhalten Sie beim Zugriff auf Ihre Datenquelle eine Aufforderung zur Aktualisierung - diese Sie bestätigen können.  
oder  
Wählen Sie über ***Datei – Datenquellen*** Ihre zu aktualisierende Datenquelle und öffnen deren Eigenschaften. Wechseln Sie auf die Registerkarte ***Upgrade*** und klicken Sie auf ***Datenbank aktualisieren***.  

6. Warten Sie auf eine Bestätigungsmeldung. 
1. Schließen Sie das Dialogfeld. 
1. Vergewissern Sie sich, dass {{ de.RDM }} die gerade aktualisierte Datenquelle verwendet. 
1. Drücken Sie <kbd>Strg</kbd>+<kbd>F5</kbd>, um eine vollständige Aktualisierung zu erzwingen. 
1. Überpüfen Sie den Inhalt und die Technologien (VPN etc.), die in Ihrer Umgebung einen hohen Stellenwert haben.
1. Aktualisieren Sie die {{ de.RDM }} auf allen anderen Rechnern. 
