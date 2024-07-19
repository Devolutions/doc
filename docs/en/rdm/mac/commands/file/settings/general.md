---
eleventyComputed:
  title: General
---
Use ***File – Preferences – General*** to configure options related to the functionality of the application.

## Settings
![File – Settings – General](https://cdnweb.devolutions.net/docs/RDMM4014_2024_2.png)

### General
| OPTION                               | DESCRIPTION |
|--------------------------------------|-------------|
| Allow multiple connections (Default) | Allows to open multiple concurrent connections (tabs) within the same session. If not enabled, selecting ***Open Session*** will set the focus on the existing connection. |
| Clipboard copy method | Method for copying to/pasting from the clipboard. The ***Legacy*** option allows users to paste usernames or passwords multiple times without time limit; the ***Paste once (secure)*** option allows for a single paste before emptying the clipboard, and empties it automatically after 5 seconds. ***Paste once (secure)*** is the ***Default***.  |
| Clipboard secure copy delay | Determines the delay (in milliseconds) during which the copy buffer stays intact when copying using the ***Paste once (secure)*** clipboard copy method. | 
| Share anonymous usage data with Devolutions | Allows Devolutions to collect anonymous usage data for statistical and support purposes. | 
| Hide application on copy | Automatically hide {{ en.RDM }} on copying a password or a username to allow for immediate access to the app that requires the copied credentials. | 

### Application Start
| OPTION                       | DESCRIPTION                                                                    |
|------------------------------|--------------------------------------------------------------------------------|
| Startup window state | Application window size at startup.                                                    |
| Enable check for updates | Application will check for updates automatically, either on startup, periodically or when a major/important update is out. | 
| Check for updates at startup | Application will perform a verification for new releases available at startup. |
| Update type | Allows users to select when to perform updates and which to allow/prevent according to their importance or size. | 

### Application Close
| OPTION                                | DESCRIPTION                                                                |
|---------------------------------------|----------------------------------------------------------------------------|
| Ask confirmation on application close | Application will prompt you for confirmation when attempting to close.     |
| Verify opened session on close        | Application will warn you about running sessions when attempting to close. |
| Very checked out sessions on close    | Application will warn you about checked out sessions on close.             | 

### Clipboard
| OPTION                                | DESCRIPTION                                                                |
|---------------------------------------|----------------------------------------------------------------------------|
| Clear clipboard delay | Allows to define a delay (in seconds) after which the clipboard is automatically emptied of its {{ en.RDM }} content. | 

### Custom Variables
| OPTION           | DESCRIPTION |
|------------------|-------------|
| Custom Variables | Custom variables option has been implemented to customize your own variables in the application. Click on the plus sign to create a new variable to use. Enter the name and the value of the variable. |