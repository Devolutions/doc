---
  title: Systemanforderungen
---
## Mindestanforderungen

{% snippet icon.badgeInfo %}
{{ de.DVLS }} benötigt Microsoft .NET Core 6.0, .NET Framework 4.8 ist für die Installation der {{ de.DVLSCONSOLE }} erforderlich. Bitte passen Sie Ihre Umgebung an die von Ihnen verwendete Version an.
{% endsnippet %}

{% snippet icon.badgeInfo %}
Außerdem überprüft {{ de.DVLS }}, ob die Funktionsebenen von Domäne- und Gesamtstruktur mindestens Windows Server 2012 R2 entsprechen. Dies ist unerlässlich, wenn Sie die Active Directory-Authentifizierung verwenden. 
{% endsnippet %}

In der folgenden Tabelle sind die empfohlenen Mindestanforderungen für {{ de.DVLS }} aufgeführt. Diese Spezifikationen können, wie weiter unten im Artikel beschrieben, je nach Größe variieren. 

|Klein {width=241px} |Mittel {width=253px} |Groß|
|:--------------------------: |:------------------------: |:---------------------: |
|(1-20 gleichzeitige Benutzer)<br>dedizierter SQL Server<br>4-Kern-Prozessoren<br>8 GB Arbeitsspeicher<br>Netzwerkkarte (1 GB)<br>|(21-75 gleichzeitige Benutzer)<br>dedizierter SQL Server <br>4-Kern-Prozessoren<br>8 GB Arbeitsspeicher<br>Netzwerkkarte (1 GB)<br>|(75+ gleichzeitige Benutzer) <br>Empfehlung; {{ de.DVLS }} in einer Load-Balancer Konfiguration in Verbindung mit einer hoch verfügbaren SQL Server.|
|SQL Server auf demselben Host<br>4-Kern-Prozessoren<br>16 GB Arbeitsspeicher<br>Netzwerkkarte (1 GB)<br>|SQL Server auf demselben Host<br>4-Kern-Prozessoren<br>16 GB Arbeitsspeicher<br>Netzwerkkarte (1 GB)<br>|Siehe [Hochverfügbarkeits-Topologie (EN)](/server/overview/topologies/).|

## Software-Abhängigkeiten

* Microsoft SQL Server 2012/2014/2016/[2017](https://www.microsoft.com/de-de/sql-server/sql-server-2017)/[2019](https://www.microsoft.com/de-de/sql-server/sql-server-2019)/[2022](https://www.microsoft.com/de-de/sql-server/sql-server-2022) (einschließlich Express-Editionen). 
* Azure SQL-Datenbank wird nur mit SQL-Anmeldekonten unterstützt. Azure Active Directory-Konten werden nicht unterstützt. 
* Windows 10, Windows 11, Windows Server 2012 R2 (nicht kompatibel mit {{ de.DGW }}), 2016, 2019 und 2022. 
* Funktionsebene von Domänen- und Gesamtstruktur mindestens Windows Server 2012 R2 oder höher. 
* Microsoft .NET Framework 4.8 (Bitte beachten Sie die [Voraussetzungen für das .NET Framework](https://learn.microsoft.com/de-de/dotnet/framework/get-started/system-requirements) für Betriebssysteme). 
* Microsoft .NET 6.0 (ASP.NET Core Runtime 6.0.19). 
* Internetinformationsdienste (IIS) 7.0 oder höher. 
* Zur Verwaltung der {{ de.DVLS }} Instanz(en) ist die Installation von {{ de.DVLSCONSOLE }} auf dem Server erforderlich.

## Server-Dimensionierung

Wir bekommen viele Anfragen von Kunden, wie sie ihren Server verschiedenen Topologien richtig anpassen. Tatsächlich ist es uns nicht möglich, diese Frage angemessen zu beantworten. Die Arbeitsweise hat einen erheblichen Einfluss auf die Nutzung der Ressourcen der einzelnen Knoten in Ihrer [Topologie (EN)](/server/overview/topologies/). Die meisten Umgebungen werden in einer virtuellen Umgebung betrieben, die es einfach machen, zusätzliche Ressourcen zuzuweisen.  

Für eine möglichst genaue Schätzung müssen folgende Aspekte berücksichtigt werden:

* Die Anzahl der in Ihrer Instanz gespeicherten Einträge (Serverdetails, Anmeldeinformationen usw.) .  
* Anzahl der gespeicherten Einträge (Server, Anmeldeinformationen usw.).  
* Die Fluktuation dieser Einträge; erstellen Sie täglich Einträge oder bleiben diese eher unverändert?  
* Die Anzahl der gleichzeitigen Benutzer, die in Spitzenzeiten auf die {{ de.DVLS }} Instanz zugreifen.  
* Das Benutzerverhalten: 
  * Werden 10 Sitzungen gleichzeitig gestartet, umfangreiche Stapelverarbeitungen ausgeführt, 
  * oder werden nur einige wenige Sitzungen geöffnet, in denen den ganzen Tag lang gearbeitet wird?

  Dies führt zu Schreibvorgängen in unseren Protokollen. Daher ist das erste Szenario rechenintensiver als das letztgenannte.  

## 64-bit Unterstützung

{{ de.DVLS }} ist mit allen 64-Bit-Versionen von Windows kompatibel.
