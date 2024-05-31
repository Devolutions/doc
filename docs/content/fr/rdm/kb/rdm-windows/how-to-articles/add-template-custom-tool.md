---
eleventyComputed:
  title: Ajouter un modèle en tant qu'outil personnalisé
---
Obtenir un accès en un clic à un ***Outil Personnalisé*** qui appliquerait automatiquement un ***Modèle*** à l'une de vos connexions dans {{ fr.RDM }}. L'objectif principal de cette solution est de vous faire gagner quelques clics puisque le lancement d'une entrée avec un ***Modèle*** exigerait que vous suiviez toutes ces étapes :

1. Sélectionner l'une de vos entrées.
1. Faire un clic droit dessus.
1. Sélectionner ***Ouvrir avec des Paramètres***.
1. Sélectionner ***Ouvrir avec un Modèle***.
1. Choisir le ***Modèle*** que vous souhaitez utiliser dans la liste.

La méthode ci-dessous vous donnera un accès rapide dans la section ***Macros/Scripts/Outils*** du ***Tableau de bord*** {{ fr.RDM }} de l'entrée. Elle vous permettra de cliquer sur l'***Outil Personnalisé*** et d'ouvrir la connexion qui a actuellement le focus avec les paramètres spécifiés dans vos ***Modèles***.

{% snippet, "badgeInfo" %}
Pour utiliser cette méthode, vous devrez d'abord créer un ***Modèle*** sous ***Fichier - Modèles***. Pour plus d'informations, veuillez consulter ce [lien](/rdm/windows/commands/file/templates/)
{% endsnippet %}

{% snippet, "badgeInfo" %}
Le ***Modèle*** que vous créerez (modèle de base de données uniquement) devra avoir l'option ***Disponible dans Macros/Scripts/Outils*** activée dans la section ***Paramètres du Modèle – Disponibilité*** pour qu'il soit affiché dans votre ***Tableau de bord***.
{% endsnippet %}

![!!KB4667](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4667.png)

## Méthode

1. Dans le ***Ruban***, aller sous ***Éditer - Nouvelle Entrée - Ajouter Macros/Scripts/Outils***.
![!!KB5002](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5002.png)
1. Sélectionner ***Macro/Script/Outil de Modèle*** dans la section ***Outil*** et cliquer sur ***OK***.
![!!KB5003](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5003.png)
1. Dans l'onglet ***Général***, utiliser le bouton ellipsis pour sélectionner le ***Modèle*** que vous avez créé et cliquer sur ***OK*** une fois terminé.
![!!KB4668](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4668.png)
1. L'entrée ***Modèle (Macro/Script/Outil)*** que vous venez de créer peut être trouvée sous la section ***Macros/Scripts/Outils*** de votre ***Tableau de bord*** d'entrée lorsque vous sélectionnez l'une de vos entrées dans votre ***{{ fr.NPANE }}***.
![!!KB4669](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4669.png)

Il ne reste plus qu'à appliquer le modèle désiré.
