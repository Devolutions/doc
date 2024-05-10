---
eleventyComputed:
  title: Installationsanforderungen
---
Im Folgenden wird beschrieben, welche Voraussetzungen vor der Installation von {{ de.DVLS }} erfüllt sein müssen.  

Bitte kontaktieren Sie uns unter [service@devolutions.net](mailto:service@devolutions.net), um eine Sitzung zu buchen, in der wir Ihnen helfen, {{ de.DVLS }} zu installieren.

## Schritte

1. Verfügbarer SQL Server (oder Express Edition). Die unterstützten SQL Server-Versionen finden Sie unter [Systemanforderungen](/de/server/overview/system-requirements/).
1. Falls noch keine SQL Server vorhanden ist, installieren Sie vorab die gewünschte SQL Server Version und [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/de-de/sql/ssms/download-sql-server-management-studio-ssms). 
1. IIS auf dem Server installieren, auf dem später {{ de.DVLS }} installiert wird. Die unterstützten IIS Versionen finden Sie unter [Systemanforderungen](/de/server/overview/system-requirements/). 
1. [{{ de.DVLSCONSOLE }}](https://devolutions.net/de/server/home/download/) herunterladen. 
1. IIS und Software [Voraussetzungen für {{ de.DVLS }}](/de/server/getting-started/installation/installing-web-server-prerequisites/) installieren. 
1. {{ de.DVLS }} kann mehrere Konten verwenden, um für die verschiedenen Komponenten die Verbindung zur Datenbank herzustellen. Diese Konten können Domänen- (integrierte Sicherheit) oder SQL-Konten sein. Der Artikel [Kontoauswahl vor der Einrichtung](/de/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/) enthält weiterführende Informationen darüber.
1. Folgen Sie den Schritten in [Eine {{ de.DVLS }}-Instanz erstellen.](/de/server/getting-started/installation/create-server-instance/). 

{% snippet icon.shieldInfo %}
Stellen Sie sicher, dass die Schlüssel zur Verschlüsselung am Ende des Installationsprozesses exportiert und an einem sicheren Ort gespeichert werden. 
{% endsnippet %}
