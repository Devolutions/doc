---
eleventyComputed:
  title: Keyboard shortcuts customization in {{ en.RDMMAC }}
---
In {{ en.RDMMAC }}, you can [customize individual shortcuts](#modify-shortcuts) and [specify key combinations to be ignored](#ignore-key-combinations) by embedded sessions. These options are found in ***File – Preferences – User Interface – Shortcuts***.

{% snippet, "badgeInfo" %}
For a list of default values for shortcuts, visit [Keyboard shortcuts](/rdm/mac/support-resources/keyboard-shortcuts/).
{% endsnippet %}

![File – Preferences – User Interface – Shortcuts](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2102.png)

## Modify shortcuts
1. Select the shortcut you want to modify from the list. You can search for it using the ***Search*** bar at the top.
1. In the drop-down list, select ***Custom*** to specify a new key combination, ***None*** to disable the shortcut, or ***Default*** to return the shortcut to its default value. If you selected the ***None*** or ***Default*** options, skip to step 4. For the ***Custom*** option, continue to step 3.
1. To the right of the drop-down list, specify your unique new key combination for the shortcut by selecting/deselecting the <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Alt</kbd>, and <kbd>Cmd</kbd> buttons and by entering a key from your keyboard. For example, the image below represents the ***About*** function being assigned the <kbd>Shift</kbd>+<kbd>Cmd</kbd>+<kbd>A</kbd> shortcut.
![Shortcut Customization Example](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2094.png)
1. Repeat the steps above for each new shortcut.
   {% snippet, "badgeInfo" %}
   If you change your mind, you can use the ***Reset*** button to cancel all your unsaved changes.
   {% endsnippet %}
1. When done, click ***Save***.

{% snippet, "badgeInfo" %}
After saving, you can use the ***Restore Defaults*** button to return all shortcuts to their default values. This will undo any saved changes you have made.
{% endsnippet %}

## Ignore Key Combinations
Key combinations can be ignored by embedded sessions to avoid conflict. Some are already ignored by default. You can do this by dragging and dropping set shortcuts from the table above to the one below.

Another way is to specify a key combination by selecting/deselecting the <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Alt</kbd>, and <kbd>Cmd</kbd> buttons at the bottom of the window and by entering a key from your keyboard. Clicking on ***Add*** will add the key combination to the table. For example, the image below represents the <kbd>Shift</kbd>+<kbd>Cmd</kbd>+<kbd>A</kbd> key combination being added to the list of combinations ignored by embedded sessions.
![Example of Key Combination to Ignore](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2095.png)

You can undo all your modifications by clicking on ***Restore Defaults*** at the bottom.
