---
title: CyberArk PSM Integration Scenarios
---
There are different approaches using RDM’s Cyberark PSM Components.  

Although this guide covers many ways and techniques, it cannot cover every possible avenue.  

Here are mainly the approaches and techniques associated with them:  

* Initial Import
	* From CSV (give a csv template)
* Synchronization (Using RDM Synchronizer entry)
	* From Active Directory Synchronizer
	* From Comma-Separate values (CSV) Synchronizer
* Dynamic utilization
	* Quick Connect
	* Host  

## Initial Import of Cyberark Connections From CSV
### Create the Cyberark PSM server entry (or multiple)  
![KB4680.png](/img/en/kb/KB4680.png)  
Select the ***Connection Mode*** you elect on the server.  

* Custom (AD Account with permissions to RDP into the PSM server and an associated account in Cyberark).  
* AAM (Passwordless, see this [article](https://blog.devolutions.net/2020/10/going-passwordless-with-remote-desktop-manager-and-cyberark) ).  

In this example, Custom is in force; Username / domain / password has been populated manually.  

Then choose an RDP Template created beforehand, this template defines the setting of the initial connection on the PSM server.  

![KB4681.png](/img/en/kb/KB4681.png)  

Once the Cyberark PSM Server has been added, get the ID of the new entry ( ***Property - Entry Information*** ).  

In our example, the ID is 33628378-d4a6-431f-8438-16b75921aef9.  

![KB4682.png](/img/en/kb/KB4682.png)  

### Create the Cyberark PSM Connection Template
<a name="psm"></a>

1. Go to ***File - Templates - Templates***  
![KB4683.png](/img/en/kb/KB4683.png)  
1. Add a new template.  
![KB4684.png](/img/en/kb/KB4684.png)
1. Select ***Cyberark PSM Connection*** (Pro-tip: you can filter in the ***<Search>*** field).  
![KB4685.png](/img/en/kb/KB4685.png)
1. Give the template a significant name, some of the remaining fields can be filled, but the CSV should be complete enough if filled properly.  
![KB4686.png](/img/en/kb/KB4686.png)

### Create a CSV File for the import
<a name="csv"></a>

To facilitate the process, here’s a template of the [CSV](https://api.devolutions.net/redirection/b88f0f80-67f1-4eb0-b803-e1179a19222b) file, populate it accordingly.  

The fields are mapped like this :  

<table>
	<tr>
		<th>
COLUMNS
		</th>
		<th>
		</th>
	</tr>
	<tr>
		<td>
Name
		</td>
		<td>
Name of the entry
		</td>
	</tr>
	<tr>
		<td>
ConnectionType
		</td>
		<td>
Always “CyberarkPSM”
		</td>
	</tr>
	<tr>
		<td>
CyberArkPSM\Component
		</td>
		<td>
For RDP: PSM-RDP (several options available)
		</td>
	</tr>
	<tr>
		<td>
CyberArkPSM\CyberArkJumpConnectionID
		</td>
		<td>
ID of the Cyberark PSM Server entry
		</td>
	</tr>
	<tr>
		<td>
CyberArkPSM\PrivilegedAccount
		</td>
		<td>
Privileged account to use
		</td>
	</tr>
	<tr>
		<td>
Host
		</td>
		<td>
End point Hostname / IP
		</td>
	</tr>
</table>

### Import
Once the PSM Server entry has been created, and the CSV File is populated.  

1. Go to ***File - Import - Import Session Csv Wizard***  
![KB4687.png](/img/en/kb/KB4687.png)
1. Browse and select the Csv File created beforehand, and click ***Next***  
![KB4688.png](/img/en/kb/KB4688.png)
1. Select ***Selected template***
2. Select the template we created and click ***Finish***  
![KB4689.png](/img/en/kb/KB4689.png)
1. And voila!  
![KB4690.png](/img/en/kb/KB4690.png)

## Synchronization (Using RDM Synchronizer entry)  
{% snippet icon.badgeInfo %}
Both those techniques are used to connect to a third party repository. The first one will connect to a domain controller, and list the servers and computers according to filters and settings.
{% endsnippet %}  

The general approach and principle of using synchronizers are to keep a list of servers updated from an external information repository, such as Domain Controller, VM host, or even a simple CSV file exported periodically from another system.  

Those entries are created following a template, created and configured beforehand.  

It’s also granted that the Cyberark PSM integration is already configured and working (PSM Connection and Server Components, RDM templates, etc.)  

## From Active Directory Synchronizer
This approach will create entries from an LDAP request on a domain controller.  

One downside of this setup is that only the Host field will be filled from the synchronizer, the Privileged Account and the component have to either remain empty, or all using the same setting (coming from the template).  
### Create the PSM Connection Template
Please refer to <a href="#psm">Create the Cyberark PSM Connection Template</a> in the previous section.  

The template will contain the Privileged account, the PSM Server and Connection Component to use.  
### Create an Active Directory Synchronizer

![KB4691.png](/img/en/kb/KB4691.png)

1. Enter the domain related data in the ***General*** tab.
1. Then in the ***Settings*** tab, select your destination folder for the new entries to be created.
1. Select the PSM Connection Template.  
![KB4692.png](/img/en/kb/KB4692.png)
1. Fill in the rest of the options and save.  

Then you only have to run the Synchronizer whenever you need to refresh the server list.  

## From Comma-Separate values (CSV) Synchronizer
This approach is a mix between the CSV import and the synchronizer.  

In most cases, the CSV file will be generated from an external system, and then edited / processed to add and complete the information.  

Please refer to <a href="#csv">Create the Cyberark PSM Connection Template</a> from the previous section for an example of a CSV Template.  

That makes it more complex, but more flexible.  

### Create the PSM Connection Template
Please refer to <a href="#psm">Create the Cyberark PSM Connection Template</a> in the previous section.  

### Create a CSV Synchronizer  

![KB4693.png](/img/en/kb/KB4693.png)  

Enter the file path, the template to use (created beforehand) and the destination folder.  

You can then run the synchronizer every time a new version of the CSV file is produced to keep you list updated.  
## Dynamic utilization
### Quick Connect
Via the ***Quick Connect*** toolbar, you can open an ad-hoc session by specifying the host and session type. Read more about the [Quick Connect](/kb/remote-desktop-manager/knowledge-base/quick-connect/) function.  

A Cyberark PSM Connection template is required beforehand.  

1. Go to ***File - Templates - Templates*** , and add a new template.
1. In ***Host*** , enter $QUICK_CONNECT$
1. Set a privileged account to be used.
1. Select the ***PSM Server*** that this PSM connection will be using and a ***Connection component***  
![KB4694.png](/img/en/kb/KB4694.png)  

{% snippet icon.badgeInfo %}
This approach would allow you to create multiple templates for PSM connections reflecting several ***Privileged Accounts*** and ***Connection components***
{% endsnippet %}  

### Utilization
Once a template has been created, it will be showing up in the ***Quick connect*** list of templates.  
![KB4695.png](/img/en/kb/KB4695.png)

You can then type in the ***Host*** of the target endpoint, and launch the session.
## Host
Take a look at this [link](/kb/remote-desktop-manager/how-to-articles/multiple-types-connections/host-with-templates/) to implement using a host for PSM Integration.  

Steps are very similar to the ***Quick connect*** , the creation of the template is the exact same, except that the ***Host*** field will remain empty.  

What is actually interesting about this, is that a variable can be used to populate the ***Privileged account***  

In this example I used the Custom Field #1 variable, here’s the template configuration:  

![KB4696.png](/img/en/kb/KB4696.png)  

And the ***Host*** entry:  

![KB4697.png](/img/en/kb/KB4697.png)  
![KB4698.png](/img/en/kb/KB4698.png)
