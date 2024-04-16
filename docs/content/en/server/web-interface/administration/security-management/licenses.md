---
eleventyComputed:
  title: Licenses
  description: Managing registration globally for all your users can be done with a license serial stored in Administration – Licenses.
---
Managing registration globally for all your users can be done with a license serial stored in ***Administration – Licenses***.
![Adding a license](https://cdnweb.devolutions.net/docs/DVLS2009_2024_1.png)

Here are the different license types that can be added in {{ en.DVLS }}:
* {{ en.RDM }}
* {{ en.DLAUNCHER }}
* {{ en.DGW }} module
* Privileged access management (PAM) module
* Third party PAM integrations (CyberArk, Delinea Secret Server, BeyondTrust)
* Client access license (user CAL)

![Add a license – General](https://cdnweb.devolutions.net/docs/DVLS2020_2024_1.png)

## General
| Option      | Description                                                                                      |
|-------------|--------------------------------------------------------------------------------------------------|
| License     | Enter the license to be stored.                                                                  |
| Import      | Import the license using a **LIC** file.                                                         |
| Auto assign | Automatically assign the license key to every new user account (not available for PAM licenses). |

## Assigned to
![Add a license – Assigned to](https://cdnweb.devolutions.net/docs/DVLS2021_2024_1.png)

| Option         | Description                                                          |
|----------------|----------------------------------------------------------------------|
| Filter         | Filter the list based on the ***Name*** or ***Description*** column. |
| Assign all     | Assign the license to all accounts.                                  |
| Assign missing | Assign the license to accounts that are not already selected.        |
| Clear all      | Remove the license from all accounts.                                |