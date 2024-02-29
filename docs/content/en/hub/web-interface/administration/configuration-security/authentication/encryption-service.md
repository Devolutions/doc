---
eleventyComputed:
  title: Encryption service
  description: The encryption service streamlines access to your Hub by eliminating the requirement to individually invite each user from your SSO provider.
---
{{ en.DHUB }}'s encryption service streamlines access to your Hub by eliminating the requirement to individually invite each user from your SSO provider. This feature can be enabled in your Hub under ***Administration – Authentication – Encryption service***.

## Requirements
To enable and configure your encryption service, the following prerequisites are necessary:
* A configured and active [Single Sign-On (SSO) setup](/hub/getting-started/get-started-sso-hub-business/).
* An [application identity](#application-identity-permissions) in your Hub.
* A self-hosted server to the [{{ en.DHUBS }}](#devolutions-hub-services-installation-configuration).
* A trusted SSL certificate.
* A reachable network port within the local network and, if applicable, from the internet.

### Application identity permissions
[Create an application identity](/hub/web-interface/administration/management/application-users/manage-application-users/#create-an-application-identity) and assign it the following [system permissions](/hub/web-interface/administration/configuration-security/system-permissions/):
* ***Manage users and user groups***
* ***Manage system configuration*** (includes system permissions, system settings, and IP allowlists)

### {{ en.DHUBS }} installation configuration
{{ en.DHUBS }} is needed to establish communication between your self-hosted server and your {{ en.DHUBB }}.
1. [Download the {{ en.DHUBS }}](https://devolutions.net/password-hub/home/download/) and launch the installer.
1. Click ***Next*** to continue past the welcome page.
![{{ en.DHUBS }} setup wizard welcome page](https://cdnweb.devolutions.net/docs/en/hub/HUBB2360_2024_1.png)
1. Read and accept the terms in the License Agreement, then click ***Next***.
![Accept the terms in the License Agreement](https://cdnweb.devolutions.net/docs/en/hub/HUBB2361_2024_1.png)
1. Under ***Custom Setup***, select ***Encryption***, then click ***Next***.
![Install the encryption feature](https://cdnweb.devolutions.net/docs/en/hub/HUBB2362_2024_1.png)
1. Enter the following information in the corresponding fields:
    * the ***Host***, which is the URL of your {{ en.DHUB }}.
    * the ***Application secret*** and ***Application key***, which were provided to you when the application identity was initially created.
1. Click on ***Test Connection***. You should receive a message indicating that the connection was successful. If this is not the case, check the validity of the information you have entered and try again. If you are still experiencing connection problems, please contact our help desk technicians at [service@devolutions.net](mailto:service@devolutions.net).
![Test Connection](https://cdnweb.devolutions.net/docs/en/hub/HUBB2363_2024_1.png)
1. Click ***Next***.
1. Enter the ***URL*** (HTTPS is mandatory) and ***Port*** number where the encryption service will listen for incoming requests. Ensure the port is configured to be reachable.
1. Search for your ***Certificate*** and select it. If your certificate is protected with a password, enter it in ***Certificate Password***.
![URL, port, and certificate](https://cdnweb.devolutions.net/docs/en/hub/HUBB2365_2024_1.png)
1. Click ***Next***.

The installation process should now begin.

### Authentication settings
1. In {{ en.DHUBB }}, go to ***Administration – Authentication – Encryption service***.
1. Enable the encryption service.
1. Enter the ***Encryption service URL*** where the encryption service will listen for incoming requests. This URL or IP address only needs to be reachable by clients logging in using the encryption service.
![Enable the encryption service and enter the URL](https://cdnweb.devolutions.net/docs/en/hub/HUBB2366_2024_1.png)
1. Test the connection. If the connection fails, check the validity of the information you have entered and try again. If you are still experiencing connection problems, please contact our help desk technicians at [service@devolutions.net](mailto:service@devolutions.net).

All users from your SSO provider can now log in and gain access to your {{ en.DHUB }} automatically, bypassing the need for invitations. It is also not necessary for users to have a private key set up to use the Hub. The server operates on a self-hosted basis; it therefore plays a vital role in the infrastructure. Should the server experience downtime or fail to run, users lacking private keys will encounter issues connecting to the Hub.
