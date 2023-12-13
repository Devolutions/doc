---
eleventyComputed:
  title: Checklist for individuals
  order: 20
  description: Here is a checklist to help you get started with {{ en.RDM }} for individuals.
---
Here is a checklist to help you get started with {{ en.RDM }} for individuals.

First [download](https://devolutions.net/remote-desktop-manager/home/download/) and install {{ en.RDM }} before proceeding.

| CHECKLIST FOR INDIVIDUALS (TEAM EDITION) | DESCRIPTION |
|------------------------------------------|-------------|
| Step 1 - Register your license <ul><li>[Team registration](/rdm/windows/installation/client/registration/team-edition/)</li><li>[Trial request](/rdm/windows/installation/client/registration/trial-request/)</li></ul> | {{ en.RDM }} Team Edition grants you a 30-day trial. If you decide not to register by the end of the trial, your data will not be altered or erased, and you will have full access to it once you provide a license key. <br> {% youtube '_FFSo_Bi3GY' %} |
| Step 2 - Add your data source and set up your {{ en.DA }} and master key | Warning: When choosing any data source type that is not on-premises, you must consider the security of the data at rest and in transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or a [security provider](/rdm/windows/commands/administration/settings/security-providers/) for [advanced data sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). This ensures that only you can read the data. <br> Upon first launch, {{ en.RDM }} uses a local SQLite data source. The different data sources are explained in [Data Sources](/rdm/windows/data-sources/). For help selecting a data source tailored to your needs, please see [Choosing your data source (Individuals)](/rdm/windows/getting-started/checklist-individuals/select-data-source-type/). <br> {% youtube 'R3VYxnOdjoE' %} |
| Step 3 - Set up your Devolutions {{ en.OBACK }} | Devolutions [{{ en.OBACK }}](/cloud/getting-started/devolutions-cloud-services/) allows you to securely back up your information for selected data sources. The backup is automatically executed 30 seconds after any modifications made to the data source content. It is a best practice to always back up your data source. <br> {% youtube 'KegabQ0JmRw' %} |
| Step 4 - Create your default settings | In ***File – Options***, you can create, modify, or reset [default settings](/rdm/windows/commands/file/templates/default-settings/) for your templates. Each entry type is supported and can have a default template defined to fit your requirements. <br> {% youtube '4sib5cliffA' %} |
| Step 5 - Create your folder structure | Top level folders are at the foundation of a solid security structure. Your folder structure (folder entries) should represent your company structure. <br> {% youtube '2z2BlejRl4A' %} |
| Step 6 - Import your data | The final step is to [import your data into {{ en.RDM }}](/rdm/windows/commands/file/import/). You can import your sessions, logins, and contacts in a few steps. <br> {% youtube 'x4NLsBvF2tU' %} |
