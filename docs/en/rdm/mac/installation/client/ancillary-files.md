---
title: Ancillary Files
---
{{ en.RDM }} for Mac generates ancillary files on your workstation. The table below lists out an example of ancillary files and their locations.  

As described in [Configuration File Location](/rdm/mac/installation/client/configuration-file-location/) , the default path for most of these files are customizable. For this reason, we use the %CONFIG% variable to denote when a file is stored in a configuration folder that can be relocated, or %PROFILE% to indicate that they are stored in the local profile.  By default, these point to the same exact folder . The only method to separate them is by using a customized configuration.  

The Override column indicates if an available mechanism can relocate the files of that category elsewhere. 

## Summary 

<table>
	<tr>
		<td>
FILE(S) 
		</td>
		<td>
LOCATION 
		</td>
		<td>
OVERRIDE SOURCE 
		</td>
	</tr>
	<tr>
		<td>
Configuration File(s) (*.cfg, *.ext) 
		</td>
		<td>
%CONFIG% 
		</td>
		<td>
None 
		</td>
	</tr>
	<tr>
		<td>
Data File(s) (*.xml, *db) 
		</td>
		<td>
%CONFIG% or custom path 
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
%CONFIG% 
		</td>
		<td>
Data source settings 
		</td>
	</tr>
	<tr>
		<td>
Encryption (*.enc, *.enb) 
		</td>
		<td>
%CONFIG% 
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
%CONFIG% 
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
%CONFIG% 
		</td>
		<td>
None 
		</td>
	</tr>
	<tr>
		<td>
Local Play lilsts 
		</td>
		<td>
%PROFILE%\{Datasource}\Playlists 
		</td>
		<td>
Use for application directory for local playlist 
		</td>
	</tr>
	<tr>
		<td>
Local Templates 
		</td>
		<td>
They are serialized directly in the configuration file of the application 
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
%PROFILE%\{Datasource} 
		</td>
		<td>
Use application directory for online cache 
		</td>
	</tr>
	<tr>
		<td>
Sensitive (*.stv, *.stb) 
		</td>
		<td>
%CONFIG% 
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
%CONFIG% 
		</td>
		<td>
None 
		</td>
	</tr>
</table>


