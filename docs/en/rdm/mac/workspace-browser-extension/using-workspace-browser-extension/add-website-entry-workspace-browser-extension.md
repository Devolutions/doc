---
eleventyComputed:
  title: Add a website entry with the {{ en.WBEX }}
---
{% snippet icon.badgeInfo %}
This topic explains how to create an entry with your existing website credentials. If you have not yet created an account for the website, see [Create an account for a website with the {{ en.WBEX }}](/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/create-account-website/) instead.
{% endsnippet %}

Website entries can be created with the {{ en.WBEX }} in {{ en.RDMMAC }}. This type of entry is useful for saving your login credentials so that you do not have to remember them. These entries are also used by the {{ en.WBEX }} to recognize a website and [retrieve your credentials](/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/retrieve-credentials/).

The main way to achieve this is by successfully logging into the website. The {{ en.WBEX }} will automatically offer to save your credentials in a new website entry in {{ en.RDMMAC }}. It is also possible to manually create the website entry.

Learn how to add a website entry by following the instructions from these sections:

* [Automatically Add a Website Entry](#automatically-add-a-website-entry)
* [Manually Add a Website Entry](#manually-add-a-website-entry)

### Automatically Add a Website Entry
1. Go to the login page of the website. This page will be different for each website; this topic will use the Atlassian website as an example.
![Login page](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2049.png)
1. Websites usually ask for information such as an email address/username and a password. Follow the website’s login process until you log in to your account.
1. A {{ en.WBEX }} ***Add Website*** window will pop up in the corner of your web browser.
![Add Website](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2018.png)
1. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed.
1. Provide a ***Destination folder*** in which to save your website entry. If you leave this field empty, the entry will be saved at the root of the {{ en.VLT }}. If the folder you specify does not exist, it will be created at the same time as your entry.
1. Select if you want to save your entry in your ***{{ en.UVLT }}*** or in a ***{{ en.VLT }}***. Note that to create your entry in the {{ en.VLT }} of your choice, the corresponding {{ en.VLT }} must currently be opened in {{ en.RDMMAC }}.
1. Click ***Save***.

Your credentials are now securely stored in a new website entry in {{ en.RDMMAC }}. The next time you log in to the same account, the {{ en.WBEX }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/retrieve-credentials/).

### Manually Add a Website Entry
1. Go to the login page of the website. This page will be different for each website; this topic will use the Atlassian website as an example.
![Login page](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2049.png)
1. Click on the {{ en.WBEX }} icon in your browser and, in the ***Matching*** tab, click on the ***Add Website*** button.
![Add Website button](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2050.png)
1. The {{ en.WBEX }} ***Add Website*** tab will open in your browser.
![Add Website](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2020.png)
1. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed.
1. The ***URL*** field is automatically filled in with the login page URL from step 1.
1. Provide the ***Username*** and ***Password*** you use to log in to the website. Depending on the website, your username may be your email address.
1. Provide a ***Destination folder*** in which to save your website entry. If you leave this field empty, the entry will be saved at the root of the {{ en.VLT }}. If the folder you specify does not exist, it will be created at the same time as your entry.
1. Select if you want to save your entry in your ***{{ en.UVLT }}*** or in a ***{{ en.VLT }}***. Note that to create your entry in the {{ en.VLT }} of your choice, the corresponding {{ en.VLT }} must currently be opened in {{ en.RDMMAC }}.
1. Click ***Save***.

Your credentials are now securely stored in a new website entry in {{ en.RDMMAC }}. The next time you log in to the same account, the {{ en.WBEX }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/rdm/mac/workspace-browser-extension/using-workspace-browser-extension/retrieve-credentials/).
