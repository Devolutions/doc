---
eleventyComputed:
  title: Importer des fichiers CSV dans {{ fr.DHUBB }} avec {{ fr.DHUBI }}
  description: "{{ fr.DHUBI }} est notre {{ fr.CTOOL }} essentiel conçu pour importer des fichiers dans votre {{ fr.DHUB }}."
---
{{ fr.DHUBI }} est notre {{ fr.CTOOL }} essentiel conçu pour importer des fichiers dans votre {{ fr.DHUB }}. Suivre les étapes ci-dessous pour apprendre à importer des fichiers CSV dans {{ fr.DHUBB }}.

{% snippet, "badgeInfo" %}
Ce sujet suppose que vos fichiers CSV sont prêts à être importés. Pour des conseils et recommandations sur comment préparer vos fichiers CSV pour l'importation, visiter [Stratégies et format d'importation des fichiers CSV avec {{ fr.DHUBI }}](/hub/kb/hub-business/knowledge-base/csv-files-import-strategies-format-hub-importer/).

Si vous n'avez pas {{ fr.DHUBI }}, [télécharger et installer le](https://devolutions.net/password-hub-importer) d'abord. Ensuite, après avoir lancé l'application, sélectionner votre ***{{ fr.DHUBB }} Host*** et se connecter avec votre {{ fr.DA }}.
{% endsnippet %}

1. Une fois connecté, sélectionner le format ***CSV*** dans le menu ***Type d'Importation***. Ensuite, cliquer sur le bouton des points de suspension à côté du champ ***Source*** pour ouvrir l'***Assistant d'Importation Csv***.

   Dans l'éventualité où vous avez besoin d'importer les ***Paramètres Spécifiques***, laisser la case ***Changer l'ID*** décochée dans la section des Paramètres d'Importation à côté du bouton des points de suspension.

   ![Type d'Importation CSV](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2112.png)

1. Dans la fenêtre ***Assistant d'Importation Csv***, sélectionner l'***Instruction de format d'en-tête*** (***Session***, ***Identifiant***, ***Information***, ou ***Modèle***) dans la liste déroulante.
![Sélection de l'Instruction de Format d'En-tête](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2114.png)
1. Cliquer sur le bouton des points de suspension à côté du champ ***Ouvrir le fichier CSV*** pour sélectionner vos fichiers à importer.
![Ouvrir le Fichier CSV](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2115.png)
1. Sélectionner votre fichier et cliquer ***Ouvrir***.
1. Cliquer ***Suivant*** dans la fenêtre ***Assistant d'Importation Csv***.
1. À cette étape, vous pouvez modifier certains paramètres et voir un aperçu de vos informations d'entrées :
    * ***Délimiteur*** : Sélectionner un délimiteur entre une Virgule, un Point-virgule, ou un Symbole personnalisé.
    * ***A des en-têtes*** : Activer cette option si vos entrées dans votre fichier ont des en-têtes.
    * ***Générer un mappage direct*** : Correspond aux noms de colonnes dans votre fichier CSV avec ceux dans {{ fr.RDM }}. Activer cette option uniquement si vous connaissez le nom du champ dans le code de {{ fr.RDM }} ou si votre fichier CSV provient d'une exportation CSV précédente de {{ fr.RDM }}.
    * ***Mettre à jour l'aperçu*** : Applique les modifications apportées aux paramètres à l'aperçu des entrées.

![Paramètres et Aperçu](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2121.png)

1. Lorsque terminé, cliquer ***Suivant***.
1. Sous ***Mappages***, vous pouvez éditer, ajouter ou supprimer des variables.
    * Éditer une variable : Sélectionner le type de variable dans la liste déroulante du champ de gauche. Choisir entre ***Nom***, ***Nom d'utilisateur***, ***Url***, ***Mot de passe***, ***Description***, ***Dossier***, ***Domaine***, ***Hôte***, ***Port***, ***Étiquettes***, ***Champ personnalisé*** (de 1 à 5), ***Propriété directe***, ou ***Modèle***. Dans le champ de droite, entrer la variable.
    * Ajouter une variable : Cliquer sur le bouton d'ajout. Une nouvelle ligne apparaîtra au bas de la liste. Sélectionner le type de variable dans la liste déroulante du champ de gauche. Choisir entre ***Nom***, ***Nom d'utilisateur***, ***Url***, ***Mot de passe***, ***Description***, ***Dossier***, ***Domaine***, ***Hôte***, ***Port***, ***Étiquettes***, ***Champ personnalisé*** (de 1 à 5), ***Propriété directe***, ou ***Modèle***. Dans le champ de droite, entrer la variable.
    * Supprimer une variable : Cliquer sur le bouton "X" à côté.

![Éditer, Ajouter, ou Supprimer des Variables](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2124.png)

1. Lorsque terminé, cliquer ***Terminer***.
1. Dans la liste déroulante ***Coffre Cible {{ fr.VLT }}***, sélectionner le {{ fr.VLT }} dans lequel importer vos entrées.
![Sélection du Coffre Cible {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2116.png)
1. Sélectionner quelle entrée vous souhaitez importer. Vous pouvez utiliser les boutons ***Tout Sélectionner*** et ***Tout Désélectionner*** en bas ou les sélectionner/désélectionner une par une en cochant/décochant la case à côté de l'entrée.
1. Lorsque la sélection est terminée, cliquer sur ***Importer la Sélection dans {{ fr.DHUB }}***.
1. Lorsque le processus d'importation est terminé, une fenêtre apparaîtra pour vous en informer. Vous pouvez la fermer en appuyant sur ***OK***.

Vos entrées de fichier CSV ont maintenant été importées avec succès. Répéter ces étapes pour chaque fichier CSV que vous souhaitez importer.
