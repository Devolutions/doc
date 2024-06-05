---
eleventyComputed:
  title: Assistant d'importation d'ordinateur
---
{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible lors de l'utilisation d'une [source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

L'***Assistant d'importation d'ordinateur*** permet de créer des sessions pour des ordinateurs en utilisant l'une des sources suivantes :

* [Voisinage réseau](#voisinage-réseau)
* [Annuaire actif](#annuaire-actif) (votre domaine actuel ou un autre domaine sur votre réseau)
* [Liste d'hôtes](#liste-d'hôtes) (liste d'ordinateurs à partir d'un fichier)

## Vue d'ensemble

L'assistant comprend quelques étapes principales :

1. Sélectionner des ordinateurs en utilisant l'une des trois sources.
1. Optionnellement, appliquer un modèle à partir duquel baser les nouvelles sessions.
1. Optionnellement, éditer chaque nouvelle session créée avant qu'elles ne soient enregistrées.

La sélection du modèle ne doit pas être négligée. En fait, c'est probablement l'étape la plus importante pour garantir que vos nouvelles sessions soient utilisables juste après leur création. Vous devriez diviser les sessions en lots basés sur le modèle que vous devez appliquer et importer un lot à la fois.

## Flux de travail

Lors du lancement de l'assistant, il vous est demandé de choisir la source à utiliser.

L'option ***Résoudre l'adresse IP*** doit être cochée si vous souhaitez utiliser l'adresse IP dans le champ hôte de vos sessions au lieu du nom d'hôte.
![Assistant d'importation de session](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10736.png)

Reportez-vous aux sections ci-dessous en fonction de la source choisie.

### Voisinage réseau

L'écran suivant sera immédiatement peuplé avec le résultat de la découverte réseau.
![!!clip10737](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10737.png)

Si vous préférez que vos sessions utilisent l'adresse IP au lieu du nom d'hôte pour se connecter aux appareils, cochez l'option ***Sélectionner par adresse IP***. Cela nécessite que l'option ***Résoudre par adresse IP*** ait été sélectionnée dans le premier écran de l'assistant. Sélectionnez les ordinateurs pour lesquels vous souhaitez créer une session et procédez à la [Sélection de modèle](#sélection-de-modèle) ci-dessous. La sélection multiple est autorisée en utilisant <kbd>Ctrl</kbd>+clic et <kbd>Shift</kbd>-clic.

### Annuaire actif

L'écran suivant vous permet de sélectionner le domaine à interroger après quoi vous devez appuyer sur actualiser pour charger la liste des ordinateurs disponibles.
![!!clip10093](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10093.png)

Après l'exécution de la requête, les résultats sont affichés dans la grille.
![!!clip10094](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10094.png)

Si vous préférez que vos sessions utilisent l'adresse IP au lieu du nom d'hôte pour se connecter aux appareils, cochez l'option ***Sélectionner par adresse IP***. Cela nécessite que l'option ***Résoudre par adresse IP*** ait été sélectionnée dans le premier écran de l'assistant. Sélectionnez les ordinateurs pour lesquels vous souhaitez créer une session et procédez à la [Sélection de modèle](#sélection-de-modèle) ci-dessous. La sélection multiple est autorisée en utilisant <kbd>Ctrl</kbd>+clic et <kbd>Shift</kbd>-clic.

### Liste d'hôtes

L'écran suivant vous permet d'entrer une liste d'hôtes dans un contrôle d'édition. Si vous préférez que vos sessions utilisent l'adresse IP pour se connecter aux hôtes, vous devez entrer le nom d'hôte, un pipe, puis l'adresse IP.
![!!clip10095](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10095.png)

Procédez à la [Sélection de modèle](#sélection-de-modèle) ci-dessous.

### Sélection de modèle

La sélection de modèle est une étape optionnelle, mais c'est le seul moyen que vous avez de choisir un type de protocole autre que RDP. Elle vous permet également de définir vos préférences et de les utiliser pour toutes les sessions créées. En fait, nous vous recommandons d'importer par lots pour chacun des types de session que vous devez importer.

Si vous avez l'intention de modifier chacune de vos sessions importées au fur et à mesure de leur création, cochez l'option ***Éditer*** l'entrée importée. Notez que chaque session sera affichée séquentiellement afin que vous puissiez effectuer votre modification et enregistrer. Une [Édition par lot](/rdm/windows/commands/edit/batch/batch-edit/) est probablement préférable si vous avez plus de quelques sessions à importer.
