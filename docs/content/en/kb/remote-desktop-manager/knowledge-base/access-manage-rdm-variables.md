---
eleventyComputed:
  title: Access and manage variables
  description: "{{ en.RDM }} has lists of all available variables."
---
{{ en.RDM }} has lists of all available [variables](/rdm/concepts/intermediate-concepts/variables/). Variables are versatile values that can be changed depending on the context. They act as containers for data, facilitating centralized control and manipulation.

To access and manage variables, right-click on any entry/folder, select **Properties**, and  click on the **Variables** button.

![Variables button in {{ en.RDM }}](https://cdnweb.devolutions.net/docs/RDMW4006_2024_1.png)

## Availability 
The availability of variables varies from one entry/folder to another, as it depends on what fields can be filled in the entry or folder. If [custom variables](/kb/remote-desktop-manager/knowledge-base/manage-custom-variables/) have been created for an entry, they will appear in the ***Custom Variables*** subsection located under ***General*** in the ***Entry Variables*** window of the entry ***Properties***.

![Custom variables](https://cdnweb.devolutions.net/docs/RDMW4007_2024_1.png)

{% snippet icon.badgeInfo %}
Normally, the $PARENT_NAME$ variable only works for sub-entries and folders. In 2023.1, however, it also resolves with the parent folder name of a “standard” entry that is not a sub-entry as long as they are not directly in root.
{% endsnippet %}

## Variable uses
As a general rule, variables can be used in any field of the entry/folder, though only variables with an ***X*** in the ***Supported in Name*** column can be used in the ***Name*** field. 

{% snippet icon.badgeInfo %}
Some IP variables can cause performance issues or fail to return IP addresses in certain situations. It is recommended to [use this workaround](/kb/remote-desktop-manager/knowledge-base/ip-variables/) instead.
{% endsnippet %}