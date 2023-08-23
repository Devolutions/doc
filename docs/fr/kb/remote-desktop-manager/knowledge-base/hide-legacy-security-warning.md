---
eleventyComputed:
  title: Masquer la boîte d'avertissement de la suppression de l'ancienne sécurité dans {{ fr.RDM }}
  description: Comment masquer l'avertissement de la suppression de l'ancienne sécurité dans {{ fr.RDM }}
---
{% snippet icon.badgeWarning %}
L'ancienne sécurité a été dépréciée et sera complètement supprimée à partir de la version 2023.3 de {{ en.RDM }}. Voir [Migration de l'ancienne sécurité vers les permissions dans {{ fr.RDM }}](/fr/kb/remote-desktop-manager/how-to-articles/migrate-legacy-security-permissions/).
{% endsnippet %}  

![Boîte d'avertissement de la suppression de l'ancienne sécurité](https://webdevolutions.blob.core.windows.net/docs/fr/kb/KB2090.png) 

La boîte d'avertissement ne peut pas être masquée de façon permanente dans l'interface, mais une solution manuelle est disponible.  

1. Fermer {{ fr.RDM }}.
1. Se rendre jusqu'à la barre de recherche Windows et y taper **%localappdata%**. Appuyer sur Entrée ou cliquer sur le résultat.
![Barre de recherche Windows](https://webdevolutions.blob.core.windows.net/docs/fr/kb/KB2093.png)   
1. Naviguer jusqu'à **Devolutions\RemoteDesktopManager\RemoteDesktopManager.cfg**.
![AppData\Local\Devolutions\RemoteDesktopManager\RemoteDesktopManager.cfg](https://webdevolutions.blob.core.windows.net/docs/fr/kb/KB2091.png)  
1. Modifier **RemoteDesktopManager.cfg** en utilisant votre éditeur de texte favori.  
1. Ajouter au fichier les lignes suivantes :
   ```
          <HideLegacySecurityWarning>true</HideLegacySecurityWarning>
          <HideMySQLWarning>true</HideMySQLWarning>
   ```  
   ![HideLegacySecurityWarning et HideMySQLWarning](https://webdevolutions.blob.core.windows.net/docs/fr/kb/KB2092.png)  
6. Sauvegarder le fichier.
1. Ouvrir {{ fr.RDM }}.  

La boîte d'avertissement de la suppression de l'ancienne sécurité devrait maintenant être masquée.
