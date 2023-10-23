## Text formatting guidelines

Markdown is a lightweight markup language with plain text formatting syntax. We have implemented styles to maintain consistency across our projects, controlling aspects such as font, line spacing, justification, and color. Some HTML elements are also used. 

### Bold + italics

We use a combination of bold and italics for user interface elements such as section, menu, option, and field names. As a general rule, if an element is written as is in the user interface, it should be written in bold and italics in the documentation.  

In Markdown, surround the element to be emphasized with three asterisks "***" on either side.  

We avoid using bold or italics alone, or a combination of the two, to emphasize an element that is not part of the user interface.

#### Examples

* What you write: In \*\*\*File\*\*\*, click on \*\*\*Devolutions Account\*\*\* and enter your connection information.
  What is displayed: In ***File***, click on ***Devolutions Account*** and enter your connection information.
* What you write: In the Devolutions Server web interface, go to \*\*\*Administration – System Settings – General\*\*\* and enable \*\*\*Allow user specific settings\*\*\*.
  What is displayed: In the Devolutions Server web interface, go to ***Administration – System Settings – General*** and enable ***Allow user specific settings***.

### Navigation path

When specifying a navigation path, use the En dash "–" with a space on each side to separate elements, rather than a hyphen. You can use <kbd>Alt</kbd>+<kbd>0150</kbd> to produce this type of dash.  

Since paths consist of UI elements, we also use the bold + italics formatting on the entire path. See the previous section for more details.

#### Examples

* Go to ***Administration – System Settings – General*** and enable ***Allow user specific settings***.
* The ***Ribbon style*** can be customized in ***File – Options – User Interface – Ribbon***.

### Keyboard keys and shortcuts

Keyboard keys are written in their abbreviated format. Usually, they start with an uppercase letter and the rest is lowercase. Here is a reference guide for some of the most common keys:

Key                | Abbreviation
:----------------  | :--------
Alternate (Option) | Alt
Backspace          | Bksp
Command (macOS)    | Cmd
Control            | Ctrl
Delete             | Del
Escape             | Esc
Function           | Fn
Printscreen        | PrtScn
Shift              | Shift
Tabulator          | Tab

Use the &lt;kbd&gt; and &lt;/kbd&gt; HTML elements to enclose each key. For a keyboard shortcut, add a plus sign "+" between each key, outside of the kbd elements, without spaces between.

#### Examples

* What you write: &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Alt&lt;/kbd&gt;+&lt;kbd&gt;Del&lt;/kbd&gt;
  What is displayed: <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>
* What you write: &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Down&lt;/kbd&gt;
  What is displayed: <kbd>Ctrl</kbd>+<kbd>Down</kbd>
* What you write: &lt;kbd&gt;Shift&lt;/kbd&gt;+right-click (Right-click is not a keyboard key, therefore the kbd elements are not used and it is written as normal text.)
  What is displayed: <kbd>Shift</kbd>+right-click

### Headings

Devolutions documentation supports six levels of Markdown headings:  

```markdown
# This is a first-level heading (H1)

## This is a second-level heading (H2)

...

###### This is a sixth-level heading (H6)
```

Here are some guidelines for headings:  

* There must be a space between the last "#" and the heading text.
* Avoid using H1 headings, as they are reserved for the main title and navigation tree.
* H2 and H3 headings automatically appear in the right-hand index of the published file. Use them strategically for easier navigation.
* H3 headings will only appear in the right-hand index if they are preceded by an H2 heading.
* Variables can be used in headings, but not kbd elements for keyboard keys.

### Lists (numbered and bulleted)

Use bulleted lists for simple enumerations, lists, etc. For step-by-step instructions, even if there are only two steps, use a numbered list instead.  

#### Bulleted (unordered)

To create a bulleted list, insert an asterisk followed by a space at the beginning of each line. Use a tab before the asterisk to create a second-level bullet.  

##### Examples

```
* How-To Articles 
  * Troubleshooting Articles 
  * Knowledge Base 
```

The result would be as follows:  

* How-To Articles 
  * Troubleshooting Articles 
  * Knowledge Base 

#### Numbered (ordered)

To create a numbered list, you can use all 1s. The numbers are rendered in ascending order as a sequential list when published.  

##### Examples

```
1. How-to articles 
1. Troubleshooting articles 
1. Knowledge base 
```

The result would be as follows:  

1. How-to articles 
1. Troubleshooting articles 
1. Knowledge base 

### Code style

To indicate individual code elements (words) within a line, enclose them with a single backtick.  

Here is an example of `code style`.  

For code blocks, use triple backticks followed by the code language.  

Example for PowerShell code:  

````
```powershell
Insert PowerShell code
```
````

The result would be as follows:  

```powershell
Insert PowerShell code
```

#### Supported languages

You can find the list of supported languages in the [Supported Languages – highlight.js documentation](https://highlightjs.readthedocs.io/en/latest/supported-languages.html).  

#### Code validation 

All code provided in the documentation is validated by our security team.  

#### Code error

If you encounter any coding errors, please contact us via email at [service@devolutions.net](service@devolutions.net). Our specialists will assist you.  
