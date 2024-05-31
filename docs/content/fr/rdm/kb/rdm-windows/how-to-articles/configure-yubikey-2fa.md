---
eleventyComputed:
  title: Configurer l'authentification à deux facteurs Yubikey
---
{% youtube 'Oi27Y8FfcNg' %}

{{ fr.RDM }} permet de configurer un Yubikey pour fournir une couche de sécurité supplémentaire lors du démarrage de l'application.

{% snippet, "badgeCaution" %}
{{ fr.RDM }} ne prend en charge que le Yubico OTP à ce moment.
{% endsnippet %}

## Paramètres

{% snippet, "shieldWarning" %}
Avant de commencer la configuration, s'assurer d'avoir un [Yubikey](https://www.yubico.com/) en sa possession.
{% endsnippet %}

1. Insérer le Yubikey dans un port USB de l'ordinateur.
1. Cliquer sur ***Fichier – Paramètres – Sécurité*** et sélectionner ***Exiger l'authentification Yubikey*** dans la section ***Authentification à deux facteurs***. Appuyer et maintenir le bouton doré sur le Yubikey pour avoir le code dans {{ fr.RDM }} et cliquer ***OK***.
![!!KB4514](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4514.png)
1. Relancer {{ fr.RDM }} pour être invité à entrer un code Yubikey.
![!!KB4515](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4515.png)
1. Appuyer et maintenir le bouton doré sur le Yubikey et l'accès sera accordé.
