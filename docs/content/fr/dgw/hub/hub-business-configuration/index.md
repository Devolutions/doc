---
eleventyComputed:
  title: "{{ fr.DGW }} configuration avec {{ fr.DHUBB }}"
  order: 30
  description: "{{ fr.DGW }} offre une alternative flexible et sécurisée aux VPN, permettant une gestion facile de l'accès et une utilisation efficace des ressources réseau."
---
{{ fr.DGW }} permet des connexions juste-à-temps au niveau de la session, éliminant le besoin de changer la configuration globale du système. {{ fr.DGW }} offre une alternative flexible et sécurisée aux VPN, permettant une gestion facile de l'accès et une utilisation efficace des ressources réseau.

{% snippet, "badgeInfo" %}
Chaque licence {{ fr.DHUBB }} vient avec une licence {{ fr.DGW }} gratuite qui supporte jusqu'à 5 sessions concurrentes.
{% endsnippet %}

{% snippet, "badgeCaution" %}
Si vos clients échouent à se connecter avec {{ fr.DGW }}, assurez-vous que le certificat contient toute la chaîne. Cette chaîne de certificats inclut tous les certificats intermédiaires. Par exemple : Autorité de Certification Racine – Autorité de Certification Intermédiaire Sécurisée – Certificat XYZ Acheté
{% endsnippet %}  

## Étapes pour l'installation manuelle
Les instructions suivantes expliquent comment installer manuellement {{ fr.DGW }} via {{ fr.DHUBB }}.

{% snippet, "badgeCaution" %}
Comme l'installateur est un fichier MSI, cette méthode fonctionne uniquement sur Windows.
{% endsnippet %}

1. Se connecter avec un compte {{ fr.DHUBB }} administrateur.
1. Cliquer sur l'onglet ***Administration***.  
![Onglet Administration](https://cdnweb.devolutions.net/docs/HUBB0005_2024_1.png)
1. Cliquer sur {{ fr.DGW }}, qui se trouve sous la section ***Gestion***.  
![{{ fr.DGW }}](https://cdnweb.devolutions.net/docs/HUBB0006_2024_1.png)
1. Cliquer sur le bouton ***Plus*** en haut à droite.  
![Bouton Plus](https://cdnweb.devolutions.net/docs/HUBB0007_2024_1.png)
1. Cliquer sur ***Télécharger la clé publique***. Cette clé est unique au compte {{ fr.DHUBB }}. Elle est automatiquement renommée en *provisioner.pem*. Garder une trace de l'endroit où vous avez sauvegardé cette clé, car vous en aurez besoin plus tard.  
![Clé publique de la passerelle](https://cdnweb.devolutions.net/docs/HUBB0009_2024_1.png)
1. Sélectionner ***Télécharger MSI*** dans le menu déroulant.  
![Télécharger MSI](https://cdnweb.devolutions.net/docs/HUBB0008_2024_1.png)
1. Exécuter l'installateur.
   {% snippet, "badgeInfo" %}
   L'installateur doit être exécuté sur le serveur hébergeant {{ fr.DGW }}.
   {% endsnippet %}
1. Cliquer ***Suivant***.  
![Assistant d'installation](https://cdnweb.devolutions.net/docs/HUBB0010_2024_1.png)
1. Une fois le chemin d'installation souhaité sélectionné, cliquer ***Suivant***.  
![Dossier de destination](https://cdnweb.devolutions.net/docs/HUBB0011_2024_1.png)
1. Cliquer ***Suivant***.  
![Configurer l'installation de la passerelle](https://cdnweb.devolutions.net/docs/HUBB0012_2024_1.png)
   {% snippet, "badgeInfo" %}
   Les options supplémentaires sont pour l'interface web {{ fr.DGW }} Standalone et l'intégration ngrok, qui ne sont pas nécessaires pour {{ fr.DHUB }}.
   {% endsnippet %}
1. Changer les ***Ports*** à la valeur souhaitée et cliquer ***Suivant***.
![Écouteurs](https://cdnweb.devolutions.net/docs/HUBB0013_2024_1.png)
   {% snippet, "badgeInfo" %}
   Les ports par défaut HTTP(S) et TCP sont 7171 et 8181, respectivement, mais peuvent être changés. De plus, si un proxy inverse n'est pas utilisé, l'***Écouteur HTTP*** devrait avoir le même port que l'***URI d'accès***.
   {% endsnippet %}
1. Entrer l'URI d'accès {{ fr.DHUBB }} et cliquer ***Suivant***.
![URI d'accès](https://cdnweb.devolutions.net/docs/HUBB0014_2024_1.png)
1. Après avoir cliqué sur le bouton des points de suspension en haut, sélectionner soit un fichier PFX soit un fichier Certificat, puis entrer le mot de passe correspondant. (Si l'écouteur est ***HTTP*** cette étape est automatiquement sautée)
![Certificat](https://cdnweb.devolutions.net/docs/HUBB0015_2024_1.png)
1. Cliquer sur le bouton des points de suspension et sélectionner la ***Clé Publique du Provisionneur*** qui a été générée à l'étape 5.  
![Fichier de clé publique](https://cdnweb.devolutions.net/docs/HUBB0016_2024_1.png)
1. Cet écran montre un résumé des chemins/paramètres actuels. Il est possible de revenir ***En arrière*** et de les modifier. Si les paramètres sont corrects, cliquer ***Suivant***.  
![Résumé de la configuration de la passerelle](https://cdnweb.devolutions.net/docs/HUBB0017_2024_1.png)
1. Cliquer ***Installer***.  
![Bouton Installer](https://cdnweb.devolutions.net/docs/HUBB0018_2024_1.png)
1. Cliquer ***Terminer*** lorsque l'installation est complète.  
![Bouton Terminer](https://cdnweb.devolutions.net/docs/HUBB0019_2024_1.png)
1. Revenir à la page ***Administration*** – ***{{ fr.DGW }}*** dans {{ fr.DHUBB }}.
1. Entrer les informations correctes.
![Champs d'information](https://cdnweb.devolutions.net/docs/HUBB0020_2024_1.png)
   {% snippet, "badgeInfo" %}
   Une fois l'URL {{ fr.DGW }} entrée, cliquer sur le bouton ***Auto-Détecter*** à côté du Nom d'hôte TCP pour remplir la valeur automatiquement.
   {% endsnippet %}
1. En cochant la case ***Défaut***, cette {{ fr.DGW }} sera celle sélectionnée si aucune n'est spécifiée ou si ***Défaut*** est choisi lors de la connexion.  
![Option par défaut](https://cdnweb.devolutions.net/docs/HUBB0021_2024_1.png)
1. S'assurer que la passerelle peut être atteinte en cliquant sur ***Tester la connexion***.  
![Bouton Tester la connexion](https://cdnweb.devolutions.net/docs/HUBB0022_2024_1.png)
1. Cliquer sur le bouton ***Ajouter*** pour lier votre installation {{ fr.DGW }} à votre {{ fr.DHUBB }}.  
![Bouton Ajouter](https://cdnweb.devolutions.net/docs/HUBB0023_2024_1.png)
1. Un rectangle montrera les informations pour chaque lien(s) de Hub {{ fr.DGW }}.  
![Lien réussi](https://cdnweb.devolutions.net/docs/HUBB0024_2024_1.png)
{% snippet, "badgeInfo" %}
Visiter [Configuration {{ fr.RDM }}](/dgw/hub/rdm-configuration/) pour en savoir plus sur la liaison entre {{ fr.RDM }} et {{ fr.DGW }}.
{% endsnippet %}
