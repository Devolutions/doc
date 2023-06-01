# Devolutions Docs

Devolutions's documentations build with 11ty.

## Requirements

- [Node.js](https://nodejs.org/en/) >= 12.0.0

## Markdown

Since we are using 11ty to build our markdown files, we can add customs attributes and shortcodes.

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

**Code Language**

Here is the list of language supported: [Supported Languages — highlight.js 11.7.0 documentation](https://highlightjs.readthedocs.io/en/latest/supported-languages.html)  

Use this markdown syntax with triple back ticks followed by the code language.  

Example for PowerShell:

````
```powershell
Insert PowerShell code
```
````
