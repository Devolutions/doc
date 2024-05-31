---
eleventyComputed:
  title: Ajouter une nouvelle entrée dans le {{ fr.UVLT }} sur SQL Azure ne fonctionne pas
---
Vous êtes capable de créer de nouvelles entrées à l'intérieur du {{ fr.VLT }} partagé, mais pas dans le {{ fr.UVLT }}. Vous créez la nouvelle entrée, mais elle n'apparaît jamais sous le {{ fr.UVLT }}.

## Solution
Assurer que l'utilisateur que vous utilisez pour vous authentifier sur la source de données Azure SQL a été créé sous ***Administration – Utilisateurs*** dans {{ fr.RDM }}.

Si l'utilisateur est manquant, la fonctionnalité {{ fr.UVLT }} pour cet utilisateur ne fonctionnera pas.