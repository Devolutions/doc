---
eleventyComputed:
  title: Wake on LAN
---
Wake-on-LAN est une norme de réseau informatique Ethernet, qui permet à un ordinateur d'être allumé ou réveillé par un message réseau. C'est une fonctionnalité indépendante du système d'exploitation qui fonctionne en diffusant un paquet "magique" spécialement conçu au niveau de la couche de liaison de données. L'ordinateur cible se trouve dans un état de faible puissance avec seulement sa carte réseau allumée, et lorsqu'il reçoit le paquet magique, la carte réseau "réveille" l'ordinateur, le mettant sous tension et le démarrant.

Wake-on-LAN est pris en charge dans l'édition Team de {{ fr.RDM }}. De plus, la carte mère de destination doit le supporter, et cela doit être activé. L'ordinateur doit également être dans le réseau local (LAN) et non connecté dans un VPN.

Il est important de noter que Wake-on-LAN fonctionne en dessous du niveau IP. Cela signifie que la machine émettrice doit être sur le LAN, donc nous ne pouvons pas les envoyer sur des connexions IP distantes, telles que via SSH ou VPN. WOL diffuse des paquets à l'ordinateur cible via UDP. Vous pouvez configurer le port qu'il utilise, le port par défaut est le 9. Si vous souhaitez réveiller une machine sur un sous-réseau différent, votre routeur doit rediriger le port UDP 9, ou tout autre port que vous décidez d'attribuer. La plupart des utilisateurs n'ont pas besoin de configurer leur routeur ou de s'inquiéter de cela.
## Activer Wake-on-LAN
La première étape est de vérifier que votre ordinateur prend en charge Wake-on-LAN. Il y a quelques points à vérifier :

* Votre carte réseau doit prendre en charge Wake-on-LAN.
* Votre alimentation doit prendre en charge Wake-on-LAN.
* Wake-on-LAN doit être activé dans le BIOS.
* Votre routeur doit être configuré pour transmettre les paquets de diffusion.
* Votre système d'exploitation doit être configuré pour activer Wake-on-LAN.
## Configurer {{ fr.RDM }}
Vous devez ajouter une adresse MAC valide (adresse de contrôle d'accès aux médias) dans la configuration de la session. Le champ de saisie peut être trouvé dans l'onglet ***Informations*** et dans l'onglet enfant ***Général***. Le nom du champ est ***MAC***.
![!!KB4622](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4622.png)
Vous pouvez utiliser le bouton Ellipsis pour déterminer automatiquement l'adresse MAC. Si cela échoue, vous devrez l'entrer manuellement.
### À propos de la découverte d'adresse MAC
Le processus de découverte tentera initialement d'utiliser le protocole ARP. Cela est rapide et ne nécessite pas d'authentification, mais il y a des exigences sur l'aspect réseau qui peuvent ne pas être remplies. Si ARP n'a pas réussi, une autre tentative est faite en utilisant WMI. Cela est plus lent et nécessite une authentification. {{ fr.RDM }} utilisera les identifiants tels que configurés dans les propriétés de l'entrée ou les identifiants entrés dans l'onglet ***Outils de gestion***.
## Utiliser Wake-on-LAN
Si les paramètres sont correctement configurés, vous pouvez invoquer Wake-on-LAN à partir du menu contextuel de la session, qui peut être trouvé dans le menu Macros/Scripts/Outils - Wake-on-LAN.
