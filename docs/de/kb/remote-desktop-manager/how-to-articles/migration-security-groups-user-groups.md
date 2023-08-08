---
title: Migration von Sicherheitsgruppen zum Berechtigungssystem
---
{% snippet icon.badgeInfo %}
Sicherheitsgruppen sind seit Remote Desktop Manager Version 2023.3 veraltet. 
{% endsnippet %}

Im {{ de.RDM }} kann der Zugriff auf Ihre Objekte mithilfe des ***Gruppenbasierten Zugriff*** gesichert und verwaltet werden. Diese Art der Sicherung gibt Ihnen eine detailliertere Kontrolle über die Sicherheit.
{% snippet icon.badgeHelp %}
Weitere Informationen finden Sie unter [Gruppenbasierte Zugriffskontrolle](/rdm/windows/user-groups-based-access-control/). 
{% endsnippet %}  

## Migration zum Berechtigungssystem
1. Klicken Sie unter ***Verwaltung - Management*** auf ***Gruppen***. 
1. Erstellen Sie eine Gruppen und klicken Sie auf OK. 
1. Klicken Sie im Bereich ***Verwaltung*** auf ***Sicherheitsgruppen (Veraltet)***. 
1. Löschen Sie jede Sicherheitsgruppe, indem Sie sie markieren und auf ***Sicherheitsgruppe llschen*** klicken. 
{% snippet icon.badgeCaution %}
Um die Berechtigungen Ihrer Nutzer zu verwalten, empfehlen wir Ihnen den Wechsel von ***Sicherheitsgruppen***
(veraltet) zu [***Berechtigungen***](/rdm/windows/user-groups-based-access-control/permissions/). Sobald die Migration abgeschlossen ist, deaktivieren Sie bitte die Option [***Alte Sicherheit verwenden***](/kb/remote-desktop-manager/how-to-articles/migrate-legacy-security-permissions/).

{% endsnippet %}  

Hier sind zwei Szenarien, um Ihnen den Einstieg zu diesem Sicherheitskonzept zu erleichtern:  

* [Vereinfachte Sicherheit ](/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/)  
* [Erweiterte Sicherheit](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/)  
