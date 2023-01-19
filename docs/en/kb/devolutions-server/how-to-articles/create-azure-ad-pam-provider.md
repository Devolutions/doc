---
title: Create Azure AD PAM Provider
---
# {{ en.TOPICTITLE }}
The following guide provides the steps to create an Azure AD user PAM provider for {{ en.DPS }}
## STEPS
1. Register a new application in Azure AD.
1. Set the Name and the Redirect URI. The Redirect URI must be the same value as the URL used to connect on {{ en.DPS }}  
![Register Azure AD application.png](/img/en/kb/kb8063.png)
1. Once registered, create a new Azure AD User provider in the PAM section of {{ en.DPS }}  
![KB8065.png](/img/en/kb/KB8065.png)
1. Copy the Tenant ID, the Client ID and the Redirect URI from the Azure AD application and paste them in the appropriate fields of the new Azure AD User provider.  
![KB8066.png](/img/en/kb/KB8066.png)
1. Go in Certificates &amp; secrets on the Azure AD application to create a New client secret  
![KB8064.png](/img/en/kb/KB8064.png)
1. Copy the Secret and paste it in the Azure AD User provider Secret key field. Wait before saving the Azure AD User provider as some configurations need to be completed in Azure.  
![KB8067.png](/img/en/kb/KB8067.png)  
![KB8068.png](/img/en/kb/KB8068.png)
1. Go in API permissions and add the Group.Read.All , RoleManagement.Read.Directory and User.Read.All Microsoft Graph API permissions. Remove all other unnecessary permissions.  
![KB8069.png](/img/en/kb/KB8069.png)
1. As these permissions require admin consent, then click on the Grant admin consent button.  
![KB8070.png](/img/en/kb/KB8070.png)  
![KB8071.png](/img/en/kb/KB8071.png)
1. To grant the application the ability to rotate passwords, first go in Azure Active Directory - Roles and administrators to open the Helpdesk administrator role.  
![KB8072.png](/img/en/kb/KB8072.png)
1. Then in the Assignments window, click on the Add assignments button.  
![KB8073.png](/img/en/kb/KB8073.png)
1. Filter the list to find the Azure Application previously created and click on the Add button.  
![KB8074.png](/img/en/kb/KB8074.png)
1. The following result should be displayed with the Azure Application added in the list of the Helpdesk administrator Assignments.  
![KB8075.png](/img/en/kb/KB8075.png)
1. Then save the Azure AD User provider in {{ en.DPS }}  
![KB8076.png](/img/en/kb/KB8076.png)
1. The next step is to create a Scan configuration for this provider.  
![KB8077.png](/img/en/kb/KB8077.png)
1. You can filter the Search mode for specific Azure AD Groups or Azure AD Roles.  
![KB8078.png](/img/en/kb/KB8078.png)
1. Once the Azure AD User Scan configuration saved and launched, you should see it in the list of the scan created. When it will complete its process, then you will be able to select the accounts and import them in the Privileged accounts like any other privileged account types.  
![KB8079.png](/img/en/kb/KB8079.png)
