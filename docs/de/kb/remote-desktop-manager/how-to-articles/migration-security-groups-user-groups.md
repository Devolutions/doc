---
title: Umstellung von Sicherheitsgruppen auf Nutzergruppen
---
{% snippet icon.badgeInfo %}
Sicherheitsgruppen sind ab der Version 2023.3 von RDM veraltet. 
{% endsnippet %}

Im {{ de.RDM }} kann der Zugriff auf Ihre Objekte mithilfe der ***auf Nutzergruppen basierenden Zugriffskontrolle*** gesichert und verwaltet werden. Diese Art der Absicherung gibt Ihnen eine detailliertere Kontrolle über Ihre Sicherheit..  
{% snippet icon.badgeHelp %}
Weitere Informationen finden Sie unter [auf Nutzergruppen basierenden Zugriffskontrolle](/rdm/windows/user-groups-based-access-control/). 
{% endsnippet %}  

## Umstellung auf Nutzergruppen
1. Klicken Sie unter ***Verwaltung - Management*** auf ***Nutzergruppen***. 
1. Erstellen Sie die Gruppen und klicken Sie auf Anwenden. 
1. Klicken Sie im Bereich ***Verwaltung*** auf ***Sicherheitsgruppen (veraltet)***. 
1. Löschen Sie jede Sicherheitsgruppe, indem Sie sie markieren und auf ***Sicherheitsgruppe löschen*** klicken. 
{% snippet icon.badgeCaution %}
Um die Berechtigungen Ihrer Nutzer zu verwalten, empfehlen wir Ihnen den Wechsel von ***Sicherheitsgruppen***
(veraltet) zu [***Berechtigungen***](/rdm/windows/user-groups-based-access-control/permissions/). Sobald der Wechsel vollzogen ist, deaktivieren Sie bitte das [***Veraltete Sicherheitssystem***](/kb/remote-desktop-manager/how-to-articles/migrate-legacy-security-permissions/).

{% endsnippet %}  

Hier sind zwei Szenarien, um Ihnen den Einstieg in diese Art von Sicherheit zu erleichtern:  

* [Vereinfachte Sicherheit ](/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/)  
* [Erweiterte Sicherheit](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/)  
