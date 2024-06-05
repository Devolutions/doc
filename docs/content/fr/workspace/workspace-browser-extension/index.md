---
eleventyComputed:
  title: "{{ fr.WBEX }}"
  order: 30
---
![!!{{ fr.WS }} logo](https://cdnweb.devolutions.net/images/projects/workspace/logos/workspace-color-shadow.svg)

Le {{ fr.WBEX }} est un plugin de navigateur web pour la gestion des mots de passe utilisé en conjonction avec {{ fr.RDM }}, {{ fr.DVLS }}, et {{ fr.DHUB }}, qui permet aux utilisateurs d'injecter de manière sécurisée les mots de passe dans les sites web en utilisant les identifiants stockés dans leurs {{ fr.VLT }}s.

Il donne aux administrateurs système un contrôle total sur la gestion des mots de passe, sans affecter la productivité de l'utilisateur.

{% youtube 'CEcfJh6rDtk' %}

| ![!!{{ fr.RDM }} logo](https://cdnweb.devolutions.net/images/projects/remote-desktop-manager/logos/remote-desktop-manager-color-shadow.svg)<br><br>Centraliser, gérer et sécuriser les connexions à distance {width=358px} | ![!!{{ fr.DVLS }} logo](https://cdnweb.devolutions.net/images/projects/server/logos/server-color-shadow.svg)<br><br>Sécuriser, gérer et surveiller l'accès aux comptes privilégiés {width=358px} | ![!!{{ fr.DHUB }} logo](https://cdnweb.devolutions.net/images/projects/devolutions-hub/devolutions-hub-color-shadow.svg)<br><br>Stocker et gérer les mots de passe des utilisateurs d'entreprise {width=358px} |
| --- | --- | --- |
| {{ fr.RDM }} centralise toutes les connexions à distance sur une seule plateforme qui est partagée de manière sécurisée entre les utilisateurs et à travers toute l'équipe. | {{ fr.DVLS }} vous permet de contrôler l'accès aux comptes privilégiés et de gérer les sessions à distance via une solution auto-hébergée sécurisée, soit localement soit sur votre cloud privé (Azure, par exemple). | {{ fr.DHUB }} est un gestionnaire de mots de passe basé sur le cloud et sécurisé pour les équipes. |

{% snippet, "shieldWarning" %}
Les utilisateurs avancés, d'autres extensions de navigateur, ou même l'injection de JavaScript peuvent tous résulter en la lecture du mot de passe depuis le contrôle d'édition de mot de passe, même s'il affiche des points au lieu du mot de passe. Toute utilisation d'un navigateur externe doit être soigneusement pesée par rapport à vos exigences de sécurité.
{% endsnippet %}
