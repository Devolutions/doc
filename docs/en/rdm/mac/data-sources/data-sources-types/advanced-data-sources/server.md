---
eleventyComputed:
  title: "{{ en.DVLS }}"
  description: "{{ en.DVLS }} is a self-hosted repository for storing and sharing your remote connections and credentials."
---
{{ en.DVLS }} is a self-hosted repository for storing and sharing your remote connections and credentials. You can find more information on the [{{ en.DVLS }} web page](https://devolutions.net/server).

## Highlights

* High-end security server for your company.
* Share your sessions with multiple users.
* Can be deployed online.
* Support Windows authentication and Active Directory group integration.
* Client and server side caching optimization.
* Requires the {{ en.RDMMAC }} Team Edition client installed for management.

{% snippet icon.badgeInfo %}
{{ en.DVLS }} supports only SQL Server as a data store at this time.
{% endsnippet %}

For more information, please consult:

* [{{ en.DVLS }} installation instructions](/server/installation/)
* [{{ en.DVLS }} Security Checklist](/server/getting-started/security-checklist/)

## Configure the server data source on all your client machines.

Enter a name of the data source and the URL for the server. Ensure you use the correct protocol if SSL is required by the server (https).

Alternatively, you can export the data source information and then import the file in your client workstations as described [Import/Export Data Source](/rdm/mac/data-sources/import-export/).

## Settings

### Connection

![{{ en.DVLS }} Connection tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6023.png)

| OPTION              | DESCRIPTION |
|---------------------|-------------|
| Name                | Name of the data source. |
| Server              | Name of {{ en.DVLS }} instance. |
| Username            | Username to connect to the data source. |
| Password            | Password to connect to the data source. |
| Test connection     | Test the connection with {{ en.DVLS }} to validate if the proper information has been provided. |
| Always ask username | Always ask for the username when connecting to the data source. |
| Always ask password | Always ask for the password when connecting to the data source. |

### Settings

![{{ en.DVLS }} – Settings tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6024.png)

### Advanced

![{{ en.DVLS }} – Advanced tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6025.png)

| OPTION                          | DESCRIPTION |
|---------------------------------|-------------|
| Offline mode                    | Determine if you want to use this data source in Offline mode. In offline mode, the data source can be available in Read Only or in Read/Write mode. |
| Prompt for offline mode on startup | Every time you will connect on your data source, you will be prompt to use the data source in offline mode. |
| Caching mode                    | Determine how the entries will be reload in the data source. See [Caching Mode](/rdm/mac/data-sources/caching/) for more information. |
| Ping online method              | Indicate the prefer ping online. Select between:<ul><li>None</li><li> Web request</li></ul> |
| Auto go offline                 | If the ping online method does not work it will automatically go offline. |
| Remote tools access mode        | Select your remote tools access mode between:<ul><li>Local</li></ul><ul><li> Via data source</li></ul> |
| Manage Cache                    | Manage your cache on your computer to analyse, vacuum, repair or delete it. This can be very helpful when experiencing offline issues. For more information please follow this [link](Manage-Cache). |

### {{ en.UVLT_MAJ }}

![{{ en.DVLS }} – {{ en.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6026.png)

| OPTION           | DESCRIPTION |
|------------------|-------------|
| Connection type  | Select the type of {{ en.UVLT }} to use. Select between:<ul><li>Default: use the default {{ en.UVLT }} which is stored in the database.</li><li> None: disable the {{ en.UVLT }} for all users.</li></li>  {{ en.DOD }}: use a {{ en.DOD }} file (*.dod) as a {{ en.UVLT }}.</li></ul> |

