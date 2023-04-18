---
title: Terminal Playback (Ansi)
---
The &#32; ***Playback (Ansi)*** is available in ***Tools – More*** &#32; Tools ***–*** Playback (Ansi) . 

## Settings 

![More Tools - Playback (Ansi)](/img/en/rdm/windows/clip10414.png) 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>

![clip10865.png](/img/en/rdm/windows/clip10865.png) 
		</td>
		<td>
Select the ansi file you wish to open in the Terminal Playback. 
		</td>
	</tr>
	<tr>
		<td>
Font 
		</td>
		<td>
Select the font for the Terminal Playback. 
		</td>
	</tr>
	<tr>
		<td>
![clip10867.png](/img/en/rdm/windows/clip10867.png) Options 
		</td>
		<td>
See the ***Options*** section. 
		</td>
	</tr>
	<tr>
		<td>
![clip10868.png](/img/en/rdm/windows/clip10868.png) 
		</td>
		<td>
Clear the screen to play another ansi file. 
		</td>
	</tr>
</table>

### Options 

![Playback (Ansi) - Ansi Player Options](/img/en/rdm/windows/clip10415.png)

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Terminal name 
		</td>
		<td>
Indicate the terminal name. 
		</td>
	</tr>
	<tr>
		<td>
Encoding 
		</td>
		<td>
Indicate the encoding you wish to use. 
		</td>
	</tr>
	<tr>
		<td>
Auto wrap 
		</td>
		<td>

Indicate what happen when text reaches the right-hand edge of the window. Select between:  

* ***On*** 
* ***Off*** 
* ***Dos*** 
		</td>
	</tr>
	<tr>
		<td>
Backspace wrap 
		</td>
		<td>
This option allows you to choose what you want to do when you press backspace. Some terminals believe that the backspace key should send the same thing to the server as Control-H (ASCII code 8). Other terminals believe that the backspace key should send ASCII code 127 (usually known as Control-?) so that it can be distinguished from Control-H. Select between:  

* On 
* Off 
* Dos 
		</td>
	</tr>
	<tr>
		<td>
Force Non-destructive backspace 
		</td>
		<td>
Allow to perform a normal backspace without deleting a character. 
		</td>
	</tr>
	<tr>
		<td>
Ignore Substitute character 
		</td>
		<td>
Ignore the substitute character that can be use in Putty. 
		</td>
	</tr>
	<tr>
		<td>
Implicit Carriage return in Linefeed 
		</td>
		<td>
Most servers send two control characters, CR and LF, to start a new line on the screen. The CR character makes the cursor return to the left-hand side of the screen. The LF character makes the cursor move one line down (and might make the screen scroll).  

Some servers only send LF, and expect the terminal to move the cursor over to the left automatically. If you come across a server that does this, you will see a stepped effect on the screen. If this happens to you, try enabling the option and things might go back to normal. 
		</td>
	</tr>
</table>


