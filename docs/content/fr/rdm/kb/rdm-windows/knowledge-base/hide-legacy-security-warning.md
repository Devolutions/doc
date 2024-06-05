---
eleventyComputed:
  title: Masquer la boîte d'avertissement de suppression de la sécurité héritée dans {{ fr.RDM }}
---
{% snippet, "badgeWarning" %}
La sécurité héritée a été dépréciée et sera complètement supprimée à partir de la version 2023.3 de {{ fr.RDM }}. Voir [Désactiver la sécurité héritée dans {{ fr.RDM }}](/rdm/kb/rdm-windows/how-to-articles/migrate-legacy-security-permissions/).
{% endsnippet %}

![Boîte d'avertissement de suppression de la sécurité héritée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6055.png)

La boîte d'avertissement ne peut pas être masquée de manière permanente de l'interface, mais une solution manuelle est disponible.
1. Fermer {{ fr.RDM }}.
1. Aller à votre barre de recherche Windows et taper **%localappdata%**. Appuyer sur Entrée ou cliquer dessus.
![Barre de recherche Windows](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6058.png)
1. Aller à **Devolutions\RemoteDesktopManager\RemoteDesktopManager.cfg**.
![AppData\Local\Devolutions\RemoteDesktopManager\RemoteDesktopManager.cfg](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6056.png)
1. Éditer **RemoteDesktopManager.cfg** en utilisant votre éditeur de texte préféré.
1. Ajouter les lignes suivantes au fichier :
   ```
   <HideLegacySecurityWarning>true</HideLegacySecurityWarning>
   <HideMySQLWarning>true</HideMySQLWarning>
   ```
   ![HideLegacySecurityWarning et HideMySQLWarning](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6057.png)
1. Sauvegarder votre fichier.
1. Ouvrir {{ fr.RDM }}.

La boîte d'avertissement de suppression de la sécurité héritée devrait maintenant être masquée.