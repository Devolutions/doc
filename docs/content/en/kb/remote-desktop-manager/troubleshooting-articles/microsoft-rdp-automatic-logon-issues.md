---
eleventyComputed:
  title: Microsoft RDP automatic logon issues
---
Sometimes the automatic logon does not function and your credentials are requested by the remote system. Here are some steps to help identify the issue. Support for automatic logon was introduced on Windows 2003/XP, so ensure you are trying to connect to these or later versions. Windows 2000 does not support the automatic login.

## RDP Sessions connect successfully when in External mode, but not in Embedded mode.

This issue may be caused by a bad authentication negotiation because in some cases Single Sign On (SSO) requires Network Level Authentication (NLA). It can happen when prompting for credentials and when using automatic logon.

Check the ***Activate network level authentication NLA (SingleSignOn)*** in the ***Connection*** tab of your session.

{% snippet icon.badgeInfo %}
You might also have to check the ***Public mode*** option in the ***Advanced*** tab to make it work.
{% endsnippet %}

![!!KB4041](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4041.png)

## The connection was denied because the user account is not authorized for remote login

We have discovered that enabling the ***Public mode*** option in the ***Advanced*** tab resolves the issue.

![!!KB4042](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4042.png)

## Ensure credentials are entered properly

RDM allows for advanced credential management. Depending on your choice of: ***Custom***, ***Linked ({{ en.VLT }})***, ***Embedded*** or ***Inherited*** ensure the credentials are properly entered.

{% snippet icon.badgeCaution %}
Ensure that ***Always ask password*** is not checked.
{% endsnippet %}

![!!KB4043](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4043.png)
