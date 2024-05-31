```yaml
eleventyComputed:
  title: Dissocier une extension de navigateur (Windows)
```
Dans l'éventualité où vous souhaitez refuser l'accès à {{ fr.RDMWIN }} depuis une extension de navigateur précédemment appariée, vous devez la supprimer de {{ fr.RDM }}.

1. Dans {{ fr.RDM }}, aller à ***Fichier – Paramètres – Extensions de Navigateur***.
1. Dans la section ***Associations {{ fr.WBEX }}***, cliquer sur le bouton ***X*** de l'entrée dans la liste, puis cliquer sur ***OK*** pour sauvegarder les modifications.
{% snippet, "badgeInfo" %}
Dans la section ***Associations {{ fr.WBEX }}***, vous trouverez une liste de chaque association faite à {{ fr.RDM }}, incluant certaines informations pour les identifier. Cela inclut le nom spécifié au moment de l'association (qui par défaut est le nom du navigateur web), une partie de la clé de chiffrement utilisée entre les deux, sa date de création, et la date à laquelle elle a été utilisée pour la dernière fois.
{% endsnippet %}

![Supprimer l'Association {{ fr.WBEX }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_Dwl4061.png)
