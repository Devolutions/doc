---
eleventyComputed:
  title: Propriétés de passerelle RD d'entrée RDP
  description: Les propriétés des programmes d'entrée RDP peuvent être configurées lors de la création ou de l'édition de l'entrée RDP.
---
{% snippet, "badgeInfo" %}
Les propriétés suivantes peuvent être configurées lors de la création ou de l'édition de l'entrée RDP. La plupart des propriétés générales nécessitent de fermer complètement l'entrée RDP, puis de la rouvrir pour qu'elles prennent effet.
{% endsnippet %}  

![Propriétés de passerelle RD d'entrée RDP](https://webdevolutions.azureedge.net/docs/RDMW6007.png)

### Paramètres du serveur de passerelle RD

| PARAMÈTRES                                         | DESCRIPTION |
|------------------------------------------------|-------------|
| ***Détecter automatiquement les paramètres du serveur de passerelle RD***| Sélectionné par défaut. Ce paramètre permet d'identifier automatiquement et d'utiliser les paramètres de la ***passerelle RD*** spécifiés par l'administrateur réseau, généralement via DHCP ou DNS.|
| ***Utiliser les paramètres du serveur de passerelle RD***             | Spécifier manuellement les détails (adresse du serveur, méthodes d'authentification, etc.) pour la passerelle RD que la session RDP devrait utiliser pour se connecter. |
| ***Ne pas utiliser de serveur de passerelle RD***                   | Cette option désactive l'utilisation d'une passerelle RD pour la session RDP. | 

### Méthode de connexion

| PARAMÈTRES                             | DESCRIPTION |
|------------------------------------|-------------|
| ***Demander le mot de passe (NTLM)***            | Utiliser le protocole NTLM pour l'authentification, nécessitant un mot de passe.|
| ***Carte à puce***                         | Utiliser la technologie de carte à puce pour une authentification sécurisée. |
| ***Me permettre de sélectionner plus tard***           | Sélectionner la méthode d'authentification plus tard.|
| ***Utiliser un jeton d'accès de passerelle***         | S'appuyer sur un jeton d'accès de passerelle pour l'authentification, en contournant les méthodes traditionnelles. |

### Options supplémentaires 

| PARAMÈTRES                                     | DESCRIPTION |
|--------------------------------------------|-------------|
| ***Jeton d'accès de passerelle***                       | Une méthode sécurisée pour l'authentification utilisant un jeton prédéfini. |
| ***Ouvrir la passerelle uniquement lorsque l'hôte ne peut pas être pingé*** | Activer la passerelle RD uniquement si l'hôte ne peut pas être atteint directement. |
| ***Contourner le serveur de passerelle RD pour les adresses locales***| Exclure l'utilisation de la passerelle RD pour les connexions aux adresses du même réseau.|
| ***Utiliser les mêmes identifiants de passerelle RD que l'ordinateur distant*** | Exclure l'utilisation de la passerelle RD pour les connexions aux adresses du même réseau. |
| ***Identifiants***                                | Se référer aux détails d'authentification requis pour l'accès, typiquement un nom d'utilisateur et un mot de passe. |
