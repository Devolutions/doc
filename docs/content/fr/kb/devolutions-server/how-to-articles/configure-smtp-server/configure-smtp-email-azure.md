---
eleventyComputed:
  title: Configurer un courriel SMTP avec Azure
---
Depuis la version 2022.3.10 de {{ fr.DVLS }}, l'authentification moderne pour Azure peut maintenant être utilisée pour la configuration de courriels.

## Étapes

Avant de procéder à la configuration dans {{ fr.DVLS }}, vous devez effectuer les étapes suivantes dans votre portail Azure :
1. Créer une inscription d'application. Il est également possible de réutiliser celle pour l'authentification Azure AD / Office 365.
1. Ajouter la permission d'application « Mail.Send ».

Vous pouvez maintenant configurer le courriel SMTP dans {{ fr.DVLS }}.
1. Dans {{ fr.DVLS }}, accéder à ***Administration – Paramètres Serveur – Courriel***.
1. Dans la liste déroulante ***Type d'authentification***, sélectionner ***Azure***.
![Type d'authentification Azure](https://cdnweb.devolutions.net/docs/fr/kb/KB2087.png)
3. Dans le champ ***Courriel de l'administrateur***, saisir l'adresse courriel du destinataire qui recevra les erreurs.
1. Dans le champ ***ID du client***, saisir l'ID de l'application. Dans le portail Azure, cette information se nomme ***ID d'application (client)*** et peut être trouvée dans la ***Vue d'ensemble*** de l'application.
1. Dans le champ ***ID du locataire***, saisir l'ID du locataire qui peut être trouvé dans la ***Vue d'ensemble*** de votre application.
{% snippet icon.badgeInfo %}
Veuillez noter que les courriels ne peuvent être envoyés qu'aux comptes du même locataire; ils ne peuvent pas être envoyés à l'externe.
{% endsnippet %}

6. Dans le champ ***ID de l'utilisateur***, saisir l'ID de l'utilisateur qui est listé dans la section « De » du courriel.
1. Dans le champ ***Valeur secrète***, saisir le secret client. Réutiliser le secret d'authentification Azure AD existant ou en créer un nouveau dans l'inscription d'application en allant dans la section ***Certificats & secrets*** et en cliquant sur ***Nouveau secret client***.
1. Une fois les informations fournies, tester les paramètres de courriel avec le bouton ***Tester courriel***.
1. Si le test est un succès, ***Enregistrer*** la configuration en utilisant l'icône située en haut à droite.
