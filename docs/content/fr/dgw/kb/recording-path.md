---
eleventyComputed:
  title: "{{ fr.DGW }} chemin d'enregistrement"
  description: Ce sujet sert de référence pour des informations générales sur l'enregistrement {{ fr.DGW }}.
---
Ce sujet sert de référence pour des informations générales sur l'enregistrement {{ fr.DGW }}.

{% snippet, "badgeInfo" %}
Le format d'enregistrement est WebM et la taille du fichier est d'environ 15 ko/s, selon la compression.
{% endsnippet %}

Le paramètre `RecordingPath` peut être ajouté au fichier **.json** puis modifié pour changer l'endroit où les enregistrements sont sauvegardés. Le fichier se trouve sous **C:\ProgramData\Devolutions\Gateway\gateway.json**.

Voici quelques considérations importantes :
* Si le nouveau chemin est défini sur un emplacement réseau, comme un dossier partagé ou un chemin UNC, soyez conscient que cela peut impacter le trafic réseau, entrant et sortant.
* Étant donné qu'il s'agit d'un fichier **.json**, assurez-vous que le chemin est correctement formaté avec des doubles barres obliques inversées, par exemple : `"RecordingPath": "\\\\vwinsrvdata\\Recording\\"`.
* Confirmez que le compte exploitant le service de passerelle a les permissions nécessaires pour accéder à la fois aux fichiers de la passerelle et au partage de fichiers.
