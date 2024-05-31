---
eleventyComputed:
  title: Problèmes de connexion automatique Microsoft RDP
---
Parfois, la connexion automatique ne fonctionne pas et le système distant demande vos identifiants. Voici quelques étapes pour aider à identifier le problème. Le support pour la connexion automatique a été introduit sur Windows 2003/XP, donc assurez-vous que vous essayez de vous connecter à ces versions ou à des versions ultérieures. Windows 2000 ne prend pas en charge la connexion automatique.

## Les sessions RDP se connectent avec succès en mode Externe, mais pas en mode Intégré.

Ce problème peut être causé par une mauvaise négociation d'authentification car dans certains cas, l'authentification unique (SSO) nécessite une Authentification au Niveau du Réseau (NLA). Cela peut se produire lors de la demande d'identifiants et lors de l'utilisation de la connexion automatique.

Vérifier l'option ***Activer l'authentification au niveau du réseau NLA (SingleSignOn)*** dans l'onglet ***Connexion*** de votre session.

{% snippet, "badgeInfo" %}
Vous pourriez également devoir vérifier l'option ***Mode public*** dans l'onglet ***Avancé*** pour le faire fonctionner.
{% endsnippet %}

![!!KB4041](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4041.png)

## La connexion a été refusée car le compte utilisateur n'est pas autorisé pour la connexion à distance

Nous avons découvert que l'activation de l'option ***Mode public*** dans l'onglet ***Avancé*** résout le problème.

![!!KB4042](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4042.png)

## Assurez-vous que les identifiants sont correctement saisis

RDM permet une gestion avancée des identifiants. Selon votre choix entre : ***Personnalisé***, ***Lié ({{ fr.VLT }})***, ***Intégré*** ou ***Hérité*** assurez-vous que les identifiants sont correctement saisis.

{% snippet, "badgeCaution" %}
Assurez-vous que l'option ***Toujours demander le mot de passe*** n'est pas cochée.
{% endsnippet %}

![!!KB4043](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4043.png)
