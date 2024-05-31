---
eleventyComputed:
  title: Installation à distance avec PSExec
---
Lorsque vous avez besoin d'effectuer une installation à distance, vous disposez de plusieurs options, telles qu'une politique de domaine, un script de connexion ou PSExec.

Selon la manière dont la sécurité est configurée sur l'ordinateur distant, vous pouvez rencontrer des problèmes où même un administrateur ne peut pas installer correctement une application. Pour ces cas, vous devez exécuter PSExec dans le contexte du compte système.

Tout d'abord, installer les outils Sysinternals de Microsoft, car vous aurez besoin de l'aide de **PSExec.exe** dans l'exécution de ce script. ([https://technet.microsoft.com/en-us/sysinternals/bb842062](https://technet.microsoft.com/en-us/sysinternals/bb842062))

Ensuite, télécharger le *.msi ou le *.exe de l'application que vous souhaitez installer et enregistrer le fichier sur un lecteur partagé accessible depuis l'ordinateur distant.

{% snippet, "badgeInfo" %}
Des options existent pour copier des fichiers à distance, veuillez vous référer à la documentation de PSExec pour plus de détails.
{% endsnippet %}

## Paramètres
Créer une entrée ***Macros/Scripts/Outils***, utiliser le type ***PSExec***. Dans la section de la ligne de commande, ajouter la ligne suivante (longue) :

```
C:\Tools\Sysinternals\psexec.exe \\$HOST$ -i -u $TOOL_DOMAIN$\$TOOL_USERNAME$ -p $TOOL_PASSWORD$ cmd /
k "msiexec /i \\SRV-DEPLOY\msi\Setup.RemoteDesktopManager.10.9.0.0.msi /quiet /passive /norestart"
```

{% snippet, "badgeInfo" %}
Le chemin complet vers le *.msi doit être entré. Un réseau partagé est recommandé dans ce cas.
{% endsnippet %}

Quelques notes sur cette ligne de commande :

1. Remplacer le chemin pour lancer PSExec.
1. Ajouter les informations d'identification appropriées dans la section ***Outils*** de votre session, si laissé vide, cela utilisera vos informations d'identification de session Windows actuelles.
1. Indiquer le serveur partagé approprié pour obtenir le *.msi ou *.exe.
1. Lorsque vous êtes prêt à déployer votre application sur l'ordinateur distant, il suffit de sélectionner la session appropriée dans le ***{{ fr.NPANE }}*** et de lancer les ***Macros/Scripts/Outils*** depuis le Tableau de bord. L'entrée ***Macros/Scripts/Outils*** peut également être lancée via le {{ fr.RDMA }}.

## Utilisation
Le type ***Macros/Scripts/Outils*** est toujours exécuté dans le contexte d'une session. En fait, ils utilisent les informations dans la session pour identifier sur quel hôte exécuter l'outil, c'est pourquoi nous avons utilisé la variable $HOST$.

Pour cette raison, la première étape est de sélectionner une session, n'importe quel type de session fera l'affaire (RDP, SSH, etc). Après avoir sélectionné la session, le tableau de bord affichera les ***Macros/Scripts/Outils***. Il suffit donc de cliquer sur l'outil pour le lancer contre l'hôte lié à la session actuellement sélectionnée. Vous pouvez sélectionner des hôtes et installer en séquence.
