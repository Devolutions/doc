---
eleventyComputed:
  title: Creating a shared one-time password entry
  description: Add a layer of security to your {{ en.DA }} by setting up a shared one-time password entry (OTP). To create one for your application, follow the steps below.
---
Add a layer of security to your {{ en.DA }} by setting up a shared one-time password entry (OTP). To create one for your application, follow the steps below.

1. Create a OTP entry in [{{ en.DHUB }}](/hub/web-interface/entries/create-entries-manually/#create-an-entry) or [{{ en.DVLS }}](/server/web-interface/vault/entries/create-entries-manually/#create-an-entry). 

1. Connect to your [{{ en.DPORTAL }}](https://portal.devolutions.com/) and follow the steps in the [Authenticator App section](/cloud/sign-in-security/two-step-verification/#authenticator-app) to get your key.
![Key in the Authenticator app section](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6204.png)
1. Go back to the OTP entry and add the key to the corresponding field.
1. Click ***Add***. Your entry is now created.  
![!!KB2050](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6203.png)
1. Select the OTP entry and click on ***View*** to show your OTP.  
![!!KB2051](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6202.png)

{% snippet icon.badgeInfo %}
This password is only valid for 30 seconds. After this time, another code will appear, rendering the first one useless. You can copy the password to your clipboard by tapping the copy icon next to the remaining time.
{% endsnippet %}

9. Go to your [{{ en.DPORTAL }}](https://portal.devolutions.com/).
1. Paste from your clipboard or write your OTP in the corresponding field.  
![!!KB2054](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6207.png)  

You are now authentified with your application.

