---
title: Editor
---
The documentation editor is a simple plain text editor. The text is formatted using the Markdown text formatting syntax. Markdown is a markup language designed to be as easy-to-read and easy-to-write as possible.  
![Documentation editor](/img/en/rdm/windows/clip3489.png) 

## Markdown formatting tags 

### Paragraphs 

A paragraph is one or more consecutive lines. Normal paragraphs should not be indented with spaces or tabs. 

### Emphasis 

Two methods of text emphasis are available:  

```
**Bold text** 
*Italic text* 
```

Output:  
![!!clip3497.png](/img/en/rdm/windows/clip3497.png) 

### Headers 

There are two ways of creating headers with Markdown.  

First and second level can be created by "underlining" the text with equal signs (=) and hyhens (-).  

```
First level header 
================== 

Second level header 
------------------- 
```

Output: 
![!!clip3498.png](/img/en/rdm/windows/clip3498.png) 

More levels of headers can be created by using one to five hash symbol (#) at the beginning of the line.  

```
# First level header 

## Second level header 

### Third level header 

#### Fourth level header 

##### Fifth level header 
```

Output:  
![!!clip3499.png](/img/en/rdm/windows/clip3499.png) 

### Lists 

Use asterisks, pluses, and hyphens to create an unordered bulleted list. These three markers are interchangable.  

```
* Item 1 
* Item 2 
* Item 3 
or 
+ Item 1 
+ Item 2 
+ Item 3 
or 
- Item 1 
- Item 2 
- Item 3 
```

Output:  
![!!clip3500.png](/img/en/rdm/windows/clip3500.png) 

Use regular numbers, followed by periods, to create an ordered bulleted list.  

```
1. Item 1 
2. Item 2 
3. Item 3 
```

Output: 
![!!clip3501.png](/img/en/rdm/windows/clip3501.png) 

### Horizontal rulers 

Use three undersocres, asterisks, or hyphens to create a horizontal ruler.  

```
___ 
or 
*** 
or 
--- 
```

Output:  
![!!clip3502.png](/img/en/rdm/windows/clip3502.png) 

### Links 

Use square brackets to delimit the text you want to turn into a link.  

There are two ways of creating links: inline and reference.  

Use parentheses immediately after the link text for inline-style links:  

```
Navigate to the [Devolutions website](https://devolutions.net). 
```

Output:  
![!!clip3503.png](/img/en/rdm/windows/clip3503.png) 

Optionally a title attribute may be included in the parentheses.  

```
Navigate to the [Devolutions website](https://devolutions.net "Website of Devolutions"). 
```

Output:  
![!!clip3504.png](/img/en/rdm/windows/clip3504.png) 

For reference-style links, define the links elsewhere in the document, then refer to a link by its name in another set of square brackets.  

```
Navigate to the [Devolutions website][mainwebsite] or the [Devolutions forum][forumwebsite]. 

[mainwebsite]: https://devolutions.net/ "Website of Devolutions" 
[forumwebsite]: https://forum.devolutions.net/ "Forum of Devolutions" 
```

Output:  
![!!clip3505.png](/img/en/rdm/windows/clip3505.png) 

The title attribute is optional again. Link names may contain letters, numbers and spaces, but are not case sensitive. 

### Images 

Image syntax is very similar to link syntax. Images must be added in the image manager before referencing them.  

To add images in the image manager, click the ***Manage images*** button.  
![Documentation editor – Image manager](/img/en/rdm/windows/clip3495.png) 

Click ***Add*** to select an image from the computer. Select the image in the list, and click ***Insert*** to place the image in the text.  
![Documentation editor - Add an image](/img/en/rdm/windows/clip3496.png) 

### Blockquotes 

Quote a passage of text by inputting a greater-than (>) symbol at the beginning of the line of text.  

```
> Quoted passage of text 
```

Output:  
![!!clip3506.png](/img/en/rdm/windows/clip3506.png) 

Blockquotes can easily be nested.  

```
> Quoted passage of text 
>> Nesting a quoted passage of text 
```

Output:  
![!!clip3507.png](/img/en/rdm/windows/clip3507.png) 

### Code examples 

Inline code is created by enclosing the text in backthicks (`).  

```
Inline `code`. 
```

Output:  
![!!clip3508.png](/img/en/rdm/windows/clip3508.png) 

Code blocks are created be indenting the text with four spaces at the beginning of each lines There must have an empty line before.  

```
    // Testing indented code
 
    var markdownAwesomeness = 0;
 
    if (indentedCodeWorks) {
          markdownAwesomeness++;
    }
```

Output:  
![!!clip3509.png](/img/en/rdm/windows/clip3509.png) 

A specific syntax highlighting can be specified as well.  

```javascript 
var s = "JavaScript syntax highlighting"; 
alert(s); 
``` 

Output:  
![!!clip3510.png](/img/en/rdm/windows/clip3510.png) 

