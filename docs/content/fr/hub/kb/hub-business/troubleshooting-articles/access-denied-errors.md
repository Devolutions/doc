---
eleventyComputed:
  title: Erreurs d'accès refusé
  description: Dans {{ fr.DHUB }}, de nombreuses situations peuvent déclencher une erreur d'accès refusé. Voici les messages les plus courants et leurs solutions.
---
Dans {{ fr.DHUB }}, de nombreuses situations peuvent déclencher une erreur d'***Accès refusé***. Voici les messages les plus courants et leurs solutions.

{% snippet, "badgeInfo" %}
Tous les autres types d'erreurs de {{ fr.DHUB }} sont répertoriés [ici](/hub/kb/hub-business/troubleshooting-articles/errors-list/).
{% endsnippet %}

## Activer votre vérification en deux étapes sur votre compte.
![Activer votre vérification en deux étapes sur votre compte.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4770.png)

#### Description
La connexion avec authentification à deux facteurs a été imposée sur le {{ fr.DHUBB }}.
#### Solution
Tous les utilisateurs qui se connectent à ce {{ fr.DHUBB }} doivent avoir une authentification à deux facteurs configurée sur leur {{ fr.DA }}. Veuillez suivre les instructions affichées.

---

## Entrez votre code de réinitialisation d'urgence.
![Entrez votre code de réinitialisation d'urgence.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4771.png)

#### Description
Cet utilisateur a effectué une opération Oubli de mot de passe sur son {{ fr.DA }} pour son {{ fr.DHUBP }}.
#### Solution
Entrez votre code de réinitialisation d'urgence. Le kit de réinitialisation d'urgence a été fourni lors de la première connexion après la création initiale du {{ fr.DHUBP }}. C'est une étape obligatoire dans le processus de création.

Vous pouvez rechercher un fichier PDF intitulé "{{ fr.DHUBP }} Emergency Kit". Il n'y a aucun moyen de le récupérer si le kit de réinitialisation d'urgence ne peut être localisé.

---

## Veuillez contacter votre administrateur pour être autorisé à utiliser l'{{ fr.WBEX }}.
![Veuillez contacter votre administrateur pour être autorisé à utiliser l'{{ fr.WBEX }}.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2146.png)

#### Description
Cet utilisateur n'est pas autorisé à accéder à ce {{ fr.DHUBB }} via l'{{ fr.WBEX }} {{ fr.CTOOL }}.
#### Solution
L'utilisateur doit contacter son administrateur {{ fr.DHUBB }} ou tout utilisateur ayant la permission de gérer les utilisateurs pour activer son accès.

---

## Veuillez contacter votre administrateur pour activer votre compte.
![Veuillez contacter votre administrateur pour activer votre compte.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4767.png)

#### Description
Cet utilisateur a été désactivé dans {{ fr.DHUBB }}.
#### Solution
L'utilisateur doit contacter son administrateur {{ fr.DHUBB }} ou tout utilisateur ayant la permission de gérer les utilisateurs pour activer son accès.

---

## Veuillez contacter votre administrateur pour demander une invitation.
![Veuillez contacter votre administrateur pour demander une invitation.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4763.png)

#### Description
Ce compte utilisateur n'existe pas dans le {{ fr.DHUBB }}.
#### Solution
Un administrateur ou tout utilisateur ayant la permission de gérer les utilisateurs doit inviter l'utilisateur avec son {{ fr.DA }} dans ce {{ fr.DHUBB }}.

---

## Veuillez contacter votre administrateur pour demander une invitation OU Entrez votre code de réinitialisation d'urgence.
![Veuillez contacter votre administrateur pour demander une invitation OU Entrez votre code de réinitialisation d'urgence.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4765.png)

#### Description
Cet utilisateur a effectué une opération Oubli de mot de passe sur son {{ fr.DA }} et est le propriétaire du {{ fr.DHUBB }}.
#### Solution
Y a-t-il un autre administrateur ou tout utilisateur ayant la permission de gérer les utilisateurs ?

* **Oui** : Demander à l'autre administrateur ou utilisateur ayant suffisamment de droits de réinviter le propriétaire.
* **Non** : Le propriétaire devra entrer son code de réinitialisation d'urgence.

Le kit de réinitialisation d'urgence a été fourni lors de la première connexion après la création initiale du {{ fr.DHUBB }}. C'est une étape obligatoire dans le processus de création.

Vous pouvez rechercher un fichier PDF intitulé "{{ fr.DHUB }} Emergency Kit huburlxxxx.devolutions.app". Si vous êtes propriétaire d'un {{ fr.DHUBB }} et que vous ne pouvez localiser votre fichier PDF du kit de réinitialisation d'urgence et que vous n'avez pas d'autre administrateur ou tout utilisateur ayant la permission de gérer les utilisateurs, veuillez contacter notre [équipe de support](mailto:service@devolutions.net) par courriel.

---

## Nous avons détecté un oubli de mot de passe. Afin de récupérer l'accès à ce Hub, veuillez contacter votre administrateur pour demander une nouvelle invitation.
![Nous avons détecté un oubli de mot de passe. Afin de récupérer l'accès à ce Hub, veuillez contacter votre administrateur pour demander une nouvelle invitation.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4764.png)

#### Description
Cet utilisateur a effectué une opération Oubli de mot de passe sur son {{ fr.DA }} et n'est pas le propriétaire. Cette action coupe le lien avec le {{ fr.DHUBB }}.

Note : Si le {{ fr.DA }} a plus d'un hub, cela coupera le lien avec tous.
#### Solution
Un administrateur ou tout utilisateur ayant la permission de gérer les utilisateurs doit réinviter cet utilisateur. Cette invitation établira le lien avec le {{ fr.DHUBB }}.

---

## Nous avons détecté un oubli de mot de passe ou une perte de votre téléphone (désapparié). Afin de récupérer l'accès à ce Hub, veuillez contacter votre administrateur pour demander une nouvelle invitation.
![Nous avons détecté un oubli de mot de passe ou une perte de votre téléphone (désapparié). Afin de récupérer l'accès à ce Hub, veuillez contacter votre administrateur pour demander une nouvelle invitation.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2219.png)

#### Description
L'appariement du téléphone de cet utilisateur est rompu pour la méthode de stockage de notification push de clé privée.
#### Solution
1. Aller à [Méthodes de stockage de clé privée](https://portal.devolutions.com/security/private-key) dans votre {{ fr.DPORTAL }}.
1. Supprimer l'entrée push liée au compte sur votre téléphone.
1. Retirer le code QR ou le mot de passe lié au compte, le cas échéant.
1. Cliquer sur le bouton ***Oubli de votre téléphone*** dans la méthode ***Stocker sur un appareil mobile***.
1. Suivre le processus de configuration de notification push.
1. Demander à un administrateur ou à tout utilisateur ayant la permission de gérer les utilisateurs une nouvelle invitation au {{ fr.DHUBB }}.

---

## {{ fr.WS }} est désactivé pour cet utilisateur sur ce hub.
![{{ fr.WS }} est désactivé pour cet utilisateur sur ce hub.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2209.png)

#### Description
Cet utilisateur n'est pas autorisé à accéder à ce {{ fr.DHUBB }} via le {{ fr.WAPPS }}.
#### Solution
L'utilisateur doit contacter son administrateur {{ fr.DHUBB }} ou tout utilisateur ayant la permission de gérer les utilisateurs pour activer son accès.

---

## Votre adresse IP n'est pas autorisée.
![Votre adresse IP n'est pas autorisée.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4768.png)

#### Description
L'adresse IP de cet utilisateur n'est pas dans la liste blanche IP.
#### Solution
L'utilisateur doit contacter son administrateur {{ fr.DHUBB }}.

---

## Votre licence est invalide ; veuillez contacter votre administrateur. Si vous pensez qu'il s'agit d'une erreur, contactez le support.
![Votre licence est invalide ; veuillez contacter votre administrateur. Si vous pensez qu'il s'agit d'une erreur, contactez le support.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4766.png)

#### Description
La licence d'essai ou payante pour {{ fr.DHUBB }} a expiré.
#### Solution
Le propriétaire du {{ fr.DHUBB }} doit [acheter ou renouveler la licence](https://store.devolutions.net/store).

---

## Votre hub a été désactivé ; contactez votre administrateur.
![Votre hub a été désactivé ; contactez votre administrateur.](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4769.png)

#### Description
Ce {{ fr.DHUBB }} a été verrouillé ou un bug s'est produit entre la licence et le lien vers le {{ fr.DHUBB }}.
#### Solution
Veuillez contacter notre [équipe de support](mailto:service@devolutions.net).