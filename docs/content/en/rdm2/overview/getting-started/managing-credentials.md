---
eleventyComputed:
  title: Managing credentials
  description: Depending on your organization's security policies, there are multiple ways of handling credentials.
  order: 40
---
{% tabs %}
{% tabItem "Windows" %}
Depending on your organization's security policies, there are multiple ways of handling credentials. We can manage a wide range of scenarios; the most popular are listed below. It is critical to understand that these are the credentials used to connect to remote hosts, not the ones you use to launch {{ en.RDM }}. 

{% snippet icon.badgeInfo %} 
Most of these selections do not exist in the Free edition of {{ en.RDM }} as they depend on features offered by an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
Below are a few key points that the administrator of the solution must be aware of: 

| OPTION                    | DESCRIPTION |
|---------------------------|-------------|
| Password visibility       | You can store passwords in a credentials entry (username/password entry), which, by default, makes the password usable but not visible by the end user. Multiple credentials entry types are provided. It's important to choose the type carefully based on administrative and security needs. |
| Credentials set on folders | Folders can have defined credentials, useful for reusing the same credentials across a branch of the network infrastructure. To use these, child sessions must be adjusted to use inherited credentials.                                                                                      |
| Entry location            | Storing entries in the tree view allows users with View permissions on that entry (or folder by inheritance) to use them, enabling credential sharing with team members. A [{{ en.UVLT }}](/rdm/windows/data-sources/user-vault/) is available for storing personal information privately. These credentials can still be accessed publicly by referencing them or through User Specific Settings.                                                                     |
| User Specific Settings    | [User Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/) provide partial overrides for entry settings, including credentials. Overrides allow selecting credentials directly or linking to credentials stored elsewhere, like in the [{{ en.UVLT }}](/rdm/windows/data-sources/user-vault/). |

Here are the most common scenarios and ways to resolve them. In the majority of cases, we prefer sessions to use inherited credentials, which means they climb the tree until they have access to a set of credentials, whether defined, linked, or overridden in an entry. 

| SCENARIO                                                      | STRATEGY |
|---------------------------------------------------------------|----------|
| One set of credentials is used by all of the staff, be it for the whole system or for a branch in your tree view (customer, department, etc.). | Set the credentials on the [{{ en.VLT_MAJ }} settings](/rdm/windows/commands/administration/settings/vault-settings/default-security-entries/). All children use inherited credentials. |
| Each user has their own credentials for many different branches (often corresponding to customers/departments, etc.). | Make use of the [User Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/) on each branch. All children use inherited credentials.                                              |
| Each user has its own credentials managed by an administrator. | This solution involves a little more work. The administrator must create a folder for each user, then grant permissions only to that user. The user will then use [User Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/) to specify that the credentials stored in that folder are used to override what is defined in the entries. |
| Each team uses the same credentials.                           | As above, but all team members have access to the folder. They all have to use the [User Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/). |
| Each user uses their domain account.                           | Configure sessions to use [My Personal Credentials](/rdm/windows/commands/file/my-account-settings/my-personal-credentials/). Each user will be prompted to define them once per workstation that they use.                                                 |
{% endtabItem %}

{% tabItem "macOS" %}
Depending on your organization's security policies, there are multiple ways of handling credentials. We can manage a wide range of scenarios; the most popular are listed below. It is critical to understand that these are the credentials used to connect to remote hosts, not the ones you use to launch {{ en.RDMMAC }}. 

{% snippet icon.badgeInfo %} 
Most of these selections do not exist in the Free edition of {{ en.RDMMAC }} as they depend on features offered by an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
Below are a few key points that the administrator of the solution must be aware of: 

|  |  |
|------------------------------------------|-------------|
| Password visibility  | You can store passwords in a credentials entry (username/password entry), which, by default, makes the password usable but not visible by the end user. We provide multiple credentials entry types. You should always consider carefully which type you are using based on your administrative and security needs. |
| Credentials set on folders | Our folders can have defined credentials. This is useful because, in most cases, the same credentials are reused for an entire branch of the network infrastructure. To use credentials defined in a folder, child sessions must be adjusted to use inherited credentials. |
| Entry location | When storing entries in the tree view, users with the View permissions on that entry (or folder by inheritance) will be able to use them. This is how you would share credentials with other members of your team. A [{{ en.UVLT }}](/rdm/mac/user-interface/navigation-pane/user-vault/) exists for users to store personal information that should be seen by no one else. Credentials stored in this manner can still be accessed in the public area of the system by referencing them or through the User Specific Settings feature described below. |
| User Specific Settings | [User Specific Settings](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/) are partial overrides for your entry settings, including credentials. When you apply such an override, you can choose the type of credentials directly in the override or you can choose to instead link to credentials stored elsewhere, such as the [{{ en.UVLT }}](/rdm/mac/user-interface/navigation-pane/user-vault/). |

Here are the most common scenarios and ways to resolve them. In the majority of cases, we prefer sessions to use inherited credentials, which means they climb the tree until they have access to a set of credentials, whether defined, linked, or overridden in an entry. 

| SCENARIO | STRATEGY |
|----------|------------------------------------------------------------------------------------------------------------|
| One set of credentials is used by all of the staff, be it for the whole system or for a branch in your tree view (customer, department, etc.). | Set the credentials on the [{{ en.VLT_MAJ }} settings](/rdm/mac/commands/administration/vault-settings/). All children use inherited credentials. |
| Each user has their own credentials for many different branches (often corresponding to customers/departments, etc.). | Make use of the [User Specific Settings](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/) on each branch. All children use inherited credentials. |
| Each user has its own credentials managed by an administrator. | This solution involves a little more work. The administrator must create a folder for each user, then grant permissions only to that user. The user will then use [User Specific Settings](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/) to specify that the credentials stored in that folder are used to override what is defined in the entries. |
| Each team uses the same credentials. | As above, but all team members have access to the folder. They all have to use the [User Specific Settings](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/). |
| Each user uses their domain account. | Configure sessions to use [My Personal Credentials](/rdm/mac/commands/file/my-account-settings/). Each user will be prompted to define them once per workstation that they use. |
{% endtabItem %}
{% endtabs %}