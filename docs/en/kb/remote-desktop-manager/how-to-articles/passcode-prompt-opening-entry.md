---
  title: Passcode prompt when opening an entry
---
Sometimes you want to ensure that your users are really opening the right session.

## Workflow

In the ***Events*** tab, in the ***Before connect*** section, when you select ***Message Prompt***, you will notice a ***Passcode*** field.  
![!!KB4560](https://webdevolutions.azureedge.net/docs/en/kb/KB4560.png)  

There is a field to enter a ***Message*** and another one for a ***Passcode*** The idea is not to add another password to launch the session, but rather to act as a safeguard. For example, you could set the message to “Warning! This is a production server. Type YES to continue.” and set the ***Passcode*** to YES.  

This allows you to give just a little jolt when you attempt to launch the session!  
![!!KB4561](https://webdevolutions.azureedge.net/docs/en/kb/KB4561.png)
