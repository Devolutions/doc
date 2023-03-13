---
title: Add Website
---

The Add Website button is only available while in the <a href="/server/dwl/devolutions-web-login-user-interface/side-menu/#matching-tab">Matching</a> tab., which is the tab selected when opening the extension, or when browsing through the vaults of the <a href="/server/dwl/devolutions-web-login-user-interface/side-menu/#all-entries-tab">All Entries</a> tab. It opens a new tab in your browser that allows you to add a website entry in {{ en.DPS }} through {{ en.DWL }} .  

When {{ en.DPS }} is used as the data source, the entry configuration is done in the General tab. 

![Add Website](/img/en/server/ServerOp2049.png)

See the table below to learn about each field/setting from this view. 
<table>
	<tr>
		<th>
FIELD/SETTING 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Name 
		</td>
		<td>
Enter a name for your entry. This field is automatically filled in by {{ en.DWL }} , but can still be modified. 
		</td>
	</tr>
	<tr>
		<td>
URL 
		</td>
		<td>
Enter the URL of the website’s login page. This field is automatically filled in by {{ en.DWL }} , but can still be modified. 
		</td>
	</tr>
	<tr>
		<td>
Add Equivalent URL 
		</td>
		<td>
Click on the Add Equivalent URL button next to the URL field to display an Equivalent URLs field (see below). You can add more than one Equivalent URLs field by clicking again on the button. 
		</td>
	</tr>
	<tr>
		<td>
Equivalent URLs 
		</td>
		<td>
Enter a URL that leads to the same page or is equivalent to the one in the URL field.  <br>

This field is only available after having clicked on the Add Equivalent URL button next to the URL field. 
		</td>
	</tr>
	<tr>
		<td>
Delete 
		</td>
		<td>
	
Delete the Equivalent URLs field next to this button.  

This button is only displayed next to the Equivalent URLs field after having clicked on the Add Equivalent URL button next to the URL field. 
		</td>
	</tr>
	<tr>
		<td>
Credentials 
		</td>
		<td>
In the drop-down list, select Custom , Linked (Vault) , Inherited , Linked (User Vault) , Find by name (User Vault) , or None to specify to {{ en.DWL }} how to retrieve your credentials. Some of these options give you access to additional settings. 
		</td>
	</tr>
	<tr>
		<td>
Credential Selection 
		</td>
		<td>
Select the credential entry that will be used to fetch the credentials for your new website entry. {{ en.DWL }} will only show entries of the Credential Entry type to be linked to your entry. The credential entry location must first be selected in the Vault drop-down list.  

It is also possible to select Prompt on connection to be asked each time you connect.  

This field is only available if Linked (Vault) or Linked (User Vault) is selected in the Credentials drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
User vault search credentials 
		</td>
		<td>
Enter the name of the credential in your {{ en.PVLT }} and {{ en.DWL }} will search in it for the specified name. If the field is left empty, when launched, a Credential list will open with all available credentials entries from your {{ en.PVLT }} .  

This field is only available if Find by name (User Vault) is selected in the Credentials drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Enter the username you use to log in to the website. 
This field is only available if Custom is selected in the Credentials drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Enter the password you use to log in to the website. The password will be hidden. Below the field is a strength indicator for your password.  

This field is only available if Custom is selected in the Credentials drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Reveal/Hide password 
		</td>
		<td>
Reveal or hide the password that was entered. This field is only available next to the Password field if Custom is selected in the Credentials drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Password Generator 
		</td>
		<td>
Open the Password Generator window, which allows you to create a strong and secure password adapted to your needs and to website requirements. 
		</td>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Enter a description for your new entry. 
		</td>
	</tr>
	<tr>
		<td>
Vault 
		</td>
		<td>
Choose to store your new website entry in your User Vault or in the currently selected Vault in {{ en.DPS }} . 
		</td>
	</tr>
	<tr>
		<td>
Destination folder 
		</td>
		<td>
Enter the name of the folder in which your new entry will be stored in {{ en.DPS }} . 
		</td>
	</tr>
	<tr>
		<td>
Save 
		</td>
		<td>
Save the settings of your new website entry and create the entry. 
		</td>
	</tr>
	<tr>
		<td>
Cancel 
		</td>
		<td>
Cancel the creation of a new website entry and clear all unsaved changes to settings. 
		</td>
	</tr>
</table>

{% snippet icon.badgeInfo %} 
Follow our step-by-step guide on how to [add a website entry with {{ en.DWL }}](/server/dwl/using-devolutions-web-login/add-website-entry-dwl/) . 
{% endsnippet %}
 

