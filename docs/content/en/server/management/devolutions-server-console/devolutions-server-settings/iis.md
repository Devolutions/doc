---
eleventyComputed:
  title: IIS
  order: 30
---
The ***IIS*** settings are part of the prerequisite at the installation level. Most of what is found in this tab is automatically filled in by the information given while setting up your {{ en.DVLS }}, the IIS settings section is used more as an information source rather than configuration.

![Server Settings - IIS](https://cdnweb.devolutions.net/docs/en/server/ServerOp8010.png)

## Settings

### General

| Option               | Description                                                            |
|----------------------|------------------------------------------------------------------------|
| Website              | Name of the IIS website.                                               |
| IIS Diagnostic       | Opens the IIS Diagnostic dialog that list {{ en.DVLS }} prerequisites. |
| Web application name | Name of the IIS Application Pool.                                      |
| Access URI           | Web URI used to reach {{ en.DVLS }} web page.                          |

### Installation destination

| Option              | Description                                                       |
|---------------------|-------------------------------------------------------------------|
| Installation Folder | Folder where the {{ en.DVLS }} web application files are located. |

### Security

| Option                               | Description                                                                                                       |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Disable HTTPS                        | Disable the use of the HTTPS for HTTP.                                                                            |
| Disable connection string encryption | Activate this option if you wish to add an extra layer of security to your configuration by encrypting your file. |
