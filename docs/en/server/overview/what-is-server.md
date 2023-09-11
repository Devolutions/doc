---
eleventyComputed:
  title: '{{ en.DVLS }}'
  description: '{{ en.DVLS }} is an on‑premises solution for storing and sharing information across your whole organization. Manage remote connections, credentials, and sensitive information with ease.'
  order: 10
  keywords:
  - on-premises
  - self-hosted
  - roles
---
![!!{{ en.DVLS }} logo]({{ locale[lang].projects.server.logo }})

{{ en.DVLS }} is an on‑premises solution for storing and sharing information across your whole organization. Manage remote connections, credentials, and sensitive information with ease.  

Use our ***User Groups Based Access Control*** to grant permissions in a granular fashion. Advanced logging of all user activity is included to offer visibility in all aspects of the solution.  

Because of its web architecture, you have the possibility to offer it only from your intranet or publish it on the Internet.  

{% youtube 'bOTKsqdPulI' %}  

There are two ways of using {{ en.DVLS }}: 

<table>
	<tr>
		<td>

![!!clip10056](https://webdevolutions.azureedge.net/docs/en/server/clip10056.png)  

## Web-Based {{ en.VLT }}  

Web browser access and [{{ en.DWL }}](/server/dwl/overview/) 
		</td>
		<td>
![!!Application64x64](https://webdevolutions.azureedge.net/docs/common/Application64x64.png)  

## Session Management  

Using a client application (desktop or mobile) 
		</td>
	</tr>
	<tr>
		<td>
Access {{ en.VLT }} resources from a web browser using a Client Access License (CAL). Credentials are managed directly from the web interface and no client application is required.  

With the {{ en.DWL }} browser extension, credentials can be automatically submitted when connecting to a website. 
		</td>
		<td>
Access {{ en.VLT }} resources using our client applications which communicate with {{ en.DVLS }} web services. A local installation of a client application such as {{ en.RDM }} is required to manage the data source and its resources. Note that we offer Windows, {{ en.MAC }}, Android and iOS editions.  

Use any type of entry, manage all aspects of the data source and monitor user activity all in the same application. 
		</td>
	</tr>
	<tr>
		<td>
Remote access technologies (RDP, VNC, etc.) are not supported within a web browser. 
		</td>
		<td>
Unlike with web browser access, {{ en.RDM }} can launch sessions using remote access technologies. 
		</td>
	</tr>
</table>

## Highlights

<table>
	<tr>
		<td>

![!!clip10054](https://webdevolutions.azureedge.net/docs/en/server/clip10054.png)  

### High-End Server 
		</td>
		<td>
![!!clip10055](https://webdevolutions.azureedge.net/docs/en/server/clip10055.png)  

### Full Active Directory (AD) Integration 
		</td>
		<td>
![!!clip10057](https://webdevolutions.azureedge.net/docs/en/server/clip10057.png)  

### Web Architecture 
		</td>
	</tr>
	<tr>
		<td>
Self-hosted locally on an application server or on a private cloud. Store entries in an unlimited number of {{ en.VLT }}s and manage access to these entries with our User Groups Based Access Control. 
		</td>
		<td>
Users accessing the system will be granted permissions based on their membership in specific AD groups, making user management almost seamless for organizations that use AD to manage teams. 
		</td>
		<td>
Implemented using a Web architecture so it can exposed publicly on the Internet or only to your Intranet or private cloud. 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10050](https://webdevolutions.azureedge.net/docs/en/server/clip10050.png)  

### Multi-Factor Authentication 
		</td>
		<td>
![!!clip10062](https://webdevolutions.azureedge.net/docs/en/server/clip10062.png)  

### Email Notifications 
		</td>
		<td>
![!!clip10060](https://webdevolutions.azureedge.net/docs/en/server/clip10060.png)  

### IP Restrictions 
		</td>
	</tr>
	<tr>
		<td>

Widest choice of [multi-factor authentication](/server/web-interface/administration/configuration/server-settings/security/two-factor/) (MFA) providers. Many providers can be enabled concurrently. They can selectively be enforced per user. 
		</td>
		<td>
Optionally receive email notifications for various events on sessions, users, user groups, etc. 
		</td>
		<td>
Controlling access to {{ en.DVLS }} from IP addresses/ranges, including GeoIP restriction and IP allowlisting/blocklisting. 
		</td>
	</tr>
</table>
