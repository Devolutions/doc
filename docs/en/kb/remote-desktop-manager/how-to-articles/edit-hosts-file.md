---
title: Edit hosts file
---
IT technicians, as well as web developers, often need to edit the Windows hosts file. This requires starting your favorite editor using elevated privileges (obviously only if UAC is active), browsing for the hosts file which is deep in the windows folder and enclosed in a hidden folder on top of that.

For your own machine, you can create a shortcut to achieve this goal, but experience tells us that most people do not bother with it, ending up losing precious time when they must modify the hosts file.

What better tool than one that you use every day, which is already running in the notification area, to implement a solution with. If the machines you work on have the same setup, this will work for all of them.

Simply create a session with the proper settings.

## Steps

1. Create a new ***Command Line (External Application)*** session and enter a session name. In the ***General*** tab,click on the ellipsis button and select your editor of choice in the Run text box. Then, paste the following after the name of the program: "c:\Windows\System32\drivers\etc\hosts". Ensure a blank space separates the two and includes the double quotes.  
![!!KB4548.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4548.png)
1. In the ***Advanced*** tab, check the ***Run as Administrator*** option.  
![!!KB4549.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4549.png)  

{% snippet icon.badgeInfo %}
Close your editor before proceeding with those steps. If your editor is already running, it will not elevate the privileges. We have implemented an AutoHotKey script that closes the editor of choice, but being that it shuts off without saving pending changes, it is not a risk-free solution. It will all depend on your chosen editor's reaction to the WM_QUIT message.
{% endsnippet %}

It is a simple and efficient solution. You can use this for any tool you use regularly. Paired with shared data source it makes for a powerful library of tools for your team.

## Alternative if you want to use the Parameters tab

Some people wish to use the parameters tab because, upon launching, it will display a dialog where you can confirm the value of the parameters and even allows you to change them for whole new values.

1. Create a new Command Line session and in the ***Advanced*** tab, check the ***Run as Administrator*** and disable the ***Use Shell Execute*** option.  
![!!KB4550.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4550.png)
1. In the ***General*** tab,click on the ellipsis button and select your editor of choice in the ***Run*** text box. Then enter "{1}" after the name of the executable, keeping a space between the two values and including the quotes.  
![!!KB4551.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4551.png)
1. In the ***Parameters*** tab, set Parameter # 1 type to ***Text*** and then enter the following in the Default Value: c:\Windows\System32\drivers\etc\hosts  
![!!KB4552.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4552.png)  
This is helpful when mostly using the tool with a certain file, but occasionally need to edit another file. You could have separate entry for each file you commonly edit, but this shows how flexible {{ en.RDM }} can be.
