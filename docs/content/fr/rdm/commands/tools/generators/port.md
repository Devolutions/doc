---
eleventyComputed:
  title: Générateur de ports
  description: Le Générateur de ports vous permet de générer des ports pour vos connexions.
---
Le ***Générateur de ports*** vous permet de générer des ports pour vos connexions.

## Paramètres

![Générateur de ports](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6240.png)

| OPTION                             | DESCRIPTION                                                                                                           |
|------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Limites                            | Déterminer la plage de ports pour générer les ports entre ces 2 numéros.                                              |
| Inclure les ports bien connus      | Inclure les ports de la plage 0 à 1023. Ce sont les ports bien connus ou les ports système. Ils sont utilisés par les processus système qui fournissent des types de services réseau largement utilisés. |
| Inclure les ports enregistrés      | Inclure les ports de la plage 1024 à 49151. Ils sont attribués par l'IANA pour un service spécifique sur demande d'une entité requérante. Sur la plupart des systèmes, les ports enregistrés peuvent être utilisés par les utilisateurs ordinaires. |
| Inclure les ports utilisés par d'autres sessions | Inclure les ports qui sont déjà utilisés par d'autres sessions.                           |
