---
eleventyComputed:
  title: '{{ en.DVLS }}'
---
<table>
	<tr>
		<td>

![!!dvls-90X90](https://webdevolutions.azureedge.net/docs/en/rdm/mac/dvls-90X90.png) 
		</td>
		<td>
{{ en.DVLS }} is a self-hosted repository for storing and sharing your remote connections and credentials. You can find more information on the [{{ en.DVLS }} web page](https://devolutions.net/server). 
		</td>
	</tr>
</table>

## Highlights 

* High-end security server for your company. 
* Share your sessions with multiple users. 
* Can be deployed online. 
* Support Windows authentication and Active Directory group integration. 
* Client and server side caching optimization. 
* Requires the {{ en.RDMMAC }} Team Edition client installed for management. 

{% snippet icon.badgeInfo %} 
{{ en.DVLS }} supports only SQL Server as a data store at this time. 
{% endsnippet %}
 
For more information, please consult:  

* [{{ en.DVLS }} installation instructions](/server/installation/) 
* [{{ en.DVLS }} Security Checklist](/server/getting-started/security-checklist/) 

## Configure the server data source on all your client machines. 

Enter a name of the data source and the URL for the server. Ensure you use the correct protocol if SSL is required by the server (https).  

Alternatively, you can export the data source information and then import the file in your client workstations as described [Import/Export Data Source](/rdm/mac/data-sources/import-export/).  

## Settings 

### Connection 

![{{ en.DVLS }} Connection tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6023.png) 

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
Name of the data source. 
		</td>
	</tr>
	<tr>
		<td>
Server 
		</td>
		<td>
Name of {{ en.DVLS }} instance. 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Username to connect to the data source. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Password to connect to the data source. 
		</td>
	</tr>
	<tr>
		<td>
Test connection 
		</td>
		<td>
Test the connection with {{ en.DVLS }} to validate if the proper information has been provided. 
		</td>
	</tr>
	<tr>
		<td>
Always ask username 
		</td>
		<td>
Always ask for the username when connecting to the data source. 
		</td>
	</tr>
	<tr>
		<td>
Always ask password 
		</td>
		<td>
Always ask for the password when connecting to the data source. 
		</td>
	</tr>
</table>

### Settings 

![{{ en.DVLS }} – Settings tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6024.png) 

### Advanced 

![{{ en.DVLS }} – Advanced tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6025.png) 

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
Offline mode 
		</td>
		<td>
Determine if you want to use this data source in Offline mode. In offline mode, the data source can be available in Read Only or in Read/Write mode. 
		</td>
	</tr>
	<tr>
		<td>
Prompt for offline mode on startup 
		</td>
		<td>
Every time you will connect on your data source, you will be prompt to use the data source in offline mode. 
		</td>
	</tr>
	<tr>
		<td>
Caching mode 
		</td>
		<td>

Determine how the entries will be reload in the data source. See [Caching Mode](/rdm/mac/data-sources/caching/) for more information. 
		</td>
	</tr>
	<tr>
		<td>
Ping online method 
		</td>
		<td>
Indicate the prefer ping online. Select between:  

* None 
* Web request 
		</td>
	</tr>
	<tr>
		<td>
Auto go offline 
		</td>
		<td>
If the ping online method does not work it will automatically go offline. 
		</td>
	</tr>
	<tr>
		<td>
Remote tools access mode 
		</td>
		<td>
Select your remote tools access mode between:  

* Local 
* Via data source 
		</td>
	</tr>
	<tr>
		<td>
Manage Cache 
		</td>
		<td>
Manage your cache on your computer to analyse, vacuum, repair or delete it. This can be very helpful when experiencing offline issues. For more information please follow this [link](Manage-Cache). 
		</td>
	</tr>
</table>

### {{ en.UVLT }} 

![{{ en.DVLS }} – {{ en.UVLT }}](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6026.png) 

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
Connection type 
		</td>
		<td>

Select the type of {{ en.UVLT }} to use. Select between:  

* Default: use the default {{ en.UVLT }} which is stored in the database. 
* None: disable the {{ en.UVLT }} for all users. 
* {{ en.DOD }}: use a {{ en.DOD }} file (*.dod) as a {{ en.UVLT }}. 
		</td>
	</tr>
</table>
