---
eleventyComputed:
  title: Duo
  description: "{{ fr.RDMMAC }} vous permet de configurer une authentification Duo pour fournir une couche de sécurité supplémentaire lors de l'ouverture d'une source de données."
  keywords:
  - authentification Duo
---
{{ fr.RDMMAC }} vous permet de configurer une authentification ***Duo*** pour fournir une couche de sécurité supplémentaire lors de l'ouverture d'une source de données.

## Paramètres
{% snippet, "badgeInfo" %}
Avant de commencer la configuration, s'assurer d'avoir créé un compte Duo et d'avoir également installé l'application Duo sur votre appareil compatible.
{% endsnippet %}

1. Se connecter au ***Panneau d'administration Duo***.
1. Dans ***Applications***, cliquer sur ***Protéger une application***.
![Protéger une application](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip6000.png)
1. Protéger l'application ***Partner Auth API***.
![Partner Auth API](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip6001.png)
1. Si ce n'est pas déjà fait, suivre ces [étapes de configuration de l'authentification multifacteur](/rdm/mac/data-sources/multi-factor-authentication/).
1. Après avoir sélectionné le type MFA ***Duo***, cliquer sur ***Appliquer***.
![Appliquer la configuration multifacteur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10141.png)
1. Toutes les informations nécessaires pour remplir les champs des ***Paramètres Duo*** dans {{ fr.RDMMAC }} seront générées par le compte Duo.
![Détails de l'API Partner Auth de Duo](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip6002.png)
1. Copier et coller toutes les informations dans les champs correspondants de la fenêtre ***Paramètres Duo***.
![Paramètres Duo](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10143.png)
1. Cliquer sur ***Vérifier*** pour valider les informations, puis cliquer sur ***OK*** une fois terminé.
1. Si plus d'un appareil est connecté au compte Duo, cliquer sur ***Paramètres***. Sinon, passer à l'étape 10.
![Configuration multifacteur – Paramètres](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2059.png)
1. Sélectionner l'appareil à utiliser pour l'authentification multifacteur en cliquant sur ***Utiliser cet appareil***.
1. Sélectionner la méthode par laquelle recevoir le Passcode Duo :
    * Duo Push : Le code est « poussé » vers l'application Duo.
    * Envoyer SMS : Le code est envoyé par SMS sur le numéro de téléphone enregistré.
    * Téléphone : Le code est envoyé par appel téléphonique ; une voix générée par ordinateur dictera le code.
1. Cliquer sur ***Fermer*** une fois terminé.
![Fermer la fenêtre de configuration multifacteur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2060.png)

Une fois toutes les étapes complétées, vous serez invité à passer par l'authentification Duo chaque fois que vous vous connecterez à votre source de données sécurisée.
