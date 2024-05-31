---
eleventyComputed:
  title: Coloration syntaxique
  description: La coloration syntaxique affiche du texte, en particulier du code source, dans différentes couleurs et polices pour différencier et souligner différentes catégories de termes.
---
La coloration syntaxique est une fonctionnalité présente dans les éditeurs de texte, couramment utilisée pour la programmation, les scripts et les langages de balisage comme HTML. Elle affiche du texte, en particulier du code source, dans différentes couleurs et polices pour différencier et souligner différentes catégories de termes.

Pour trouver cette fonctionnalité dans {{ fr.RDM }}, aller à ***Fichier – Paramètres – Types – Sessions – Terminal*** et sélectionner ***Coloration syntaxique***. Ajouter un nouvel élément dans la liste en cliquant sur ***Ajouter***.
![Fichier – Paramètres – Types – Sessions – Terminal – Coloration syntaxique](https://cdnweb.devolutions.net/docs/RDMW2010_2024_1.png)

Ci-dessous se trouve une liste de toutes les options de ***Coloration syntaxique***.
![Coloration syntaxique](https://cdnweb.devolutions.net/docs/RDMW2012_2024_1.png)

| Option               | Description                                                                                                        |
|----------------------|--------------------------------------------------------------------------------------------------------------------|
| Nom                  | Le nom qui sera affiché dans la liste de mise en évidence. Pour information seulement.                             |
| Mot-clé              | Ce qui est utilisé pour faire la correspondance. Si vous ne cochez pas ***Utiliser la comparaison regex*** (ci-dessous dans la section ***Avancé***), cela effectue une simple validation de chaîne de texte. Séparer plusieurs mots-clés dans le champ en appuyant sur <kbd>Entrée</kbd>.                                                    |
| Mise en évidence activée | Activer pour mettre en évidence le(s) mot(s)-clé(s) spécifié(s). Vous pourriez vouloir sauvegarder différentes mises en évidence et ne pas toutes les définir. |
| Couleur de premier plan | La couleur de mise en évidence pour le premier plan (texte).                                                       |
| Couleur d'arrière-plan | La couleur de mise en évidence pour l'arrière-plan (derrière le texte).                                            |
| Souligné             | Activer cette option pour souligner la mise en évidence.                                                           |
| Utiliser la comparaison regex | Activer cette option pour changer la manière dont la correspondance est faite en mode regex (expression régulière).                             |
| Sensible à la casse  | Activer cette option pour rendre la correspondance sensible à la casse. Ceci est disponible uniquement en mode normal.                        |
| Mot complet          | Activer cette option pour définir la correspondance sur le mot entier. Ceci est disponible uniquement en mode normal.                |
