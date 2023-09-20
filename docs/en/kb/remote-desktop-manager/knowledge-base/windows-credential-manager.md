---
eleventyComputed:
  title: Windows Credential Manager
---
The ***Windows Credential Manager*** allows you to store credentials, such as usernames and passwords, which you can use to log on to websites or other computers on a network. By storing your credentials, Windows can automatically log you on to websites or other computers. Credentials are saved in special folders on your computer called {{ en.VLT }}s. Windows and other programs (such as web browsers) can securely give the credentials in these {{ en.VLT }}s to other computers and websites.  
![!!KB4437](https://webdevolutions.azureedge.net/docs/en/kb/KB4437.png)  
You can learn more from Microsoft's [Windows Credential Manager](https://msdn.microsoft.com/en-us/library/windows/desktop/aa374792(v=vs.85).aspx).  
{% snippet icon.badgeCaution %}
In the event that you store the password locally in the ***Windows Credential Manager*** And you use different RDP sessions that point to the same host. ***Windows Credential Manager*** will override the RDP credentials saved in the entry of {{ en.RDM }}.  

If this is your case, open ***Windows Credential Manager*** and click ***Windows Credentials*** Locate the credential, click the arrow next to it and ***Remove*** the credential.  

To prevent this from happening again, you would also need to uncheck the option ***Store password locally*** in the ***General*** tab section of the RDP entry.
{% endsnippet %}
