---
eleventyComputed:
  title: Manage custom variables
  description: "{{ en.RDM }} has lists of all custom variables which can be managed in two different locations depending on their intended use."
---
{{ en.RDM }} has lists of all custom variables, which can be managed in two different locations depending on their intended use.

To create, modify, or delete custom variables, go to ***File*** – ***Settings*** – ***Applications*** – ***Custom Variables***. Each variable requires at least a ***Name*** and a ***Value***. Note that these [variables](/rdm/concepts/intermediate-concepts/variables/) are user-specific and can be used in all data sources.

![User-specific local custom variables](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW4008_2024_1.png)

Alternatively, custom variables can be managed in ***Administration*** – ***{{ en.VLT_MAJ }} Settings*** – ***View*** – ***Variables***. Each requires at least a ***Name***, a ***Value***, and a ***Description***. All users that have access to the ***{{ en.VLT_MAJ }} Settings*** may see and use them, but they can only be used in that specific {{ en.VLT }}.

![{{ en.VLT_MAJ }}-specific custom variables](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW4009_2024_1.png)

{% snippet icon.badgeHelp %}
Custom variables will also appear in the ***Custom Variables*** subsection located under ***General*** in the ***Entry Variables*** window of the entry ***Properties***, as shown in [Access and manage variables](https://docs.devolutions.net/kb/remote-desktop-manager/knowledge-base/access-manage-rdm-variables/). 
{% endsnippet %}