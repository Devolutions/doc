---
title: Mise à niveau de la base de données
---
Cette rubrique s&apos;applique aux installations avec des sources de données qui utilisent une base de données comme stockage de données.  

Certaines versions de {{ fr.RDM }} doivent modifier la structure de la base de données. Celles-ci sont effectuées automatiquement pour vous, mais il est préférable d&apos;effectuer une sauvegarde de votre source de données au préalable. De plus, si vous êtes dans un environnement d&apos;équipe, vous devez être le seul utilisateur connecté à la base de données pendant la mise à niveau. 

{% snippet icon.badgeWarning %} 
L&apos;utilisateur effectuant la mise à jour doit disposer de privilèges administratifs sur la base de données sous-jacente ( SYSDBA or DB_OWNER ). 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Effectuer une sauvegarde de la base de données et assurez-vous que vous pouvez effectuer rapidement une restauration si nécessaire. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Si votre organisation autorise un cache hors ligne en lecture/écriture, assurez-vous que tous vos utilisateurs ont fusionné leurs modifications hors ligne. 
{% endsnippet %}
 
## Étapes 

Suivre ces étapes pour réussir une mise à jour de version: 

1. Assurez-vous d&apos;être le seul utilisateur de la base de données pendant le processus de mise à niveau. Si votre environnement autorise une utilisation hors ligne, demandez à votre équipe de passer en mode hors ligne; ou les faire basculer vers une autre source de données. 
1. Sauvegarder votre base de données à l&apos;aide des outils de base de données. 
1. Installer la version souhaitée de {{ fr.RDM }} , l&apos;utilisation du modèle de déploiement [Portable (USB)](/fr/rdm/windows/installation/client/portable-usb/) peut être souhaitable si vous effectuez cette opération sur votre poste de travail personnel. 
1. Ouvrir {{ fr.RDM }} tout en étant connecté en tant qu&apos;utilisateur avec des droits administratifs. Vous devez également être SYSDBA ou DB_OWNER . 
1. Un message de mise à niveau peut vous apparaitre lors de l&apos;accès à votre source de données. Si c&apos;est le cas, acceptez la mise à niveau.  
    **ou**  
    À l&apos;aide de ***Fichier – Sources de données*** , rechercher votre source de données à mettre à niveau et ouvrez sa fenêtre de propriétés. Cliquer sur l&apos;onglet ***Mise à niveau*** , puis sur ***Mettre à jour la base de données*** . 
1. Attendre une boîte de dialogue de confirmation. 
1. Fermer la boîte de dialogue. 
1. Assurez-vous que votre application {{ fr.RDM }} utilise actuellement cette source de données. 
1. Appuyer CTRL+F5 pour forcer une actualisation complète. 
1. Valider le contenu et effectuez une vérification des technologies critiques dans votre environnement. 
1. Mettre à jour le logiciel client sur tous les postes de travail. 

