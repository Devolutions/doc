---
eleventyComputed:
  title: GeoIP security
---
The GeoIP Security section section allows the administrator to set IPs restriction based on the geographical location.  
![Administration – {{ en.DVLS }} Settings – GeoIP Security](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8046.png)

## Settings
| Option      | Description                                                               |
|-------------|---------------------------------------------------------------------------|
| GeoIP Mode  | Choose your method of GeoIP between:<br>None: Will not be using GeoIP security<br>MaxMind: Use the MaxMind's GeoIP database to look up the city, AS number and other information for an IP address. Connect to your account by entering your User ID and License Key in the appropriate field and then select the countries you wish to grant access to your {{ en.DVLS }}. |
| User ID     | User ID to connect on MaxMind.                                            |
| License key | License key to connect on MaxMind.                                        |
| Countries   | Select all authorized countries to connect to the {{ en.DVLS }} instance. |
