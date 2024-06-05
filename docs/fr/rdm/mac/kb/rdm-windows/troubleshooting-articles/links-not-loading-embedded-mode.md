---
eleventyComputed:
  title: Liens ne se chargeant pas en mode intégré
  description: Utiliser Edge ou Chrome en mode intégré peut entraîner le chargement d'une page blanche pour les liens.
---
Lors de l'utilisation de Microsoft Edge ou Google Chrome dans un mode de navigateur intégré via une entrée de site Web, vous pouvez rencontrer un problème où cliquer sur un lien résulte en une page ne se chargeant pas (affichée comme "about:blank"). Ce problème provient d'un souci connu avec Microsoft.

### Solution de contournement
Tandis que Microsoft adresse le problème, vous pouvez utiliser la solution de contournement suivante pour atténuer le problème :
1. Dans {{ fr.RDM }}, naviguer vers les propriétés de votre entrée de site Web.
1. Changer le paramètre ***Navigateur Web*** pour ***Google Chrome***.
![Définir le navigateur Web sur Google Chrome](https://cdnweb.devolutions.net/docs/RDMW2039_2024_1.png)
1. Cliquer sur ***Mettre à jour*** pour sauvegarder vos changements.
1. Lancer votre entrée de site Web en mode intégré.
1. Naviguer vers la page contenant le lien problématique et cliquer dessus. Cela ouvrira probablement à nouveau une page blanche. Garder cette nouvelle fenêtre blanche ouverte.
1. Retourner au lien original et cliquer une fois de plus dessus. La page devrait maintenant se charger correctement dans la fenêtre blanche précédemment ouverte.

Garder la page blanche ouverte pendant votre session. Tant qu'elle reste ouverte, les liens subséquents devraient fonctionner comme prévu.
