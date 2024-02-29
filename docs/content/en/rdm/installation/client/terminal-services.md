---
eleventyComputed:
  title: Terminal Services / Remote Desktop Services
---
{{ en.RDM }} has an excellent support for running under a Remote Desktop Services environment. A master configuration file can be created to distribute settings for all new users of the system or even to update existing user's configuration.

{% snippet icon.badgeInfo %}
Please ensure that you have followed Microsoft's recommendation on how to set up an RDS environment. It will severally impact the performance if default Windows installations are performed.

[https://learn.microsoft.com/en-us/windows-server/administration/performance-tuning/role/remote-desktop/session-hosts](https://learn.microsoft.com/en-us/windows-server/administration/performance-tuning/role/remote-desktop/session-hosts)
{% endsnippet %}

{% snippet icon.badgeNotice %}
Each user must have a unique application data folder (roaming profiles or similar technologies). {{ en.RDM }} saves some user preferences to the local configuration file. The folder can be wiped out whenever the user logs out of the Windows Session, but it must be accessible for the duration of {{ en.RDM }} execution.
{% endsnippet %}

## Procedure

1. Install by following the procedure [For All Users](/rdm/windows/installation/client/all-users/). This ensures that the Microsoft Installer Database does contain all of the needed information for all user profiles of the host.
1. After installing {{ en.RDM }}, configure your preferences. We recommend going through all the configuration options to find the set of options that you wish to distribute. The data sources deserve special interest since it is much better when they are configured by an administrator. You may even take the opportunity to lock the data sources to protect against any modification by the users. Please refer to [Lock Data Source](/rdm/windows/data-sources/lock/) for more information.
   {% snippet icon.shieldWarning %}
   When using [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), for effective logging methods, proper session security and user-based features, it is CRITICAL that each user has their own account to authenticate against the data source.

   Redistributing a data source registration should follow one of the patterns below:

   * The data source is configured to always ask the username and password.
   * You are using integrated security against SQL Server.
   * You use environment variables for the username, and require the password (we recommend %USERDOMAIN%\%USERNAME% or %USERDNSDOMAIN%\%USERNAME%).

   Do not check the options to include {{ en.DA }} Credentials as well as any data source that contains saved credentials while also enabling Include data source credentials.
   {% endsnippet %}

3. When running {{ en.RDM }} under a Remote Desktop Services environment, we may have to tweak the parameters of the RDP entries to use less resources as possible and improve the startup performance of the application.
    1. To improve the {{ en.RDM }} startup performance, please see Solution #3 of the [Startup Performance](/kb/remote-desktop-manager/troubleshooting-articles/startup-performance/) article.
{type="a"}
    1. To limit the memory consumption of RDP entries, please see [Memory Tuning of RDP Sessions](/kb/remote-desktop-manager/knowledge-base/memory-tuning-rdp-sessions/).
1. When {{ en.RDM }} is configured to your liking, use ***File – Options – Export Options***. This will allow you to choose exactly the data sources to include, as well as the various categories of settings. Please refer to [Export Options](/rdm/windows/commands/file/options/export/) for further details. Save the file with the name **default.cfg**.
1. Move the **default.cfg** file in the installation folder of {{ en.RDM }}.

## Workflow

### New users

Whenever a new user creates a profile on the system, {{ en.RDM }} detects the presence of the **default.cfg** file and uses it as a template to create the user's configuration file.

### Existing users

A group policy exists to force the new configurations to be accepted automatically. Please see [Apply Policies](/kb/remote-desktop-manager/how-to-articles/group-policies/) to know how to deploy the Force the loading of the **default.cfg** file parameter.

If the user chooses to ignore the new configuration file when presented with the dialog below, he will not be presented with the choice until the date/time of the **default.cfg** file has changed.

If the main concern is deploying a new license key, and you are using an [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), you should rather use the feature to store it in ***Administration – Licenses***.

Whenever {{ en.RDM }} is started and it detects a new **default.cfg** file, the following dialog will appear:
![New default.cfg detected](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10368.png)

By selecting Use New Configuration (Lose Mine), the user's configuration is simply overwritten. If you only wish to update the {{ en.RDM }} license key after a renewal, choose Retrieve New Registration Only.
