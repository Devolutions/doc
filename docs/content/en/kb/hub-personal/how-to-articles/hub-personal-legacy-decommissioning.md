---
eleventyComputed:
  title: "{{ en.DHUBP }} legacy decommissioning"
  description: If this transition does not occur automatically, you will need to manually migrate your data.
---
The teams for {{ en.DHUBP }} and Business are merging as part of Devolutions’ initiative to streamline our operations and development processes. Effective October 31, 2024, {{ en.DHUBP }} adopted the same back-end as {{ en.DHUBB }}. This alignment standardizes our update processes. For further details on the benefits of these changes, please read our blog post: [Streamlining {{ en.DHUBP }}](https://blog.devolutions.net/2023/10/streamlining-devolutions-hub-personal/).

The migration can be done by [signing in to your {{ en.DHUBP }}](https://hub.devolutions.net). You will then receive prompts to guide you through the data upgrade and transition. {{ en.DHUBP }} legacy will be completely phased out by August 5, 2024. Failure to migrate by the deadline will result in permanent data loss.

## Migration issues
Your data source should automatically transition from the legacy system to the new platform without requiring your input. However, if this transition does not occur automatically, you will need to manually migrate your data through {{ en.RDM }}: 

1. Update {{ en.RDM }} to version 2023.3 or later if applicable.
1. In {{ en.RDM }}, navigate to ***File – Data sources – Add a new data source***.
![File – Data sources – Add a new data source](https://cdnweb.devolutions.net/docs/RDMW2047_2024_1.png)
1. Choose the {{ en.DHUBP }} data source type and click ***Add***.
![{{ en.DHUBP }} data source type](https://cdnweb.devolutions.net/docs/RDMW2048_2024_1.png)
1. Provide a name for your data source and the email associated with your account.
![Hub information](https://cdnweb.devolutions.net/docs/RDMW2049_2024_1.png)
1. Click ***Add***, then ***Save***.
1. You might be prompted to authenticate via the web; if so, enter your credentials and click ***Continue***.
![Hub credentials](https://cdnweb.devolutions.net/docs/CLOUD2002_2024_1.png)

The migration is complete, and you can now access your {{ en.DHUBP }} entries through the new data source.

{% snippet icon.badgeHelp %}
If you still encounter issues or for any questions regarding this migration, please [contact our support team](mailto:service@devolutions.net).
{% endsnippet %}

## Deleting your {{ en.DHUBP }}

If instead of migrating you decide to permanently delete your {{ en.DHUBP }} and all associated data:

1. Go to the [{{ en.DPORTAL }}](https://portal.devolutions.com/hub-personal) and log in.
1. Under {{ en.DHUBP }}, click the three dots next to your Hub and select ***Delete***.
![Delete your Hub](https://cdnweb.devolutions.net/docs/CLOUD2000_2024_1.png)
1. Carefully read the warning, acknowledge by checking the ***I understand*** box, and confirm by clicking ***Delete***.
![Confirmation](https://cdnweb.devolutions.net/docs/CLOUD2001_2024_1.png)

Your {{ en.DHUBP }} has now been permanently deleted, along with all its contents.