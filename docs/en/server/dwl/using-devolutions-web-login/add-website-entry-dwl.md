---
eleventyComputed:
  title: Add a website entry with {{ en.DWL }}
---
{% snippet icon.badgeInfo %} 
This topic explains how to create an entry with your existing website credentials. If you have not yet created an account for the website, see [Create an account for a website with {{ en.DWL }}](/server/dwl/using-devolutions-web-login/create-account-website-dwl/) instead. 
{% endsnippet %}
 
Website entries can be created with {{ en.DWL }} in {{ en.DVLS }}. This type of entry is useful for saving your login credentials so that you do not have to remember them. These entries are also used by {{ en.DWL }} to recognize a website and [retrieve your credentials](/server/dwl/using-devolutions-web-login/retrieve-credentials-dwl/).  

The main way to achieve this is by successfully logging into the website. {{ en.DWL }} will automatically offer to save your credentials in a new website entry in {{ en.DVLS }}. It is also possible to manually create the website entry.  

## Add a website entry  

### Automatically Add a Website Entry 

1. Go to the login page of the website. This page will be different for each website; this topic will use the Atlassian website as an example.  
![Login Page](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2009.png) 
1. Websites usually ask for information such as an email address/username and a password. Follow the website’s login process until you log in to your account. 
1. A {{ en.DWL }} ***Add Website*** window will pop up in the corner of your web browser. 
![Add Website](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2010.png) 
1. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed. 
1. Select the ***{{ en.VLT }}*** you want to save your credentials into. 
1. Provide a ***Destination folder*** in which to save your website entry. If you leave this field empty, the entry will be saved at the root of the {{ en.VLT }}. If the folder you specify does not exist, it will be created at the same time as your entry. 
1. Click ***Save***.  

Your credentials are now securely stored in a new website entry in {{ en.DVLS }}. The next time you log in to the same account, {{ en.DWL }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/server/dwl/using-devolutions-web-login/retrieve-credentials-dwl/).  

### Manually Add a Website Entry 

1. Go to the login page of the website. This page will be different for each website; this topic will use the Atlassian website as an example. <a name="1"></a>
![Login Page](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2009.png) 
1. Click on the {{ en.DWL }} extension icon in your browser toolbar and, in the ***Matching*** tab, click on the ***Add Website*** button. 
![Add Website Button](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2011.png) 
1. The {{ en.DWL }} ***Add Website*** tab will open in your browser. 
![Add Website](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2049.png) 
1. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed. 
1. The ***URL*** field is automatically filled in with the login page URL from <a href="#1">Step 1</a>.
1. The ***Credentials*** drop-down list is set to ***Custom*** by default. This allows you to manually enter your ***Username*** and ***Password*** in the next step. 
1. Provide the ***Username*** and ***Password*** you use to log in to the website. Depending on the website, your username may be your email address. 
1. If desired, enter a ***Description*** of your entry. 
1. Select the ***{{ en.VLT }}*** you want to save your credentials into. 
1. Provide a ***Destination folder*** in which to save your website entry. If you leave this field empty, the entry will be saved at the root of the {{ en.VLT }}. If the folder you specify does not exist, it will be created at the same time as your entry. 
1. Click ***Save***.  

Your credentials are now securely stored in a new website entry in {{ en.DVLS }}. The next time you log in to the same account, {{ en.DWL }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/server/dwl/using-devolutions-web-login/retrieve-credentials-dwl/).
