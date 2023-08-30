---
eleventyComputed:
  title: '{{ de.RDM }}'
  order: 10
---
![!!{{ de.RDM }} logo]({{ locale.de.projects.rdm.logo }})  

{{ de.RDM }} ist eine Anwendung, die eine umfassende Reihe von Tools und Verwaltungswerkzeugen kombiniert, um die Anforderungen jedes IT-Teams zu erfüllen. Sie wurde entwickelt, um Technologien für Remote-Verbindungen und Anmeldeinformationen zu zentralisieren und den Zugang zu diesen Ressourcen zu sichern. Die meisten Verbindungen werden entweder über eine externe Bibliothek oder Software von Drittanbietern hergestellt.  

{{ de.RDM }} ist mit mehreren relevanten Tools und Technologien kompatibel, darunter: Apple Remote Desktop, Citrix, Dameware, FTP, Hyper-V, LogMeIn, Radmin, RDP (Microsoft Remote Desktop), SSH Port Forward, SSH Shell, TeamViewer, Telnet, Remote Desktop Services, VMware, VNC, SCP, X Windows und weitere!  

{% youtube '-uz8dvo9tpE' %}  

## Das Ökosystem von {{ de.RDM }} 

{{ de.RDM }} ist in zwei Versionen erhältlich:  

|      |     |
| ---- | --- |
| Free | Nur für Einzelpersonen, keine Weitergabe von Informationen an Kollegen möglich. Die gängigsten Technologien für Remote-Verbindungen werden unterstützt und Passwörter können sicher gespeichert werden. |
| Team | Diese Edition wird von Teams verwendet und bietet Nutzerberechtigungen, Nutzergruppen, erweiterte Protokollierung usw. {{ de.RDM }} verwendet ein Datenbank-Managementsystem (DBMS) zur Speicherung der Informationen und zur gemeinsamen Nutzung entsprechend Ihren Sicherheitsanforderungen. Devolutions bietet auch zwei spezialisierte Dienste zur Cloud-basierten Speicherung oder zur vollständigen Integration von Active Directory. |

Wie weiter unten dargestellt, wird {{ de.RDM }} auch auf mehreren Plattformen angeboten.  

{% snippet icon.badgeNotice %}
Der Erwerb einer Team-Lizenz berechtigt zur Nutzung ALLER vielfältigen Client-Anwendungen.
{% endsnippet %}

{% snippet icon.badgeCaution %}
Sie müssen eine Desktop-Anwendung verwenden, um eine Team-Datenquelle zu erstellen. Dies erklärt, warum die mobilen Anwendungen kostenlos sind. Diese ermöglichen eine einfache Nutzung durch eine Einzelperson, ähnlich wie die Free Edition, aber sie können eine Team-Datenquelle nur nutzen, aber nicht verwalten.
{% endsnippet %}

| PLATTFORM | FREE-EDITION                  | TEAM-EDITION                  |
| -------- | ----------------------------- | ----------------------------- |
| Windows  | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| macOS    | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Linux    | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| iOS      | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
| Android  | {{ icon.badgeNotice | safe }} | {{ icon.badgeNotice | safe }} |
