---
eleventyComputed:
  title: Create an Account for a Website with {{ en.DWL }}
  order: 10
---
{{ en.DWL }} assists you in creating a new account when you register on a website. It gives you the ability to create a secure password and save your new credentials.  

{% snippet icon.badgeInfo %} 
If you already have an account for the website, learn how to [Add a Website Entry with {{ en.DWL }}](/server/dwl/using-devolutions-web-login/add-website-entry-dwl/) instead. 
{% endsnippet %}
 
Follow the steps below to learn how to create a website account with {{ en.DWL }} and save your credentials in {{ en.DVLS }} .  

1. On the website for which you want to create your account, go to the registration/account creation page. This page will be different for each website; this topic will use the Atlassian website as an example 
![Registration Page](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2000.png)
1. Follow the website’s registration process until you get to the password field. 
1. Click on the {{ en.DWL }} icon in your browser toolbar, then select the ***Password Generator*** tab in the ***Side Menu*** of the extension. 
![Password Generator Tab](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2001.png)
1. You can now customize the password generation settings, but this is optional since the default settings already generate very strong passwords. That being said, it may be necessary to adjust the settings to meet the specific requirements of some websites. If you do not wish to customize the generation settings, you can skip to <a href="#5">step 5</a>. 
    1. Set a ***Password length*** . The default value is set to 12. 
    ![Password length](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2002.png)
    1. In the ***General*** settings, select the types of characters that your password must contain. The default is set to include uppercase letters, lowercase letters, and numbers, but it is also possible to include special characters in your password. 
     ![General Settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2003.png)
    1. In the same section next to the character types, select the minimum number of characters of each type that must be included in your password. The default values are set to 0. 
    1. In the ***Advanced*** settings, you can even further customize your password if desired. In the first field, enter characters you want included in your password, followed in the field to the right by the minimum number of times they must appear. In the second field, enter characters you want excluded from your password. 
     ![Advanced Settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2004.png)  

Your password settings are now configured.  

5. If desired, to change the current password, click on the ***Generate Password*** button until you are satisfied with the result.  <a name="5"></a>
![Generate Password](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2005.png) 
1. Click on the ***Copy to Clipboard*** button to copy the password. 
![Copy to Clipboard](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2006.png) 
1. Paste your password in the website’s corresponding field. 
![Paste Password](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2007.png) 
1. Follow the rest of the website’s registration steps until the {{ en.DWL }} ***Add Website*** window pops up in the corner of your web browser. 
![Add Website](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2008.png) 
1. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed. 
1. Select the ***Vault*** you want to save your credentials into. 
1. Provide a ***Destination folder*** in which to save your website entry. If you leave this field empty, the entry will be saved at the root of the vault. If the folder you specify does not exist, it will be created at the same time as your entry. 
1. Click ***Save*** .  

Your credentials are now securely stored in a new website entry in {{ en.DVLS }} . The next time you log in to the same account, {{ en.DWL }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/server/dwl/using-devolutions-web-login/retrieve-credentials-dwl/) . 

