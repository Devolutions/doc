---
eleventyComputed:
  title: Authentification à deux facteurs LastPass
---
{% snippet, "badgeInfo" %}
L'intégration des identifiants provenant des gestionnaires de mots de passe est uniquement disponible dans la version Équipe de {{ fr.RDM }}.
{% endsnippet %}

Chaque fois que j'utilise un appareil faisant référence à mon intégration LastPass, il me demande mon Authentification à Deux Facteurs (A2F) à chaque fois.

## Solution

Ce comportement est causé par les changements récents apportés au mode d'authentification à deux facteurs de LastPass dans {{ fr.RDM }} 2020.1.20.

Vous pouvez maintenant aller sous ***Fichier – Paramètres – Types – Identifiants***, dans la section LastPass pour décider comment vous souhaitez gérer votre A2F.

![Mode d'authentification à deux facteurs LastPass](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4000.png)

Voici un bref aperçu de ce que chaque mode fait :

1. Ne pas faire confiance à cet appareil : Vous serez invité à fournir votre A2F chaque fois que vous utiliserez votre entrée LastPass.
1. Faire confiance à cet appareil : Vous serez invité une fois pour votre A2F sur cet appareil.
1. Faire confiance à cet appareil (effacer à la fermeture de l'application) : Vous serez invité une fois pour votre A2F sur cet appareil mais le jeton sera effacé lorsque vous fermerez l'application.

Note : Si vous utilisez plusieurs comptes LastPass avec un A2F configuré, vous serez invité pour chaque compte séparé. Le nombre de fois où vous serez invité variera en fonction du "mode d'authentification à deux facteurs" choisi ci-dessus.
