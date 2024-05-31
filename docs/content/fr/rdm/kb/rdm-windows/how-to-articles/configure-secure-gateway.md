---
eleventyComputed:
  title: Configurer une passerelle sécurisée
  description: La nouvelle intégration de saut vous donnera la possibilité de sauter à travers une zone DMZ directement vers votre serveur.
---
La nouvelle intégration de saut vous donnera la possibilité de sauter à travers une zone DMZ directement vers votre serveur. La condition requise est un serveur SSH connecté à votre réseau et à la DMZ.

## Configurer le serveur de saut

1. Créer une entrée de Tunnel SSH en entrant les informations du serveur SSH par lequel nous devons nous authentifier pour accéder à la zone DMZ (#1). Puis, dans les Paramètres de Tunnel Sortant, configurer le Mode sur Dynamique et la Source sur 127.0.0.1 (#2).
![!!KB4222](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4222.png)

1. Une fonctionnalité intéressante pour la Passerelle Sécurisée est de garder la fenêtre de la Passerelle Sécurisée cachée. Pour ce faire, aller à l'onglet ***Avancé*** et cocher ***Masquer lorsque la connexion est réussie***.
![!!KB4223](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4223.png)

Le serveur de saut (Passerelle Sécurisée) est maintenant configuré et prêt à l'emploi.

## Configurer la session de la machine cible

Nous prenons en charge ***RDP, SSH Shell, SFTP, FTP, SCP***, et ***Site Web*** (entrée de session) via la fonctionnalité ***Passerelle Sécurisée***.

La configuration contient deux étapes : la première est la configuration générale, la deuxième étape est la configuration de la Passerelle Sécurisée. Vous pourrez répéter cette deuxième étape pour chaque session supplémentaire utilisant la Passerelle Sécurisée.

### Configuration générale

1. Configurer l'Hôte, le Port, le Nom d'utilisateur, le Domaine et le Mot de passe qui se réfèrent à votre session RDP (oublier l'ancienne configuration, ne pas entrer une IP localhost 127.0.0.1).
![!!KB4224](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4224.png)

### Configuration de la Passerelle Sécurisée

2. À partir de là, aller à ***VPN/SSH/Gateway*** pour la ***Configuration de la Passerelle Sécurisée***.
    1. Sélectionner les options ***Ouvrir*** et ***Fermer***, basées sur les exigences de l'entreprise.
{type="a"}
    1. ***Groupe VPN*** peut être configuré comme expliqué dans [Configurer VPN pour plusieurs sessions](/rdm/kb/rdm-windows/how-to-articles/configure-vpn-multiple-sessions/). Nous recommandons fortement de configurer le Groupe VPN si de nombreuses sessions RDP/Navigateur Web utilisent la même Passerelle Sécurisée.
    1. Pour ***Type***, sélectionner ***Existant – SSH***.
![!!KB4225](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4225.png)
1. Sous l'onglet ***Paramètres***, sélectionner l'entrée de Passerelle Sécurisée SSH et cocher ***Utiliser via passerelle sécurisée***.
![!!KB4226](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4226.png)
1. Le temps d'attente pour la session VPN peut être réduit en changeant le Délai. Le délai est réglé sur 1 seconde ci-dessous.
![!!KB4227](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4227.png)

Les deux sessions sont configurées et vous êtes prêt à démarrer la session RDP, tout le reste sera effectué automatiquement par {{ fr.RDM }}.
