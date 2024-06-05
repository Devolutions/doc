---
eleventyComputed:
  title: Configurer un e-mail SMTP avec Azure
---
Depuis la version 2022.3.10 de {{ fr.DVLS }}, l'authentification moderne pour Azure peut maintenant être utilisée pour la configuration de l'e-mail.

## Étapes

Avant de procéder à la configuration dans {{ fr.DVLS }}, vous devez effectuer les opérations suivantes dans votre portail Azure :
1. Créer une inscription d'application. Vous pouvez également réutiliser celle utilisée pour l'authentification Azure AD / Office 365.
1. Ajouter la permission d'application "Mail.Send".

Vous pouvez maintenant configurer l'e-mail SMTP dans {{ fr.DVLS }}.
1. Dans {{ fr.DVLS }}, aller à ***Administration – Paramètres du serveur – Email***.
1. Dans la liste déroulante ***Type d'authentification***, sélectionner ***Azure***.
![Type d'authentification Azure](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2204.png)
3. Dans le champ ***E-mail de l'administrateur***, entrer l'adresse e-mail du destinataire qui recevra les erreurs.
1. Dans le champ ***ID client***, entrer l'ID de l'application. Dans le portail Azure, cette information est appelée ***ID d'application (client)*** et peut être trouvée dans l'***Aperçu*** de votre application.
1. Dans le champ ***ID de locataire***, entrer l'ID du locataire qui peut être trouvé dans l'***Aperçu*** de votre application.
{% snippet, "badgeInfo" %}
Veuillez noter que les e-mails ne peuvent être envoyés qu'aux comptes du même locataire ; ils ne peuvent pas être envoyés à l'extérieur.
{% endsnippet %}

6. Dans le champ ***ID utilisateur***, entrer l'ID de l'utilisateur qui est listé dans la section "De" de l'e-mail.
1. Dans le champ ***Valeur secrète***, entrer le secret client. Réutiliser le secret d'authentification Azure AD déjà existant ou en créer un nouveau dans votre inscription d'application en allant à la section ***Certificats & secret*** et en cliquant sur ***Nouveau secret client***.
1. Une fois les informations fournies, tester vos paramètres d'e-mail avec le bouton ***Tester l'e-mail***.
1. Si le test est réussi, ***Sauvegarder*** votre configuration en utilisant l'icône en haut à droite.
