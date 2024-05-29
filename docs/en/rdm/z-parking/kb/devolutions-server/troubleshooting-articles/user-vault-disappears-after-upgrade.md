---
eleventyComputed:
  title: "{{ en.UVLT_MAJ }} disappears after upgrade"
  description: After upgrading to 2021.1.x and later, some users could no longer access their {{ en.UVLT }}.
---
With {{ en.DVLS }} 2021 came a remodeling of the {{ en.UVLT }}. After upgrading to 2021.1.x and later, some users could no longer access their ***{{ en.UVLT }}***.

Different behaviours can be observed:

* [Empty {{ en.UVLT }} on both {{ en.RDM }} and the web {{ en.DVLS }} UI](#empty-user-vault-on-both-remote-desktop-manager-and-the-web-devolutions-server-ui)
* [Empty {{ en.UVLT }} in {{ en.RDM }}, but it is showing on the web {{ en.DVLS }} UI](#empty-user-vault-in-remote-desktop-manager-but-it-is-showing-on-the-web-devolutions-server-ui)

## Empty {{ en.UVLT }} on both {{ en.RDM }} and the web {{ en.DVLS }} UI
In most cases, this is caused by the migration process causing a ***Validation Conflict*** and will only affect some users.

1. Open the user web {{ en.DVLS }} and click on his ***Avatar*** in the right upper corner.
1. In the menu, you should see an ***Export Nonmigrated {{ en.UVLT }}*** and a ***Delete Nonmigrated {{ en.UVLT }}*** option.
![Export Nonmigrated {{ en.UVLT }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4784.png)
1. Click on ***Export Nonmigrated {{ en.UVLT }}*** to create a password protectedrdm file.
1. Import the data file in an empty Local Data source to test and ensure the integrity of the data.
1. When your validation is conclusive, click on ***Delete Nonmigrated {{ en.UVLT }}***.
1. Import the rdm file in the {{ en.DVLS }} data source.

## Empty {{ en.UVLT }} in {{ en.RDM }}, but it is showing on the web {{ en.DVLS }} UI
Usually, this issue is organization wide and is caused by a ***Security Provider*** still present on the data source. This is available in {{ en.DVLS }} 2021.1.10 and later or the 2020.3.19 LTS version.

1. In the {{ en.DVLSCONSOLE }} click on ***Tools – Remove Security Provider***.
   {% snippet, "shieldWarning" %}
   Removing the ***Security Provider*** will leave your database unencrypted.
   {% endsnippet %}

1. Once it is completed, click on ***Tools – Regenerate*** and store the file and the password in a safe location.
   {% snippet, "badgeCaution" %}
   Regenerating the ***Encryption Keys*** will re-encrypt the database.
   {% endsnippet %}