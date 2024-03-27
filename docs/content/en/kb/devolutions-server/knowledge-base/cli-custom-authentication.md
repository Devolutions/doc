---
eleventyComputed:
  title: "{{ en.DVLSCONSOLE }} CLI custom authentication"
  description: This procedure is useful in case of an Azure Directory outage.
---
This procedure is useful in case of an Azure Directory outage.

{% snippet icon.badgeInfo %}
Please note that you should replace `dvls` (after ...`\wwwroot\`) with your own custom domain.
{% endsnippet %}

## Enabling custom authentication
In the CLI enter either:
```powershell
server instance --instance=C:\inetpub\wwwroot\dvls --enable-custom-authentication=true
```
or
```powershell
server instance --instance=C:\inetpub\wwwroot\dvls --custom-auth=true
```

### Disabling custom authentication
When done with the necessary operations:
```powershell
server instance --instance=C:\inetpub\wwwroot\dvls --enable-custom-authentication=false
```
or
```powershell
server instance --instance=C:\inetpub\wwwroot\dvls --custom-auth=false
```
