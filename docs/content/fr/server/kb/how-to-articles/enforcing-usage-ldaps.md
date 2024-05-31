---
eleventyComputed:
  title: Exigence de l'utilisation de LDAPS
---
Pour exiger qu'un serveur d'annuaire rejette les liaisons simples qui se produisent sur une connexion en texte clair, il faut appliquer une politique.

Vous pouvez vous référer à [l'article original de Microsoft](https://support.microsoft.com/en-ca/kb/935834), mais son contenu sera dupliqué ci-dessous pour faciliter l'utilisation.

## Configurer l'annuaire pour exiger la signature du serveur LDAP en utilisant la Stratégie de Groupe

### Définir l'exigence de signature du serveur LDAP

1. Cliquer sur ***Démarrer***, cliquer sur ***Exécuter***, taper **mmc.exe**, puis cliquer sur ***OK***.
1. Dans le menu Fichier, cliquer sur ***Ajouter/Supprimer un composant logiciel enfichable***.
1. Dans la boîte de dialogue ***Ajouter ou supprimer des composants logiciels enfichables***, cliquer sur ***Éditeur de gestion de stratégie de groupe***, puis cliquer sur ***Ajouter***.
1. Dans la boîte de dialogue ***Sélectionner un objet Stratégie de groupe***, cliquer sur ***Parcourir***.
1. Dans la boîte de dialogue ***Parcourir pour un objet Stratégie de groupe***, cliquer sur ***Stratégie de domaine par défaut*** sous la zone ***Domaines***, ***UO*** et ***Objets de stratégie de groupe liés***, puis cliquer sur ***OK***.
1. Cliquer sur ***Terminer***.
1. Cliquer sur ***OK***.
1. Développer ***Stratégie de contrôleur de domaine par défaut***, développer ***Configuration de l'ordinateur***, développer ***Stratégies***, développer ***Paramètres Windows***, développer ***Paramètres de sécurité***, développer ***Stratégies locales*** puis cliquer sur ***Options de sécurité***.
1. Cliquer avec le bouton droit sur ***Contrôleur de domaine : exigences de signature du serveur LDAP*** puis cliquer sur ***Propriétés***.
1. Dans la boîte de dialogue ***Contrôleur de domaine : exigences de signature du serveur LDAP Propriétés***, activer ***Définir*** ce paramètre de stratégie, cliquer pour sélectionner ***Exiger la signature*** dans la liste déroulante ***Définir ce paramètre de stratégie***, puis cliquer sur ***OK***.
1. Dans la boîte de dialogue ***Confirmer le changement de paramètre***, cliquer sur ***Oui***.

### Définir l'exigence de signature LDAP du client via la politique de l'ordinateur local

1. Cliquer sur ***Démarrer***, cliquer sur ***Exécuter***, taper **mmc.exe**, puis cliquer sur ***OK***.
1. Dans le menu ***Fichier***, cliquer sur ***Ajouter/Supprimer un composant logiciel enfichable***.
1. Dans la boîte de dialogue ***Ajouter ou supprimer des composants logiciels enfichables***, cliquer sur ***Éditeur d'objet de stratégie de groupe***, puis cliquer sur ***Ajouter***.
1. Cliquer sur ***Terminer***.
1. Cliquer sur ***OK***.
1. Développer ***Stratégie de l'ordinateur local***, développer ***Configuration de l'ordinateur***, développer ***Stratégies***, développer ***Paramètres Windows***, développer ***Paramètres de sécurité***, développer ***Stratégies locales***, puis cliquer sur ***Options de sécurité***.
1. Cliquer avec le bouton droit sur ***Sécurité réseau : exigences de signature client LDAP***, puis cliquer sur ***Propriétés***.
1. Dans la boîte de dialogue ***Sécurité réseau : exigences de signature client LDAP Propriétés***, cliquer pour sélectionner ***Exiger la signature*** dans la liste déroulante, puis cliquer sur ***OK***.
1. Dans la boîte de dialogue ***Confirmer le changement de paramètre***, cliquer sur ***Oui***.

### Définir l'exigence de signature LDAP du client via un objet de stratégie de groupe de domaine

1. Cliquer sur ***Démarrer***, cliquer sur ***Exécuter***, taper **mmc.exe**, puis cliquer sur ***OK***.
1. Dans le menu ***Fichier***, cliquer sur ***Ajouter/Supprimer un composant logiciel enfichable***.
1. Dans la boîte de dialogue ***Ajouter ou supprimer des composants logiciels enfichables***, cliquer sur ***Éditeur d'objet de stratégie de groupe***, puis cliquer sur ***Ajouter***.
1. Cliquer sur ***Parcourir***, puis sélectionner ***Stratégie de domaine par défaut*** (ou l'***Objet de stratégie de groupe*** pour lequel vous souhaitez activer la signature LDAP du client).
1. Cliquer sur ***OK***.
1. Cliquer sur ***Terminer***.
1. Cliquer sur ***Fermer***.
1. Cliquer sur ***OK***.
1. Développer ***Stratégie de domaine par défaut***, développer ***Configuration de l'ordinateur***, développer ***Paramètres Windows***, développer ***Paramètres de sécurité***, développer ***Stratégies locales***, puis cliquer sur ***Options de sécurité***.
1. Dans la boîte de dialogue ***Sécurité réseau : exigences de signature client LDAP Propriétés***, cliquer pour sélectionner ***Exiger la signature*** dans la liste déroulante, puis cliquer sur ***OK***.
1. Dans la boîte de dialogue ***Confirmer le changement de paramètre***, cliquer sur ***Oui***.
