---
eleventyComputed:
  title: Permission d'accès à tous les fichiers refusée
  description: Google nous a refusé la permission d'accès à tous les fichiers. Sans elle, certaines fonctionnalités sont soit indisponibles, soit considérablement altérées.
---
Google a renforcé ses politiques de confidentialité, nous refusant la permission d'**Accès à tous les fichiers**. Cette permission est essentielle pour plusieurs fonctionnalités de notre application, et sans elle, certaines fonctionnalités sont soit indisponibles, soit considérablement altérées. Ces fonctionnalités incluent :

* **Vue partagée** : Cette fonctionnalité n'est plus disponible pour les sessions FTP, SMB, Google Drive et Azure Blob Storage. Les utilisateurs ne pourront pas parcourir la structure de fichiers sur leur appareil local ou copier et déplacer facilement des fichiers entre l'appareil et la session distante. Seule la structure de fichiers sur l'hôte distant sera visible, rendant la gestion des fichiers encombrante.
* **Sessions RDP** : Navigation dans les fichiers client depuis l'hôte distant : Les hôtes distants ne peuvent plus parcourir les fichiers client sur l'appareil Android, entravant la manipulation de fichiers entre l'hôte distant et le client.
* **Sessions SSH** : Le support Zmodem pour le téléchargement et le téléversement n'est plus disponible.
* **Sessions SFTP** : Les horodatages originaux ne sont pas préservés lors du téléchargement de fichiers. Le fichier téléchargé aura l'horodatage du téléchargement réel plutôt que celui du fichier original.

Nous nous excusons pour tout inconvénient que cela pourrait causer et nous nous engageons à améliorer l'expérience utilisateur. Nous travaillerons également avec Google pour essayer de récupérer la permission d'**Accès à tous les fichiers** que nous avions précédemment jusqu'à ce qu'elle soit récemment révoquée pour des raisons que nous tentons de comprendre.