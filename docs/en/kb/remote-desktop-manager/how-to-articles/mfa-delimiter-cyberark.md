---
eleventyComputed:
  title: CyberArk MFA delimiter in {{ en.RDM }}
  description: The MFA delimiter option exists in {{ en.RDM }} to mirror the one that already exists with CyberArk.
  keywords:
  - CyberArk
  - MFA delimiter
---
The ***MFA delimiter*** option exists in {{ en.RDM }} to mirror the one that already exists with CyberArk. Whichever character that is entered in the delimiter field will be used to separate the values of the SecurID code and the password, that are then sent to the API.  
{% snippet icon.badgeInfo %}
The ***MFA delimiter*** field is only available for the <a href="#cyberark-dashboard">***CyberArk Dashboard***</a> entry and the <a href="#cyberark-pvwa-(credentials)">***CyberArk PVWA (Credentials)***</a> entry.
{% endsnippet %}  

Here is an example of how it works:  

<table>
	<tr>
		<th>
SENT
		</th>
		<th>
RECEIVED BY API
		</th>
	</tr>
	<tr>
		<td>
&#x2022 SecurID code: 123<br>
&#x2022 Password: abc
		</td>
		<td>
&#x2022 Received: 123abc
		</td>
	</tr>
	<tr>
		<td>
&#x2022 SecurID code: 123<br>
&#x2022 Password: abc<br>
&#x2022 <b><i>MFA delimiter</b></i>: ,
		</td>
		<td>
&#x2022 Received: 123,abc
		</td>
	</tr>
</table>

{% snippet icon.badgeInfo %}
Learn more about [CyberArk entries configuration](/kb/remote-desktop-manager/how-to-articles/cyberark-dashboard-configuration/).
{% endsnippet %}

## CyberArk Dashboard
The entry can be found under ***New Entry*** – ***Session*** – ***Privileged Access Management***. The option is in the ***Common*** – ***General*** – ***General*** tab.
{% snippet icon.badgeInfo %}
The ***Append RSA SecurID code to password*** option needs to be enabled to have access to ***MFA delimiter***.
{% endsnippet %}  

![CyberArk Dashboard](https://webdevolutions.azureedge.net/docs/en/kb/KB0076.png)

## CyberArk PVWA (Credentials)
The entry can be found under ***New Entry*** – ***Credential Management*** – ***Privileged Access Management***. The option is in the ***Common*** – ***General*** – ***Advanced*** tab.
![CyberArk PVWA](https://webdevolutions.azureedge.net/docs/en/kb/KB0077.png)
