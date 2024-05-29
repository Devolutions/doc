---
eleventyComputed:
  title: Large Memory Aware Application
---
{{ en.RDM }} 64 bit version allow the application to use as much memory as is available, in the meantime, we have modified {{ en.RDM }} to allow it to access more memory, but this must be paired with a modification to your operating system.  

{% snippet, "badgeInfo" %}
You can perform this only if you have more than 2 GB of RAM.
{% endsnippet %}

### Solution

### WINDOWS XP/SERVER 2003

1. Right-click ***My Computer*** and select ***Properties*** The ***System Properties*** dialog box will appear.
1. Click the ***Advanced*** tab.
1. In the ***Startup and Recovery*** area, click ***Settings***.
1. In the ***System startup*** area, click ***Edit***.  

    This will open the Windows boot.ini file in Notepad.  

1. In the ***Operating Systems*** section, add the following switches to the end of the startup line that includes the /fastdetect switch: /3GB.
1. Save the changes and close Notepad.
1. Click ***OK*** two times to close the open dialog boxes.
1. Restart the computer for the change to take effect.

### WINDOWS VISTA, WINDOWS 7, SERVER 2008  

{% snippet, "badgeInfo" %}
The memory parameter can be any value between 2048 (2 GB) and 3072 (3 GB). If you have 3GB of RAM you must reserve some for your system. If you have 3 GB of RAM, allocate 2560 Mb, for 4 GB systems use 3072.
{% endsnippet %}  

1. With ***Administrator*** rights, open command prompt (go to ***Programs, Accessories***, right-click on ***Command Prompt*** and select ***Run as Administrator***).
1. Enter the following at the prompt and press enter:
bcdedit /set IncreaseUserVA 2560
1. Close the prompt.
1. Restart the computer.
