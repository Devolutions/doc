---
title: Password Generator
---
The ***Password Generator*** allows to create random passwords that are difficult to interpret or predict, due to a mix of uppercase and lowercase letters, numbers and punctuation symbols.  

{% snippet icon.badgeHelp %} 
You can create and force a [***Password Templates***](/server/web-interface/administration/templates/password-templates/) to follow your organization secure policies. 
{% endsnippet %}
 
![!!ServerOp4086.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp4086.png) 

### Generate Passwords with the Password Generator  

1. Go to the ***General*** section in the ***Properties*** of an entry. 
1. Next to the ***Password*** field, click the three-dot menu to access the ***Password generator*** tool. 
1. Customize all the criteria you would want your password to have and click ***Generate***. 
1. In the proposed list, choose and click on a password. 
{% snippet icon.badgeInfo %} 
At the bottom of the list, you can review the strength and phonetic of the password selected. 
{% endsnippet %}
 
5. Click the ***Select*** button to close and autofill the ***Password*** entry field. 
{% snippet icon.badgeNotice %} 
You could also create a ***Password Template*** from your ***Password Generator*** settings. Just customize the settings and click on ***Add template*** next to the ***Template*** drop list. 
{% endsnippet %}
 
![!!ServerOp4085.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp4085.png) 
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
Template 
		</td>
		<td>

Choose a ***Password Templates***. 
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
