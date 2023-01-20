---
title: Create a Microsoft L2TP VPN Entry
---
# {{ en.TOPICTITLE }}
You can create a Microsoft L2TP VPN entry with {{ en.RDM }} versions 2021.1.1.0 and above.
1. First you will need to create a new ***VPN Microsoft*** entry with the basic information and settings.
1. In the ***General - Connection*** section, use the drop down menu next to the ***VPN type*** , and select ***L2TP*** instead of ***Automatic***
1. Enter your ***Pre-shared key*** provided from Microsoft.  
![KB4703.png](/img/en/kb/KB4703.png)
1. Fill in the information for the ***Username*** , ***Domain*** and ***Password***
1. Optional: The ***Auth method*** can be different for each user (it is by default set to ***PAP*** ), depending on your Microsoft VPN configuration. Use the drop down menu to change it.  
![KB4704.png](/img/en/kb/KB4704.png)
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
PAP
		</td>
		<td>
Unencrypted password
		</td>
	</tr>
	<tr>
		<td>
CHAP
		</td>
		<td>
Challenge Handshake Authentication Protocol
		</td>
	</tr>
	<tr>
		<td>
MS-CHAP v2
		</td>
		<td>
Microsoft CHAP Version 2
		</td>
	</tr>
	<tr>
		<td>
EAP
		</td>
		<td>
Extensible Authentication Protocol
		</td>
	</tr>
</table>

6. Click ***OK*** to save.
