---
title: IT Glue Information
---
There are some limitations to the API provided by IT Glue due to it requiring a private API Key. This API Key acts as an authentication and provides access to the IT Glue organizations.  

For more information please look into this article under the section [Generating an API key](https://support.itglue.com/hc/en-us/articles/360004938078-Getting-started-with-the-IT-Glue-API)  

The important thing to remember is the following: All API endpoints require authentication using a private API key.  

{% snippet icon.shieldWarning %}
Whenever you send a request to the API, you send your key with it so that we know it&apos;s you. This means that anyone who has your key can access your data, so it’s important to keep it private. You can revoke an old API key and generate a new one at any time from your IT Glue account. Any requests made using your old key will no longer work.
{% endsnippet %}  

Therefore there are 2 choices when using IT Glue in {{ en.RDM }}  

1. Everyone is an administrator. Since you do not want to share the API Key with everyone, you can create a session in an ***Always prompt with list*** mode. However, this way everyone can access all credentials stored in the selected IT Glue organization. This isn&apos;t the best solution as far as security is concerned.
1. Have the administrator or someone trustworthy create specific entries targeting specific IT Glue credentials in {{ en.RDM }} Then you can use the {{ en.RDM }} permissions to decide who can ***View*** the entry and who can ***View Password*** If you choose this option, you would have to make sure to block the ***Edit*** permissions on all IT Glue entries as to ensure no one can edit the entry and choose a password which is not meant for them.
