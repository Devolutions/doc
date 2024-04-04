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
* A self-hosted server to install the [{{ en.DHUBS }}](#devolutions-hub-services-installation-configuration).
* A trusted SSL certificate.
* A reachable network port within the local network and, if applicable, from the internet.
* An active [Azure services subscription](#azure-services-subscription) (if you set up your encryption service using the recommended [Azure template method](#encryption-service-setup-using-an-azure-template)).

### Application identity permissions
[Create an application identity](/hub/web-interface/administration/management/application-users/manage-application-users/#create-an-application-identity) and assign it the following [system permissions](/hub/web-interface/administration/configuration-security/system-permissions/):
* ***Manage users and user groups***
* ***Manage system configuration*** (includes system permissions, system settings, and IP allowlists)

### {{ en.DHUBS }} installation configuration
{{ en.DHUBS }} is needed to establish communication between your self-hosted server and your {{ en.DHUBB }}.
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

### Azure services subscription
If you are setting up your encryption service using an Azure template, which is the recommended method (see the [instructions below](#encryption-service-setup-using-an-azure-template)), you need to have a subscription to Azure services. If you do not have one, first follow these instructions:
1. Log in to your [Microsoft Azure Portal](https://azure.microsoft.com) account.
1. Select ***Subscriptions*** in the ***Azure services***. If you do not see it, click on ***More services*** to show other services.
1. Click ***Add*** then select the ***Pay-As-You-Go*** subscription offer.
1. Enter the required information and sign up to the service.

## Encryption service setup using an Azure template
Using an Azure template to configure the encryption service is the recommended method as it is the simpler and more straightforward approach and helps prevent unnecessary complications. Verify that all [requirements](#requirements) are fulfilled before moving forward.

1. In {{ en.DHUBB }}, go to ***Administration – Authentication – Encryption service*** and click on ***Generate Azure template***.
1. Copy the generated template.
1. In Azure, select ***Deploy a custom template*** in the ***Azure services***. If you do not see it, click on ***More services*** to show other services. This service can be found under the ***General*** services category.
1. Click on ***Build your own template in the editor***.
1. Paste the generated Azure template you obtained from {{ en.DHUB }} into the Azure template editor, replacing any pre-existing content within the editor.
1. Click ***Save***.
1. On the ***Custom deployment*** page, configure your information as outlined below:
    * ***Subscription***: Select a subscription if none is selected.
    * ***Resource group***: Select or create a resource group if none is selected.
    * ***App Name*** and ***App Service Plan Name***: Leave the default names or change them according to your preferences.
    * ***Hub URL***: Ensure that it is set to the URL of your {{ en.DHUBB }}.
    * ***Application Identity Key*** and ***Application Identity Secret***: Enter your application identity key and secret in the corresponding fields. Your application identity should have the ***Manage system configuration*** and ***Manage users and user groups*** permissions, as stated in [Application identity permission](#application-identity-permissions).
1. Click on ***Review + create***.
1. Click on ***Create***.
1. Upon completion of the deployment, which may take a couple seconds, click on ***Go to resource group***.
1. Click on your new ***App Service*** in the list.
1. Copy the given ***Default domain*** (https://your-app-name.azurewebsites.net) or the ***Custom domain*** (https://yourdomain.com) if you decided to create one.
1. Add this domain to the list of redirect URIs in your enterprise application. Follow the instructions below to guide you through this process:
    1. Go back to the [Microsoft Azure Portal home page](https://azure.microsoft.com) and select Microsoft Entra ID in the ***Azure services***. If you do not see it, click on ***More services*** to show other services. {type="a"}
    1. In the left menu, click on ***Enterprise applications***. {type="a"}
    1. Select your application from the list. {type="a"}
    1. In the left menu, click on ***Properties***. {type="a"}
    1. In the text at the top of the page, click on ***application registration***. {type="a"}
    1. In the left menu, click on ***Authentication***. {type="a"}
    1. Click on ***Add URI*** and paste the domain in the redirect URI field. {type="a"}
    1. Click ***Save***. {type="a"}
1. In {{ en.DHUB }}, go back to ***Administration – Authentication – Encryption service*** and enable the encryption service.
1. Paste your default or custom domain in the ***Encryption Service*** URL field. This is where the encryption service will listen for incoming requests. This URL or IP address only needs to be reachable by clients logging in using the encryption service.
1. Test the connection. If the connection fails, check the validity of the information you have entered and try again. If you are still experiencing connection problems, please contact our help desk technicians at [service@devolutions.net](mailto:service@devolutions.net).

All users from your SSO provider can now log in and gain access to your {{ en.DHUB }} automatically, bypassing the need for invitations. It is also not necessary for users to have a private key set up to use the Hub. The server operates on a self-hosted basis; it therefore plays a vital role in the infrastructure. Should the server experience downtime or fail to run, users lacking private keys will encounter issues connecting to the Hub.