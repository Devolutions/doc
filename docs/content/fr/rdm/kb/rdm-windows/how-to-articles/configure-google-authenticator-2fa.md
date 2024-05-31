---
eleventyComputed:
  title: Configurer l'authentification à deux facteurs Google Authenticator
---
{% youtube 'Oi27Y8FfcNg' %}

{{ fr.RDM }} offre la possibilité d'utiliser Google Authenticator pour fournir une couche de sécurité supplémentaire lors du démarrage de l'application.

## Paramètres

{% snippet, "badgeNotice" %}
Avant de commencer la configuration, s'assurer d'avoir installé l'application [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=fr) sur votre appareil mobile.
{% endsnippet %}

1. Cliquer sur ***Fichier – Paramètres – Sécurité*** et sélectionner ***Exiger une validation TOTP ({{ fr.WS }} ou Google Authenticator)*** dans la section ***Authentification à deux facteurs***. Puis cliquer sur ***Configurer*** pour configurer votre Google Authentication.
![!!KB4512](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4512.png)
1. Scanner le code QR affiché sur votre écran avec l'application Google Authenticator pour configurer {{ fr.RDM }} dans Google Authenticator. Lorsque {{ fr.RDM }} est configuré dans Google Authenticator, entrer le ***code de validation*** fourni par Google Authenticator dans {{ fr.RDM }}.
![!!KB4513](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4513.png)
1. Une fois le code de validation entré, cliquer sur ***Valider***, puis ***OK***.
1. Relancer {{ fr.RDM }} pour être invité à saisir le code Google Authenticator.

{% snippet, "badgeInfo" %}
Google Authenticator génère un nouveau code de validation toutes les 30 secondes. Il y aura une couleur indiquant que la fin de la fenêtre temporelle approche, veuillez consulter la documentation de l'application de votre appareil pour obtenir des informations complètes.
{% endsnippet %}
