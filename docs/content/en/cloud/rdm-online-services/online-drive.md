---
eleventyComputed:
  title: "{{ en.DOD }}"
---
{% snippet, "badgeInfo" %}
***{{ en.DOD }}*** will be removed from {{ en.DPORTAL }}. You can still [access the URL](/rdm/kb/general-knowledge/rdm-online-services-removed-devolutions-portal/) if needed
{% endsnippet %}

{% youtube 'R3VYxnOdjoE' %}

The ***{{ en.DOD }}*** is a free cloud file storage service with no limitations and perfect for standalone users. You can store and synchronize your entries online and access your sessions from anywhere.

{% snippet, "shieldWarning" %}
Even though this is a cloud service, you MUST use our [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/) service to keep history of your data. Since Devolutions offers a free backup service, we do not maintain multiple versions of the {{ en.DOD }} content. This makes it critical that you enable the backup feature. This service will keep multiple versions of your file and is the best option.
{% endsnippet %}

{% snippet, "badgeInfo" %}
The {{ en.DOD }} is for single users only, and it cannot share files.
{% endsnippet %}

## Settings

1. From {{ en.RDM }} in ***File – Data sources***, create a new ***{{ en.DOD }}*** data source.
![!!clip4017](https://cdnweb.devolutions.net/docs/docs_en_cloud_clip4017.png)
1. Enter your {{ en.DA }} credentials, or change the ***Connection mode*** to use the [Application password](/cloud/sign-in-security/application-passwords/).
![!!Cloud4056](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4056.png)
{% snippet, "badgeNotice" %}
Consult [{{ en.DOD }} Settings](/rdm/windows/data-sources/data-sources-types/online-drive/) for more information on the configuration settings.
{% endsnippet %}

3. Click on the ***Backup*** tab to set your ***{{ en.OBACK }}*** for your new data source.
![!!Cloud4057](https://cdnweb.devolutions.net/docs/docs_en_cloud_Cloud4057.png)
1. Click ***OK*** twice to save.
