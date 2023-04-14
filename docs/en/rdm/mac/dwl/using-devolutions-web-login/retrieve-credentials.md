---
eleventyComputed:
  title: Retrieve Credentials with {{ en.DWL }}
---
{% snippet icon.badgeInfo %} 
You need website entries in {{ en.RDM }} to be able to retrieve their credentials. If that is not the case, start by [adding a website entry with {{ en.DWL }}](/rdm/mac/dwl/using-devolutions-web-login/add-website-entry-with-dwl/) . 
{% endsnippet %}
 
{{ en.DWL }} facilitates access to your credentials by automatically matching websites to saved credentials in {{ en.RDM }} for Mac website entries. It is also possible to filter through your entries via {{ en.DWL }} to manually find your credentials.  

After the [installation](/rdm/mac/dwl/installation/) of {{ en.DWL }} and its [pairing](/rdm/mac/dwl/first-login-devolutions-web-login/) with {{ en.RDM }} for Mac, you can immediately use the extension to retrieve your credentials. However, you may want to modify some of the settings to customize your experience. We recommend that you follow the steps in the [Settings](#settings) section first: they will guide you through setting up {{ en.DWL }} by suggesting best practices for retrieving credentials. You can also skip the configuration and go straight to [Retrieving credentials](#retrieving-credentials) .  

## Settings 

1. Click on the {{ en.DWL }} extension button in your browser, then click on the ***Settings*** icon.  
![Settings Icon](/img/en/rdm/mac/RDMMac2051.png) 
1. Click on ***General*** in the ***Configuration*** section.  
![Settings – Configuration – General](/img/en/rdm/mac/RDMMac2027.png) 
1. In the ***General*** tab, the ***Show icon in fields*** setting should be enabled by default. If not, check the box next to the option to enable it. 
{% snippet icon.badgeNotice %} 
With this option enabled, a {{ en.DWL }} icon is displayed in every credential fields on the websites you visit. This makes it easier to select the correct entry from which to retrieve your credentials, especially when more than one is available. 
{% endsnippet %} 
 
![General – Show icon in fields](/img/en/rdm/mac/RDMMac2028.png) 

4. Click ***Save*** . 
1. Click on ***{{ en.RDM }}*** in the ***Data sources*** section.  
![Settings – Data sources – Remote Desktop Manager](/img/en/rdm/mac/RDMMac2029.png) 
1. In the ***Actions*** tab, enable the ***Automatically retrieve credentials on page load*** and ***Automatically fill in credentials on load*** options by checking the boxes next to them. Below is a description of each setting:  

* ***Automatically retrieve credentials on page load*** (enabled by default): Allows {{ en.DWL }} to automatically search for available credentials when loading a web page. 
* ***Automatically fill in credentials on load*** (disabled by default): Credentials fields are automatically filled in when loading a web page. This only works if you only have one set of credentials for a given website.  
![Actions – Automatically retrieve and fill credentials on page load](/img/en/rdm/mac/RDMMac2030.png) 

{% snippet icon.badgeInfo %} 
If the ***Automatically submit the form after filling*** setting is enabled, the credentials are automatically submitted when the fields are filled. Enabling it is optional as it is not a best practice. 
{% endsnippet %}
 
7. Click ***Save*** .  

You can now continue to the [next section](#retrieving-credentials) to learn how to retrieve your website entry credentials. 

## Retrieving Credentials 

{% snippet icon.badgeInfo %} 
This section is based on the {{ en.DWL }} configuration steps from the [previous section](#settings) . We highly recommend that you follow them before going forward, as some features may differ between your experience and what is shown below. 
{% endsnippet %}
 
Credentials can be retrieved from {{ en.RDM }} automatically or manually via {{ en.DWL }} . Follow the steps from the section that best suits your needs:  

* [Automatically retrieving credentials](#automatically-retrieving-credentials) 
* [Manually retrieving credentials](#manually-retrieving-credentials) 

### Automatically Retrieving Credentials 

1. Go to the login page of the website you want to access. This page will be different for each website; this section will use the Atlassian website as an example. One of two scenarios can happen:  
    1. If you only have one set of credentials for this website, the login fields should already be filled in with your credentials. If that is the case, follow the login process of the website until you successfully log in to your account. You do not have to follow the next step.  
    ![Automatically Filled Credentials Fields](/img/en/rdm/mac/RDMMac2053.png) 
    1. If you have more than one set of credentials or if your credentials are not filled in, click on the {{ en.DWL }} icon in the credential field and select the entry that contains your credentials for that website. If multiple entries are available, you can search for the one you want using the ***Filter*** bar. Follow the rest of the website's login process until you successfully log in to your account.  
    ![Entry Filter and Selection](/img/en/rdm/mac/RDMMac2054.png) 

### Manually Retrieving Credentials 

Depending on the options you have enabled/disabled, you may need to retrieve your credentials manually:  

1. Go to the login page of the website you want to access. This page will be different for each website; this section will use the Atlassian website as an example. 
1. Click on the {{ en.DWL }} extension in your browser. Website entries that are linked to this website will appear. 
1. Click on the website entry that contains the credentials for this website. If multiple entries are available, you can use the ***Filter*** bar to find the one you need.  
![Entry Selection](/img/en/rdm/mac/RDMMac2055.png) 
1. Your credentials will be transferred to the credentials fields of the website. Follow the rest of the website's login process until you successfully log in to your account.  
![Credentials Transfer in Corresponding Fields](/img/en/rdm/mac/RDMMac2052.png) 

