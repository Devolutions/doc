---
eleventyComputed:
  title: Images
  description: Remote Desktop Manager's global image management uses a dynamic form to easily create virtual folders and subfolders for image storage. 
---

{{ en.RDM }}'s global image management uses a dynamic form to easily create virtual folders and subfolders for image storage.

The following file types are currently supported for global and custom images: 
* .jpg 
* .jpeg
* .bmp
* .png
* .svg 
* .ico

1. Go to ***Administration*** – ***System Vault*** – ***Images*** in the ribbon of {{ en.RDM }}.
![Administration – Images](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6148.png)
1. The ***Entry Image Management*** window open.
1. Click ***Add (+)*** to choose an image.
![Entry image management – Add (+)](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6149.png)
1. In the ***Entry Image Settings***, enter the ***Name*** and virtual ***Folder*** of the image.
![Entry Image Settings](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6165.png)

{% snippet icon.badgeInfo %}
 You can add a subfolder by adding a `\` in the ***Folder*** field. Clicking on a virtual folder will not display the contents of its subfolder, since it is possible to have an image only in a virtual folder.
{% endsnippet %}  

![Adding a subfolder](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6151.png)

5. Click ***OK*** to close the window.

![Folder and subfolder](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6152.png)

The folder, subfolder and image are saved.

## Migrate Custom images to System images

1. Go to ***Administration*** – ***Migrate*** – ***Migrate Custom Images*** in the ribbon of {{ en.RDM }}.
![Administration – Migrate – Migrate Custom Images](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6169.png)
1. Choose ***Migrate all images from current vault*** or ***Select images to migrate***.
![Migrate all images from current vault and Select images to migrate](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6170.png)
1. In the ***Migrate Custom Images*** window, choose the image and select or create the ***Destination folder***.
1. Click ***Migrate***.
![Choose the image and select or create the Destination folder](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6175.png)  
1. A confirmation window appears. Click ***Yes***.
![Confirmation window](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6173.png)  
6. The migration is completed. Click ***OK***.
![Migration completed](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6174.png)
1. Select ***Administration*** – ***System Vault*** – ***Images*** in the ribbon of {{ en.RDM }}.  
![Administration – System Vault – Images](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6176.png)  
The folder and image are now in the ***Entry Image Management*** window.
![Entry Image Management window](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6178.png)
