---
eleventyComputed:
  title: "{{ fr.DGW }} chemin d'enregistrement"
  description: Ce sujet sert de référence pour des informations générales sur l'enregistrement {{ fr.DGW }}.
---
Ce sujet sert de référence pour des informations générales sur l'enregistrement {{ fr.DGW }}.

{% snippet, "badgeInfo" %}
Le format d'enregistrement est WebM et la taille du fichier est d'environ 15 kb/s, selon la compression.
{% endsnippet %}

Le chemin d'enregistrement peut être défini dans la {{ fr.DVLSCONSOLE }} uniquement.

![Chemin d'enregistrement dans la {{ fr.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/DVLSCONSOLE4010_2024_2.png)

Voici quelques considérations importantes :
* Si le nouveau chemin est défini vers un emplacement réseau, comme un dossier partagé ou un chemin UNC, être conscient que cela peut impacter le trafic réseau, entrant et sortant.
* Confirmer que le compte opérant le service de passerelle a les permissions nécessaires pour accéder à la fois aux fichiers de la passerelle et au partage de fichiers.