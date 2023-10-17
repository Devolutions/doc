---
eleventyComputed:
  title: Website authentication
  status: Topic available in German language
---
For some websites, the auto fill function does not work automatically. It is important to note that some website will prevent you from autofilling your credentials.  

Some steps are required to properly send the username and password. Depending on the website, the process can be automatic or may require additional steps.  

## Method 1

1. Enter the credentials in the ***General*** tab of the ***Website*** entry.  
![!!KB4606](https://webdevolutions.azureedge.net/docs/en/kb/KB4606.png)  
{% snippet icon.badgeInfo %}
The {{ en.DWL }} extension is enabled by default. To disable it, select ***Disabled*** in the ***{{ en.DWL }}*** drop-down menu.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
The [***Comparing type***](/kb/devolutions-web-login/how-to-articles/urls-comparing-types/) determines if {{ en.DWL }} should offer the entry as an available entry to perform autofill.
{% endsnippet %}  

2. In the ***Login*** tab, set the ***Authentication*** to ***Form***.
1. In the ***Login – Settings*** tab, verify that the ***Autofill login*** and ***Auto submit*** options are enabled.  
![!!KB4607](https://webdevolutions.azureedge.net/docs/en/kb/KB4607.png)
<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Username
		</td>
		<td>
Enter the username to connect on the website.
		</td>
	</tr>
	<tr>
		<td>
Domain
		</td>
		<td>
Enter the domain to connect on the website.
		</td>
	</tr>
	<tr>
		<td>
Password
		</td>
		<td>
Enter the password to connect on the website.
		</td>
	</tr>
	<tr>
		<td>
Autofill login
		</td>
		<td>
Automatically fills in the credential fields when opening the web page.
		</td>
	</tr>
	<tr>
		<td>
Autofill delay
		</td>
		<td>
Set a delay between opening the web page and attempting the auto fill feature.
		</td>
	</tr>
	<tr>
		<td>
Auto submit
		</td>
		<td>
Automatically submit the credentials and try connecting to the website.
		</td>
	</tr>
</table>

1. In the ***Login – Html Control ID*** tab, click the ***Discover*** button to define the appropriate fields.  
![!!KB4608](https://webdevolutions.azureedge.net/docs/en/kb/KB4608.png)  

The ***Discover*** command searches the fields in the web page that correspond to those in the entry. This allows the application to find the appropriate fields to fill when connecting to the website.  

Once all the necessary steps have been completed, upon launching the session, the credentials will automatically be entered and logged into the site.  

## Method 2
The second method requires to manually identify the IDs corresponding to the logon fields on the login web page.  

For this example, Google Chrome will be used to inspect the logon fields.  

For both the username and password fields, you will be required to do a right-click inside each field and click on ***Inspect***.  
![!!KB4107](https://webdevolutions.azureedge.net/docs/en/kb/KB4107.png)  

You will see the corresponding IDs to be used in the ***HTML Control ID*** tab of the ***Website*** session in {{ en.RDM }}.  

Below is an example of the inspection for the Username field. You can see that the username ID is "username".  

![!!KB4108](https://webdevolutions.azureedge.net/docs/en/kb/KB4108.png)
