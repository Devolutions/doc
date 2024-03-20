---
eleventyComputed:
  title: "{{ en.DVLS }}"
  description: "{{ en.DVLS }} is an on‑premises solution for storing and sharing information across your whole organization. Manage remote connections, credentials, and sensitive information with ease."
  order: 10
  keywords:
  - on-premises
  - self-hosted
  - roles
---
![!!{{ en.DVLS }} logo]({{ locale[lang].projects.server.logo }})

{{ en.DVLS }} is an on‑premises solution for storing and sharing information across your whole organization. Manage remote connections, credentials, and sensitive information with ease.

Use our ***user group-based access control*** to grant permissions in a granular fashion. Advanced logging of all user activity is included to offer visibility in all aspects of the solution.

Because of its web architecture, you can offer {{ en.DVLS }} only from your intranet or publish it online.

{% youtube 'bOTKsqdPulI' %}

There are two ways of using {{ en.DVLS }}:

| ![!!clip10056](https://cdnweb.devolutions.net/docs/en/server/clip10056.png)<br><br>**Web-based {{ en.VLT }}**<br><br>Web browser access and [{{ en.WBEX }}](/server/workspace-browser-extension/overview/) | ![!!Application64x64](https://cdnweb.devolutions.net/docs/docs_common_Application64x64.png)<br><br>**Session management**<br><br>Using a client application (desktop or mobile) |
| --- | --- |
| Access {{ en.VLT }} resources from a web browser using a Client Access License (CAL). Credentials are managed directly from the web interface, and no client application is required.<br><br>With the {{ en.WBEX }}, credentials can be automatically submitted when connecting to a website. | Access {{ en.VLT }} resources using our client applications, which communicate with {{ en.DVLS }} web services. A local installation of a client application such as {{ en.RDM }} is required to manage the data source and its resources. Note that we offer Windows, macOS, Android, and iOS editions.<br><br>Use any entry type, manage all aspects of the data source, and monitor user activity all in the same application. |
| Remote access technologies such as RDP, SSH, and Active Directory web console are supported within the web interface through {{ en.DGW }}. | Unlike with web browser access, {{ en.RDM }} can launch a wide range of sessions using remote access technologies. |

## Highlights

| ![!!clip10054](https://cdnweb.devolutions.net/docs/en/server/clip10054.png)<br><br>**High-end server** | ![!!clip10055](https://cdnweb.devolutions.net/docs/en/server/clip10055.png)<br><br>**Full Active Directory (AD) integration** | ![!!clip10057](https://cdnweb.devolutions.net/docs/en/server/clip10057.png)<br><br>Web architecture |
| --- | --- | --- |
| Self-hosted locally on an application server or a private cloud. Store entries in an unlimited number of {{ en.VLT }}s and manage access to these entries with our ***user group-based access control***. | Users accessing the system will be granted permissions based on their membership in specific AD groups, making user management almost seamless for organizations that use AD to manage teams. | Implemented using a Web architecture so it can exposed publicly on the Internet or only to your Intranet or private cloud. |

| ![!!clip10050](https://cdnweb.devolutions.net/docs/en/server/clip10050.png)<br><br>**Multi-factor authentication** | ![!!clip10062](https://cdnweb.devolutions.net/docs/en/server/clip10062.png)<br><br>**Email notifications** | ![!!clip10060](https://cdnweb.devolutions.net/docs/en/server/clip10060.png)<br><br>**IP restrictions** |
| --- | --- | --- |
| Widest choice of [multi-factor authentication](/server/web-interface/administration/configuration/server-settings/security/two-factor/) (MFA) providers. Many providers can be enabled concurrently. They can selectively be enforced per user. | Optionally receive email notifications for various events on sessions, users, user groups, etc. | Controlling access to {{ en.DVLS }} from IP addresses/ranges, including GeoIP restriction and IP allowlisting/blocklisting. |
