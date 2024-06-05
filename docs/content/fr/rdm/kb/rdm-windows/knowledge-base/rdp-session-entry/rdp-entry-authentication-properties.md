---
eleventyComputed:
  title: Propriétés d'authentification d'une entrée RDP
  description: Les propriétés d'authentification d'une entrée RDP peuvent être configurées lors de la création ou de l'édition de l'entrée RDP.
---
{% snippet, "badgeInfo" %}
Les propriétés suivantes peuvent être configurées lors de la création ou de l'édition de l'entrée RDP. La plupart des propriétés générales nécessitent de fermer complètement l'entrée RDP, puis de la rouvrir pour qu'elles prennent effet.
{% endsnippet %}  

![Propriétés d'authentification d'une entrée RDP](https://webdevolutions.azureedge.net/docs/RDMW6002.png)

## Authentification       

| PARAMÈTRES      | DESCRIPTION |
|-------------|-------------|                                                                                                   
| ***Se connecter et ne pas m'avertir***                | Se connecte automatiquement sans aucun avertissement de sécurité.                                 |
| ***Ne pas se connecter***                           | Empêche la connexion si des problèmes d'authentification sont détectés.                                              |
| ***M'avertir***                                  | Fournit un avertissement s'il y a des préoccupations concernant l'authentification mais permet l'option de continuer.      |
| ***Par défaut (Se connecter et ne pas m'avertir)***      | Utilise le paramètre par défaut pour se connecter sans avertissement.                          |
| ***Activer l'authentification au niveau du réseau (NLA)***| Active ***NLA***, qui améliore la sécurité en exigeant une authentification avant d'établir une session de bureau à distance. |
| ***Activer Azure AD SSO***                      | Active ***l'authentification unique (SSO)*** avec les identifiants Azure Active Directory pour une expérience de connexion transparente.       |

### Sécurité du transport

| PARAMÈTRES      | DESCRIPTION |
|-------------|-------------|  
| ***Activer la sécurité de la couche de transport (TLS)***    | Sécurise la connexion en utilisant ***TLS***, fournissant chiffrement et protection de l'intégrité.                            |
| ***Activer la sécurité du protocole de bureau à distance (RDP)***| Utilise ***la couche de sécurité RDP*** pour le chiffrement afin de protéger les données transmises entre le client et le serveur.       |

### SSPI

| PARAMÈTRES      | DESCRIPTION |
|-------------|-------------| 
| ***La passerelle RD est un proxy KDC***                  | Indique que la ***passerelle RD*** sert de proxy ***Key Distribution Center (KDC)*** pour l'authentification Kerberos.  |
| ***Module SSPI***                              | Spécifie le module ***Interface de support de fournisseur de sécurité (SSPI)*** à utiliser pour l'authentification.              |
| ***Package d'authentification***                   | Définit le ***package d'authentification*** (par exemple, Kerberos, NTLM) utilisé pour vérifier les identifiants de l'utilisateur.              |
| ***Méthode de détection de KDC***                     | Détermine la méthode de détection du ***Key Distribution Center*** dans les scénarios d'authentification Kerberos.       |
| ***URL du serveur KDC***                           | Spécifie ***l'URL du serveur KDC*** à utiliser pour l'authentification Kerberos, le cas échéant.                  |
