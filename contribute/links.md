## Add links in Markdown

You can add links in our documentation that redirect to useful information further down the topic or elsewhere. Please note that for security reasons, any links added will be reviewed by our security team.

Two link types can be used in our documentation:
* [Internal links](#internal-links-same-topic) redirect to a heading in the same topic.
* [External links](#external-links) redirect to another Devolutions documentation topic or to an external URL.

### Internal links (same topic)

An internal link redirects to a heading in the same topic.

1. In the same topic as the heading, create the link `[text](#HeadingName)`.
1. Replace `text` with the text of the link. It should be representative of the link's content.
1. Replace `HeadingName` with the name of the heading (leave the "#"). To get this name, follow these instructions:
    1. Click the ***Preview*** tab when editing in GitHub.
![Preview tab](https://cdnweb.devolutions.net/docs/docs_common_contribute_preview_tab.png)
{type="a"}
    1. Hover over the heading, then click on the link icon that appears next to it.
![Heading link](https://cdnweb.devolutions.net/docs/docs_common_contribute_heading_link.png)
    1. In the URL bar in your browser, copy the header name which is located after the "#". Replace `HeadingName` with what you copied.
![Heading URL](https://cdnweb.devolutions.net/docs/docs_common_contribute_heading_url.png)

### External links

An external link redirects to another Devolutions documentation topic or to an external URL.

#### Link to another Devolutions documentation topic

1. Click in the topic where you want the link to be and create the link `[text](/ProjectName/FolderName/FileName/)`.
1. Replace `text` with the text of the link. It should be representative of the link's content.
1. Replace `/ProjectName/FolderName/FileName/` with the path to the Devolutions topic, starting with the name of the project and finishing with the name of the topic file.

   Example: `[RDM Security](/rdm/windows/overview/security/)` would redirect to the [Security topic in Remote Desktop Manager Windows' help](https://docs.devolutions.net/rdm/windows/overview/security/).

#### Link to an external URL

1. Click in the topic where you want the link to be and create the link `[text](URL)`.
1. Replace `text` with the text of the link. It should be representative of the link's content.
1. Replace `URL` with the full URL of the page you want to redirect to.

   Example: `[Atlassian login](https://id.atlassian.com/login/)` would redirect to [Atlassian's login page](https://id.atlassian.com/login/).
