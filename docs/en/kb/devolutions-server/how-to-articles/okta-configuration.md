---
title: Okta Configuration
---
The following steps will describe how to configure Okta as an authenticator for {{ en.DPS }}

## Prerequisite

- A subscription to Okta.
- A Web Application using OIDC configured on Okta.
- An Api token configured in Okta.

## Terms

In this topic we will assume that your instance of {{ en.DPS }} is configured in HTTPS, that the web application is {{ en.DPS }} and that it is therefore served under the URL https<area>://www.contoso.com/dvls.

## Configuration of an application in okta

![!!KB4069.png](/img/en/kb/KB4069.png)

1. Log into your Okta administration account.
1. Go to ***Applications*** in the ***Applications*** submenu and click on the ***Create App Integration*** button.
![!!KB4105.png](/img/en/kb/KB4105.png)
1. In the ***Sign-in method*** section select ***OIDC - OpenID Connect***
1. In the ***Application type*** section select ***Single-Page Application***
1. Click ***Next*** to continue.  
![!!KB4106.png](/img/en/kb/KB4106.png)
1. In the ***New Single-Page App Integration*** page presenting the configuration of the new application:  

    a. First, name the application in the ***App integration name*** field in order to find it in your application list in Okta.  

    b. Leave the ***Grant type*** option to ***Authorization Code***  

    c. Add the URI in the ***Sign-in redirect URIs*** section. In our example we added https<area>://www.contoso.com/dvls/api/external-provider-response  

    d. You could leave the ***Sign-out redirect URIs*** and the ***Trusted Origins*** sections empty. The {{ en.DPS }} does not log your user out of the application scope and the Okta login form is not hosted on {{ en.DPS }} therefore they are not necessary.  

    e. In the ***Assignments*** section, we recommend that you select ***Allow everyone in your organization to access*** and then check ***Enable immediate access with Federation Broker Mode*** This will save you from having to assign each user to the application manually.  
    
    f. Click ***Save***  
![!!KB4128.png](/img/en/kb/KB4128.png)

## Configuration of an API Key in okta

1. In the left side menu go to ***Security - Api***
1. In the ***Tokens*** tab click on the ***Create token*** button.  
![!!KB4216.png](/img/en/kb/KB4216.png)
1. Name the token to find it in your list then click ***Create token***  
![!!KB4195.png](/img/en/kb/KB4195.png)
1. Once created, copy the ***Token Value*** in a safe place.  

{% snippet icon.badgeCaution %}
If you do not copy the ***Token Value*** , you will not be able to find it afterward. You will have to create a new one.
{% endsnippet %}

{% snippet icon.badgeInfo %}
The token inherits the rights of the user who creates it. This is important because your user must be able to list groups and users. Okta recommends the creation of a ***Service user*** for the creation of Api tokens. You can read more on the subject from this Okta topic: [Create an API token](https://developer.okta.com/docs/guides/create-an-api-token/main/)
{% endsnippet %}

![!!KB4143.png](/img/en/kb/KB4143.png)

## Configuration of the authentication and the synchronization of users and groups in okta

Once the application and Api token are created, you can configure the {{ en.DPS }} web interface.

1. Log into the {{ en.DPS }} instance with an administrator account.
1. Go to the ***Administration - Server Settings - Authentication***
1. Check ***Authentication with Okta user***
1. In the ***Configuration*** section, click ***Okta Authentication***  
![!!KB4229.png](/img/en/kb/KB4229.png)
1. Optional: You can input an information in the ***Display Name*** field. This will be replacing the word ***Okta*** in the login page.
1. In the ***Authentication Configuration*** section, enter your Okta ***Domain***  
{% snippet icon.badgeInfo %}
To find your ***Domain*** go to your Okta account. In the top right corner of the screen, click on your user menu. Your domain should be visible.
{% endsnippet %}

![!!KB4141.png](/img/en/kb/KB4141.png)
1. In the same section of {{ en.DPS }}, fill the ***Client ID*** field with the ***Client ID*** of your application.  
![!!KB4129.png](/img/en/kb/KB4129.png)
1. In the ***Synchronize Users and Groups*** section fill in the ***Api token*** saved earlier.
1. Finally, if you wish, you can activate the ***Automatic User Creation*** This will prevent the administrator from having to import the ***Users*** manually to {{ en.DPS }} before they can connect with Okta. You can also select a ***User group*** In this case only the ***Users*** of this group will be able to benefit from the automatic creation.
1. Click the ***Save*** button.  
![!!KB4142.png](/img/en/kb/KB4142.png)
You will now be able to observe that the button allowing you to connect to Okta is now present in the login page.
{start="7"}