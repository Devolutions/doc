---
eleventyComputed:
  title: Syntax highlighting 
  description: How to use Syntax highlighting in {{ en.RDM }}
---
Syntax highlighting is a feature found in text editors, commonly used for programming, scripting, and markup languages like HTML. This feature displays text, particularly source code, in various colors and fonts to differentiate and emphasize different categories of terms.

1. In {{ en.RDM }}, go to ***File*** – ***Options*** and select ***Types*** –  ***Terminal*** – ***Syntax highlighting***.

1. Click ***Add (+)*** to open the ***Syntax highlighting window***.

![File – Options – Types –  Terminal – Syntax highlighting – Add (+)](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6102.png)

Below is a list of all the options available in the ***Syntax highlighting window***. 

![Syntax highlighting window](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6101.png)

### General section  

***Name***: The name that will be displayed in the highlight list. For information only.  

***Keyword***: What is used to make the match. If you don't check ***Use regex comparison*** (below in the Advanced section), it does a simple text string validation. 

***Highlighting enabled***: Check whether highlighting will be applied or not. You might want to save different highlightings and not set them all.

### Style section

***Foreground color***: The highlight color for the foreground (text).  

***Background color***: The color of the highlight for the background.  

***Underlined***: Check to underline the highlight.

### Advanced section

***Use regex comparison***: Change how the match is made. In regex mode, it uses regex syntax to make the match.  

***Case sensitive***: Select whether the match will be case sensitive or not. Only available in normal mode.

***Complete word***: Set the match to be on the complete word or not. Only available in normal mode.
