---
eleventyComputed:
  title: Intégration
  description: Lors de l'ouverture de votre application {{ fr.RDM }} pour la première fois, un processus d'intégration commencera pour vous aider à démarrer avec {{ fr.RDM }}.
---
Lors de l'ouverture de votre application {{ fr.RDM }} pour la première fois, un processus d'intégration commencera pour vous aider à démarrer avec {{ fr.RDM }}. Voici les étapes que vous suivrez pendant cette configuration initiale.

## Étape 1 : Créer votre source de données

![Créer votre source de données](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2174.png)

Pour commencer, vous devez configurer une source de données. Une source de données est au cœur de {{ fr.RDM }}. C'est le {{ fr.VLT }} qui contient toutes vos données précieuses et sensibles.

Vous aurez à choisir entre trois options :
* ***Local (Gratuit)*** : Choisir cette option si vous avez l'intention d'accéder à votre source de données depuis cet appareil uniquement. Vous serez alors guidé pour configurer une source de données [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/), qui est rapide et facile à utiliser et accessible localement.
* ***En ligne (Gratuit)*** : Choisir cette option si vous avez l'intention d'accéder à votre source de données de n'importe où depuis de nombreux appareils. Vous serez alors guidé pour configurer une source de données [{{ fr.DHUBP }}](/rdm/windows/data-sources/data-sources-types/hub-personal/), qui est une solution de gestion de mots de passe basée sur le nuage, hautement sécurisée, flexible et facile à utiliser.
* [***Équipe (Abonnement)***](/rdm/windows/installation/onboarding/#team-subscription) : Choisir cette option si vous voulez que tous les membres de votre équipe puissent accéder de manière sécurisée à la source de données. Vous aurez alors le choix entre différentes [sources de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).

{% snippet, "badgeInfo" %}
Ignorer la création de votre source de données mettra fin au processus d'intégration.
{% endsnippet %}

### Équipe (Abonnement)

![Équipe (Abonnement)](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2175.png)

Sélectionner la source de données que vous allez utiliser :
* [***{{ fr.DHUBB }}***](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/hub-business/) : Sélectionner {{ fr.DHUBB }} pour une solution de gestion de mots de passe basée sur le nuage, hautement sécurisée, flexible et facile à utiliser pour les environnements d'équipe. Vous serez alors invité à entrer votre ***Email*** pour vous connecter à votre {{ fr.DA }}, et à sélectionner lequel de vos hubs utiliser (si vous avez accès à plusieurs).
* [***{{ fr.DVLS }}***](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/) : Sélectionner {{ fr.DVLS }} pour une application serveur auto-hébergée, hautement sécurisée pour les environnements d'équipe. Vous serez alors invité à entrer l'hôte {{ fr.DVLS }} ***Host*** et le ***Nom d'utilisateur*** que vous utilisez pour vous y connecter.
* ***Autre*** : Choisir cette option si votre source de données n'apparaît pas dans cette liste. Vous serez alors invité à sélectionner un autre type de source de données et à entrer les informations pour la configurer. Les informations à fournir dépendent de la source de données.
* ***Configuration de la source de données (.rdd)*** : Choisir cette option si vous avez précédemment exporté et sauvegardé un fichier de configuration de source de données (.rdd) et souhaitez l'importer dans votre application {{ fr.RDM }}. Vous serez alors invité à sélectionner le fichier sur votre ordinateur.

## Étape 2 : Gérer vos entrées

![Gérer vos entrées](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2176.png)

{% snippet, "badgeInfo" %}
Si vous avez sélectionné un fichier de configuration de source de données (.rdd), cette étape est ignorée.
{% endsnippet %}

L'étape suivante implique la gestion de vos entrées dans votre source de données. Les entrées sont utilisées pour stocker vos informations au sein de {{ fr.RDM }}. Nous proposons plusieurs méthodes de création d'entrées, allant des importations aux scans. Vous pouvez également ignorer ces méthodes et créer des entrées manuellement.

Si vous décidez d'importer des entrées, vous devez d'abord avoir exporté et sauvegardé un fichier dans l'un de ces formats :
* [***CSV (.csv)***](/rdm/windows/commands/file/import/generic-csv-wizard/strategies-file-format/) (importer un fichier CSV ou coller du texte CSV)
* [***RDM (.rdm)***](/rdm/windows/commands/file/import/rdm/strategies-file-format/)
* ***Royal TS (.rts, .rtsx, .rtsz)***
* ***RDCMan (.rdg)***

{% snippet, "badgeInfo" %}
Vous pouvez toujours importer des fichiers plus tard.
{% endsnippet %}

## Étape 3 : Profil de l'interface utilisateur

![Profil de l'interface utilisateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2177.png)

Les profils de l'interface utilisateur permettent aux utilisateurs d'avoir une expérience sur mesure dans {{ fr.RDM }} en fonction de leurs tâches et rôles. Sélectionner le profil de l'interface utilisateur qui correspond le mieux à vos besoins :
* ***Professionnel de l'informatique*** : Ce profil affiche tous les types d'entrées et options à condition que l'utilisateur ait les permissions nécessaires pour y accéder. Ce profil offre tout ce que nos solutions ont à offrir, des options avancées et l'accès à toutes les entrées et informations.
* ***Utilisateur professionnel*** : Ce profil est spécifiquement conçu pour les utilisateurs qui n'ont pas besoin d'accéder aux entrées de connexion à distance, aux options administratives ou aux propriétés avancées. Nos interfaces ont été simplifiées pour minimiser les options principalement destinées aux professionnels de l'informatique, permettant aux utilisateurs professionnels de se concentrer sur leurs tâches quotidiennes sans complexités inutiles.
* ***Choisir plus tard*** : Vous pouvez définir un profil plus tard dans l'onglet [***Compte***](/rdm/windows/user-interface/navigation-pane/account/) du ***{{ fr.NPANE }}***. Entre-temps, vous serez assigné au profil par défaut.

{% snippet, "badgeInfo" %}
Pour un aperçu détaillé des deux profils, voir [Profils de l'interface utilisateur](/rdm/windows/user-interface/customization/usage-profiles/).
{% endsnippet %}

## Étape 4 : Options de l'UI

![Options de l'UI](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2178.png)

Sélectionner votre [thème](/rdm/windows/user-interface/customization/theme/) préféré (***Système***, ***Clair***, ou ***Sombre***) et [affichage du menu](/rdm/windows/user-interface/customization/style/) (***Ruban*** ou ***Menu***). Lorsque vous avez terminé, cliquer sur ***Continuer*** pour passer à la dernière étape.

## Étape 5 : Rejoindre la communauté

![Rejoindre la communauté](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2179.png)

Dans cette dernière étape, vous pouvez vous abonner à notre liste de diffusion et rejoindre la {{ fr.DFORCE }}. Les deux sont gratuits !

Notre liste de diffusion vous donne un accès exclusif à :
* Nouveautés Produits
* Meilleures Pratiques et Astuces Pro
* Avis de Sécurité

La {{ fr.DFORCE }} vous donne un accès VIP à :
* Promos, tests bêta et nouvelles
* L'équipe Devolutions
* Récompenses geek et produits Devolutions

Lorsque vous avez terminé, cliquer sur ***Terminer*** pour mettre fin au processus d'intégration et commencer à utiliser {{ fr.RDM }} !
