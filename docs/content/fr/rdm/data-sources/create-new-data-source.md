---
eleventyComputed:
  title: Créer une source de données
  order: 10
  description: Une fois vos besoins identifiés, vous pouvez procéder à la création de votre première source de données.
---
Lors du premier lancement, {{ fr.RDM }} utilise une source de données SQLite locale. Les différents types de sources de données sont listés dans [Types de sources de données](/rdm/data-sources/data-sources-types/). Pour obtenir de l'aide dans la sélection d'une source de données adaptée à vos besoins, veuillez consulter notre section [Commencer ici](/rdm/getting-started/).

{% youtube 'hkT20rQ41V4' %}

Une fois vos besoins identifiés, vous pouvez procéder à la création de votre première source de données :

1. Dans {{ fr.RDM }}, aller à ***Fichier – Sources de données***.
1. Cliquer sur ***Ajouter une nouvelle source de données***.
![Ajouter une nouvelle source de données](https://cdnweb.devolutions.net/docs/RDMW2000_2024_1.png)
1. Sélectionner le type de source de données à créer, puis cliquer sur ***Ajouter***. Dans l'exemple ci-dessous, une source de données {{ fr.DVLS }} est en cours de création.
![Sélection du type de source de données](https://cdnweb.devolutions.net/docs/RDMW2001_2024_1.png)
1. Configurer les paramètres de connexion de la source de données. Pour valider les informations, cliquer sur ***Tester la connexion*** ou ***Tester l'hôte*** selon le type de source de données créé.
![Configuration de la source de données](https://cdnweb.devolutions.net/docs/RDMW2002_2024_1.png)
1. Cliquer sur ***Ajouter*** lorsque la configuration est complète.
1. Une fois créée, la nouvelle source de données devrait s'ouvrir automatiquement. Vous pouvez également ouvrir manuellement la source de données en la sélectionnant dans la liste déroulante des sources de données en haut du ***{{ fr.NPANE }}***.

Vous devrez peut-être [ajouter une licence](/rdm/windows/commands/administration/management/licenses/) à votre source de données. Si vous utilisez une [source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), il n'est pas nécessaire d'ajouter une licence dans {{ fr.RDM }} car le numéro de série de la licence est récupéré directement depuis la source de données.
