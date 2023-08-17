---
title: GeoIP Security
---
The GeoIP Security section section allows the administrator to set IPs restriction based on the geographical location. 

![Administration – {{ en.DVLS }} Settings – GeoIP Security](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8046.png) 

## Settings 
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
GeoIP Mode 
		</td>
		<td>
Choose your method of GeoIP between:<br>

None: Will not be using GeoIP security  

MaxMind: Use the MaxMind's GeoIP database to look up the city, AS number and other information for an IP address. Connect to your account by entering your User ID and License Key in the appropriate field and then select the countries you wish to grant access to your {{ en.DVLS }}. 
		</td>
	</tr>
	<tr>
		<td>
User ID 
		</td>
		<td>
User ID to connect on MaxMind. 
		</td>
	</tr>
	<tr>
		<td>
License key 
		</td>
		<td>
License key to connect on MaxMind. 
		</td>
	</tr>
	<tr>
		<td>
Countries 
		</td>
		<td>
Select all authorized countries to connect to the {{ en.DVLS }} instance. 
		</td>
	</tr>
</table>


