---
eleventyComputed:
  title: Version portable de {{ fr.RDM }}
  status: Sujet disponible en langue allemande
  description: Le personnel de support de Devolutions pourrait vous demander d'essayer une version portable de {{ fr.RDM }} pour isoler l'application d'un problème potentiel lié à un fichier local, une configuration ou une corruption de paramètre spécifique.
---
Le personnel de support de Devolutions pourrait vous demander d'essayer une version portable de {{ fr.RDM }} pour isoler l'application d'un problème potentiel lié à un fichier local, une configuration ou une corruption de paramètre spécifique.

Pour ce faire, vous devrez effectuer les étapes suivantes :

1. Télécharger le fichier ZIP {{ fr.RDM }} [Gratuit](https://devolutions.net/remote-desktop-manager/home/downloadfree) ou [Équipe](https://devolutions.net/remote-desktop-manager/home/downloadenterprise).
1. Créer un nouveau dossier sur votre Bureau.
1. Extraire le contenu du fichier ZIP dans le dossier créé à l'étape 2.
1. Aller dans ce dossier une fois le fichier ZIP extrait et exécuter **RemoteDesktopManager.exe**.

Si le problème est résolu, vous pouvez utiliser l'application {{ fr.RDM }} portable telle quelle.

Pour ce faire, vous devrez faire ce qui suit :

## Relocaliser la version portable de {{ fr.RDM }}

{% snippet, "badgeInfo" %}
Les étapes suivantes sont basées sur le fait que vous utilisez la source de données SQLite par défaut créée par {{ fr.RDM }}. Si ce n'est pas votre cas, passez à l'étape 4.
{% endsnippet %}

1. Aller dans votre dossier **%localappdata%\Devolutions\RemoteDesktopManager**.
1. Localiser le fichier **Connections.db** lié à votre source de données SQLite.
1. Le copier à l'intérieur de votre version portable de {{ fr.RDM }}.
1. Déplacer le contenu de votre dossier **RemoteDesktopManager** dans un dossier de sauvegarde que vous créerez. Ce faisant, vous aurez accès à une sauvegarde de votre configuration locale de {{ fr.RDM }} si nécessaire ultérieurement.
1. Copier le contenu de votre version portable de {{ fr.RDM }} dans le dossier **RemoteDesktopManager** situé sous votre **%localappdata%\Devolutions\RemoteDesktopManager**.
1. Créer un nouveau raccourci de {{ fr.RDM }} en utilisant le **RemoteDesktopManager.exe** contenu dans ce dossier.
1. Lancer {{ fr.RDM }}.
1. Accéder à vos données.
   - Si vous utilisez la source de données SQLite par défaut et que vous avez déplacé votre fichier **Connections.db** conformément aux étapes 1 à 3 ci-dessus, l'application devrait se connecter automatiquement et vous devriez avoir accès à vos données.
   - Si vous utilisez un type de source de données différent de SQLite, vous devrez créer et mapper celle-ci dans {{ fr.RDM }} comme indiqué dans [Créer une source de données](/rdm/windows/data-sources/create-new-data-source/).
