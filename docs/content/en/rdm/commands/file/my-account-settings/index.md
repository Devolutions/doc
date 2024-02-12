---
eleventyComputed:
  title: My account settings
  description: Use File – My Account Settings to configure accounts that connect to different web platforms. Set up account settings one time and use it in entries as many time as required.
---
{% tabs %}
{% tabItem "Windows" %}
Use ***File – My Account Settings*** to configure accounts that connect to different web platforms. Set up account settings one time and use it in entries as many time as required. This section also allows to manage ***Personal Credentials***, ***Personal Private Key***, and ***Specific Settings*** lists. 

## Settings 

![My Account Settings](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10203.png) 

### Information 

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Database user               | Indicates the current user connected to the application.                                                                                                                    |
| User                        | Indicates the user of the current Windows session.                                                                                                                        |
| Administrator               | Indicates if the current user is administrator or not.                                                                                                                            |
| My Personal Credentials     | Please consult [My Personal Credentials](/rdm/windows/commands/file/my-account-settings/my-personal-credentials/) for more information.                                                                            |
| My Personal Private Key     | Configure a personal private key for further use in sessions.                                                                                                                       |
| User Specific Settings List| Provide a list of all the [User Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/) configured in {{ en.RDM }}.                                                                                 |
| Local Specific Settings list| Provide a list of all the [Local Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/) configured in {{ en.RDM }}.                                                                                 |
{% endtabItem %}

{% tabItem "macOS" %}
Use ***File – My Account Settings*** to configure different accounts that can be used to connect on different web platforms. This allow you to setup your account settings one time and use it in the creation of your entries as many time as you want. You can also manage your Personal Credentials, Personal Private Key and your User Specific Settings List.

## Settings
![File – My Account Settings](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10320.png)

| OPTION                   | DESCRIPTION                                                                       |
|--------------------------|-----------------------------------------------------------------------------------|
| My Personal Credentials  | Please consult [My Personal Credentials](/rdm/windows/commands/file/my-account-settings/my-personal-credentials/) for more information. |
| My Personal Private Key  | With a Personal Private Key configured, you can select My Personal Private Key in the dropdown menu to use this key instead of typing your private key every time. |
| Password Manager Pro     | Configure the username, workstation and token to connect on Password Manager Pro. |
| Pleasant Password Server | Configure the username and password to connect on Pleasant Password.              |
| Secret Server            | Configure the username to connect on Secret Server.                               |
{% endtabItem %}
{% endtabs %}