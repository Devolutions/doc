---
eleventyComputed:
  title: Configurer LAPS avec une entrée d'identifiants personnalisée
  description: Le guide suivant décrit comment ajouter un script PowerShell dans une entrée d'identifiants personnalisée pour se connecter à une machine distante en utilisant Windows LAPS.
---
Le guide suivant décrit comment ajouter un script PowerShell dans une entrée d'identifiants personnalisée pour se connecter à une machine distante en utilisant [Windows LAPS](https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview) (anciennement Microsoft Laps).

{% snippet, "badgeInfo" %}
Windows LAPS est requis et doit être correctement configuré dans votre environnement pour utiliser cette solution.
{% endsnippet %}

1. Dans {{ fr.RDM }}, créer une nouvelle entrée dans le ruban sous l'onglet ***Modifier***.
1. Dans la gestion des identifiants, sélectionner le type d'entrée ***Personnalisé***.
![Créer une entrée d'identifiants personnalisée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2334.png)
1. Nommer votre entrée et sélectionner son dossier de destination.
1. Dans l'onglet ***Général***, s'assurer que le menu déroulant est réglé sur ***PowerShell***.
![Régler le menu déroulant sur PowerShell](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2335.png)
1. Ajouter le script PowerShell suivant dans la boîte ***Commande***.
   {% snippet, "badgeInfo" %}
   Veuillez noter que le script utilise la variable $HOST$ pour l'interrupteur `-ComputerName` de l'applet de commande `Get-LapsADPassword` et utilise la variable $PARAMETER1$ pour le nom d'utilisateur (voir étape 6 ci-dessous).
   {% endsnippet %}

   ```powershell
   Import-Module LAPS -ErrorAction SilentlyContinue
   $isImport = Get-Module -List LAPS
   if ($isImport)
   {
       try
           {
            $null2 = [System.DirectoryServices.ActiveDirectory.Domain]::GetComputerDomain()
            $isDomain = $true
           }
       catch
           {
            $isDomain = $false
           }

       if ($isDomain)
       {
           $MyPassword=Get-LapsADPassword -Identity $PARAMETER1$ -AsPlainText
           if ($MyPassword.Password)
              {
               $Result.Username="%USERNAME%"
               $Result.Password=$MyPassword.Password
              }
           else
              {
               $Result.Cancel=$True
               $Result.ErrorMessage="LAPS n'a retourné aucune valeur !"
              }
       }
       else
       {
           $Result.Cancel=$True
           $Result.ErrorMessage="Votre ordinateur doit être connecté à un domaine pour utiliser les fonctionnalités de LAPS !"
       }
   }
   else
   {
           $Result.Cancel=$True
           $Result.ErrorMessage="Le module LAPS doit être installé dans cette architecture !"
   }
   ```

   ![Ajouter le script PowerShell](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2336.png)
1. Dans l'onglet ***Paramètres***, ajouter le nom du compte administrateur local dans le champ ***Paramètre #1***.
![Définir le nom du compte administrateur local](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2337.png)
1. Cliquer sur ***Ajouter*** pour sauvegarder l'entrée dans le dossier de destination spécifié.
1. Dans les propriétés de votre entrée RDP, régler la propriété des identifiants pour utiliser l'entrée d'identifiants ***Personnalisée*** nouvellement créée.
![Régler le paramètre des identifiants pour utiliser l'entrée d'identifiants personnalisée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2338.png)
1. Toujours dans les propriétés de l'entrée RDP, aller à ***Avancé – Avancé***.
1. Régler la propriété ***Remplacer le domaine*** sur ***Utiliser le nom d'hôte*** et la ***propriété Format du nom d'utilisateur*** sur ***{Domaine}\\{Utilisateur}***.
![Régler les propriétés avancées](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2339.png)
1. Cliquer sur ***Mettre à jour*** pour sauvegarder vos modifications.

L'entrée RDP est maintenant prête à être utilisée et se connecter avec le compte administrateur local géré par Windows LAPS.
