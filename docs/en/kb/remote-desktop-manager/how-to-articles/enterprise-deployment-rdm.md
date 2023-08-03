---
title: Enterprise Deployment of RDM
keywords:
- silent
- unattended
---
The ***{{ en.CIS }}***, offered through our Devolutions Customer Portal services, replicates the configuration from a {{ en.RDM }} instance. This configuration is used to create an installer file (*.rdi), which will be used to create the installation package intended for distribution.

{% snippet icon.badgeInfo %}
You can store and create up to 6 ***{{ en.CI }}*** configuration file package in your {{ en.DA }}.
{% endsnippet %}

Once you have created the installation package with our [{{ en.CIS }}](/rdm/windows/installation/client/custom-installer-service/), deploy themsi and copy the default.cfg in the installation folder, who by default is under %ProgramFiles(x86)%\Devolutions\RemoteDesktopManager.
