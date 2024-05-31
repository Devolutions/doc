---
eleventyComputed:
  title: Outils de session
---
Lorsque vous tentez d'utiliser ***Gestion de l'ordinateur***, vous recevez l'erreur ci-dessous :
![!!KB4083](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4083.png)
## Solution
Pour que cela fonctionne, vous devez cocher cette option dans l'onglet ***Outils de gestion*** de la session RDP.
![!!KB4084](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4084.png)

Si cela ne résout pas votre problème, il est probable que votre session ait ***Paramètres spécifiques à l'utilisateur*** activés.

Cela peut être utile lorsque vous utilisez des outils tels que :

* Hyper-V
* Observateur d'événements
* Gestion de l'ordinateur
* Services Windows

Si cela est souvent nécessaire, nous vous recommandons de modifier les ***Paramètres par défaut*** du type d'entrée. Avec cette modification, toutes vos nouvelles sessions utiliseront les identifiants spécifiés lorsqu'un outil est lancé.
