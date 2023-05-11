---
title: CSV Import Strategies and File Format
---
When importing CSV files into {{ en.RDM }} , there are some decisions to be made about the strategies to use and the format of the content. 

## Templates 

The most important decision is about if and how to apply a template as part of the process.  

Both methods of importing from CSV allow you to choose a template for newly created entries. If you do choose a template as part of the process, it will be applied to all entries created from that batch. Sometimes, it may be a good strategy to split the entries in different CSV files by grouping them by entry types you wish to create.  

If you need finer control, you can specify the template to use in a ***Template*** column of the CSV file but, since you are able to specify the entry type from within the CSV file, it may not be necessary.  

{% snippet icon.badgeNotice %} 
In ***File – Import*** , we recommend you use the ***Import Generic Csv Wizard*** option first. You can modify, if needed, the ***Header format instruction*** .  
![Import Csv Wizard](/img/en/rdm/windows/RdmWin4044.png) 
{% endsnippet %}
 
## File Content 

{% snippet icon.badgeCaution %} 
Some validations on entry settings are not in the business layer but rather in the property dialogs. This means that using the import process can result in invalid entries that trigger errors. Please validate the resulting entries carefully. 
{% endsnippet %}
 
In the CSV file, the ***Host*** and the ***Name*** fields are mandatory. If no template is specified, the RDP type will be used as a fallback type.  

We cannot provide the list of all supported fields for all entry types because {{ en.RDM }} uses an open architecture and is therefore not aware of all the entry type fields that are provided by our add-on system. A good method of finding out the field structure is creating an entry of the desired type, right-clicking it and selecting ***Clipboard – Copy*** , then pasting the content in your favorite editor. You will see the structure and the field names.  

{% snippet icon.badgeInfo %} 
Default values for fields are not serialized, meaning that they are simply left out of the serialized structure. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Implementing support for all fields comes at a cost. The import process is time consuming because of all the dynamic field access that takes place. A massive initial import of entries should be separated in batches of manageable sizes. Please perform trials and tune the number of entries to achieve acceptable performance. 
{% endsnippet %}
 
All of our entries share a basic set of fields; the rest is tied to the specific technology being interfaced with (RDP, SSH, etc.). Some fields are grouped in structures, like the Information Tab. Those fields are accessible only when providing the structure name as a prefix, for example, " MetaInformation\OS " or " MetaInformation\PurchaseDate ". 

{% snippet icon.badgeInfo %} 
Note that the CSV file can contain our variables: they will be resolved upon saving. For instance, you could use the $HOST$ variable in fields like ***Description*** , ***URL*** , ***Putty\CustomSessionName*** , etc. It will be replaced by the corresponding value. 
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
Host name of the device. This is a mandatory field . 
		</td>
	</tr>
	<tr>
		<td>
Name 
		</td>
		<td>
Name of the entry. This is a mandatory field . 
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


