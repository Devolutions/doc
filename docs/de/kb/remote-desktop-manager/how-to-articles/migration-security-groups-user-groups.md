---
eleventyComputed:
  title: Migration von Sicherheitsgruppen zu Gruppen
---
{% snippet icon.badgeInfo %}
Sicherheitsgruppen sind seit {{ de.RDM }} Version 2023.3 veraltet. 
{% endsnippet %}

In {{ de.RDM }} kann der Zugriff auf Einträge mithilfe von ***Gruppen*** gesichert und verwaltet werden. Dies gibt Ihnen eine granulare Kontrolle über die Sicherheit und Berechtigungen.
{% snippet icon.badgeHelp %}
Weitere Informationen finden Sie unter [Gruppenbasierter Zugriffskontrolle](/rdm/windows/user-groups-based-access-control/). 
{% endsnippet %}  

## Migration von Sicherheitsgruppen
1. Klicken Sie unter ***Administration - Verwaltung*** auf ***Gruppen***. 
1. Erstellen Sie die Gruppen und klicken Sie auf OK.
1. Klicken Sie im Bereich ***Verwaltung*** auf ***Sicherheitsgruppen (Veraltet)***. 
1. Löschen Sie jede Sicherheitsgruppe, indem Sie sie markieren und ***Sicherheitsgruppe löschen*** auswählen.
{% snippet icon.badgeCaution %}
Um die Berechtigungen Ihrer Benutzer zu verwalten, empfehlen wir Ihnen den Wechsel von ***Sicherheitsgruppen*** (Veraltet) zu [***Berechtigungen***](/rdm/windows/user-groups-based-access-control/permissions/). Sobald die Migration abgeschlossen ist, [deaktivieren Sie bitte das ***alte Sicherheitssystem***](/kb/remote-desktop-manager/how-to-articles/migrate-legacy-security-permissions/).

{% endsnippet %}

Hier sind zwei Szenarien, um Ihnen den Einstieg in diese Art von Sicherheit zu erleichtern:

* [Vereinfachte Sicherheit ](/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/)
* [Erweiterte Sicherheit](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/)
