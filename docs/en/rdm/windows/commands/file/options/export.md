---
title: Export Options
---
Use File ***–*** Options ***–*** Export Options to control the options to export from your application configuration. Use this to easily transfer settings to another machine.  

{% snippet icon.shieldWarning %} 
Sharing the exported file with a colleague would effectively give that person whatever credentials you have set in your data source definitions.  

Devolutions does not recommend sharing any credential to a team data source. 
{% endsnippet %}
 
![Configuration file export dialog](/img/en/rdm/windows/clip10759.png) 

## Settings 

### Registration information 

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
Name 
		</td>
		<td>
Company registration name 
		</td>
	</tr>
	<tr>
		<td>
Email 
		</td>
		<td>
Registration email 
		</td>
	</tr>
	<tr>
		<td>
Key 
		</td>
		<td>
Serial key 
		</td>
	</tr>
</table>

### Miscellaneous 

{% snippet icon.shieldWarning %} 
The local templates may contain credentials. Ensure you do not share the exported file. 
{% endsnippet %}
 
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
Include your proxy settings. 
		</td>
	</tr>
	<tr>
		<td>
Saved installation paths 
		</td>
		<td>
Preserve your installation paths configured for the external application. 
		</td>
	</tr>
	<tr>
		<td>
Saved templates 
		</td>
		<td>
Include your local templates in the export. 
		</td>
	</tr>
	<tr>
		<td>
Include data source credentials 
		</td>
		<td>
Include your data source credentials. 
		</td>
	</tr>
</table>

### Data Sources 

{% snippet icon.shieldWarning %} 
The data source configurations you select will be exported with the username/password as they are currently configured. If you are creating a file to quickly set up new employees, you must be careful not to give away your credentials. Using the [{{ en.CI }}](/rdm/windows/installation/client/custom-installer-service/) is recommended for this case. 
{% endsnippet %}
 
All your configured data sources will be displayed in this section. Select the one(s) that you want to include in the export. Please note that the content of the data source is not exported.  

When your settings are customized to your liking, click on ***Export*** . You will be prompted to save your settings in a RemoteDesktopManager .cfg file. 

