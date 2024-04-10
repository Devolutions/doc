---
eleventyComputed:
  title: Allow range open
---
This feature allows to open multiple machine with the quick connect in {{ en.RDM }}

Check the option Allow range open in ***File – Settings – User Interface – Quick Connect***.
![!!KB4468](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4468.png)
{% snippet icon.badgeCaution %}
This range function requires that a sequenced number is at the end of the same name for all the machines like this list: devolutions08, devolutions09, devolutions10.
{% endsnippet %}

Use this syntax in Quick Connect: MachineNameX~Y

For example: to open the machines devolutions3, devolutions4 and devolutions5 you would write devolutions3~5.
