---
_schema: default
eleventyComputed:
  title: Configure an Active directory synchronizer entry in {{ en.RDM }}
  description: This topic covers every option in the Active Directory Synchronizer entry.
---
Every field from the ***Active Directory Synchronizer*** entry is described below.

{% snippet, "badgeInfo" %}To learn more about creating and managing an Active Directory, consult the documentation on the official website.{% endsnippet %}

## Synchronizer

The entry can be found under ***New Entry*** – ***Synchronizer***:

![Add new entry : Active Directory Synchronizer](https://cdnweb.devolutions.net/docs/RDMW4098_2024_2.png "Add new entry : Active Directory Synchronizer")

<br>![Active Directory Synchronizer entry](https://cdnweb.devolutions.net/docs/RDMW4099_2024_2.png "Active Directory Synchronizer entry")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Name</strong></p></td><td><p>Entry name as displayed in {{ en.RDM }}.</p></td></tr><tr><td><p><strong>Folder</strong></p></td><td><p>Which {{ en.RDM }} folder the entry will be in.</p></td></tr><tr><td><p><strong>Credentials</strong></p></td><td><p>Read more on <a href="/rdm/windows/commands/edit/entries/entry-credentials-options/"><em><strong>Credentials</strong></em> options</a>.</p></td></tr><tr><td><p><strong>Synchronize automatically</strong></p></td><td><p>If this box is checked, the {{ en.RDM }} entry will synchronize automatically with Active Directory.</p></td></tr></tbody></table>

### General tab

![General tab](https://cdnweb.devolutions.net/docs/RDMW4100_2024_2.png "General tab")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION </p></th></tr></thead><tbody><tr><td><p><strong>Mode</strong></p></td><td><ul><li><p><em><strong>Custom</strong></em>: Choose which <em><strong>Domain machines</strong></em> and <em><strong>OU/Containers</strong></em> to get the information from.</p></li><li><p><em><strong>LDAP</strong></em>: To extract Active Directory computer information using LDAP query. </p></li><li><p><em><strong>My domain</strong></em>: Use the current domain.</p></li></ul></td></tr><tr><td><p><strong>Ping domain before synchronization</strong></p></td><td><p>Verifies if the domain is up before synchronization</p></td></tr><tr><td><p><strong>Domain machine</strong></p></td><td><p>Set the domain machine by clicking on the ellipsis button</p></td></tr><tr><td><p><strong>OU/Container DN</strong></p></td><td><p>Select the OUs or Containers by clicking on the ellipsis button.</p></td></tr><tr><td><p><strong>Test connection</strong></p></td><td><p>Tests the connection.</p></td></tr><tr><td><p><strong>Preview</strong></p></td><td><p>Lists all the imported machines</p></td></tr><tr><td><p><strong>Use LDAP over SSL</strong></p></td><td><p>If enabled, uses the secure LDAP protocol:</p><ul><li><p><em><strong>Default</strong></em>: Default LDAPS port 636; click on <em><strong>Default</strong></em> to set a different port.</p></li><li><p><em><strong>Port generator</strong></em>: Generate a port.</p></li></ul></td></tr><tr><td><p><strong>Destination folder</strong></p></td><td><p>Choose a destination folder.</p></td></tr><tr><td><p><strong>Template</strong></p></td><td><p>Select a template.</p></td></tr></tbody></table>

### Log in tab

![Login tab](https://cdnweb.devolutions.net/docs/RDMW4101_2024_2.png "Login tab")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Username</strong></p></td><td><p>Username for the domain.</p></td></tr><tr><td><p><strong>Domain</strong></p></td><td><p>Domain for the Active Directory.</p></td></tr><tr><td><p><strong>Password</strong></p></td><td><p>Password for the domain.</p></td></tr><tr><td><p><strong>Merge username and domain</strong></p></td><td><p>Merges username and domain.</p></td></tr></tbody></table>

### Fields tab

Choose which fields will always be synchronized, and which will not. For example, the description could be left purposely unsynchronized and later edited manually.

![Fields](https://cdnweb.devolutions.net/docs/RDMW4102_2024_2.png "Fields")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Field</strong></p></td><td><p>Select which fields will always be synchronized, and which will not between:</p><ul><li><p>Session name.</p></li><li><p>Host name.</p></li><li><p>OU/Containers.</p></li><li><p>Description.</p></li></ul></td></tr><tr><td><p><strong>Session name</strong></p></td><td><p>Choose between <em><strong>Common name</strong></em>, <em><strong>DNS host name (FQDN)</strong></em>, and <em><strong>Host and description</strong></em>.</p></td></tr><tr><td><p><strong>Session name prefix</strong></p></td><td><p>A prefix for the entry that will be created through the synchronizer.</p></td></tr><tr><td><p><strong>Session name suffix</strong></p></td><td><p>A suffix for the entry that will be created through the synchronizer.</p></td></tr></tbody></table>

### Filters tab

![Filters tab](https://cdnweb.devolutions.net/docs/RDMW4103_2024_2.png "Filters tab")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Type</strong></p></td><td><p>LDAP syntax filters can be used in many situations in Active Directory:</p><ul><li><p><em><strong>All</strong></em>: Default filter.</p></li><li><p><em><strong>Server</strong></em>: Adds a filter to only include Windows Server.</p></li></ul></td></tr><tr><td><p><strong>Other filter</strong></p></td><td><p>Read more about this option by clicking the <em><strong>Help</strong></em> button.</p></td></tr><tr><td><p><strong>Preview</strong></p></td><td><p>Preview of the applied filters.</p></td></tr></tbody></table>

### Advanced tab

![Advanced tab](https://cdnweb.devolutions.net/docs/RDMW4104_2024_2.png "Advanced tab")

<table><tbody><tr><td><p><strong>Silent mode</strong></p></td><td><p>This option disables error dialogs (useful when the synchronizer runs automatically at set intervals).</p></td></tr><tr><td><p><strong>Verify folder on mismatch</strong></p></td><td><p>During synchronization, if enabled, verifies each connection and compares to already existing ones; <em><strong>Verify on folder mismatch</strong></em> will also check the path.</p></td></tr><tr><td><p><strong>Create virtual folders</strong></p></td><td><p>Allow for the creation of virtual folders.</p></td></tr><tr><td><p><strong>Search scope</strong></p></td><td><ul><li><p><em><strong>Subtree</strong></em>: Searches the root.</p></li><li><p><em><strong>One-Level</strong></em>: Searches on the folder level only.</p></li></ul></td></tr><tr><td><p><strong>Duplicate check</strong></p></td><td><ul><li><p><em><strong>Root</strong></em>: Check for duplicates within the whole data source.</p></li><li><p><em><strong>Destination folder</strong></em>: Check for duplicates only within the {{ en.RDM }} destination folder or subfolder.</p></li></ul><p><em><strong>Duplicate check</strong></em> will not import entries with the same type and host.</p></td></tr><tr><td><p><strong>Action on entry mismatch</strong></p></td><td><ul><li><p><em><strong>None</strong></em>: Do nothing.</p></li><li><p><em><strong>Delete</strong></em>: Delete that entry.</p></li><li><p><em><strong>Move to</strong></em>: Move to selected <em><strong>destination folder</strong></em>.</p></li><li><p><em><strong>Make expired</strong></em>: Mark that entry as expired (expiration message can be set up).</p></li></ul></td></tr></tbody></table>

### Schedule tab

![Schedule tab](https://cdnweb.devolutions.net/docs/RDMW4105_2024_2.png "Schedule tab")

* ***Enabled***: Schedule being on/off
  * ***Every (Days)***: Interval between when the synchronizer runs
  * ***At***: Specific time to synchronize

{% snippet, "badgeInfo" %}Note that the [***Schedule*** tab](#schedule) is only available in a {{ en.DVLS }} data source, and that is requires the {{ en.DVLS }} ***Scheduler*** to be set up.{% endsnippet %}