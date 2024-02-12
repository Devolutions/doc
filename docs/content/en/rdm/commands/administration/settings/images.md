---
eleventyComputed:
  title: Images
  description: "{{ en.RDM }}'s global image management uses a dynamic form to easily create virtual folders and subfolders for image storage."
---
{% tabs %}
{% tabItem "Windows" %}
{{ en.RDM }}'s global image management uses a dynamic form to easily create virtual folders and subfolders for image storage.

The following file types are currently supported for global and custom images:
* .jpg
* .jpeg
* .bmp
* .png
* .svg
* .ico

1. Go to ***Administration*** – ***Settings*** – ***Images*** in the ribbon of {{ en.RDM }}.
![Administration – Images](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6148.png)
1. The ***Entry Image Management*** window open.
1. Click ***Add (+)*** to choose an image.
![Entry image management – Add (+)](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6149.png)
1. In the ***Entry Image Settings***, enter the ***Name*** and virtual ***Folder*** of the image.
![Entry Image Settings](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6165.png)
   {% snippet icon.badgeInfo %}
   You can add a subfolder by adding a `\` in the ***Folder*** field. Clicking on a virtual folder will not display the contents of its subfolder, since it is possible to have an image only in a virtual folder.
   {% endsnippet %}  
   ![Adding a subfolder](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6151.png)

5. Click ***OK*** to close the window.  
![Folder and subfolder](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6152.png)

The folder, subfolder and image are saved.
{% endtabItem %}

{% tabItem "macOS" %}
{{ en.RDM }}'s global image management for macOS uses a dynamic form to easily create virtual folders and subfolders for image storage. Images are stored in a global list in the data source and resized to ***64 by 64 px***. 

The following file types are currently supported for global and custom images: 
* .jpg 
* .jpeg
* .bmp
* .png
* .svg
* .ico

1. Go to ***Administration*** – ***Images*** in the ribbon of {{ en.RDM }}.
![Administration – Images](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac6047.png)
1. The ***Entry Image Management*** window open.
1. Click ***Add (+)*** to choose an image.
![Entry image management – Add (+)](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac6048.png)
1. Choose the image by dragging, dropping or clicking.
1. In the ***Entry Image Settings***, enter the ***Name*** and virtual ***Folder*** of the image.
![Entry Image Settings](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac6049.png)  
1. Click ***OK*** to close the window.

The folder and image are saved.
{% endtabItem %}
{% endtabs %}