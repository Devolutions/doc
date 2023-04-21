---
title: OTP Usage with Entries
---
{{ en.RDM }} entries can be set up to use ***One Time Password (OTP)*** when launch.  

In the ***Connection - One Time Password*** section of an entry, select a credential ***Source*** and a ***Usage*** for the OTP code.  
![!!KB5004.png](/img/en/kb/KB5004.png)

For <a href="#source">Source</a> configuration information, select from the list or click this link to jump to the <a href="#usage">Usage</a> configuration information.

## Source <a name="source"></a>

Credential ***Source*** are used to link entries to OTP account credential information.  

### Current session's credentials

The ***Current session's credentials*** options will use the OTP credentials setup in the entry ***Common - General - Credentials*** section. Credentials options available with OTP are [***My personal credentials***](https://helprdm.devolutions.net/file_templates_mypersonalcredentials.html), ***My privileged account*** and ***Embedded*** (this mode is deprecated and not recommended).  

{% snippet icon.badgeCaution %}
In a team environment, we recommend using the <a href="#linked">Linked (Vault)</a> option instead with a ***One Time Password (OTP)*** credential entry.
{% endsnippet %}  

![!!KB5008.png](/img/en/kb/KB5008.png)

### Custom

Choose the ***Custom*** option to save the OTP credentials in the entry itself.  

![!!KB5005.png](/img/en/kb/KB5005.png)

### Inherited

The ***Inherited*** option will climb up the navigation tree until it has access to a set of OTP credentials in a parent folder in the ***Connection - One Time Password*** section.  

{% snippet icon.badgeInfo %}
***For the*** ***Source*** inheritance to work, the ***Connection - One Time Password - Source*** needs to be set to ***Inherited*** for every parent folder until it reaches the desired configuration.
{% endsnippet %}  

![!!KB5009.png](/img/en/kb/KB5009.png)

### Linked (Vault) <a name="linked"></a>

Link your entry to use an existing specific ***One Time Password (OTP)*** credential entry from the same vault. This is the preferred method.  

![!!KB5006.png](/img/en/kb/KB5006.png)

### None

By default, the entries OTP ***Source*** is set to ***None*** In this state the entry is not linked to any OTP credentials.

### Prompt

The ***Prompt*** option opens a credential list of available OTP credentials every time the session launch.

![!!KB5007.png](/img/en/kb/KB5007.png)

## Usage <a name="usage"></a>

One Time Password ***Usage*** is an option to affix the OTP code. Here is the list of possible actions:  

* ***None*** : No action is done. This is the set default setting.
* ***Append to the password*** : Affix the OTP after the password.
* ***Prepend to the password*** : Affix the OTP before the password.
* ***Specific to session*** : If selected, the OTP will, if it applies, be used in a manner specific to the session being launched. This option is specific for OpenVPN and SophosVPN.
* ***Inherited*** : Will climb up the navigation tree until it has access to a ***Usage*** setting in a parent folder in the ***Connection - One Time Password*** section. For the ***Usage*** inheritance to work, the ***Connection - One Time Password - Usage*** needs to be set to ***Inherited*** for every parent folder until it reaches the desired configuration.
* ***Append to the username*** : Affix the OTP after the username.
* ***Prepend to the username*** : Affix the OTP before the username.
