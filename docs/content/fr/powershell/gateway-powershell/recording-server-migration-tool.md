---
eleventyComputed:
  title: Outil de migration de serveur d'enregistrement hérité
  description: Ce script PowerShell transforme les fichiers d'enregistrement de session du serveur d'enregistrement hérité Devolutions au format d'enregistrement de session {{ fr.DGW }}.
---
Ce script PowerShell transforme les fichiers d'enregistrement de session du serveur d'enregistrement hérité Devolutions au format d'enregistrement de session {{ fr.DGW }}, vous permettant de migrer sans perdre les enregistrements précédents. Une fois les fichiers convertis au nouveau format, ils devront être réindexés depuis {{ fr.DVLS }} afin qu'ils puissent être trouvés dans leur nouvel emplacement pour la lecture depuis {{ fr.DGW }}.

La réindexation permet la détection des enregistrements présents du côté {{ fr.DGW }}, rendant possible le transfert manuel des fichiers puis la réindexation. Cependant, il n'est pas possible de simplement glisser-déposer les fichiers dans le dossier ; un format spécifique doit être respecté.

Téléchargez le [MigrateRecordings.ps1](https://github.com/Devolutions/devolutions-gateway/blob/master/tools/legacy-recording/MigrateRecordings.ps1) et exécutez-le depuis un terminal PowerShell élevé avec le chemin de sortie de l'enregistrement hérité comme paramètre :

```powershell
PS > .\MigrateRecordings.ps1 -LegacyPath "C:\inetpub\recording\output"
Migrating recordings to 'C:\ProgramData\Devolutions\Gateway\recordings'
Migrating 7e05bf2d-c97b-44eb-b256-351b3e2ef1f0 (075503d9-d016-496e-b0aa-cab8b020ce2d)
Migrating 2115ab16-308c-4eb4-a871-73bc8fd69022 (0f366b0e-e09d-4f57-b290-779f46fb68fd)
Migrating 479930c5-705a-4051-9edf-bdc2748452a4 (39a7d0ec-339e-4086-8d73-fbf455e1038a)
Migrating 2e3d219b-48a3-432a-b214-f11b8ddaa32e (b3409164-078b-4013-b4f6-9a4663d3df98)
```

Si {{ fr.DGW }} est configuré pour utiliser un emplacement non par défaut, le `-RecordingsPath` peut être utilisé pour remplacer le chemin de destination par défaut. Vous pouvez également effectuer la migration sur une machine pour copier manuellement les fichiers vers le chemin d'enregistrements {{ fr.DGW }} sur une machine différente.

{% snippet, "badgeHelp" %}
Un [fichier legacy.zip d'exemple](https://github.com/Devolutions/devolutions-gateway/blob/master/tools/legacy-recording/legacy.zip) contenant des enregistrements hérités est disponible pour référence et tester ce script.
{% endsnippet %}
