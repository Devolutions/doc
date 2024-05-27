---
eleventyComputed:
  title: JSON import strategies and file format
  description: When importing JSON files into {{ en.RDM }}, there are some specifications to follow regarding the content format. 
---
When importing JSON files into {{ en.RDM }}, there are some specifications to follow regarding the content format. 

## File Content 

{% snippet, "badgeCaution" %} 
Some validations on entry settings are not in the business layer but rather in the property dialogs. This means that using the import process can result in invalid entries that trigger errors. Please validate the resulting entries carefully. 
{% endsnippet %}
 
We cannot provide the list of all supported fields for all entry types because {{ en.RDM }} uses an open architecture and therefore is not even aware of all the entry type fields that are provided by our add-on system. A good method of finding out the field structure is creating an entry of the desired type, right-clicking it and selecting ***Clipboard – Copy***, then pasting the content in your favorite editor. You will see the structure and the field names. 

{% snippet, "badgeInfo" %} 
Default values for fields are not serialized, meaning that they are simply left out of the serialized structure. 
{% endsnippet %}
 
{% snippet, "badgeInfo" %} 
Implementing support for all fields comes at a cost. The import process is time consuming because of all the dynamic field access that takes place. A massive initial import of entries should be separated in batches of manageable sizes. Please perform trials and tune the number of entries to achieve acceptable performance. 
{% endsnippet %}
 
All of our entries share a basic set of fields; the rest is tied to the specific technology being interfaced with (RDP, SSH, etc.). Some fields are grouped in structures, like the Information Tab. Those fields are accessible only when providing the structure name as a parent object, for example, "MetaInformation\OS" or "MetaInformation\PurchaseDate". 

{% snippet, "badgeInfo" %} 
Note that the JSON file can contain our variables: they will be resolved upon saving. For instance, you could use the $HOST$ variable in fields like ***Description***, ***URL***, ***Putty\CustomSessionName***... It will be replaced by the corresponding value. 
{% endsnippet %}
 
Below is a non-exhaustive list of some relevant fields.  

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Host                           | Host name of the device.                                                                                                                         |
| Name                           | Name of the entry.                                                                           |
| ConnectionType                 | Token representing the connection type. It is best to use the ***Clipboard – Copy*** method to obtain the acceptable values. If no connection type is specified, RDP will be used by default. |
| Group                          | Destination folder. Note that if the import process itself defined a destination folder, the folder listed here would be created below the one from the process.                |
| Description                    | Description of the entry.                                                                                                                         |
| Open (Embedded)                | Boolean value (true or false) that indicates to open the session embedded. The default value is false, meaning that the native client will be used depending on the technology (MSTSC.EXE, for instance).                      |
| Username                       | Username used to open a session to the device.                                                                                                                        |
| Domain                         | Domain used to open a session to the device.                                                                                                                        |
| Password                       | Password used to open a session to the device. Please note that this field is encrypted and stored into another field upon being imported.         |
| MetaInformation\SerialNumber   | Serial number of the device.                                                                                                                        |
| MetaInformation\ServiceTag     | Service tag of the device.                                                                                                                        |
| MetaInformation\PurchaseDate   | Purchase date in a ISO8601 format (i.e., yyyy-mm-dd).                                                                                                                   |

