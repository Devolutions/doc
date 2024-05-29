---
eleventyComputed:
  title: Syntax highlighting
  description: Syntax highlighting displays text, particularly source code, in various colors and fonts to differentiate and emphasize different categories of terms.
---
Syntax highlighting is a feature found in text editors, commonly used for programming, scripting, and markup languages like HTML. It displays text, particularly source code, in various colors and fonts to differentiate and emphasize different categories of terms.

To find this feature in {{ en.RDM }}, go to ***File – Settings – Types – Sessions – Terminal*** and select ***Syntax highlighting***. Add a new item in the list by clicking on ***Add***.
![File – Settings – Types – Sessions – Terminal – Syntax highlighting](https://cdnweb.devolutions.net/docs/RDMW2010_2024_1.png)

Below is a list of all ***Syntax highlighting*** options.
![Syntax highlighting](https://cdnweb.devolutions.net/docs/RDMW2012_2024_1.png)

| Option               | Description                                                                                                        |
|----------------------|--------------------------------------------------------------------------------------------------------------------|
| Name                 | The name that will be displayed in the highlight list. For information only.                                       |
| Keyword              | What is used to make the match. If you do not check ***Use regex comparison*** (below in the ***Advanced*** section), it does a simple text string validation. Separate multiple keywords in the field by pressing <kbd>Enter</kbd>.                                                    |
| Highlighting enabled | Enable to highlight the specified keyword(s). You might want to save different highlightings and not set them all. |
| Foreground color     | The highlight color for the foreground (text).                                                                     |
| Background color     | The highlight color for the background (behind the text).                                                          |
| Underlined           | Enable this option to underline the highlight.                                                                     |
| Use regex comparison | Enable this option to change how the match is made to regex (regular expression) mode.                             |
| Case sensitive       | Enable this option to make the match case sensitive. This is only available in normal mode.                        |
| Complete word        | Enable this option to set the match to be on the whole word. This is only available in normal mode.                |