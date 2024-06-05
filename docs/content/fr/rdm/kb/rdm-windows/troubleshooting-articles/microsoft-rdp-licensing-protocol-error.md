---
eleventyComputed:
  title: Erreur de protocole de licence Microsoft RDP
---
Lorsque vous vous connectez à un poste de travail à distance, vous recevez l'une des erreurs ci-dessous.

![!!KB4234](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4234.png)
![!!KB4235](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4235.png)

## Solution 1

1. Fermer {{ fr.RDM }}.
1. Naviguer vers **%localappdata%\Devolutions**.
1. Déplacer le dossier **RemoteDesktopManager** sur votre bureau.
1. Redémarrer {{ fr.RDM }}.

## Solution 2

Dans ***Fichier – Paramètres – Types – RDP***, changer le moteur RDP pour ***RDP (FreeRDP Latest)***.

## Solution 3

Essayer de cocher/décocher l'option ***NLA*** située sous l'onglet ***Connexion*** dans les ***Propriétés*** de la session.

## Solution 4

Dans certains cas, et parfois en fonction du système d'exploitation hôte, le paramètre ***CredSSP*** peut interférer. Changer sa valeur dans ***Propriétés de la session – Général – Avancé*** Onglet.

## Solution 5

Essayer de cocher/décocher l'option ***Ouvrir la console*** et voir si le message d'erreur disparaît ou reste le même dans les paramètres ***Général*** des ***Propriétés***.
