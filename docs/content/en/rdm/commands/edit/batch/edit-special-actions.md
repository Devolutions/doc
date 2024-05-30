---
eleventyComputed:
  title: Edit (Special Actions)
  description: The Edit (Special Actions) option allows users and administrators to modify entries in ways that are not part of the normal configurations of an entry.
---
The ***Edit (Special Actions)*** option allows users and administrators to modify entries in ways that are not part of the entries' normal configurations. This can be accessed in ***Edit*** – ***Edit (Special Actions)***, either in the top menu or by right-clicking an entry.

![!!Edit – special actions1](https://cdnweb.devolutions.net/docs/RDMW4041_2024_1.png)

![!!Edit – special actions2](https://cdnweb.devolutions.net/docs/RDMW4039_2024_1.png)

{% snippet, "badgeInfo" %}
Available special actions depend on the type of entry selected.
{% endsnippet %}

## General
| | |
|------------------------------------------------|------------------------------------------------|
| Change color | Changes entries icon color, provided they are part of {{ en.RDM }} default icon set. |
| [Custom PowerShell Command](/powershell/rdm-powershell/powershell-scripting/custom-powershell-commands/) | Allows executing a custom powershell command to perform many different operations. |
| Detect MAC Addresses | Detects the MAC address of the selected machine entries and fills the appropriate field in the asset section. |
| Load from System Information | Fills the asset section of the entry. |
| Move Selection To New Folder | Moves the selected entries to another folder. |
| Move to existing password list | Relocates the selected credential entries information to an existing password list. |

## Web
| | |
|----------|------------|
| Assign Favicon | Assigns the relevant favicon(s) to the selected website entries. |
| [Convert Website (legacy) to Website](/rdm/kb/rdm-windows/how-to-articles/convert-website-legacy-to-website/) | Converts a deprecated website (legacy) entry into a Website entry. |
| Discover HTML Autofill | Attempts to fill the HTML login information fields of the selected entries. |
| Set Default HTML Autofill | Fills in the Username ID and Password ID fields of the selected entries with their default values. |

## Convert to
| | |
|----------|------------|
| Convert PuTTY Session to Embedded PuTTY Session | Converts selected PuTTY session(s) into embedded PuTTY session(s). |
| Convert SSH/Telnet/PortForward Session to Putty/Rebex Session | Converts selected SSH/Telnet/PortForward session(s) into PuTTY/Rebex session(s). |
| Convert PuTTY/Rebex session to SSH/Telnet/Port forward session | Converts selected PuTTY/Rebex session(s) to SSH/Telnet/Port forward session(s). |
| Convert to API Key | Converts the selected credential entry into an API Key entry. |
| Convert to crendential entry | Converts an information type entry to a username/password entry. |
| Convert to Login (Account) | Converts the selected credential entry into a Login (Account) entry. |
| Convert to Password List | Converts the selected credential entry into a password list. |
| Convert to Website | Converts the selected credential entry into a Website entry. | 

## Extractor
| | |
|----------|------------|
| Extract Credential Entry | Extracts the credentials of the entry in a new entry and links the previous entry to that host. In the case of a password list, extracts the individual items of the password list into multiple credential entries. | 
| Extract merged information entry | Extracts the different parts of an information entry into separate entries |
| Extract VPN | Extracts the VPN information of the entry in a new entry and links the previous entry to that VPN. |
| Extract Contact | Extracts the contact information of the entry in a new entry. |
| Extract Host Entry | Extracts the host of the entry in a new entry and links the previous entry to that host. | 

## Template
| | | 
|----------|--------------|
| Change Type | Converts the selected entries types to a different one. | 
| [Convert with Template](/rdm/kb/rdm-windows/how-to-articles/convert-with-templates/) | Converts the selected entries according to a chosen template. Also gives to option to choose which of the entry's information to retain. |

