---
eleventyComputed:
  title: Port Generator
---
The ***Port Generator*** allows you to generate ports for your connections.  

## Settings 

![Port Generator](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10393.png) 

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
Boundaries 
		</td>
		<td>
Determinate the port range to generate the ports between those 2 numbers. 
		</td>
	</tr>
	<tr>
		<td>
Include well known ports 
		</td>
		<td>
Include ports from range 0 to 1023. They are the well-known ports or system ports. They are used by system processes that provide widely used types of network services 
		</td>
	</tr>
	<tr>
		<td>
Include registered ports 
		</td>
		<td>
Include ports from range 1024 to 49151. They are assigned by IANA for specific service upon application by a requesting entity. On most systems, registered ports can be used by ordinary users. 
		</td>
	</tr>
	<tr>
		<td>
Include ports used by others sessions 
		</td>
		<td>
Include the ports that are already used by other sessions. 
		</td>
	</tr>
</table>
