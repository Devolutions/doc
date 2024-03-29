---
eleventyComputed:
  title: User is unable to create templates
---
Users cannot create templates, the "+" plus icon is greyed out.
{% snippet icon.badgeInfo %}
By default, standard users cannot create or manage templates. To allow users to create or manage templates, permissions must be granted to users.
{% endsnippet %}

## Solution
You will need to allow permission in 3 locations of {{ en.RDM }} in the ***Administration*** tab.
1. In ***Administration - System Permissions - Templates - Templates***.
![!!KB4724](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4724.png)
1. In ***Administration - System Permissions - Entries - Add in root***.
![!!KB4723](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4723.png)
1. In ***Administration - {{ en.VLT_MAJ }}s Settings - Permissions - Add in root***.
![!!KB4722](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4722.png)
