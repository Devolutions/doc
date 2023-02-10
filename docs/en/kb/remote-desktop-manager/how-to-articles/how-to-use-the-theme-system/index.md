---
title: How to use the Theme System
---
The ***Theme system*** of {{ en.RDM }} is still in its infancy and will evolve in future releases. You can override most images used by {{ en.RDM }} simply by providing an image in the ***Theme*** folder, the only requirement is that the file uses a specific name. Most images come in pairs, a small one and a large one. You must override both in order to be consistent.  

## Folder location

The ***Theme*** folder can be found in your local [Configuration folder](https://help.remotedesktopmanager.com/installation_configurationfilelocation.html) , under the ***Images*** folder.

## Image file specifications

### Tray icon

It must be a standard [*.ico](http://en.wikipedia.org/wiki/ICO_%28file_format%29) file containing at least a 16*16 image. The name must be Trayicon.ico

### Small images

Png file, 16*16 pixels.

### Large images

Png file, 32*32 pixels.

## Image file names

The file name is standardized as: {EntryType}{Size}.png  

For instance, for the ***Folder*** type, the image names are: GroupFolderLarge.png and GroupFolderSmall.png Another example is for RDP sessions, their name is RDPConfigured, resulting in SessionRDPConfiguredLarge.png and SessionRDPConfiguredSmall.png.  

Please consult [Image List](/kb/remote-desktop-manager/how-to-articles/how-to-use-the-theme-system/image-list/) to see a list of most images.
