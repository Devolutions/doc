---
eleventyComputed:
  title: Création d'un fichier de vidage de {{ fr.RDM }} bloqué
  description: La procédure suivante utilise un outil proposé par Technet de Microsoft, à savoir la Suite Sysinternals.
---
{% snippet, "shieldWarning" %}
Lors de l'envoi d'un fichier de vidage, il est crucial de faire preuve de prudence et de s'assurer que les étapes sont correctement suivies. S'écarter de ces instructions et envoyer un fichier de vidage complet sans l'orientation d'un spécialiste du support de Devolutions peut entraîner des résultats non souhaités, y compris l'exposition de toutes les données sensibles et personnelles qu'il contient.

Veuillez lire et comprendre notre [Avertissement de sécurité pour l'envoi d'un fichier de vidage](/rdm/mac/kb/rdm-windows/troubleshooting-articles/hung-rdm-dump-file-creation/security-disclaimer-sending-dump-file/) avant de procéder.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Il n'y a aucune garantie que nous puissions identifier le problème, mais suivre cette procédure peut guider notre équipe vers l'identification de la cause principale.
{% endsnippet %}

La procédure suivante utilise un outil proposé par Technet de Microsoft, à savoir la [Suite Sysinternals](https://learn.microsoft.com/en-ca/sysinternals/downloads/). L'outil dont nous avons besoin est ***Process Explorer***. Il surveillera {{ fr.RDM }} et permettra la création d'un fichier de vidage.

{% snippet, "shieldInfo" %}
La taille du fichier de vidage ne doit généralement pas dépasser 100 Mo à 300 Mo. Les fichiers de plus de 1 Go ne sont pas des mini-vidages et contiennent plus d'informations que nécessaire.
{% endsnippet %}

1. Télécharger et installer les utilitaires de la [Suite Sysinternals](https://learn.microsoft.com/en-ca/sysinternals/downloads/).
1. Depuis le dossier d'installation, démarrer l'application **procexp64.exe** ou **procexp.exe**.
1. Lancer {{ fr.RDM }}.
1. Reproduire les étapes qui déclenchent le problème dans {{ fr.RDM }}.
1. Dans ***Process Explorer***, cliquer avec le bouton droit sur le processus **RemoteDesktopManager.exe**.
   {% snippet, "shieldWarning" %}
   À l'étape suivante, s'assurer de créer un minividage et **NON** un vidage complet.
   {% endsnippet %}
1. Sélectionner ***Create Dump – Create Minidump***.
   ![Create Dump – Create Minidump](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2262.png)
1. Sauvegarder le fichier ***RemoteDesktopManager.dmp***.
1. Contacter notre [équipe de support](mailto:service@devolutions.net) pour qu'elle fournisse un lien sécurisé pouvant être utilisé pour leur envoyer ce fichier.
