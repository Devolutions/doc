---
  title: Run as another user
---
There are many different types of credentials and they are used by a multitude of users. Be it a mobile warrior, a sysadmin that follows best practices and does not log on to his computer using his domain admin account or even a safety conscious parent that creates limited accounts for the kids on the family computer. This requires the capability to start an application under a different set of credentials while we are already logged on using our main credentials.  

The problem is solved by using the Windows ***Run As*** command.

{% snippet icon.badgeInfo %}
The ***Run As*** command requires that the ***Secondary Logon*** service is running.
{% endsnippet %}

## Settings

In Windows you can manually start any process as a different user using <kbd>Shift</kbd>+right-click to get the context menu.  
![!!KB4565](https://webdevolutions.azureedge.net/docs/en/kb/KB4565.png)  

The ***Run As*** command has many parameters to change its behaviour, we will not cover them all here, but if you have an advanced scenario we suggest you consult the Windows help.

## Options

You have two options when it comes to ***Run As***:

### Built-in Run As

In {{ en.RDM }}, some sessions/tools types support the ***Run As*** functionality. For a complete list and configuration information, see [Built-In Run As](/kb/remote-desktop-manager/how-to-articles/run-as-another-user/built-in-runas/).

### Manual Run As

Your session type is not supported and need help to manually configure Run As? See [Manual Run As](/kb/remote-desktop-manager/how-to-articles/run-as-another-user/manual-runas/).
