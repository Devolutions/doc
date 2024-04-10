---
eleventyComputed:
  title: Team tips
  status: Topic available in German language
  keywords:
  - role
---
Here are five {{ en.RDM }} team tips.

## Security, users, and user groups

Sharing session information is great -- but controlling access is bliss.

Through {{ en.RDM }}'s User groups system, you can control access and user rights for specific sessions and actions.

Start by creating user groups and naming them accordingly to what you expect them to be able to view and use. Then assign users to them. Now all you have to do is assign user groups to entries and folders according to your wishes.

## Streamlined deployment with the {{ en.CI }}

Okay: you are ready to deploy {{ en.RDM }} and make everyone see you as the company hero. You have manually configured your data sources, specified your license, and defined system options. You can feel the excitement coursing through your veins. You are on a mission!

But wait – before you go live, why not have us create a [{{ en.CI }}](/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/) for you? Once we do that, your grateful team will only need to install the resulting MSI file to access their ready-to-use pre-configured {{ en.RDM }} installation. You will be loved by one and all, perhaps with a parade, a state, or an award named after you.

## Version management

Here is a familiar scenario: your team has been using {{ en.RDM }} for months or even years, and all is well. Then along comes a new version full of cool new features, and you think that everyone in your company should upgrade. This window below depicts the different options at your disposal to control client versions.
![Version management](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6164.png)

{% snippet icon.badgeHelp %}
See [Licenses](/rdm/windows/commands/administration/management/licenses/) and [Version management](/rdm/commands/administration/settings/system-settings/version-management/) for more information.
{% endsnippet %}

## System settings

The general tab of the ***Administration – System Settings*** form allows you to easily control security aspects.

A great team feature here is the System Message, which allows an administrator to inform users of upcoming system downtime, policy change or anything else. Each user will get the message when they connect to the data source or the message is changed. Use it to display company confidentially clauses or, if you wish, create chaos with a message like the one below. A little bit of chaos is good for the soul.

![System message](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6113.png)

## {{ en.DVLS }}

Do you need Active Directory integration? Or perhaps you have off-site users who need to access the shared data source, but do not want to use a VPN connection? Maybe you want more security and caching? {{ en.DVLS }} delivers all that and much more!

You self-host {{ en.DVLS }} and can decide to publish the instance only on your intranet (locally); or go all the way and offer it online (private cloud). This allows you to create an enterprise-wide high-end data store. Find out more about {{ en.DVLS }} at [http://server.devolutions.net/](http://server.devolutions.net/).
