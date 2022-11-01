# Welcome to the documentation section.
Here, you can easily store information regarding resources.  
With the support of Markdown, a *<u>lightweight</u>* and easy to use markup language, documenting has never been easier!
Within this page, you can get a quick glance at what Markdown has to offer. 
Edit this page to see how this formatting was done, or [click here](http://commonmark.org/) to get the complete Markdown reference.

---

## Here are some of markdown features
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Etc.  

---  

## Lists:
- Item 1
- Item 2
- Item 3
- Etc.
 
---

## Horizontal rulers:

___

***

---

## Emphasis
**Bold text**

*Italic text*

<u>Underlined text</u>

---

## Tables

| Name | Type|  Amount |
|:----------:|:--------:|:--------:|
|   Oranges   |  Fruits |  12 |
| Carrots |  Vegetables | 4 |

---

## Blockquotes

> A blockquote only requires a greater-than sign before typing!  
But there's more to it:

> Blockquotes can easily be nested!
>> Write additional greater-than signs next to each other.
> > > You can also separate the greater-than signs with spaces like in this blockquote.

---

## Code examples
Inline `code`  is created by enclosing the text in backthicks.  
Code blocks are created by indenting the text with four spaces at the beginning of each lines.  
Code blocks must be preceded by an empty line:

    // Testing indented code
    var markdownAwesomeness = 0;
    
    if (indentedCodeWorks) {
          markdownAwesomeness++;
    }
A specific syntax highliighting can be specified as well:
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```