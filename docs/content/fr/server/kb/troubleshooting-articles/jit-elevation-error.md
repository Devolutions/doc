---
eleventyComputed:
  title: Élévation JIT {{ fr.DVLS }} PAM ne révoquant pas les privilèges pour les utilisateurs
  description: Si la restitution PAM a été effectuée automatiquement par le planificateur, il est possible que l'utilisateur fasse toujours partie du groupe dans lequel il avait été initialement élevé.
---
Dans la version 2023.3, les privilèges obtenus par élévation JIT en utilisant un fournisseur Entra ID (Azure) n'étaient pas correctement révoqués après l'élévation.

Si la restitution PAM a été effectuée automatiquement par le planificateur (par exemple, lorsque le délai d'une réservation était écoulé), il est possible que l'utilisateur fasse toujours partie du groupe dans lequel il avait été initialement élevé.

## Solution
1. Se connecter avec un compte administrateur dans l'interface web pour {{ fr.DVLS }}.
1. Aller à ***Administration*** – ***Accès privilégié*** – ***Fournisseurs***.
1. Cliquer sur le bouton ***Paramètres*** du fournisseur Entra ID (Azure).
1. Aller à l'onglet Paramètres et examiner les groupes dans la section ***Élévation Just-In-Time (JIT)***.  
![Groupes d'élévation Just-In-Time (JIT)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0191.png)
1. Dans Microsoft Azure, aller à ***Azure*** – ***Microsoft Entra ID*** – ***Groupes***.  
1. Examiner le groupe souhaité pour s'assurer que les comptes d'utilisateurs utilisés pendant le processus d'élévation JIT ne font plus partie du ou des groupes.