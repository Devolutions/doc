---
eleventyComputed:
  title: Stratégies et formats pour importer des fichiers CSV avec {{ fr.DHUBI }}
  description: Lors de l'importation de fichiers CSV avec {{ fr.DHUBI }}, une décision cruciale est de savoir si et comment appliquer un modèle aux entrées.
---
Lors de l'importation de fichiers CSV avec {{ fr.DHUBI }}, une décision cruciale est de savoir si et comment appliquer un modèle aux entrées. Choisir un modèle pendant le processus d'importation l'applique à toutes les entrées créées à partir de ce lot. Pour gérer efficacement différents types d'entrées, envisager de diviser vos entrées en fichiers CSV séparés en fonction des types que vous souhaitez créer.

Pour un contrôle plus précis sur les modèles utilisés, vous pouvez spécifier le modèle souhaité dans une colonne ***Modèle*** au sein du fichier CSV. Cependant, cela peut être inutile si vous pouvez déjà spécifier le type d'entrée directement dans le CSV.

### Colonnes et considérations sur les champs

* Lors de l'importation de fichiers CSV, il est important de noter que certaines validations d'entrées se produisent non pas dans la couche métier mais dans les dialogues de propriétés. Cette disparité peut conduire à des entrées invalides qui génèrent des erreurs pendant le processus d'importation. Pour garantir l'intégrité de vos données, veuillez valider soigneusement les entrées après l'importation.
* Les champs ***Hôte*** et ***Nom*** sont obligatoires dans le fichier CSV. Si aucun modèle spécifique n'est désigné, le type RDP (Remote Desktop Protocol) sera automatiquement appliqué par défaut.
* Les valeurs par défaut pour les champs ne sont pas sérialisées ; cela signifie qu'elles sont omises de la structure de sortie à moins d'être explicitement entrées dans le fichier CSV.
* Prendre en charge une gamme complète de champs entraîne un coût de performance. Le processus d'importation est complexe et prend du temps en raison de l'accès dynamique étendu aux champs requis. Pour optimiser les performances, il est conseillé de segmenter un grand volume d'entrées initiales en lots plus petits et gérables. Expérimenter avec différentes tailles de lots pour trouver un équilibre efficace qui assure des niveaux de performance acceptables.
* Toutes les entrées contiennent un ensemble de champs de base applicables à tous, tandis que des champs supplémentaires peuvent être spécifiques à la technologie interférée, telle que RDP, SSH, etc. Certains champs sont imbriqués dans des structures comme l'onglet ***Informations*** et nécessitent un préfixe pour y accéder, comme "MetaInformation\OS" ou "MetaInformation\DateDachat".
* Il est également possible d'incorporer des variables dans le fichier CSV, qui seront résolues lors de l'enregistrement des données. Par exemple, utiliser la variable $HOST$ dans des champs comme ***Description***, ***URL***, ou ***Putty\NomDeSessionPersonnalisé*** insérera dynamiquement la valeur correspondante au moment du traitement des données.

Ci-dessous, un aperçu de certains champs pertinents pour aider à préparer votre fichier CSV pour l'importation.

| Option                       | Description                                                                                                                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hôte                         | Nom d'hôte de l'appareil. C'est un champ obligatoire.                                                                                                                                                     |
| Nom                          | Nom de l'entrée. C'est un champ obligatoire.                                                                                                                                                              |
| TypeDeConnexion              | Jeton représentant le type de connexion. Il est préférable d'utiliser la méthode ***Presse-papiers – Copier*** pour obtenir les valeurs acceptables.                                                      |
| Groupe                       | Dossier de destination. Notez que si le processus d'importation lui-même avait un dossier de destination défini également, le dossier listé ici serait créé sous celui du processus.                       |
| Description                  | Description de l'entrée.                                                                                                                                                                                  |
| Ouvrir (Intégré)             | Valeur booléenne (vrai ou faux) qui indique d'ouvrir la session en mode intégré. La valeur par défaut est faux, signifiant que le client natif sera utilisé en fonction de la technologie (MSTSC.EXE, par exemple). |
| NomUtilisateur               | Nom d'utilisateur utilisé pour ouvrir une session sur l'appareil.                                                                                                                                         |
| Domaine                      | Domaine utilisé pour ouvrir une session sur l'appareil.                                                                                                                                                   |
| MotDePasse                   | Mot de passe utilisé pour ouvrir une session sur l'appareil. Veuillez noter que ce champ est chiffré et stocké dans un autre champ lors de l'importation.                                                  |
| MetaInformation\NuméroDeSérie| Numéro de série de l'appareil.                                                                                                                                                                            |
| MetaInformation\TagDeService | Tag de service de l'appareil.                                                                                                                                                                             |
| MetaInformation\DateDachat   | Date d'achat au format ISO8601 (c.-à-d., aaaa-mm-jj).                                                                                                                                                     |