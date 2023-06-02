---
title: Option Selection
---
When generating the installer file, you must decide what to include in the configuration. This process will replicate the configuration of the {{ en.RDM }} instance currently used and will generate an installer file (.rdi). Once it has been generated, the installer file can be used as many times as needed to create custom installers. For security reasons, some settings that may contain credentials such as ***Saved templates*** are disabled by default. Enable them based on your risk level. 

{% snippet icon.shieldWarning %} 
The same dialog is used for the {{ en.CI }} and for exporting the {{ en.RDM }} configuration file. Some options must NOT be used for the {{ en.CI }} to prevent sharing credentials that must stay confidential. Please read the documentation carefully. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
{{ en.RDM }} may install required add-ons automatically when it detects that they are needed (configured in ***File – Options – Paths*** ). If you need to customize the application's installation path of an add-on, you must first perform the modification, then create the installation package. This setting will be replicated in the installer file (*.rdi). 
{% endsnippet %}
 
## Options 

You can open the ***Installer File Generator*** from ***File –*** ***{{ en.DA }}*** ***– Installer File Generator*** . It is also accessible when creating a installation package in ***File –*** ***{{ en.DA }}*** ***– Custom Installer Manager*** .  
![Installer File Generator](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11249.png) 

### Miscellaneous 

{% snippet icon.shieldWarning %} 
Do not redistribute the ***{{ en.DA }}*** ***credentials*** . Doing so would share these to all users having access to the online account used to create the installer package. 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
All ***Local templates*** will be included. If any of these contain credentials, it may pose a security risk. Ensure that you only share what is needed. 
{% endsnippet %}
 
![Miscellaneous Options](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11260.png) 

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
Proxy settings 
		</td>
		<td>
Includes your Internet proxy settings. This option is enabled by default. 
		</td>
	</tr>
	<tr>
		<td>
Saved installation paths 
		</td>
		<td>
Preserves your installation paths configured for external third party applications. Use this only when all of the user's machines use the same paths. This option is enabled by default. 
		</td>
	</tr>
	<tr>
		<td>
Saved templates 
		</td>
		<td>
Includes your local templates in the custom installer. Database templates are stored in the data source and may be a better option if you need to share them. 
		</td>
	</tr>
	<tr>
		<td>
{{ en.DA }} credentials 
		</td>
		<td>
Includes your {{ en.DA }} credentials used to create the custom installer. Consult the security warning above. 
		</td>
	</tr>
	<tr>
		<td>
Include data source credentials 
		</td>
		<td>
Includes the credentials for all selected data sources below. Consult the security warning above. 
		</td>
	</tr>
	<tr>
		<td>
Clear application lock information 
		</td>
		<td>
Clears the information from ***File – Options – Security – Lock – Lock application*** (local). 
		</td>
	</tr>
	<tr>
		<td>
Force always retrieve new registration 
		</td>
		<td>
Allows the administrator to force the users to use this new configuration file. 
		</td>
	</tr>
</table>

{% snippet icon.badgeInfo %} 
Since version 2022.3 of {{ en.RDM }} , the license registration information is stored in the data source, which means it can no longer be included in a custom installer. Follow this [step-by-step guide](/rdm/windows/installation/client/registration/team-edition/) to add your license serial and assign it to your users from an [advanced data source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) .  

If your users each have their own individual data source ( {{ en.HUBP }}, SQLite), you need to provide them the license serial so they can manually register in ***Administration – Management – Licenses*** . 
{% endsnippet %}
 
### Data sources 

Select the data sources that must be included in the configuration. In the ***Description*** column, you will see details about each data source.  

{% snippet icon.shieldWarning %} 
You should only share data sources that are either using Integrated Security or an environment variable for the username. Passwords for accessing a data source should never be shared. 
{% endsnippet %}
 

