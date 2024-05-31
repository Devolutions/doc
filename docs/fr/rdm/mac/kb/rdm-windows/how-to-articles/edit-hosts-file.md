---
eleventyComputed:
  title: Modifier le fichier hosts
---
Les techniciens informatiques, ainsi que les développeurs web, ont souvent besoin de modifier le fichier hosts de Windows. Cela nécessite de démarrer votre éditeur favori en utilisant des privilèges élevés (évidemment seulement si l'UAC est actif), de naviguer vers le fichier hosts qui se trouve profondément dans le dossier windows et enfermé dans un dossier caché de surcroît.

Pour votre propre machine, vous pouvez créer un raccourci pour atteindre cet objectif, mais l'expérience nous dit que la plupart des gens ne se donnent pas cette peine, finissant par perdre un temps précieux lorsqu'ils doivent modifier le fichier hosts.

Quel meilleur outil que celui que vous utilisez tous les jours, qui est déjà en cours d'exécution dans la zone de notification, pour mettre en œuvre une solution avec. Si les machines sur lesquelles vous travaillez ont la même configuration, cela fonctionnera pour toutes.

Créer simplement une session avec les paramètres appropriés.

## Étapes

1. Créer une nouvelle session ***Ligne de Commande (Application Externe)*** et entrer un nom de session. Dans l'onglet ***Général***, cliquer sur le bouton des points de suspension et sélectionner votre éditeur de choix dans la boîte de texte Exécuter. Ensuite, coller ce qui suit après le nom du programme : "**C:\Windows\System32\drivers\etc\hosts**". Assurer un espace vide sépare les deux et inclure les guillemets doubles.
![!!KB4548](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4548.png)
1. Dans l'onglet ***Avancé***, cocher l'option ***Exécuter en tant qu'Administrateur***.
![!!KB4549](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4549.png)

{% snippet, "badgeInfo" %}
Fermer votre éditeur avant de procéder à ces étapes. Si votre éditeur est déjà en cours d'exécution, il n'élèvera pas les privilèges. Nous avons implémenté un script AutoHotKey qui ferme l'éditeur de choix, mais étant donné qu'il se ferme sans sauvegarder les modifications en attente, ce n'est pas une solution sans risque. Tout dépendra de la réaction de votre éditeur choisi au message WM_QUIT.
{% endsnippet %}

C'est une solution simple et efficace. Vous pouvez utiliser cela pour n'importe quel outil que vous utilisez régulièrement. Associé à une source de données partagée, cela constitue une bibliothèque d'outils puissante pour votre équipe.

## Alternative si vous souhaitez utiliser l'onglet Paramètres

Certaines personnes souhaitent utiliser l'onglet paramètres car, au lancement, il affichera une boîte de dialogue où vous pourrez confirmer la valeur des paramètres et même vous permettre de les changer pour de nouvelles valeurs complètement différentes.

1. Créer une nouvelle session Ligne de Commande et dans l'onglet ***Avancé***, cocher l'option ***Exécuter en tant qu'Administrateur*** et désactiver l'option ***Utiliser l'Exécution Shell***.
![!!KB4550](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4550.png)
1. Dans l'onglet ***Général***, cliquer sur le bouton des points de suspension et sélectionner votre éditeur de choix dans la boîte de texte ***Exécuter***. Ensuite, entrer "{1}" après le nom de l'exécutable, en gardant un espace entre les deux valeurs et en incluant les guillemets.
![!!KB4551](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4551.png)
1. Dans l'onglet ***Paramètres***, définir le type du Paramètre # 1 à ***Texte*** et ensuite entrer ce qui suit dans la Valeur par Défaut : **C:\Windows\System32\drivers\etc\hosts**.
![!!KB4552](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4552.png)
Ceci est utile lorsque vous utilisez principalement l'outil avec un certain fichier, mais que vous avez occasionnellement besoin de modifier un autre fichier. Vous pourriez avoir une entrée séparée pour chaque fichier que vous modifiez couramment, mais cela montre à quel point {{ fr.RDM }} peut être flexible.
