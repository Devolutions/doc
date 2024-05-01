---
eleventyComputed:
  title: Ancillary files
  description: "{{ en.RDM }} generates ancillary files on your workstation. The table below lists out an example of ancillary files and their locations."
---
{{ en.RDM }} generates ancillary files on your workstation. The table below lists out an example of ancillary files and their locations.

As described in [Configuration file location](/rdm/windows/installation/client/configuration-file-location/), the default path for most of these files are customizable. For this reason, we use the [CONFIG] token in this documentation to denote when a file is stored in a configuration folder that can be relocated, or the [PROFILE] token to indicate that they are stored in the local profile. By default, these point to the same exact folder. The only method to separate them is by using a customized configuration.

Since you can also deploy on a portable device, sometimes known as using the XCOPY deployment model, we will use the [INSTALLDIR] token to indicate that the file is in the same location as {{ en.RDM }}.

The Override Source column indicates if an available mechanism can relocate the files of that category elsewhere.

## Summary

| FILE(S)                              | LOCATION                           | OVERRIDE SOURCE                  |
|--------------------------------------|------------------------------------|----------------------------------|
| Configuration File(s) (*.cfg*, .ext) | [CONFIG]                           | None                             |
| Data File(s) (*.xml*, *.db*)         | [CONFIG] or custom path.           | None                             |
| Default Settings                     | [CONFIG]                           | Data source settings (System Settings) |
| Encryption (*.enc*, *.enb*)          | [CONFIG]                           | None                             |
| Layout Files (*.lyt*)                | [CONFIG]                           | None                             |
| Log Files (*.log*, *.debug*)         | [CONFIG]                           | None                             |
| Local Play lists                     | [PROFILE]\\[Datasource]\\Playlists | Use application directory for local playlist will use instead [INSTALLDIR] |
| Local Templates                      | They are serialized directly in the configuration file of the application. | None |
| Offline/Cache data (*offline.db*)    | [PROFILE]\\[Datasource]            | Use application directory for online cache will use instead [INSTALLDIR] |
| Sensitive (*.stv*, *.stb*)           | [CONFIG]                           | None                             |
| Themes                               | [CONFIG]                           | None                             |


### Offline and Local Play list option

Offline and local play list options can be accessed by navigating to ***File – Settings – Advanced***.
![Options - Advanced](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11275.png)