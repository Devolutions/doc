---
title: SQL Server data source with Integrated Security
keywords:
- role
---
We will take you through a step by step guide to configure and test a {{ en.RDM }} deployment against an SQL Server data source using Integrated Security.  

{% snippet icon.shieldWarning %}
Any user (domain, local machine or SQL user) that has a server role of ***sysadmin*** is automatically an administrator of {{ en.RDM }}
{% endsnippet %}

## Create the database

The first step is to create the database that will store all your entries.

Click on the ***ellipsis*** button in the ***{{ en.NPANE }}***, then click on ***Add a new data source***.  
![!!KB4587.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4587.png)  

Select the ***Microsoft SQL Server*** data source and click ***OK***.  
![!!KB4588.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4588.png)  

- Specify the ***Name, Server*** and ***Database***.  
- Authenticate with a user that is part of the ***sysadmin*** role.  
![!!KB4589.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4589.png)  
{% snippet icon.badgeInfo %}
If the logged-on Windows User is not part of the SQL Server ***sysadmin*** role and you have configured the server to use SQL Server and Windows Authentication Mode, then use a SQL Server user (SA for example) that has the appropriate user groups assigned. You can then add yourself as a {{ en.RDM }} user later and change the data source to use Integrated security.
{% endsnippet %}  

- From the upgrade tab, click ***Test Server*** then ***Create Database*** to create the SQL Server database.  
![!!KB4590.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4590.png)  
Press ***OK*** to close the dialogs. In the ***{{ en.NPANE }}***, select the newly created data source from the data source drop down list.  
![!!KB4591.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4591.png)

## Create users

To create users, navigate to ***Administration – Users***.  
![!!KB4592.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4592.png)  

Click ***Add Users***.  
![!!KB4593.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4593.png)  

Check the ***Integrated security (Active Directory)*** box and click the ellipsis button to select the domain user to add.  
![!!KB4594.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4594.png)  

Select the ***User type*** Grant the ***Add***, ***Edit***, and ***Delete*** rights (optional, restricted user only). For more information on user types and rights, please consult the [Administration – Users](/rdm/windows/commands/administration/management/user-management/) topic.  

{% snippet icon.badgeInfo %}
Keep the ***Create SQL Server Login and User*** box checked. This will in effect cause {{ en.RDM }} to map a new login to the domain account and link it to a user.  

You can uncheck this in the case where your DBA has created your login already on the SQL Server.
{% endsnippet %}

Repeat these steps for each user that needs access to this data source in {{ en.RDM }}.

## Configure {{ en.RDM }} for other workstations

To configure the data source on other workstations, three methods are available:  

- Create the data source as done previously, making sure to check the ***Integrated Security (Active Directory)*** box.  
- Export the data source from the initial workstation and import it into {{ en.RDM }} on all client workstations.  
- Use our [{{ en.CIM }}](/rdm/windows/installation/client/custom-installer-service/) service to help distribute the application and personalize the installation process.  

## Test the configuration

If you have a second set of domain credentials, you could use this trick to test locally. [Running {{ en.RDM }} as Another User](/kb/remote-desktop-manager/how-to-articles/running-rdm-as-another-user/)  

Now in your {{ en.RDM }} with admin rights, create a few user groups (Admin, Production, Staging) and assign them users.