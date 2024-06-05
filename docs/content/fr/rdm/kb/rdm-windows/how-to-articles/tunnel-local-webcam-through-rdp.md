---
eleventyComputed:
  title: Tunneliser une webcam locale à travers des sessions RDP
---
{{ fr.RDM }} version 2021.1 et supérieures permet de tunneliser une webcam locale à travers une session RDP.

{% snippet, "badgeInfo" %}
L'option de redirection de webcam redirigera toutes vos webcams connectées. Finalement, nous ajouterons un moyen de spécifier quelle webcam spécifique vous souhaitez partager en entrant son deviceID (pour les sessions externes uniquement).
{% endsnippet %}

{% snippet, "badgeCaution" %}
Nous avons apporté une correction, dans la version 2021.1.18 et supérieures, qui empêchait certaines webcams d'être redirigées. Nous suspectons que le problème était causé par la redirection RemoteFX, qui n'est pas prise en charge par toutes les webcams. Malheureusement, RemoteFX semble être requis pour ActiveX (que nous utilisons pour les sessions intégrées), donc cette correction ne s'appliquera qu'aux sessions externes.
{% endsnippet %}

## Étapes

1. Définir la politique de groupe suivante à la fois sur le client RDP et l'ordinateur local :
   - ***Activé*** : Autoriser la redirection RDP d'autres périphériques USB RemoteFX pris en charge par cet ordinateur.
   - ***Désactivé*** : Ne pas autoriser la redirection des périphériques Plug and Play pris en charge.
1. Pour les sessions intégrées, tout ce que vous aurez à faire est d'activer l'option ***Autres périphériques Plug and Play (PnP) pris en charge*** dans la section ***Propriétés - Général - Ressources locales - Périphériques et ressources locales*** de l'entrée RDP.
![!!KB4749](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4749.png)
1. Pour les sessions externes, il y aura une option séparée pour rediriger les caméras. Vous devrez également vous assurer que les requêtes WMI sont activées sur votre ordinateur local.
![!!KB4750](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4750.png)
