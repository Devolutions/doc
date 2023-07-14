## How to add links in Markdown

Two link types can be used in our documentation:  
* [Internal links](#internal-links) redirect to an anchor in the same topic.  
* [External links](#external-links) redirect to another help topic or to any external URL.  

### Internal links

An internal link redirects to an anchor in the same topic. You place an anchor where you want the reader to be redirected after clicking your link.  

You don't have to create an anchor to redirect to a heading, as they already are considered anchors by default.  

#### Link to a heading (same topic)

1. In the same topic as the heading, create the link `[text](#HeadingName)`.  
1. Replace `text` with the text of the link.  
1. Replace `HeadingName` with the name of the heading (leave the "#"). To get this name, follow these instructions:  
    1. Click the ***Preview*** tab when editing in GitHub.  
![Preview tab](https://webdevolutions.azureedge.net/docs/common/GitHub_contribute_previewtab.png)  
    1. Hover over the heading, then click on the link icon that appears next to it.  
![Heading link](https://webdevolutions.azureedge.net/docs/common/GitHub_contribute_linkicon.png)  
    1. In the URL bar in your browser, copy the header name which is located after the "#". Replace `HeadingName` with what you copied.  
![Heading URL](https://webdevolutions.azureedge.net/docs/common/GitHub_contribute_URLheading.png)  

#### Link to an anchor (same topic)

1. Click in the topic where you want the anchor to be.  
1. Create the anchor `<a name="AnchorName"></a>`.  
1. Replace `AnchorName` with an anchor name that reflects the context.  
1. In the same topic, create the link `[text](#AnchorName)`.  
1. Replace `text` with the text of the link.  
1. Replace `AnchorName` with the same anchor name previously created (leave the "#").  

### External links

1. Click in the topic where you want the link to be.  
1. Create the link following one of the templates below:  
    * Link to a Devolutions help topic: `[text](/ProjectName/FolderNames/FileName/)`  
      Example: `[RDM Security](/rdm/windows/overview/security/)`  
    * Link to any other URL: `[text](Complete URL)`  
      Example: `[Microsoft website](https://www.microsoft.com/)`  
