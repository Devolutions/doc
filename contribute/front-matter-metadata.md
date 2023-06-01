---
title: Devolutions front matter metadata
---
We use metadata for discoverability of the content via search and for driving aspects of the site experience. 11ty use Front Matter for global variables. It is set at the line 1 of the file starting with `---` and ending with `---`.  

If you're making an edit to an existing article, you probably won't have to change any metadata. However, if you're adding a new article, there are certain required metadata values that you'll need to include in the front matter of the file.  

Here's an example of metadata applied in the front matter of a Markdown article:  

```
---
title: The title of the topic and # Used for the H1 and the navigation tree
order: 0-9 # Used for custom ordering in the navigation tree. 
description: The topic description # Used to summarizing the document (will be displayed in a search result from a search engine).
keywords: Specific topic keywords # Used by the Algolia application.
- keyword 1
- keyword 2
---

## Markdown Content
```

Variables are listed in the folder [_data](https://github.com/Devolutions/doc/tree/master/docs/_data). To do so, insert "eleventyComputed:" in the front matter as shown here:  

```
---
eleventyComputed:
  title:  Title with {{ en.VARIABLE }}.
  description: The topic description # Used to summarizing the document (will be displayed in a search result from a search engine).
---

## Markdown Content
```

Attributes are case-sensitive. Enter them exactly as listed, and use a colon and a space between the attributes and the value. If an attribute value includes a colon (:), a hash (#), or any other special character, you must enclose it either single (') or double (") quotes. For example:  

```
---
title: 'Quickstart: How to use special characters in Markdown article'
---

## Markdown Content
```