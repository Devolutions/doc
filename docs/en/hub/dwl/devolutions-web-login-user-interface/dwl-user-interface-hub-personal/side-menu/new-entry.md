---
eleventyComputed:
  title: New entry
---
The ***New Entry*** button is only available while in the [***Matching***](/hub/dwl/devolutions-web-login-user-interface/dwl-user-interface-hub-personal/side-menu/#matching-tab) tab, which is the tab selected when opening the extension, or when browsing through the entries of the [***All Entries***](/hub/dwl/devolutions-web-login-user-interface/dwl-user-interface-hub-personal/side-menu/#all-entries-tab) tab. You can choose to create a new ***Website***, ***Credit Card***, ***Contact***, or ***Secure Note*** entry.  
![New Entry Type Selection](https://webdevolutions.azureedge.net/docs/en/hub/Hub2134.png) 

When the entry type is selected, a new tab opens in your browser that allows you to add an entry of that type in {{ en.DHUBP }} through {{ en.DWL }}.  

When {{ en.DHUBP }} is used as the data source, the basic entry configuration is done in the ***General*** tab, but other parameters are also available in other tabs. Below is an example of the ***General*** tab settings when creating a website entry.  
![New Entry - Website (General Tab)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2135.png) 

The tables below list all fields/settings available in the ***New Entry*** windows. The different sections and subsections represent the entry types and the left menu tabs respectively.  

## Website Entry 

### General 
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
Enter a name for your entry. This field is automatically filled in by {{ en.DWL }}, but can still be modified. 
		</td>
	</tr>
	<tr>
		<td>
Folder 
		</td>
		<td>
Enter the name of the folder in which your new entry will be stored in {{ en.DHUBP }}. 
		</td>
	</tr>
	<tr>
		<td>
Select Folder 
		</td>
		<td>
Select in a tree view the folder in which your new entry will be stored in {{ en.DHUBP }}. You can also create a new folder and edit or delete existing ones. 
		</td>
	</tr>
	<tr>
		<td>
Host 
		</td>
		<td>

Select in the drop-down list how {{ en.DWL }} will fetch the host between ***Custom***, ***Linked ({{ en.VLT }})***, or ***Inherited***. If you select ***Custom***, the ***URL*** field (see below) will appear. If you select ***Linked ({{ en.VLT }})***, a drop-down list will appear in which you will be able to select the host. 
		</td>
	</tr>
	<tr>
		<td>
URL 
		</td>
		<td>
Enter the URL of the website’s login page. This field is automatically filled in by {{ en.DWL }}, but can still be modified. 
		</td>
	</tr>
	<tr>
		<td>
Credentials 
		</td>
		<td>
Select in the drop-down list between ***Custom***, ***Linked ({{ en.VLT }})***, ***Inherited***, ***My personal credentials***, or ***None*** to specify to {{ en.DWL }} how to retrieve your credentials. Some of these options give you access to additional settings. 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Enter the username you use to log in to the website.  

This field is only available if ***Custom*** is selected in the ***Credentials*** drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Domain 
		</td>
		<td>
Enter a domain for the website.  

This field is only available if ***Custom*** is selected in the ***Credentials*** drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Enter the password you use to log in to the website. The password will be hidden. Below the field is a strength indicator for your password.  

This field is only available if ***Custom*** is selected in the ***Credentials*** drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Reveal/Hide password 
		</td>
		<td>
Reveal or hide the password that was entered. 
This field is only available next to the ***Password*** field if ***Custom*** is selected in the ***Credentials*** drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Password Generator 
		</td>
		<td>
Open the ***Password Generator*** window, which allows you to create a strong and secure password adapted to your needs and to website requirements. 
		</td>
	</tr>
	<tr>
		<td>
Compare type 
		</td>
		<td>
Select how the entered URL is compared and matched to the website URL. Choose between ***Default, Base domain***, ***Compare regex with URL domain***, ***Compare regex with full URL***, ***Host***, ***Start with***, ***Exact***, ***or Never***. 
		</td>
	</tr>
	<tr>
		<td>
{{ en.DWL }}
		</td>
		<td>
Select from the drop-down list between ***Default***, ***Disabled***, or ***Enabled***. If disabled, your credentials for this entry will not be suggested when accessing that particular website. We recommend to leave this option enabled. 
		</td>
	</tr>
</table>

### Connection 

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
Authentication 
		</td>
		<td>

Select between ***Form*** or ***Basic*** authentication depending on the website. The default value is ***Form*** and, in most cases, it does not need to be modified. 
		</td>
	</tr>
	<tr>
		<td>
Autofill login 
		</td>
		<td>
Enable this option if you want {{ en.DWL }} to automatically fill in your credentials when loading the website login page. This only applies to that specific entry.  

***Autofill login*** is similar to the ***Automatically fill in credentials on load*** feature in the {{ en.DWL }} [***Settings***](/hub/dwl/settings/), with the difference that the former applies only to the specific entry and the latter applies to all your entries. Note that the {{ en.DWL }} setting overrides the ***Autofill login*** setting. 
		</td>
	</tr>
	<tr>
		<td>
Auto submit 
		</td>
		<td>
Enable this option if you want {{ en.DWL }} to automatically submit your credentials after they are filled in. This only applies to that specific entry.  

***Auto submit*** is similar to the ***Automatically submit the form after filling*** feature in the {{ en.DWL }} [***Settings***](/hub/dwl/settings/), with the difference that the former applies only to the specific entry and the latter applies to all your entries. Note that the {{ en.DWL }} setting overrides the ***Auto submit*** setting. 
		</td>
	</tr>
	<tr>
		<td>
URL encode credentials 
		</td>
		<td>
Enable this option to encode the credentials in the website URL.  

This option is only available if ***Basic*** is selected in the ***Authentication*** drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Autofill delay 
		</td>
		<td>
Enable this option to apply a delay before {{ en.DWL }} automatically fills in your credentials.  

This option is only available if ***Form*** is selected in the ***Authentication*** drop-down list. 
		</td>
	</tr>
</table>

### Equivalent URLs 

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
Add 
		</td>
		<td>
Add a new equivalent URL. 
		</td>
	</tr>
	<tr>
		<td>
Website 
		</td>
		<td>
Enter a URL that leads to the same page or is equivalent to the one in the ***URL*** field. 
		</td>
	</tr>
	<tr>
		<td>
Compare type 
		</td>
		<td>

Select how the entered URL is compared and matched to the website URL. Choose between ***Default***, ***Base domain***, ***Compare regex with URL domain***, ***Compare regex with full URL***, ***Host***, ***Start with***, ***Exact***, or ***Never***. 
		</td>
	</tr>
</table>

### Custom Controls 

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
Add 
		</td>
		<td>

Add a new ***Custom Control***. 
		</td>
	</tr>
	<tr>
		<td>
Form ID 
		</td>
		<td>
Enter the ***Form ID*** of the login website. 
		</td>
	</tr>
	<tr>
		<td>
Control ID 
		</td>
		<td>
Enter the ***Control ID*** of the login website. 
		</td>
	</tr>
	<tr>
		<td>
Input type 
		</td>
		<td>
Select the ***Input type*** between ***text***, ***email***, or ***password***. 
		</td>
	</tr>
	<tr>
		<td>
Value 
		</td>
		<td>
Enter the ***Value*** for your ***Custom Control***. 
		</td>
	</tr>
	<tr>
		<td>
Mask information 
		</td>
		<td>
Enable this option to hide the information in the ***Value*** field. This also makes the ***Reveal/Hide password*** button and the password strength indicator appear. 
		</td>
	</tr>
	<tr>
		<td>
Reveal/Hide password 
		</td>
		<td>
Reveal or hide the password that was entered. 
This field is only available next to the ***Value*** field if the ***Mask information*** option is enabled. 
		</td>
	</tr>
	<tr>
		<td>
Always prompt for value 
		</td>
		<td>
Enable this option so that you are asked to enter the value each time instead of filling in the ***Value*** field above. 
		</td>
	</tr>
</table>

### Html Control ID 

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
Form ID 
		</td>
		<td>

Enter the ***Form ID*** of the login website. 
		</td>
	</tr>
	<tr>
		<td>
Username ID 
		</td>
		<td>
Enter the ***Username ID*** of the login website. 
		</td>
	</tr>
	<tr>
		<td>
Domain ID 
		</td>
		<td>
Enter the ***Domain ID*** of the login website. 
		</td>
	</tr>
	<tr>
		<td>
Password ID 
		</td>
		<td>
Enter the ***Password ID*** of the login website. 
		</td>
	</tr>
	<tr>
		<td>
One time password ID 
		</td>
		<td>
Enter the ***One time password ID*** of the login website. 
		</td>
	</tr>
	<tr>
		<td>
Login button ID 
		</td>
		<td>
Enter the ***Login button ID*** of the login website. 
		</td>
	</tr>
</table>

### Security Questions 

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
Question 
		</td>
		<td>

Enter a custom ***Question*** to secure your entry. 
		</td>
	</tr>
	<tr>
		<td>
Answer 
		</td>
		<td>
Enter the custom ***Answer*** to your security question. 
		</td>
	</tr>
	<tr>
		<td>
Reveal/Hide password 
		</td>
		<td>
Reveal or hide the ***Answer*** that was entered. 
		</td>
	</tr>
</table>

### OTP 

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
Source 
		</td>
		<td>

Select in the drop-down list between ***None***, ***Custom***, ***Linked ({{ en.VLT }})***, ***Current session***, ***Prompt***, or ***Inherited***. Selecting ***Custom*** gives you access to the other settings in this table. 
		</td>
	</tr>
	<tr>
		<td>
Key 
		</td>
		<td>
Enter your OTP ***Key***.  

This field is only available if ***Custom*** is selected in the ***Source*** drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Reveal/Hide password 
		</td>
		<td>
Reveal or hide the OTP key entered in the ***Key*** field.  

This button is only available next to the ***Key*** field if ***Custom*** is selected in the ***Source*** drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Account 
		</td>
		<td>
Enter your ***Account*** information.  

This field is only available if ***Custom*** is selected in the ***Source*** drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
QR Code - Application 
		</td>
		<td>
Enter your OTP ***QR Code***.  

This field is only available if ***Custom*** is selected in the ***Source*** drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Time step 
		</td>
		<td>
Set the duration of validity of each password (in seconds). This value must be set to at least 15 seconds.  

This field is only available if ***Custom*** is selected in the ***Source*** drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Code size 
		</td>
		<td>
Select the size of the code, between ***6 Digits*** or ***8 Digits***.  

This drop-down list is only available if ***Custom*** is selected in the ***Source*** drop-down list. 
		</td>
	</tr>
	<tr>
		<td>
Hash algorithm 
		</td>
		<td>
Select the secure hash algorithm (SHA) between ***SHA-1***, ***SHA-256***, or ***SHA-512***.  

This drop-down list is only available if ***Custom*** is selected in the ***Source*** drop-down list.  

To learn about secure hash algorithm, visit [SHA-256](/kb/general-knowledge-base/what-is-sha-256/). 
		</td>
	</tr>
</table>

### OTP Recovery Codes 

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
Add 
		</td>
		<td>

Add a new ***OTP Recovery Code***. 
		</td>
	</tr>
	<tr>
		<td>
Code 
		</td>
		<td>
Enter an ***OTP Recovery Code***. Below the field is a strength indicator for your code. 
		</td>
	</tr>
	<tr>
		<td>
Reveal/Hide password 
		</td>
		<td>
Reveal or hide the ***OTP Recovery Code*** that was entered entered in the ***Code*** field. 
		</td>
	</tr>
	<tr>
		<td>
Is valid 
		</td>
		<td>
Enable this setting if the specified ***OTP Recovery Code*** is valid. 
		</td>
	</tr>
</table>

### Custom Fields 

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
Custom #1-5 
		</td>
		<td>
Enter a name for the custom field. 
		</td>
	</tr>
	<tr>
		<td>
Value 
		</td>
		<td>
Enter a value for the custom field. 
		</td>
	</tr>
	<tr>
		<td>
Hide/Reveal 
		</td>
		<td>
Hide or reveal the value of the custom field. 
This button is only available for ***Hidden Custom Fields*** (see below). 
		</td>
	</tr>
	<tr>
		<td>
Add 
		</td>
		<td>

Create a new custom field using this button. You can select between ***Text*** or ***Hidden***. Both of them allow you to enter a value for your custom field. Selecting ***Text*** gives you more text options in the ***Value*** field, while selecting ***Hidden*** gives you access to the ***Hide/Reveal*** option (see setting above). 
		</td>
	</tr>
</table>

### Description 

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
Description 
		</td>
		<td>
Enter a description for your new entry. 
		</td>
	</tr>
	<tr>
		<td>
Tags 
		</td>
		<td>

Add keywords (tags) to help you find your entry or to better categorize them. Press the Enter key after entering each tag to separate them. 
		</td>
	</tr>
	<tr>
		<td>
Expires after 
		</td>
		<td>
Enable this option to set an expiration date for your entry. You can select the date in the field next to this setting. 
		</td>
	</tr>
	<tr>
		<td>
Host 
		</td>
		<td>
Enter the name of the host. 
		</td>
	</tr>
	<tr>
		<td>
Employee 
		</td>
		<td>
Enter the name of the employee. 
		</td>
	</tr>
</table>

### Others 

These are the buttons at the bottom of the ***New Entry - Website*** window that are available no matter the tab.  

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
Add 
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

## Credit Card entry 

### General 

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

Enter a name for your entry. This field is automatically filled in by {{ en.DWL }}, but can still be modified. 
		</td>
	</tr>
	<tr>
		<td>
Folder 
		</td>
		<td>
Enter the name of the folder in which your new entry will be stored in {{ en.DHUBP }}. 
		</td>
	</tr>
	<tr>
		<td>
Select Folder 
		</td>
		<td>
Select in a tree view the folder in which your new entry will be stored in {{ en.DHUBP }}. You can also create a new folder and edit or delete existing ones. 
		</td>
	</tr>
	<tr>
		<td>
Card owner 
		</td>
		<td>
Enter the name of the owner of the card. 
		</td>
	</tr>
	<tr>
		<td>
Card type 
		</td>
		<td>
Enter the type of card. 
		</td>
	</tr>
	<tr>
		<td>
Card number 
		</td>
		<td>
Enter the number on the card. 
		</td>
	</tr>
	<tr>
		<td>
Reveal/Hide password (for Card number) 
		</td>
		<td>
Reveal or hide the ***Card number*** that was entered. 
		</td>
	</tr>
	<tr>
		<td>
Expiration date 
		</td>
		<td>
Enter the ***Expiration date*** of the card. 
		</td>
	</tr>
	<tr>
		<td>
Validation (CVC) 
		</td>
		<td>
Enter the ***Validation (CVC)*** number of the card. 
		</td>
	</tr>
	<tr>
		<td>
Reveal/Hide password (for Validation (CVC)) 
		</td>
		<td>
Reveal or hide the ***Validation (CVC)*** number that was entered. 
		</td>
	</tr>
</table>

### Custom Fields 

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
Custom #1-5 
		</td>
		<td>
Enter a name for the custom field. 
		</td>
	</tr>
	<tr>
		<td>
Value 
		</td>
		<td>
Enter a value for the custom field. 
		</td>
	</tr>
	<tr>
		<td>
Hide/Reveal 
		</td>
		<td>

Hide or reveal the value of the custom field.  

This button is only available for ***Hidden Custom Fields*** (see below). 
		</td>
	</tr>
	<tr>
		<td>
Add 
		</td>
		<td>
Create a new custom field using this button. You can select between ***Text*** or ***Hidden***. Both of them allow you to enter a value for your custom field. Selecting ***Text*** gives you more text options in the ***Value*** field, while selecting ***Hidden*** gives you access to the ***Hide/Reveal*** option (see setting above). 
		</td>
	</tr>
</table>

### Description 

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
Description 
		</td>
		<td>
Enter a description for your new entry. 
		</td>
	</tr>
	<tr>
		<td>
Tags 
		</td>
		<td>
Add keywords (tags) to help you find your entry or to better categorize them. Press the Enter key after entering each tag. 
		</td>
	</tr>
	<tr>
		<td>
Expires after 
		</td>
		<td>
Enable this option to set an expiration date for your entry. You can select the date in the field next to this setting. 
		</td>
	</tr>
	<tr>
		<td>
Host 
		</td>
		<td>
Enter the name of the host. 
		</td>
	</tr>
	<tr>
		<td>
Employee 
		</td>
		<td>
Enter the name of the employee. 
		</td>
	</tr>
</table>

### Others 

These are the buttons at the bottom of the ***New Entry - Credit Card*** window that are available no matter the tab.  

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
Add 
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

## Contact entry 

### General 

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

Enter a name for your entry. This field is automatically filled in by {{ en.DWL }}, but can still be modified. 
		</td>
	</tr>
	<tr>
		<td>
Folder 
		</td>
		<td>
Enter the name of the folder in which your new entry will be stored in {{ en.DHUBP }}. 
		</td>
	</tr>
	<tr>
		<td>
Select Folder 
		</td>
		<td>
Select in a tree view the folder in which your new entry will be stored in {{ en.DHUBP }}. You can also create a new folder and edit or delete existing ones. 
		</td>
	</tr>
	<tr>
		<td>
Gender 
		</td>
		<td>
Select in the drop-down list the Gender of the contact between ***Unspecified***, ***Male***, or ***Female***. 
		</td>
	</tr>
	<tr>
		<td>
First name 
		</td>
		<td>
Enter the ***First name*** of the contact. 
		</td>
	</tr>
	<tr>
		<td>
Middle name 
		</td>
		<td>
Enter the ***Middle name*** of the contact. 
		</td>
	</tr>
	<tr>
		<td>
Last name 
		</td>
		<td>
Enter the ***Last name*** of the contact. 
		</td>
	</tr>
	<tr>
		<td>
Email 
		</td>
		<td>
Enter the ***Email*** of the contact. 
		</td>
	</tr>
	<tr>
		<td>
Country 
		</td>
		<td>
Enter the ***Country*** of the contact. 
		</td>
	</tr>
	<tr>
		<td>
State 
		</td>
		<td>
Enter the ***State*** of the contact. 
		</td>
	</tr>
	<tr>
		<td>
City 
		</td>
		<td>
Enter the ***City*** of the contact. 
		</td>
	</tr>
	<tr>
		<td>
Zip code 
		</td>
		<td>
Enter the ***Zip code*** of the contact. 
		</td>
	</tr>
	<tr>
		<td>
Address 
		</td>
		<td>
Enter the ***Address*** of the contact. 
		</td>
	</tr>
	<tr>
		<td>
Company 
		</td>
		<td>
Enter the ***Company*** of the contact. 
		</td>
	</tr>
	<tr>
		<td>
Job title 
		</td>
		<td>
Enter the ***Job title*** of the contact. 
		</td>
	</tr>
	<tr>
		<td>
Phone 
		</td>
		<td>
Enter the ***Phone*** number of the contact. 
		</td>
	</tr>
	<tr>
		<td>
Mobile 
		</td>
		<td>
Enter the ***Mobile*** phone number of the contact. 
		</td>
	</tr>
	<tr>
		<td>
Fax 
		</td>
		<td>
Enter the ***Fax*** number of the contact. 
		</td>
	</tr>
	<tr>
		<td>
Work phone 
		</td>
		<td>
Enter the ***Work phone*** number of the contact. 
		</td>
	</tr>
</table>

### Custom Fields 

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
Custom #1-5 
		</td>
		<td>
Enter a name for the custom field. 
		</td>
	</tr>
	<tr>
		<td>
Value 
		</td>
		<td>
Enter a value for the custom field. 
		</td>
	</tr>
	<tr>
		<td>
Hide/Reveal 
		</td>
		<td>

Hide or reveal the value of the custom field. 
This button is only available for ***Hidden Custom Fields*** (see below). 
		</td>
	</tr>
	<tr>
		<td>
Add 
		</td>
		<td>
Create a new custom field using this button. You can select between ***Text*** or ***Hidden***. Both of them allow you to enter a value for your custom field. Selecting ***Text*** gives you more text options in the ***Value*** field, while selecting ***Hidden*** gives you access to the ***Hide/Reveal*** option (see setting above). 
		</td>
	</tr>
</table>

### Description 

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
Description 
		</td>
		<td>
Enter a description for your new entry. 
		</td>
	</tr>
	<tr>
		<td>
Tags 
		</td>
		<td>
Add keywords (tags) to help you find your entry or to better categorize them. Press the Enter key after entering each tag. 
		</td>
	</tr>
</table>

### Others 

These are the buttons at the bottom of the ***New Entry - Contact*** window that are available no matter the tab.  

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
Add 
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

## Secure Note entry 

### General 

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

Enter a name for your entry. This field is automatically filled in by {{ en.DWL }}, but can still be modified. 
		</td>
	</tr>
	<tr>
		<td>
Folder 
		</td>
		<td>
Enter the name of the folder in which your new entry will be stored in {{ en.DHUBP }}. 
		</td>
	</tr>
	<tr>
		<td>
Select Folder 
		</td>
		<td>
Select in a tree view the folder in which your new entry will be stored in {{ en.DHUBP }}. You can also create a new folder and edit or delete existing ones. 
		</td>
	</tr>
	<tr>
		<td>
Type 
		</td>
		<td>
Select in the drop-down list if your note is written in ***Markdown*** or in ***Plain text*** format. 
		</td>
	</tr>
	<tr>
		<td>
Note 
		</td>
		<td>
Enter your secure note. This option will differ depending on whether you select the ***Markdown*** format or the ***Plain text*** format in the ***Type*** list. Selecting ***Markdown*** gives you access to additional text formatting options. You will also be able to write your note using markdown, which is a markup language for formatting text. 
		</td>
	</tr>
</table>

### Custom Fields 

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
Custom #1-5 
		</td>
		<td>
Enter a name for the custom field. 
		</td>
	</tr>
	<tr>
		<td>
Value 
		</td>
		<td>
Enter a value for the custom field. 
		</td>
	</tr>
	<tr>
		<td>
Hide/Reveal 
		</td>
		<td>

Hide or reveal the value of the custom field.  

This button is only available for ***Hidden Custom Fields*** (see below). 
		</td>
	</tr>
	<tr>
		<td>
Add 
		</td>
		<td>
Create a new custom field using this button. You can select between ***Text*** or ***Hidden***. Both of them allow you to enter a value for your custom field. Selecting ***Text*** gives you more text options in the ***Value*** field, while selecting ***Hidden*** gives you access to the ***Hide/Reveal*** option (see setting above). 
		</td>
	</tr>
</table>

### Description 

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
Description 
		</td>
		<td>
Enter a description for your new entry. 
		</td>
	</tr>
	<tr>
		<td>
Tags 
		</td>
		<td>
Add keywords (tags) to help you find your entry or to better categorize them. Press the Enter key after entering each tag. 
		</td>
	</tr>
	<tr>
		<td>
Expires after 
		</td>
		<td>
Enable this option to set an expiration date for your entry. You can select the date in the field next to this setting. 
		</td>
	</tr>
	<tr>
		<td>
Host 
		</td>
		<td>
Enter the name of the host. 
		</td>
	</tr>
	<tr>
		<td>
Employee 
		</td>
		<td>
Enter the name of the employee. 
		</td>
	</tr>
</table>

### Others 

These are the buttons at the bottom of the ***New Entry - Secure Note*** window that are available no matter the tab.  

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
Add 
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
Follow our step-by-step guide explaining [how to add an entry](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-personal/add-entry-hub-personal-dwl/) in {{ en.DHUBP }} with {{ en.DWL }}. 
{% endsnippet %}
