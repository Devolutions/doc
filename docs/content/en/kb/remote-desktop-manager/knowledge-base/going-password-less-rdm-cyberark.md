---
eleventyComputed:
  title: Going password-less with {{ en.RDM }} and CyberArk
  description: Going password-less with {{ en.RDM }} and CyberArk
---
During the last few months, you may have noticed a heightened level of collaboration between Devolutions and CyberArk  Indeed, two of our three entry types have been refreshed in version 2020.2 to better use their improved APIs. Our third type is already available in {{ en.RDM }} 2020.3 beta, this completes the current round of improvements and essentially allows organizations to go password-less for their day-to-day workflows.  

The only requirement is that you operate CyberArk's ***Application Access Manager*** (AAM) as part of your organization’s CyberArk deployment. This module allows for ***Private Key*** (PK) authentication, which means that the whole Identification/Authentication phase is managed by your IT Department, rendering passwords completely unnecessary.  

Also, let’s start with a caveat that the password-less part is in regards to CyberArk, you still have to authenticate to {{ en.RDM }}, whatever datasource you are using.
### Overview
A diagram is necessary to properly illustrate the solution.  
![!!KB4661](https://webdevolutions.azureedge.net/docs/en/kb/KB4661.png)
1. The user is authenticated to {{ en.RDM }} with a ***Least Privilege Account***, this gives them a view into the {{ en.RDM }} content as per the permissions set in our User Groups Based Access Control.
1. When their ***Privileged Account*** is required to launch a supported technology, {{ en.RDM }} will obtain the appropriate Private Key from the workstation, it must be held in the certificate store for the user.
1. The PK is used to authenticate against the CyberArk {{ en.VLT }}. It’s configured as an ***Application*** object that is essentially a ***user proxy*** used to query the {{ en.VLT }}.
1. {{ en.RDM }} obtains the details of a ***Privileged Account***, what is key is that the user does not know the password for their own privileged account.
1. {{ en.RDM }} uses the ***Privileged Account*** and launches either: a PSM Connection; connects to the PVWA; or even launches a session supported by {{ en.RDM }}, all the while still hiding the password from the user.
### CyberArk Application Access Manager (AAM) Configuration
First, you must issue PKs for each of your users and deploy them to their workstations.  The source of truth for these matters is surely the CyberArk documentation, but we have included basic instructions in our integration guide. As for the {{ en.RDM }} side, again we support different methods of managing the PK:  

1. PK information stored an entry which exists in the {{ en.UVLT }}. This is surely the most simple as you have a one-to-one relationship between users/keys/accounts, but it has to be done by the users themselves.
1. PK information stored in ***My accounts settings***: This method allows the administrators to create the AAM entries within {{ en.RDM }}, while each user sets their own PK details in their own personal settings. Since the account lookup uses keywords specified in the AAM entry, it means that you have a few options still:
    1. Handled in CyberArk: for each user there need to exist a single Privileged Account, accessible from the same keywords. The burden is on the administrator to isolate those in various safes and to ensure that everyone’s account has the same keywords.
    1. Handled in {{ en.RDM }}: administrators need to create a unique AAM entry per user with the keywords to find their Privileged Account.  Our User Groups Base Access Control must be used to ensure that users can view and use only appropriate entries.     

As always with {{ en.RDM }}, you can mix and match approaches depending on your own requirements.

{% snippet icon.badgeInfo %}
An application name other than ***AIMWebService*** must be specified in the ***application name*** field. 
{% endsnippet %}   

![Application name field](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6118.png)  

### CyberArk Privilege Session Manager (PSM) Configuration
A discussion on the PSM is surely too broad to fit in this topic, so I will again refer to CyberArk’s documentation.  As for {{ en.RDM }}, in your PSM-Server entry, use one of our mechanism to have the connection use the AAM entry configured in the previous step.  

If you have chosen AAM option 1 above, you must use the User Specific Settings in {{ en.RDM }} to create the link between the PSM-Server entry and the AAM Entry that is stored in the {{ en.UVLT }}.  

If you have rather selected options 2a or 2b, I believe that the best option is to set the PSM-Server entry to use ***Credential Repository***, paired with ***prompt on connection*** This makes the experience better for new users, and experienced users will know how to switch to User Specific Settings to make their choice more permanent.

### CyberArk Webservices SDK configuration
When you stay within the confines of your CyberArk ecosystem, you typically do not need to use this type, but it was decided to still offer you the capability. This has just recently been modified and therefore is only in the 2020.3 release, which is in the beta cycle at this time.  

That being said, it allows your organization to give access to grab certain passwords, whenever the PSM or using {{ en.RDM }}’s account brokering is not an option, all the while still allowing only access from a Privileged Account that the user does not control.
### Conclusion
For the full details, here is the official documentation for each of our integration, as well as a few links to our own documentation on features mentioned in this post.  

* Integration guides (download link from our CDN)  
    * [AAM integration guide](https://cdn.devolutions.net/documents/cyberark/Devolutions%20Remote%20Desktop%20Manager%20-%20CyberArk%20AAM%20integration%20guide.pdf)  
    * [PSM integration guide](https://cdn.devolutions.net/documents/cyberark/Devolutions%20Remote%20Desktop%20Manager%20-%20CyberArk%20PSM%20integration%20guide.pdf)  
    * [Webservices SDK integration guide](https://cdn.devolutions.net/documents/cyberark/Devolutions%20Remote%20Desktop%20Manager%20-%20CyberArk%20Webservices%20SDK%20integration%20guide.pdf)  

* {{ en.RDM }} Help  
    * [My Account Settings](https://api.devolutions.net/redirection/e218081a-798e-4b5e-ae59-bee22c4ad31a)  
    * [User Specific Settings](https://api.devolutions.net/redirection/bf0b5e7d-fb57-4b02-9edd-ce9865bd024a)  
    
As always, please contact our support team at [service@devolutions.net](mailto:service@devolutions.net) if you’d like a walk-through or if you need to clarification on certain aspects.
