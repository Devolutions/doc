---
eleventyComputed:
  title: Méthode intégrée RunAs
---
{% snippet, "badgeInfo" %}
Cet article décrit la méthode intégrée d'utilisation de ***Run As*** Pour les types de sessions qui ne prennent pas encore en charge la méthode intégrée, vous pouvez suivre les étapes manuelles décrites dans [Exécuter en tant qu'un autre utilisateur](/rdm/mac/kb/rdm-windows/how-to-articles/run-as-another-user/).
{% endsnippet %}

## Paramètres

### Types pris en charge

Les types suivants prennent actuellement en charge ***Run As*** :

| Option               | Description |
| -------------------- | ----------- |
| Session              | <ul><li>Ligne de commande</li><li>PowerShell</li></ul> |
| Macros/Scripts/Outils | <ul><li>Ligne de commande</li><li>PowerShell Local</li><li>PowerShell à distance</li><li>PSExec</li></ul> |
| Add-on de session       | <ul><li>SQL Server Management Studio</li></ul> |

## Session

![!!KB4566](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4566.png)
Les sessions qui prennent en charge Run As auront un onglet Run As où vous spécifiez quelles informations d'identification utiliser lors du démarrage avec Run As.

| Option                      | Description |
| --------------------------- | ----------- |
| Aucun                        | Aucun Run As n'est effectué. |
| Session actuelle             | Utiliser les mêmes informations d'identification que celles définies dans la session. |
| Informations d'identification personnalisées          | Utiliser des informations d'identification personnalisées spécifiées. |
| Référentiel d'informations d'identification       | Utiliser une entrée d'informations d'identification liée. |
| Utiliser mes informations d'identification personnelles | Utiliser une entrée d'informations d'identification personnelle liée. |

## Macros/Scripts/Outils

Avec les types de sessions d'outils, vous devez seulement spécifier ***Exécuter en tant qu'utilisateur différent*** dans l'onglet ***Avancé***. Au moment de l'exécution, les informations d'identification seront résolues et utilisées pour démarrer les informations d'identification Windows à moins que vous ne sélectionniez ***Utiliser les informations d'identification de la session***, auquel cas elles seront celles actives pour la session.
![!!KB4567](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4567.png)

Avec les types de sessions d'outils, vous devez seulement spécifier ***Exécuter en tant qu'utilisateur différent***. Au moment de l'exécution, les informations d'identification seront résolues et utilisées pour démarrer le processus Run As.

## Add-on de session

SQL Server Management Studio prend en charge Run As. Configurez-le comme vous le feriez pour une session normale.
![!!KB4568](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4568.png)

Cliquez sur ***Exécuter en tant qu'utilisateur différent*** pour modifier les paramètres de ***Run As***.
![!!KB4569](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4569.png)

## Notes

Exécuter en tant qu'utilisateur différent et Exécuter en tant qu'administrateur sont mutuellement exclusifs.

Exécuter en tant qu'utilisateur différent ne permet pas l'exécution Shell.

### Exemple : Session de ligne de commande avec Exécuter en tant qu'utilisateur différent sur le même groupe de travail/domaine

1. Créer une nouvelle session de ligne de commande.
1. Définir la commande à ***CMD***.
![!!KB4570](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4570.png)
1. Spécifier les informations d'identification ***Run As***.
![!!KB4571](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4571.png)
1. Sauvegarder votre session.
1. Exécuter votre session de ligne de commande.
![!!KB4572](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4572.png)
