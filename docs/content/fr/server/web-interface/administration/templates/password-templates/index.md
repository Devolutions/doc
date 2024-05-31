---
eleventyComputed:
  title: Modèles de mots de passe
  order: 10
---
***Les Modèles de Mots de Passe*** sont utilisés par les administrateurs pour créer des paramètres prédéfinis pour le [***Générateur de Mots de Passe***](/server/web-interface/administration/templates/password-templates/password-generator/) de {{ fr.DVLS }}.
![Administration – Modèles de Mots de Passe](https://cdnweb.devolutions.net/docs/docs_en_server_clip10401.png)

## Créer des modèles de mots de passe
Pour créer des ***Modèles de Mots de Passe***, aller à ***Administration – Modèles de Mots de Passe*** et cliquer sur le bouton ***Ajouter***. Vous pouvez également créer un ***Modèle de Mot de Passe*** en utilisant le ***Générateur de Mots de Passe***. Personnaliser simplement les paramètres et cliquer sur ***Ajouter un modèle***.
![Modèles de Mots de Passe](https://cdnweb.devolutions.net/docs/docs_en_server_clip10402.png)

| Option                           | Description                                                                        |
|----------------------------------|------------------------------------------------------------------------------------|
| Nom                              | Nom des ***Modèles de Mots de Passe***.                                            |
| Mode                             | Choisir un paramètre de ***Mode*** pour les mots de passe.<ul><li>***Par défaut*** : Personnaliser la longueur et le nombre minimum de caractères par type que vous souhaitez pour les mots de passe.</li><li>***Paramètres avancés*** : Sélectionner la longueur, le type et le nombre de caractères à inclure dans les mots de passe. Inclure et exclure des caractères spécifiques.</li><li>***Mot de passe lisible*** : Générer des mots de passe lisibles mais qui ne sont pas de véritables mots.</li><li>[***Utiliser un motif***](/server/web-interface/administration/templates/password-templates/use-a-pattern-password/) : Sélectionner tout motif nécessaire pour créer les mots de passe, vous pouvez également exclure certains caractères si désiré. Une liste des motifs les plus récemment utilisés sera également créée.</li><li>***Mot de passe prononçable*** : Générer des mots de passe prononçables, mais qui ne sont pas de véritables mots.</li></ul> |
| Majuscules (A, B...)             | Inclura des lettres majuscules pour la génération de mot de passe.                 |
| Souligné ( _ )                   | Inclura le caractère souligné ( _ ) pour la génération de mot de passe.            |
| Caractères ANSI élevés           | Inclura des caractères de '-' à U255 (excluant U255) pour la génération de mot de passe. |
| Moins ( - )                      | Inclura le caractère moins ( - ) pour la génération de mot de passe.               |
| Parenthèses ([,], (,), <,>)      | Inclura des caractères de parenthèses pour la génération de mot de passe.          |
| Chiffres (0, 1, 2...)            | Inclura des chiffres pour la génération de mot de passe.                           |
| Spéciaux (!, $, %, &...)         | Inclura des caractères spéciaux pour la génération de mot de passe.                |
| Minuscules (a, b, c...)          | Inclura des lettres minuscules pour la génération de mot de passe.                 |
| Espace ( )                       | Inclura le caractère espace pour la génération de mot de passe.                    |
| Conforme XML                     | Générera des mots de passe conformes XML.                                          |
| Nombre de mots de passe          | Nombre maximum de mots de passe qui seront générés.                                |
| Inclure les caractères suivants  | Inclure de force des caractères dans le mot de passe.                              |
| Exclure les caractères suivants  | Exclut de force des caractères du mot de passe.                                    |

### Forcer le modèle de mot de passe par défaut
Forcer un ***Modèle de Mot de Passe*** par défaut pour tous les utilisateurs de {{ fr.DVLS }}.
1. Aller à ***Administration – Paramètres Système – Gestion des Mots de Passe – Modèle de Mot de Passe***.
2. Choisir un ***Modèle par défaut***.
3. Cocher ***Forcer le modèle par défaut*** et ***Enregistrer***.
![Modèle de Mot de Passe par Défaut](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4087.png)
