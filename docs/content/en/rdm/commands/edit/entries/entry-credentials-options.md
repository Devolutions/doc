---
eleventyComputed:
  title: Entry credentials options
  description: Multiple options are available to use for Credentials in {{ en.RDM }} entries.  
---
{% youtube 'FtSlp_TVAxE?si=VU395_g6MZ75HHvm&amp;start=636' %}  

Multiple options are available to use for ***Credentials*** in {{ en.RDM }} entries.  
![Credentials](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2225.png)

| OPTION                      | DESCRIPTION                                                            |
|-----------------------------|------------------------------------------------------------------------|
| Custom                      | This option allows to enter custom credentials in the ***General*** section of the entry                                                                                                  |
| Linked ({{ en.VLT }}) | Link an entry to use an existing ***Credential*** entry in the same {{ en.VLT }}                                                                                                 |
| Inherited                   | The credentials used by this entry will be inherited and defined by climbing up the navigation tree until it has access to a set of credentials in a parent folder                                                                                     |
| My personal credentials | Will use the credentials set in [My personal credentials](/rdm/windows/commands/file/my-account-settings/my-personal-credentials/) feature. This allows to centralize one credential to replace or emulate the ones for a Windows session               |
| None                        | No credentials will be allowed to be saved or linked to this entry                                                                                                  |
| Find by name ({{ en.UVLT }}) | Will search the ***{{ en.UVLT }}*** for the name specified. If the box is left empty, when launch, a ***Credential list*** will open with all available ***Credentials*** entry from the ***{{ en.UVLT }}***.                                        |
| Privileged account    | Will use pre-existing Privileged account from the same data source                                                                                                 |
| My privileged account | Will use the chosen username/password combo. Needs to first be set up in ***File*** – ***My Account Settings*** – ***My Defaults*** – ***My Privileged Account***.                                                                                            |
