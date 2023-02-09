---
title: Installing RDM Linux on an Unsupported Distro
---
Even if Ubuntu is the only officially supported distro for {{ en.RDM }} , we know Linux is all about choices and we wouldn't want to change that.  

In that optic, here's a little guide to help you install {{ en.RDM }} Linux on your preferred, unsupported distro.  

First of all, dependencies :  

* glibc 2.27
* libwebkit2gtk-4.0
* ca-certificates
* libsecret-1-0
* gnome-keyring  

If you are installing RDM Linux on a distro supportingdeb files, you are done. Simply install the deb package and everything should be good to go. You can start RDM using the menu icon or the remotedesktopmanager terminal command.  

You can also opt to install the net.devolutions.RDM or net.devolutions.RDMFree flatpak package from flathub.  

Otherwise, you can manually install RDM Linux using the following steps :  

* Extract deb file content. (ar x RemoteDesktopManager_x.x.x.x_amd64.deb)
* Extract data.tar.xz content. (tar -xf data.tar.xz)
* Copy bin/remotedesktopmananger to /bin
* Copy usr/lib/devolutions/RemoteDesktopManager to /usr/lib/devolutions/RemoteDesktopManager  

You can now start RDM using the remotedesktopmanager terminal command.  

{% snippet icon.badgeCaution %}
Known issues : On platform running non-gnome desktop environment, the splash screen might prevent entering your serial when launching RDM for the first time.  

As a workaround, press the ***Cancel*** button to close the dialog, that should make the splash screen disappear. You can then use the ***Help*** menu tab to access the registration form again.
{% endsnippet %}
