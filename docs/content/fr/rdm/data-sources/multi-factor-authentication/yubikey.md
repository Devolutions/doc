---
eleventyComputed:
  title: Yubikey
---
{{ fr.RDM }} permet d'utiliser un ***Yubikey*** pour fournir une couche de sécurité supplémentaire lors de l'ouverture d'une source de données.

{% snippet, "badgeCaution" %}
{{ fr.RDM }} ne prend en charge que le Yubico OTP pour le moment.
{% endsnippet %}

## Paramètres

{% snippet, "badgeInfo" %}
Avant de commencer la configuration, s'assurer d'avoir un ***Yubikey*** en sa possession.
{% endsnippet %}

1. Si ce n'est pas déjà fait, suivre ces [étapes de configuration de l'authentification à plusieurs facteurs](/rdm/windows/data-sources/multi-factor-authentication/).
1. Après avoir sélectionné le type MFA ***Yubikey***, cliquer sur ***Configurer***.
![Configurer l'authentification à plusieurs facteurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10014.png)
1. Insérer le ***Yubikey*** dans un port USB de l'ordinateur.
1. Maintenir le bouton doré sur le ***Yubikey*** pour que le code soit rempli dans le champ.
![Configuration Yubikey](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10015.png)
1. Cliquer sur ***Enregistrer***.
1. Relancer {{ fr.RDM }} pour être invité à entrer un code ***Yubikey***.
