---
eleventyComputed:
  title: Modèles de mots de passe
  description: Les modèles de mots de passe sont disponibles dans le générateur de mots de passe. Les modèles de mots de passe peuvent être optionnels ou requis.
---
Les modèles de mots de passe définissent les exigences pour le format du mot de passe : utilisation des caractères, motifs, lisibilité. Ils sont disponibles dans le générateur de mots de passe. Les modèles de mots de passe peuvent être optionnels ou requis.

## Paramètres

### Créer un modèle de mot de passe

1. Aller à ***Fichier – Modèles*** et cliquer ***Modèles de mots de passe***.
![Fichier – Modèles – Modèles de mots de passe](https://cdnweb.devolutions.net/docs/RDMW6015_2024_2.png)
1. La fenêtre ***Modèles de mots de passe*** offre un aperçu des modèles actuels, ainsi que des commandes pour ajouter, modifier et supprimer.
![Fenêtre Modèle de mot de passe](https://cdnweb.devolutions.net/docs/RDMW6016_2024_2.png)
1. Pour ajouter un nouveau modèle, cliquer ***Ajouter*** (signe plus).
1. Entrer un nom de modèle.
1. Choisir un ***Mode*** et configurer les paramètres.

| OPTION               | DESCRIPTION                                                            |
|----------------------|------------------------------------------------------------------------|
| Défaut               | Paramètres généraux concernant la longueur et les quantités minimales de caractères et symboles. |
| Paramètres avancés   | Paramètres de caractères granulaires (par exemple, caractères spéciaux et symboles, inclusions, exclusions). |
| Mot de passe lisible | Paramètres pour les syllabes, nombres et symboles.                     |
| Utiliser un motif    | Définir un motif pour les mots de passe en utilisant la [clé](Tools_PasswordGenerator). |
| Mot de passe prononçable | Paramètres pour la longueur, la casse, les chiffres et les caractères. |
| Phrase secrète | Paramètres pour la longueur, séparateur de mots, majuscule à la première lettre, ajouter un nombre et dictionnaire.             |

6. Choisir des paramètres spécifiques.
![Modèles de mots de passe](https://cdnweb.devolutions.net/docs/RDMW6017_2024_2.png)
1. Le mot de passe est maintenant disponible dans le ***Générateur de mots de passe*** (menu ***Outils***).

### Utiliser un modèle de mot de passe avec le générateur de mots de passe

1. Dans l'onglet ***Outils***, cliquer ***Générateur de mots de passe*** ou ouvrir le générateur de mots de passe depuis une entrée.
1. Pour choisir un modèle de mot de passe, sélectionner le titre dans la liste. ***Défaut*** est équivalent à aucun modèle, jusqu'à ce qu'il soit configuré par un administrateur. Lorsque vous sélectionnez un modèle, les options sont indisponibles car elles ont été enregistrées dans le modèle.
1. Cliquer ***Générer*** pour lister les mots de passe possibles.
![Générateur de mots de passe utilisant un modèle de mot de passe](https://cdnweb.devolutions.net/docs/RDMW6018_2024_2.png)

### Définir un modèle de mot de passe par défaut

Le modèle par défaut dans le ***Générateur de mots de passe*** est réglé sur "aucun modèle" jusqu'à ce qu'un administrateur configure le modèle.

1. Dans ***Administration***, cliquer ***Paramètres de source de données (Paramètres système)***.
1. Cliquer ***Modèles de mots de passe***.
1. Choisir le modèle. Le modèle choisi sera maintenant le ***Défaut*** dans le générateur de mots de passe.
1. Si vous souhaitez imposer un modèle, cocher ***Forcer le modèle par défaut***. Aucun autre choix ne sera disponible dans le générateur de mots de passe.
![Paramètres système – Modèles de mots de passe](https://cdnweb.devolutions.net/docs/RDMW6019_2024_2.png)