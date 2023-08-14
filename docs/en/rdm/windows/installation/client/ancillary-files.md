---
title: Ancillary Files
---
{{ en.RDM }} generates ancillary files on your workstation. The table below lists out an example of ancillary files and their locations.  

As described in [Configuration File Location](/rdm/windows/installation/client/configuration-file-location/), the default path for most of these files are customizable. For this reason, we use the [CONFIG] token in this documentation to denote when a file is stored in a configuration folder that can be relocated, or the [PROFILE] token to indicate that they are stored in the local profile. By default, these point to the same exact folder . The only method to separate them is by using a customized configuration.  

Since you can also deploy on a portable device, sometimes known as using the XCOPY deployment model, we will use the [INSTALLDIR] token to indicate that the file is in the same location as {{ en.RDM }}.  

The Override Source column indicates if an available mechanism can relocate the files of that category elsewhere.  

## Summary 

<table>
	<tr>
		<th>

FILE(S) 
		</th>
		<th>
LOCATION 
		</th>
		<th>
OVERRIDE SOURCE 
		</th>
	</tr>
	<tr>
		<td>
Configuration File(s) (*.cfg, *.ext) 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
None 
		</td>
	</tr>
	<tr>
		<td>
Data File(s) (*.xml, *.db) 
		</td>
		<td>
[CONFIG] or custom path. 
		</td>
		<td>
None 
		</td>
	</tr>
	<tr>
		<td>
Default Settings 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
Data source settings (System Settings) 
		</td>
	</tr>
	<tr>
		<td>
Encryption (*.enc, *.enb) 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
None 
		</td>
	</tr>
	<tr>
		<td>
Layout Files (*.lyt) 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
None 
		</td>
	</tr>
	<tr>
		<td>
Log Files (*.log, *.debug) 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
None 
		</td>
	</tr>
	<tr>
		<td>
Local Play lists 
		</td>
		<td>
[PROFILE]\[Datasource]\Playlists 
		</td>
		<td>
Use application directory for local playlist will use instead [INSTALLDIR] 
		</td>
	</tr>
	<tr>
		<td>
Local Templates 
		</td>
		<td>
They are serialized directly in the configuration file of the application. 
		</td>
		<td>
None 
		</td>
	</tr>
	<tr>
		<td>
Offline/Cache data (offline.db) 
		</td>
		<td>
[PROFILE]\[Datasource] 
		</td>
		<td>
Use application directory for online cache will use instead [INSTALLDIR] 
		</td>
	</tr>
	<tr>
		<td>
Sensitive (*.stv, *.stb) 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
None 
		</td>
	</tr>
	<tr>
		<td>
Themes 
		</td>
		<td>
[CONFIG] 
		</td>
		<td>
None 
		</td>
	</tr>
</table>

### Offline and Local Play list option 

Offline and local play list options can be accessed by navigating to File - Options - Advanced .  
![Options - Advanced](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11275.png) 

