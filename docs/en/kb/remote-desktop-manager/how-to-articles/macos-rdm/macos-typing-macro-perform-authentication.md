---
eleventyComputed:
  title: RDM {{ en.MAC }} Typing Macro to Perform Authentication
---
With {{ en.RDM }} for Mac, it is possible to send the credential through a typing macro using variables.  

1. Select a a ***Website*** session entry and click on ***Edit Entry*** in the ***Edit*** tab. Under ***General*** in the left menu, click on ***Website*** , then on the ***Login*** tab. Select ***Autofill login*** and uncheck the ***Auto submit*** option.  
![KB4217.png](/img/en/kb/KB4217.png)
1. In the ***Security – Security Settings – Others*** section of the left menu, check the ***Allow password in variable*** option. This option needs to be checked so that the typing macro can send the password to the remote session.  
![KB4218.png](/img/en/kb/KB4218.png)
1. In the ***Connection – Events*** section, click on the ***After open*** tab and add in the ***Typing macro*** section: $USERNAME${TAB}$PASSWORD${ENTER}. Click on ***Save***  
![KB4219.png](/img/en/kb/KB4219.png)
