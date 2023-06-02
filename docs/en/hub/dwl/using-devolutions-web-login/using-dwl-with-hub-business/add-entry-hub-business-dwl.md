---
eleventyComputed:
  title: Add a Website Entry in {{ en.HUB }} Business with {{ en.DWL }}
---
{% snippet icon.badgeInfo %} 
This topic explains how to create an entry with your existing website credentials. If you have not yet created an account for the website, follow the instructions in [this topic](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/create-account-website-hub-business/) instead. 
{% endsnippet %}
 
Website entries can be created with {{ en.DWL }} in {{ en.DHUB }} Business. This type of entry is useful for saving your login credentials so that you do not have to remember them. These entries are also used by {{ en.DWL }} to recognize a website and [retrieve your credentials](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/retrieve-credentials-hub-business/) .  

The main way to achieve this is by successfully logging into the website. {{ en.DWL }} will automatically offer to save your credentials in a new website entry in {{ en.DHUB }} Business. It is also possible to manually create the website entry.  

Learn how to add a website entry by following the instructions from these sections:  

* [Automatically Add a Website Entry](#automatically-add-a-website-entry) 
* [Manually Add a Website Entry](#manually-add-a-website-entry) 

### Automatically Add a Website Entry 

1. Go to the login page of the website. This page will be different for each website; this topic will use the Atlassian website as an example.  
![Login Page](https://webdevolutions.azureedge.net/docs/en/hub/Hub2055.png) 
1. Websites usually ask for information such as an email address/username and a password. Follow the website’s login process until you log in to your account. 
1. A {{ en.DWL }}    ***Add Website*** window will pop up in the corner of your web browser.  
![Add Website](https://webdevolutions.azureedge.net/docs/en/hub/Hub2054.png) 
1. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed. 
1. Select the ***Vault*** and ***Folder*** in which to save your website entry. 
1. Click ***Save*** .  

Your credentials are now securely stored in a new website entry in {{ en.HUB }} Business. The next time you log in to the same account, {{ en.DWL }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/retrieve-credentials-hub-business/) .  

### Manually Add a Website Entry 

1. <a name="1"></a>Go to the login page of the website. This page will be different for each website; this topic will use the Atlassian website as an example.  
![!!Hub2055.png](https://webdevolutions.azureedge.net/docs/en/hub/Hub2055.png) 
1. Click on the {{ en.DWL }} extension icon in your browser toolbar and, in the ***Matching*** tab, click on the ***Add Website*** button.  
![Add Website Button](https://webdevolutions.azureedge.net/docs/en/hub/Hub2057.png) 
1. The {{ en.DWL }}    ***New Entry - Website*** tab will open in your browser.  
![New Entry - Website (General Tab)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2132.png) 
1. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed. 
1. Select the ***Vault*** and ***Folder*** in which to save your credentials. 
1. The ***Host*** drop-down list is set to ***Custom*** by default. This allows {{ en.DWL }} to automatically specify the ***URL*** in the next field with the login page URL from <a href="#1">step 1</a> . 
1. The ***Credentials*** drop-down list is set to ***Custom*** by default. This allows you to manually enter your ***Username*** , ***Domain*** , and ***Password*** in the next step. 
1. Provide the ***Username*** , ***Domain*** , and ***Password*** you use to log in to the website. You may not have a domain name to specify; in that case, leave the field blank. Also, depending on the website, your username may be your email address. 
1. The ***Compare type*** should be at ***Default*** and ***{{ en.DWL }}*** should be ***Enabled*** . 
1. Click ***Add*** .  

Your credentials are now securely stored in a new website entry in {{ en.HUB }} Business. The next time you log in to the same account, {{ en.DWL }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/retrieve-credentials-hub-business/) . 

