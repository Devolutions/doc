---
eleventyComputed:
  title: Rename Azure AD accounts domain
  description: If you are using {{ en.RDM }} with the Azure AD integration and change your Azure domain name and tenant, you will need to change them in {{ en.RDM }}.
---
If you are using {{ en.RDM }} with the Azure AD integration and change your Azure domain name and tenant, you will need to change them in your database for users to be able to log in.

You can use the SQL script below to rename your users to the correct domain.

{% snippet icon.badgeNotice %}
First make sure you have a backup of your SQL database since you will need to perform modifications on it.
{% endsnippet %}

1. In SSMS, connect to your Azure cloud/on-premises SQL Server and create a new query. Make sure it runs against your {{ en.RDM }} database and **not** your master.
1. Use the following script with your information:
```
DECLARE @oldDomain as varchar(255) = '@oldDomain'
DECLARE @newDomain as varchar(255) = '@newDomain'

UPDATE UserSecurity 
SET Name=replace(Name,@oldDomain,@newDomain),
    UPN=replace(UPN,@oldDomain,@newDomain),
    ExternalID = NULL
WHERE UserType = 0

UPDATE UserProfile 
SET Name=replace(Name,@oldDomain,@newDomain)
```

If you have changed your Azure tenant, you also need to do the following:
1. Run `Select*FROM sys.sysusers` to get a list of all the users.
1. For each user, drop them and re-create them using the following script:
```
DROP USER [user@domain.com];
CREATE USER [user@domain.com] FROM EXTERNAL PROVIDER;
```
3. Once the steps above are completed, you may need to "reset" the cache by changing your Azure plan and reverting back to the old plan afterwards for you users to be able to log in.

After having completed the steps above, the SID will contain the current information, and you should be able to authenticate with the old users.
