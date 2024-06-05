---
eleventyComputed:
  title: Documentation
  description: La fonctionnalité Documentation dans {{ fr.RDMMAC }} permet de stocker des informations sur les ressources dans la source de données.
---
La fonctionnalité ***Documentation*** permet de stocker des informations sur les ressources dans la source de données. Pour accéder à la documentation d'une entrée, sélectionner une entrée dans le [{{ fr.NPANE }}](/rdm/mac/user-interface/navigation-pane/), puis sélectionner l'onglet ***Documentation*** dans le ***Tableau de bord***. Alternativement, cliquer avec le bouton droit sur une entrée dans le ***{{ fr.NPANE }}***, puis sélectionner ***Voir – Documentation***.

La documentation est rédigée en utilisant ***Markdown*** ou ***WYSIWYG***. ***Texte brut*** et ***HTML*** sont également disponibles.

{% snippet, "badgeInfo" %}
* Cette fonctionnalité est également disponible avec {{ fr.DVLS }}, {{ fr.DHUBB }}, {{ fr.DHUBP }} et les sources de données SQL Server.
* La fonctionnalité ***Documentation*** est chiffrée uniquement pour les sources de données {{ fr.DVLS }}, {{ fr.DHUBB }}, et {{ fr.DHUBP }}. Si vous utilisez des sources de données comme SQL Server ou Azure SQL, la fonctionnalité ***Documentation*** n'est pas chiffrée.
* La fonctionnalité d'utilisation de la ***Documentation*** en mode hors ligne est disponible pour les documents stockés dans la base de données. Cette propriété est définie pour être héritée par défaut.
{% endsnippet %}

## Créer une nouvelle page
1. Choisir l'entrée dans le ***{{ fr.NPANE }}***.
1. Aller à l'onglet ***Documentation*** et cliquer sur ***Nouvelle page***.
![Onglet Documentation – Nouvelle page](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6029.png)
1. Entrer un nom et sélectionner un ***Type de documentation***.
![Type de documentation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6028.png)
Note : Vous pouvez basculer entre ***Markdown*** et ***WYSIWYG*** lorsque vous sélectionnez ***Markdown*** dans ***Type de documentation***.
![Markdown et WYSIWYG](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6037.png)
1. Choisir un ***Modèle par défaut***.
![Modèle par défaut](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6031.png)

   ***Tutoriel*** crée un document contenant du texte généré et ***Vide*** un document vierge. La dernière option, ***Personnalisé***, vous permet de sélectionner un modèle personnalisé de votre choix.

   Vous pouvez sélectionner ***Définir comme nouveau défaut*** pour sauvegarder vos préférences lors de la création d'un nouveau document et ***Ajouter comme dernière page*** pour insérer la nouvelle page en bas de la liste des fichiers.

1. Cliquer sur ***OK*** pour fermer la fenêtre.
## Synchroniser la documentation hors ligne
1. Choisir l'entrée dans le ***{{ fr.NPANE }}***.
1. Aller à ***Administration – Paramètres {{ fr.VLT_MAJ }}*** dans le ruban.
![Paramètres {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6000.png)
1. Dans ***Paramètres de sécurité – Hors ligne – Synchroniser la documentation en mode hors ligne***, sélectionner ***Oui***.
![Synchroniser la documentation en mode hors ligne](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6004.png)
1. Cliquer sur ***OK*** et fermer la fenêtre.

L'onglet ***Documentation*** hors ligne est maintenant disponible dans le ***Tableau de bord***.
![Onglet Documentation](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6003.png)
