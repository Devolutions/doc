---
eleventyComputed:
  title: List of Internet Endpoints that are Accessed by {{ en.DPS }}
---
# {{ en.TOPICTITLE }}
This is the list of addresses that are accessed by {{ en.DPS }} during normal operation, as well as the setting(s) to disable/prevent this access.  
{% snippet icon.badgeWarning %}
We use a &quot;best effort&quot; approach to maintain this list, but it does NOT replace proper IT Security practices. If security is paramount, it would be better to first block all internet access, then white-list desired addresses as needed.
{% endsnippet %}  

## Endpoint list
<table>
	<tr>
		<td>
Description
		</td>
		<td>
URL
		</td>
		<td>
Related setting(s)/Action
		</td>
	</tr>
	<tr>
		<td>
DVLS update check
		</td>
		<td>
https<area>://devolutions.net
		</td>
		<td>
{{ en.DVLSCONSOLE }} - Support - Check for updates
		</td>
	</tr>
	<tr>
		<td>
DVLS update - package download
		</td>
		<td>
https<area>://cdn.devolutions.net
		</td>
		<td>
User action in the upgrade available dialog
		</td>
	</tr>
	<tr>
		<td>
Block Tor clients
		</td>
		<td>
https<area>://cloud.devolutions.net
		</td>
		<td>
Administration - Server Settings - Security
		</td>
	</tr>
	<tr>
		<td>
Azure Authentication
		</td>
		<td>
https<area>://login.microsoftonline.com/<br>
https<area>://graph.microsoft.com/
		</td>
		<td>
Administration - Authentication
		</td>
	</tr>
	<tr>
		<td>
Okta Authentication
		</td>
		<td>
https<area>://&lt;domain&gt;.okta.com
		</td>
		<td>
Administration - Authentication
		</td>
	</tr>
	<tr>
		<td>
PAM - Provider Azure
		</td>
		<td>
https<area>://graph.microsoft.com/
		</td>
		<td>
Azure type PAM Provider
		</td>
	</tr>
	<tr>
		<td>
Telemetry
		</td>
		<td>
https<area>://telemetry.devolutions.net
		</td>
		<td>
Administration - Server Settings - Features - Share anonymous usage data with Devolutions
		</td>
	</tr>
	<tr>
		<td>
Have I Been Pwned
		</td>
		<td>
https<area>://api.pwnedpasswords.com
		</td>
		<td>
Administration - Server Settings - Features - Enable compromised (pwned) check
		</td>
	</tr>
	<tr>
		<td>
Slack integration
		</td>
		<td>
https<area>://slack.com/
		</td>
		<td>
Administration - Server Settings - Logging - Slack integration
		</td>
	</tr>
	<tr>
		<td>
SMTP, Authentication Azure
		</td>
		<td>
https<area>://graph.microsoft.com/
		</td>
		<td>
Administration - Server Settings - Email (Azure authentication type)
		</td>
	</tr>
	<tr>
		<td>
Geo IP
		</td>
		<td>
https<area>://geoip.maxmind.com/
		</td>
		<td>
Administration - Server Settings - GeoIP Security
		</td>
	</tr>
	<tr>
		<td>
Gravatar
		</td>
		<td>
https<area>://secure.gravatar.com/
		</td>
		<td>
Administration - Server Settings - Features - Enable Gravatar
		</td>
	</tr>
	<tr>
		<td>
Yubikey
		</td>
		<td>
https<area>://api.yubico.com<br>
https<area>://api2.yubico.com<br>
https<area>://api3.yubico.com<br>
https<area>://api4.yubico.com<br>
https<area>://api5.yubico.com<br>
		</td>
		<td>
Administration - Server Settings - Two-Factor
		</td>
	</tr>
	<tr>
		<td>
Twilio
		</td>
		<td>
https<area>://api.twilio.com/
		</td>
		<td>
Administration - Server Settings - Two-Factor
		</td>
	</tr>
	<tr>
		<td>
Duo
		</td>
		<td>
https<area>://api.&lt;&gt;.duosecurity.com
		</td>
		<td>
Administration - Server Settings - Two-Factor
		</td>
	</tr>
</table>
