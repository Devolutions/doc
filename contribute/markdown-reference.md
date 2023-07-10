## Markdown reference and style

Markdown is a lightweight markup language with plain text formatting syntax. We have implemented styles to maintain consistency across our projects, controlling aspects such as font, line spacing, justification, and color.  

### Navigation path

When specifying a navigation path, use the en-dash (Alt+0150) to separate elements, rather than a hyphen.  

Example: File – Options – User Interface – Navigation Pane  

### Styles

To format text as **bold**, enclose it in two asterisks:  

```markdown
This text is **bold**.
```

To format text as *italic*, enclose it in a single asterisk:

```markdown
This text is *italic*.
```

To format text as both ***bold and italic***, enclose it in three asterisks:

```markdown
This text is both ***bold and italic***.
```

### Headings

Devolutions documentation supports six levels of Markdown headings:  

```markdown
# This is a first-level heading (H1)

## This is a second-level heading (H2)

...

###### This is a sixth-level heading (H6)
```

Here are some guidelines for headings:  

* There must be a space between the # and heading text.
* Avoid using H1 headings, as they are reserved for the main title and navigation tree.
* H2 and H3 headings automatically appear in the right-hand index of the published file. Use them strategically for easier navigation.
* H3 headings will only appear in the right-hand index if they are preceded by an H2 heading.

### Lists (numbered and bulleted)

Use bulleted lists for simple enumerations, lists, etc. For step-by-step instructions, even if there are only two steps, use a numbered list instead.  

#### Bulleted (unordered)

To create a bulleted list, insert an asterisk followed by a space at the beginning of each line. Use a tab before the asterisk to create a second-level bullet.  

Example:  

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

Example:  

```
1. How-to articles 
1. Troubleshooting articles 
1. Knowledge base 
```

The result would be as follows:  

1. How-to articles 
1. Troubleshooting articles 
1. Knowledge base 
