---
eleventyComputed:
  title: Installer file generator
  description: When creating an installation package with the {{ en.CIM }}, an installer file is necessary to determine what to include in the installation configuration.
---
When creating an installation package with the ***{{ en.CIM }}***, an installer file is necessary to determine what to include in the installation configuration. Creating an installer file for each new version is risky since you have to repeat the process manually every time. Instead, it is possible to create the configuration once, save the resulting file (*.rdi), and reuse it as many times as needed.

### Creating an installer file

1. In {{ en.RDM }}, click on ***File – {{ en.DA }} – Installer file generator***.
![File – {{ en.DA }} – Installer file generator](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11248.png)
1. In the ***Miscellaneous*** section, check/uncheck options according to your needs and select the data sources to be included. Consult [Option selection](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/) for help with this process.
![Installer file generator](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11249.png)
1. Click ***Generate***, then save the ***Package.rdi*** file on your computer.

An information dialog is displayed to let you know that the file has been generated successfully.
![Successful generation information dialog](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10723.png)

This file can be used in the ***{{ en.CIM }}*** when creating an installation package.

For more information on how to create a {{ en.CI }} package, please consult [{{ en.CIM }}](/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/).
