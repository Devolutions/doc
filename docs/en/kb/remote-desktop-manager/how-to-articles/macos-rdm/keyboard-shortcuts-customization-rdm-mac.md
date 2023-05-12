---
eleventyComputed:
  title: Keyboard Shortcuts Customization in RDM {{ en.MAC }}
---
In {{ en.RDM }} for {{ en.MAC }} , you can <a href="#modify">customize individual shortcuts</a> and <a href="#ignore">specify key combinations to be ignored</a> by embedded sessions. These options are found in ***File – Preferences – User Interface – Shortcuts***

{% snippet icon.badgeInfo %}
For a list of default values for shortcuts, visit our [Keyboard Shortcuts](/rdm/mac/support-resources/keyboard-shortcuts/) topic.
{% endsnippet %}

![File - Preferences - User Interface - Shortcuts.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2102.png)

## Modify shortcuts
<a name="modify"></a>

1. Select the shortcut you want to modify from the list. You can search for it using the ***Search*** bar at the top.
1. In the drop-down list, select ***Custom*** to specify a new key combination, ***None*** to disable the shortcut, or ***Default*** to return the shortcut to its default value. If you selected the ***None*** or ***Default*** options, skip to step 4. For the ***Custom*** option, continue to step 3.
1. To the right of the drop-down list, specify your unique new key combination for the shortcut by selecting/deselecting the ***Shift*** , ***Ctrl*** , ***Alt*** , and ***Cmd*** buttons and by entering a key from your keyboard. For example, the image below represents the ***About*** function being assigned the Shift+Cmd+A shortcut.
![Shortcut Customization Example.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2094.png)
1. Repeat the steps above for each new shortcut.  
{% snippet icon.badgeInfo %}
If you change your mind, you can use the ***Reset*** button to cancel all your unsaved changes.
{% endsnippet %}  

5. When done, click ***Save***.

{% snippet icon.badgeInfo %}
After saving, you can use the ***Restore Defaults*** button to return all shortcuts to their default values. This will undo any saved changes you have made.
{% endsnippet %}

## Ignore Key Combinations
<a name="ignore"></a>

Key combinations can be ignored by embedded sessions to avoid conflict. Some are already ignored by default. You can do this by dragging and dropping set shortcuts from the table above to the one below.

Another way is to specify a key combination by selecting/deselecting the ***Shift***, ***Ctrl***, ***Alt***, and ***Cmd*** buttons at the bottom of the window and by entering a key from your keyboard. Clicking on ***Add*** will add the key combination to the table. For example, the image below represents the Shift+Cmd+A key combination being added to the list of combinations ignored by embedded sessions.  
![Example of Key Combination to Ignore.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2095.png)  

You can undo all your modifications by clicking on ***Restore Defaults*** at the bottom.