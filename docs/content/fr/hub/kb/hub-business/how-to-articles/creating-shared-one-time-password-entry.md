---
eleventyComputed:
  title: Créer une entrée de mot de passe à usage unique partagé
  description: Ajouter une couche de sécurité à votre {{ fr.DA }} en configurant une entrée de mot de passe à usage unique partagé (OTP). Pour en créer une pour votre application, suivre les étapes ci-dessous.
---
Ajouter une couche de sécurité à votre {{ fr.DA }} en configurant une entrée de mot de passe à usage unique partagé (OTP). Pour en créer une pour votre application, suivre les étapes ci-dessous.

1. Créer une entrée OTP dans [{{ fr.DHUB }}](/hub/web-interface/entries/create-entries-manually/#create-an-entry) ou [{{ fr.DVLS }}](/server/web-interface/vault/entries/create-entries-manually/#create-an-entry).

1. Se connecter à votre [{{ fr.DPORTAL }}](https://portal.devolutions.com/) et suivre les étapes dans la [section Application Authenticator](/cloud/sign-in-security/two-step-verification/#authenticator-app) pour obtenir votre clé.
![Clé dans la section de l'application Authenticator](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6204.png)
1. Revenir à l'entrée OTP et ajouter la clé au champ correspondant.
1. Cliquer sur ***Ajouter***. Votre entrée est maintenant créée.
![!!KB2050](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6203.png)
1. Sélectionner l'entrée OTP et cliquer sur ***Voir*** pour afficher votre OTP.
![!!KB2051](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6202.png)

{% snippet, "badgeInfo" %}
Ce mot de passe n'est valide que pendant 30 secondes. Après ce temps, un autre code apparaîtra, rendant le premier inutile. Vous pouvez copier le mot de passe dans votre presse-papiers en tapant sur l'icône de copie à côté du temps restant.
{% endsnippet %}

9. Aller à votre [{{ fr.DPORTAL }}](https://portal.devolutions.com/).
1. Coller depuis votre presse-papiers ou écrire votre OTP dans le champ correspondant.
![!!KB2054](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6207.png)

Vous êtes maintenant authentifié avec votre application.

