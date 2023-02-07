---
eleventyComputed:
  title: Liste des Internet Endpoints accédé par {{ fr.DPS }}
---
Voici la liste des adresses que {{ fr.DPS }} pourrait utilise durant les opérations normales, ainis que les les paramètres qui sont utilisés pour activer/désactiver ces accès.  

{% snippet icon.badgeWarning %} 
Nous utilison une approche de &quot;meilleure effort&quot; pour maintenir cette liste à jour, mais celle-ci ne remplace pas le meilleures pratiques de sécurité IT. &#160;We use a &quot;best effort&quot; approach to maintain this list, but it does NOT replace proper IT Security practices. Si la sécurité est primordiale, il serait préférable de bloquer d&apos;abord tout accès à Internet, puis de mettre les adresses souhaitées sur une liste d&apos;autorisation si nécessaire. 
{% endsnippet %}
 
## Endpoint list 

| Description                    | URL                                                                            | Related setting(s)/Action |
| ------------------------------ | ------------------------------------------------------------------------------ | ------------------------- |
| DVLS update check              | https<area>://devolutions.net                                                  | {{ en.DVLSCONSOLE }} - Support - Vérifier les mises à jour |
| DVLS update - package download | https<area>://cdn.devolutions.net                                              | Action de l'utilisateur dans la fenêtre de mise à jour |
| Block Tor clients              | https<area>://cloud.devolutions.net                                            | Administration - Paramètres Serveur - Sécurité |
| Azure Authentication           | https<area>://login.microsoftonline.com/<br>https<area>://graph.microsoft.com/ | Administration - Authentification |
| Okta Authentication            | https<area>://<domain>.okta.com                                                | Administration - Authentification |
| PAM - Provider Azure           | https<area>://graph.microsoft.com/                                             | Fournisseur d'identité PAM de type Azure |
| Telemetry                      | https<area>://telemetry.devolutions.net                                        | Administration - Paramètres Serveur - Fonctionnalités - Autoriser l'envoi de données d'utilisation anonymisées à Devolutions |
| Have I Been Pwned              | https<area>://api.pwnedpasswords.com                                           | Administration - Paramètres Serveur - Fonctionnalités - Activer la vérification de compromission (pwned) |
| Slack integration              | https<area>://slack.com/                                                       | 	
Administration - Paramètres Serveur - Journalisation - Slack integration |
| SMTP, Authentication Azure     | https<area>://graph.microsoft.com/                                             | 	
Administration - Paramètres Serveur - Courriel (Authentification Azure) |
| Geo IP                         | https<area>://geoip.maxmind.com/                                               | 	
Administration - Paramètres Serveur - Sécurité GeoIP |
| Gravatar                       | https<area>://secure.gravatar.com/                                             | 	
Administration - Paramètres Serveur - Fonctionnalités - Activer Gravatar |
| Yubikey                        | https<area>://api.yubico.com<br>https<area>://api2.yubico.com<br>https<area>://api3.yubico.com<br>https<area>://api4.yubico.com<br>https<area>://api5.yubico.com<br> | Administration - Paramètres Serveur - Authentification à 2 facteurs |
| Twilio                         | https<area>://api.twilio.com/                                                  | Administration - Paramètres Serveur - Authentification à 2 facteurs |
| Duo                            | https<area>://api.<>.duosecurity.com                                           | Administration - Paramètres Serveur - Authentification à 2 facteurs |


