---
eleventyComputed:
  title: Strategies and formats for importing CSV files with {{ en.DHUBI }}
  description: When importing CSV files with {{ en.DHUBI }}, one crucial decision is whether and how to apply a template to the entries.
---
When importing CSV files with {{ en.DHUBI }}, one crucial decision is whether and how to apply a template to the entries. Choosing a template during the import process applies it to all entries created from that batch. To manage different entry types effectively, consider dividing your entries into separate CSV files based on the types you want to create.

For more precise control over the templates used, you can specify the desired template in a ***Template*** column within the CSV file. However, this may be unnecessary if you can already specify the entry type directly in the CSV.

### Columns and fields considerations

* When importing CSV files, it is important to note that some entry validations occur not in the business layer but within property dialogs. This discrepancy can lead to invalid entries that generate errors during the import process. To ensure the integrity of your data, please carefully validate the entries after import.
* The ***Host*** and ***Name*** fields are mandatory in the CSV file. If no specific template is designated, the RDP (Remote Desktop Protocol) type will be automatically applied as the default.
* Default values for fields are not serialized; meaning, they are omitted from the output structure unless explicitly entered in the CSV file.
* Supporting a comprehensive range of fields incurs a performance cost. The import process is intricate and time-consuming due to the extensive dynamic field access required. To optimize performance, it is advisable to segment a large volume of initial entries into smaller, manageable batches. Experiment with different batch sizes to find an efficient balance that ensures acceptable performance levels.
* All entries contain a core set of fields applicable to all, while additional fields may be specific to the technology interfaced with, such as RDP, SSH, etc. Certain fields are nested within structures like the ***Information*** tab and require a prefix to access, such as "MetaInformation\OS" or "MetaInformation\PurchaseDate".
* It is also possible to incorporate variables within the CSV file, which will be resolved when the data is saved. For example, using the $HOST$ variable in fields like ***Description***, ***URL***, or ***Putty\CustomSessionName*** will dynamically insert the corresponding value at the time of data processing.
 
Below is an overview of some relevant fields to assist in preparing your CSV file for importing.

| Option                       | Description                                                                                                                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host                         | Host name of the device. This is a mandatory field.                                                                                                                                                       |
| Name                         | Name of the entry. This is a mandatory field.                                                                                                                                                             |
| ConnectionType               | Token representing the connection type. It is best to use the ***Clipboard – Copy*** method to obtain the acceptable values.                                                                              |
| Group                        | Destination folder. Note that if the import process itself had a destination folder defined as well, the folder listed here would be created below the one from the process.                              |
| Description                  | Description of the entry.                                                                                                                                                                                 |
| Open (Embedded)              | Boolean value (true or false) that indicates to open the session embedded. The default value is false, meaning that the native client will be used depending on the technology (MSTSC.EXE, for instance). |
| Username                     | Username used to open a session to the device.                                                                                                                                                            |
| Domain                       | Domain used to open a session to the device.                                                                                                                                                              |
| Password                     | Password used to open a session to the device. Please note that this field is encrypted and stored into another field upon being imported.                                                                |
| MetaInformation\SerialNumber | Serial number of the device.                                                                                                                                                                              |
| MetaInformation\ServiceTag   | Service tag of the device.                                                                                                                                                                                |
| MetaInformation\PurchaseDate | Purchase date in a ISO8601 format (i.e., yyyy-mm-dd).                                                                                                                                                     |
