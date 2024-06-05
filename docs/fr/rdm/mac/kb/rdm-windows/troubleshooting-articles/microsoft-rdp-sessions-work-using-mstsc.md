---
eleventyComputed:
  title: Les sessions Microsoft RDP fonctionnent avec mstsc.exe mais pas dans {{ fr.RDM }}
---
Ce sujet décrit les étapes de dépannage lorsque l'établissement d'une session vers un hôte distant réagit différemment dans {{ fr.RDM }} que **mstsc.exe**.

## Solution

### Problèmes en mode intégré

Notre mode d'affichage Intégré (en onglets) utilise le Microsoft ActiveX et offre le plus d'options de personnalisation, mais est intrinsèquement différent de l'utilisation de **mstsc.exe**. Pour s'assurer que le problème est réellement dans {{ fr.RDM }} par rapport à un problème avec l'ActiveX, la procédure consiste à essayer de reproduire le scénario avec le RDCMan de Microsoft. Vous pouvez obtenir cet outil depuis [http://www.microsoft.com/en-ca/download/details.aspx?id=44989](http://www.microsoft.com/en-ca/download/details.aspx?id=44989) Installez-le, créez des sessions comme vous en avez dans {{ fr.RDM }}, puis ouvrez-les simultanément ou en répétition pour reproduire le problème que vous pensez être dans {{ fr.RDM }}.

### Comparer nos paramètres à un fichier rdp natif

Lorsque vous utilisez le mode d'affichage Externe, {{ fr.RDM }} créera un fichier RDP temporaire et appellera **mstsc.exe** avec le fichier en tant que paramètre. Il peut être utile de récupérer ce fichier tant qu'il existe et de le comparer à un créé en utilisant **mstsc.exe**.

1. Créer ou dupliquer la session que vous souhaitez diagnostiquer.
1. Définir le mode d'affichage sur ***Externe***.
1. Lancer la session.

Le fichier sera supprimé lorsque vous fermerez {{ fr.RDM }}, vous devez le copier avant cela.

4. Ouvrir %TMP%\RDM, copier votre fichier dans un autre dossier.
1. Ouvrir le fichier dans l'éditeur de votre choix et le comparer à un fichier créé en utilisant **mstsc.exe**.

### Le démarrage des sessions rdp est lent comparé au rdp natif

Nous avons isolé le problème et nous l'avons résolu en changeant votre version du moteur RDP à RDP 6.0 ou 7.0 dans ***Fichier – Paramètres – Types – Bureau à distance***.
![!!KB4056](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4056.png)
