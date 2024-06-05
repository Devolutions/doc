---
eleventyComputed:
  title: Duo
  description: "{{ fr.RDM }} vous permet de configurer une authentification Duo pour fournir une couche de sécurité supplémentaire lors de l'ouverture d'une source de données."
  keywords:
  - Authentification Duo
---
{{ fr.RDM }} vous permet de configurer une authentification ***Duo*** pour fournir une couche de sécurité supplémentaire lors de l'ouverture d'une source de données.

## Paramètres
{% snippet, "badgeInfo" %}
Avant de commencer la configuration, s'assurer d'avoir créé un compte Duo et d'avoir également installé l'application Duo sur votre appareil compatible.
{% endsnippet %}

1. Se connecter au ***Panneau d'administration Duo***.
1. Dans ***Applications***, cliquer sur ***Protéger une application***.
![Protéger une application](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip6000.png)
1. Protéger l'application ***Partner Auth API***.
![Partner Auth API](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip6001.png)
1. Si ce n'est pas déjà fait, suivre ces [étapes de configuration de l'authentification multifacteur](/rdm/windows/data-sources/multi-factor-authentication/).
1. Après avoir sélectionné le type MFA ***Duo***, cliquer sur ***Duo – Paramètres généraux***.
![Duo – Paramètres généraux](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10017.png)
1. Toutes les informations nécessaires pour remplir les champs des ***Paramètres Duo*** dans {{ fr.RDM }} seront générées par le compte Duo.
![Détails du compte Duo – Partner Auth API](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip6002.png)
1. Copier et coller toutes les informations dans les champs correspondants de la fenêtre ***Paramètres Duo***.
![Paramètres Duo](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10018.png)
1. Cliquer sur ***Vérifier*** pour valider les informations, puis cliquer sur ***OK*** une fois terminé.
1. S'il y a plus d'un appareil connecté au compte Duo, cliquer sur ***Paramètres***. Sinon, passer à l'étape 10.
![Configuration multifacteur – Paramètres](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2148.png)
1. Sélectionner l'appareil à utiliser pour l'authentification multifacteur en cliquant sur ***Utiliser cet appareil***.
![Choisir un appareil](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2147.png)
1. Sélectionner la méthode par laquelle recevoir le Passcode Duo :
    * ***Duo Push*** : Le code est "poussé" vers votre application Duo.
    * ***Envoyer SMS*** : Le code est envoyé par SMS sur le numéro de téléphone enregistré.
    * ***Téléphone*** : Le code est envoyé par appel téléphonique ; une voix générée par ordinateur dictera le code.
10. Cliquer sur ***Sauvegarder*** pour s'authentifier.
![Sauvegarde de la configuration](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10019.png)

Une fois toutes les étapes complétées, l'authentification Duo vous sera demandée chaque fois que vous vous connecterez à votre source de données sécurisée.
