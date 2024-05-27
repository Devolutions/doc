---
eleventyComputed:
  title: Yubikey
---
{{ fr.RDM }} vous permet de configurer un Yubikey pour fournir une couche de sécurité supplémentaire lors de l'ouverture d'une source de données.

{% snippet, "badgeCaution" %}
Pour l'instant, {{ fr.RDM }} ne prend en charge que Yubico OTP.
{% endsnippet %}

## Paramètres

{% snippet, "badgeInfo" %}
Avant de commencer la configuration, assurez-vous d'avoir un ***Yubikey*** en votre possession.
{% endsnippet %}

1. Si ce n'est pas déjà fait, suivre ces [étapes de configuration de l'authentification multifacteur](/fr/rdm/windows/data-sources/multi-factor-authentication/).
1. Après avoir sélectionné le type d'AMF ***Yubikey***, cliquer sur ***Configurer***.
![Configurer l'authentification multifacteur](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10014.png)
1. Insérer le ***Yubikey*** dans un port USB de votre ordinateur.
1. Maintenir le bouton doré sur le ***Yubikey*** pour que le code s'insère dans le champ.
![Programme d'installation Yubikey](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10015.png)
1. Cliquer sur ***Enregistrer***.
1. Relancer {{ fr.RDM }} pour être invité à entrer le code ***Yubikey***.

