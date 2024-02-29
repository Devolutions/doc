---
eleventyComputed:
  title: "{{ en.UVLT_MAJ }}"
  status: Topic available in German language
---
The ***{{ en.UVLT }}*** is a user centric {{ en.VLT }} for entries of any type. It allows each user to create entries that only them can access.
{% snippet icon.badgeInfo %}
The {{ en.UVLT }} is available for all [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

![{{ en.NPANE }} – {{ en.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip11205.png)

## A note on Credentials

Credentials in the {{ en.UVLT }} can be used in two ways:

1. From a session using the ***{{ en.UVLT }} search***.
1. When using the ***User Specific Settings*** feature.

These restrictions can easily be understood when you keep in mind that the {{ en.UVLT }} is in fact contained in the user area of the database. It must be used from within the {{ en.UVLT }}, or by using our extension mechanism that is user specific.

