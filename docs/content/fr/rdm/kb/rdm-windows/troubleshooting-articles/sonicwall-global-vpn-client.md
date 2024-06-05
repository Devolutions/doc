---
eleventyComputed:
  title: Client VPN global Sonicwall
---
La connexion n'est pas établie.

## Solution
{{ fr.RDM }} appelle l'interface de ligne de commande (CLI) avec les paramètres pris en charge.

À ce moment (v4.9), l'exécutable peut être trouvé dans :

**C:\Program Files\Dell SonicWALL\Global VPN Client\SWGVC.exe**

L'appeler comme suit :

`SWGVC.exe /E nom_connexion /U nom_utilisateur /P mot_de_passe`

La CLI doit pouvoir se connecter, {{ fr.RDM }} ne fait rien de plus pour que cela fonctionne.