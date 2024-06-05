---
eleventyComputed:
  title: Liste des points d'accès Internet accédés par {{ fr.RDM }}
  description: Ceci est la liste des adresses qui sont accédées par {{ fr.RDM }} pendant son fonctionnement normal, ainsi que le(s) réglage(s) pour désactiver/prévenir cet accès.
  keywords: 
  - endpoints
---
Ceci est la liste des adresses qui sont accédées par {{ fr.RDM }} pendant son fonctionnement normal, ainsi que le(s) réglage(s) pour désactiver/prévenir cet accès.  

{% snippet, "badgeWarning" %}
{{ fr.RDM }} est un outil qui intègre plus de 150 technologies. Cette liste CONTIENT UNIQUEMENT les points d'accès accédés par le produit de base lui-même. Nous utilisons une approche de "meilleur effort" pour maintenir cette liste, mais cela **ne remplace pas les bonnes pratiques de sécurité informatique**. Si la sécurité est primordiale, il serait préférable de bloquer d'abord tout accès Internet, puis d'autoriser les adresses souhaitées selon les besoins.
{% endsnippet %}  

{% snippet, "shieldNotice" %}
Dans le cadre d'une visite standard à un site Web utilisant le protocole HTTPS, le certificat utilisé par le site distant est validé en utilisant les meilleures pratiques de l'industrie. Un certificat contient plusieurs URL qui sont accédées pour effectuer la validation. Les URL varient non seulement pour chaque site, mais aussi dans le temps chaque fois qu'ils sont renouvelés. Lire [Validation de certificat](/rdm/mac/kb/rdm-windows/knowledge-base/certificate-validation) pour plus d'informations.
{% endsnippet %}

## Liste des points d'accès

| Description                                  | URL                                                | Réglage(s) / action associé(s)                                            |
| -------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------- |
| {{ fr.DC }} – nos services en ligne            | https<area>://cloud.devolutions.net                | ***Fichier – {{ fr.DA }}***                                               |
| Connexion {{ fr.DA }}                            | https<area>://login.devolutions.com                | ***Fichier – {{ fr.DA }}***                                               |
| Vérification de mise à jour RDM                             | https<area>://devolutions.net                      | ***Fichier – Paramètres – Application – Démarrage de l'application – Activer la vérification des mises à jour*** |
| Yubikey                                      | https<area>://api.yubico.com<br>https<area>://api2.yubico.com<br>https<area>://api3.yubico.com<br>https<area>://api4.yubico.com<br>https<area>://api5.yubico.com<br> | ***Fichier – Paramètres – Sécurité – Exiger l'authentification Yubikey*** |
| Gravatar                                     | https<area>://secure.gravatar.com                  | ***Fichier – Paramètres – Avancé – Désactiver toutes les images Gravatar***          |
| Image de secours Gravatar                            | https<area>://i2.wp.com                            | ***Fichier – Paramètres – Avancé – Désactiver toutes les images Gravatar***          |
| Have I Been Pwned                            | https<area>://api.pwnedpasswords.com               | ***Fichier – Paramètres – Avancé – Désactiver la vérification des mots de passe compromis (pwned)*** |
| Télémétrie                                    | https<area>://telemetry2.devolutions.net           | ***Fichier – Paramètres – Avancé – Désactiver la télémétrie***                    |
| Validation de licence                           | https<area>://api.devolutions.com/license/generate | ***Administration – Licences*** |
| {{ fr.DSEND }}                               | https<area>://send.devolutions.com                 | Envoyer des mots de passe à l'extérieur via courriel/lien                               |
| Images utilisateur                                  | https<area>://ui-avatars.com                       | Utilisé lorsque les Gravatars sont désactivés                                       |
| Mise à jour RDM – téléchargement de paquet                | https<area>://cdn.devolutions.net                  | Action de l'utilisateur dans le dialogue de mise à niveau disponible                            |
| Devolutions Store – Mise à niveau/Achat {{ fr.RDM }} | https<area>://store.devolutions.net                | Action de l'utilisateur dans le dialogue d'expiration de licence                               |
