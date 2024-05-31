---
eleventyComputed:
  title: Installer {{ fr.RDMLINUX }} sur une distribution non supportée
---
Même si Ubuntu est la seule distribution officiellement supportée pour {{ fr.RDM }}, nous savons que Linux est synonyme de choix et nous ne voudrions pas changer cela.

Dans cette optique, voici un petit guide pour vous aider à installer {{ fr.RDMLINUX }} sur votre distribution préférée, bien qu'elle ne soit pas supportée.

Tout d'abord, les dépendances :

* glibc 2.29
* libwebkit2gtk-4.0
* ca-certificates
* libsecret-1-0
* gnome-keyring
* libvte-2.91

Si vous installez {{ fr.RDMLINUX }} sur une distribution supportant les fichiers deb, vous avez terminé. Installez simplement le paquet deb et tout devrait bien fonctionner. Vous pouvez démarrer {{ fr.RDM }} en utilisant l'icône du menu ou la commande terminal remotedesktopmanager.

Vous pouvez également choisir d'installer le paquet flatpak net.devolutions.RDM depuis flathub.

Sinon, vous pouvez installer manuellement {{ fr.RDMLINUX }} en suivant les étapes suivantes :

* Extraire le contenu du fichier deb. (ar x RemoteDesktopManager_x.x.x.x_amd64.deb)
* Extraire le contenu de data.tar.xz. (tar -xf data.tar.xz)
* Copier bin/remotedesktopmananger dans /bin
* Copier usr/lib/devolutions/RemoteDesktopManager dans /usr/lib/devolutions/RemoteDesktopManager

Vous pouvez maintenant démarrer {{ fr.RDM }} en utilisant la commande terminal remotedesktopmanager.
