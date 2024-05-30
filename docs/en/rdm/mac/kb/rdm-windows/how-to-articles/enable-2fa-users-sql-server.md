---
eleventyComputed:
  title: Enable MFA for users
  description: While it is still not possible to force the configuration of multi-factor authentication (MFA) at the user level without {{ en.DVLS }}, a few options have been added in {{ en.RDM }} that could suit your needs.
  status: Topic available in German language
---
While it is still not possible to force the configuration of multi-factor authentication (MFA) at the user level without {{ en.DVLS }}, a few options have been added in {{ en.RDM }} that could suit your needs.

{% snippet, "badgeCaution" %}
These features are only available when using an [advanced data sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeCaution" %}
You cannot configure MFA for users. Once activated, each user will need to configure it manually in ***File – My Account Settings***. For more information about the configuration, consult [Multi-factor authentication](/rdm/windows/data-sources/multi-factor-authentication/).
{% endsnippet %}

## Force application multi-factor authentication mode

In ***Administration – System Settings – Application Specific – Applications – Security – Force application multi-factor authentication mode***, select either:

* ***Don't force***: Does not force application multi-factor authentication mode.
* ***Check against all configured methods***: Prompts for the configured MFA methods only.
* ***Prompt for selection on use***: Prompts for which MFA to configure on use.

![Force application multi-factor authentication mode](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2271.png)

## Force application security with TOTP (Authenticator)
In ***Administration – System Settings – Application Specific – Applications – Security***, check ***Force application security with TOTP (Authenticator)*** to enable it.

![Force application security with TOTP (Authenticator)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2270.png)

## Force application security with Duo (Authenticator)
In ***Administration – System Settings – Application Specific – Applications – Security***, check ***Force application security with Duo (Authenticator)*** to enable it.

![Force application security with Duo (Authenticator)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2267.png)

## Force data source multi-factor configuration
In ***Administration – System Settings – {{ en.VLT_MAJ }} Management – Security Settings – Security***, check ***Force data source multi-factor configuration*** to enable it.

![Force data source multi-factor configuration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2273.png)

## Prompt for MFA before going offline
In ***Administration – System Settings – Application Specific – Cache/Offline – Offline***, check ***Prompt for MFA before going offline*** to enable it.

![Prompt for MFA before going offline](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2269.png)

## Force with group policies (GPOs)
We also have GPOs that could help you achieve your goal. An example is the ***Force multi-factor authentication on the application login*** GPO.

%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceApplicationMFA

{% snippet, "badgeHelp" %}
For more information about the configuration, consult [Apply policies](/rdm/mac/kb/rdm-windows/how-to-articles/group-policies/).
{% endsnippet %}
