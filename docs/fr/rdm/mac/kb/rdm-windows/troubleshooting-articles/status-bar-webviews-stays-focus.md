---
eleventyComputed:
  title: La barre d'état dans les WebViews reste en focus
---
Dans {{ fr.RDM }}, lors de l'utilisation d'une entrée ***Site Web*** en mode intégré, la barre d'état peut rester en focus après le chargement de la page et persister à travers les onglets.

Cela peut se produire lorsque votre souris survole un lien ; ce texte de la barre d'état est affiché comme information sur le lien. Bien qu'il ne soit pas prévu qu'il dure, cela peut arriver lorsque le focus est perdu de la fenêtre contenant les liens en question. Naviguer de retour vers la fenêtre qui a créé le lien en premier lieu et survoler la souris sur le contrôle qui a créé le lien en premier lieu puis déplacer la souris loin de celui-ci devrait supprimer ces lignes de texte.

Pour une solution à long terme, il existe une option pour désactiver complètement la barre d'état :
1. Dans {{ fr.RDM }}, aller à ***Fichier – Paramètres – Interface utilisateur***.
1. Sous la section ***Avancé***, trouver l'option ***Afficher la barre d'état dans WebView*** et la désactiver.

![Désactiver Afficher la barre d'état dans les WebViews](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2183.png)

3. Cliquer sur ***OK*** pour sauvegarder votre changement.
