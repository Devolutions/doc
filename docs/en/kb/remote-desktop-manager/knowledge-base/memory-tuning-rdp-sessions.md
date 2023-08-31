---
title: RDP sessions memory tuning
---
By default, the RDP protocol will reserve a sizable chunk of memory right from the start of a session for caching purposes, but we have some level of control over that. In the ***Experience*** tab of the RDP session, there is a ***Cache*** setting that you can use to control the behavior. Its values are as follows:  

<table>
	<tr>
		<th>
VALUE
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Default
		</td>
		<td>
Uses the value set in File - Options - Types - Remote Desktop - Cache
		</td>
	</tr>
	<tr>
		<td>
Full Mode
		</td>
		<td>
The protocol is full Windows 8 Remote Desktop Protocol cache.
		</td>
	</tr>
	<tr>
		<td>
Thin client
		</td>
		<td>
The protocol is limited to using the Windows 7 with SP1 RemoteFX codec and a smaller cache. All other codecs are disabled. This protocol has the smallest memory footprint
		</td>
	</tr>
	<tr>
		<td>
Small cache
		</td>
		<td>
The protocol is the same as ***Full mode***, except it uses a smaller cache.
		</td>
	</tr>
</table>

Choosing ***Thin client*** is therefore the choice that limits memory consumption the most, but will downgrade to the previous version of the protocol. The ***Small Cache*** mode may be sufficient for your needs if you need the newer features of the RDP protocol.  

![!!KB4455](https://webdevolutions.azureedge.net/docs/en/kb/KB4455.png)  

You might wish to set this for all sessions. In this case, go to File - Options - Types - Remote Desktop to assign the default value, then in all of your sessions use ***Default***.  

![!!KB4456](https://webdevolutions.azureedge.net/docs/en/kb/KB4456.png)
