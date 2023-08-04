---
title: Installationsanforderungen
---
Im Folgenden wird beschrieben, was Sie vor der Installation von {{ de.DVLS }} installieren müssen.  

Bitte kontaktieren Sie uns unter [service@devolutions.net](mailto:service@devolutions.net), um eine Sitzung zu buchen, in der wir Ihnen helfen, {{ de.DVLS }} zu installieren.  

## Schritte

1. SQL Server ist bereits verfügbar (Express Edition wird unterstützt). Die unterstützten SQL Server-Versionen finden Sie unter [Systemanforderungen](/server/overview/system-requirements/). 
1. Falls nicht, installieren Sie SQL Server und SQL Server Management Studio. 
1. IIS Manager ist bereits auf dem Server installiert, auf dem {{ de.DVLS }} gehostet wird. Die unterstützten SQL IIS Manager-Versionen finden Sie unter [Systemanforderungen](/server/overview/system-requirements/). 
1. Die {{ de.DVLSCONSOLE }} kann [hier](https://server.devolutions.net/home/download) heruntergeladen werden. 
1. Die [Voraussetzungen für {{ de.DVLS }}](/server/installation/installing-web-server-prerequisites/) sind bereits installiert. 
1. Devolutions kann mehrere Konten verwenden, um für die verschiedenen Komponenten eine Verbindung zur Datenbank herzustellen. Diese Konten können Domain-Dienstkonten (integrierte Sicherheit) oder SQL-Konten sein. In dem Artikel [Kontoauswahl vor der Einrichtung](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/) erfahren Sie mehr über die Konten. 
1. Folgen Sie den Schritten in [Eine {{ de.DVLS }}-Instanz erstellen.](/server/installation/create-server-instance/). 

{% snippet icon.shieldInfo %}
Stelle Sie sicher, dass die Schlüssel zur Verschlüsselung am Ende des Installationsprozesses exportiert und an einem sicheren Ort gespeichert werden. 
{% endsnippet %}
