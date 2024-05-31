---
eleventyComputed:
  title: Expérience d'invitation de l'utilisateur final pour SSO dans {{ fr.DHUBB }}
  description: Les utilisateurs invités à rejoindre {{ fr.DHUBB }} reçoivent un courriel de leur administrateur.
  keywords:
  - Office 365
  - Office365
  - Microsoft
  - authentification
  - clé privée
---
{% youtube 'EJgx-xLMNc0' %}

Les utilisateurs invités à rejoindre {{ fr.DHUBB }} reçoivent ce courriel de leur administrateur.
![Email d'invitation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4146.png)
1. Accéder au lien URL de {{ fr.DHUBB }}.
1. Se connecter en utilisant le bouton ***Se connecter avec Microsoft***.
![Se connecter avec Microsoft](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4147.png)

{% snippet, "badgeInfo" %}
Les nouveaux utilisateurs accédant à {{ fr.DHUBB }} via la connexion Azure AD passeront par cette configuration s'ils n'ont pas de {{ fr.DA }}. Comme vous ne voulez pas que l'utilisateur définisse un mot de passe pour ce compte, vous devez avoir un moyen de stocker la ***Clé Privée***. Elle est habituellement conservée avec le compte du mot de passe. Cette clé spéciale et unique pour chaque utilisateur est nécessaire lorsque l'utilisateur change d'appareil ou de navigateur. Au quotidien, l'appareil et le navigateur reconnaissent l'utilisateur actuel, mais pas un nouvel utilisateur.

C'est pourquoi l'utilisateur doit stocker cette ***Clé Privée*** sur le ***{{ fr.WMAPP }}***. Il sera beaucoup plus pratique pour l'utilisateur de faire une notification push pour accepter le nouvel appareil ou navigateur.
{% endsnippet %}

![Stocker votre Clé Privée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4148.png)

* Nous recommandons fortement la première méthode avec le ***{{ fr.WMAPP }}***. Suivre les étapes dans [Méthode {{ fr.WMAPP }}](#methode-application-mobile-workspace).
* La deuxième meilleure option est de télécharger et d'imprimer la ***Clé Privée*** sous forme de ***Code QR***. Pour cette méthode, continuer à [Méthode Code QR](#methode-code-qr).
* En dernier recours et si l'utilisateur n'a pas d'appareil mobile, un mot de passe peut être créé pour ajouter la ***Clé Privée*** au {{ fr.DA }}.

## Méthode {{ fr.WMAPP }}

1. Télécharger le ***{{ fr.WMAPP }}***.
1. Cliquer sur ***Continuer***.
![Télécharger le {{ fr.WMAPP }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4150.png)
3. Dans le {{ fr.WMAPP }}, accéder à l'espace ***Authentificateur***, puis cliquer sur ***Ajouter***.
1. Retour sur la page du navigateur, cliquer sur ***Application Mobile***.
1. Scanner le code QR dans le ***{{ fr.WMAPP }}***.
![Scanner ce code QR dans le {{ fr.WMAPP }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4151.png)
6. Attendre que le compte et l'authentificateur soient appairés. Une fois cette configuration terminée, elle donnera accès au hub.
![Appairage](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4152.png)

Vous pouvez maintenant passer à [Premier accès à {{ fr.DHUB }}](#premier-acces-a--frphub).

## Méthode Code QR

1. Sélectionner l'option ***Code QR***.
1. Cliquer sur ***Télécharger*** pour sauvegarder la ***Clé Privée*** sous forme de document Code QR sur votre ordinateur. Vous pouvez également ***Imprimer*** une copie.
![Télécharger ou Imprimer votre Clé Privée sous forme de Code QR](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4155.png)
1. Cliquer sur ***Continuer***.

Voici un exemple du contenu du fichier PDF. Il sera nommé *devolutions-qr-code.pdf*. Veuillez vous assurer de le conserver dans un endroit sûr.
![Exemple de Code QR](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4162.png)

Vous êtes maintenant prêt à continuer à la section suivante.

## Premier accès à {{ fr.DHUB }}

1. Comme l'utilisateur a été invité avec un ID d'invitation et une clé, cliquer sur ***Oui***.
![Approbation requise](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4153.png)
1. Comme le hub a été ouvert depuis votre courriel, ***ID d'invitation*** et ***Clé d'invitation*** devraient être préremplis. Si ce n'est pas le cas, copier le code et le coller dans les champs appropriés.
![ID d'invitation et Clé d'invitation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4154.png)
1. Cliquer sur ***Déverrouiller***.

L'utilisateur est maintenant connecté et prêt à utiliser {{ fr.DHUBB }}.
