---
eleventyComputed:
  title: '{{ en.UVLT }} disappears after upgrade'
---
With {{ en.DVLS }} 2021 came a remodeling of the {{ en.UVLT }}. After upgrading to 2021.1.x and higher some user could no longer be able to access their ***{{ en.UVLT }}***.  

Different behaviours can be observed:  

* <a href="#one">Empty {{ en.UVLT }} on both {{ en.RDM }} and the web {{ en.DVLS }} UI</a>
* <a href="#both">Empty {{ en.UVLT }} in {{ en.RDM }}, but it is showing on the web {{ en.DVLS }} UI</a>

### Empty {{ en.UVLT }} on both {{ en.RDM }} and the web {{ en.DVLS }} UI
<a name="one"></a>

In most cases, this is caused by the migration process causing a ***Validation Conflict*** and will only affect some users.  

1. Open the user web {{ en.DVLS }} and click on his ***Avatar*** in the right upper corner.
1. In the menu, you should see an ***Export Nonmigrated {{ en.UVLT }}*** and a ***Delete Nonmigrated {{ en.UVLT }}*** option.  
![!!KB4784](https://webdevolutions.azureedge.net/docs/en/kb/KB4784.png)
1. Click on ***Export Nonmigrated {{ en.UVLT }}*** to create a password protectedrdm file.
1. Import the data file in an empty Local Data source to test and ensure the integrity of the data.
1. When your validation is conclusive, click on ***Delete Nonmigrated {{ en.UVLT }}***.
1. Import therdm file in the {{ en.DVLS }} data source.

### Empty {{ en.UVLT }} in {{ en.RDM }}, but it is showing on the web {{ en.DVLS }} UI
<a name="both"></a>

Usually, this issue is organization wide, and is caused by a ***Security Provider*** still present on the data source.  

{% snippet icon.badgeCaution %}
Available in {{ en.DVLS }} 2021.1.10 and higher or the 2020.3.19 LTS version.
{% endsnippet %}  

1. In the {{ en.DVLSCONSOLE }} click on ***Tools – Remove Security Provider***.  
{% snippet icon.shieldWarning %}
Removing the ***Security Provider*** will leave your database unencrypted.
{% endsnippet %}  

2. Once it’s completed, click on ***Tools – Regenerate*** and store the file and the password in a safe location.  
{% snippet icon.badgeCaution %}
Regenerating the ***Encryption Keys*** will re-encrypt the database.
{% endsnippet %}  

![!!KB4785](https://webdevolutions.azureedge.net/docs/en/kb/KB4785.png)
