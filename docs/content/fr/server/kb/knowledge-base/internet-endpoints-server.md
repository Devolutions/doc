---
eleventyComputed:
  title: Liste des points d'accès Internet utilisés par {{ fr.DVLS }}
  description: Ceci est la liste des adresses auxquelles accèdent {{ fr.DVLS }} et la {{ fr.DVLSCONSOLE }} pendant leur fonctionnement normal, ainsi que les paramètres pour désactiver/empêcher cet accès.
  keywords: 
  - endpoints
---
Ceci est la liste des adresses auxquelles accèdent {{ fr.DVLS }} et la {{ fr.DVLSCONSOLE }} pendant leur fonctionnement normal, ainsi que les paramètres pour désactiver/empêcher cet accès.

{% snippet, "badgeWarning" %}
Nous utilisons une approche de "meilleur effort" pour maintenir cette liste, mais elle **ne remplace pas les bonnes pratiques de sécurité informatique**. Si la sécurité est primordiale, il serait préférable de bloquer d'abord tout accès Internet, puis d'autoriser les adresses souhaitées au besoin.
{% endsnippet %}

## Liste des points d'accès {{ fr.DVLS }}

| Description                    | URL                                                                            | Paramètre(s) / action associé(s)                                       |
| ------------------------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Vérification de mise à jour {{ fr.DVLS }}              | https<area>://devolutions.net                                         | ***{{ fr.DVLSCONSOLE }} – Support – Vérifier les mises à jour***          |
| Mise à jour {{ fr.DVLS }} - téléchargement de paquet | https<area>://cdn.devolutions.net                                     | Action de l'utilisateur dans le dialogue de mise à jour disponible                       |
| PAM - Fournisseur Azure           | https<area>://graph.microsoft.com                                              | Fournisseur PAM de type Azure                                           |
| Authentification Azure           | https<area>://login.microsoftonline.com<br>https<area>://graph.microsoft.com   | ***Administration – Paramètres du serveur – Authentification – Authentification Microsoft*** |
| Authentification Okta            | https<area>://< domaine >.okta.com                                              | ***Administration – Paramètres du serveur – Authentification – Authentification Okta*** |
| SMTP, Authentification Azure     | https<area>://graph.microsoft.com                                              | ***Administration – Paramètres du serveur – Email – Type d'authentification*** |
| Intégration Slack              | https<area>://slack.com                                                        | ***Administration – Paramètres du serveur – Journalisation – Intégration Slack*** |
| Licences                       | https<area>://api.devolutions.com                                              | ***Administration – Paramètres du serveur – Fonctionnalités – Activer l'accès Internet*** |
| Gravatar                       | https<area>://secure.gravatar.com                                              | ***Administration – Paramètres du serveur – Fonctionnalités – Activer Gravatar*** |
| Have I Been Pwned              | https<area>://api.pwnedpasswords.com                                           | ***Administration – Paramètres du serveur – Fonctionnalités – Activer la vérification de compromission (pwned)*** |
| Bloquer les clients Tor              | https<area>://cloud.devolutions.net                                            | ***Administration – Paramètres du serveur – Fonctionnalités – Bloquer les clients Tor*** |
| Télémétrie                      | https<area>://telemetry2.devolutions.net:9200                                        | ***Administration – Paramètres du serveur – Fonctionnalités – Partager des données d'utilisation anonymes avec Devolutions*** |
| Notification Push              | https<area>://login.devolutions.com<br>https<area>://api.devolutions.com       | ***Administration – Paramètres du serveur – Fonctionnalités – Activer la notification Push {{ fr.WS }}*** |
| {{ fr.DSEND }}                 | https<area>://send.devolutions.com                                             | ***Administration – Paramètres du serveur – Fonctionnalités – Permettre aux utilisateurs d'envoyer des mots de passe avec {{ fr.DSEND }}*** |
| Yubikey                        | https<area>://api.yubico.com<br>https<area>://api2.yubico.com<br>https<area>://api3.yubico.com<br>https<area>://api4.yubico.com<br>https<area>://api5.yubico.com<br> | ***Administration – Paramètres du serveur – Multi-facteurs*** |
| Twilio                         | https<area>://api.twilio.com                                                   | ***Administration – Paramètres du serveur – Multi-facteurs – SMS***       |
| Duo                            | https<area>://api.<>.duosecurity.com                                           | ***Administration – Paramètres du serveur – Multi-facteurs – Duo***       |
| Geo IP                         | https<area>://geoip.maxmind.com                                                | ***Administration – Paramètres du serveur – Sécurité GeoIP***           |

## Liste des points d'accès {{ fr.DVLSCONSOLE }}

| Description                    | URL                                                                            | Paramètre(s) / action associé(s) |
| ------------------------------ | ------------------------------------------------------------------------------ | --------------------------- |
| [Installation du script {{ fr.DVLS }}](/server/getting-started/installation/installing-web-server-prerequisites/) | https<area>://api.devolutions.net<br>https<area>://iis.net<br>https<area>://dotnet.microsoft.com | Installation du service {{ fr.DVLS }} |
| Installation de {{ fr.DVLS }} (instance et planificateur) et {{ fr.DGW }} | https<area>://devolutions.net<br>https<area>://redirection.devolutions.com | [Créer une instance {{ fr.DVLS }}](/server/getting-started/installation/create-server-instance/)<br>[Configuration de {{ fr.DGW }} avec {{ fr.DVLS }}](/dgw/server/server-configuration/) |

