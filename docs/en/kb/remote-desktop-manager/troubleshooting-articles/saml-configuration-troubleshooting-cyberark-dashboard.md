---
title: SAML Configuration and Troubleshooting for CyberArk Dashboard
---
You can set up SAML authentication for your ***CyberArk Dashboard*** entry.
For the general configuration of your entry, refer to the [CyberArk Dashboard Configuration and Use](/kb/remote-desktop-manager/how-to-articles/cyberark-dashboard-configuration/) topic.

{% snippet icon.badgeCaution %}
Note that SAML authentication for CyberArk Privilege Cloud is currently **not** supported.
{% endsnippet %}

## SAML Authentication Configuration

In the ***General*** section of the ***CyberArk Dashboard*** entry properties, you need to select the ***SAML Authentication mode***.

If you are using a version of {{ en.RDM }} prior to 2023.1, the ***IdP sign-in URL*** field will appear after you select SAML authentication. This field does not exist in 2023.1 and later versions, and the information does not need to be provided. There are two ways to get this URL: through your CyberArk Identity Administration portal account or through your Azure portal account.

### CyberArk Method

1. Connect to your CyberArk Identity Administration portal account.
1. In the left menu, go to ***Apps – Web Apps***
1. Click on your SAML application (or create an application if you do not have one yet).
1. In the ***Trust*** page of your application, go to the ***Identity Provider Configuration*** section and select ***Manual Configuration***.
1. Copy the ***IdP Entity ID / Issuer*** URL.
1. Paste the URL in the ***IdP sign-in URL*** field in {{ en.RDM }}.

### Azure Method

1. Connect to your Azure account.
1. Click on ***Azure active Directory*** in the ***Azure services*** section.
1. In the left menu, select ***Enterprise applications***
1. Click on your SAML application to go to its ***Overview*** (or create an application if you do not have one yet).
1. In the left menu, select ***Properties***.
1. Copy the ***User access URL***.
1. Paste the URL in the ***IdP sign-in URL*** field in {{ en.RDM }}.

## SAML Troubleshooting

When connecting to your ***CyberArk Dashboard*** entry configured with SAML authentication, you may encounter an issue where your safe selector is empty. We recommend updating {{ en.RDM }} to at least version 2023.1 as improvements have been implemented in this version for the SAML authentication mode. Follow the steps below:
1. Download and install / update {{ en.RDM }} to version 2023.1 or later.

{% snippet icon.badgeNotice %}
If you are using a shared data source, we recommend to use a portable version of {{ en.RDM }} on a local data source to test.
{% endsnippet %}

2. In {{ en.RDM }}, create your ***CyberArk Dashboard*** entry. Make sure it is created from the 2023.1 version and **not** the previous version.
1. Enter the necessary information. Refer to the [CyberArk Dashboard Configuration and Use](/kb/remote-desktop-manager/how-to-articles/cyberark-dashboard-configuration/) topic for more information. As mentioned previously in the current topic, you do not have to specify the ***IdP sign-in URL*** in the 2023.1 version (the field does not exist anymore).
1. Once your entry is created, go to ***File – Options – Advanced***.
1. Click the link at the bottom that leads to your {{ en.RDM }} configuration files.
1. Open the folder called "WebView2.Cache", then delete the "CyberArk_SAML" folder that is inside.
1. Try to connect again to your entry. You may need to refresh or restart {{ en.RDM }} for this solution to work.
