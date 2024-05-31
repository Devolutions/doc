---
eleventyComputed:
  title: Authentificateur (TOTP)
---
{{ fr.RDMMAC }} vous permet d'utiliser un Authentificateur (TOTP) tel que [{{ fr.WMAPP }}](https://devolutions.net/workspace/) ou Google Authenticator pour fournir une couche de sécurité supplémentaire lors de l'ouverture d'une source de données.

## Paramètres

{% snippet, "badgeInfo" %}
Avant de commencer la configuration, assurez-vous d'avoir installé [{{ fr.WMAPP }}](https://devolutions.net/workspace/) ou Google Authenticator sur un appareil pris en charge.
{% endsnippet %}

1. Si ce n'est pas déjà fait, suivre ces [étapes de configuration de l'Authentification Multifacteur](/rdm/mac/data-sources/multi-factor-authentication/).
1. Après avoir sélectionné le type MFA ***Authentificateur (TOTP)***, cliquer sur ***Appliquer***.
![Appliquer l'Authentification Multifacteur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10503.png)
1. Scanner le code QR qui apparaît dans la fenêtre ***Configuration de l'Authentification*** avec l'application de votre appareil.
1. Entrer le ***code de Validation*** fourni par l'***Authentificateur (TOTP)***.
![Configuration de l'Authentificateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10067.png)
1. Cliquer sur ***Valider***.
1. Relancer {{ fr.RDMMAC }} pour être invité à entrer le code de l'***Authentificateur (TOTP)***.
