---
eleventyComputed:
  title: How to Reinstall {{ en.RDM }}
---
{% snippet icon.badgeNotice %}
Before reinstalling {{ en.RDM }}, a backup will be required.
{% endsnippet %}

Refer to the [Installation Overview](https://helprdm.devolutions.net/client.html) topic for details on the installation of {{ en.RDM }}.

## Settings
After {{ en.RDM }} has been reinstalled on your computer, you need to copy your RemoteDesktopManager.cfg, RemoteDesktopManager.enc and RemoteDesktopManager.stv (that you had backed up) to the %LocalAppData%\Devolutions\RemoteDesktopManager folder This is the default path. I f you have not installed with the default settings, please consult [Configuration File Location](https://helprdm.devolutions.net/installation_configurationfilelocation.html) for instructions on locating your configuration folder.

## Data
If you have moved the file based data source to another relative path, you will have to edit the data source definitions to fix the paths.
