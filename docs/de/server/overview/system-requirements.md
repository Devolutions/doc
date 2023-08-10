---
title: Systemanforderungen
---
## Mindestanforderungen

{% snippet icon.badgeInfo %}
{{ de.DVLS }} benötigt Microsoft .NET Core 6.0, um zu funktionieren. Zusätzlich wird .NET Framework 4.8 benötigt, um die {{ de.DVLSCONSOLE }} zu installieren. Bitte passen Sie Ihre Umgebung der von Ihnen verwendeten Version an. 
{% endsnippet %}

{% snippet icon.badgeInfo %}
{{ de.DVLS }} überprüft nun, ob die Funktionsebenen von Domain und Gesamtstruktur mindestens Windows Server 2012R2 entsprechen. Dies ist unerlässlich, wenn Sie Active Directory-Authentifizierung verwenden. 
{% endsnippet %}

In der folgenden Tabelle sind die empfohlenen Mindestanforderungen an die Hardware für {{ de.DVLS }} aufgeführt. Diese Spezifikationen können, wie weiter unten im Artikel beschrieben, je nach Verwendung der Anwendung variieren. 

|Basis-implementierung {width=200px} |Mittlere implementierung {width=250px} |Umfassende implementierung    |
|:--------------------------: |:------------------------: |:---------------------: |
|(1-20 Nutzer gleichzeitig)<br>mit eigenständigem SQL Server<br>4-Kern-Prozessoren<br>8 GB Arbeitsspeicher<br>Netzwerkkarte (1 GB)<br>|(21-75 Nutzer gleichzeitig)<br>Wmit eigenständigem SQL Server <br>4-Kern-Prozessoren<br>8 GB Arbeitsspeicher<br>Netzwerkkarte (1 GB)<br>|(75+ Nutzer gleichzeitig) <br>Wir empfehlen den Einsatz von mehreren {{ de.DVLS }} in einer ausbalancierten Anordnung mit einen SQL-Server mit hoher Verfügbarkeit.|
|Mit auf demselben Rechner installierten SQL-Server.<br>4-Kern-Prozessoren<br>16 GB Arbeitsspeicher<br>Netzwerkkarte (1 GB)<br>|Mit auf demselben Rechner installierten SQL-Server.<br>4-Kern-Prozessoren<br>16 GB Arbeitsspeicher<br>Netzwerkkarte (1 GB)<br>||

## Software-Abhängigkeiten

* Microsoft SQL Server 2012/2014/2016/[2017](https://www.microsoft.com/de-de/sql-server/sql-server-2017)/[2019](https://www.microsoft.com/de-de/sql-server/sql-server-2019)/[2022](https://www.microsoft.com/de-de/sql-server/sql-server-2022) (einschließlich Express-Editionen). 
* Azure SQL-Datenbank wird nur mit SQL-Anmeldekonten unterstützt. Azure Active Directory-Konten werden nicht unterstützt. 
* Windows 10, Windows 11, Windows Server 2012R2 (nicht kompatibel mit {{ de.DGW }}), 2016, 2019 und 2022. 
* Funktionsebene von Domain und Gesamtstruktur mindestens Windows Server 2012R2 oder höher. 
* Microsoft .NET Framework 4.8 (Bitte beachten Sie die [Voraussetzungen für das .NET Framework](https://learn.microsoft.com/de-de/dotnet/framework/get-started/system-requirements) für Betriebssysteme). 
* Microsoft .NET 6.0 (ASP.NET Core Runtime 6.0.19). 
* Internetinformationsdienste (IIS) 7.0 oder höher. 
* Zur Verwaltung der Instanz(en) von {{ de.DVLS }} muss die {{ de.DVLSCONSOLE }} auf dem Server installiert sein.. 

## Server-Größe

Viele Kunden fragen oft, wie sie ihren Server verschiedenen Topologien richtig anpassen können. Tatsächlich ist es uns nicht möglich, diese Frage angemessen zu beantworten. Die Arbeitsweise des Systems hat einen erheblichen Einfluss auf die Nutzung der Ressourcen der einzelnen Knoten in Ihrer [Topologie](/server/overview/topologies/). Die meisten dieser Konfigurationen sind virtuelle Umgebungen, die es einfach machen, zusätzliche Ressourcen zuzuweisen.  

Für eine möglichst genaue Schätzung müssen folgende Aspekte berücksichtigt werden:  

* Die Anzahl der in Ihrer Instanz gespeicherten Einträge (Serverdetails, Anmeldeinformationen usw.) .  
* Die Fluktuation dieser Einträge; erstellen Sie täglich Einträge oder bleiben diese eher unverändert?  
* Die Anzahl der gleichzeitigen Nutzer, die in Spitzenzeiten auf die Instanz von {{ de.DVLS }} zugreifen.  
* Die Nutzung der Informationen durch die Nutzer. Starten sie 10 Sitzungen gleichzeitig, führen sie eine Stapelverarbeitung aus, die einige Minuten beansprucht und wiederholen dann den Vorgang, oder öffnen sie nur einige wenige Sitzungen, arbeiten aber den ganzen Tag lang darin? Dies führt zu Schreibvorgängen in unseren Protokollen. Daher ist der erstgenannte Fall aufwändiger als der letztgenannte.  

## 64-bit Unterstützung

{{ de.DVLS }} ist mit allen 64-Bit-Versionen von Windows kompatibel.
