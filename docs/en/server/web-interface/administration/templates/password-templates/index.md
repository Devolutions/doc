---
  title: Password Templates
  order: 10
---
***Password Templates*** are used by administrators to create predefined settings for the [***Password Generator***](/server/web-interface/administration/templates/password-templates/password-generator/) of {{ en.DVLS }}.  

![Administration – Password Templates](https://webdevolutions.azureedge.net/docs/en/server/clip10401.png) 

### Create password templates 
To create ***Password Templates***, go to ***Administration – Password Templates*** and click on the ***Add*** button. You can also create a ***Password Template*** when using the ***Password Generator***. Just customize the settings and click on ***Add template***.  

![Password Templates](https://webdevolutions.azureedge.net/docs/en/server/clip10402.png) 

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
Name 
		</td>
		<td>

Name of the ***Password Templates***. 
		</td>
	</tr>
	<tr>
		<td>
Mode 
		</td>
		<td>
Chose a ***Mode*** setting for the passwords.  

* ***Default***: Customize the length and the minimum number of characters per type you would want the passwords to have. 
* ***Advanced settings***: Select the length, type and number of characters to include in the passwords. Include and exclude specific characters. 
* ***Readable password***: Generate passwords that are readable but are not actual words. 
* <a href="/server/web-interface/administration/templates/password-templates/use-a-pattern-password/" target="_blank">***Use a pattern***</a>: Select any pattern you need to create the passwords, you can also exclude certain characters if desired. A list of the most recent used pattern will also be created. 
* ***Pronounceable password***: Generate passwords that are pronounceable, but are not actual words. 
		</td>
	</tr>
	<tr>
		<td>
Upper-case (A, B...) 
		</td>
		<td>
Will include uppercase letters for password generation. 
		</td>
	</tr>
	<tr>
		<td>
Underline ( _ ) 
		</td>
		<td>
Will include the underline ( _ ) character for password generation. 
		</td>
	</tr>
	<tr>
		<td>
High ANSI characters 
		</td>
		<td>
Will include characters from '-' to U255 (excluding U255) for password generation. 
		</td>
	</tr>
	<tr>
		<td>
Minus ( - ) 
		</td>
		<td>
Will include the minus ( - ) character for password generation. 
		</td>
	</tr>
	<tr>
		<td>
Brackets ([,], (,), <,>) 
		</td>
		<td>
Will include brackets characters for password generation. 
		</td>
	</tr>
	<tr>
		<td>
Digits (0, 1, 2...) 
		</td>
		<td>
Will include digits for password generation. 
		</td>
	</tr>
	<tr>
		<td>
Special (!, $, %, &...) 
		</td>
		<td>
Will include special characters for password generation. 
		</td>
	</tr>
	<tr>
		<td>
Lower-case (a, b, c...) 
		</td>
		<td>
Will include lowercase letters for password generation. 
		</td>
	</tr>
	<tr>
		<td>
Space ( ) 
		</td>
		<td>
Will include the space character for password generation. 
		</td>
	</tr>
	<tr>
		<td>
XML Compliant 
		</td>
		<td>
Will generate XML compliant passwords. 
		</td>
	</tr>
	<tr>
		<td>
Password count 
		</td>
		<td>
Maximum number of passwords that will be generated. 
		</td>
	</tr>
	<tr>
		<td>
Include the following characters 
		</td>
		<td>
Forcefully including characters inside the password. 
		</td>
	</tr>
	<tr>
		<td>
Exclude the following characters 
		</td>
		<td>
Forcefully excludes characters from the password. 
		</td>
	</tr>
</table>

### Force default password template 

Force a default ***Password Template*** for all {{ en.DVLS }} users.  

1. Go to ***Administration – System Settings – Password Management – Password Template***. 
2. Choose a ***Default template***. 
3. Check ***Force default template*** and ***Save***. 

![Default Password Template](https://webdevolutions.azureedge.net/docs/en/server/ServerOp4087.png) 
