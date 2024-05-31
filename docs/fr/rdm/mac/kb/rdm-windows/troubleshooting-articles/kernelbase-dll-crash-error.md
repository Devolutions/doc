---
eleventyComputed:
  title: Erreur de crash de Kernelbase.dll
---
Vous trouverez à la fin du journal d'erreur de crash de {{ fr.RDM }} "Nom du module défaillant : KERNELBASE.dll, version : 10.0.18362.1, horodatage : 0x1a30e11b"

Selon cela, le crash dans {{ fr.RDM }} est causé par le module défaillant kernelbase.dll. Nous avons déjà rencontré ce problème quelques fois auparavant mais malheureusement, ce n'est pas quelque chose que nous pouvons réparer nous-mêmes chez Devolutions car le problème est avec ***kernelbase.dll*** lui-même, qui est un composant de Windows.
## Solution
Selon les informations que nous avons recueillies à ce sujet en consultant la documentation du Support de Microsoft, nous avons découvert que la plupart du temps, ces problèmes surviennent lorsque les postes de travail Windows ne sont pas mis à jour vers la dernière version disponible.

Nous avons également trouvé ce fil de discussion sur le forum de Microsoft : [L'application échoue à démarrer avec l'erreur Kernelbase.dll](https://answers.microsoft.com/en-us/windows/forum/all/applications-fail-to-start-with-kernelbasedll/44a4c2ad-a43f-479b-b026-bcdc2ff01285).

Dans certains cas, nous avons réussi à éliminer l'erreur en effectuant une nouvelle installation et téléchargement depuis notre site web de l'application {{ fr.RDM }}. Veuillez suivre [Installation portable de {{ fr.RDM }}](/rdm/mac/kb/rdm-windows/how-to-articles/portable-rdm-installation/) pour apprendre à en créer une.
