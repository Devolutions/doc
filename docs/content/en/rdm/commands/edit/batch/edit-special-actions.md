---
eleventyComputed:
  title: Edit (Special Actions)
  description: The Edit (Special Actions) option allows users and administrators to modify entries in ways that are not part of the normal configurations of an entry.
---
The ***Edit (Special Actions)*** option allows users and administrators to modify entries in ways that are not part of the entries' normal configurations. This can be accessed in ***Edit*** – ***Edit (Special Actions)***, either in the top menu or by right-clicking an entry.

![!!Edit – special actions1](https://cdnweb.devolutions.net/docs/RDMW4041_2024_1.png)

![!!Edit – special actions2](https://cdnweb.devolutions.net/docs/RDMW4039_2024_1.png)

{% snippet icon.badgeInfo %}
Available special actions depend on the type of entry selected.
{% endsnippet %}

## General
| | |
|------------------------------------------------|------------------------------------------------|
| Change color | Changes the selected entries icon color. |
| [Custom PowerShell Command](/rdm/powershell-scripting/custom-powershell-commands/) | Applies custom PowerShell commands to the selected entries. |
| Detect MAC Addresses | Returns the selected entries' MAC address(es). |
| [Load from System Information](/kb/remote-desktop-manager/knowledge-base/load-from-inventory/) | Allows to view the configuration of an entry. |
| Move Selection To New Folder | Moves the selected entries to another folder. |
| Move to existing password list | Relocates the selected credential entries information to an existing password list. |

## Web
| | |
|----------|------------|
| Assign Favicon | Automatically assigns the relevant favicon(s) to the selected website entries. |
| [Convert Website (legacy) to Website](/kb/remote-desktop-manager/how-to-articles/convert-website-legacy-to-website/) | Converts a deprecated website (legacy) entry into a Website entry. |
| Discover HTLM Autofill | Automatically fills the HTLM login information fields of the selected entries. |
| Set Default HTML Autofill | Automatically fills in the Username ID and Password ID fields of the selected entries with their default values. |

## Convert to
| | |
|----------|------------|
| Convert PuTTY Session to Embedded PuTTY Session | Automatically converts selected PuTTY session(s) into embedded PuTTY session(s). |
| Convert SSH/Telnet/PortForward Session to Putty/Rebex Session| 	Automatically converts selected SSH/Telnet/PortForward session(s) into Putty/Rebex session(s). |
| Convert to API Key | Automatically converts the selected credential entry into an API Key entry. |
| Convert to Login (Account) | Automatically converts the selected credential entry into a Login (Account) entry. |
| Convert to Password List | Automatically converts the selected credential entry into a Password List. |
| Convert to Website | Automatically converts the selected credential entry into a Website entry. | 

## Extractor
| | |
|----------|------------|
| Extract Credential Entry | Creates an entry for the credentials stored in the selected entries. | 
| Extract Host Entry | Creates a host entry for the selected entry. | 

## Template
| | | 
|----------|--------------|
| Change Type | Converts the selected entries types to a different one. | 
| [Convert with Template](/kb/remote-desktop-manager/how-to-articles/convert-with-templates/) | Converts the selected entries according to a chosen template. Also gives to option to choose which of the entry's information to retain. |

