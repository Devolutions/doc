---
eleventyComputed:
  title: Client
---
{% tabs %}
{% tabItem "Windows" %}
{{ en.RDM }} can be downloaded as setup files or as a binary compressed file (.zip) via our [Devolutions website](https://devolutions.net/remote-desktop-manager/home/download). It can also be downloaded from the [Microsoft Store](https://apps.microsoft.com/store/detail/devolutions-remote-desktop-manager/XPFCXHF337W98S). 

## Installation 

Depending on the downloaded media, either run the setup or extract the files from the archive in any folder and launch the executable. If you wish to use a portable device or run multiple independent copies of the application, please consult [Portable (USB)](/rdm/windows/installation/client/portable-usb/). 

## License 

{{ en.RDM }} Team Edition comes with a 30 day-trial. If you possess a purchased license of the Team Edition, please follow the instructions in [Register Team Edition](/rdm/windows/installation/client/registration/team-edition/). To register the Free Edition, please refer to [Register Free Edition](/rdm/windows/installation/client/registration/free-edition/). 

## Data Source 

By default, a local data source is created using the SQLite format. You can add as many data sources as needed. Please consult [Data Source Overview](/rdm/windows/data-sources/) for more information. 
{% snippet icon.badgeInfo %} 
To use a SQL Server or Azure SQL data source, refer to [Configure SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/configure/). 
{% endsnippet %}
 

## External Applications 

Configure your installation path for all external applications you intend to use such as RealVNC, Putty, Filezilla, etc. Set the paths in ***File – Options – Path.*** 

## Remote Desktop Services 

Please consult [Remote Desktop Services](/rdm/windows/installation/client/terminal-services/).
{% endtabItem %}

{% tabItem "macOS" %}
{{ en.RDMMAC }} can be downloaded as a .dmg file via our [Devolutions website](https://devolutions.net/remote-desktop-manager/home/download). 

## Installation 

Depending on the downloaded media, either run the setup or extract the files from the archive in any folder, then launch the executable. 

## License 

{{ en.RDMMAC }} Team Edition comes with a 30-day trial. If you possess a purchased license of the Team Edition, please follow the instructions in [Register Team Edition](/rdm/mac/installation/client/registration/team-edition/). To register the Free Edition, please refer to [Register Free Edition](/rdm/mac/installation/client/registration/trial-request/). 

## Data Source 

By default, a local data source has already been created using the SQLite format. You may add as many data sources as needed. Please see [Data Source Overview](rdm/mac/data-sources/) for more information. 
{% snippet icon.badgeInfo %} 
To use a SQL Server / Azure SQL data source, please read [Configure SQL Server](/rdm/mac/installation/configure-sql-server/). 
{% endsnippet %}
{% endtabItem %}
{% endtabs %}