---
eleventyComputed:
  title: Exécuter en tant qu'un autre utilisateur
---
Il existe de nombreux types différents d'identifiants et ils sont utilisés par une multitude d'utilisateurs. Que ce soit un guerrier mobile, un administrateur système qui suit les meilleures pratiques et ne se connecte pas à son ordinateur en utilisant son compte d'administrateur de domaine, ou même un parent soucieux de la sécurité qui crée des comptes limités pour les enfants sur l'ordinateur familial. Cela nécessite la capacité de démarrer une application sous un ensemble différent d'identifiants alors que nous sommes déjà connectés en utilisant nos identifiants principaux.

Le problème est résolu en utilisant la commande Windows ***Exécuter en tant que***.

{% snippet, "badgeInfo" %}
La commande ***Exécuter en tant que*** nécessite que le service ***Ouverture de session secondaire*** soit en cours d'exécution.
{% endsnippet %}

## Paramètres

Dans Windows, vous pouvez manuellement démarrer n'importe quel processus en tant qu'un autre utilisateur en utilisant <kbd>Shift</kbd>+clic droit pour obtenir le menu contextuel.
![!!KB4565](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4565.png)

La commande ***Exécuter en tant que*** a de nombreux paramètres pour changer son comportement, nous ne les couvrirons pas tous ici, mais si vous avez un scénario avancé, nous vous suggérons de consulter l'aide de Windows.

## Options

Vous avez deux options en ce qui concerne ***Exécuter en tant que*** :

### Exécuter en tant que intégré

Dans {{ fr.RDM }}, certains types de sessions/outils prennent en charge la fonctionnalité ***Exécuter en tant que***. Pour une liste complète et des informations de configuration, voir [Exécuter en tant que intégré](/rdm/mac/kb/rdm-windows/how-to-articles/run-as-another-user/built-in-runas/).

### Exécuter en tant que manuel

Votre type de session n'est pas pris en charge et vous avez besoin d'aide pour configurer manuellement Exécuter en tant que ? Voir [Exécuter en tant que manuel](/rdm/mac/kb/rdm-windows/how-to-articles/run-as-another-user/manual-runas/).
