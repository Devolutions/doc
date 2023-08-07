---
title: Remote Desktop Manager Import Strategies and File Format
---
When importing Remote Desktop Manager files into {{ en.RDM }} , there are some specifications to follow regarding the content format. 

## File Content 

{% snippet icon.badgeCaution %} 
Some validations on entry settings are not in the business layer but rather in the property dialogs. This means that using the import process can result in invalid entries that trigger errors. For Remote Desktop Manager files, this could happen in the unlikely case that you import an Remote Desktop Manager file that was exported from an older version of {{ en.RDM }} and that one of the entry types in the file now includes new mandatory fields. 
{% endsnippet %}
 
We cannot provide the list of all supported fields for all entry types because {{ en.RDM }} uses an open architecture and therefore is not even aware of all the entry type fields that are provided by our add-on system. A good method of finding out the field structure is creating an entry of the desired type, right-clicking it and selecting ***Clipboard – Copy*** , then pasting the content in your favorite editor. You will see the structure and the field names. 

{% snippet icon.badgeInfo %} 
Default values for fields are not serialized, meaning that they are simply left out of the serialized structure. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Implementing support for all fields comes at a cost. The import process is time consuming because of all the dynamic field access that takes place. A massive initial import of entries should be separated in batches of manageable sizes. Please perform trials and tune the number of entries to achieve acceptable performance. 
{% endsnippet %}
 
All of our entries share a basic set of fields; the rest is tied to the specific technology being interfaced with (RDP, SSH, etc.). Some fields are grouped in structures, like the Information Tab. Those fields are accessible only when providing the structure name as a parent group, for example, " MetaInformation\OS " or " MetaInformation\PurchaseDate ". 

{% snippet icon.badgeInfo %} 
Note that the Remote Desktop Manager file can contain our variables: they will be resolved upon saving. For instance, you could use the $HOST$ variable in fields like ***Description*** , ***URL*** , ***Putty\CustomSessionName*** , ... It will be replaced by the corresponding value. 
{% endsnippet %}
 
Below is a non-exhaustive list of some relevant fields. 

<table>
	<tr>
		<th>

FIELD 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Host 
		</td>
		<td>
Host name of the device. 
		</td>
	</tr>
	<tr>
		<td>
Name 
		</td>
		<td>
Name of the entry. 
		</td>
	</tr>
	<tr>
		<td>
ConnectionType 
		</td>
		<td>
Token representing the connection type. It is best to use the ***Clipboard – Copy*** method to obtain the acceptable values. If no connection type is specified, RDP will be use by default. 
		</td>
	</tr>
	<tr>
		<td>
Group 
		</td>
		<td>
Destination folder. Note that if the import process itself defined a destination folder, the folder listed here would be created below the one from the process. 
		</td>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Description of the entry. 
		</td>
	</tr>
	<tr>
		<td>
Open (Embedded) 
		</td>
		<td>
Boolean value ( true or false ) that indicates to open the session embedded. The default value is false, meaning that the native client will be used depending on the technology (MSTSC.EXE, for instance). 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Username used to open a session to the device. 
		</td>
	</tr>
	<tr>
		<td>
Domain 
		</td>
		<td>
Domain used to open a session to the device. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Password used to open a session to the device. Please note that this field is encrypted and stored into another field upon being imported. 
		</td>
	</tr>
	<tr>
		<td>
MetaInformation\SerialNumber 
		</td>
		<td>
Serial number of the device. 
		</td>
	</tr>
	<tr>
		<td>
MetaInformation\ServiceTag 
		</td>
		<td>
Service tag of the device. 
		</td>
	</tr>
	<tr>
		<td>
MetaInformation\PurchaseDate 
		</td>
		<td>
Purchase date in a ISO8601 format (i.e., yyyy-mm-dd). 
		</td>
	</tr>
</table>


