---
eleventyComputed:
  title: Microsoft RDP ne peut pas enregistrer les mots de passe sur l'ordinateur local
---
Dans une session Microsoft RDP, vous voulez enregistrer le mot de passe sur l'ordinateur local. Cependant, le bouton "enregistrer le mot de passe" est grisé.

{% snippet, "badgeInfo" %}
Note : Ce paramètre peut avoir été défini par une stratégie de groupe. Si vous trouvez la valeur mais ne savez pas pourquoi elle est définie, un Administrateur de Domaine peut l'avoir définie. Nous ne cautionnons pas le contournement des politiques d'entreprise.
{% endsnippet %}

## Solution

1. Cliquer sur ***Démarrer*** de Windows, taper ***R*** un et ouvrir l'application.
1. Taper ***regedit*** pour ouvrir l'éditeur de registre et ***autoriser*** l'application à apporter des modifications.
1. Naviguer jusqu'à la clé **HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows NT\Terminal Services\DisablePasswordSaving** et changer la valeur à 0.
1. Dans {{ fr.RDM }}, ***Ouvrir*** les ***Propriétés*** de la session RDP et valider que l'option ***Enregistrer le mot de passe localement*** est activée et que vous avez du texte dans le champ ***Hôte***.
![!!KB4048](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4048.png)
