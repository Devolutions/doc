---
eleventyComputed:
  title: Onboarding
  description: When opening your {{ en.RDM }} application for the first time, an Onboarding process will begin to help you get started with {{ en.RDM }}.
---
When opening your {{ en.RDM }} application for the first time, an Onboarding process will begin to help you get started with {{ en.RDM }}. Here are the steps that you will go through during this initial configuration.

## Step 1: Create your data source

![Create your data source](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2174.png)  

To get started, you must configure a data source. A data source is at the heart of {{ en.RDM }}. It is the vault that contains all of your precious and sensitive data.  

You will have to select between three option:  
* ***Local (Free)***: Select this option if you intend to access your data source from this device only. You will then be guided to configure a [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/) data source, which is fast and easy-to-use and accessible locally. 
* ***Online (Free)***: Select this option if you intend to access your data source anywhere from many devices. You will then be guided to configure a [{{ en.DHUBP }}](/rdm/windows/data-sources/data-sources-types/hub-personal/) data source, which is a highly-secure, flexible and easy-to-use cloud-based password management solution.  
* [***Team (Subscription)***](/rdm/windows/installation/onboarding/#team-subscription): Select this option if you want all your team members to be able to securely access the data source. You will then have a choice between different [advanced data sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).

{% snippet icon.badgeInfo %}
Skipping the creation of your data source will end the Onboarding process.
{% endsnippet %}  

### Team (Subscription)

![Team (Subscription)](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2175.png)  

Select the data source you are going to use:  
* [***{{ en.DHUBB }}***](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/hub-business/): Select {{ en.DHUBB }} for a highly-secure, flexible and easy-to-use cloud-based password management solution for team environments. You will then be prompted to enter your ***Email*** to connect to your {{ en.DA }}, and to select which of your {{ en.HUB }}s to use (if you have access to multiple ones).
* [***{{ en.DVLS }}***](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/): Select {{ en.DVLS }} for a highly-secure, self-hosted server application for team environments. You will then be prompted to enter the {{ en.DVLS }} ***Host*** and the ***Username*** you use to connect to it.
* ***Other***: Select this option if your data source does not appear in this list. You will then be prompted to select another data source type and to enter information to configure it. The information to provide depends on the data source.
* ***Data Source Configuration (.rdd)***: Select this option if you have previously exported and saved a data source configuration file (.rdd) and want to import it in your {{ en.RDM }} application. You will then be prompted to select the file on your computer.

## Step 2: Manage your entries

![Manage your entries](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2176.png)  

{% snippet icon.badgeInfo %}
If you selected a data source configuration file (.rdd), this step is skipped.
{% endsnippet %}  

The next step involves managing your entries in your data source. Entries are used to store your information within {{ en.RDM }}. We offer multiple methods of creating entries, from imports to scans. You can also forego these methods and create entries manually.  

If you decide to import entries, you must first have exported and saved a file in one of these formats:  
* [***CSV (.csv)***](/rdm/windows/commands/file/import/generic-csv-wizard/strategies-file-format/) (import a CSV file or paste CSV text)
* [***RDM (.rdm)***](/rdm/windows/commands/file/import/rdm/strategies-file-format/)
* ***Royal TS (.rts, .rtsx, .rtsz)***
* ***RDCMan (.rdg)***

{% snippet icon.badgeInfo %}
You can always import files later.
{% endsnippet %}  

## Step 3: User Interface Profile

![User Interface Profile](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2177.png)  

Usage profiles allow users to have a tailored experience in {{ en.RDM }} based on their tasks and roles. Select the user interface profile that best matches your needs:  
* ***IT professional***: This profile displays all entry types and options provided the user has the necessary permissions to access them. This profile offers all of what our solutions have to offer, advanced options, and access to all entries and information.
* ***Business user***: This profile is specifically designed for users who do not require access to view remote connection entries, administrative options, or advanced properties. Our interfaces have been streamlined to minimize options that are primarily intended for IT Professionals, allowing business users to focus on their daily tasks without unnecessary complexities.
* ***Choose later***: You can set a profile later in the [***Account***](/rdm/windows/user-interface/navigation-pane/account/) tab of the ***{{ en.NPANE }}***. In the meantime, you will be assigned the default profile.

{% snippet icon.badgeInfo %}
For a detailed overview of both profiles, see [Usage profiles](/rdm/windows/user-interface/customization/usage-profiles/).
{% endsnippet %}  

## Step 4: UI Options

![UI Options](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2178.png)  

Select your favorite [theme](/rdm/windows/user-interface/customization/theme/) (***System***, ***Light***, or ***Dark***) and [menu display](/rdm/windows/user-interface/customization/style/) (***Ribbon*** or ***Menu***). When you are done, click ***Continue*** to go to the last step.

## Step 5: Join the community

![Join the community](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2179.png)  

In this last step, you can subscribe to our email list and join the {{ en.DFORCE }}. Both are free!  

Our email list unlocks exclusive access to:  
* Product News  
* Best Practices and Pro Tips  
* Security Advisories  

The {{ en.DFORCE }} gets you VIP access to:  
* Promos, beta tests, and news  
* The Devolutions Team  
* Geeky rewards and Devolutions products  

When you are done, click ***Finish*** to end the Onboarding process and start using {{ en.RDM }}!
