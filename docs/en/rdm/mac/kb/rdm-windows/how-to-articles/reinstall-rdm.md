---
eleventyComputed:
  title: Reinstall {{ en.RDM }}
---
{% snippet, "badgeNotice" %}
Before reinstalling {{ en.RDM }}, a backup will be required.
{% endsnippet %}

Refer to [Installation Overview](/rdm/windows/installation/client/) for details on the installation of {{ en.RDM }}.

## Settings
After {{ en.RDM }} has been reinstalled on your computer, you need to copy your **RemoteDesktopManager.cfg**, **RemoteDesktopManager.enc**, and **RemoteDesktopManager.stv** (that you had backed up) to the **%LocalAppData%\Devolutions\RemoteDesktopManager** folder This is the default path. I f you have not installed with the default settings, please consult [Configuration File Location](/rdm/windows/installation/client/configuration-file-location/) for instructions on locating your configuration folder.

## Data
If you have moved the file based data source to another relative path, you will have to edit the data source definitions to fix the paths.
