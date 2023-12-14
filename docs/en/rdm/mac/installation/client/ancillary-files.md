---
eleventyComputed:
  title: Ancillary files
  description: As described in the Configuration File Location, the default path for most of these files are customizable. 
---
{{ en.RDMMAC }} generates ancillary files on your workstation. The table below lists out an example of ancillary files and their locations.  

As described in [Configuration File Location](/rdm/mac/installation/client/configuration-file-location/), the default path for most of these files are customizable. For this reason, we use the %CONFIG% variable to denote when a file is stored in a configuration folder that can be relocated, or %PROFILE% to indicate that they are stored in the local profile.  By default, these point to the same exact folder. The only method to separate them is by using a customized configuration.  

The Override column indicates if an available mechanism can relocate the files of that category elsewhere. 

## Summary 

| FILE(S)                            | LOCATION                                    | OVERRIDE SOURCE                           |
|------------------------------------|---------------------------------------------|-------------------------------------------|
| Configuration File(s) (*.cfg, *.ext)| %CONFIG%                                   | None                                      |
| Data File(s) (*.xml, *db)          | %CONFIG% or custom path                     | None                                      |
| Default Settings                   | %CONFIG%                                    | Data source settings                      |
| Encryption (*.enc, *.enb)          | %CONFIG%                                    | None                                      |
| Layout Files (*.lyt)               | %CONFIG%                                    | None                                      |
| Log Files (*.log, *.debug)         | %CONFIG%                                    | None                                      |
| Local Playlists                    | %PROFILE%\{Datasource}\Playlists            | Use for application directory for local playlist |
| Local Templates                    | They are serialized directly in the configuration file of the application | None        |
| Offline/Cache data (offline.db)    | %PROFILE%\{Datasource}                      | Use application directory for online cache|
| Sensitive (*.stv, *.stb)           | %CONFIG%                                    | None                                      |
| Themes                             | %CONFIG%                                    | None                                      |

