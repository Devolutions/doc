---
  title: Entry Security Analyzer
  keywords:
  - Password analyzer
  - Password strength
---
{% snippet icon.badgeInfo %} 
The information in this topic is how the "Legacy" mode of password analysis works. The mode can be changed in the System Settings for ZXCVBN. The "Legacy" mode is not the default mode. 
{% endsnippet %}
 
The ***Entry Security Analyzer*** evaluates the strength of passwords stored in the data source. To access the password analyzer, navigate the Tools tab.  

A strenght password control is also displayed under most password fields of entries.  
![!!clip3448](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3448.png) 

The ***Entry Security Analyzer*** follows a set of rules to determine the strength of the password with a score from 0 to 100. There are two categories of rules. 

### Reinforce 

These are the rules which make the passwords stronger:  

* The password length 
* The number of uppercase letters (A-Z) 
* The number of lowercase letters (a-z) 
* The number of digits (0-9) 
* The number of symbols (!, @, #, $, etc.) 
* The number of digits or symbols in the middle of the password 
* Three or more of the rules above are met 

The minimum requirements for a Strong password are:  

* The password is at least 5 characters long 
* The password contains uppercase and lowercase characters 
* The password contains digits 

### Weakening 

These are the rules which make the passwords weaker:  

* The password contains only letters 
* The password contains only digits 
* The password has repeated characters 
* The password has consecutive uppercase letters (two or more) 
* The password has consecutive lowercase letters (two or more) 
* The password has consecutive digits (two or more) 
* The password has sequential letters (ABCD, DCBA) 
* The password has sequential digits (1234, 4321) 

## Settings 

![!!clip11340](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11340.png) 

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
Show all entries 
		</td>
		<td>
Shows you all the entries in your session, including those without password. 
		</td>
	</tr>
	<tr>
		<td>
Show VPN analysis 
		</td>
		<td>
Add the VPN Host column. 
		</td>
	</tr>
	<tr>
		<td>
Show compromised password (pwned) 
		</td>
		<td>

Show if the password has been pwned. A [pwned password](/kb/remote-desktop-manager/how-to-articles/pwned-password-check/) is a password that has been exposed in data breaches (i.e., they are owned/pwned by hackers). 
		</td>
	</tr>
	<tr>
		<td>
Edit 
		</td>
		<td>
Open the current entry to edit it. 
		</td>
	</tr>
	<tr>
		<td>
Forbidden Passwords 
		</td>
		<td>
Create a list of prohibited passwords. 
		</td>
	</tr>
	<tr>
		<td>
Export Settings 
		</td>
		<td>
Export the password analyzer settings. 
		</td>
	</tr>
</table>
