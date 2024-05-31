---
eleventyComputed:
  title: Migrer de {{ fr.DOD }} à {{ fr.DHUBP }}
  description: Pour bénéficier de toutes les dernières fonctionnalités et d'une meilleure sécurité, il est recommandé d'utiliser {{ fr.DHUBP }} au lieu de {{ fr.DOD }}.
---
Pour bénéficier de toutes les dernières fonctionnalités, il est recommandé d'utiliser {{ fr.DHUBP }} au lieu de {{ fr.DOD }}. {{ fr.DHUBP }} fournit un {{ fr.VLT }} sécurisé pour les utilisateurs individuels afin de protéger et de gérer leurs mots de passe personnels. Il sert également de source de données pour {{ fr.RDM }}.
{% snippet, "badgeInfo" %}
Un [{{ fr.DHUBP }}](/hub/getting-started/create-hub/hub-personal/) doit être créé avant de migrer de {{ fr.DOD }}.
{% endsnippet %}

## Étapes
1. Se connecter à la source de données {{ fr.DOD }}.
1. Une invite apparaîtra concernant la migration vers {{ fr.DHUBP }}, cliquer sur ***Oui***.
![Invite de Migration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0028.png)
1. Sélectionner les bases de données à migrer, puis cliquer sur ***Suivant***.
![Bases de données](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0029.png)
1. Entrer la ***Clé Maîtresse*** et cliquer sur ***Ouvrir***.
![Clé Maîtresse](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0030.png)
1. Une fois la migration des fichiers terminée, cliquer sur ***Suivant***.
![Migration des Fichiers](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0031.png)
1. Une invite affichera les fichiers qui ont été migrés avec succès, ignorés ou qui ont rencontré des erreurs pendant la migration. Cliquer sur ***Terminer***.
![Rapport de Migration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0032.png)
1. Les fichiers migrés apparaîtront désormais dans la source de données {{ fr.DHUBP }}.
![Fichiers Migrés](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0033.png)
