---
eleventyComputed:
  title: Account
  description: The ***Account*** tab gives you access to settings for customizing your {{ en.RDM }} interface.
---
The ***Account*** tab gives you access to settings for customizing your {{ en.RDM }} interface. At the top, information about the account connected to RDM is displayed.  
![Account tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2165.png)  

## Settings

{% snippet icon.badgeInfo %} 
Changes made under the ***Settings*** section are applied to your {{ en.RDM }} application. This means that even if you change account or data source, the settings will still be in effect.
{% endsnippet %}  

Under ***Settings***, you can choose the [theme](/rdm/windows/user-interface/customization/theme/) of your RDM application between the ***Light*** theme and the ***Dark*** theme. You can also choose to mirror your system's theme.  

Next, you can also change the [style of the main header (top menu)](/rdm/windows/user-interface/customization/style/) of your RDM application. Choose between a ***Ribbon*** view or a ***Menu*** view.

## User Interface Profile

{% snippet icon.badgeInfo %} 
Usage profile changes are applied to your account in the current data source. This means that if you change your usage profile in a {{ en.DHUB }} or {{ en.DVLS }} data source in RDM, the change will also be made in the web interface of that data source, and vice versa.
{% endsnippet %}  

***Usage profiles*** allow users to have a tailored experience in RDM and other Devolutions products based on their tasks and roles.  

* ***IT professional***: This profile displays all entry types and options provided the user has the necessary permissions to access them. This profile offers all of what our solutions have to offer, advanced options, and access to all entries and information.  
* ***Business user***: This profile is specifically designed for users who do not require access to view remote connection entries, administrative options, or advanced properties. Our interfaces have been streamlined to minimize options that are primarily intended for IT Professionals, allowing business users to focus on their daily tasks without unnecessary complexities.  

{% snippet icon.badgeHelp %} 
For a more detailed overview of the characteristics of the profiles, see [Usage profiles](/rdm/windows/user-interface/customization/usage-profiles/).
{% endsnippet %}  

The profile can also be selected during the RDM Onboarding process. If none is chosen, the user will be assigned the ***Default*** profile, which can be changed in ***File – Options – User Interface – Usage profile*** or in the web interface.  
