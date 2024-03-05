---
eleventyComputed:
  title: "{{ en.DVLS }} security dashboard"
  description: The Security Dashboard is a tool to offer guidance on how to improve the security of the {{ en.DVLS }} platform and also tips on reducing the workload for administrators.
---
The ***Security Dashboard*** is a tool to offer guidance on how to improve the security of the {{ en.DVLS }} platform and also tips on reducing the workload for administrators. Some tips are common infosec best practices, others are a consensus between our owns teams.

The scores are admittedly open to question and we do not pretend each topic has the same relative value for all of our community members. Achieving 100% is surely not an end goal in itself, we simply aim to raise awareness and provide ideas for your own security hardening.
![!!KB4707](https://cdnweb.devolutions.net/docs/en/kb/KB4707.png)

## Improvement Actions Items

### Active directory should be configured to use a secure communication channel

|             |     |
| ----------- | --- |
| Description | The LDAPS protocol should be used to provide communication confidentiality and integrity over the network. Otherwise, actions such as password resets could send the password in cleartext over the network. |
| Mitigation  | In the web interface ***Administration – Server Settings – Authentication – Domain***, check ***Enable LDAPS*** |

### Backups should be enabled and configured

|             |     |
| ----------- | --- |
| Description | Backups should be configured to an external media or cloud storage to avoid permanent loss of data. |

### Database accounts should be different for web application, scheduler and management tools

|             |     |
| ----------- | --- |
| Description | Minimum privileges should be granted and applied for service and database accounts to operate. Shared and excessively privileged service and database accounts may induce unnecessary security risk exposure. |

### Email notifications should be configured

|             |     |
| ----------- | --- |
| Description | An email server configuration is required to transmit important application messages such as security events or errors. |
| Mitigation  | Email server settings are in the web interface ***Administration – Server Settings – Email***.                           |

### External logging destination should be configured

|             |     |
| ----------- | --- |
| Description | Sending logs to an external system is recommended to maintain integrity and availability of event information. |
| Mitigation  | Logging is configured in the web interface ***Administration – Server Settings – Logging***.                    |

### Secure https communications should be enabled

|             |     |
| ----------- | --- |
| Description | Secure communications guarantee the integrity and confidentiality of the data transmitted between the client and the server. |

### Sessions should be revalidated within 24 hours

|             |     |
| ----------- | --- |
| Description | Excessive session duration may allow exposure beyond necessary to unauthorized users. Refresh token lifetime should therefore be configured within 24 hours (1440 min). |

### The administrator count should be no more than 5

|             |     |
| ----------- | --- |
| Description | Limiting the number of active administrators within the platform will reduce the attack surface of an attacker to only those accounts configured. Having more than 5 administrators can also be a sign of poor segregation of duty within the business unit or organization. |

### The default mssql “sa” database account should be avoided

|             |     |
| ----------- | --- |
| Description | The default MSSQL administrative account is a high privilege account that should only be used to manage the database instance. A less privileged user or service account is preferred to reduce impact of compromise. |

### The server configuration file should be encrypted

|             |     |
| ----------- | --- |
| Description | Sensitive information is stored in the **web.config** configuration file. It is recommended to enable encryption to prevent tampering and ensure confidentiality. |

### {{ en.VLT_MAJ }} security level should be set to high

|             |     |
| ----------- | --- |
| Description | {{ en.VLT_MAJ }} security level should be set to high in the ***{{ en.VLT }} settings***. |
| Mitigation  | ***{{ en.VLT_MAJ }} settings*** are in the web interface of {{ en.DVLS }} under ***Administration – User and Security Management – {{ en.VLT_MAJ }}s***. Edit a {{ en.VLT }} to open the ***Edit {{ en.VLT }} settings window*** and select ***High*** in the drop-down menu under ***General – Security level***. |
