---
eleventyComputed:
  title: Outil de migration d'authentification
  status: Sujet disponible en langue allemande
---
Ces instructions expliquent comment migrer les comptes utilisateurs et les groupes d'utilisateurs d'un fournisseur d'authentification à un autre. L'outil peut être trouvé dans trois emplacements sur l'interface web de votre instance {{ fr.DVLS }} :
* ***Administration*** – ***Paramètres du serveur*** – ***Authentification***
* ***Administration*** – ***Utilisateurs***
* ***Administration*** – ***Groupes d'utilisateurs***

{% snippet, "badgeInfo" %}
Pour migrer les utilisateurs et les groupes d'utilisateurs vers le même fournisseur d'identité (par exemple : d'Active Directory à un autre Active Directory), les informations sous ***Administration*** – ***Paramètres du serveur*** – ***Authentification*** doivent être changées pour le nouveau domaine avant d'utiliser l'Outil de Migration d'Authentification.
{% endsnippet %}

## Migration
1. Comme mentionné dans l'***Introduction***, effectuer des opérations importantes avant de procéder à ce processus. Cliquer sur ***Suivant***.
![!!KB8124](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8124.png)

1. Dans les ***Options***, sélectionner la source et la destination de la migration.
![!!KB8125](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8125.png)

1. Dans le ***Mapping des utilisateurs***, l'assistant devrait automatiquement associer les comptes qui sont similaires. Les autres comptes devront être sélectionnés manuellement.
![!!KB8126](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8126.png)

1. Dans le ***Mapping des groupes d'utilisateurs***, certains groupes seront également associés automatiquement par l'assistant, le reste devra être fait manuellement.
![!!KB8127](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8127.png)

1. La ***Confirmation*** montre le nombre d'utilisateurs sélectionnés, de groupes d'utilisateurs et ceux qui ne sont pas sélectionnés pour le processus de migration.
![!!KB8128](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8128.png)

1. Cliquer sur le bouton ***Démarrer la migration*** pour commencer le processus et obtenir le rapport de confirmation de migration.
![!!KB8129](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8129.png)
