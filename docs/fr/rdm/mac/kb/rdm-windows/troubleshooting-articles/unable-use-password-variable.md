---
eleventyComputed:
  title: Impossible d'utiliser la variable $PASSWORD$
  description: Lorsqu'elle est utilisée dans le cadre d'une macro de frappe, la variable $PASSWORD$ peut ne pas récupérer le mot de passe et envoyer à la place la variable telle quelle. Il s'agit d'une fonctionnalité de sécurité activée par défaut, mais qui peut être désactivée.
---
Lorsqu'elle est utilisée dans le cadre d'une ***macro de frappe***, la variable $PASSWORD$ peut ne pas récupérer le mot de passe et envoyer à la place la variable telle quelle. Il s'agit d'une fonctionnalité de sécurité activée par défaut, mais qui peut être désactivée.
## Solution
Suivre les étapes ci-dessous pour utiliser les mots de passe dans les variables :
1. Dans {{ fr.RDM }}, cliquer avec le bouton droit sur votre entrée et sélectionner ***Propriétés***.
1. Dans le menu de gauche, naviguer vers ***Sécurité – Paramètres de sécurité***.
1. Dans la section ***Mot de passe***, cocher la case de l'option ***Autoriser le mot de passe dans la variable***.
   {% snippet, "badgeInfo" %}
   Si l'option est grisée, vous devez activer ***Autoriser les variables de mot de passe pour toutes les entrées*** et ***Autoriser la variable de mot de passe dans les macros*** dans ***Administration – Paramètres système – Politique de mot de passe***.
   De plus, si vous utilisez le mode d'identification ***Lié ({{ fr.VLT }})*** dans votre entrée, vous devrez également activer l'option ***Autoriser le mot de passe dans la variable*** dans l'entrée d'identification liée.
   {% endsnippet %}

   ![Autoriser le mot de passe dans la variable](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2130.png)
4. Cliquer sur ***OK*** pour sauvegarder vos modifications.

Vous pouvez maintenant utiliser la variable $PASSWORD$ dans vos macros.

{% snippet, "badgeInfo" %}
En ce qui concerne les permissions, pour utiliser la variable $PASSWORD$, les permissions ***Voir***, ***Connecter (Exécuter)***, et ***Voir le mot de passe*** doivent être accordées. Si vous utilisez un compte privilégié (PAM dans {{ fr.DVLS }}), l'ensemble de permissions ***Opérateur*** (ou supérieur) doit également être accordé dans le PAM {{ fr.VLT }}.
{% endsnippet %}
