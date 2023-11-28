---
eleventyComputed:
  title: Delinea Secret Server single sign-on 
  description: How to use Delinea Secret Server Single Sign-On in  {{ en.RDM }}.
---
Delinea Secret Server single sign-on (SSO) is supported in {{ en.RDM }}. 

{% snippet icon.badgeInfo %}
Consult our [Secret Server entry configuration guide](https://docs.devolutions.net/kb/remote-desktop-manager/how-to-articles/secret-server-entry-configuration/) to learn how to configure an entry to use ***Secret Server*** credentials.
{% endsnippet %} 

{% snippet icon.badgeInfo %}
SSO mode is available for both cloud and self-hosted (on-prem) instances. If SSO is selected but not supported, {{ en.RDM }}  automatically defaults to OAuth authentication and users must manually enter their username and password.
{% endsnippet %} 

### Configuration steps

1. Add a ***Secret Server*** entry in {{ en.RDM }}
1. Enter the entry configuration and select ***SSO*** in the ***Authentication mode*** field.
1. Click ***Add*** to create the entry.
![Select SSO in the Authentication mode field](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6154.png)
1. Open the entry.
1. Select a connection that is linked to your ***Secret Server*** entry. This will launch a browser window.
1. You will be prompted to select an account to authenticate with. Enter your ***Secret Server*** login credentials.

From within {{ en.RDM }}, you will be able to see the ***Secret Server*** credentials that you can access.  