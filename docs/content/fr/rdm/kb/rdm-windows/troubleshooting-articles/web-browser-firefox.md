---
eleventyComputed:
  title: Navigateur Web Firefox
---
Firefox en mode intégré ne fonctionne pas dans l'application.
{% snippet, "badgeCaution" %}
Le navigateur Web Firefox est obsolète en mode intégré.
{% endsnippet %}

{{ fr.RDM }} démarre Firefox dans une application séparée (**Embedded32.exe**) puis réintègre l'application à l'intérieur de {{ fr.RDM }}

Firefox ne fonctionne pas lorsque le bouton QuickConnect de Team Viewer est présent dans la barre de titre.
![!!KB4101](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4101.png)

## Solution
Pour résoudre ce problème, vous devez désactiver le bouton ***QuickConnect*** dans Team Viewer en décochant l'option dans ***Extra – Options – Avancé – Afficher les options avancées – Bouton QuickConnect – Configurer – Afficher le bouton QuickConnect***.
