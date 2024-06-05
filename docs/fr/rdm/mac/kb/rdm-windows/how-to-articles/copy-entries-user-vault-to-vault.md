---
eleventyComputed:
  title: Copier des entrées de votre {{ fr.UVLT }} vers un {{ fr.VLT }}
  description: Pour pouvoir copier certaines entrées stockées dans votre {{ fr.UVLT }} vers un autre {{ fr.VLT }} sans faire d'export/import dans {{ fr.RDM }}, certaines étapes sont nécessaires.
---
Pour pouvoir copier certaines entrées stockées dans votre {{ fr.UVLT }} vers un autre {{ fr.VLT }} sans faire d'export/import dans {{ fr.RDM }}, suivre les étapes ci-dessous.

{% snippet, "badgeCaution" %}
Pour que cela fonctionne, certaines permissions dans ***Administration – Permissions Système*** doivent être autorisées pour les utilisateurs standards.  
* Fonction de copie : Activer les permissions ***Exporter*** et ***Copier le Mot de Passe*** sur le dossier source.  
* Fonction de collage : Activer les permissions ***Importer*** et ***Ajouter*** sur le dossier de destination.  
{% endsnippet %}  

1. Sélectionner les entrées de votre {{ fr.UVLT }} que vous souhaitez ajouter à votre principal {{ fr.VLT }}.
1. Faire un clic droit sur votre sélection.
1. Sélectionner ***Presse-papiers – Copier***.
1. S'assurer que l'option ***Changer l'ID*** est cochée dans la fenêtre ***Options de Copie***.
1. Se déplacer vers votre principal {{ fr.VLT }}, sélectionner le dossier dans lequel vous souhaitez ajouter vos entrées, puis faire un clic droit dessus.
1. Sélectionner ***Presse-papiers – Coller***.

Vos entrées devraient maintenant être copiées dans le {{ fr.VLT }} de destination.
