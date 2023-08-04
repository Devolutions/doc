---
title: Aktualisierung der Datenbank
---
Dieser Artikel bezieht sich auf Installationen mit Datenquellen, die eine Datenbank als Datenspeicher verwenden.  

Bei einigen Versionen von {{ de.RDM }} muss die Struktur der Datenbank geändert werden. Diese Änderungen werden automatisch durchgeführt, aber es ist ratsam, vorher ein Backup Ihrer Datenquelle zu erstellen. Wenn Sie in einem Teamumfeld arbeiten, müssen Sie außerdem der einzige Nutzer sein, der während der Aktualisierung mit der Datenbank verbunden ist.  

{% snippet icon.badgeWarning %} 
Der Nutzer, der die Aktualisierung durchführt, muss über administrative Rechte für die zugrunde liegende Datenbank verfügen. (SYSDBA oder DB_OWNER). 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Führen Sie ein Back-up der Datenbank durch und stellen Sie sicher, dass Sie bei Bedarf schnell eine Wiederherstellung durchführen können. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Wenn Ihr Unternehmen einen Lese-/Schreib-Offline-Cache zulässt, stellen Sie sicher, dass alle Ihre Nutzer ihre Offline-Bearbeitungen zusammengeführt haben. 
{% endsnippet %}
 
## Schritte 

Zur erfolgreichen Aktualisierung Ihrer Version befolgen Sie bitte diese Schritte:  

1. Stellen Sie sicher, dass Sie während der Aktualisierung der einzige Nutzer der Datenbank sind. Wenn Ihre Umgebung eine Offline-Nutzung zulässt, lassen Sie Ihr Team in den Offline-Modus oder zu einer anderen Datenquelle wechseln. 
1. Erstellen Sie mit den Datenbank-Tools eine Sicherungskopie Ihrer Datenbank. 
1. Installieren Sie die gewünschte Version von {{ de.RDM }}. Wenn Sie dies auf Ihrem eigenen Rechner tun, kann die Verwendung des [Portable (USB)](/rdm/windows/installation/client/portable-usb/)-Bereitstellungsmodells wünschenswert sein. 
1. Öffnen Sie {{ de.RDM }}, während Sie als Nutzer mit Administratorrechten angemeldet sind. Sie müssen auch SYSDBA oder DB_OWNER sein. 
1. Möglicherweise erhalten Sie beim Zugriff auf Ihre Datenquelle eine Aktualisierungs-Meldung. Akzeptieren Sie in diesem Fall die Aktualisierung.  
oder  
lokalisieren Sie über ***Datei – Datenquellen*** Ihre zu aktualisierende Datenquelle und öffnen deren Eigenschaftsfenster. Wechseln Sie auf die Registerkarte ***Upgrade*** und klicken Sie dann auf ***Datenbank aktualisieren***.  

6. Warten Sie auf eine Bestätigungsmeldung. 
1. Schließen Sie das Dialogfeld. 
1. Vergewissern Sie sich, dass Ihr {{ de.RDM }} aktuell diese Datenquelle verwendet. 
1. Drücken Sie Strg+F5, um eine vollständige Aktualisierung zu erzwingen. 
1. Prüfen Sie den Inhalt und die Technologien, die in Ihrer Umgebung von entscheidender Bedeutung sind. 
1. Aktualisieren Sie die Kundensoftware auf allen Rechnern. 

