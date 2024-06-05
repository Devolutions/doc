---
eleventyComputed:
  title: Cisco ASDM ne se lance pas après la mise à jour d'ASDM
  description: Ceci est une solution de contournement pour le problème où Cisco ASDM ne se lance pas après la mise à jour d'ASDM
---
Ceci est une solution de contournement pour le problème où Cisco ASDM ne se lance pas après la mise à jour d'ASDM.

## Solution de contournement
1. Créer une nouvelle entrée PowerShell.
![Entrée PowerShell](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0055.png)
1. Dans le champ ***Commande***, saisir `Start-Process "C:\Program Files (x86)\Cisco Systems\ASDM\jre\bin\javaw.exe"`.
1. Dans le champ ***Arguments***, saisir `-ArgumentList "-Xms64m -Xmx512m -Dsun.swing.enableImprovedDragGesture=true -classpath lzma.jar;jploader.jar;asdm-launcher.jar;retroweaver-rt-2.0.jar com.cisco.launcher.Launcher cert.PEM"`.
1. Cocher l'option ***Modifier le répertoire de travail par défaut***.
1. Définir le chemin vers `C:\Program Files (x86)\Cisco System\ASDM`.
1. Aller à l'onglet ***Hôte et identifiants***.
1. Saisir l'***Hôte*** et les identifiants.
1. Aller à ***Connexion – Événements***, puis à l'onglet ***Après ouverture***.
![Onglet Après ouverture](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0056.png)
1. Dans la section ***Après ouverture - Macro***, saisir `$HOST${TAB}$USERNAME${TAB}` dans le champ ***Macro de frappe***.
   {% snippet, "badgeInfo" %}
   Le paramètre de mot de passe `$PASSWORD${ENTER}` est optionnel. S'il est utilisé, il doit également être configuré correctement sous ***Sécurité – Paramètres de sécurité***.
   {% endsnippet %}
1. Cliquer sur ***OK*** pour fermer la fenêtre et créer l'entrée.