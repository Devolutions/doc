---
title: Password Templates
---
Password templates set requirements for the password format: characters usage, patterns, readability.  

Password templates are available in the password generator. Password templates can be optional or required. 

## Settings 

### Create a Password Template 

1. Go to ***File – Templates*** and click ***Password Templates*** .  
![File – Templates – Password Templates](/img/en/rdm/windows/RdmWin7016.png) 
1. The   ***Password Templates*** window provides an overview of current templates, as well as add, edit, and delete commands.  
![Password Template Window](/img/en/rdm/windows/RdmWin7017.png) 
1. To add a new template click ***Add*** (plus sign). 
1. Enter a template name. 
1. Choose a   ***Mode*** and configure the settings. 

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
Default 
		</td>
		<td>
General settings about length and minimum amounts for characters and symbols. 
		</td>
	</tr>
	<tr>
		<td>
Advanced settings 
		</td>
		<td>
Granular character settings (e.g. special characters and symbols, inclusions, exclusions). 
		</td>
	</tr>
	<tr>
		<td>
Readable password 
		</td>
		<td>
Settings for syllables, numbers and symbols. 
		</td>
	</tr>
	<tr>
		<td>
Use a pattern 
		</td>
		<td>
Set a pattern for the passwords using the [key](Tools_PasswordGenerator) . 
		</td>
	</tr>
	<tr>
		<td>
Pronounceable password 
		</td>
		<td>
Settings for length, case, digits, and characters. 
		</td>
	</tr>
</table>

6. Choose specific settings.  
![!!RdmWin7018.png](/img/en/rdm/windows/RdmWin7018.png) 
1. The password is now available in the ***Password Generator*** ( ***Tools*** menu). 

### Use a Password Template with the Password Generator 

1. In the ***Tools*** tab, click   ***Password Generator*** or open the password generator from an entry. 
1. To choose a password template, select the title from the list. ***Default*** is equivalent to no template, until it is configured by an administrator. When you select a template, the options are unavailable because they were saved in the template. 
1. Click ***Generate*** to list possible passwords.  
![Password Generator using a password template](/img/en/rdm/windows/RdmWin7019.png) 

### Set a default Password Template 

The default template in the ***Password Generator*** is set to "no template" until an administrator configures the template.  

1. In ***Administration*** , click   ***Data Source Settings (System Settings)*** . 
1. Click   ***Password Templates*** . 
1. Choose the template. The chosen template will now be the   ***Default*** in the password generator. 
1. If you want to force one template, check ***Force default template*** . No other choice will be available in the password generator. 
![System Settings – Password Templates](/img/en/rdm/windows/RdmWin7020.png) 
