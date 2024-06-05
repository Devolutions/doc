---
eleventyComputed:
  title: Conseils d'équipe
  status: Sujet disponible en langue allemande
  keywords:
  - rôle
---
Voici cinq conseils d'équipe pour {{ fr.RDM }}.

## Sécurité, utilisateurs et groupes d'utilisateurs

Partager des informations de session, c'est bien -- mais contrôler l'accès, c'est le paradis.

Grâce au système de groupes d'utilisateurs de {{ fr.RDM }}, vous pouvez contrôler l'accès et les droits des utilisateurs pour des sessions et actions spécifiques.

Commencer par créer des groupes d'utilisateurs et les nommer en fonction de ce que vous attendez qu'ils puissent voir et utiliser. Ensuite, assigner des utilisateurs à ces groupes. Tout ce que vous avez à faire maintenant est d'assigner des groupes d'utilisateurs aux entrées et dossiers selon vos souhaits.

## Déploiement rationalisé avec le {{ fr.CI }}

Ok : vous êtes prêt à déployer {{ fr.RDM }} et à vous faire voir comme le héros de l'entreprise. Vous avez manuellement configuré vos sources de données, spécifié votre licence et défini les options système. Vous pouvez sentir l'excitation vous parcourir. Vous êtes en mission !

Mais attendez – avant de passer en direct, pourquoi ne pas nous laisser créer un [{{ fr.CI }}](/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/) pour vous ? Une fois que nous l'aurons fait, votre équipe reconnaissante n'aura besoin que d'installer le fichier MSI résultant pour accéder à leur installation {{ fr.RDM }} pré-configurée prête à l'emploi. Vous serez aimé de tous, peut-être avec une parade, un état, ou un prix à votre nom.

## Gestion des versions

Voici un scénario familier : votre équipe utilise {{ fr.RDM }} depuis des mois, voire des années, et tout va bien. Puis arrive une nouvelle version pleine de nouvelles fonctionnalités intéressantes, et vous pensez que tout le monde dans votre entreprise devrait mettre à jour. La fenêtre ci-dessous dépeint les différentes options à votre disposition pour contrôler les versions des clients.
![Gestion des versions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6164.png)

{% snippet, "badgeHelp" %}
Voir [Licences](/rdm/windows/commands/administration/management/licenses/) et [Gestion des versions](/rdm/commands/administration/settings/system-settings/application-specific/version-management/) pour plus d'informations.
{% endsnippet %}

## Paramètres système

L'onglet général du formulaire ***Administration – Paramètres système*** vous permet de contrôler facilement les aspects de sécurité.

Une excellente fonctionnalité d'équipe ici est le Message Système, qui permet à un administrateur d'informer les utilisateurs d'une prochaine interruption du système, d'un changement de politique ou de toute autre chose. Chaque utilisateur recevra le message lorsqu'il se connectera à la source de données ou que le message sera modifié. Utilisez-le pour afficher des clauses de confidentialité de l'entreprise ou, si vous le souhaitez, créez le chaos avec un message comme celui ci-dessous. Un peu de chaos, c'est bon pour l'âme.

![Message système](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6113.png)

## {{ fr.DVLS }}

Avez-vous besoin d'une intégration Active Directory ? Ou peut-être avez-vous des utilisateurs hors site qui ont besoin d'accéder à la source de données partagée, mais ne veulent pas utiliser une connexion VPN ? Peut-être voulez-vous plus de sécurité et de mise en cache ? {{ fr.DVLS }} offre tout cela et bien plus encore !

Vous auto-hébergez {{ fr.DVLS }} et pouvez décider de publier l'instance uniquement sur votre intranet (localement) ; ou aller jusqu'au bout et l'offrir en ligne (cloud privé). Cela vous permet de créer un magasin de données haut de gamme à l'échelle de l'entreprise. Découvrez plus sur {{ fr.DVLS }} à [http://server.devolutions.net/](http://server.devolutions.net/).
