---
eleventyComputed:
  title: Erreur de certificat invalide lors de la mise à jour de {{ fr.RDM }}
  description: "{{ fr.RDM }} affiche un message d'erreur « Certificat invalide » lors de la tentative de mise à jour à partir d'une version antérieure à 2023.2.34."
---
{{ fr.RDM }} affiche un message d'erreur « Certificat invalide » lors de la tentative de mise à jour à partir d'une version antérieure à 2023.2.34.

Par mesure de sécurité, {{ fr.RDM }} inclut une liste de certificats acceptés pour s'assurer que les mises à jour sont distribuées par Devolutions (une méthode nommée épinglage de certificat).

![Erreur de certificat invalide](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2340.png)

## Solution

Pour résoudre ce problème, télécharger et installer manuellement la mise à jour via votre navigateur.

1. Dans le ruban de {{ fr.RDM }}, aller à ***Aide – Vérifier les mises à jour***.
![Aide – Vérifier les mises à jour](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2341.png)
1. Dans l'onglet ***Mise à jour disponible*** qui s'ouvre, cliquer sur ***Télécharger***, puis sur ***Télécharger la mise à jour en utilisant votre navigateur par défaut***. Votre navigateur s'ouvre et le téléchargement devrait commencer.
![Télécharger la mise à jour en utilisant votre navigateur par défaut](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2342.png)
1. Lorsque le téléchargement est terminé, cliquer sur le fichier téléchargé et suivre le processus d'installation.
