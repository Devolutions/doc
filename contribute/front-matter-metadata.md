---
title: Devolutions front matter metadata
---
We use metadata for discoverability of the content via search and for driving aspects of the site experience. Metadata is applied in the article in the front matter.  

If you're making an edit to an existing article, you probably won't have to change any metadata. However, if you're adding a new article, there are certain required metadata values that you'll need to include in the front matter of the file.  

Here's an example of metadata applied in the front matter of a Markdown article:  

```
---
title: The article title to show at the start of the topic and in the navigation pane
order: The article position in the navigation pane. By default all topics are sorted alphabetically
description: 115 - 145 character description to show in search results
keywords:
- Algolia application keywords
---
Text of the article
```

You can use variables that are listed in the folder [_data](https://github.com/Devolutions/doc/tree/master/docs/_data). To do so, insert "eleventyComputed:" in the front matter as shown here:  

```
---
eleventyComputed:
  title:  Title with {{ en.VARIABLE }}.
  description: 115 - 145 character description to show in search results
---
Text of the article
```

Attributes are case-sensitive. Enter them exactly as listed, and use a colon and a space between the attributes and the value. If an attribute value includes a colon (:), a hash (#), or any other special character, you must enclose it either single (') or double (") quotes. For example:  

```
---
title: 'Quickstart: How to use special characters in Markdown article'
---
Text of the article
```