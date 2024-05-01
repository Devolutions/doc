---
eleventyComputed:
  title: Add website
---
The ***Add Website*** button is only available while in the [***Matching***](/hub/workspace-browser-extension/workspace-browser-extension-user-interface/workspace-browser-extension-user-interface-hub-business/side-menu/#matching-tab) tab, which is the tab selected when opening the extension, or when browsing through the {{ en.VLT }}s and entries of the [***{{ en.VLT_MAJ }}s***](/hub/workspace-browser-extension/workspace-browser-extension-user-interface/workspace-browser-extension-user-interface-hub-business/side-menu/#vaults-tab) or [***{{ en.UVLT_MAJ }}***](/hub/workspace-browser-extension/workspace-browser-extension-user-interface/workspace-browser-extension-user-interface-hub-business/side-menu/#user-vault-tab) tabs. It opens a new tab in your browser that allows you to add a website entry in {{ en.DHUBB }} through the {{ en.WBEX }}.

When {{ en.DHUBB }} is used as the data source, the basic entry configuration is done in the ***General*** tab, but other parameters are also available in other tabs. Below is an example of the ***General*** tab settings when creating a website entry.
![New Entry – Website (General Tab)](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2132.png)

The tables below list all fields/settings available in the ***New Entry – Website*** window. The different sections represent the left menu tabs.

### General

| FIELD/SETTING | DESCRIPTION |
| --- | --- |
| Name | Enter a name for your entry. This field is automatically filled in by the {{ en.WBEX }}, but can still be modified. |
| {{ en.VLT_MAJ }} | Choose the {{ en.VLT }} in which to store your new website entry in {{ en.DHUBB }}. You can select any available {{ en.VLT }}, including your ***{{ en.UVLT }}***. |
| Folder | Enter the name of the folder in which your new entry will be stored in {{ en.DHUBB }}. |
| Host | Select in the drop-down list how the {{ en.WBEX }} will fetch the host between ***Custom***, ***Linked ({{ en.VLT }})***, or ***Inherited***. If you select ***Custom***, the ***URL*** field (see below) will appear. If you select ***Linked ({{ en.VLT }})***, a drop-down list will appear in which you will be able to select the host. |
| URL | Enter the URL of the website’s login page. This field is automatically filled in by the {{ en.WBEX }}, but can still be modified. |
| Credentials | Select in the drop-down list between ***Custom***, ***Linked ({{ en.VLT }})***, ***Inherited***, ***My personal credentials***, ***Find by name ({{ en.UVLT }})***, or ***None*** to specify to the {{ en.WBEX }} how to retrieve your credentials. Some of these options give you access to additional settings. |
| Username | Enter the username you use to log in to the website. <br> <br> This field is only available if ***Custom*** is selected in the ***Credentials*** drop-down list. |
| Domain | Enter a domain for the website. <br> <br> This field is only available if ***Custom*** is selected in the ***Credentials*** drop-down list. |
| Password | Enter the password you use to log in to the website. The password will be hidden. Below the field is a strength indicator for your password. <br> <br> This field is only available if ***Custom*** is selected in the ***Credentials*** drop-down list. |
| Reveal/Hide password | Reveal or hide the password that was entered. <br> <br> This field is only available next to the ***Password*** field if ***Custom*** is selected in the ***Credentials*** drop-down list. |
| Password Generator | Open the ***Password Generator*** window, which allows you to create a strong and secure password adapted to your needs and to website requirements. |
| Compare type | Select how the entered URL is compared and matched to the website URL. Choose between ***Default***, ***Base domain***, ***Compare regex with URL domain***, ***Compare regex with full URL***, ***Host***, ***Start with***, ***Exact***, or ***Never***. |
| {{ en.WBEX }} | Select from the drop-down list between ***Default***, ***Disabled***, or ***Enabled***. If disabled, your credentials for this entry will not be suggested when accessing that particular website. We recommend leaving this option enabled. |

### Connection

| FIELD/SETTING | DESCRIPTION |
| --- | --- |
| Authentication | Select between ***Form*** or ***Basic*** authentication depending on the website. The default value is ***Form*** and, in most cases, it does not need to be modified. |
| Autofill login | Enable this option if you want the {{ en.WBEX }} to automatically fill in your credentials when loading the website login page. This only applies to that specific entry. <br> <br> ***Autofill login*** is similar to the ***Automatically fill in credentials on load*** feature in the {{ en.WBEX }} [***Settings***](/hub/workspace-browser-extension/settings/), with the difference that the former applies only to the specific entry and the latter applies to all your entries. Note that the {{ en.WBEX }} setting overrides the ***Autofill login*** setting. |
| Auto submit | Enable this option if you want the {{ en.WBEX }} to automatically submit your credentials after they are filled in. This only applies to that specific entry. <br> <br> ***Auto submit*** is similar to the ***Automatically submit the form after filling*** feature in the {{ en.WBEX }} [***Settings***](/hub/workspace-browser-extension/settings/), with the difference that the former applies only to the specific entry and the latter applies to all your entries. Note that the {{ en.WBEX }} setting overrides the ***Auto submit*** setting. |
| URL encode credentials | Enable this option to encode the credentials in the website URL. <br> <br> This option is only available if ***Basic*** is selected in the ***Authentication*** drop-down list. |
| Autofill delay | Enable this option to apply a delay before the {{ en.WBEX }} automatically fills in your credentials. <br> <br> This option is only available if ***Form*** is selected in the ***Authentication*** drop-down list. |

### Equivalent URLs

| FIELD/SETTING | DESCRIPTION |
| --- | --- |
| Add | Add a new equivalent URL. |
| Website | Enter a URL that leads to the same page or is equivalent to the one in the ***URL*** field. |
| Compare type | Select how the entered URL is compared and matched to the website URL. Choose between ***Default***, ***Base domain***, ***Compare regex with URL domain***, ***Compare regex with full URL***, ***Host***, ***Start with***, ***Exact***, or ***Never***. |

### Custom Controls

| FIELD/SETTING | DESCRIPTION |
| --- | --- |
| Add | Add a new ***Custom Control***. |
| Form ID | Enter the ***Form ID*** of the login website. |
| Control ID | Enter the ***Control ID*** of the login website. |
| Input type | Select the ***Input type*** between ***text***, ***email***, or ***password***. |
| Value | Enter the ***Value*** for your ***Custom Control***. |
| Mask information | Enable this option to hide the information in the ***Value*** field. This also makes the ***Reveal/Hide password*** button and the password strength indicator appear. |
| Reveal/Hide password | Reveal or hide the password that was entered. <br> <br> This field is only available next to the ***Value*** field if the ***Mask information*** option is enabled. |
| Always prompt for value | Enable this option so that you are asked to enter the value each time instead of filling in the ***Value*** field above. |

### Html Control ID

| FIELD/SETTING | DESCRIPTION |
| --- | --- |
| Form ID | Enter the ***Form ID*** of the login website. |
| Username ID | Enter the ***Username ID*** of the login website. |
| Domain ID | Enter the ***Domain ID*** of the login website. |
| Password ID | Enter the ***Password ID*** of the login website. |
| One time password ID | Enter the ***One time password ID*** of the login website. |
| Login button ID | Enter the ***Login button ID*** of the login website. |

### OTP

| FIELD/SETTING | DESCRIPTION |
| --- | --- |
| Source | Select the OTP ***Source*** in the drop-down list between ***None***, ***Custom***, ***Linked ({{ en.VLT }})***, ***Current session***, ***Prompt***, or ***Inherited***. Selecting ***Custom*** gives you access to the other settings in this table. |
| Key | Enter your OTP ***Key***. <br> <br> This field is only available if ***Custom*** is selected in the ***Source*** drop-down list. |
| Reveal/Hide password | Reveal or hide the OTP key entered in the ***Key*** field. <br> <br> This button is only available next to the ***Key*** field if ***Custom*** is selected in the ***Source*** drop-down list. |
| Account | Enter your ***Account*** information. <br> <br> This field is only available if ***Custom*** is selected in the ***Source*** drop-down list. |
| QR Code - Application | Enter your OTP ***QR Code***. <br> <br> This field is only available if ***Custom*** is selected in the ***Source*** drop-down list. |
| Time step | Set the duration of validity of each password (in seconds). This value must be set to at least 15 seconds. <br> <br> This field is only available if ***Custom*** is selected in the ***Source*** drop-down list. |
| Code size | Select the size of the code, between ***6 Digits*** or ***8 Digits***. <br> <br> This drop-down list is only available if ***Custom*** is selected in the ***Source*** drop-down list. |
| Hash algorithm | Select the secure hash algorithm (SHA) between ***SHA-1***, ***SHA-256***, or ***SHA-512***. <br> <br> This drop-down list is only available if ***Custom*** is selected in the ***Source*** drop-down list. <br> <br> To learn about secure hash algorithm, visit [SHA-256](/kb/general-knowledge-base/what-is-sha-256/). |

### Custom Fields

| FIELD/SETTING | DESCRIPTION |
| --- | --- |
| Custom #1-5 | Enter a name for the custom field. |
| Value | Enter a value for the custom field. |
| Hide/Reveal | Hide or reveal the value of the custom field. This button is only available for ***Hidden Custom Fields*** (see below). The value of a hidden custom field is encrypted and protected with the ***View sensitive*** permission. |
| Add | Create a new custom field using this button. You can select between ***Text*** or ***Hidden***. Both of them allow you to enter a value for your custom field. Selecting ***Text*** gives you more text options in the ***Value*** field, while selecting ***Hidden*** gives you access to the ***Hide/Reveal*** option (see setting above). |

### Description

| FIELD/SETTING | DESCRIPTION |
| --- | --- |
| Description | Enter a description for your new entry. |
| Tags | Add keywords (tags) to help you find your entry or to better categorize them. Press the <kbd>Enter</kbd> key after entering each tag to separate them. |
| Expires after | Enable this option to set an expiration date for your entry. You can select the date in the field next to this setting. |
| Host | Enter the name of the host. |
| Employee | Enter the name of the employee. |

### Others

These are the buttons at the bottom of the ***New Entry – Website*** window that are available no matter the tab.

| FIELD/SETTING | DESCRIPTION |
| --- | --- |
| Add | Save the settings of your new website entry and create the entry. |
| Cancel | Cancel the creation of a new website entry and clear all unsaved changes to settings. |

{% snippet icon.badgeInfo %}
Follow our step-by-step guide explaining how to [add a website entry](/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-business/add-entry-hub-business-workspace-browser-extension/) in {{ en.DHUBB }} with the {{ en.WBEX }}.
{% endsnippet %}
