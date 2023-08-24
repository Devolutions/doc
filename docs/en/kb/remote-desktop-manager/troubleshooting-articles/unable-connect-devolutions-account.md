---
eleventyComputed:
  title: Unable to connect with your {{ en.DA }}
  keywords:
  - HAR
---
You receive an error when trying to connect to {{ en.RDM }} with your {{ en.DA }}.  
## Solution
1. Close {{ en.RDM }}
1. Validate that you are able to connect to your ***{{ en.DA }}*** through a browser using this link: [Devolutions Login](https://login.devolutions.com/op/login)
1. If you get redirected to https<area>://account.devolutions.net, you must delete your browser cookies and retry the link provided at step 1.
1. If the connection does not work, delete the historical cache of your browser and see if this issue still occurs afterward.
1. If you are still unable to login, try with a different browser, or in incognito mode.
1. If it persists, open the ***Developer Tools*** of your browser by pressing on F12.
1. Go back to [Devolutions Login](https://login.devolutions.com/op/login)
1. Clear the content of the ***Console*** and ***Network*** section of the ***Developer Tool*** window.  
![!!KB4830.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4830.png)
1. Try to connect to your ***{{ en.DA }}*** once more by entering your email address on the login page.
1. When you get the error:
* In the Network section, export the trace report with the ***Export HAR*** button (arrow down button).
* In the Console section, right click on the error line and ***Save as***.  
{% snippet icon.shieldWarning %}
Keep in mind that HAR files contain sensitive data, including content of the pages you downloaded while recording and your cookies. This allows anyone with the HAR file to impersonate your account and all the information that you submitted while recording (personal details, passwords, credit card numbers, etc.).
{% endsnippet %}  

![!!KB4831.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4831.png)
11. Attach the data in an email to [service@devolutions.net](mailto:service@devolutions.net) with a brief description of your issue. We will then be able to troubleshoot this issue with you through our ticketing system.
