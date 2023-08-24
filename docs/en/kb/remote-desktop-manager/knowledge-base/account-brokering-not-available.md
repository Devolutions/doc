---
title: Account brokering not available for certain tools
description: With Privileged Access Management (PAM) solutions, it is often times undesirable to allow passwords to be viewed under any circumstances.
keywords:
- Privileged Access Management
- PAM
- Brokering
---
With Privileged Access Management (PAM) solutions, it is often times undesirable to allow passwords to be viewed under any circumstances. In {{ en.DVLS }} (as with a few partners..) we offer two distinct permissions: one to view the password; another to have {{ en.RDM }} use the password in your name. At Devolutions, we call this Account Brokering, others call this "*for/by proxy*". Our best analogy is that {{ en.RDM }} is the concierge that; rather than loaning you a key to access a room, will instead go open the door for you.  

This creates a challenge with {{ en.RDM }} as, since its creation, it has been designed for: 
* ease-of-use; 
* utmost flexibility; 
* and to integrate with now close to 160 different technologies.  

For some of these technologies, it was extremely difficult to limit how the password was being used and the only choice to limit exposure was to block the whole technology at the root. Some example entries are: Command Line; PowerShell; Management Tools.  

This is not to say that we will not be able to enable them in the future, but at this juncture we did not have a choice. Our Macro system and variables, paired with the risk that malicious users would simply replace a tool with one they would have built themselves, created an attack area much too big to tackle.  

In {{ en.DVLS }}, you can grant the permission to ***View the password*** which will resolve the issue, but if your security posture forbids it, or if you use one of our integrations that does not offer that choice, there is not a workaround at this time. 

