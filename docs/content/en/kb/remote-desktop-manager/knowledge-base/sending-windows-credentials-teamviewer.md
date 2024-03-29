---
eleventyComputed:
  title: Sending Windows credentials to TeamViewer
  description: Sending Windows credentials to TeamViewer with a typing macro.
---
Many users have requested the ability to automate the login process on a Windows system through TeamViewer.

Since we are not able to send the password automatically inside the TeamViewer session, you would need to accomplish this with a typing macro.

1. Open {{ en.RDM }}.
1. Add a new entry and select ***Typing Macro*** under ***Macro/Script/Tool***.  
1. Enter ***$USERNAME${TAB}$PASSWORD${TAB}{ENTER}*** in the general field of the typing macro.

{% snippet icon.badgeInfo %}
Please note that the ***initial wait*** has been configured to 5 seconds, this varies depending on each user system.
{% endsnippet %}  

4. Click ***Add*** to save.
![$USERNAME${TAB}$PASSWORD${TAB}{ENTER}](https://cdnweb.devolutions.net/docs/RDMW6016_2024_1.png)  
1. Open your ***Credential Management entry***.  

You can create a ***Credential Management entry*** in {{ en.RDM }} by clicking ***Add a new entry – Credential Management*** and selecting ***Username / Password***. 

6. Go the properties of your Credential entry and enable ***Allow password in variable*** under ***Security Settings***.
1. Click ***Update*** to save.
![Allow password in variable](https://cdnweb.devolutions.net/docs/RDMW6014_2024_1.png)

## Advanced data source

If you have an ***advanced data source,*** you will need to enable ***Allow password variable in macros***.

1. Go to ***Administration – System Settings*** in the ribbon of {{ en.RDM }}.
1. Select ***Password Management – Password Policy – Allow password variable in macros***.
![Password Management – Password Policy – Allow password variable in macros](https://cdnweb.devolutions.net/docs/RDMW6012_2024_1.png)

The next step happens when the TeamViewer session is open and credentials are ready to be entered. 

3. Right-click on your credential entry and select ***Macros/Scripts/Tools - Send Credentials*** (or the name you gave your entry).
![Macros/Scripts/Tools - Send Credentials](https://cdnweb.devolutions.net/docs/RDMW6015_2024_1.png)

In conclusion, put the mouse cursor in the appropriate login field and the typing macro will do the rest.

## ID entered instead of credentials in the TeamViewer entry 

If you have entered an ID instead of credentials in the TeamViewer entry, a ***$TOOL_PASSWORD$*** variable is required. 

1. Open {{ en.RDM }}.
1. Add a new entry and select ***Typing Macro*** under ***Macro/Script/Tool***.  
1. Enter ***$TOOL_PASSWORD${TAB}{ENTER}*** in the general field of the typing macro.
1. Click ***Add*** to save.
![$TOOL_PASSWORD${TAB}{ENTER}](https://webdevolutions.blob.core.windows.net/docs/RDMW6019_2024_1.png)
1. Go to the properties on your TeamViewer entry and select ***Events – After Open***.
1. Execute a macro automatically by either writing the macro or linking to a macro entry.  
1. Click ***Update***.
![Events – After Open](https://cdnweb.devolutions.net/docs/RDMW6017_2024_1.png)

The entry where the ***$TOOL_PASSWORD$*** macro fetch the credentials must be linked.

8. Edit your TeamViewer entry and go to ***Management Tools***.
1. Select ***Linked ({{ en.VLT }})*** and your entry in the ***Credentials*** drop-down menus. 
1. Click ***Update*** to save.
![Select Linked ({{ en.VLT }})](https://webdevolutions.blob.core.windows.net/docs/RDMW6018_2024_1.png)