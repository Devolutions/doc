---
eleventyComputed:
  title: Propriétés d'authentification d'entrée RDP
  description: Les propriétés d'authentification d'entrée RDP peuvent être configurées lors de la création ou de l'édition de l'entrée RDP.
---
{% snippet, "badgeInfo" %}
Les propriétés suivantes peuvent être configurées lors de la création ou de l'édition de l'entrée RDP. La plupart des propriétés générales nécessitent de fermer complètement l'entrée RDP, puis de la rouvrir pour qu'elles prennent effet.
{% endsnippet %}  

![Propriétés d'authentification d'entrée RDP](https://webdevolutions.azureedge.net/docs/RDMW6002.png)

## Authentification       

| PARAMÈTRES      | DESCRIPTION |
|-------------|-------------|                                                                                                   
| ***Se connecter et ne pas m'avertir***                | Se connecte automatiquement sans aucun avertissement de sécurité.                                 |
| ***Ne pas se connecter***                           | Empêche la connexion si des problèmes d'authentification sont détectés.                                              |
| ***M'avertir***                                  | Fournit un avertissement s'il y a des préoccupations concernant l'authentification mais permet l'option de continuer.      |
| ***Par défaut (Se connecter et ne pas m'avertir)***      | Utiliser le paramètre par défaut pour se connecter sans avertissement.                          |
| ***Activer l'authentification au niveau du réseau (NLA)***| Activer ***NLA***, qui améliore la sécurité en exigeant une authentification avant d'établir une session de bureau à distance. |
| ***Activer Azure AD SSO***                      | Activer ***l'authentification unique (SSO)*** avec les identifiants Azure Active Directory pour une expérience de connexion transparente.       |

### Sécurité du transport

| PARAMÈTRES      | DESCRIPTION |
|-------------|-------------|  
| ***Activer la sécurité de la couche de transport (TLS)***    | Sécuriser la connexion en utilisant ***TLS***, fournissant chiffrement et protection de l'intégrité.                            |
| ***Activer la sécurité du protocole de bureau à distance (RDP)***| Utiliser ***la couche de sécurité RDP*** pour le chiffrement afin de protéger les données transmises entre le client et le serveur.       |

### SSPI

| PARAMÈTRES      | DESCRIPTION |
|-------------|-------------| 
| ***La passerelle RD est un proxy KDC***                  | Indiquer que la ***passerelle RD*** sert de proxy ***Centre de distribution de clés (KDC)*** pour l'authentification Kerberos.  |
| ***Module SSPI***                              | Spécifier le module ***Interface de fournisseur de support de sécurité (SSPI)*** à utiliser pour l'authentification.              |
| ***Package d'authentification***                   | Définir le ***package d'authentification*** (par exemple, Kerberos, NTLM) utilisé pour vérifier les identifiants de l'utilisateur.              |
| ***Méthode de détection de KDC***                     | Déterminer la méthode pour détecter le ***Centre de distribution de clés*** dans les scénarios d'authentification Kerberos.       |
| ***URL du serveur KDC***                           | Spécifier ***l'URL du serveur KDC*** à utiliser pour l'authentification Kerberos, le cas échéant.                  |
