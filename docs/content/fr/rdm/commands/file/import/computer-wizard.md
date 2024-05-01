---
eleventyComputed:
  title: Assistant d'importation pour l'ordinateur
---
{% snippet icon.badgeInfo %}
Cette fonctionnalité est seulement disponible lors de l'utilisation d'une [Source de données avancée](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

L'***Assistant d'importation pour l'ordinateur*** vous permet de créer des sessions pour les ordinateurs à l'aide de l'une des sources suivantes :

* [Voisinage réseau](#voisinage-réseau)
* [Activer répertoire](#activer-répertoire) (votre domaine actuel ou un autre domaine sur votre réseau)
* [Liste d'hôtes](#liste-des-hôtes) (liste d'ordinateurs à partir d'un fichier)

## Aperçu

L'assistant a quelques étapes à suivre :

1. Sélectionner les ordinateurs en utilisant l'une des trois sources;
1. Optionnellement appliquer un modèle à partir duquel baser de nouvelles sessions; et
1. Modifier optionnellement chaque nouvelle session créée avant de les enregistrer.

La sélection de modèles ne doit pas être négligée, en fait, c'est probablement l'étape la plus importante pour vous assurer que vos sessions nouvellement créées sont utilisables juste après leur création. Vous devriez diviser les sessions en lots en fonction du modèle dont vous avez besoin pour appliquer et importer un lot à la fois.

## Processus

Au lancement de l'assistant, vous êtes invité à indiquer la source à utiliser.

L'option ***Résoudre l'adresse IP*** doit être cochée si vous souhaitez utiliser l'adresse IP dans le champ hôte de vos sessions au lieu du nom d'hôte.
![Importer l'assistant de la session](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10736.png)

Reportez-vous aux sections ci-dessous en fonction de la source choisie.

### Voisinage réseau

L'écran suivant sera immédiatement rempli avec le résultat de la découverte du réseau.
![!!clip10737](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10737.png)

Si vous préférez que vos sessions utilisent l'adresse IP au lieu du nom d'hôte pour se connecter aux périphériques, cocher l'option ***Résoudre l'adresse IP***. Cela nécessite que ***Résoudre l'adresse IP*** soit sélectionné dans le premier écran de l'assistant. Sélectionner les ordinateurs pour lesquels vous souhaitez créer une session et passez à la [Sélection de modèles](#sélection-de-modèles) ci-dessous. La sélection multiple est autorisée en utilisant <kbd>Ctrl</kbd>+clic et <kbd>Maj</kbd>+clic.

### Activer répertoire

L'écran suivant vous permet de sélectionner le domaine à interroger, après quoi vous devez appuyer sur ***Actualiser*** pour charger la liste des ordinateurs disponibles.
![!!clip10093](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10093.png)

Une fois la requête exécutée, les résultats sont affichés dans cette fenêtre.
![!!clip10094](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10094.png)

Si vous préférez que vos sessions utilisent l'adresse IP au lieu du nom d'hôte pour se connecter aux périphériques, cocher l'option ***Résoudre l'adresse IP***. Cela nécessite que ***Résoudre l'adresse IP*** soit sélectionné dans le premier écran de l'assistant. Sélectionner les ordinateurs pour lesquels vous souhaitez créer une session et passez à la [Sélection de modèles](#sélection-de-modèles) ci-dessous. La sélection multiple est autorisée en utilisant <kbd>Ctrl</kbd>+clic et <kbd>Maj</kbd>+clic.

### Liste des hôtes

L'écran suivant vous permet de saisir une liste d'hôtes dans un mode éditable. Si vous préférez que vos sessions utilisent l'adresse IP pour se connecter aux hôtes, vous devez entrer le nom d'hôte, un canal, puis l'adresse IP.
![!!clip10095](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10095.png)

Passer à la [Sélection de modèles](#sélection-de-modèles) ci-dessous.

### Sélection de modèles

La sélection du modèle est une étape facultative, mais c'est la seule façon de choisir un type de protocole autre que RDP. Il vous permet également de définir vos préférences et de les faire utiliser par toutes les sessions créées. En fait, nous vous recommandons d'importer par lots pour chaque type de session que vous devez importer.

Si vous avez l'intention de modifier chacune de vos sessions importées lors de leur création, cochez l'option ***Modifier l'entrée importée***. Noter que chaque session sera affichée séquentiellement afin que vous puissiez effectuer votre modification et enregistrer. [Modifier le lot](/fr/rdm/windows/commands/edit/batch/batch-edit/) est probablement préférable si vous avez plus de quelques sessions à importer.

