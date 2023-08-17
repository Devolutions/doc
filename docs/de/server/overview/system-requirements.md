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

|Basis {width=250px} |Mittel {width=250px} |Groß    |
|:--------------------------: |:------------------------: |:---------------------: |
|(1-20 Nutzer gleichzeitig)<br>mit eigenständigem SQL Server<br>4-Kern-Prozessoren<br>8 GB Arbeitsspeicher<br>Netzwerkkarte (1 GB)<br>|(21-75 Nutzer gleichzeitig)<br>Wmit eigenständigem SQL Server <br>4-Kern-Prozessoren<br>8 GB Arbeitsspeicher<br>Netzwerkkarte (1 GB)<br>|(75+ Nutzer gleichzeitig) <br>Wir empfehlen den Einsatz von mehreren Devolutions Servern in einer ausbalancierten Anordnung mit einen SQL-Server mit hoher Verfügbarkeit.|
|Mit auf demselben Rechner installierten SQL-Server.<br>4-Kern-Prozessoren<br>16 GB Arbeitsspeicher<br>Netzwerkkarte (1 GB)<br>|Mit auf demselben Rechner installierten SQL-Server.<br>4-Kern-Prozessoren<br>16 GB Arbeitsspeicher<br>Netzwerkkarte (1 GB)<br>|Siehe [Hochverfügbarkeits-Topologie](/server/overview/topologies/#high-availability-topology).|

## Software-Abhängigkeiten

* Microsoft SQL Server 2012/2014/2016/[2017](https://www.microsoft.com/de-de/sql-server/sql-server-2017)/[2019](https://www.microsoft.com/de-de/sql-server/sql-server-2019)/[2022](https://www.microsoft.com/de-de/sql-server/sql-server-2022) (einschließlich Express-Editionen). 
* Azure SQL-Datenbank wird nur mit SQL-Anmeldekonten unterstützt. Azure Active Directory-Konten werden nicht unterstützt. 
* Windows 10, Windows 11, Windows Server 2012R2 (nicht kompatibel mit {{ de.DGW }}), 2016, 2019 und 2022. 
* Funktionsebene von Domänen- und Gesamtstruktur mindestens Windows Server 2012 R2 oder höher. 
* Microsoft .NET Framework 4.8 (Bitte beachten Sie die [Systemanforderungen für .NET Framework](https://learn.microsoft.com/de-de/dotnet/framework/get-started/system-requirements) für Betriebssysteme). 
* Microsoft .NET 6.0 (ASP.NET Core Runtime 6.0.19). 
* Internetinformationsdienste (IIS) 7.0 oder höher. 
* Zur Verwaltung der {{ de.DVLS }} Instanz(en) ist die Installation von {{ de.DVLSCONSOLE }} auf dem Server erforderlich.

## Server-Dimensionierung

Wir bekommen viele Anfragen von Kunden, wie sie ihren Server verschiedenen Topologien richtig anpassen. Tatsächlich ist es uns nicht möglich, diese Frage angemessen zu beantworten. Die Arbeitsweise hat einen erheblichen Einfluss auf die Nutzung der Ressourcen der einzelnen Knoten in Ihrer [Topologie](/server/overview/topologies/). Die meisten Umgebungen werden in einer virtuellen Umgebung betrieben, die es einfach machen, zusätzliche Ressourcen zuzuweisen.  

Für eine möglichst genaue Schätzung müssen folgende Aspekte berücksichtigt werden:

* Die Anzahl der in Ihrer Instanz gespeicherten Einträge (Serverdetails, Anmeldeinformationen usw.) .  
* Anzahl der gespeicherten Einträge (Server, Anmeldeinformationen usw.).  
* Die Fluktuation dieser Einträge; erstellen Sie täglich Einträge oder bleiben diese eher unverändert?  
* Die Anzahl der gleichzeitigen Benutzer, die in Spitzenzeiten auf die {{ de.DVLS }} Instanz zugreifen.  
* Das Benutzerverhalten. Starten diese 10 Sitzungen gleichzeitig, führen sie eine Stapelverarbeitung aus, die einige Minuten beansprucht und wiederholen dann den Vorgang, oder öffnen sie nur einige wenige Sitzungen, arbeiten aber den ganzen Tag lang darin? Dies führt zu Schreibvorgängen in unseren Protokollen. Daher ist das erste Szenario rechenintensiver als das letztgenannte.  

## 64-bit Unterstützung

{{ de.DVLS }} ist mit allen 64-Bit-Versionen von Windows kompatibel.
