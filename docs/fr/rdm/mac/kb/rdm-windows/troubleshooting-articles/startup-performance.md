---
eleventyComputed:
  title: Performance au démarrage
  description: La performance de l'application doit être validée avec une source de données vide. Créer une nouvelle source de données XML vide et la sélectionner comme étant la source de données actuelle.
---
La performance de l'application doit être validée avec une source de données vide. Créer une nouvelle source de données XML vide et la sélectionner comme étant la source de données actuelle.

Si vous rencontrez des temps de démarrage lents, envisager ces solutions pour accélérer la disponibilité de l'application.

## Solution 1 : {{ fr.RDM }} est lent à s'ouvrir

1. Dans {{ fr.RDM }}, aller à ***Fichier – Paramètres – Performance***.
1. Définir ***Accélération matérielle*** sur ***DirectX*** et ***Optimiser la performance de l'UI*** sur ***Oui***.
![Accélération matérielle DirectX et performance de l'UI optimisée](https://cdnweb.devolutions.net/docs/RDMW2046_2024_1.png)
1. ***Sauvegarder*** les modifications, puis redémarrer {{ fr.RDM }} pour les appliquer.

## Solution 2 : Démarrage lent sur les machines hors ligne

Pour votre sécurité, nous "signons" notre programme avec une signature de code. Cela entraîne la vérification de la validité de la signature au démarrage de l'application. Si la machine n'est pas connectée à Internet, l'application attend une réponse jusqu'à ce qu'un délai d'attente se produise. Pour des explications détaillées, consulter les articles Microsoft suivants :
* [Améliorer le temps de démarrage de l'application](https://learn.microsoft.com/en-us/archive/blogs/amolravande/improving-application-start-up-time-generatepublisherevidence-setting-in-machine-config)
* [Le cas de la démo de keynote lente](https://learn.microsoft.com/en-us/archive/blogs/markrussinovich/the-case-of-the-slow-keynote-demo)

La solution consiste à créer un fichier texte dans le dossier d'installation de {{ fr.RDM }} nommé **RemoteDesktopManager.exe.config** qui contient ce qui suit :

```
<configuration>
    <runtime>
        <generatePublisherEvidence enabled="false"/>
    </runtime>
</configuration>
```

## Solution 3 : Empêcher l'accès à Internet

Chaque fois que vous démarrez {{ fr.RDM }}, l'application essaiera de se connecter sur [https://devolutions.net/remote-desktop-manager/clientinternal/enterprisenews](https://devolutions.net/remote-desktop-manager/clientinternal/enterprisenews). Il faut empêcher tout accès Internet de l'application.

Ajouter la ligne `<DisableAnalytics>true</DisableAnalytics>` à votre [**fichier RemoteDesktopManager.cfg**](/rdm/windows/installation/client/configuration-file-location/). Vous pouvez le placer au-dessus de la dernière ligne, qui devrait contenir `</Option>`.
![<DisableAnalytics>true</DisableAnalytics>](https://cdnweb.devolutions.net/docs/INTERFACE2034.png)
Pour trouver le fichier de configuration, naviguer à ***Fichier – Paramètres – Avancé*** dans {{ fr.RDM }} et cliquer sur l'hyperlien bleu en bas.

## Solution 4 : Génération d'image native

{{ fr.RDM }} est une application .NET. Cela signifie que le code est livré dans un format intermédiaire. Il est ensuite traité sur votre machine locale pour générer ce qu'on appelle une image native. Parfois, ce processus peut être lent. Il peut également se reproduire après que certaines conditions sont remplies. Pour ces raisons, nous livrons un fichier batch pour traiter tous nos fichiers à la fois. Vous trouverez ce fichier dans le dossier d'installation de {{ fr.RDM }}. Il s'appelle **OptimizeRDM.bat**.

Ouvrir une fenêtre de commande en utilisant ***Exécuter en tant qu'administrateur*** et lancer ce script.

## Solution 5 : Antivirus

Si le journal du profileur révèle une lenteur sur l'un des trois chargements hors ligne (entre 10 et 30 secondes), cela pourrait être causé par un antivirus limitant l'accès au chemin. Mettre le chemin en liste blanche peut permettre de réduire considérablement la lenteur.

Nous ne recommandons pas de désactiver la protection antivirus dans des conditions risquées. Vous devriez fermer tous les navigateurs et vous assurer que seules les applications essentielles sont en cours d'exécution. Nous suggérons également cette étape uniquement pour une courte durée pour voir le temps de démarrage de l'application changer de manière significative.

Si votre application antivirus le permet, désactiver la surveillance du dossier d'installation de {{ fr.RDM }}. Si vous êtes à l'aise avec la désactivation de la protection antivirus dans son ensemble, le faire pour tester le temps de démarrage.

Il n'y a rien que nous puissions faire dans ce cas. C'est seulement une étape qui aide à isoler la cause.