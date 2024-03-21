---
eleventyComputed:
  title: Security
  order: 20
---
The Security section allows the administrator to configure the allowed and denied IPs addresses.
![Administration – {{ en.DVLS }} Settings – Security](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8045.png)

## Settings

### IP
| Option                           | Description                                                                                  |
|----------------------------------|----------------------------------------------------------------------------------------------|
| Allowed Single IPs               | If you wish to restrain the access to the {{ en.DVLS }} to only certain IPs address enter those here. If nothing is entered in this field all IPs address will be allowed to connect to the {{ en.DVLS }}. |
| Allowed Masked IPs               | If you wish to restrain the access to only certain Masked IPs (dividing the host part of an IP address into a subnet and host address) on the {{ en.DVLS }}, enter those Masked IP address here. The CIDR format is not supported, for example 10.10.10.0/24, please use: 10.10.10.0;255.255.255.0 |
| Denied Single IPs                | If you wish to deny access to the server from certain IPs address enter those in this field. |
| Denied Masked IPs                | If you wish to deny access to the server from certain Masked IPs address (dividing the host part of an IP address into a subnet and host address) enter those in this field.                                                                |
| Force token public IP validation | Force token validation                                                                       |
| Use X-Forwarded-For              | Enable the usage of X-Forwarded-For header for [Deploy in an High Availability or Load Balanced Environment](/kb/devolutions-server/knowledge-base/deploy-high-availability-load-balanced-env/). |
| Block Tor clients                | Block incoming traffic from TOR clients.                                                     |

### Auto Lock
| Option            | Description                                                                                      |
|-------------------|--------------------------------------------------------------------------------------------------|
| Enabled auto lock | Automatically locks down the access to the Server after a predetermine number of failed attempt. |
| Attempt Count     | Enter the number of failed attempts before locking down the Server.                              |
