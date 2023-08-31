---
eleventyComputed:
  title: Configure a Credential Redirection entry in {{ en.RDM }}
  description: Learn how to configure a Credential Redirection entry in {{ en.RDM }}
---
The ***Credential Redirection entry*** enables autofill from any password manager and with a favorite Web browser.  

## Create a Credential Redirection entry

1. Go to ***New Entry – Credential Management – Password Management – Credential Redirection*** to create a new ***Credential Redirection entry***. 
![Create a new Credential Redirection entry](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6040.png)  
1. Enter a ***Name*** and choose a ***Folder***.  
1. Enter a ***Name ID*** (case sensitive). This must be unique within your repository. It will be used to identify the credentials and will be exposed as a subdirectory of the URL used to intercept the credentials.  
1. Select a specific browser, or use the default one.  
![Select a specific browser, or use the default one](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6072.png)   
1. Click ***OK*** to save.  
1. Open your new ***Credential Redirection entry***. {{ en.RDM }} displays the following informative dialog.  
![Informative dialog ](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6073.png)  

The selected browser is launched for a URL that looks like this: `http://127.0.0.1:9999/LastPass%20redirection/login.aspx`.  

Notice the middle part is the ***Name ID*** entered previously. Depending on your configuration, the credentials are entered automatically, or you have to press a key combination to initiate your tool. Please refer to the documentation of your tool for more information.

7. Enter your credentials to save in the browser.  
![Enter your credentials](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6075.png)  
{{ en.RDM }} will now process your credentials.  
![{{ en.RDM }} will now process your credentials](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6074.png)  

## Open a session using the Credential Redirection entry

1. Create a new entry, we will use an RDP entry for this example.  
![Create a new entry](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6078.png)  
1. Enter a ***Name*** and choose a ***Folder***.  
1. For ***Credentials***, select ***Linked ({{ en.VLT }})*** and then your newly created ***Credential Redirection entry***.  
![Credentials section](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6077.png) 
1. Select your session then launch it. {{ en.RDM }} will display this informative dialog.  
![Informative dialog](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6079.png)   
1. In the web browser, enter your credentials and press ***Submit***. The page will be closed after a delay.  
![Enter your credentials in the web browser](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6080.png)   
The RDP session is launched and authentication is successful.