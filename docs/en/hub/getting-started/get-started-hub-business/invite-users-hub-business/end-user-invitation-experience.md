---
eleventyComputed:
  title: End User Invitation Experience in {{ en.HUBB }}
---
{% youtube 'FObiAXJrBXI' %}  

{% snippet icon.badgeInfo %} 
The administrator can [Invite Users to log in with single sign-on (SSO)](/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/), which is a way to identify a user with a single identifier, to {{ en.HUBB }}. The end user invitation experience is different with SSO, as the email the user receives asks them to use the “Sign in with Microsoft“ option to log in. If this is the case, please refer to our [End User Invitation Experience for SSO](/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/end-user-experience/) topic. 
{% endsnippet %}
 
Users that are invited to join {{ en.HUBB }} by an administrator receive an invitation email. This email varies depending on whether or not the user has a {{ en.DA }} and on the settings of the administrator who sent the invitation. To learn how to invite users, visit [this topic](/hub/web-interface/hub-overview/administration/management/users/create-invite-users/).  

For information regarding the user's first login to {{ en.HUBB }}, visit one of the sections below based on the user's situation.  

* [Invitee with no {{ en.DA }}](#invitee-with-no--enda)  
* [Invitee with an existing {{ en.DA }}](#invitee-with-an-existing--enda)  

To skip the login instructions and go straight to essential features of {{ en.HUBB }}, go to the [First Steps in {{ en.HUBB }}](#first-steps-in--enphub--business) section.  

## First Login 

### Invitee with no {{ en.DA }} 

If the user does not have a {{ en.DA }}, they will need a [Temporary Password](/hub/web-interface/hub-overview/administration/management/users/create-invite-users/temporary-password/) to access {{ en.HUBB }}. The administrator who invited the user may include this password in the invitation email or not.  

If the temporary password is included, the user receives an invitation email with a link to {{ en.HUBB }} with their temporary password.  
![Invitation Email – Temporary Password Included](https://webdevolutions.azureedge.net/docs/en/hub/Hub2000.png) 

If the temporary password is not included, the user receives an invitation email with a link to {{ en.HUBB }} and a notice that the administrator will soon forward them the temporary password.  
![Invitation Email – Temporary Password Not Included](https://webdevolutions.azureedge.net/docs/en/hub/Hub2001.png) 

Once the users have received their temporary password, they are ready to connect to {{ en.HUBB }}.  

1. Access the {{ en.HUBB }} URL link. 
1. Enter the temporary password, then click on ***Continue***.  
![Connection – No {{ en.DA }}](https://webdevolutions.azureedge.net/docs/en/hub/Hub2002.png) 
1. Create a new password for the account by following the password restrictions, then click on ***Update Password***.  
![Password Modification](https://webdevolutions.azureedge.net/docs/en/hub/Hub2003.png)  

Now that you have access to {{ en.HUBB }}, you can skip to the [First Steps in {{ en.HUBB }}](#first-steps-in--enphub--business) section.  

### Invitee with an existing {{ en.DA }} 

If the user already has a {{ en.DA }}, they receive an invitation email with a link to {{ en.HUBB }}.  
![Invitation Email – Existing {{ en.DA }}](https://webdevolutions.azureedge.net/docs/en/hub/Hub2004.png)  

1. Access the {{ en.HUBB }} URL link. 
1. Enter your {{ en.DA }} credentials, then click on ***Continue***.  
![Connection – Existing Devoltions Account](https://webdevolutions.azureedge.net/docs/en/hub/Hub2005.png)  

Now that you have access to {{ en.HUBB }}, you can continue to the following section. 

## First Steps in {{ en.HUBB }} 

After logging in, {{ en.HUBB }} opens on the ***Vault*** tab. In this view, it is possible to interact with the vaults and entries you have access to. You can change vault using the ***Vault*** selector menu at the top.  
![Vault Tab](https://webdevolutions.azureedge.net/docs/en/hub/Hub2006.png)  

You can also access your ***User Vault***, which is user centric and is used to store information such as personal account credentials, by clicking on the ***User Vault*** tab in the side menu.  
![User Vault Tab](https://webdevolutions.azureedge.net/docs/en/hub/Hub2007.png)  

### Create Entries 

{{ en.DWL }} is our web browser password plugin. It is the preferred client to use in conjunction with {{ en.HUBB }} to create and manage website credentials entries. Visit [this topic](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/add-entry-hub-business-dwl/) for steps on how to add a website entry with {{ en.DWL }}, or visit [Create Entries Manually](/hub/web-interface/hub-overview/entries/create-entries-manually/) for how to create them directly within {{ en.HUBB }}. You can also follow the steps below to manually create an entry in your ***User Vault***:  

1. Select the folder where you want to create the new entry, if applicable. If not, skip this first step. 
1. Click on the ***Add*** button located in the ***{{ en.NPANE }}***.  
![Add Button](https://webdevolutions.azureedge.net/docs/en/hub/Hub2008.png)  
1. Select the type of entry you wish to create. You can search by categories with the side menu or apply a filter with the search bar. Click on ***Continue*** when your entry type is selected. 
{% snippet icon.badgeInfo %} 
To learn more about entry types, visit our [Entry Type](/hub/web-interface/hub-overview/entries/entry-type/) topic. 
{% endsnippet %}
 
![Add New Entry](https://webdevolutions.azureedge.net/docs/en/hub/Hub2009.png)  

4. Fill out the relevant information for the type of entry you selected, then click on ***Add***.  
![Examples of Information Fields to Fill In](https://webdevolutions.azureedge.net/docs/en/hub/Hub2010.png)  
