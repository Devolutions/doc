---
eleventyComputed:
  title: Essential information about {{ en.DVLS }}'s XML format
  keywords: 
  - GUID
  - XML
---
* To optimize storage efficiency, the system employs default values for most fields. As a result, if a field retains its default value, it will be omitted from the displayed content. Therefore, it is important to be mindful of any newly added fields that appear in the updated content.
* Credentials are subject to a distinct handling process that involves the utilization of GUIDs when referencing other entries. However, when employing alternative mechanisms, they are associated with predefined, static well-known GUIDs.  
{% snippet icon.badgeInfo %}
Learn more on [{{ en.RDM }}'s XML format](/kb/devolutions-powershell/remote-desktop-manager/xml-information/).
{% endsnippet %}

<table>
	<tr>
		<th>
Setting
		</th>
		<th>
Well-known GUID
		</th>
	</tr>
	<tr>
		<td>
Default
		</td>
		<td>
" "
		</td>
	</tr>
	<tr>
		<td>
Privileged account
		</td>
		<td>
"56EDBCA3-E76A-457B-8F6A-6B78F3D084CE"
		</td>
	</tr>
	<tr>
		<td>
My privileged account
		</td>
		<td>
"0BCD4B51-1E29-4FCF-9B01-15684E1FA033"
		</td>
	</tr>
</table>
