---
eleventyComputed:
  title: Installation d'une version préliminaire de {{ fr.DWL }}
  description: Lorsqu'une nouvelle version de {{ fr.DWL }} est sur le point de sortir, une version préliminaire peut être disponible. Les étapes d'installation d'une version préliminaire de {{ fr.DWL }} sont différentes de celles d'une version publiée.
---
Lorsqu'une nouvelle version de {{ fr.DWL }} est sur le point de sortir, une version préliminaire peut être disponible. Les étapes d'installation d'une version préliminaire de {{ fr.DWL }} sont différentes de celles d'une version publiée.

Sur cette page sont consignées les instructions pour installer une version préliminaire de {{ fr.DWL }} sur les navigateurs [Chrome](#chrome), [Firefox](#firefox), [Opera](#opera) et [Safari](#safari).

{% snippet icon.badgeInfo %} 
X.X.X.X correspond au numéro de la version (p. ex., 2023.2.1.0).
{% endsnippet %}
 
## Chrome 

1. Télécharger la version Chrome dans le OneDrive située dans **Devolutions-QA/Prereleases/DWL/X.X.X.X/DevolutionsWebLoginChrome.X.X.X.X.zip**. 
1. Décompresser le fichier ZIP. 
1. Ouvrir Chrome. 
1. Saisir "chrome://extensions/" dans la barre d’adresse. 
1. Activer le ***Mode développeur*** (situé dans le coin supérieur droit). 
1. Cliquer sur ***Charger l’extension non empaquetée***. 
1. Sélectionner le fichier décompressé à l’étape 2. 

Et le tour est joué! 

## Firefox 

1. Télécharger la version Firefox dans le OneDrive située dans **Devolutions-QA/Prereleases/DWL/X.X.X.X/DevolutionsWebLoginFirefox.X.X.X.X.xpi**. 
1. Ouvrir Firefox. 
1. Saisir "about:debugging" dans la barre d’adresse. 
1. Cliquer sur ***Ce Firefox***. 
1. Cliquer sur ***Charger un module complémentaire temporaire***. 
1. Sélectionner le fichier ***DevolutionsWebLoginFirefox.X.X.X.X.xpi***.  

Et le tour est joué! 

{% snippet icon.badgeCaution %} 
Le module temporaire sera automatiquement supprimé à la fermeture de Firefox. Il vous faudra l’ajouter à nouveau à la prochaine ouverture du navigateur. 
{% endsnippet %}
 
## Opera 

1. Télécharger la version Opera dans le OneDrive située dans **Devolutions-QA/Prereleases/DWL/X.X.X.X/DevolutionsWebLoginOpera.X.X.X.X.crx**. 
1. Ouvrir Opera. 
1. Saisir "opera://extensions" dans la barre d’adresse. 
1. Glisser-déposer ***DevolutionsWebLoginOpera.X.X.X.X.crx*** dans la fenêtre d’Opera. 

Et le tour est joué! 

## Safari 

{% snippet icon.badgeCaution %} 
La version 16 ou ultérieure de Safari est requise. 
{% endsnippet %}

### Versions 17 et ultérieures de Safari

1. Télécharger la version Safari dans le OneDrive située dans **Devolutions-QA/Prereleases/DWL/X.X.X.X/DevolutionsWebLoginSafari.X.X.X.X.zip**.
1. Décompresser le fichier ZIP.
1. Autoriser les extensions non signées :
   1. Ouvrir Safari.
   1. Accéder à ***Safari – Réglages***. Dans les versions plus anciennes, il peut s'appeler ***Préférences***.
   1. Sélectionner l'onglet ***Avancées***.
   1. Cocher la case ***Afficher les fonctionnalités de développement Web***.
   1. Sélectionner l'onglet ***Développement***.
   1. Cocher la case ***Autoriser les extensions non signées***.
   {% snippet icon.badgeCaution %}
   Le réglage ***Autoriser les extensions non signées*** se réinitialise lorsque vous quittez Safari ; réglez-le à nouveau la prochaine fois que vous lancerez Safari.
   {% endsnippet %}  

1. Activer l'extension {{ fr.DWL }} :
   1. Dans les réglages de Safari, sélectionner l'onglet ***Extensions***.
   1. Repérer l'extension {{ fr.DWL }} dans la liste de gauche et l'activer en cochant la case.
   1. Fermer les réglages de Safari.  

   Si vous avez configuré des profils dans Safari 17 ou une version ultérieure, gérez votre extension pour un profil spécifique :  
   1. Dans les réglages de Safari, sélectionner l'onglet ***Profils***.
   1. Sélectionner un profil dans la liste de gauche.
   1. Sélectionner l'onglet ***Extensions***.
   1. Repérer l'extension {{ fr.DWL }} dans la liste de gauche et l'activer en cochant la case.
   1. Fermer les réglages de Safari.
1. Double-cliquer sur "{{ fr.DWL }}" dans le dossier décompressé.

Et le tour est joué! 

{% snippet icon.badgeHelp %}
Source (EN) : [Running your Safari web extension - Configure Safari in {{ fr.MAC }} to run unsigned extensions](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension#3744467)
{% endsnippet %}

### Versions 16 et antérieures de Safari
1. Télécharger la version Safari dans le OneDrive située dans **Devolutions-QA/Prereleases/DWL/X.X.X.X/DevolutionsWebLoginSafari.X.X.X.X.zip**.
1. Décompresser le fichier ZIP.
1. Autoriser les extensions non signées :
   1. Ouvrir Safari.
   1. Accéder à ***Safari – Réglages***. Dans les versions plus anciennes, il peut s'appeler ***Préférences***.
   1. Sélectionner l'onglet ***Avancées***.
   1. Cocher la case ***Afficher le menu Développement dans la barre des menus***.
   1. Dans la barre des menus, accéder à l'onglet ***Développement***.
   1. Cliquer sur ***Autoriser les extensions non signées***.
   {% snippet icon.badgeCaution %}
   Le réglage ***Autoriser les extensions non signées*** se réinitialise lorsque vous quittez Safari ; réglez-le à nouveau la prochaine fois que vous lancerez Safari.
   {% endsnippet %}  

1. Activer l'extension {{ fr.DWL }} :
   1. Dans les réglages de Safari, sélectionner l'onglet ***Extensions***.
   1. Repérer l'extension {{ fr.DWL }} dans la liste de gauche et l'activer en cochant la case.
   1. Fermer les réglages de Safari.
1. Double-cliquer sur "{{ fr.DWL }}" dans le dossier décompressé.

Et le tour est joué! 

{% snippet icon.badgeHelp %}
Source (EN) : [Running your Safari web extension - Configure Safari in {{ fr.MAC }} to run unsigned extensions](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension#3744467)
{% endsnippet %}
