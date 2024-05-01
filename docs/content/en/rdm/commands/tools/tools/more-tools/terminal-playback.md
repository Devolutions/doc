---
eleventyComputed:
  title: Terminal playback (Ansi)
  description: The Playback (Ansi) is available in Tools – More Tools – Playback (Ansi).
---
The ***Playback (Ansi)*** is available in ***Tools – More Tools – Playback (Ansi)***.

## Settings

![More Tools - Playback (Ansi)](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10414.png)

| OPTION   | DESCRIPTION                                                   |
|----------|---------------------------------------------------------------|
| ![!!Select ANSI File Icon](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10865.png) | Select the ANSI file you wish to open in the Terminal Playback.                                     |
| Font     | Select the font for the Terminal Playback.                    |
| ![!!Options Icon](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10867.png) | See the ***Options*** section.   |
| ![!!Clear Screen Icon](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10868.png) | Clear the screen to play another ANSI file. |

### Options

![Playback (Ansi) - Ansi Player Options](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10415.png)

| OPTION   | DESCRIPTION                                                   |
|----------|---------------------------------------------------------------|
| Terminal name                      | Indicate the terminal name.         |
| Encoding                           | Indicate the encoding you wish to use.                                                                                                                                                                                                                   |
| Auto wrap                          | Indicate what happens when text reaches the right-hand edge of the window. Select between: <ul><li>On</li><li>Off</li><li>Dos</li></ul>                                                                                                                                                                                                                    |
| Backspace wrap                     | This option allows you to choose what you want to do when you press backspace. Some terminals believe that the backspace key should send the same thing to the server as Control-H (ASCII code 8). Other terminals believe that the backspace key should send ASCII code 127 (usually known as Control-?) so that it can be distinguished from Control-H. Select between: <ul><li>On</li><li>Off</li><li>Dos</li></ul>    |
| Force Non-destructive backspace    | Allow to perform a normal backspace without deleting a character.                                                                                                                                                                                                                                                                         |
| Ignore Substitute character        | Ignore the substitute character that can be use in Putty.                                                                                                                                                                                                                                                                             |
| Implicit Carriage return in Linefeed | Most servers send two control characters, CR and LF, to start a new line on the screen. The CR character makes the cursor return to the left-hand side of the screen. The LF character makes the cursor move one line down (and might make the screen scroll). Some servers only send LF, and expect the terminal to move the cursor over to the left automatically. If you come across a server that does this, you will see a stepped effect on the screen. If this happens to you, try enabling the option and things might go back to normal.                                                       |

