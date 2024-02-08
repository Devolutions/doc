---
eleventyComputed:
  title: Security
  description: Data source security and time-based usage in {{ en.RDM }}.  
---
![!!clip10724](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10724.png) 

| DATA SOURCE SECURITY                      | DESCRIPTION                                              |
|-------------------------------------------|----------------------------------------------------------|
| Create {{ en.VLT }} with restricted access by default | Automatically secure the {{ en.VLT }} settings when creating a repository. Therefore, the permissions settings are set to ***Never***.                             |
| Force data source 2-factor configuration  | Require the users to have a [2-factor configuration](/rdm/windows/data-sources/multi-factor-authentication/) applied on the data source. Not shown with {{ en.DVLS }} as 2FA set elsewhere.                                             |
| Resolve credentials in overview           | Displays username and password fetched from a Credential repository in the entry overview in the dashboard. Uncheck this option if it takes too long to resolve.               |

| TIME-BASED USAGE                          | DESCRIPTION                                               |
|------------------|-----------------------------------------------------------------------             |
| Time of day      | Select the hours which the data source is limited to. Select between: <ul><li>***Any time***: the session can be used at any hour.</li> <li> ***Custom***: manually select the time frame the session is available for.</li></ul> |
| Time of week     | Select which days the data source is available for. Select between: <ul><li>***Any day***: the session can be used any day of the week or weekend. </li>***Weekdays***: the session can be used only on weekdays.</li> <li>***Weekends***: the session can be used only on weekends.</li> <li>***Custom***: manually select each day the session is available for.</li></ul> |
| Time Zone        | Select the time zone you are currently in. |
