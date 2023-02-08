# Devolutions Docs

Devolutions's documentations build with 11ty.

## Requirements

- [Node.js](https://nodejs.org/en/) >= 12.0.0

## Installation

Using command line at the root of the project execute `npm i`.

## Getting Started

If you're using VSCode simply execute de npm scripts `serve` or using command line at the root of the project execute `npm run serve`.

## Markdown

Since we are using 11ty to build our markdown files, we can add customs attributes and shortcodes.
A Markdown Monster guide is available in [confluence](https://devolutions.atlassian.net/wiki/spaces/DOC/pages/3382181896/Markdown+Monster+Guide).

### Front Matter

11ty use Front Matter for global variables. It is set at the line 1 of the file starting with `---` and ending with `---`.

```yaml
---
title: My title # Used for the H1 and the navigation tree
order: 0-9 # Used for custom ordering in the navigation tree
description: The topic description # Used to summarizing the document (will be displayed in a search result from a search engine).
keywords: Specific topic keywords # Used by the Algolia application.
- keyword 1
- keyword 2
---

## Markdown Content
```

### Variables

You can use variables that are listed in the folder [_data](https://github.com/Devolutions/doc/tree/master/docs/_data).

example
```markdown
{{ en.AGENT }}
## {{ en.AGENT }} Description
...
```
To use variables in the Front Matter add `eleventyComputed:`

example
```markdown
---
eleventyComputed:
  title: Batch Edit in {{ en.RDM }}

---
```

### Shortcodes

**YouTube Video**

To embed a YouTube video use the following shortcode, and use the video id as the parameter.

```markdown
{% youtube 'video_id' %}
```

**Snippet**

To create a new snippet, use the following shortcode, the icon is optional.
The content of the snippet is interpreted as markdown.

The list of the icons is available [here](https://github.com/Devolutions/doc/blob/master/docs/_data/icon.json).

Most Used Icons
- badgeCaution
- badgeHelp
- badgeInfo
- badgeNotice
- badgeWarning
- shieldCaution
- shieldInfo
- shieldNotice
- shieldWarning

```markdown
{% snippet %}
Here is the content of my snippet
{% endsnippet %}

{% snippet icon.badgeCaution %}
Here is the content of my snippet
{% endsnippet %}
```

**Code Language**

Here is the list of language supported: [Supported Languages — highlight.js 11.7.0 documentation](https://highlightjs.readthedocs.io/en/latest/supported-languages.html)  

Use this markdown syntax with triple back ticks followed by the code language.  

Example for PowerShell:

---
```powershell
Insert PowerShell code
```
---

```powershell
Insert PowerShell code
```
