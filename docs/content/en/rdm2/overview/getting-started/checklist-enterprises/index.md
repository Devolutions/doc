---
eleventyComputed:
  title: Checklist for enterprises
  order: 30
  description: Here is a checklist designed to help IT administrators install and configure {{ en.RDM }} for the first time when working in an enterprise environment using a {{ en.DVLS }} or {{ en.DHUBB }} data source.
---
{% tabs %}
{% tabItem "Windows" %}
Here is a checklist designed to help IT administrators install and configure {{ en.RDM }} for the first time when working in an enterprise environment using a {{ en.DVLS }} or {{ en.DHUBB }} data source.

First [download](https://devolutions.net/remote-desktop-manager/home/download/) and install {{ en.RDM }} before proceeding.  

| CHECKLIST FOR ENTERPRISES | DESCRIPTION |
|---------------------------|-------------|
| Step 1 - Register your license <ul><li>[Team registration](/rdm/windows/installation/client/registration/team-edition/)</li><li>[Trial request](/rdm/windows/installation/client/registration/trial-request/)</li></ul> | [Add your license](/rdm/windows/installation/client/registration/team-edition/) to the data source. A {{ en.RDM }} Team Edition [30-day trial](/rdm/windows/installation/client/registration/trial-request/) is available upon request. |
| Step 2 - Add your data source | Warning: When choosing any [data source](/rdm/windows/data-sources/create-new-data-source/) type that is not on-premises, you must consider the security of the data at rest and in transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or a [security provider](/rdm/windows/commands/administration/settings/security-providers/) for [advanced data sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). This ensures that only you can read the data.<br><br>Upon first launch, {{ en.RDM }} uses a local SQLite data source. The different data sources are explained in [Data Sources](/rdm/windows/data-sources/). For help selecting a data source tailored to your needs, please see [Select a data source type - Enterprises](/rdm/windows/getting-started/checklist-teams/select-data-source-type/).               |
| Step 3 - Select your security provider | Select your [Security Provider](/rdm/windows/commands/administration/settings/security-providers/) before importing or creating any data in your database so nobody can read your entry configuration data, even when people have a direct access to your database. |
| Step 4 - Create your folder structure  | Top level folders are at the foundation of a solid security structure. Your folder structure (folder entries) should represent your company structure. For example, you can create a folder for your Production team, one for your Staging team and one for your Testing team.<br><br>{% youtube '__xK92eTdgU' %} |
| Step 5 - Create your default settings  | In ***File – Options***, you can set options for {{ en.RDM }} and create [default settings templates](/rdm/windows/commands/file/templates/default-settings/). Each entry type is supported and can have a default template defined to fit your requirements. After you configure the options, use the [{{ en.CI }}](/rdm/windows/installation/client/custom-installer-service/) to share the pre-configured version with your team. |
| Step 6 - Create users | {{ en.RDM }} supports advanced [user management](/rdm/windows/commands/administration/management/user-management/). User accounts must be created manually by an administrator of the database. |
| Step 7 - Create user groups | Create [User Groups](/rdm/windows/commands/administration/management/user-groups-management/) to manage your security system. You can then assign users to user groups, making it easy to grant permissions to a set of users instead of having to manage permissions individually. |
| Step 8 - Create entries | An [entry](/rdm/windows/commands/edit/entries/creating-new-entry/) is how you save information about your sessions (e.g., RDP, SSH), credentials, websites, VPNs, synchronizers, and documents. |
| Step 9 - Grant permissions | Once your users are created, you can then grant [Permissions](/rdm/windows/user-groups-based-access-control/permissions/) for user group-based access control. The permissions granted on the folder can be inherited by each entry set under that folder. |
| Step 10 - Import your data | The final step is to [import your data](/rdm/windows/commands/file/import/) into {{ en.RDM }}. You can import your sessions, logins, and contacts in a few steps.                               |
{% endtabItem %}

{% tabItem "macOS" %}
Here is a checklist designed to help IT administrators install and configure {{ en.RDMMAC }} for the first time when working in an enterprise environment using a {{ en.DVLS }} or {{ en.DHUBB }} data source.  

First [download](https://devolutions.net/remote-desktop-manager/home/download/) and install {{ en.RDMMAC }} before proceeding.  

| CHECKLIST FOR ENTERPRISES    | DESCRIPTION |
|------------------------------|-------------|
| Step 1 - Register your license <ul><li> [Team registration](/rdm/mac/installation/client/registration/team-edition/) </li><li>[Trial request](/rdm/mac/installation/client/registration/trial-request/)</li></ul> | [Add your license](/rdm/mac/installation/client/registration/team-edition/) to the data source. A {{ en.RDM }} Team Edition [30-day trial](/rdm/mac/installation/client/registration/trial-request/) is available upon request. |
| Step 2 - Add your data source | Warning: When choosing any [data source](/rdm/mac/data-sources/create-new-data-source/) type that is not on-premises, you must consider the security of the data at rest and in transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or a [security provider](/rdm/mac/commands/administration/security-provider/) for [advanced data sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). This ensures that only you can read the data. <br><br>Upon first launch, {{ en.RDMMAC }} uses an SQLite data source. The different data sources are explained in [Data Source Types](/rdm/mac/data-sources/data-sources-types/). For help selecting a data source tailored to your needs, please see [Select a data source type – Enterprises](/rdm/mac/getting-started/checklist-teams/select-data-source-type-teams/). |
| Step 3 - Select your security provider | Select your [Security Provider](/rdm/mac/commands/administration/security-provider/) before importing or creating any data in your database so nobody can read your entry configuration data, even when people have a direct access to your database. |
| Step 4 - Create your folder structure | Top level folders are at the foundation of a solid security structure. Your folder structure (folder entries) should represent your company structure. For example, you can create a folder for your Production team, one for your Staging team and one for your Testing team. |
| Step 5 - Create your default settings | In ***File – Preferences***, you can set options for {{ en.RDMMAC }} and create [default settings templates](/rdm/mac/commands/file/templates/default-settings/). Each entry type is supported and can have a default template defined to fit your requirements. |
| Step 6 - Create users | {{ en.RDMMAC }} supports advanced [user management](/rdm/mac/commands/administration/user-management/). User accounts must be created manually by an administrator of the database. |
| Step 7 - Create user groups | Create [User Groups](/rdm/mac/commands/administration/user-groups-management/) to manage your security system. You can then assign users to user groups, making it easy to grant permissions to a set of users instead of having to manage permissions individually. |
| Step 8 - Create entries | An [entry](/rdm/mac/commands/edit/entries/creating-new-entry/) is how you save information about your sessions (e.g., RDP, SSH), credentials, websites, VPNs, synchronizers, and documents. |
| Step 9 - Grant permissions | Once your users are created you can then grant [Permissions](/rdm/mac/commands/administration/user-management/permissions/) for user group-based access control. The permissions granted on the folder can be inherited by each entry set under that folder. |
| Step 10 - Import your data | The final step is to [import your data](/rdm/mac/commands/file/import/overview/) into {{ en.RDM }}. You can import your sessions, logins, and contacts in a few steps. |
{% endtabItem %}
{% endtabs %}