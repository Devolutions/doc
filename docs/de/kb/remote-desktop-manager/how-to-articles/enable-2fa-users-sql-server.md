---
eleventyComputed:
  title: MFA für Nutzer aktivieren
  description: Obwohl es immer noch nicht möglich ist, ohne {{ de.DVLS }} die Konfiguration einer 2FA auf Nutzerebene zu erzwingen, wurden im {{ de.RDM }} einige Optionen hinzugefügt, die Ihren Bedürfnissen entsprechen könnten.
---
Obwohl es immer noch nicht möglich ist, ohne {{ de.DVLS }} die Konfiguration einer 2FA auf Nutzerebene zu erzwingen, wurden im {{ de.RDM }} einige Optionen hinzugefügt, die Ihren Bedürfnissen entsprechen könnten.  

{% snippet icon.badgeCaution %}
Diese Funktionen sind nur bei Verwendung einer [Erweiterten Datenquelle](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) verfügbar.
{% endsnippet %}  

{% snippet icon.badgeCaution %}
Sie können 2FA nicht für Nutzer konfigurieren. Nach der Aktivierung muss jeder Nutzer sie manuell unter ***Datei – Datenquellen*** konfigurieren. Weitere Informationen zur Konfiguration, finden Sie unter [Multifaktor-Authentifizierung](/rdm/windows/data-sources/multi-factor-authentication/).
{% endsnippet %}  

## Zwei-Faktor-Authentifizierung für Anwendung erzwingen

In ***Administration – System Einstellungen – Anwendungsspezifisch – Anwendungen – Sicherheit – Zwei-Faktor-Authentifizierung für Anwendung erzwingen***, wählen Sie entweder:

* ***Nicht erzwingen***: Erzwingt keinen Mehrfaktor-Authentifizierungsmodus der Anwendung.
* ***Alle konfigurierten Methoden prüfen***: Fragt nur nach den konfigurierten MFA-Methoden.
* ***Ber Verwendung abfragen***: Fragt nach, welche MFA bei der Verwendung konfiguriert werden soll.

![Zwei-Faktor-Authentifizierung für Anwendung erzwingen](https://webdevolutions.azureedge.net/docs/en/kb/KB2267.png)

## Anwendungssicherheit mit TOTP (Authenticator) erzwingen

In ***Administration – System Einstellungen – Anwendungsspezifisch – Anwendungen – Sicherheit***, markieren ***Anwendungssicherheit mit TOTP (Authenticator) erzwingen***, um sie zu aktivieren.

![Anwendungssicherheit mit TOTP (Authenticator) erzwingen](https://webdevolutions.azureedge.net/docs/en/kb/KB2268.png)

## Anwendungssicherheit mit Duo (Authenticator) erzwingen

In ***Administration – System Einstellungen – Anwendungsspezifisch – Anwendungen – Sicherheit***, markieren ***Anwendungssicherheit mit Duo (Authenticator) erzwingen***, um sie zu aktivieren.

![Anwendungssicherheit mit Duo (Authenticator) erzwingen](https://webdevolutions.azureedge.net/docs/en/kb/KB2269.png)

## Zwei-Faktor Authentifizierung für Datenquelle erzwingen

In ***Administration – System Einstellungen – Tresor Verwaltung – Sicherheit – Sicherheit***, markieren ***Zwei-Faktor Authentifizierung für Datenquelle erzwingen***, um sie zu aktivieren.

![Zwei-Faktor Authentifizierung für Datenquelle erzwingen](https://webdevolutions.azureedge.net/docs/en/kb/KB2270.png)

## 2FA vor Offline gehen abfragen

In ***Administration – System Einstellungen – Anwendungsspezifisch – Cache/Offline – Offline***, markieren ***2FA vor Offline gehen abfragen***, um sie zu aktivieren.

![2FA vor Offline gehen abfragen](https://webdevolutions.azureedge.net/docs/en/kb/KB2271.png)

## Mit Gruppenrichtlinien (GPOs) erzwingen

Wir haben auch GPOs, die Ihnen helfen können, Ihr Ziel zu erreichen. Ein Beispiel ist das GPO ***Erzwingung der Multi-Faktor-Authentifizierung beim Anmelden bei der Anwendung***.  

**%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceApplicationMFA**  

{% snippet icon.badgeHelp %}
Weitere Informationen zur Konfiguration finden Sie unter [Richtlinien anwenden](/kb/remote-desktop-manager/how-to-articles/group-policies/).
{% endsnippet %} 
