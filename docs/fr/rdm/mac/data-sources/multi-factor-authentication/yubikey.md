---
eleventyComputed:
  title: Yubikey
---
{{ fr.RDMMAC }} vous permet d'utiliser un ***Yubikey*** pour fournir une couche de sécurité supplémentaire lors de l'ouverture d'une source de données.

{% snippet, "badgeCaution" %}
{{ fr.RDMMAC }} ne prend en charge que le Yubico OTP à ce moment.
{% endsnippet %}

## Paramètres

{% snippet, "badgeInfo" %}
Avant de commencer la configuration, s'assurer d'avoir un ***Yubikey*** en votre possession.
{% endsnippet %}

1. Si ce n'est pas déjà fait, suivre ces [étapes de configuration de l'authentification à deux facteurs](/rdm/mac/data-sources/multi-factor-authentication/).
1. Après avoir sélectionné le type MFA ***Yubikey***, cliquer sur ***Appliquer***.
![Appliquer l'authentification à deux facteurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10068.png)
1. Insérer le ***Yubikey*** dans un port USB de votre ordinateur.
1. Maintenir le bouton doré sur le ***Yubikey*** pour que le code soit rempli dans le champ.
![Configuration Yubikey](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10069.png)
1. Cliquer sur ***Enregistrer***.
1. Relancer {{ fr.RDMMAC }} pour être invité à entrer un code Yubikey.