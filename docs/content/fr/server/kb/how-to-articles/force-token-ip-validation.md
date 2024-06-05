---
eleventyComputed:
  title: Empêcher {{ fr.RDM }} et le {{ fr.WAPP }} de se déconnecter lors du changement de réseau
  description: Lorsque vous changez votre ordinateur d'un réseau filaire au wifi, {{ fr.RDM }} et le {{ fr.WAPP }} se déconnectent de {{ fr.DVLS }} et vous devez vous reconnecter.
  keywords:
  - Changement de Réseau
  - IP Publique
  - Jeton
---
## Scénario 1

Changer votre ordinateur d'un réseau filaire au wifi, {{ fr.RDM }} et le {{ fr.WAPP }} se déconnectent de {{ fr.DVLS }} et vous devez vous reconnecter.

## Scénario 2

Si vous avez plusieurs adresses IP publiques différentes, {{ fr.RDM }} et le {{ fr.WAPP }} ne peuvent pas se connecter à {{ fr.DVLS }}.

## Solution

Pour éviter ce comportement, aller à l'interface web de {{ fr.DVLS }} et, sous ***Administration – Paramètres du Serveur – Sécurité***, désactiver ***Forcer la validation de l'IP publique du jeton***.
![Administration – Paramètres du Serveur – Sécurité – Forcer la validation de l'IP publique du jeton](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2290.png)
