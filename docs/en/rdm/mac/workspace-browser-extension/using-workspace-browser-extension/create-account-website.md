---
eleventyComputed:
  title: Create an account for a website with the {{ en.WBEX }}
  order: 10
---
The {{ en.WBEX }} assists you in creating a new account when you register on a website. It gives you the ability to create a secure password and save your new credentials.

{% snippet icon.badgeInfo %}
If you already have an account for a website, visit [Add a website entry with the {{ en.WBEX }}](/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/add-website-entry-with-workspace-browser-extension/).
{% endsnippet %}

Follow the steps below to learn how to create a website account with the {{ en.WBEX }} and save your credentials in {{ en.RDMMAC }}.  

1. On the website for which you want to create your account, go to the registration/account creation page. This page will be different for each website; this topic will use the Atlassian website as an example.  
![Registration Page](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2008.png)
1. Follow the website's registration process until you get to the password field.
1. Click on the {{ en.WBEX }} icon in your browser toolbar, then select the Password Generator in the ***Side menu*** of the extension.  
![Password Generator Tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2009.png)
1. You can now customize the password generation settings, but this is optional since the default settings already generate very strong passwords. That being said, it may be necessary to adjust the settings to meet the specific requirements of some websites. If you do not wish to customize the generation settings, you can skip to step 5.
    1. Select a ***Password length***. The default value is set to 12.  
![Password length](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2010.png)
{type="a"}
    1. In the ***General*** settings, select the types of characters that your password must contain. The default is set to include uppercase letters, lowercase letters, and numbers, but there is also the option to include special characters in your password.  
![General Settings](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2011.png)
    1. In the same section next to the character types, select the minimum number of characters of each type that must be included in your password. The default values are set to 0.
    1. In the ***Advanced*** settings, you can even further customize your password if desired. In the first field, enter characters you want included in your password, followed in the field to the right by the minimum number of times they must appear. In the second field, enter characters you want excluded from your password.  
![Advanced Settings](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2012.png)

Your password settings are now configured.  

5. If desired, to change the current password, click on the ***Generate Password*** button until you are satisfied with the result.  
![Generate Password](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2013.png)
1. Click on the ***Copy to Clipboard*** button to copy the password.  
![Copy to Clipboard](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2014.png)
1. Paste your password in the website's corresponding field.
![Paste Password](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2015.png)
1. Follow the rest of the website’s registration steps until the {{ en.WBEX }} ***Add Website*** window pops up in the corner of your web browser.  
![Add Website](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2016.png)
1. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed.
1. Provide a ***Destination folder*** in which to save your website entry. If you leave this field empty, the entry will be saved at the root of the {{ en.VLT }}. If the folder you specify does not exist, it will be created at the same time as your entry.
1. Select if you want to save your entry in your ***{{ en.UVLT }}*** or in a ***{{ en.VLT }}***. Note that to create your entry in the {{ en.VLT }} of your choice, the corresponding {{ en.VLT }} must currently be opened in {{ en.RDMMAC }}.
1. Click ***Save***.  

Your credentials are now securely stored in a new website entry in {{ en.RDMMAC }}. The next time you log in to the same account, the {{ en.WBEX }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/retrieve-credentials/).
