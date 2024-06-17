---
eleventyComputed:
  title: Biometric lock setting
  description: One of the Locking options needs to be enabled to access a {{ en.HUBB }} with biometric lock.
---
If the {{ en.HUBB }} datasource has biometric lock enabled, {{ en.DWS }} will redirect you to the ***Security*** settings page.

## Enabling a locking option
1. In {{ en.DWS }}, attempt to connect to a {{ en.HUBB }} datasource that [enforces biometric lock](\en\hub\kb\hub-business\how-to-articles\biometric-lock.md).
1. Click on ***Go to settings***.  
![Go to settings](https://cdnweb.devolutions.net/docs/WDAPP0000_2024_2.png)
1. Enable ***Use master password*** or ***Use biometric lock***.
* Master password: The {{ en.DWS }} application will need to be unlocked with a password.
![Use master password](https://cdnweb.devolutions.net/docs/WDAPP0001_2024_2.png)
* Biometric lock: The {{ en.DWS }} application will need to be unlocked with one of the device's biometry options.
![Use biometric lock](https://cdnweb.devolutions.net/docs/WDAPP0002_2024_2.png)
4. Try connecting to the {{ en.HUBB }} datasource again.
