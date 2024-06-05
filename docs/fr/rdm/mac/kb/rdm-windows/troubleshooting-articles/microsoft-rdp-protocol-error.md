---
eleventyComputed:
  title: Erreur de protocole Microsoft RDP
---
En raison d'une erreur de protocole, cette session sera déconnectée. Veuillez essayer de vous reconnecter à l'ordinateur distant.

![Message d'erreur de protocole](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4261.png)

## Solution 1

1. Dans les propriétés de la session RDP, aller à ***Commun – Général***.
1. Sous l'onglet ***Expérience***, décocher ***Mise en cache persistante des bitmaps*** et ***Styles visuels***.
![Décocher Styles visuels et Mise en cache persistante des bitmaps Propriétés](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4262.png)
1. Cliquer sur ***OK*** en bas pour sauvegarder les modifications.

## Solution 2

1. Fermer {{ fr.RDM }}
1. Renommer le fichier "default.rdp" dans ***Mes Documents*** en "default.old".
1. Redémarrer {{ fr.RDM }} et essayer de se connecter avec RDP.

## Solution 3

1. Se connecter à la machine cible en allant directement à la console de ce serveur ou par tout outil, comme VNC, afin que nous puissions accéder à cette machine.
1. Faire un clic droit sur le Bureau.
1. Sélectionner les ***Propriétés***.
1. Dérouler les ***Thèmes*** et sélectionner un autre que celui actuellement utilisé.
1. Cliquer sur ***Appliquer***, puis ***OK***.
1. Se connecter à la machine à distance.
