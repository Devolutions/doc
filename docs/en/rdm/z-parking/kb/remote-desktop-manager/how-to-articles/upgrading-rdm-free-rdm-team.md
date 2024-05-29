---
eleventyComputed:
  title: Upgrading from {{ en.RDM }} Free to {{ en.RDM }} team
---
{% snippet, "badgeInfo" %}
Since version 2022.3 of {{ en.RDM }}, the Free Edition and Team Edition (previously Enterprise Edition) have been merged into [one single download](https://devolutions.net/remote-desktop-manager), allowing users to upgrade with more ease. To learn more about this change, you can read our blog post [{{ en.RDM }} Free and Enterprise Are Now Unified](https://blog.devolutions.net/2022/10/news-remote-desktop-manager-is-changing-for-the-better/).

If you are using {{ en.RDM }} version 2022.3 or later, see [Team Edition](/rdm/windows/installation/client/registration/team-edition/) to learn how to register a Team license. Otherwise, continue below.
{% endsnippet %}

{% snippet, "badgeInfo" %}
File based data sources (XML, SQLite, etc.) are by default stored in the configuration folder. As a precaution, go through each data source in ***File – Data sources*** and have a look at the local path (if any). Any file that is in the configuration folder must be copied manually.
{% endsnippet %}

{% snippet, "badgeInfo" %}
The paths mentioned here are for those that have installed using the default settings. The best way to locate your configuration folder is to go to ***File – Settings – Advanced***. You will find a hyperlink near the bottom under the ***Information*** section that opens your configuration folder.
{% endsnippet %}

{% snippet, "badgeCaution" %}
Please ensure you close the application before going further.
{% endsnippet %}

1. Download {{ en.RDM }} Team Edition from our [website](https://devolutions.net/remote-desktop-manager/home/download).
1. Install {{ en.RDM }} Team Edition.
1. Launch the application once to have its own configuration folder initialized, then close it.
1. Open an explorer window to **%localappdata%\Devolutions\RemoteDesktopManagerFree**.
1. Open a second explorer window to **%localappdata%\Devolutions\RemoteDesktopManager**.
1. From the Free Edition explorer window, copy the following files to the **RemoteDesktopManager** folder:  

* **RemoteDesktopManagerFree.cfg**  
* **RemoteDesktopManagerFree.stv**  
* **RemoteDesktopManagerFree.enc**  
* **RemoteDesktopManagerFree.ext**  
* **Connections.db. (default name of the local data source)**  
* Any and ALL other data source files identified in the data sources list  

7. Rename the copied files to remove the "Free" suffix:  

* **RemoteDesktopManagerFree.cfg** to **RemoteDesktopManager.cfg**  
* **RemoteDesktopManagerFree.stv** to **RemoteDesktopManager.stv**  
* **RemoteDesktopManagerFree.enc** to **RemoteDesktopManager.enc**  
* **RemoteDesktopManagerFree.ext** to **RemoteDesktopManager.ext**  

8. Run the Team Edition and ensure all of your data sources are available.
1. Uninstall the Free Edition only when you are sure that everything is working as expected.  
{% snippet, "badgeInfo" %}
If you want to downgrade from the Team Edition to the Free Edition, do the opposite at steps 3,4, and 5.
{% endsnippet %}
