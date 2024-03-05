---
eleventyComputed:
  title: Connect with su-user in SSH sessions
  description: Learn how to connect with su-user in SSH sessions.
---
The Unix command ***su***, derived from ***substitute user***, grants a user the ability to execute commands with the privileges of another user account.

## Connect with su-user in SSH sessions

1. Go to the ***SSH entry properties*** in {{ en.RDM }}.

1. Go to ***General – Post login*** and click on the ***Plus button (New)***.

![General – Post login – Plus button (New)](https://cdnweb.devolutions.net/docs/en/kb/KB6030.png) 

3. Enter ***sudo su*** in the ***Macro Edition*** window. 

![Macro Edition window](https://cdnweb.devolutions.net/docs/en/kb/KB6031.png) 

An ***Expected prompt*** is not required because we want to execute it as soon as possible.

4. Go back to ***General – Post login*** and click on the ***Plus button (New)***.

1. Enter the variable ***$PASSWORD$*** and ***[sudo] password for username:*** in the ***Expected prompt*** (***username*** is used as an example).

1. Select the ***Timeout***. 

1. Click ***OK*** to close the window.

![Macro Edition window](https://cdnweb.devolutions.net/docs/en/kb/KB6034.png) 

The objective is to ensure the password is sent only when the timing is right with the intended sequence of actions. The terminal awaits the ***[sudo] password for username:*** prompt before sending the second command.

![Commands](https://cdnweb.devolutions.net/docs/en/kb/KB6033.png) 

