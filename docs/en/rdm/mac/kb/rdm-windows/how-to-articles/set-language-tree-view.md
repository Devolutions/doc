---
eleventyComputed:
  title: Set a language for the tree view
  description: In {{ en.RDM }}, you can specify a language (and a location) for the tree view in the {{ en.NPANE }}.
  keywords:
  - culture
  - language
  - location
  - region
---
In {{ en.RDM }}, you can specify a language (and a location) for the tree view in the ***{{ en.NPANE }}***. This is especially useful for languages that use characters other than or in addition to the A-Z alphabet.

{% snippet, "badgeInfo" %}
Note that the system on which {{ en.RDM }} is installed must support the specific language for it to work in {{ en.RDM }}.
{% endsnippet %}

1. In {{ en.RDM }}, go to ***File – Settings – User Interface – Tree View***.
1. In the ***Tree view culture*** field, specify a ***Language tag***.
   ![Tree view culture field](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2110.png)

   {% snippet, "badgeInfo" %}
   A list of tags is available on [this Microsoft page](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c), in a table under the ***Language tag*** column. Tags are generally composed of lowercase letters representing the language (e.g., *en* for English) followed by uppercase letters representing the location or type (e.g., *US* for the United States), separated by a hyphen. For example, *en-US* is the tag for English in the United States. Other tag formats also exist.
   {% endsnippet %}

3. Click on the ***Verify*** button next to the ***Tree view culture*** field. A window will pop up to confirm the language and location. Click ***OK*** to close it.
![Verify the culture](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2111.png)

4. Click ***OK*** in the ***Tree View*** window to save your changes and restart {{ en.RDM }} to apply them.

You have successfully modified the language of the tree view.
