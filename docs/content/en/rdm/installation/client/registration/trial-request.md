---
eleventyComputed:
  title: Trial request
  description: If you are not ready to buy {{ en.RDM }}, you can use the Free Edition or follow the steps below to request a free 30-day trial to use the Team Edition.
---
If you are not ready to buy {{ en.RDM }}, you can use the [Free Edition](/rdm/windows/installation/client/registration/free-edition/) or follow the steps below to request a free 30-day trial to use the Team Edition.

{% snippet, "badgeInfo" %}
If you decide not to register by the end of the trial, your data will not be altered or erased, and you will have full access to it once you provide a license key.
{% endsnippet %}

1. Request your [30-day trial](https://devolutions.net/remote-desktop-manager/trial) from our website.
1. Copy the trial license serial that you receive in a confirmation email from Devolutions. You can also download the license file from the same confirmation email.
1. In {{ en.RDM }}, go to ***Administration – Management – Licenses***.
![Administration – Management – Licenses](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3417.png)
1. Click ***Add License***.
![Add License](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2236.png)
1. Paste the trial license serial in the ***License*** field from step 2 or import the license file, then click ***OK***.
1. Paste the license serial in the ***License*** field or import the license file using the ***Import*** button.
   {% snippet, "badgeInfo" %}
   If you need to register your license while offline (if internet is disabled or if for whatever reason you cannot reach the servers), you can only do it by importing the **.lic** file provided to you, which contains a JSON Web Token (JWT). The license file must be downloaded from the Devolutions confirmation email and imported as described in the steps above for {{ en.RDM }} 2023.3 and later.
   {% endsnippet %}

   ![License field and import](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2238.png)

Your trial has now started.