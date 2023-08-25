---
title: 2FA für Nutzer aktivieren
---
Obwohl es immer noch nicht möglich ist, ohne {{ de.DVLS }} die Konfiguration einer 2FA auf Nutzerebene zu erzwingen, wurden im {{ de.RDM }} einige Optionen hinzugefügt, die Ihren Bedürfnissen entsprechen könnten.  

{% snippet icon.badgeCaution %}
Diese Funktionen sind nur bei Verwendung einer [Erweiterten Datenquelle](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) verfügbar.
{% endsnippet %}  

{% snippet icon.badgeCaution %}
Sie können 2FA nicht für Nutzer konfigurieren. Nach der Aktivierung muss jeder Nutzer sie manuell unter ***Datei – Datenquellen*** konfigurieren. Weitere Informationen zur Konfiguration, finden Sie unter [Multifaktor-Authentifizierung](/rdm/windows/data-sources/multi-factor-authentication/).
{% endsnippet %}  

## Anwendungssicherheit mit Windows-Anmeldeinformationen erzwingen

Unter ***Verwaltung – Systemeinstellungen – Anwendungen – Sicherheit – Anwendungssicherheit mit Windows-Anmeldeinformationen erzwingen***.  
![!!KB4906.png](https://webdevolutions.azureedge.net/docs/de/kb/KB4906.png)

## Anwendungssicherheit mit TOTP (Authentifikator)

Unter ***Verwaltung – Systemeinstellungen – Anwendungen – Sicherheit – Anwendungssicherheit mit TOTP (Authenticator) erzwingen***.  
![!!KB4907.png](https://webdevolutions.azureedge.net/docs/de/kb/KB4907.png)

## 2-Faktor-Konfiguration der Datenquelle erzwingen

Unter ***Verwaltung – Systemeinstellungen – Anwendungen – Sicherheit – 2-Faktor-Konfiguration der Datenquelle erzwingen***.  
![!!KB4908.png](https://webdevolutions.azureedge.net/docs/de/kb/KB4908.png)

## MFA-Abfrage vor dem Offline-Gehen / Offline-Modus

Unter ***Verwaltung – Systemeinstellungen – Cache/Offline – MFA-Abfrage vor dem Offline-Gehen***.  

## Mit Gruppenrichtlinien (GPO) erzwingen

Wir haben auch GPOs, die Ihnen helfen können, Ihr Ziel zu erreichen. Ein Beispiel für diesen Fall ist die ***Erzwingung der Multi-Faktor-Authentifizierung beim Anmelden bei der Anwendung***.  

**%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceApplicationMFA**  

Weitere Informationen zur Konfiguration finden Sie unter [Anwendung von Richtlinien](/kb/remote-desktop-manager/how-to-articles/group-policies/).
