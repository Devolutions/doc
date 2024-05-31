---
eleventyComputed:
  title: Tableau de bord des scripts
  description: Le tableau de bord des scripts est un excellent ajout pour les équipes informatiques, qui doivent souvent utiliser des scripts avec des variables, spécifiquement des scripts qui n'ont pas de lien direct avec une entrée.
---
Le ***Tableau de bord des scripts*** est utile pour centraliser les scripts et les exécuter avec des permissions spécifiques. C'est un excellent ajout pour les équipes informatiques qui ont souvent besoin d'utiliser des scripts avec des variables, en particulier des scripts qui n'ont pas de lien direct avec une entrée (par exemple, un script qui crée des utilisateurs dans Active Directory).

## Paramètres

1. Ouvrir {{ fr.RDM }}.
1. Sélectionner ***Outils – Tableau de bord des scripts*** dans le ruban de {{ fr.RDM }}.
![Tableau de bord des scripts](https://webdevolutions.blob.core.windows.net/docs/RDMW2014_2024_1.png)

{% snippet, "badgeInfo" %}
La fonctionnalité ***Tableau de bord des scripts*** est également disponible en tant qu'entrée. Créer une nouvelle entrée dans {{ fr.RDM }} et sélectionner ***Tableau de bord des scripts*** sous ***Session – Autre***.
{% endsnippet %}

3. Le ***Tableau de bord des scripts*** s'ouvre.

![Tableau de bord des scripts](https://webdevolutions.blob.core.windows.net/docs/RDMW2015_2024_1.png)

### Onglet Vue d'ensemble

Cet onglet fournit une vue d'ensemble du script sélectionné, y compris des informations sur sa dernière exécution et un aperçu du script lui-même.

| PARAMÈTRES            | DESCRIPTION                                                                                    |
|------------------|---------------------------------------------------------------------------------------------------|
| Dernièrement exécuté par | Indique l'identité de l'utilisateur qui a exécuté le script en dernier.                                 |
| Dernièrement exécuté le | Affiche la date et l'heure auxquelles le script a été exécuté pour la dernière fois.                                     |
| Paramètres       | Liste les paramètres dans le script PowerShell.                                                    |
| Aperçu du script   | Fournit un aperçu du code du script, permettant une révision rapide de son contenu.               |

### Onglet Journaux d'exécution

Cet onglet contient des journaux liés à l'exécution du script, détaillant quand les événements d'exécution ont commencé et quand ils se sont conclus.

| Champ            | Description                                                           |
|------------------|-----------------------------------------------------------------------|
| Date du journal       | La date et l'heure de création de l'entrée du journal d'exécution.           |
| Date/Heure de fin  | La date et l'heure marquant la fin de la période d'exécution du script.  |

### Favoris

Les scripts peuvent être ajoutés en tant que ***favoris*** en cliquant sur l'étoile. Les favoris sont listés dans le menu de gauche.

![Ajouter des scripts en favoris en cliquant sur l'étoile](https://webdevolutions.blob.core.windows.net/docs/RDMW2016_2024_1.png)
