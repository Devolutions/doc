---
eleventyComputed:
  title: CSV Files Import Strategies and Format with {{ en.HUB }} Importer
---
The most important decision is about if and how to apply a template as part of the process.

Importing CSV files with {{ en.HUB }} Importer allows you to choose a template for newly created entries. If you do choose a template as part of the process, it will be applied to ALL entries created from that batch. Sometimes, it may be a good strategy to split the entries in different CSV files by grouping them by entry types you wish to create.

If you need finer control, you can specify the template to use in a ***Template*** column of the CSV file but, since you are able to specify the entry type from within the CSV file, it may not be necessary.

## Columns

{% snippet icon.badgeCaution %}
Some validations on entry settings are not in the business layer but rather in the property dialogs. This means that using the import process can result in invalid entries that trigger errors. Please validate the resulting entries carefully.
{% endsnippet %}
 
In the CSV file, the ***Host*** and the ***Name*** fields are mandatory. If no template is specified, the RDP type will be used as a fallback type.

{% snippet icon.badgeInfo %}
Default values for fields are NOT serialized, meaning that they are simply left out of the serialized structure.
{% endsnippet %}

{% snippet icon.badgeInfo %}
Implementing support for all fields comes at a cost. The import process is time consuming because of all the dynamic field access that takes place. A massive initial import of entries should be separated in batches of manageable sizes. Please perform trials and tune the number of entries to achieve acceptable performance.
{% endsnippet %}

All of our entries share a basic set of fields; the rest is tied to the specific technology being interfaced with (RDP, SSH, etc). Some fields are grouped in structures like the Information Tab, for instance. Those fields are accessible only when providing the structure name as a prefix, for example: "MetaInformation\OS" or "MetaInformation\PurchaseDate".

{% snippet icon.badgeInfo %}
Note that the CSV file can contain our variables: they will be resolved upon saving. For instance, you could use the $HOST$ variable in fields like ***Description***, ***URL***, ***Putty\CustomSessionName*** ... It will be replaced by the corresponding value. 
{% endsnippet %}
 
Here is a list of some relevant fields.

| Option                       | Description |
| ---------------------------- | ----------- |
| Host                         | Host name of the device. This is a mandatory field. |
| Name                         | Name of the entry. This is a mandatory field. |
| ConnectionType               | Token representing the connection type. It is best to use the ***Clipboard – Copy*** method to obtain the acceptable values. |
| Group                        | Destination folder. Note that if the import process itself had a destination folder defined as well, the folder listed here would be created below the one from the process. |
| Description                  | Description of the entry. |
| Open (Embedded)              | Boolean value ( true or false ) that indicates to open the session embedded. The default value is false, meaning that the native client will be used depending on the technology (MSTSC.EXE, for instance). |
| Username                     | Username used to open a session to the device. |
| Domain                       | Domain used to open a session to the device. |
| Password                     | Password used to open a session to the device. Please note that this field is encrypted and stored into another field upon being imported. |
| MetaInformation\SerialNumber | Serial number of the device. |
| MetaInformation\ServiceTag   | Service tag of the device.   |
| MetaInformation\PurchaseDate | Purchase date in a ISO8601 format (i.e., yyyy-mm-dd). |
