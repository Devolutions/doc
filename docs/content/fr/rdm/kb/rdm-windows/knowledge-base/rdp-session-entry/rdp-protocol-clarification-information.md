---
eleventyComputed:
  title: Clarification et informations sur le RDP
  description: Dans {{ fr.RDM }}, la dernière version du RDP utilise la dernière version du Microsoft RDP ActiveX présente sur le système.
---
Dans {{ fr.RDM }}, la dernière version du RDP utilise la dernière version du Microsoft RDP ActiveX présente sur le système - c'est toujours **mstscax.dll**, mais la DLL contient différentes versions de l'interface ActiveX.

FreeRDP est le seul client RDP que nous intégrons dans {{ fr.RDM }}, mais il est uniquement utilisé si vous changez la Version RDP pour l'une des options FreeRDP disponibles. Toutes les autres options utilisent le Microsoft RDP ActiveX qui est toujours externe à {{ fr.RDM }}

{% snippet, "badgeInfo" %}
Nous n'avons jamais intégré le client Microsoft RDP dans {{ fr.RDM }}, principalement parce qu'il n'est pas possible de le redistribuer séparément. Tout ce dont vous avez besoin pour rester à jour est de mettre à jour Windows, car nous utilisons la DLL présente sur le système, sur laquelle nous n'avons aucun contrôle.
{% endsnippet %}

Dans les deux cas, le client Microsoft RDP est externe à {{ fr.RDM }} Dans des conditions normales, le recours à une solution de secours n'est pas prévu - si vous demandez **mstscax.dll**, il utilisera toujours **mstscax.dll** - la condition où **mstscax.dll** est manquant n'est pas gérée.
