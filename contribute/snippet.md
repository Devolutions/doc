---
title: Snippet
---
To generate a new snippet, use the following shortcode {% snippet %}{% endsnippet %}. Including an icon is entirely optional.  

Please note that the snippet's content is treated as Markdown.  

```markdown
{% snippet %}
Here is the content of my snippet in Markdown
{% endsnippet %}

{% snippet icon.badgeCaution %}
Here is the content of my snippet in Markdown
{% endsnippet %}
```

The list of snippet icons are available in the [_data](https://github.com/Devolutions/doc/blob/master/docs/_data/icon.json) folder.  

## Basic information snippet

The initial set of icons represents fundamental information and is characterized by a circular shape.  

{% snippet icon.badgeHelp %}
Used to refer to other help projects.
{% endsnippet %}

{% snippet icon.badgeInfo %}
Contains any type of basic information except safety information.
{% endsnippet %}

{% snippet icon.badgeNotice %}
Contains best practices and guidelines to follow.
{% endsnippet %}

{% snippet icon.badgeCaution %}
Contains steps that you must follow, not doing so could cause some data loss.
{% endsnippet %}

{% snippet icon.badgeWarning %}
Warning, this action is irreversible and cause destruction of data.
{% endsnippet %}

## Security information snippet

The second set of icons is dedicated to addressing security-related matters. These icons are designed in the shape of a shield.  

{% snippet icon.shieldInfo %}
Generic information related to the safety of the data.
{% endsnippet %}

{% snippet icon.shieldNotice %}
Contains security best practices and guidelines to follow.
{% endsnippet %}

{% snippet icon.shieldCaution %}
Risk of exposing some sensitive information.
{% endsnippet %}

{% snippet icon.shieldWarning %}
Warning, risk of exposing all the data.
{% endsnippet %}