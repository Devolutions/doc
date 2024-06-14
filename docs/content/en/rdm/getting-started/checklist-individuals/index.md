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
| Step 1 - Register your [license](https://www.youtube.com/watch?v=_FFSo_Bi3GY) <ul><li>[Team registration](/rdm/windows/installation/client/registration/team-edition/)</li><li>[Trial request](/rdm/windows/installation/client/registration/trial-request/)</li></ul> | {{ en.RDM }} Team Edition grants you a 30-day trial. If you decide not to register by the end of the trial, your data will not be altered or erased, and you will have full access to it once you provide a license key. |
| Step 2 - Add your [data source](https://www.youtube.com/watch?v=R3VYxnOdjoE) and set up your {{ en.DA }} and master key | Warning: When choosing any data source type that is not on-premises, you must consider the security of the data at rest and in transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or a [security provider](/rdm/commands/administration/security/security-providers/) for [advanced data sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). This ensures that only you can read the data. <br> Upon first launch, {{ en.RDM }} uses a local SQLite data source. The different data sources are explained in [Data Sources](/rdm/windows/data-sources/). For help selecting a data source tailored to your needs, please see [Choosing your data source (Individuals)](/rdm/windows/getting-started/checklist-individuals/select-data-source-type/). |
| Step 3 - Set up your [Devolutions {{ en.OBACK }}](https://www.youtube.com/watch?v=KegabQ0JmRw) | Devolutions [{{ en.OBACK }}](/cloud/overview/what-is-cloud/) allows you to securely back up your information for selected data sources. The backup is automatically executed 30 seconds after any modifications made to the data source content. It is a best practice to always back up your data source. |
| Step 4 - Create your [default settings](https://www.youtube.com/watch?v=4sib5cliffA) | In ***File – Settings***, you can create, modify, or reset [default settings](/rdm/windows/commands/file/templates/default-settings/) for your templates. Each entry type is supported and can have a default template defined to fit your requirements. |
| Step 5 - Create your [folder structure](https://www.youtube.com/watch?v=2z2BlejRl4A) | Top level folders are at the foundation of a solid security structure. Your folder structure (folder entries) should represent your company structure. |
| Step 6 - [Import your data](https://www.youtube.com/watch?v=x4NLsBvF2tU) | The final step is to [import your data into {{ en.RDM }}](/rdm/windows/commands/file/import/). You can import your sessions, logins, and contacts in a few steps.|
