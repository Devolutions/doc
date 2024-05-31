---
eleventyComputed:
  title: Migrer des groupes de sécurité (hérités) vers des groupes d'utilisateurs
  description: Dans {{ fr.RDM }}, l'accès à vos objets peut être sécurisé et géré en utilisant le Contrôle d'Accès Basé sur les Groupes d'Utilisateurs.
  status: Sujet disponible en langue allemande
---
{% snippet, "badgeWarning" %}
Les groupes de sécurité et la sécurité héritée ont été dépréciés et seront complètement supprimés à partir de la version 2023.3 de {{ fr.RDM }}.
{% endsnippet %}  

Dans {{ fr.RDM }}, l'accès à vos objets peut être sécurisé et géré en utilisant le ***Contrôle d'Accès Basé sur les Groupes d'Utilisateurs***. Ce type de sécurité vous offre un contrôle plus granulaire sur votre sécurité.  
{% snippet, "badgeHelp" %}
Pour plus d'informations, veuillez vous référer à [Contrôle d'Accès Basé sur les Groupes d'Utilisateurs](/rdm/windows/user-groups-based-access-control/).
{% endsnippet %}  

## Migrer vers les Groupes d'Utilisateurs
1. Ouvrir {{ fr.RDM }}.
1. Sous ***Administration – Gestion***, cliquer sur ***Groupes d'Utilisateurs***.
1. Créer et appliquer les groupes.
1. Cliquer sur le bouton ***Groupes de Sécurité (Hérités)*** dans la section ***Gestion***.
1. Supprimer chaque groupe de sécurité en sélectionnant chacun et en cliquant sur ***Supprimer le Groupe de Sécurité***.  
{% snippet, "badgeCaution" %}
Pour gérer les permissions de vos utilisateurs, nous vous recommandons de passer des ***Groupes de Sécurité*** (dépréciés) aux [***Permissions***](/rdm/windows/user-groups-based-access-control/permissions/). Une fois la migration effectuée, [désactiver la sécurité héritée](/rdm/kb/rdm-windows/how-to-articles/migrate-legacy-security-permissions/).
{% endsnippet %}  

Nous avons également deux scénarios pour vous aider à démarrer avec ce type de sécurité :

* [Sécurité simplifiée](/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/)
* [Sécurité avancée](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/)