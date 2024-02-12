---
eleventyComputed:
  title: Play list management
  description: First, open your Play List Management in Edit – Play List – Play List Management.  
---
{% tabs %}
{% tabItem "Windows" %}
First, open your Play List Management in ***Edit – Play List – Play List Management***.  

There are five methods of using your Play List.  
![Default Mode](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10260.png) 

| OPTION                      | DESCRIPTION                                                            |
|-----------------------------|------------------------------------------------------------------------|
| Open                    | Launch the selected Play List.                                             |
| Open Embedded           | Overrides the display selection of entries inside the Play Lists and launches them as Embedded (some entries might not support this).                                                                                                 |
| Select in ***{{ en.NPANE }}*** | Selects all entries the Play List contains in the ***{{ en.NPANE }}***.                                                                                                   |
| Execute Script Against... | This will prompt for you to select the ***Typing Macro*** (exclusively) you wish to execute against your Play list.                                                                                                  |
| Launch at startup         | Here you can select a specific Play List you would like launched whenever the application starts. You can also default back to ***None*** or ***Last opened Connections***.                                                                                 |
{% endtabItem %}

{% tabItem "macOS" %}
There are 3 way to open a Play list:

| OPTION                         | DESCRIPTION                                               |
|--------------------------------|-----------------------------------------------------------|
| Open                           | Items will open using the specified mode in each session. |
| Open Embedded                  | Items will all open using the embedded mode.              |
| Select in ***{{ en.NPANE }}*** | Items will be selected in the ***{{ en.NPANE }}***, this allow you to choose another command to run on the section as a second step. |

### Open items in default mode
In ***View – Play list***, select the Play list to open and click on ***Open***.  
![Open Default Mode](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10115.png)

### Open items in Embedded mode
In ***View – Play list***, select the Play list to open and click on ***Open Embedded***.  
![Open Embedded Mode](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10116.png)

### Open items with Select in ***{{ en.NPANE }}***
In ***View – Play list***, select the Play list to open and click on ***Select*** in the ***{{ en.NPANE }}***. Then, select the desired entries in your ***{{ en.NPANE }}*** using <kbd>Cmd</kbd>+click.  
![Select in ***{{ en.NPANE }}***](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10117.png)

## Menu
You can use the menu in the Play list Management for multiple options.  
![Play list Management Menu](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10118.png)

### Settings
| OPTION                                                                                         | DESCRIPTION                        |
|------------------------------------------------------------------------------------------------|------------------------------------|
| ![!!add-large](https://webdevolutions.azureedge.net/docs/common/add-large.png)                 | Create a new Play list.            |
| ![!!remove](https://webdevolutions.azureedge.net/docs/common/remove.png)                       | Delete an existing Play list.      |
| ![!!entry-SampleGear1](https://webdevolutions.azureedge.net/docs/common/entry-SampleGear1.png) | Edit the selected Play list.       |
| ![!!refresh-macOS](https://webdevolutions.azureedge.net/docs/common/refresh-macOS.png)         | Refresh your Play list Management. |
| ![!!copy-macOS](https://webdevolutions.azureedge.net/docs/common/copy-macOS.png)               | Copy the selected Play list.       |
{% endtabItem %}
{% endtabs %}