---
title: Event Auto Typing Macro
---
The ***Typing Macro*** automatically executes once a connection has been established.  

{% snippet icon.shieldWarning %}
This feature simply uses a basic mechanism of sending keystrokes provided by the .NET Framework, emulating someone using the keyboard. It sends the keystrokes to the operating system itself, and they are handled by WHATEVER application has the focus at that time. If the focus is switched to another window, the credentials will most likely be revealed by being typed in a text area.  

Be advised that using this feature in an environment where passwords must be hidden from the user is highly discouraged.
{% endsnippet %}  

![!!KB4621.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4621.png)
## Settings
### Typing macro
Keyboard keys are represented by predefined tags between braces. To specify a single keyboard character, use the character itself without braces. For example, represent the letter ***A*** by typing the "A" character in the typing macro. To represent more than one character, such as ***Hello***, append each additional character to the preceding one: "Hello".
### Special keys
To specify characters that are not displayed when you press a key, such as ENTER or TAB, as well as the keys that represents actions rather than characters, refer to the codes in the following table.  

<table>
	<tr>
		<th>
KEY
		</th>
		<th>
CODE
		</th>
	</tr>
	<tr>
		<td>
BACKSPACE
		</td>
		<td>
{BACKSPACE}, {BS}, or {BKSP}
		</td>
	</tr>
	<tr>
		<td>
BREAK
		</td>
		<td>
{BREAK}
		</td>
	</tr>
	<tr>
		<td>
CAPS LOCK
		</td>
		<td>
{CAPSLOCK}
		</td>
	</tr>
	<tr>
		<td>
CTRL + ALT + DELETE
		</td>
		<td>
{CTRL-ALT-DEL}
		</td>
	</tr>
	<tr>
		<td>
DEL or DELETE
		</td>
		<td>
{DELETE} or {DEL}
		</td>
	</tr>
	<tr>
		<td>
DOWN ARROW
		</td>
		<td>
{DOWN}
		</td>
	</tr>
	<tr>
		<td>
END
		</td>
		<td>
{END}
		</td>
	</tr>
	<tr>
		<td>
ENTER
		</td>
		<td>
{ENTER}
		</td>
	</tr>
	<tr>
		<td>
ESC
		</td>
		<td>
{ESC}
		</td>
	</tr>
	<tr>
		<td>
HELP
		</td>
		<td>
{HELP}
		</td>
	</tr>
	<tr>
		<td>
HOME
		</td>
		<td>
{HOME}
		</td>
	</tr>
	<tr>
		<td>
INS or INSERT
		</td>
		<td>
{INSERT} or {INS}
		</td>
	</tr>
	<tr>
		<td>
Keypad ADD
		</td>
		<td>
{ADD}
		</td>
	</tr>
	<tr>
		<td>
Keypad DIVIDE
		</td>
		<td>
{DIVIDE}
		</td>
	</tr>
	<tr>
		<td>
Keypad MULTIPLY
		</td>
		<td>
{MULTIPLY}
		</td>
	</tr>
	<tr>
		<td>
Keypad SUBTRACT
		</td>
		<td>
{SUBTRACT}
		</td>
	</tr>
	<tr>
		<td>
LEFT ARROW
		</td>
		<td>
{LEFT}
		</td>
	</tr>
	<tr>
		<td>
NUM LOCK
		</td>
		<td>
{NUMLOCK}
		</td>
	</tr>
	<tr>
		<td>
PAGE DOWN
		</td>
		<td>
{PGDN}
		</td>
	</tr>
	<tr>
		<td>
PAGE UP
		</td>
		<td>
{PGUP}
		</td>
	</tr>
	<tr>
		<td>
PRINT SCREEN
		</td>
		<td>
{PRTSC}
		</td>
	</tr>
	<tr>
		<td>
RIGHT ARROW
		</td>
		<td>
{RIGHT}
		</td>
	</tr>
	<tr>
		<td>
SCROLL LOCK
		</td>
		<td>
{SCROLLLOCK}
		</td>
	</tr>
	<tr>
		<td>
TAB
		</td>
		<td>
{TAB}
		</td>
	</tr>
	<tr>
		<td>
UP ARROW
		</td>
		<td>
{UP}
		</td>
	</tr>
	<tr>
		<td>
F1
		</td>
		<td>
{F1}
		</td>
	</tr>
	<tr>
		<td>
F2
		</td>
		<td>
{F2}
		</td>
	</tr>
	<tr>
		<td>
F3
		</td>
		<td>
{F3}
		</td>
	</tr>
	<tr>
		<td>
F4
		</td>
		<td>
{F4}
		</td>
	</tr>
	<tr>
		<td>
F5
		</td>
		<td>
{F5}
		</td>
	</tr>
	<tr>
		<td>
F6
		</td>
		<td>
{F6}
		</td>
	</tr>
	<tr>
		<td>
F7
		</td>
		<td>
{F7}
		</td>
	</tr>
	<tr>
		<td>
F8
		</td>
		<td>
{F8}
		</td>
	</tr>
	<tr>
		<td>
F9
		</td>
		<td>
{F9}
		</td>
	</tr>
	<tr>
		<td>
F10
		</td>
		<td>
{F10}
		</td>
	</tr>
	<tr>
		<td>
F11
		</td>
		<td>
{F11}
		</td>
	</tr>
	<tr>
		<td>
F12
		</td>
		<td>
{F12}
		</td>
	</tr>
	<tr>
		<td>
F13
		</td>
		<td>
{F13}
		</td>
	</tr>
	<tr>
		<td>
F14
		</td>
		<td>
{F14}
		</td>
	</tr>
	<tr>
		<td>
F15
		</td>
		<td>
{F15}
		</td>
	</tr>
	<tr>
		<td>
F16
		</td>
		<td>
{F16}
		</td>
	</tr>
</table>

To specify keys combined with any combination of the Shift, Ctrl, and Alt keys, precede the key code with one or more of the following signs.  

<table>
	<tr>
		<th>
KEY
		</th>
		<th>
CODE
		</th>
	</tr>
	<tr>
		<td>
ALT
		</td>
		<td>
%
		</td>
	</tr>
	<tr>
		<td>
CTRL
		</td>
		<td>
^
		</td>
	</tr>
	<tr>
		<td>
SHIFT
		</td>
		<td>
+
		</td>
	</tr>
</table>

To specify that any combination of the Shift, Ctrl, and Alt keys should be held down while several other keys are pressed, enclose the code for those keys in parentheses. For example, to specify to hold down Shift while E and C are pressed use "+(EC)". To specify to hold down Shift while E is pressed, followed by C, without Shift, use "+EC".  

### Special commands
<table>
	<tr>
		<th>
COMMANDS
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
{DELAY}
		</td>
		<td>
This command introduces a delay of 300 ms (default value) before the next command.
		</td>
	</tr>
	<tr>
		<td>
{PREV-WINDOW}
		</td>
		<td>
Select the previous window before executing the remaining commands.
		</td>
	</tr>
	<tr>
		<td>
{WINDOW:???}
		</td>
		<td>
This command focus a window containing the specified name after the semi colon.
		</td>
	</tr>
</table>

### Macro Password
You can define a password to be used within the typing macro exclusively. Use the variable $MACRO_PASSWORD$ to access the password.
