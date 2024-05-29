---
eleventyComputed:
  title: Settings
  order: 20
  status: Topic available in German language
---
The {{ en.WBEX }} settings can be accessed via the ***Settings*** button in the browser extension window regardless of which Devolutions application you are using with the {{ en.WBEX }}.
![{{ en.WBEX }} Settings Button](https://cdnweb.devolutions.net/docs/docs_en_dwl_Dwl2000.png)

The ***Settings*** are separated in two categories: [***Configuration***](#configuration) and [***Data sources***](#data-sources).
![{{ en.WBEX }} Settings](https://cdnweb.devolutions.net/docs/docs_en_dwl_Dwl4027.png)

### Configuration
The ***General*** settings are about the user interface and interaction.
* ***General*** tab
    * Show the {{ en.WBEX }} icon in the credentials fields.
    * Show the prompt when saving credentials on new login.
    * Show the context menu options.
    * Color the fields that are filled with the {{ en.WBEX }}.
    * Set the color ***Theme*** of the application.

* ***Advanced*** tab
    * Disable the analytics telemetry.
    * Enable the Beta versions of the {{ en.WBEX }}.

The ***Never List*** displays the list of locally added websites to which the user will never be prompted to save their credentials.

* Types are ***Never add site***, ***Never Autofill***, ***Never do anything***, and ***Never show icons in fields***.
* Matching options are ***Base domain***, ***Host***, ***Starts with***, ***RegEx***, and ***Exact***.

The ***Import/Export Settings*** allow to save and transfer your currently set preferred settings.

* Import settings from other browsers or users.
* Choose to export the {{ en.WBEX }} ***Settings, Password Generator*** templates, and the ***Never List***.

### Data sources
The ***Data sources*** settings are used to customize the {{ en.WBEX }} interactions with [{{ en.RDM }}](#remote-desktop-manager), [{{ en.DVLS }}](#devolutions-server), and [{{ en.DHUBB }} or {{ en.DHUBP }}](#devolutions-hub-business-or-devolutions-hub-personal).

### {{ en.RDM }}
| GENERAL TAB                           | DESCRIPTION                                                             |
|---------------------------------------|-------------------------------------------------------------------------|
| Enable {{ en.RDM }} app               | Retrieve entries from {{ en.RDM }} when the application is open.        |
| Use default port (19443)              | Communicate with the default port 19443 between the application.        |
| Add entry in {{ en.UVLT }} by default | Save new entries in the {{ en.UVLT }}.                                  |
| Destination folder                    | Choose the folder where the credentials are stored in the {{ en.VLT }}. |

| ACTIONS TAB                                     | DESCRIPTION                                                      |
|-------------------------------------------------|------------------------------------------------------------------|
| Automatically retrieve credentials on page load | The {{ en.WBEX }} automatically searches for credentials in the data source when connecting to a website. If disabled, click on the {{ en.WBEX }} icon to manually retrieve credentials. |
| Automatically fill in credentials on load       | Automatically fill the credentials when loading a web page.      |
| Automatically submit the form after filling     | Automatically submit the credentials when the fields are filled. |

| ADVANCED TAB            | DESCRIPTION                                                                              |
|-------------------------|------------------------------------------------------------------------------------------|
| Application key         | Secure the communication with an application key by using the same code in {{ en.RDM }} and the {{ en.WBEX }}.<br>Navigate to ***File*** – ***Settings*** – ***Browser Extensions*** in {{ en.RDM }} to set the application key. |
| Enable native messaging | Exchange messages with a native application installed on the user's computer.            |
| Use legacy API          | Use the old browser extension API for compatibility with older versions of {{ en.RDM }}. |

### {{ en.DVLS }}
| GENERAL TAB          | DESCRIPTION                                                             |
|----------------------|-------------------------------------------------------------------------|
| Enable {{ en.DVLS }} | Retrieve entries from {{ en.DVLS }}.                                    |
| Destination folder   | Choose the folder where the credentials are stored in the {{ en.VLT }}. |
| Server URL           | Enter the URL of the {{ en.DVLS }} instance to connect to.              |

| ACTIONS TAB                                     | DESCRIPTION                                                      |
|-------------------------------------------------|------------------------------------------------------------------|
| Automatically retrieve credentials on page load | The {{ en.WBEX }} automatically searches for credentials in the data source when connecting to a website. <br> <br> If disabled, click on the {{ en.WBEX }} icon to manually retrieve credentials. |
| Automatically fill in credentials on load       | Automatically fill the credentials when loading a web page.      |
| Automatically submit the form after filling     | Automatically submit the credentials when the fields are filled. |

| ADVANCED TAB                     | DESCRIPTION                                                               |
|----------------------------------|---------------------------------------------------------------------------|
| Default compare type             | Set a default comparing option type between ***Base domain***, ***Host***, ***Starts with***, ***RegEx***, ***Exact***, and ***Never***. |
| Sync all available {{ en.VLT }}s | Enable to synchronize all the available {{ en.VLT }}s from {{ en.DVLS }}. |

### {{ en.DHUBB }} and {{ en.DHUBP }}
| GENERAL TAB                                     | DESCRIPTION                                                 |
|-------------------------------------------------|-------------------------------------------------------------|
| Enable {{ en.DHUBB }}/Personal                  | Retrieve entries from {{ en.DHUB }}.                        |
| Server URL (available with {{ en.DHUBB }} only) | Enter the URL of the {{ en.DHUBB }} instance to connect to. |
| Username                                        | Enter a username to connect to {{ en.DHUB }} with.          |

| ACTIONS TAB                                 | DESCRIPTION                                                      |
|---------------------------------------------|------------------------------------------------------------------|
| Automatically fill in credentials on load   | Automatically fill the credentials when loading a web page.      |
| Automatically submit the form after filling | Automatically submit the credentials when the fields are filled. |

| ADVANCED TAB                                                          | DESCRIPTION                                             |
|-----------------------------------------------------------------------|---------------------------------------------------------|
| {{ en.DA }} login                                                     | Set your {{ en.DA }} login URL.                         |
| Show Favicon                                                          | Display the {{ en.WBEX }} favicon.                      |
| {{ en.WBEX }}                                                         | Enable or disable the {{ en.WBEX }} with {{ en.DHUB }}. |
| Default compare type                                                  | Set a default comparing option type between ***Base domain***, ***Host***, ***Starts with***, ***RegEx***, ***Exact***, and ***Never***. |
| Sync all available {{ en.VLT }}s (available with {{ en.DHUBB }} only) | Enable to synchronize all the available {{ en.VLT }}s from {{ en.DHUBB }}. |
