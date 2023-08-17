---
title: Copy Entries from User Vault to a Vault
keywords:
- Private vault
---
In order to be able to copy some entries stored in your {{ en.UVLT }} to another vault without doing an Export/Import in {{ en.RDM }}, you would need to do the following:  
{% snippet icon.badgeCaution %}
For this to work, some permissions in ***Administration - System Permissions*** needs to be allowed for standard users.  

Copy feature: Allow ***Export*** and ***Copy Password*** permissions on the source folder.  

Paste feature: Allow ***Import*** and ***Add*** permissions on the destination folder.  
{% endsnippet %}  

1. Select the entries from your {{ en.UVLT }} that you wish to add to your main.
1. Right-click on them.
1. Select ***Clipboard - Copy***
1. Make sure that the ***Change ID*** option is checked in the ***Copy Options*** window.
1. Move to your main vault, select the folder in which you wish to add your entries and right-click on it.
1. Select ***Clipboard - Paste***
