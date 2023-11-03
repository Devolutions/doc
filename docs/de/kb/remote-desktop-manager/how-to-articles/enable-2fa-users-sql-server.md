---
eleventyComputed:
  title: MFA für Benutzer aktivieren
  description: Obwohl es nicht möglich ist, ohne {{ de.DVLS }} die Konfiguration einer MFA auf Benutzerebene zu erzwingen, wurden in {{ de.RDM }} einige Optionen hinzugefügt, die Ihren Anforderungen entsprechen könnten.
---
Obwohl es nicht möglich ist, ohne {{ de.DVLS }} die Konfiguration einer MFA auf Benutzerebene zu erzwingen, wurden in {{ de.RDM }} einige Optionen hinzugefügt, die Ihren Anforderungen entsprechen könnten. 

{% snippet icon.badgeCaution %}
Diese Funktionen stehen nur bei Verwendung einer [Erweiterten Datenquelle](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) zur Verfügung.
{% endsnippet %}  

{% snippet icon.badgeCaution %}
Es ist nicht möglich die MFA für Benutzer zu provisionieren. Nach der Aktivierung muss jeder Benutzer sie manuell unter ***Datei – Meine Konto Einstellungen*** konfigurieren. Weitere Informationen zur Konfiguration, finden Sie unter [Multifaktor-Authentifizierung](/rdm/windows/data-sources/multi-factor-authentication/).
{% endsnippet %}  

## Multi-Faktor-Authentifizierung für Anwendung erzwingen

In ***Administration – System Einstellungen – Anwendungsspezifisch – Anwendungen – Sicherheit – Multi-Faktor-Authentifizierung für Anwendung erzwingen***, wählen Sie entweder:

* ***Nicht erzwingen***: Erzwingt keinen Multi-Authentifizierungsmodus der Anwendung.
* ***Alle konfigurierten Methoden prüfen***: Fragt nur nach den konfigurierten MFA-Methoden.
* ***Ber Verwendung abfragen***: Fragt nach, welche MFA bei der Verwendung konfiguriert werden soll.

![Multi-Faktor-Authentifizierung für Anwendung erzwingen](https://webdevolutions.azureedge.net/docs/de/kb/KB2271.png)

## Anwendungssicherheit mit TOTP (Authenticator) erzwingen

In ***Administration – System Einstellungen – Anwendungsspezifisch – Anwendungen – Sicherheit*** ***Anwendungssicherheit mit TOTP (Authenticator) erzwingen*** auswählen, um sie zu aktivieren.

![Anwendungssicherheit mit TOTP (Authenticator) erzwingen](https://webdevolutions.azureedge.net/docs/de/kb/KB2270.png)

## Anwendungssicherheit mit Duo (Authenticator) erzwingen

In ***Administration – System Einstellungen – Anwendungsspezifisch – Anwendungen – Sicherheit*** ***Anwendungssicherheit mit Duo (Authenticator) erzwingen*** auswählen, um sie zu aktivieren.

![Anwendungssicherheit mit Duo (Authenticator) erzwingen](https://webdevolutions.azureedge.net/docs/de/kb/KB2267.png)

## Multi-Faktor Authentifizierung für Datenquelle erzwingen

In ***Administration – System Einstellungen – Tresor Verwaltung – Sicherheit – Sicherheit*** ***Multi-Faktor Authentifizierung für Datenquelle erzwingen*** auswählen, um sie zu aktivieren.

![Multi-Faktor Authentifizierung für Datenquelle erzwingen](https://webdevolutions.azureedge.net/docs/de/kb/KB2273.png)

## MFA vor Offline gehen abfragen

In ***Administration – System Einstellungen – Anwendungsspezifisch – Cache/Offline – Offline*** ***MFA vor Offline gehen abfragen*** auswählen, um sie zu aktivieren.

![MFA vor Offline gehen abfragen](https://webdevolutions.azureedge.net/docs/de/kb/KB2269.png)

## Mit Gruppenrichtlinien (GPOs) erzwingen

Weiters stehen GPOs zur Verfügung, mithilfe dessen Sie Optionen per Active Directory verteilen können. Als Beispiel die Gruppenrichtlinie für ***Multi-Faktor-Authentifizierung für Anwendung erzwingen***.  

**%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceApplicationMFA**  

{% snippet icon.badgeHelp %}
Weitere Informationen zur Konfiguration finden Sie unter [Richtlinien](/kb/remote-desktop-manager/how-to-articles/group-policies/).
{% endsnippet %} 
