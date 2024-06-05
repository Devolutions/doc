---
eleventyComputed:
  title: Modèles de mots de passe
  description: Les modèles de mots de passe sont disponibles dans le générateur de mots de passe. Les modèles de mots de passe peuvent être optionnels ou obligatoires.
---
Les modèles de mots de passe définissent les exigences pour le format du mot de passe : utilisation des caractères, motifs, lisibilité.

Les modèles de mots de passe sont disponibles dans le générateur de mots de passe. Les modèles de mots de passe peuvent être optionnels ou obligatoires.

## Paramètres

### Créer un modèle de mot de passe

1. Aller à ***Fichier – Modèles*** et cliquer ***Modèles de mots de passe***.
![Fichier – Modèles – Modèles de mots de passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2244.png)
1. La fenêtre ***Modèles de mots de passe*** fournit un aperçu des modèles actuels, ainsi que les commandes ajouter, modifier et supprimer.
![Fenêtre Modèle de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2245.png)
1. Pour ajouter un nouveau modèle, cliquer ***Ajouter*** (signe plus).
1. Entrer un nom de modèle.
1. Choisir un ***Mode*** et configurer les paramètres.

| OPTION               | DESCRIPTION                                                            |
|----------------------|------------------------------------------------------------------------|
| Par défaut              | Paramètres généraux concernant la longueur et les quantités minimales pour les caractères et les symboles. |
| Paramètres avancés    | Paramètres de caractères granulaires (par exemple, caractères spéciaux et symboles, inclusions, exclusions). |
| Mot de passe lisible    | Paramètres pour les syllabes, les nombres et les symboles.                           |
| Utiliser un motif        | Définir un motif pour les mots de passe en utilisant la [clé](Tools_PasswordGenerator). |
| Mot de passe prononçable | Paramètres pour la longueur, la casse, les chiffres et les caractères.                   |


6. Choisir des paramètres spécifiques.
![!!RDMWin2246](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2246.png)
1. Le mot de passe est maintenant disponible dans le ***Générateur de mots de passe*** (menu ***Outils***).

### Utiliser un modèle de mot de passe avec le générateur de mots de passe

1. Dans l'onglet ***Outils***, cliquer ***Générateur de mots de passe*** ou ouvrir le générateur de mots de passe depuis une entrée.
1. Pour choisir un modèle de mot de passe, sélectionner le titre dans la liste. ***Par défaut*** est équivalent à aucun modèle, jusqu'à ce qu'il soit configuré par un administrateur. Lorsque vous sélectionnez un modèle, les options ne sont pas disponibles car elles ont été enregistrées dans le modèle.
1. Cliquer ***Générer*** pour lister les mots de passe possibles.
![Générateur de mots de passe utilisant un modèle de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2247.png)

### Définir un modèle de mot de passe par défaut

Le modèle par défaut dans le ***Générateur de mots de passe*** est réglé sur "aucun modèle" jusqu'à ce qu'un administrateur configure le modèle.

1. Dans ***Administration***, cliquer ***Paramètres de source de données (Paramètres système)***.
1. Cliquer ***Modèles de mots de passe***.
1. Choisir le modèle. Le modèle choisi sera maintenant le ***Par défaut*** dans le générateur de mots de passe.
1. Si vous souhaitez imposer un modèle, cocher ***Forcer le modèle par défaut***. Aucun autre choix ne sera disponible dans le générateur de mots de passe.
![Paramètres système – Modèles de mots de passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2248.png)
