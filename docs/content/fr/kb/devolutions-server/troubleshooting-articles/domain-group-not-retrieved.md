---
eleventyComputed:
  title: Domain group membership is not retrieved properly
  description: This is a solution for when the domain group membership is not retrieved correctly from Active Directory.
  keywords:
  - Domain Group
  - Domain Diagnostic
---
This topic will cover both <a href="#teams%2Fenterprise">Teams/Enterprise</a> licences and <a href="#platinum">Platinum</a> licences.

## Teams/Enterprise
1. Access the {{ en.DVLS }} web interface and connect using an administrator account.
1. Go to the ***Administration*** tab.
1. Go to the ***Server Settings – Authentication – Domain*** page.
![Domain](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0022.png)
1. Click on the ***Diagnostics*** button to the top right.
![Diagnostics](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0023.png)
1. Set the ***Diagnostic type*** option to ***Get groups by user***.
![Get groups by user](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0013.png)
1. Enter a username from the problematic group in the ***Parameter*** field.
1. Set the ***Strategy*** option to ***Directory entry token group***.
![Strategy](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0014.png)
1. Click on ***Get Diagnostic***.
![Get Diagnostic Button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0015.png)
{% snippet, "badgeInfo" %}
If this fails, instead use ***Directory entry token group (Legacy)*** or ***Recursively*** in the ***Strategy*** dropdown.
{% endsnippet %}

9. Close this window by clicking on ***Close***.
1. Click on ***Advanced Settings***.
![Advanced Settings Button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0024.png)
1. Under ***Strategy***, change the ***Get groups by user*** option to the one selected in step 7.
![Strategy – Get groups by user](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0018.png)
1. Click on ***OK*** to save the changes.

## Platinum
1. Access the {{ en.DVLS }} web interface and connect using an administrator account.
1. Go to the ***Administration*** tab.
1. Go to the ***Server Settings – Authentication – Domains*** page.
![Domains](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0011.png)
1. Click on the ***Diagnostics*** button to the right of the correct domain.
![Diagnostics Button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0012.png)
1. Set the ***Diagnostic type*** option to ***Get groups by user***.
![Get groups by user](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0013.png)
1. Enter a username from the problematic group in the ***Parameter*** field.
1. Set the ***Strategy*** option to ***Directory entry token group***.
![Strategy](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0014.png)
1. Click on ***Get Diagnostic***.
![Get Diagnostic Button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0015.png)
{% snippet, "badgeInfo" %}
If this fails, instead use ***Directory entry token group (Legacy)*** or ***Recursively*** in the ***Strategy*** dropdown.
{% endsnippet %}

9. Close this window by clicking on ***Close***.
1. Click on ***Edit***.
![Edit](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0016.png)
1. Click on ***Advanced Settings***.
![Edit – Advanced Settings](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0017.png)
1. Under ***Strategy***, change the ***Get groups by user*** option to the one selected in step 7.
![Strategy – Get groups by user](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0018.png)
1. Click on ***OK***, and then ***Update*** to save the changes.
