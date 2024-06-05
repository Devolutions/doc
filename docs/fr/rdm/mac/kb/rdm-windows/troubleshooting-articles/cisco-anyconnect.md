---
eleventyComputed:
  title: Cisco AnyConnect
---
L'add-on Cisco AnyConnect n'envoie pas les informations correctes comme le mot de passe ou le numéro de groupe à la fenêtre DOS **vpncli.exe** pour établir la connexion VPN.

Par exemple, seule la moitié du mot de passe est envoyée à la fenêtre Cisco AnyConnect.
## Solution
L'add-on Cisco AnyConnect utilise sendkeys pour envoyer des informations à la fenêtre **vpncli.exe**. Le problème que nous rencontrons est causé par la fonctionnalité UAC de Windows. Activer/Désactiver l'UAC sur votre ordinateur devrait résoudre le problème.
1. Sur votre ordinateur, aller dans ***Panneau de configuration – Compte d'utilisateur – Paramètres de contrôle de compte d'utilisateur***.
1. Sélectionner ***Ne jamais m'avertir*** pour désactiver l'option.
1. Sélectionner ***M'avertir*** ou ***Toujours m'avertir*** pour activer l'option.
