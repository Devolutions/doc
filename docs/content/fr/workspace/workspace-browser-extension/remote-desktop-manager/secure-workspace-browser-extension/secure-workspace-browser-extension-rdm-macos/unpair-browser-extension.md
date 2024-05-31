```yaml
eleventyComputed:
  title: Dissocier une extension de navigateur (macOS)
```
Dans l'éventualité où vous souhaitez refuser l'accès à {{ fr.RDMMAC }} depuis une extension de navigateur précédemment associée, vous devez la supprimer de {{ fr.RDM }}.

1. Dans {{ fr.RDM }}, aller à ***Fichier – Préférences – Extensions de navigateur***.
1. Dans la section ***Associations {{ fr.WBEX }}***, cliquer avec le bouton droit sur l'entrée et sélectionner ***Supprimer***. Fermer la fenêtre pour enregistrer les modifications.

{% snippet, "badgeInfo" %}
Dans la section ***Associations {{ fr.WBEX }}***, vous trouverez une liste de chaque association faite à {{ fr.RDM }} incluant certaines informations pour les identifier. Cela inclut le nom spécifié au moment de l'association (qui par défaut est le nom du navigateur web), une partie de la clé de chiffrement utilisée entre les deux, sa date de création, et la date à laquelle elle a été utilisée pour la dernière fois.
{% endsnippet %}

![Supprimer l'Association {{ fr.WBEX }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_Dwl4061.png)
