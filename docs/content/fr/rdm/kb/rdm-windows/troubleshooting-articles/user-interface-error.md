---
eleventyComputed:
  title: Erreur de l'interface utilisateur
---
Pour de nombreux cas d'erreur de l'interface utilisateur dans {{ fr.RDM }}, cliquer sur ***Windows*** - ***Réinitialiser la mise en page***. Cela peut résoudre efficacement la plupart de vos problèmes d'affichage.
![!!KB4095](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4095.png)
![!!KB4753](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4753.png)
## Problème 1
Le ruban a été caché et je ne sais pas comment le rendre visible.
### Solution
Utiliser <kbd>Alt</kbd>+<kbd>F11</kbd> ou utiliser le menu système de l'application, cocher la commande ***Volet supérieur***.
## Problème 2
L'arborescence a disparu du ***{{ fr.NPANE }}***.
### Solution
Le ***{{ fr.NPANE }}*** peut être affiché dans de nombreux modes :

Sélectionner l'arborescence avec ***Affichage – {{ fr.VLT_MAJ }} – Vue Arborescente*** ou utiliser le raccourci par défaut F7.
![!!KB4094](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4094.png)
## Problème 3
La mise en page du formulaire principal est rompue.
### Solution
Utiliser l'option ***Réinitialiser la mise en page*** pour revenir à la disposition de l'interface utilisateur par défaut dans l'onglet ***Fenêtre***.
![!!KB4095](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4095.png)
{% snippet, "badgeInfo" %}
La réinitialisation de la mise en page peut ne pas résoudre tous les problèmes. Fermer l'application et supprimer les fichiers de mise en page (*.lyt) dans **%LocalAppData%\Devolutions\RemoteDesktopManager** pour restaurer complètement la mise en page.
{% endsnippet %}

## Problème 4
La barre d'outils d'accès rapide doit être réinitialisée.
![!!KB4096](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4096.png)
### Solution
Pour réinitialiser la barre d'outils d'accès rapide, fermer l'application et supprimer le fichier remotedesktopmanager.qtb dans **%LocalAppData%\Devolutions\RemoteDesktopManager**
## Problème 5
Le ***{{ fr.NPANE }}*** affiche uniquement mes favoris.
### Solution
Seuls vos favoris sont affichés, le nœud racine est également intitulé ***Favoris***.
![!!KB4097](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4097.png)

Vous avez peut-être activé un filtre.

Cliquer sur le ***bouton ellipsis*** de la boîte de filtre de recherche

Désélectionner l'élément de menu ***Afficher uniquement les favoris***.
