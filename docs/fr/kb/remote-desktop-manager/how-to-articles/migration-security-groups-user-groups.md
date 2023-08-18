---
title: Migration des groupes de sécurité vers les groupes d'utilisateurs
status: Topic available in German language
---
{% snippet icon.badgeWarning %} 
Les groupes de sécurité et l'ancienne sécurité ont été dépréciés et seront complètement supprimés à partir de la version 2023.3 de {{ fr.RDM }}.
{% endsnippet %}  

Dans {{ fr.RDM }}, l’accès à vos objets peut être sécurisé et géré grâce au ***Contrôle d’accès basé sur les groupes d’utilisateurs***. Ce dernier rend possible un contrôle plus granulaire de votre sécurité.  
{% snippet icon.badgeHelp %}
Pour plus de détails, veuillez vous référer à [Contrôle d'accès basé sur les groupes d'utilisateurs](/fr/rdm/windows/user-groups-based-access-control/).  
{% endsnippet %}  
 
## Migration aux groupes d'utilisateurs
1. Ouvrir {{ fr.RDM }}.
1. Sous ***Administration – Gestion***, cliquer sur ***Groupes d'utilisateurs***.
1. Créer et appliquer les groupes.
1. Sous***Administration – Gestion***, cliquer sur ***Groupes de sécurité***.
1. Supprimer tous les groupes de sécurité en les sélectionnant puis en cliquant sur ***Supprimer les groupes de sécurité***.  
{% snippet icon.badgeCaution %}
Pour une meilleure gestion de vos permissions d'utilisateurs, nous vous recommandons de passer des ***Groupes de sécurité*** (obsolète) aux [***Permissions***](/fr/rdm/windows/user-groups-based-access-control/permissions/). Une fois la migration complétée, effectuez la [migration de l'ancienne sécurité vers les permissions](/fr/kb/remote-desktop-manager/how-to-articles/migrate-legacy-security-permissions/).
{% endsnippet %}

Nous offrons également les deux scénarios suivants pour vous familiariser avec ce type de sécurité :  

* [Sécurité simplifiée](/fr/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/)  
* [Sécurité avancée](/fr/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/)  

## Migrating to User Groups
1. Open {{ en.RDM }}.
1. Under ***Administration – Management***, click on ***User Groups***.
1. Create and apply the groups.
1. Click on the ***Security Groups (Legacy)*** button in the ***Management*** section.
1. Delete every security group by selecting each one and clicking on ***Delete Security Group***.  
{% snippet icon.badgeCaution %}
To manage your user's permissions, we recommend you switch from ***Security Groups*** (deprecated) to [***Permissions***](/rdm/windows/user-groups-based-access-control/permissions/). Once the migration done, [migrate from legacy security to permissions](/kb/remote-desktop-manager/how-to-articles/migrate-legacy-security-permissions/).
{% endsnippet %}  

We also have two scenarios in order to get you started with this type of security:  

* [Simplified security](/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/)  
* [Advanced security](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/)  
