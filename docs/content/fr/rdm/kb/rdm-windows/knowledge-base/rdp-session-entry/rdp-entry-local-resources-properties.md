---
eleventyComputed:
  title: Propriétés des ressources locales d'une entrée RDP
  description: Les propriétés suivantes peuvent être configurées lors de la création ou de l'édition d'une entrée RDP.
---
{% snippet, "badgeInfo" %}
Les propriétés suivantes peuvent être configurées lors de la création ou de l'édition d'une entrée RDP. La plupart des propriétés générales nécessitent de fermer complètement l'entrée RDP, puis de la rouvrir pour qu'elles prennent effet.
{% endsnippet %}  

![Propriétés des ressources locales](https://webdevolutions.azureedge.net/docs/RDMW6008.png)

## Son de l'ordinateur distant

Configurer comment le son du système distant est restitué. Cela peut être soit sur le système distant lui-même, soit sur le système local.

### Crochet sonore

| PARAMÈTRES      | Description   |                                             
|-------------------------------|---------------|
| ***Rapporter à cet ordinateur***        | Rediriger tout l'audio de l'ordinateur distant pour le jouer sur l'ordinateur local.         |
| ***Ne pas jouer***                   | Désactiver entièrement la lecture audio pendant la session RDP. Aucun son ne sera joué ni sur le système local ni sur le système distant.    |
| ***Laisser sur l'ordinateur distant***      | Garder toute la lecture audio sur l'ordinateur distant, sans la rediriger vers le système local.                               |
| ***Par défaut (Rapporter à cet ordinateur)*** | Le paramètre par défaut, qui redirige tout l'audio de l'ordinateur distant vers l'ordinateur local.                       |

### Mode de qualité audio

| PARAMÈTRES | DESCRIPTION                                                                                          |
|--------------------|------------------------------------------------------------------------------------------------------|
| ***Dynamique***            | Ajuste automatiquement la qualité audio en fonction des conditions actuelles du réseau pour optimiser la performance.          |
| ***Haute***               | Fournit la plus haute qualité audio, en utilisant plus de bande passante. Convient aux connexions réseau à haute vitesse.          |
| ***Moyenne***             | Offre un équilibre entre la qualité audio et l'utilisation de la bande passante, conçu pour des conditions réseau moyennes.           |
| ***Par défaut (Dynamique)***  | Le paramètre par défaut, qui ajuste dynamiquement la qualité audio en fonction des conditions du réseau pour garantir la meilleure performance possible. |

### Enregistrement audio distant

Permettre ou restreindre la redirection de l'entrée audio du microphone de l'ordinateur local vers la session de bureau à distance.

| PARAMÈTRES | DESCRIPTION    |
|---------------------------|--------------------------|
| Ne pas enregistrer             | Désactiver l'enregistrement audio du microphone de l'ordinateur local pendant la session RDP. Aucune entrée audio de la machine locale ne sera capturée ou transmise au système distant. |
| Enregistrer depuis cet ordinateur | Activer l'enregistrement audio du microphone de l'ordinateur local, permettant à l'entrée audio d'être redirigée et utilisée dans la session distante. Cela est utile pour les applications ou services sur le bureau à distance qui nécessitent une entrée audio de l'utilisateur.  |

## Clavier 

Ce paramètre détermine comment les combinaisons de touches Windows (par exemple, <kbd>ALT</kbd>+<kbd>TAB</kbd>) sont gérées pendant une session de bureau à distance.

| PARAMÈTRES                        | DESCRIPTION |
|-------------------------------|-------------|
| ***Sur l'ordinateur local*** | Les combinaisons de touches Windows sont appliquées sur l'ordinateur local. Par exemple, appuyer sur <kbd>ALT</kbd>+<kbd>TAB</kbd> permettra de basculer entre les applications sur la machine locale, et non sur le bureau à distance. |
| ***Sur l'ordinateur distant*** | Cette option redirige les combinaisons de touches Windows vers l'ordinateur distant, donc appuyer sur <kbd>ALT</kbd>+<kbd>TAB</kbd> permettra de basculer entre les applications sur le bureau à distance. |
| ***En mode plein écran uniquement*** | Avec ce paramètre, les combinaisons de touches Windows sont appliquées à l'ordinateur distant uniquement lorsque la session RDP est en mode plein écran. Si la session est en mode fenêtré, les combinaisons de touches affectent l'ordinateur local. |
| ***Par défaut (Sur l'ordinateur local)*** | Le comportement par défaut est d'appliquer les combinaisons de touches Windows sur l'ordinateur local. |

### Disposition du clavier

***Disposition du clavier*** est l'arrangement et la fonction des touches sur le clavier utilisé pendant une session de bureau à distance.

| PARAMÈTRES                      | DESCRIPTION |
|-------------------------------|-------------|
| ***Disposition du clavier***               | Sélectionner la disposition du clavier qui correspond à votre pays ou préférence linguistique. Cela garantit que les touches pressées sur le clavier local correspondent correctement aux caractères et actions sur le bureau à distance.  |

## Périphériques locaux et ressources

Choisir quels périphériques et sources de données sur votre ordinateur local peuvent être redirigés et accessibles pendant une session de bureau à distance.

| PARAMÈTRES                      | DESCRIPTION |
|-------------------------------|-------------|
| ***Sélectionner les périphériques et les ressources que vous souhaitez utiliser dans votre session distante*** | Choisir parmi une variété de périphériques locaux et de ressources à rediriger et à utiliser dans la session distante tels que ***imprimantes***, ***ports***, ***presse-papiers***, etc. |

### Autres périphériques USB RemoteFX pris en charge

Utiliser la redirection USB RemoteFX pour rediriger des périphériques USB spécifiques de l'ordinateur local vers la session distante.

| PARAMÈTRES                        | DESCRIPTION |
|---------------------------------|-------------|
| ***Goodix USB2.0***                  | Un périphérique pris en charge pour la redirection dans RemoteFX, généralement utilisé pour les capteurs d'empreintes digitales et autres dispositifs biométriques.   |
| ***MISC USB DFU***                   | Signifie Miscellaneous USB Device Firmware Upgrade, pris en charge pour la redirection dans RemoteFX pour les dispositifs nécessitant des mises à jour de firmware ou utilisant le protocole DFU pour les opérations. |
