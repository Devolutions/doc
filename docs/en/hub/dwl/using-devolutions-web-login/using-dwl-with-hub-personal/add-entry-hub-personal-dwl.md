---
eleventyComputed:
  title: Add an Entry in {{ en.HUB }} Personal with {{ en.DWL }}
---
Website, credit card, contact, and secure note entries can be created with {{ en.DWL }} in {{ en.DHUB }} Personal. To add a website entry, continue to the [next section](#add-a-website-entry) . For all other types of entries, go to [this section](#add-another-type-of-entry) instead.  

## Add a Website Entry 

{% snippet icon.badgeInfo %} 
This section explains how to create an entry with your existing website credentials. If you have not yet created an account for the website, follow the instructions in [this topic](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-personal/create-account-website-hub-personal/) instead. 
{% endsnippet %}
 
The website entry is useful for saving your login credentials so that you do not have to remember them. These entries are also used by {{ en.DWL }} to recognize a website and [retrieve your credentials](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-personal/retrieve-credentials-hub-personal/) .  

The main way to achieve this is by successfully logging into the website. {{ en.DWL }} will automatically offer to save your credentials in a new website entry in {{ en.DHUB }} Personal. It is also possible to manually create the website entry.  

Learn how to add a website entry by following the instructions from these sections:  

* [Automatically Add a Website Entry](#automatically-add-a-website-entry) 
* [Manually Add a Website Entry](#manually-add-a-website-entry) 

### Automatically Add a Website Entry 

1. Go to the login page of the website. This page will be different for each website; this topic will use the Atlassian website as an example.  
![!!Hub2055.png](https://webdevolutions.azureedge.net/docs/en/hub/Hub2055.png) 
1. Websites usually ask for information such as an email address/username and a password. Follow the website’s login process until you log in to your account. 
1. A {{ en.DWL }}    ***Add Website*** window will pop up in the corner of your web browser.  
![!!Hub2069.png](https://webdevolutions.azureedge.net/docs/en/hub/Hub2069.png) 
1. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed. 
1. The ***Username*** and the ***Password*** are automatically filled in with the information you previously entered. Verify that they are correct. 
1. Select a ***Folder*** in which to save your website entry. 
1. Click ***Save*** .  

Your credentials are now securely stored in a new website entry in {{ en.DHUB }} Personal. The next time you log in to the same account, {{ en.DWL }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-personal/retrieve-credentials-hub-personal/) .  

### Manually Add a Website Entry 

1. <a name="1"></a>Go to the login page of the website. This page will be different for each website; this topic will use the Atlassian website as an example.  
![!!Hub2055.png](https://webdevolutions.azureedge.net/docs/en/hub/Hub2055.png) 
1. Click on the {{ en.DWL }} extension icon in your browser toolbar and, in the ***Matching*** tab, click on the ***New Entry*** button.  
![New Entry Button](https://webdevolutions.azureedge.net/docs/en/hub/Hub2070.png) 
1. Click on ***Website*** .  
![New Website Entry](https://webdevolutions.azureedge.net/docs/en/hub/Hub2071.png) 
1. The {{ en.DWL }}    ***New Entry - Add Website*** tab will open in your browser.  
![New Entry - Website (General Tab)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2135.png) 
1. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed. 
1. Select a ***Folder*** in which to save your credentials. 
1. The ***Host*** drop-down list is set to ***Custom*** by default. This allows {{ en.DWL }} to automatically specify the ***URL*** in the next field with the login page URL from <a href="#1">step 1</a>. 
1. The ***Credentials*** drop-down list is set to ***Custom*** by default. This allows you to manually enter your ***Username*** , ***Domain*** , and ***Password*** in the next step. 
1. Provide the ***Username*** , ***Domain*** , and ***Password*** you use to log in to the website. You may not have a domain name to specify; in that case, leave the field blank. Also, depending on the website, your username may be your email address. 
1. The ***Compare type*** should be at ***Default*** and ***{{ en.DWL }}*** should be ***Enabled*** . 
1. Click ***Add*** .  

Your credentials are now securely stored in a new website entry in {{ en.DHUB }} Personal. The next time you log in to the same account, {{ en.DWL }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-personal/retrieve-credentials-hub-personal/) .  

## Add Another Type of Entry 

You can manually add ***Credit Card*** , ***Contact*** , and ***Secure Note*** entries in {{ en.DHUB }} Personal for easy access via the {{ en.DWL }} browser extension.  

The process is the same for all entry types, but the information to be filled in will be different due to the nature of each entry type. Follow the steps below:  

1. Click on the {{ en.DWL }} extension icon in your browser toolbar and, in the ***Matching*** tab, click on the ***New Entry*** button.  
![New Entry Button](https://webdevolutions.azureedge.net/docs/en/hub/Hub2070.png) 
1. Click on the entry type you want to create between ***Credit Card*** , ***Contact*** , and ***Secure Note*** . For a ***Website*** entry, follow the steps in the [previous section](#add-a-website-entry) .  
![New Credit Card, Contact, or Secure Note Entry](https://webdevolutions.azureedge.net/docs/en/hub/Hub2074.png) 
1. The {{ en.DWL }}    ***New Entry*** tab will open in your browser. As an example, the image below represents the tab for a credit card entry which differs slightly from the tabs for other types of entries.  
![New Entry - Credit Card (General Tab)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2075.png) 
1. Fill in your entry information. The only mandatory information is the ***Name*** ; all other information is optional, so you can enter only the information that is useful to you. We recommend that you also specify the ***Folder*** in which your entry will be saved for easy access.  

{% snippet icon.badgeInfo %} 
For a ***Secure Note*** entry, you can specify a ***Type*** of text for your note. Unless you know how to use ***Markdown*** (a markup language for formatting text), select ***Plain text*** . 
{% endsnippet %}
 
5. Click ***Add*** .  

Your information is now securely stored in a new entry in {{ en.DHUB }} Personal. 

