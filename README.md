# Devolutions Docs

Devolutions's documentations build with 11ty.

## Requirements

- [Node.js](https://nodejs.org/en/) >= 12.0.0

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

