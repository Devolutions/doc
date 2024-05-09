---
eleventyComputed:
  title: "{{ en.DHUBP }} Legacy decommissioning"
  description: If this transition does not occur automatically, you will need to manually migrate your data.
---
The teams for {{ en.DHUBP }} and {{ en.DHUBB }} are merging as part of Devolutions’ initiative to streamline our operations and development processes. Effective October 31, 2024, {{ en.DHUBP }} adopted the same backend as {{ en.DHUBB }}. This alignment will standardize our update processes. For further details on the benefits of these changes, please read our blog post: Streamlining {{ en.DHUBP }}.

{{ en.DHUBP }} Legacy will be completely phased out by August 5, 2024. Ideally, your data source should automatically transition from the legacy system to the new platform without requiring your input. However, if this transition does not occur automatically, you will need to manually migrate your data. Failure to migrate by the deadline will result in permanent data loss.

To migrate your data, follow these steps:

1. Update {{ en.RDM }} to version 2023.3 or later if applicable.
1. In {{ en.RDM }}, navigate to ***File – Data sources – Add a new data source***.
1. Choose the {{ en.DHUBP }} data source type and click ***Add***.
1. Provide a name for your data source and the email associated with your account.
1. Click ***Add***, then ***Save***.
1. You might be prompted to authenticate via the web; if so, enter your credentials and click ***Continue***.

Your migration is complete, and you can now access your {{ en.DHUBP }} entries through the new data source.

If instead of migrating you decide to permanently delete your {{ en.DHUBP }} account and all associated data:

1. Visit your {{ en.DA }} portal.
1. Under {{ en.DHUBP }}, click the three dots next to your {{ en.DHUBP }} and select ***Delete***.
1. Carefully read the warning, acknowledge by checking the ***I understand*** box, and confirm by clicking ***Delete***.