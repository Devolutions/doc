---
title: Password Complexity
---

This security setting determines whether passwords must meet predetermined complexity requirements that has been configured in your Data source settings. Complexity requirements are enforced when passwords are changed or a new entry is created. If this policy is enable then new passwords must meet some of the following minimum requirements:  

* Minimum length 
* Minimum lowercase characters 
* Minimum uppercase characters 
* Minimum numeric characters 
* Minimum symbols 

## Settings 

The settings set in the Password Complexity Data source will determine what is the Default value of the Session settings.  
![Data Source Settings - Password Complexity](/img/en/rdm/mac/clip10376.png) 

### Enabled 

The Enable option set in the data source settings will determine the Default option of your Password Complexity session entry.  

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
True 
		</td>
		<td>
Enable the use of the Password Complexity requirements, doing so will force users of the data source to meet the password requirement set by the administrator of the data source. 
		</td>
	</tr>
	<tr>
		<td>
False 
		</td>
		<td>
Disable the Password Complexity requirements. 
		</td>
	</tr>
	<tr>
		<td>
Inherited 
		</td>
		<td>
Inherit the usage set in the parent folder. When using Inherited you will have to set a password to use as Inherited in the top folder of the entry. 
		</td>
	</tr>
</table>

### Validation 

If the usage is enabled and you try to change or create a password for one of your entry, the reaction will depend on the chosen Validation mode.  

The validation option determined in the data source settings will determine the Validation Default option of your Password Complexity session entry.  

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
None 
		</td>
		<td>
Will not use any kind of validation when changing or creating a new password. 
		</td>
	</tr>
	<tr>
		<td>
Warn 
		</td>
		<td>
Will warn you that your password does not comply with the Password Complexity requirements but will allow you to continue with that password or to edit it. 
		</td>
	</tr>
	<tr>
		<td>
Required 
		</td>
		<td>
The requirements of the Password Complexity are mandatory. 
		</td>
	</tr>
	<tr>
		<td>
Inherited 
		</td>
		<td>
Inherit the usage set in the validation folder. When using Inherited you will have to set a password to use as Inherited in the top folder of the session entry. 
		</td>
	</tr>
</table>

## Create 

You must create your own Password Complexity requirements template to then apply them to your sessions. Click on the plus button to create your Password Complexity template, enter a name and the desired requirements.  
![Data Source Settings - Password Complexity](/img/en/rdm/mac/clip10377.png) 

