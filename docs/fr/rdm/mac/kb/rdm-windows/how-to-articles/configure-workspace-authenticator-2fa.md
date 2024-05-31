---
eleventyComputed:
  title: Configurer l'authentification à deux facteurs {{ fr.WS }}
---
{% youtube 'Oi27Y8FfcNg' %}

{{ fr.RDM }} offre l'option d'utiliser {{ fr.WS }} pour fournir une couche de sécurité supplémentaire lors du démarrage de l'application.

## Paramètres

{% snippet, "badgeNotice" %}
Avant de commencer la configuration, s'assurer d'avoir installé le [{{ fr.WMAPP  }}](https://devolutions.net/authenticator).
{% endsnippet %}

1. Cliquer sur ***Fichier – Paramètres – Sécurité*** et sélectionner ***Exiger une validation TOTP ({{ fr.WS }} ou Google Authenticator)*** dans la section ***Authentification à deux facteurs***. Puis cliquer sur ***Configurer*** pour configurer votre Google Authentication.
![!!KB4512](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4512.png)
1. Scanner le code QR sur votre écran avec le {{ fr.WMAPP }} pour configurer {{ fr.RDM }}. Entrer le ***Code de validation*** fourni par {{ fr.WS }} dans {{ fr.RDM }}.
![!!KB4513](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4513.png)
1. Cliquer ***Valider***, puis ***OK***.
1. Relancer {{ fr.RDM }} pour être invité à entrer le code {{ fr.WS }}.
{% snippet, "badgeInfo" %}
{{ fr.WS }} génère un nouveau code de validation toutes les 30 secondes.
{% endsnippet %}
