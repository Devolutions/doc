## Manage snippets in Markdown

To generate a new snippet, use the following shortcode {% snippet %}{% endsnippet %}. Including an icon is entirely optional.  

The snippet's content is treated as Markdown.  

```markdown
{% snippet %}
Here is the content of my snippet in Markdown.
{% endsnippet %}

{% snippet icon.badgeCaution %}
Here is the content of my snippet in Markdown.
{% endsnippet %}
```

The list of snippet icons is available in the [_data](https://github.com/Devolutions/doc/blob/master/docs/_data/icon.json) folder.  

### Basic information snippet

The initial set of icons represents fundamental information and is characterized by a circular shape.  

![!!Snippet Basic](https://webdevolutions.azureedge.net/docs/common/contribute_snippet_basic.png) 

### Security information snippet

The second set of icons is dedicated to addressing security-related matters. These icons are designed in the shape of a shield.  

![!!Snippet Security](https://webdevolutions.azureedge.net/docs/common/contribute_snippet_security.png) 
