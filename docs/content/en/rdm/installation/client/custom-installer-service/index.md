---
eleventyComputed:
  title: "{{ en.CIS }}"
  description: "The {{ en.CIS }} generates custom installation packages for {{ en.RDM }}."
---
![!!CustomInstallerServiceIcon](https://cdnweb.devolutions.net/images/projects/custom-installer/logos/custom-installer-white-shadow.svg)

* Generate custom installation packages for {{ en.RDM }}.
* Include preconfigured data sources in the package for quick enterprise wide deployment.

The {{ en.CIS }} replicates the configuration from a {{ en.RDM }} instance. This configuration is used to create an installer file (*.rdi), which will be used to create the installation package intended for distribution. The configuration can contain data sources, credentials, database templates, and more. It is best practice to have a {{ en.RDM }} installation used specifically to create the installation package.

{% snippet icon.shieldWarning %}
The ***No Internet connection*** option in {{ en.RDM }} (***File*** – ***Option*** – ***Tools*** – ***Advanced***) must be disabled for {{ en.CI }} to work.
{% endsnippet %}

You **must create an installer file** using {{ en.RDM }} before creating the installer. This is described in [Installer File Generator](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/).

The {{ en.CIS }} can be found in with the {{ en.DA }} tools, located in ***File – {{ en.DA }} – Tools***. You must be signed in to access it.
![File – {{ en.DA }} – Tools](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip11245.png)

The following topics will help you get started to set up your customized installers with {{ en.RDM }}.

* [Create an installation Package](/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/)
* [Installer file generator](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/)
* [Option selection dialog](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/)
