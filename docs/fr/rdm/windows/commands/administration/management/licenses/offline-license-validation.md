---
eleventyComputed:
  title: Licence hors ligne 
  description: Les licences téléchargées sont stockées et validées en local jusqu'à leur expiration. La clé des licences déjà enregistrées dans le produit continuera d'être validée à partir de la clé de licence jusqu'à leur expiration.
---

Chaque clé de licence est associée à un fichier de licence (.lic) contenant les informations de la licence (produit, date d'expiration, nombre de licences, etc.).

Les licences téléchargées sont stockées et validées en local jusqu'à leur expiration. La clé des licences déjà enregistrées dans le produit continuera d'être validée à partir de la clé de licence jusqu'à leur expiration.

Lorsqu'une clé de licence est saisie dans {{ fr.RDM }}, le fichier de licence associé est téléchargé automatiquement. Le fichier de licence peut également être téléchargé depuis le [{{ fr.DPORTAL }}](portal.devolutions.com).

{% snippet icon.badgeInfo %}
Les installations de {{ fr.RDM }} et de {{ fr.DVLS }} utilisant des licences anciennes (*legacy*) récupèreront automatiquement la licence lors de la mise à jour vers 2023.3.
{% endsnippet %}  

## Comment ajouter une licence à partir du fichier

Pour les essais, le fichier de licence est envoyé avec le courriel contenant la clé de licence. Les licences peuvent également être téléchargées depuis le [{{ fr.DPORTAL }}](portal.devolutions.com).

Chaque clé de licence  peut être importée en cliquant sur le bouton ***Importer*** dans la fenêtre ***Gestion des utilisateurs et de la sécurité*** dans {{ fr.RDM }}. 

1. Aller dans ***Administration*** - ***Licences*** dans le ruban de {{ en.RDM }}.  
![Administration – Licences](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6072.png)  
1. Cliquer sur ***Ajouter une licence*** dans la fenêtre ***Gestion des utilisateurs et de la sécurité***.  
![Administration – Licences – Gestion des utilisateurs et de la sécurité – Ajouter une licence](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6073.png)  
1. Sélectionner ***Importer***.
1. Importer votre licence et cliquez ***OK***.    
![Administration – Licences – Gestion des utilisateurs et de la sécurité – Ajouter une licence – Importer](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6074.png)  

### {{ en.RDM }} n'a pas d'accès Internet lors de l'ajout de la licence

Si {{ fr.RDM }} ou {{ fr.DVLS }} n'a pas d'accès à Internet, un message sera affiché invitant l'utilisateur à télécharger la licence depuis le [{{ fr.DPORTAL }}](portal.devolutions.com).

