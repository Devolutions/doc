---
eleventyComputed:
  title: Configurer le plugin KeePass avec {{ fr.RDM }}
  description: Les étapes suivantes montrent comment configurer KeePass avec {{ fr.RDM }}, ainsi que différentes manières dont il peut être utilisé comme un plugin.
---
Les étapes suivantes montrent comment configurer KeePass avec {{ fr.RDM }}, ainsi que différentes manières dont il peut être utilisé comme un plugin.

{% snippet, "badgeInfo" %}
L'intégration des identifiants des gestionnaires de mots de passe est uniquement disponible dans la version Team de {{ fr.RDM }}.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Seule la dernière version de KeePass est compatible avec les plugins {{ fr.RDM }}.
{% endsnippet %}

## Étapes
1. Installer la dernière version de [KeePass 2](https://keepass.info/download.html).
{% snippet, "badgeCaution" %}
Le dossier d'installation de KeePass doit utiliser le chemin par défaut (par exemple, **C:\Program Files\KeePass Password Safe 2**). Cela garantira que l'intégration {{ fr.RDM }} fonctionne correctement.
{% endsnippet %}

2. Une fois l'installation terminée, créer la [base de données KeePass](https://keepass.info/help/base/firststeps.html).
1. Configurer la base de données.
1. Sauvegarder la base de données.
1. Fermer KeePass.
1. Dans {{ fr.RDM }}, aller à ***Fichier*** – ***Paramètres*** – ***Chemins*** et cliquer sur ***Configurer le chemin d'installation***.
![Configurer le chemin d'installation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0034.png)
1. Sélectionner ***KeePass*** qui se trouve sous ***Applications*** – ***Gestionnaire de mots de passe***, et s'assurer que l'exécutable est détecté.
![KeePass est détecté](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0035.png)
1. Cliquer sur ***Gestionnaire d'extensions*** qui se trouve sous l'onglet ***Outils***.
![Gestionnaire d'extensions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0036.png)
1. Aller à l'onglet ***Autres*** et cliquer sur ***Installer***.
![Bouton Installer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0037.png)
1. Créer une nouvelle entrée.
1. Sélectionner l'entrée ***KeePass***, qui se trouve sous ***Gestion des identifiants*** – ***Gestion des mots de passe***.
1. Sélectionner ***Plugin*** dans le menu déroulant ***Mode***.
![Mode Plugin](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0038.png)
{% snippet, "badgeInfo" %}
Il est possible de définir le chemin de la base de données en cochant l'option ***Définir le chemin de la base de données manuellement***.
{% endsnippet %}

13. Sous l'onglet ***Entrée***, sélectionner l'option ***Défaut (UUID spécifique)*** dans le menu déroulant.
{% snippet, "badgeInfo" %}
Il est également possible d'utiliser l'une de ces options :
* ***Toujours demander avec liste*** garantit que chaque fois que l'entrée est accédée, elle affichera la base de données entière, permettant de sélectionner une entrée de la liste au lieu d'utiliser une entrée d'identifiant KeePass fixe.

* Avec le ***Filtrage par nom*** activé, l'entrée utilisera le nom (référé comme "Titre" dans KeePass) d'une entrée d'identifiant spécifique de la base de données KeePass. Cette option peut être personnalisée pour être plus stricte en permettant la sensibilité à la casse ou les correspondances exactes uniquement, dans la base de données.
{% endsnippet %}

14. Cliquer sur le bouton ellipsis à côté du champ ***Uuid***.
![Configurer Uuid](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0039.png)
1. Entrer le ***Mot de passe principal*** pour accéder à la base de données KeePass.
![Mot de passe principal](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0040.png)
1. Dans {{ fr.RDM }}, la ***Liste des identifiants KeePass*** montrera maintenant quels identifiants sont disponibles pour référence dans l'entrée KeePass.
![Liste des identifiants KeePass](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0041.png)
1. Sélectionner l'identifiant qui sera référencé et cliquer sur ***OK***.
1. Cliquer sur ***OK*** pour sauvegarder les changements et fermer la fenêtre des options d'entrée.

## Dépannage
{% snippet, "badgeHelp" %}
En savoir plus sur le [Dépannage KeePass](/rdm/mac/kb/rdm-windows/troubleshooting-articles/keepass/).
{% endsnippet %}
