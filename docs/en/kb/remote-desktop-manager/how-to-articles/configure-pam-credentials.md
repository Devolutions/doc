---
eleventyComputed:
  title: Configure {{ en.DVLS }} PAM in {{ en.RDM }}
  description: 
---
Using the PAM 

## Steps
1. Go to ***Properties*** – ***Common*** – ***General*** – ***Credentials*** and select ***Privileged account*** from the dropdown.
1. Select the configured account from the PAM module.


### Multiple Users
1. If every user has a privileged account they want to use, instead set the option in the ***Credentials*** dropdown to ***My privileged account***.
1. Then those users need to set the desired PAM account under ***File*** – ***My Account Settings*** – ***My Defaults*** – ***My Privileged Account***.
1. Select the ***DVLS Privileged Account*** option under ***Privileged Access Management***.
1. Input the {{ en.DVLS }} URL, ***Username*** and select the PAM account. Alternatively you can check the ***Always prompt with list option*** to select which account to login with everytime.