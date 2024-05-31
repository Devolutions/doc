---
eleventyComputed:
  title: "{{ fr.RDMMAC }} macro de frappe pour effectuer l'authentification"
  description: Avec {{ fr.RDMMAC }}, il est possible d'envoyer les identifiants via une macro de frappe en utilisant des variables.
---
Avec {{ fr.RDMMAC }}, il est possible d'envoyer les identifiants via une macro de frappe en utilisant des variables.

1. Sélectionner une entrée de session ***Site Web*** et cliquer sur ***Modifier l'entrée*** dans l'onglet ***Modifier***. Sous ***Général*** dans le menu de gauche, cliquer sur ***Site Web***, puis sur l'onglet ***Connexion***. Sélectionner ***Remplissage automatique de la connexion*** et décocher l'option ***Soumission automatique***.
![!!KB4217](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4217.png)
1. Dans la section ***Sécurité – Paramètres de sécurité – Autres*** du menu de gauche, cocher l'option ***Autoriser le mot de passe dans une variable***. Cette option doit être cochée pour que la macro de frappe puisse envoyer le mot de passe à la session distante.
![!!KB4218](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4218.png)
1. Dans la section ***Connexion – Événements***, cliquer sur l'onglet ***Après ouverture*** et ajouter dans la section ***Macro de frappe*** : $USERNAME${TAB}$PASSWORD${ENTER}. Cliquer sur ***Enregistrer***.
![!!KB4219](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4219.png)