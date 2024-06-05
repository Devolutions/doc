---
eleventyComputed:
  title: Exigences système
  description: Pour utiliser {{ fr.DGW }}, votre système doit répondre à ces exigences.
  order: 10
---
Pour utiliser {{ fr.DGW }}, votre système doit répondre aux exigences suivantes.

## Exigences matérielles
| Mise en œuvre minimale<br>(1 à 5 sessions concurrentes) | Petite mise en œuvre<br>(5 à 15 sessions concurrentes) | Mise en œuvre moyenne<br>(15 à 75 sessions concurrentes) | Grande mise en œuvre<br>(Plus de 75 sessions concurrentes) |
| :---: | :---: | :---: | :---: |
| 2 vCPUs<br>4 Go RAM | 4 vCPUs<br>8 Go RAM | 8 vCPUs<br>16 Go RAM | Déployer plusieurs instances de {{ fr.DGW }}. |

{% snippet, "badgeInfo" %}
Un contrôleur Ethernet Gigabit est recommandé pour une performance optimale.
{% endsnippet %}

## Exigences logicielles
* Windows Server 2016, 2019 ou 2022 avec .NET Framework 4.8
* Ubuntu Linux 20.04, 22.04 avec PowerShell 7

## Prérequis
* {{ fr.DVLS }} Édition Free, Team, Enterprise ou Platinum.
* Une licence est requise pour chaque {{ fr.DGW }} déployé. Contactez notre [département des ventes](mailto:sales@devolutions.net) pour plus d'informations.
    * Si {{ fr.DGW }} est installé côte à côte avec {{ fr.DVLS }} sur le même serveur, il prend en charge jusqu'à 5 sessions concurrentes sans licence.
* Pour les MSP, un {{ fr.DGW }} peut être déployé par site client. Tout ce dont vous avez besoin est de garder les serveurs {{ fr.DGW }} accessibles à la fois par {{ fr.DVLS }} et {{ fr.RDM }}. {{ fr.DGW }} doit uniquement accepter les connexions entrantes provenant d'eux. Aucune connexion sortante vers {{ fr.DVLS }} et {{ fr.RDM }} n'est requise.

## Exigences de certificat
{{ fr.DGW }} prend en charge TLS 1.2 et TLS 1.3 ainsi que les suites de chiffrement suivantes :
* AES_256_GCM_SHA384
* AES_128_GCM_SHA256
* CHACHA20_POLY1305_SHA256
* ECDHE_ECDSA_AES_256_GCM_SHA384
* ECDHE_ECDSA_AES_128_GCM_SHA256
* ECDHE_ECDSA_CHACHA20_POLY1305_SHA256
* ECDHE_RSA_AES_256_GCM_SHA384
* ECDHE_RSA_AES_128_GCM_SHA256
* ECDHE_RSA_CHACHA20_POLY1305_SHA256
