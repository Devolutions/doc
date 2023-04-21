---
title: Web Browser Internet Explorer
---
### Problem 1
An error has occurred in the script on this page.
### Solution 1
When you launch a ***Website*** in Internet Explorer directly (external mode), the script errors are handled by the browser, so they are not displayed.  

In embedded mode, you need to enable the ***Hide script error*** in the properties of your session.  
![!!KB4103.png](/img/en/kb/KB4103.png)
### Problem 2
Browser extension does not appear in the toolbar but it is installed.
### Solution 2
This issue occurs when a specific option is unchecked for IE in ***Tools - Internet Options - Advanced***  

The option is called ***Enable third-party browser extensions*** After enabling this option, IE must be restarted.  
![!!KB4104.png](/img/en/kb/KB4104.png)
### Problem 3
Embedded html content is not rendered with the latest Internet Explorer version.
### Solution 3
By default {{ en.RDM }} does not use the latest IE version (emulation mode). This can be changed in ***File – Options – Type – Web, IE Mode***
### Problem 4
Accessviolationexception - attempted to read or write protected memory.
### Solution 4
When a crash occurs in {{ en.RDM }} while using some ActiveX in IE, it's often caused by Data Execution Prevention (DEP). DEP is a security feature included in Windows. It is used to prevent an application or service from executing code from a non-executable memory region.  

To fix this, change the DEP settings for the application as follows:  

1. Right Click ***My Computer – Properties***
1. Choose ***Advanced System Settings***
1. Click the ***Advanced*** tab.
1. Click ***Settings*** under ***Performance***
1. Select the tab ***Data Execution Prevention***
1. Add ***RDM*** to the list.
### Problem 5
Launched external windows (such as ie) popup in the background.
### Solution 5
You may have noticed that when you launch items such as IE windows from within {{ en.RDM }} , they pop-up in the background.  

The ForegroundLockTimeout registry value for the User’s Profile has to be modified from the default of 200000 down to 0:  

[HKEY_CURRENT_USER\Control Panel\Desktop]  

"ForegroundLockTimeout"=dword:00000000  

Please note that some programs that have an extensive library of add-ons (Like MS Word) may take the focus every time the add-on performs an action. You have to observe the reaction of your most used programs and judge what is the setup that works best for you.
### Problem 6
Unable to copy from ***Overview***
### Solution 6
Enable the option: ***Use embedded Microsoft Edge for overview panel*** in ***File - Options - Advanced - Microsoft Edge***  

Enable the option: ***Enable context menu in Overview*** in ***File - Options - User Interface - Dashboard***  

Open the ***Internet Properties*** dialogue. Go to ***Security - Custom level*** , scroll down to ***Allow Programmatic clipboard access*** and select ***Enable***
