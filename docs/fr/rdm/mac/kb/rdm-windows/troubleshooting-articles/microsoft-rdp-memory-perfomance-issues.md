---
eleventyComputed:
  title: Problèmes de mémoire et de performance avec Microsoft RDP
  description: Problèmes de mémoire et de performance avec Microsoft RDP
---
**Vous ne pouvez exécuter que quelques sessions RDP en même temps dans {{ fr.RDM }} et vous souhaitez pouvoir ouvrir plus de sessions.**

La quantité de mémoire consommée est dictée par la technologie distante et, dans le cas de RDP, par le système d'exploitation (OS) de l'hôte distant.

Les sessions Windows 11 / Windows Server 2022 consomment plus de 150 Mo, alors que les versions précédentes consommaient environ la moitié de cela. C'est quelque chose sur lequel nous n'avons aucun contrôle. Chercher des applications conscientes de la grande mémoire ou utiliser l'édition 64 bits de {{ fr.RDM }}.

**L'initiation de session RDP est lente lors de l'utilisation de {{ fr.RDM }} dans un environnement virtuel.**

Ce problème est quelque chose que nous avons également expérimenté dans ces conditions (notre environnement de test est virtuel et dispose d'une mémoire minimale pour chaque invité).

Dans l'onglet ***Expérience*** de votre session RDP, désactiver tout ce qui n'est pas utilisé. Une bonne méthode est de sélectionner la ***vitesse de connexion Modem*** : cela désactivera tous les paramètres liés à l'apparence. Vous pouvez ensuite activer un seul paramètre pour voir s'il affecte négativement la performance. Répéter jusqu'à trouver la combinaison qui fonctionne le mieux pour vous.

**Vous utilisez RDP en mode intégré et la session distante est extrêmement lente à répondre. La session se charge bien, mais une fois connecté à l'ordinateur distant, il devient non réactif. Les clics de souris, les pressions de touches et le chargement des applications sont extrêmement lents. En mode externe, tout fonctionne bien.**

1. Désactiver votre anti-virus et tester la connexion pour voir si cela fait une différence.
    * Si vous utilisez Trend Micro Business Security, ajouter **RemoteDesktopManager.exe**, **RemoteDesktopManager64.exe**, et **Embedded32.exe** à la ***liste d'exceptions de processus*** sous ***Préférences – Paramètres globaux*** et mettre à jour le ***client Trend***.
    * Si vous utilisez Symantec Norton Internet Security, assurez-vous de permettre à {{ fr.RDM }} d'accéder à Internet dans les Règles de programme.
1. Désactiver tous les paramètres dans l'onglet ***Ressources locales***.
1. Activer ***Désactiver la mise à l'échelle de l'affichage*** sur les paramètres DPI élevés dans les options.
1. Télécharger et installer Microsoft RDCMan pour voir si cela est lié à l'ActiveX RDP. {{ fr.RDM }} utilise la même technologie et cela garantira que votre poste de travail n'a pas de problèmes de configuration.

**Les connexions échouent pour certains hôtes.**

Il existe des mises à jour de sécurité connues qui ont rompu la connectivité à un hôte, mais elles ont été corrigées dans des correctifs ultérieurs. Si vous gardez les hôtes à jour, alors cela doit être autre chose.

Parfois, le mappage des appareils locaux peut causer des problèmes. Désactiver tous les paramètres dans l'onglet ***Ressources locales***.

![!!KB4051](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4051.png)
