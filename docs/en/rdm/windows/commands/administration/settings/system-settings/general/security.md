---
eleventyComputed:
  title: Security
---
![!!clip10724](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10724.png) 

<table>
	<tr>
		<th>

DATA SOURCE SECURITY 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Create {{ en.VLT }} with restricted access by default 
		</td>
		<td>
Automatically secure the {{ en.VLT }} settings when creating a repository. Therefore, the permissions settings are set to ***Never***. 
		</td>
	</tr>
	<tr>
		<td>
Force data source 2-factor configuration 
		</td>
		<td>
Require the users to have a [2-factor configuration](/rdm/windows/data-sources/multi-factor-authentication/) applied on the data source. Not shown with {{ en.DVLS }} as 2FA set elsewhere. 
		</td>
	</tr>
	<tr>
		<td>
Resolve credentials in overview 
		</td>
		<td>
Displays username and password fetched from a Credential repository in the entry overview in the dashboard. Uncheck this option if it takes too long to resolve. 
		</td>
	</tr>
	<tr>
		<td>
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>

TIME-BASED USAGE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Time of day 
		</td>
		<td>
Select the hours which the data source is limited to. Select between:  

* ***Any time***: the session can be used at any hour. 
* ***Custom***: manually select the time frame the session is available for. 
		</td>
	</tr>
	<tr>
		<td>
Time of week 
		</td>
		<td>
Select which days the data source is available for. Select between:  

* ***Any day***: the session can be used any day of the week or week-end. 
* ***Week days***: the session can be used only the week days. 
* ***Week ends***: the session can be used only the week ends. 
* ***Custom***: manually select each day the session is available for. 
		</td>
	</tr>
	<tr>
		<td>
Time Zone 
		</td>
		<td>
Select the time zone you are currently in. 
		</td>
	</tr>
</table>
