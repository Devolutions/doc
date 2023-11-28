---
eleventyComputed:
  title: Liste des points de terminaison auxquels {{ fr.DVLS }} accède
  description: Voici la liste des adresses que {{ fr.DVLS }} pourrait utiliser durant les activités normales, ainsi que les paramètres qui sont utilisés pour activer/désactiver ces accès.
  keywords: 
  - endpoints
---
Voici la liste des adresses que {{ fr.DVLS }} pourrait utiliser durant les activités normales, ainsi que les paramètres qui sont utilisés pour activer/désactiver ces accès.  

{% snippet icon.badgeWarning %}
Nous utilisons une approche de « meilleur effort » pour maintenir cette liste à jour, mais celle-ci ne remplace pas les meilleures pratiques de sécurité TI. Si la sécurité est primordiale, il serait préférable de bloquer d'abord tout accès à Internet, puis de mettre les adresses souhaitées sur une liste d'autorisation si nécessaire.
{% endsnippet %}

## Liste des points de terminaison

| Description                    | URL                                                                            | Paramètre(s) / Action associé(s) |
| ------------------------------ | ------------------------------------------------------------------------------ | ------------------------- |
| {{ fr.DVLS }} update check              | https<area>://devolutions.net                                                  | {{ fr.DVLSCONSOLE }} – Support – Vérifier les mises à jour |
| {{ fr.DVLS }} update - package download | https<area>://cdn.devolutions.net                                              | Action de l'utilisateur dans la fenêtre de mise à jour |
| Block Tor clients              | https<area>://cloud.devolutions.net                                            | Administration – Paramètres Serveur – Fonctionnalités |
| Authentification Azure         | https<area>://login.microsoftonline.com<br>https<area>://graph.microsoft.com   | Administration – Paramètres Serveur – Authentification – Authentification Microsoft |
| Authentification Okta          | https<area>://< domain >.okta.com                                              | Administration – Paramètres Serveur – Authentification |
| PAM - Provider Azure           | https<area>://graph.microsoft.com                                              | Fournisseur d'identité PAM de type Azure |
| Telemetry                      | https<area>://telemetry.devolutions.net                                        | Administration – Paramètres Serveur – Fonctionnalités – Autoriser l'envoi de données d'utilisation anonymisées à Devolutions |
| Have I Been Pwned              | https<area>://api.pwnedpasswords.com                                           | Administration – Paramètres Serveur – Fonctionnalités – Activer la vérification de compromission (pwned) |
| Notification push              | https<area>://login.devolutions.com<br>https<area>://api.devolutions.com       | Administration – Paramètres Serveur – Fonctionnalités – Activer la notification push de {{ fr.DWS }} |
| Intégration Slack              | https<area>://slack.com                                                        | Administration – Paramètres Serveur – Journalisation – Intégration Slack |
| SMTP, Authentification Azure   | https<area>://graph.microsoft.com                                              | Administration – Paramètres Serveur – Courriel – Type d'authentification |
| Geo IP                         | https<area>://geoip.maxmind.com                                                | Administration – Paramètres Serveur – Sécurité GeoIP |
| Gravatar                       | https<area>://secure.gravatar.com                                              | Administration – Paramètres Serveur – Fonctionnalités – Activer Gravatar |
| Yubikey                        | https<area>://api.yubico.com<br>https<area>://api2.yubico.com<br>https<area>://api3.yubico.com<br>https<area>://api4.yubico.com<br>https<area>://api5.yubico.com<br> | Administration – Paramètres Serveur – Authentification à 2 facteurs |
| Twilio                         | https<area>://api.twilio.com                                                   | Administration – Paramètres Serveur – Authentification à 2 facteurs – SMS |
| Duo                            | https<area>://api.<>.duosecurity.com                                           | Administration – Paramètres Serveur – Authentification à 2 facteurs |
