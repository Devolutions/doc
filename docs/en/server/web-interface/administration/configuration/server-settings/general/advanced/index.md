---
title: Advanced
order: 20
---
The ***Advanced*** section allows the administrator to configure the Refresh token lifetime parameter and some other specific parameters like the [Labelling](/server/web-interface/administration/configuration/server-settings/general/advanced/white-labeling-customizations/). 

![Administration – {{ en.DVLS }} Settings – Advanced](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8044.png) 

## Settings 
### Features 

<table>
	<tr>
		<th>
Category 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Refresh token lifetime (minutes) 
		</td>
		<td>
This the duration time of the token. At the expiration of the token, the user must again authenticate himself on the {{ en.DVLS }} instance. When updated, the {{ en.DVLS }} needs to be restarted using the Stop Server/Start Server button on the {{ en.DVLSCONSOLE }}. 
		</td>
	</tr>
	<tr>
		<td>
Automatically logout idle users after (minutes) 
		</td>
		<td>
Enter the delay for the user to be disconnected from the server if inactive. This value must be lower than the Refresh token lifetime parameter. This parameter is applied on the web interface or with the <a href="/server/dwl/overview/" target="_blank">{{ en.DWL }}</a> browser {{ en.CTOOL }}. It has no effect on {{ en.RDM }}. When updated, the {{ en.DVLS }} needs to be restarted using the Stop Server/Start Server button on the {{ en.DVLSCONSOLE }}. 
		</td>
	</tr>
	<tr>
		<td>
User license type 
		</td>
		<td>
Select the license type. Default is Connection Management. 
		</td>
	</tr>
	<tr>
		<td>
Launch connection with 
		</td>
		<td>
Sets the application that opens remote connections: {{ en.RDM }} or {{ en.DLAUNCHER }}. Default refers to {{ en.DLAUNCHER }}. 
		</td>
	</tr>
	<tr>
		<td>
Server Logo Large / Server Logo Small 
		</td>
		<td>
See the <a href="/server/web-interface/administration/configuration/server-settings/general/advanced/white-labeling-customizations/" target="_blank">White Labeling Customizations</a> page for more information. 
		</td>
	</tr>
</table>
