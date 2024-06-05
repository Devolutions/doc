---
eleventyComputed:
  title: Gérer les clés de chiffrement
  description: Les clés de chiffrement sont utilisées pour chiffrer les entrées de données (connexions, {{ fr.UVLT }}, documentation et pièces jointes). Elles sont générées et stockées uniquement dans le fichier encryption.config sur le serveur.
---
Les clés de chiffrement sont utilisées pour chiffrer les entrées de données (connexions, {{ fr.UVLT }}, documentation et pièces jointes). Elles sont générées et stockées uniquement dans le fichier **encryption.config** sur le serveur. Pour chiffrer les données stockées dans la base de données, nous utilisons notre [bibliothèque de cryptographie open-source](https://github.com/Devolutions/devolutions-crypto).

{% snippet, "shieldNotice" %}
Nous recommandons de faire une sauvegarde de la base de données SQL avant toute opération pouvant modifier les informations qu'elle contient (***Importer*** ou ***Régénérer***). Pendant cette opération, tous les utilisateurs doivent être en mode hors ligne ou déconnectés de la source de données {{ fr.DVLS }} pour éviter la perte de données.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Le fichier **encryption.config** ne peut pas être déplacé vers un autre système, car il est chiffré avec l'interface de programmation de l'application de protection des données (DPAPI), ce qui empêche le fichier d'être lu en dehors du système où il a été chiffré. Vous devez exporter le fichier puis l'importer vers l'autre système.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les clés de chiffrement doivent être identiques pour chaque instance de {{ fr.DVLS }} de votre topologie de haute disponibilité/équilibrage de charge utilisant la même base de données SQL ou pour une opération de migration.
{% endsnippet %}

## Exporter les clés de chiffrement

1. Ouvrir le {{ fr.DVLSCONSOLE }}.
1. Dans l'onglet ***Outils***, cliquer sur ***Exporter***.
![Outils – Exporter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2252.png)
1. Entrer un ***Nom de fichier*** et un chemin de destination, puis définir un mot de passe pour protéger le fichier.
   {% snippet, "shieldCaution" %}
   Nous recommandons vivement de stocker le fichier des clés de chiffrement dans un stockage sécurisé en dehors de {{ fr.DVLS }} tel que {{ fr.DHUBB }}, Azure Key Vault ou AWS Key Management Service.
   {% endsnippet %}

   ![Nom de fichier et mot de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2253.png)
1. Cliquer sur ***OK***.

Vos clés de chiffrement ont été exportées vers la destination spécifiée.

## Importer les clés de chiffrement

1. Ouvrir le {{ fr.DVLSCONSOLE }} sur le serveur.
1. Dans l'onglet ***Outils***, cliquer sur ***Importer***.
![Outils – Importer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2256.png)
1. Sélectionner le fichier des clés de chiffrement, puis entrer le mot de passe.
![Nom de fichier et mot de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2255.png)
1. Cliquer sur ***OK***.

Une fois l'opération terminée, les nouvelles clés de chiffrement ont été appliquées aux données de la base de données.

## Régénérer les clés de chiffrement

{% snippet, "badgeCaution" %}
L'opération ***Régénérer*** va modifier et re-chiffrer les données internes de la base de données SQL de {{ fr.DVLS }}. Cette opération doit être traitée avec le plus grand soin.
{% endsnippet %}

Il peut y avoir des scénarios où vous devez régénérer les clés de chiffrement, par exemple si vous soupçonnez que votre base de données a été compromise. Les instructions suivantes expliquent comment réaliser cette opération.

1. Faire une sauvegarde complète de la base de données et s'assurer que cette sauvegarde est pleinement opérationnelle.
1. Faire une sauvegarde du dossier de l'application web {{ fr.DVLS }}.
1. Exporter les clés de chiffrement existantes. Voir les étapes d'exportation ci-dessus.
1. Dans l'onglet ***Serveur***, passer l'instance de {{ fr.DVLS }} en mode hors ligne en utilisant le bouton ***Passer hors ligne***.
![Serveur – Passer hors ligne](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2257.png)
1. Dans l'onglet ***Outils***, cliquer sur ***Régénérer***.
![Outils – Régénérer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2258.png)

1. Entrer un ***Nom de fichier*** et un chemin de destination, puis définir un mot de passe pour protéger le fichier.
   {% snippet, "shieldCaution" %}
   Nous recommandons vivement de stocker le fichier des clés de chiffrement dans un stockage sécurisé en dehors de {{ fr.DVLS }} tel que {{ fr.DHUBB }}, Azure Key Vault ou AWS Key Management Service.
   {% endsnippet %}

   ![Nom de fichier de sauvegarde et mot de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2259.png)
1. Cliquer sur ***OK***.
1. Un dernier avertissement apparaît avant de lancer le processus de régénération. Cliquer à nouveau sur ***OK*** pour procéder.
![Confirmer la régénération des clés de chiffrement](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2260.png)
Le processus commence. Une fois terminé, le statut sera mis à jour pour indiquer que l'opération est complétée.
1. Si des erreurs surviennent pendant le processus de régénération, veuillez suivre ces instructions pour récupérer l'état précédent de l'instance {{ fr.DVLS }}.
![Instructions de récupération](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2261.png)