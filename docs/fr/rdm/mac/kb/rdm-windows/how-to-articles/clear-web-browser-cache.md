---
eleventyComputed:
  title: Effacer le cache du navigateur web
  description: En supprimant un fichier, vous pouvez effacer le cache du navigateur web dans le dossier de l'application de {{ fr.RDM }}.
---
En supprimant un dossier, vous pouvez effacer le cache du navigateur web dans le dossier de l'application de {{ fr.RDM }}. Dans ***Fichier – Paramètres – Avancé***, vous pouvez cliquer sur le lien en bas de la fenêtre pour accéder au dossier de l'application. Si votre {{ fr.RDM }} se trouve dans **Program Files**, vous devriez trouver les dossiers ***EO.WebBrowser.Cache*** et ***WebView2.Cache*** dans le **localappdata**.

1. Fermer votre application {{ fr.RDM }}.
1. Dans le dossier de l'application, localiser les dossiers ***EO.WebBrowser.Cache*** et ***WebView2.Cache***. Selon votre version de {{ fr.RDM }}, vous pourriez n'avoir qu'un de ces dossiers.
   {% snippet, "badgeInfo" %}
   Si vous ne trouvez aucun de ces dossiers, le dossier où les fichiers de configuration sont stockés a peut-être été modifié à l'aide d'un fichier **override.cfg**. Voir [Emplacement du fichier de configuration](/rdm/windows/installation/client/configuration-file-location/#override-the-default-path) pour plus d'informations.
   {% endsnippet %}
1. Renommer ou supprimer le(s) dossier(s). La meilleure pratique est de renommer les dossiers, car dans ce cas vous ne perdez aucune donnée.
1. Redémarrer {{ fr.RDM }}.
