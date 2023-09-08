---
eleventyComputed:
  title: Enable MFA for users
  description: While it is still not possible to force the configuration of multi-factor authentication (MFA) at the user level without {{ en.DVLS }}, a few options have been added in {{ en.RDM }} that could suit your needs.
  status: Topic available in German language
---
While it is still not possible to force the configuration of multi-factor authentication (MFA) at the user level without {{ en.DVLS }}, a few options have been added in {{ en.RDM }} that could suit your needs.  

{% snippet icon.badgeCaution %}
These features are only available when using an [advanced data sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}  

{% snippet icon.badgeCaution %}
You cannot configure MFA for users. Once activated, each user will need to configure it manually in ***File – Data Sources***. For more information about the configuration, consult [Multi-factor authentication](/rdm/windows/data-sources/multi-factor-authentication/).
{% endsnippet %}

## Force application multi-factor authentication mode

In ***Administration – System Settings – Application Specific – Applications – Security – Force application multi-factor authentication mode***, select either:

* ***Don't force***: Does not force application multi-factor authentication mode.
* ***Check against all configured methods***: Prompts for the configured MFA methods only.
* ***Prompt for selection on use***: Prompts for which MFA to configure on use.

![Force application multi-factor authentication mode](https://webdevolutions.azureedge.net/docs/en/kb/KB2271.png)

## Force application security with TOTP (Authenticator)
In ***Administration – System Settings – Application Specific – Applications – Security***, check ***Force application security with TOTP (Authenticator)*** to enable it.  

![Force application security with TOTP (Authenticator)](https://webdevolutions.azureedge.net/docs/en/kb/KB2270.png)

## Force application security with Duo (Authenticator)
In ***Administration – System Settings – Application Specific – Applications – Security***, check ***Force application security with Duo (Authenticator)*** to enable it.  

![Force application security with Duo (Authenticator)](https://webdevolutions.azureedge.net/docs/en/kb/KB2267.png)

## Force data source multi-factor configuration
In ***Administration – System Settings – Vault Management – Security Settings – Security***, check ***Force data source multi-factor configuration*** to enable it.  

![Force data source multi-factor configuration](https://webdevolutions.azureedge.net/docs/en/kb/KB2273.png)

## Prompt for MFA before going offline
In ***Administration – System Settings – Application Specific – Cache/Offline – Offline***, check ***Prompt for MFA before going offline*** to enable it.  

![Prompt for MFA before going offline](https://webdevolutions.azureedge.net/docs/en/kb/KB2269.png)

## Force with group policies (GPOs)
We also have GPOs that could help you achieve your goal. An example is the ***Force multi-factor authentication on the application login*** GPO.  

%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceApplicationMFA  

{% snippet icon.badgeHelp %}
For more information about the configuration, consult [Apply policies](/kb/remote-desktop-manager/how-to-articles/group-policies/).
{% endsnippet %} 
