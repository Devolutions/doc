---
eleventyComputed:
  title: Event auto typing macro
  description: The Typing Macro automatically executes once a connection has been established.  
---
The ***Typing Macro*** automatically executes once a connection has been established.  

{% snippet icon.shieldWarning %}
This feature simply uses a basic mechanism of sending keystrokes provided by the .NET Framework, emulating someone using the keyboard. It sends the keystrokes to the operating system itself, and they are handled by whatever application has the focus at that time. If the focus is switched to another window, the credentials will most likely be revealed by being typed in a text area.  

Be advised that using this feature in an environment where passwords must be hidden from the user is highly discouraged.
{% endsnippet %}  

![!!KB4621](https://webdevolutions.azureedge.net/docs/en/kb/KB4621.png)

Typing macros can also be added in the ***Login Button ID*** field of a website entry.

![Select an entry – Properties – Login – Login button ID](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6163.png)

## Typing macro
Keyboard keys are represented by predefined tags between braces. To specify a single keyboard character, use the character itself without braces. For example, represent the letter ***A*** by typing the "A" character in the typing macro. To represent more than one character, such as ***Hello***, append each additional character to the preceding one: "Hello".
## Special keys
To specify characters that are not displayed when you press a key, such as ENTER or TAB, as well as the keys that represents actions rather than characters, refer to the codes in the following table.  

| KEY                              | CODE                         |
|----------------------------------|------------------------------|
| <kbd>Backspace</kbd>             | \{BACKSPACE}/\{BS}/\{BKSP}   |
| <kbd>Break</kbd>                 | \{BREAK}                     |
| <kbd>Caps lock</kbd>             | \{CAPSLOCK}                  |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> | \{CTRL-ALT-DEL} |
| <kbd>Del</kbd>/<kbd>Delete</kbd> | \{DEL}/\{DELETE}             |
| <kbd>Down</kbd> (arrow)          | \{DOWN}                      |
| <kbd>End</kbd>                   | \{END}                       |
| <kbd>Entrée</kbd>                | \{ENTER}                     |
| <kbd>Esc</kbd>                   | \{ESC}                       |
| <kbd>Help</kbd>                  | \{HELP}                      |
| <kbd>Home</kbd>                  | \{HOME}                      |
| <kbd>Ins</kbd>/<kbd>Insert</kbd> | \{INS}/\{INSERT}             |
| <kbd>Add</kbd> (keypad)          | \{ADD}                       |
| <kbd>Divide</kbd> (keypad)       | \{DIVIDE}                    |
| <kbd>Multiply</kbd> (keypad)     | \{MULTIPLY}                  |
| <kbd>Substract</kbd> (keypad)    | \{SUBTRACT}                  |
| <kbd>Left</kbd> (arrow)          | \{LEFT}                      |
| <kbd>Num lock</kbd>              | \{NUMLOCK}                   |
| <kbd>Page down</kbd>             | \{PGDN}                      |
| <kbd>Page up</kbd>               | \{PGUP}                      |
| <kbd>Print screen</kbd>          | \{PRTSC}                     |
| <kbd>Right</kbd> (arrow)         | \{RIGHT}                     |
| <kbd>Scroll lock</kbd>           | \{SCROLLOCK}                 |
| <kbd>Tab</kbd>                   | \{TAB}                       |
| <kbd>Up</kbd> (arrow)            | \{UP}                        |
| <kbd>F1</kbd>                    | \{F1}                        |
| <kbd>F2</kbd>                    | \{F2}                        |
| <kbd>F3</kbd>                    | \{F3}                        |
| <kbd>F4</kbd>                    | \{F4}                        |
| <kbd>F5</kbd>                    | \{F5}                        |
| <kbd>F6</kbd>                    | \{F6}                        |
| <kbd>F7</kbd>                    | \{F7}                        |
| <kbd>F8</kbd>                    | \{F8}                        |
| <kbd>F9</kbd>                    | \{F9}                        |
| <kbd>F10</kbd>                   | \{F10}                       |
| <kbd>F11</kbd>                   | \{F11}                       |
| <kbd>F12</kbd>                   | \{F12}                       |
| <kbd>F13</kbd>                   | \{F13}                       |
| <kbd>F14</kbd>                   | \{F14}                       |
| <kbd>F15</kbd>                   | \{F15}                       |
| <kbd>F16</kbd>                   | \{F16}                       |

To specify keys combined with any combination of the <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, and <kbd>Alt</kbd> keys, precede the key code with one or more of the following signs.  

| KEY              | CODE |
|------------------|------|
| <kbd>Alt</kbd>   | %    |
| <kbd>Ctrl</kbd>  | ^    |
| <kbd>Shift</kbd> | +    |

To specify that any combination of the <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, and <kbd>Alt</kbd> keys should be held down while several other keys are pressed, enclose the code for those keys in parentheses. For example, to specify to hold down <kbd>Shift</kbd> while <kbd>E</kbd> and <kbd>C</kbd> are pressed, use "+(EC)". To specify to hold down <kbd>Shift</kbd> while <kbd>E</kbd> is pressed, followed by <kbd>C</kbd>, without <kbd>Shift</kbd>, use "+EC".  

## Special commands

| COMMANDS                  | DESCRIPTION                                                                                       |
|---------------------------|-------------------------------------------------------------------------------------------------- |
| \{DELAY}                  | This command introduces a configurable delay of 300 ms (default value) before the next command.   |
| \{PREV-WINDOW}            | Select the previous window before executing the remaining commands.                               |
| \{SENDKEYS} \{ENDSENDKEYS} | This command is used in pair with the {ENDSENDKEYS} command. The text contained between those commands will be executed using [.NET's default SendKey API](https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.sendkeys?view=windowsdesktop-8.0), which does not work with the RDM-specific commands contained within this help topic. This command is often used when there are unsupported scenarios with the typing macro feature and using the default .NET SendKeys API works.                                      |
| \{WINDOW:???}             | This command focus a window containing the specified name after the colon.                        |


## Macro password
You can define a password to be used within the typing macro exclusively. Use the variable $MACRO_PASSWORD$ to access the password.
