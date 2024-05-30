---
eleventyComputed:
  title: New entry
---
The ***New Entry*** button is only available while in the [***Matching***](/workspace/workspace-browser-extension/hub-personal/user-interface/side-menu/#matching-tab) tab, which is the tab selected when opening the extension, or when browsing through the entries of the [***All Entries***](/workspace/workspace-browser-extension/hub-personal/user-interface/side-menu/#all-entries-tab) tab. You can choose to create a new ***Website***, ***Credit Card***, ***Contact***, or ***Secure Note*** entry.
![New Entry Type Selection](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2134.png)

When the entry type is selected, a new tab opens in your browser that allows you to add an entry of that type in {{ en.DHUBP }} through the {{ en.WBEX }}.

When {{ en.DHUBP }} is used as the data source, the basic entry configuration is done in the ***General*** tab, but other parameters are also available in other tabs. Below is an example of the ***General*** tab settings when creating a website entry.
![New Entry – Website (General Tab)](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2135.png)

The tables below list all fields/settings available in the ***New Entry*** windows. The different sections and subsections represent the entry types and the left menu tabs respectively.

## Website Entry

### General

| FIELD/SETTING | DESCRIPTION |
| --- | --- |
| Name | Enter a name for your entry. This field is automatically filled in by the {{ en.WBEX }}, but can still be modified. |
| Folder | Enter the name of the folder in which your new entry will be stored in {{ en.DHUBP }}. |
| Select Folder | Select in a tree view the folder in which your new entry will be stored in {{ en.DHUBP }}. You can also create a new folder and edit or delete existing ones. |
| Host | Select in the drop-down list how the {{ en.WBEX }} will fetch the host between ***Custom***, ***Linked ({{ en.VLT }})***, or ***Inherited***. If you select ***Custom***, the ***URL*** field (see below) will appear. If you select ***Linked ({{ en.VLT }})***, a drop-down list will appear in which you will be able to select the host. |
| URL | Enter the URL of the website’s login page. This field is automatically filled in by the {{ en.WBEX }}, but can still be modified. |
| Credentials | Select in the drop-down list between ***Custom***, ***Linked ({{ en.VLT }})***, ***Inherited***, ***My personal credentials***, or ***None*** to specify to the {{ en.WBEX }} how to retrieve your credentials. Some of these options give you access to additional settings. |
| Username | Enter the username you use to log in to the website. <br> <br> This field is only available if ***Custom*** is selected in the ***Credentials*** drop-down list. |
| Domain | Enter a domain for the website. <br> <br> This field is only available if ***Custom*** is selected in the ***Credentials*** drop-down list. |
| Password | Enter the password you use to log in to the website. The password will be hidden. Below the field is a strength indicator for your password. <br> <br> This field is only available if ***Custom*** is selected in the ***Credentials*** drop-down list. |
| Reveal/Hide password | Reveal or hide the password that was entered. <br> <br> This field is only available next to the ***Password*** field if ***Custom*** is selected in the ***Credentials*** drop-down list. |
| Password Generator | Open the ***Password Generator*** window, which allows you to create a strong and secure password adapted to your needs and to website requirements. |
| Compare type | Select how the entered URL is compared and matched to the website URL. Choose between ***Default, Base domain***, ***Compare regex with URL domain***, ***Compare regex with full URL***, ***Host***, ***Start with***, ***Exact***, ***or Never***. |
| {{ en.WBEX }} | Select from the drop-down list between ***Default***, ***Disabled***, or ***Enabled***. If disabled, your credentials for this entry will not be suggested when accessing that particular website. We recommend leaving this option enabled. |

### Connection

| FIELD/SETTING | DESCRIPTION |
| --- | --- |
| Authentication | Select between ***Form*** or ***Basic*** authentication depending on the website. The default value is ***Form*** and usually doesn't need modification. |
| Autofill login | Enable to automatically fill in credentials on the website's login page for this entry. Overrides the {{ en.WBEX }} [***Settings***](/workspace/workspace-browser-extension/settings/) option. |
| Auto submit | Enable to automatically submit filled credentials for this entry. Overrides the {{ en.WBEX }} [***Settings***](/workspace/workspace-browser-extension/settings/) option. |
| URL encode credentials | Enable to encode credentials in the website URL. Only available if ***Basic*** is selected in ***Authentication***. |
| Autofill delay | Enable to apply a delay before the {{ en.WBEX }} fills in credentials. Only available if ***Form*** is selected in ***Authentication***. |

### Equivalent URLs

| FIELD/SETTING | DESCRIPTION |
| --- | --- |
| Add | Add a new equivalent URL. |
| Website | Enter a URL that leads to the same page or is equivalent to the one in the ***URL*** field. |
| Compare type | Select how the entered URL is compared and matched to the website URL. Choose between ***Default***, ***Base domain***, ***Compare regex with URL domain***, ***Compare regex with full URL***, ***Host***, ***Start with***, ***Exact***, or ***Never***. |

### Custom Controls

| FIELD/SETTING         | DESCRIPTION                                                                                               |
|------------------------|-----------------------------------------------------------------------------------------------------------|
| Add                    | Add a new ***Custom Control***.                                                                           |
| Form ID                | Enter the ***Form ID*** of the login website.                                                              |
| Control ID             | Enter the ***Control ID*** of the login website.                                                           |
| Input type             | Select the ***Input type*** between ***text***, ***email***, or ***password***.                            |
| Value                  | Enter the ***Value*** for your ***Custom Control***.                                                       |
| Mask information       | Enable this option to hide the information in the ***Value*** field. This also makes the ***Reveal/Hide password*** button and the password strength indicator appear. |
| Reveal/Hide password   | Reveal or hide the password that was entered. <br> <br> This field is only available next to the ***Value*** field if the ***Mask information*** option is enabled. |
| Always prompt for value | Enable this option so that you are asked to enter the value each time instead of filling in the ***Value*** field above. |

### Html Control ID

| FIELD/SETTING         | DESCRIPTION                                               |
|------------------------|-----------------------------------------------------------|
| Form ID                | Enter the ***Form ID*** of the login website.              |
| Username ID            | Enter the ***Username ID*** of the login website.          |
| Domain ID              | Enter the ***Domain ID*** of the login website.            |
| Password ID            | Enter the ***Password ID*** of the login website.          |
| One time password ID   | Enter the ***One time password ID*** of the login website. |
| Login button ID        | Enter the ***Login button ID*** of the login website.      |

### Security Questions

| FIELD/SETTING          | DESCRIPTION                                                     |
|-------------------------|-----------------------------------------------------------------|
| Question                | Enter a custom ***Question*** to secure your entry.             |
| Answer                  | Enter the custom ***Answer*** to your security question.        |
| Reveal/Hide password    | Reveal or hide the ***Answer*** that was entered.               |

### OTP

| FIELD/SETTING          | DESCRIPTION                                                                                                               |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------|
| Source                  | Select in the drop-down list between ***None***, ***Custom***, ***Linked ({{ en.VLT }})***, ***Current session***, ***Prompt***, or ***Inherited***. Selecting ***Custom*** gives you access to the other settings in this table. |
| Key                     | Enter your OTP ***Key***. <br> <br> This field is only available if ***Custom*** is selected in the ***Source*** drop-down list. |
| Reveal/Hide password    | Reveal or hide the OTP key entered in the ***Key*** field. <br> <br> This button is only available next to the ***Key*** field if ***Custom*** is selected in the ***Source*** drop-down list. |
| Account                 | Enter your ***Account*** information. <br> <br> This field is only available if ***Custom*** is selected in the ***Source*** drop-down list. |
| QR Code - Application  | Enter your OTP ***QR Code***. <br> <br> This field is only available if ***Custom*** is selected in the ***Source*** drop-down list. |
| Time step               | Set the duration of validity of each password (in seconds). This value must be set to at least 15 seconds. <br> <br> This field is only available if ***Custom*** is selected in the ***Source*** drop-down list. |
| Code size               | Select the size of the code, between ***6 Digits*** or ***8 Digits***. <br> <br> This drop-down list is only available if ***Custom*** is selected in the ***Source*** drop-down list. |
| Hash algorithm          | Select the secure hash algorithm (SHA) between ***SHA-1***, ***SHA-256***, or ***SHA-512***. <br> <br> This drop-down list is only available if ***Custom*** is selected in the ***Source*** drop-down list. <br> <br> To learn about secure hash algorithm, visit [SHA-256](/workspace/kb/general-knowledge/what-is-sha-256/). |

### OTP Recovery Codes

| FIELD/SETTING          | DESCRIPTION                                                                               |
|-------------------------|-------------------------------------------------------------------------------------------|
| Add                     | Add a new ***OTP Recovery Code***.                                                       |
| Code                    | Enter an ***OTP Recovery Code***. Below the field is a strength indicator for your code.  |
| Reveal/Hide password    | Reveal or hide the ***OTP Recovery Code*** that was entered entered in the ***Code*** field. |
| Is valid                | Enable this setting if the specified ***OTP Recovery Code*** is valid.                   |

### Custom Fields

| FIELD/SETTING | DESCRIPTION                                                                                           |
|---------------|-------------------------------------------------------------------------------------------------------|
| Custom #1-5   | Enter a name for the custom field.                                                                   |
| Value         | Enter a value for the custom field.                                                                  |
| Hide/Reveal   | Hide or reveal the value of the custom field. <br> <br> This button is only available for ***Hidden Custom Fields*** (see below). The value of a hidden custom field is encrypted and protected with the ***View sensitive*** permission. |
| Add           | Create a new custom field using this button. You can select between ***Text*** or ***Hidden***. Both of them allow you to enter a value for your custom field. Selecting ***Text*** gives you more text options in the ***Value*** field, while selecting ***Hidden*** gives you access to the ***Hide/Reveal*** option (see setting above). |

### Description

| FIELD/SETTING  | DESCRIPTION                                                                                         |
|-----------------|-----------------------------------------------------------------------------------------------------|
| Description     | Enter a description for your new entry.                                                            |
| Tags            | Add keywords (tags) to help you find your entry or to better categorize them. Press the <kbd>Enter</kbd> key after entering each tag to separate them. |
| Expires after   | Enable this option to set an expiration date for your entry. You can select the date in the field next to this setting. |
| Host            | Enter the name of the host.                                                                        |
| Employee        | Enter the name of the employee.                                                                    |

### Others

These are the buttons at the bottom of the ***New Entry – Website*** window that are available no matter the tab.

| FIELD/SETTING | DESCRIPTION                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| Add           | Save the settings of your new website entry and create the entry.                                                |
| Cancel        | Cancel the creation of a new website entry and clear all unsaved changes to settings.                             |

## Credit Card entry

### General

| FIELD/SETTING                        | DESCRIPTION                                                                                                      |
|--------------------------------------|------------------------------------------------------------------------------------------------------------------|
| Name                                 | Enter a name for your entry. This field is automatically filled in by the {{ en.WBEX }}, but can still be modified.   |
| Folder                               | Enter the name of the folder in which your new entry will be stored in {{ en.DHUBP }}.                             |
| Select Folder                        | Select in a tree view the folder in which your new entry will be stored in {{ en.DHUBP }}. You can also create a new folder and edit or delete existing ones. |
| Card owner                           | Enter the name of the owner of the card.                                                                         |
| Card type                            | Enter the type of card.                                                                                         |
| Card number                          | Enter the number on the card.                                                                                   |
| Reveal/Hide password (for Card number)| Reveal or hide the ***Card number*** that was entered.                                                           |
| Expiration date                      | Enter the ***Expiration date*** of the card.                                                                     |
| Validation (CVC)                     | Enter the ***Validation (CVC)*** number of the card.                                                             |
| Reveal/Hide password (for Validation (CVC)) | Reveal or hide the ***Validation (CVC)*** number that was entered.                                         |

### Custom Fields

| FIELD/SETTING | DESCRIPTION                                                                                           |
|---------------|-------------------------------------------------------------------------------------------------------|
| Custom #1-5   | Enter a name for the custom field.                                                                   |
| Value         | Enter a value for the custom field.                                                                  |
| Hide/Reveal   | Hide or reveal the value of the custom field. <br> <br> This button is only available for ***Hidden Custom Fields*** (see below). The value of a hidden custom field is encrypted and protected with the ***View sensitive*** permission. |
| Add           | Create a new custom field using this button. You can select between ***Text*** or ***Hidden***. Both of them allow you to enter a value for your custom field. Selecting ***Text*** gives you more text options in the ***Value*** field, while selecting ***Hidden*** gives you access to the ***Hide/Reveal*** option (see setting above). |

### Description

| FIELD/SETTING  | DESCRIPTION                                                                                         |
|-----------------|-----------------------------------------------------------------------------------------------------|
| Description     | Enter a description for your new entry.                                                            |
| Tags            | Add keywords (tags) to help you find your entry or to better categorize them. Press the Enter key after entering each tag. |
| Expires after   | Enable this option to set an expiration date for your entry. You can select the date in the field next to this setting. |
| Host            | Enter the name of the host.                                                                        |
| Employee        | Enter the name of the employee.                                                                    |

### Others

These are the buttons at the bottom of the ***New Entry – Credit Card*** window that are available no matter the tab.

| FIELD/SETTING | DESCRIPTION                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| Add           | Save the settings of your new website entry and create the entry.                                                |
| Cancel        | Cancel the creation of a new website entry and clear all unsaved changes to settings.                             |

## Contact entry

### General

| FIELD/SETTING  | DESCRIPTION                                                                                                       |
|-----------------|-------------------------------------------------------------------------------------------------------------------|
| Name            | Enter a name for your entry. This field is automatically filled in by the {{ en.WBEX }}, but can still be modified.  |
| Folder          | Enter the name of the folder in which your new entry will be stored in {{ en.DHUBP }}.                             |
| Select Folder   | Select in a tree view the folder in which your new entry will be stored in {{ en.DHUBP }}. You can also create a new folder and edit or delete existing ones. |
| Gender          | Select in the drop-down list the Gender of the contact between ***Unspecified***, ***Male***, or ***Female***.   |
| First name      | Enter the ***First name*** of the contact.                                                                      |
| Middle name     | Enter the ***Middle name*** of the contact.                                                                     |
| Last name       | Enter the ***Last name*** of the contact.                                                                       |
| Email           | Enter the ***Email*** of the contact.                                                                           |
| Country         | Enter the ***Country*** of the contact.                                                                         |
| State           | Enter the ***State*** of the contact.                                                                           |
| City            | Enter the ***City*** of the contact.                                                                            |
| Zip code        | Enter the ***Zip code*** of the contact.                                                                        |
| Address         | Enter the ***Address*** of the contact.                                                                         |
| Company         | Enter the ***Company*** of the contact.                                                                         |
| Job title       | Enter the ***Job title*** of the contact.                                                                       |
| Phone           | Enter the ***Phone*** number of the contact.                                                                    |
| Mobile          | Enter the ***Mobile*** phone number of the contact.                                                             |
| Fax             | Enter the ***Fax*** number of the contact.                                                                      |
| Work phone      | Enter the ***Work phone*** number of the contact.                                                               |

### Custom Fields

| FIELD/SETTING | DESCRIPTION                                                                                           |
|---------------|-------------------------------------------------------------------------------------------------------|
| Custom #1-5   | Enter a name for the custom field.                                                                   |
| Value         | Enter a value for the custom field.                                                                  |
| Hide/Reveal   | Hide or reveal the value of the custom field. <br> <br> This button is only available for ***Hidden Custom Fields*** (see below). The value of a hidden custom field is encrypted and protected with the ***View sensitive*** permission. |
| Add           | Create a new custom field using this button. You can select between ***Text*** or ***Hidden***. Both of them allow you to enter a value for your custom field. Selecting ***Text*** gives you more text options in the ***Value*** field, while selecting ***Hidden*** gives you access to the ***Hide/Reveal*** option (see setting above). |

### Description

| FIELD/SETTING | DESCRIPTION                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------|
| Description   | Enter a description for your new entry.                                                            |
| Tags          | Add keywords (tags) to help you find your entry or to better categorize them. Press the Enter key after entering each tag. |

### Others

These are the buttons at the bottom of the ***New Entry – Contact*** window that are available no matter the tab.

| FIELD/SETTING | DESCRIPTION                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| Add           | Save the settings of your new website entry and create the entry.                                                |
| Cancel        | Cancel the creation of a new website entry and clear all unsaved changes to settings.                             |

## Secure Note entry

### General

| FIELD/SETTING  | DESCRIPTION                                                                                                       |
|-----------------|-------------------------------------------------------------------------------------------------------------------|
| Name            | Enter a name for your entry. This field is automatically filled in by the {{ en.WBEX }}, but can still be modified.  |
| Folder          | Enter the name of the folder in which your new entry will be stored in {{ en.DHUBP }}.                             |
| Select Folder   | Select in a tree view the folder in which your new entry will be stored in {{ en.DHUBP }}. You can also create a new folder and edit or delete existing ones. |
| Type            | Select in the drop-down list if your note is written in ***Markdown*** or in ***Plain text*** format.            |
| Note            | Enter your secure note. This option will differ depending on whether you select the ***Markdown*** format or the ***Plain text*** format in the ***Type*** list. Selecting ***Markdown*** gives you access to additional text formatting options. You will also be able to write your note using markdown, which is a markup language for formatting text. |

### Custom Fields

| FIELD/SETTING | DESCRIPTION                                                                                           |
|---------------|-------------------------------------------------------------------------------------------------------|
| Custom #1-5   | Enter a name for the custom field.                                                                   |
| Value         | Enter a value for the custom field.                                                                  |
| Hide/Reveal   | Hide or reveal the value of the custom field. <br> <br> This button is only available for ***Hidden Custom Fields*** (see below). The value of a hidden custom field is encrypted and protected with the ***View sensitive*** permission. |
| Add           | Create a new custom field using this button. You can select between ***Text*** or ***Hidden***. Both of them allow you to enter a value for your custom field. Selecting ***Text*** gives you more text options in the ***Value*** field, while selecting ***Hidden*** gives you access to the ***Hide/Reveal*** option (see setting above). |

### Description

| FIELD/SETTING | DESCRIPTION                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| Description   | Enter a description for your new entry.                                                                         |
| Tags          | Add keywords (tags) to help you find your entry or to better categorize them. Press the Enter key after entering each tag. |
| Expires after | Enable this option to set an expiration date for your entry. You can select the date in the field next to this setting. |
| Host          | Enter the name of the host.                                                                                     |
| Employee      | Enter the name of the employee.                                                                                 |

### Others

These are the buttons at the bottom of the ***New Entry – Secure Note*** window that are available no matter the tab.

| FIELD/SETTING | DESCRIPTION                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| Add           | Save the settings of your new website entry and create the entry.                                                |
| Cancel        | Cancel the creation of a new website entry and clear all unsaved changes to settings.                             |

{% snippet, "badgeInfo" %}
Follow our step-by-step guide explaining how to [add an entry](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/add-entry-hub-personal-workspace-browser-extension/) in {{ en.DHUBP }} with the {{ en.WBEX }}.
{% endsnippet %}
