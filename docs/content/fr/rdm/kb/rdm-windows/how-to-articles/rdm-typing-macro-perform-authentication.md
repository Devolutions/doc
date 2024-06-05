---
eleventyComputed:
  title: "{{ fr.RDM }} macro de frappe pour effectuer l'authentification"
---
Avec {{ fr.RDM }}, il est possible d'envoyer des identifiants via une macro de frappe en utilisant des variables.

1. Ouvrir les ***Propriétés*** d'une entrée de session ***Site Web***. Dans le menu de gauche, s'assurer d'être dans ***Commun – Général***.
1. Cliquer sur l'onglet ***Connexion*** pour accéder à la section ***Paramètres***.
1. Cocher la case ***Remplissage automatique de la connexion*** et décocher la case ***Soumission automatique***.
![!!KB4835](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4835.png)
1. Dans le menu de gauche, naviguer vers la section ***Sécurité – Paramètres de sécurité***.
1. Sous ***Mot de passe***, cocher la case de l'option ***Autoriser le mot de passe dans une variable***. Cette option doit être cochée pour que la macro de frappe puisse envoyer le mot de passe à la session distante.
{% snippet, "badgeCaution" %}
Si l'option est grisée, il est nécessaire d'activer ***Autoriser les variables de mot de passe pour toutes les entrées*** et ***Autoriser la variable de mot de passe dans les macros*** dans ***Administration – Paramètres du système – Politique de mot de passe***.

De plus, si vous utilisez le mode d'identification ***Lié ({{ fr.VLT }})*** dans votre entrée, vous devrez également activer l'option ***Autoriser le mot de passe dans une variable*** dans l'entrée d'identification liée.
{% endsnippet %}

![!!KB4836](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4836.png)

6. Dans le menu de gauche, naviguer vers ***Connexion – Événements***.
1. Cliquer sur l'onglet ***Après ouverture***. Dans la section ***Macro de frappe***, coller ce qui suit : $USERNAME${TAB}$PASSWORD${ENTER}.
![!!KB4837](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4837.png)
1. Cliquer sur ***OK*** pour sauvegarder.
