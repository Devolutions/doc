---
eleventyComputed:
  title: Berechtigungen
---
{% youtube 'FQACxCIj_GU' %}  

Das Fenster für die ***Berechtigungen***, das nur in einer [Erweiteren Datenquelle](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), verfügbar ist, befindet sich unter den Eigenschaften jedes Eintrags im Abschnitt ***Sicherheit*** – ***Berechtigungen*** (oder ***Sicherheit*** – ***Vererbt Berechtigungen*** auf Tresor-Ebene).

Das auf Nutzergruppen basierende Berechtigungssystem biete eine sehr genaue Kontrolle über die Sicherheit. Hier ist ein Überblick über das Berechtigungsfenster:  
![Berechtigungsfenster](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6083.png)  

| OPTION             | BESCHREIBUNG                                                                                                               |
|---------------------|---------------------------------------------------------------------------------------------------------------------------|
| Berechtigungen      | Legt den Berechtigungsmodus fest. Wählen Sie zwischen: <br> <ul><li>***Vererbt (Standard)***: Die Berechtigungen werden von den übergeordneten Gruppen geerbt.</li><li>***Nutzerdefiniert***: Sie können für jede Berechtigung einen eigenen Wert angeben.</li><li>***Jeder***: Jeder erhält alle Berechtigungen.</li><li>***Nie***: Niemand außer dem Administrator erhält die Berechtigungen.</li></ul>                                                                                  |
| Zugriff gewähren    | Ermöglicht die [Gewährung des Batch-Zugriffs](/rdm/windows/commands/administration/settings/system-settings/vault-management/batch-grant-access) auf einen bestimmten Eintrag oder bestimmte Einträge.   |
| Vererbte Werte    | Gibt an, was von übergeordneten Gruppen geerbt wird.                                                 |
| Auswählen Nutzergruppen  | Ermöglicht die Auswahl von Nutzern/Nutzergruppen. Nur verfügbar, wenn die Berechtigung auf ***Nutzerdefiniert*** eingestellt ist. |

![Batch-Zugriff gewähren](https://webdevolutions.blob.core.windows.net/docs/de/rdm/windows/RDMWin6082.png) 
