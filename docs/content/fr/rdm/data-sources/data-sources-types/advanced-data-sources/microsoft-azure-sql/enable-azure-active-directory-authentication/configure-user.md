---
eleventyComputed:
  title: Configurer un utilisateur Azure Active Directory
---
Suivre les étapes ci-dessous pour configurer un utilisateur Azure AD dans {{ fr.RDM }}.

## Étapes

1. Dans {{ fr.RDM }}, naviguer vers la source de données Microsoft Azure SQL pour laquelle configurer un utilisateur.
1. Dans ***Administration – Utilisateurs***, cliquer sur le bouton ***Ajouter un utilisateur***.
![Administration – Utilisateurs – Ajouter un utilisateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2151.png)
1. Dans la liste déroulante ***Type d'authentification***, sélectionner ***Microsoft***.
   {% snippet, "badgeCaution" %}
   Si ***Microsoft*** n'est pas disponible dans la liste déroulante ***Type d'authentification***, vérifier que toutes les étapes dans [Activer SQL Azure avec Azure Active Directory avec MFA](/rdm/kb/rdm-windows/how-to-articles/enable-sql-azure-ad-mfa/) ont été complétées.
   {% endsnippet %}

   ![Type d'authentification Microsoft](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11580.png)

4. Dans le champ ***Nom d'utilisateur***, entrer l'email de l'utilisateur.
{% snippet, "badgeInfo" %}
L'option ***Est un utilisateur invité/fédéré*** à côté du champ ***Domaine*** ne devrait être activée que dans des cas rares et spéciaux où le compte est invité ou fédéré. Si c'est le cas, il sera nécessaire d'entrer un domaine complet qui devrait ressembler à ceci : azuresubscriptionprefix.onmicrosoft.com.
{% endsnippet %}

5. Cliquer sur ***OK*** une fois terminé.
{% snippet, "badgeCaution" %}
Si l'invite MFA n'apparaît pas, veuillez vérifier vos journaux Azure dans ***Détails des authentifications – Détail du résultat***. Nous n'avons actuellement aucun moyen de forcer une invite MFA sur des appareils enregistrés. Si ***L'exigence MFA a été ignorée en raison d'un appareil enregistré*** apparaît, c'est pourquoi dans ce cas vous n'obtenez pas l'invite MFA.
![!!RDMWin2218](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2218.png)
{% endsnippet %}
