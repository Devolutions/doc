---
eleventyComputed:
  title: Checklist for individuals
  order: 20
  description: Here is a checklist to help you get started with {{ en.RDMMAC }} for individuals.
---
Here is a checklist to help you get started with {{ en.RDMMAC }} for individuals. 

First [download](https://devolutions.net/remote-desktop-manager/home/download/) and install {{ en.RDMMAC }} before proceeding.

| CHECKLIST FOR INDIVIDUALS (TEAM EDITION) | DESCRIPTION |
|------------------------------------------|-------------|
| Step 1 - Register your license<ul><li>[Team registration](/rdm/mac/installation/client/registration/team-edition/)</li><li>[Trial Request](/rdm/mac/installation/client/registration/trial-request/) </li></ul>| {{ en.RDMMAC }} Team Edition grants you a 30-day trial. If you decide not to register by the end of the trial, your data will not be altered or erased, and you will have full access to it once you provide a license key.  |
| Step 2 - Add your data source and set up your {{ en.DA }} and master key | Warning: When choosing any [data source](/rdm/mac/data-sources/create-new-data-source/) type that is not on-premises, you must consider the security of the data at rest and in transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or a [security provider](/rdm/mac/commands/administration/security-provider/) for [advanced data sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). This ensures that only you can read the data.<br><br>Upon first launch, {{ en.RDMMAC }} uses an SQLite data source. The different data sources are explained in [Data Source Types](/rdm/mac/data-sources/data-sources-types/). For help selecting a data source tailored to your needs, please see [Select a data source type – Individuals](/rdm/mac/getting-started/checklist-individuals/select-data-source-type-individuals/).  |
| Step 3 - Set up your Devolutions {{ en.OBACK }} | Devolutions [{{ en.OBACK }}](/cloud/getting-started/devolutions-cloud-services/) allows you to securely back up your information for selected data sources. The backup is automatically executed 30 seconds after any modifications made to the data source content. It is best practice to always back up your data source.  |
| Step 4 - Create your default settings | In ***File – Preferences***, you can create, modify, or reset [default settings](/rdm/mac/commands/file/templates/default-settings/) for your templates. Each entry type is supported and can have a default template defined to fit your requirements.  |
| Step 5 - Create your folder structure | Top level folders are at the foundation of a solid security structure. Your folder structure (folder entries) should represent your company structure.  |
| Step 6 - Import your data | The final step is to [import your data into {{ en.RDM }}](/rdm/mac/commands/file/import/overview/). You can import your sessions, logins, and contacts in a few steps.  |

