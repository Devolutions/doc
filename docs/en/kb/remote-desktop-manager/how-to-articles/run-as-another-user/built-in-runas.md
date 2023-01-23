---
title: Built-in RunAs
---
# {{ en.TOPICTITLE }}  
{% snippet icon.badgeInfo %}
This article describes the built in method of using ***Run As*** For sessions types that don&apos;t yet support the built in method you can follow the manual steps outlined [here](/kb/remote-desktop-manager/how-to-articles/run-as-another-user/)
{% endsnippet %}  

## Settings
### Supported Types
The following types currently support ***Run As***
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
Session
		</td>
		<td>
			<ul>
				<li>Command Line</li>
				<li>PowerShell</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>
Macros/Scripts/Tools
		</td>
		<td>
			<ul>
				<li>Command Line</li>
				<li>PowerShell Local</li>
				<li>PowerShell Remote</li>
				<li>PSExec</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>
Session Add-on
		</td>
		<td>
			<ul>
				<li>SQL Server Management Studio</li>
			</ul>
		</td>
	</tr>
</table>

## Session
![KB4566.png](/img/en/kb/KB4566.png)  
Sessions that support Run As will have a Run As tab where you specify which credentials to use when starting with Run As.
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
None
		</td>
		<td>
No Run As is performed.
		</td>
	</tr>
	<tr>
		<td>
Current session
		</td>
		<td>
Use the same credentials as defined in the session.
		</td>
	</tr>
	<tr>
		<td>
Custom credentials
		</td>
		<td>
Use specified custom credentials.
		</td>
	</tr>
	<tr>
		<td>
Credential repository
		</td>
		<td>
Use a link credential entry.
		</td>
	</tr>
	<tr>
		<td>
Use my personal credentials
		</td>
		<td>
Use a link personal credential entry.
		</td>
	</tr>
</table>

## Macros/Scripts/Tools
With tools session types you only need to specify ***Run as different user*** in ***Advanced*** tab. At execution time the credentials will be resolved and used to start the Windows Credentials unless you select ***Use session credentials*** , in which case it will use those active for the session.  
![KB4567.png](/img/en/kb/KB4567.png)  
With tools session types you only need to specify ***Run as different user*** At execution time the credentials will be resolved and used to start the Run As process.
## Session Add-on
SQL Server Management Studio supports Run As. Configure it like you would configure a normal session.  
![KB4568.png](/img/en/kb/KB4568.png)  
Click on ***Run as different user*** to modify the ***Run As*** settings.  
![KB4569.png](/img/en/kb/KB4569.png)
## Notes
Run as Different User and Run As Administrator are mutually exclusive.
Run as Different User doesn&apos;t allow for Shell Execute
### Example: Command line session with Run as different user on the same workgroup/domain
1. Create a new Command Line session.
1. Set the command to ***CMD***  
![KB4570.png](/img/en/kb/KB4570.png)
1. Specify the ***Run As*** credentials.  
![KB4571.png](/img/en/kb/KB4571.png)
1. Save your session.
1. Run your Command Line session.  
![KB4572.png](/img/en/kb/KB4572.png)
