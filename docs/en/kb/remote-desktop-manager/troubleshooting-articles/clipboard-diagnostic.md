---
eleventyComputed:
  title: Clipboard Diagnostic
  status: Topic available in German language
---
Using the ***Copy Username*** and ***Copy Password*** features in {{ en.RDM }} can sometimes not work properly because of other applications and process that are stealing values from the clipboard. The ***Clipboard Diagnostic*** tool helps to view all requests in real time and identify which application is involved.

## Steps

1. Go in ***Help – Clipboard Diagnostic*** to open the diagnostic tool dialog.
1. Select one of your credential entries and perform a ***Copy Username and Password***.
1. Paste the information in ***Notepad***.
1. The ***Blocklisted*** and ***Allowlisted*** boxes should display all involved applications.  

In this screen shot you see "notepad++" Windows Clipboard History (<kbd>Windows</kbd>+<kbd>V</kbd>), it is blocked by default. In your case, ***Notepad*** should be allowlisted but you most likely have another process either blocklisted or allowlisted.  

![!!KB8042](https://webdevolutions.azureedge.net/docs/en/kb/KB8042.png)  

5. What you want to do now is to blocklist any process that was not ***Notepad*** from viewing the content of the clipboard. Therefore, right-click on the allowlisted process you want to block and select ***Add***. Enter the ***Description*** (not required) and leave the process name as is. 

The ***Add*** created a persistent rule to always ignore clipboard request from that process.  

![!!KB4949](https://webdevolutions.azureedge.net/docs/en/kb/KB4949.png)  

6. In the ***Configuration*** tab, there is a section called ***Delays***, this is useful for applications like Chrome that asks for the clipboard content more than once. That is used to set a delay for how long we will allow Chrome, for example, to ask for the content of the clipboard. The same logic applies to select which rules are used. We match on process and if supplied the command line and apply the delay. The default is 100 ms, so if for some reason you paste into Chrome but only the password is pasted, try increasing the delay by starting with 150 ms, ***Save*** then try ***Copy Username & Password***.
1. Did it work? If yes you are done, if not try 200 ms.
1. If it still fails at 200 ms, set the ***Process name*** to ***Starts with*** instead of ***Equals*** and increase the ***Delay*** to 500 ms.  

![!!KB8044](https://webdevolutions.azureedge.net/docs/en/kb/KB8044.png)  

There is a ***Send*** button at the bottom of the form that will send our support team the ***Clipboard Diagnostic Report***. It is essentially everything you see on both tabs. From there we can advise you on how to configure your {{ en.RDM }}.
