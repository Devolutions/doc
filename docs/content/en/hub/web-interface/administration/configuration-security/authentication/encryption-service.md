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
* A trusted SSL certificate.
* A reachable network port within the local network and, if applicable, from the internet.
* An active [Azure services subscription](#azure-services-subscription) (if you set up your encryption service using the recommended [Azure template method](#encryption-service-setup-using-an-azure-template-recommended)).
* A self-hosted server to install the {{ en.DHUBS }} (if you set up your encryption service using the [{{ en.DHUBS }} method](#encryption-service-setup-with-the-devolutions-hub-services)).

### Application identity permissions
[Create an application identity](/hub/web-interface/administration/management/application-users/manage-application-users/#create-an-application-identity) and assign it the following [system permissions](/hub/web-interface/administration/configuration-security/system-permissions/):
* ***Manage users and user groups***
* ***Manage system configuration*** (includes system permissions, system settings, and IP allowlists)

{% snippet, "badgeCaution" %}
If you are using an IP allowlist, the encryption service IP must be added as the allowed IP. Failure to do so will prevent the service from communicating with the Hub, rendering it non-functional.
{% endsnippet %}

### Azure services subscription
If you are setting up your encryption service using an Azure template, which is the recommended method (see the [instructions below](#encryption-service-setup-using-an-azure-template-recommended)), you need to have a subscription to Azure services. If you do not have one, first follow these instructions:
1. Log in to your [Microsoft Azure Portal](https://azure.microsoft.com) account.
1. Select ***Subscriptions*** in the ***Azure services***. If you do not see it, search for it in the search bar at the top of the page or click on ***More services*** to show other services. This service can be found under the ***Management and governance*** services category.
![Subscriptions](https://cdnweb.devolutions.net/docs/INTERFACE2000.png)
1. Click ***Add*** then select the ***Pay-As-You-Go*** subscription offer.
![Pay-As-You-Go offer](https://cdnweb.devolutions.net/docs/INTERFACE2001.png)
1. Enter the required information and sign up to the service.

## Encryption service setup

### Encryption service setup using an Azure template (recommended)
Using an Azure template to configure the encryption service is the recommended method as it is the simpler and more straightforward approach and helps prevent unnecessary complications. Verify that all [requirements](#requirements) are fulfilled before moving forward.

1. In {{ en.DHUBB }}, go to ***Administration – Authentication – Encryption service*** and click on ***Generate Azure template***.
![Administration – Authentication – Encryption service – Generate Azure template](https://cdnweb.devolutions.net/docs/HUBB2036_2024_1.png)
1. Copy the generated template.
![Copy the template](https://cdnweb.devolutions.net/docs/HUBB2037_2024_1.png)
1. On the [Microsoft Azure Portal home page](https://azure.microsoft.com), select ***Deploy a custom template*** in the ***Azure services***. If you do not see it, search for it in the search bar at the top of the page or click on ***More services*** to show other services. This service can be found under the ***General*** services category.
![Deploy a custom template](https://cdnweb.devolutions.net/docs/INTERFACE2002.png)
1. Click on ***Build your own template in the editor***.
![Build your own template in the editor](https://cdnweb.devolutions.net/docs/INTERFACE2003.png)
1. Paste the generated Azure template you obtained from {{ en.DHUB }} into the Azure template editor, replacing any pre-existing content within the editor.
![Paste the Azure template](https://cdnweb.devolutions.net/docs/INTERFACE2004.png)
1. Click ***Save***.
1. On the ***Custom deployment*** page, configure your information as outlined below:
    * ***Subscription***: Select a subscription if none is selected.
    * ***Resource group***: Select or create a resource group if none is selected.
    * ***App Name*** and ***App Service Plan Name***: Leave the default names or change them according to your preferences.
    * ***Hub URL***: Ensure that it is set to the URL of your {{ en.DHUBB }}.
    * ***Application Identity Key*** and ***Application Identity Secret***: Enter your application identity key and secret in the corresponding fields. Your application identity should have the ***Manage system configuration*** and ***Manage users and user groups*** permissions, as stated in [Application identity permission](#application-identity-permissions).
![Custom deployment configuration](https://cdnweb.devolutions.net/docs/INTERFACE2005.png)
1. Click on ***Review + create***.
1. Click on ***Create***.
![Create the custom deplyoment](https://cdnweb.devolutions.net/docs/INTERFACE2006.png)
1. Upon completion of the deployment, which may take a couple seconds, click on ***Go to resource group***.
![Go to resource group](https://cdnweb.devolutions.net/docs/INTERFACE2007.png)
1. Select your new ***App Service*** in the list.
![App Service](https://cdnweb.devolutions.net/docs/INTERFACE2008.png)
1. Copy the given ***Default domain*** (*https://your-app-name.azurewebsites.net*) or the ***Custom domain*** (*https://yourdomain.com*) if you decided to create one.
![Copy the default or custom domain](https://cdnweb.devolutions.net/docs/INTERFACE2009.png)
1. Add this domain to the list of redirect URIs in your enterprise application. Follow the instructions below to guide you through this process:
    1. Go back to the [Microsoft Azure Portal home page](https://azure.microsoft.com) and select ***Enterprise applications*** in the ***Azure services***. If you do not see it, click on ***More services*** to show other services.
    ![Enterprise applications](https://cdnweb.devolutions.net/docs/INTERFACE2010.png) {type="a"}
    1. Select your application from the list. {type="a"}
    1. In the left menu, click on ***Properties***.
    ![Porperties of the application](https://cdnweb.devolutions.net/docs/INTERFACE2011.png) {type="a"}
    1. In the text at the top of the page, click on ***application registration***.
    ![Application registration](https://cdnweb.devolutions.net/docs/INTERFACE2012.png) {type="a"}
    1. In the left menu, click on ***Authentication***. {type="a"}
    1. Click on ***Add URI*** and paste the domain in the redirect URI field.
    ![Add URI](https://cdnweb.devolutions.net/docs/INTERFACE2013.png) {type="a"}
    1. Click ***Save***. {type="a"}
1. In {{ en.DHUB }}, go back to ***Administration – Authentication – Encryption service*** and enable the encryption service if not already done.
1. Paste your default or custom domain in the ***Encryption Service*** URL field. This is where the encryption service will listen for incoming requests. This URL or IP address only needs to be reachable by clients logging in using the encryption service.
![Paste the domain](https://cdnweb.devolutions.net/docs/HUBB2038_2024_1.png)
1. Test the connection. If the connection fails, check the validity of the information you have entered and try again. If you are still experiencing connection problems, please contact our help desk technicians at [service@devolutions.net](mailto:service@devolutions.net).

All users from your SSO provider can now log in and gain access to your {{ en.DHUB }} automatically, bypassing the need for invitations. It is also not necessary for users to have a private key set up to use the Hub. The server operates on a self-hosted basis; it therefore plays a vital role in the infrastructure. Should the server experience downtime or fail to run, users lacking private keys will encounter issues connecting to the Hub.

### Encryption service setup with the {{ en.DHUBS }}
Using an [Azure template](#encryption-service-setup-using-an-azure-template-recommended) to configure the encryption service is the recommended method as it is the simpler and more straightforward approach and helps prevent unnecessary complications. Nonetheless, if you wish to use the following {{ en.DHUBS }} method, verify that all [requirements](#requirements) are fulfilled before moving forward.  
1. [Download the {{ en.DHUBS }}](https://devolutions.net/password-hub/home/download/) and launch the installer.
1. Click ***Next*** to continue past the welcome page.
![{{ en.DHUBS }} setup wizard welcome page](https://cdnweb.devolutions.net/docs/HUBB2360_2024_1.png)
1. Read and accept the terms in the License Agreement, then click ***Next***.
![Accept the terms in the License Agreement](https://cdnweb.devolutions.net/docs/HUBB2361_2024_1.png)
1. Under ***Custom Setup***, select ***Encryption***, then click ***Next***.
![Install the encryption feature](https://cdnweb.devolutions.net/docs/HUBB2362_2024_1.png)
1. Enter the following information in the corresponding fields:
    * the ***Host***, which is the URL of your {{ en.DHUB }}.
    * the ***Application secret*** and ***Application key***, which were provided to you when the application identity was initially created.
1. Click on ***Test Connection***. You should receive a message indicating that the connection was successful. If this is not the case, check the validity of the information you have entered and try again. If you are still experiencing connection problems, please contact our help desk technicians at [service@devolutions.net](mailto:service@devolutions.net).
![Test Connection](https://cdnweb.devolutions.net/docs/HUBB2363_2024_1.png)
1. Click ***Next***.
1. Enter the ***URL*** (HTTPS is mandatory) and ***Port*** number where the encryption service will listen for incoming requests. Ensure the port is configured to be reachable.
1. Search for your ***Certificate*** and select it. If your certificate is protected with a password, enter it in ***Certificate Password***.
![URL, port, and certificate](https://cdnweb.devolutions.net/docs/HUBB2365_2024_1.png)
1. Click ***Next***.

The installation process should now begin.