---
title: Configuration de l'entrée Secret Server
description: Suivre ces étapes pour configurer vos entrées afin d'utiliser les identifiants de Secret Server dans Remote Desktop Manager.
keywords:
- secret server
- identifiant
---
# {{ en.TOPICTITLE }} 
L&apos;intégration de ***Secret Server*** est assez simple dans {{ fr.RDM }}. Suivre ces étapes pour configurer vos entrées afin d&apos;utiliser les identifiants de ***Secret Server***.
## Guide étape par étape
<ol>
  <li>Dans {{ fr.RDM }}, créer une nouvelle entrée <b><i>Secret Server</i></b>.</li>
  <li>Dans l&apos;onglet <b><i>Général</i></b> entrer l&apos;<b><i>URL</i></b> que vous utilisez pour vous connecter à l&apos;instance de <b><i>Secret Server</i></b>.</li>

{% snippet icon.badgeNotice %} 
Il s&apos;agira soit de https<area>://server, soit de https<area>://server/SecretServer. 
{% endsnippet %}
 
![URL Secret Server](/img/fr/kb/KB4058.png) 
*URL Secret Server*{.caption}  

  <li>Configuration des identifiants :  
    <ol>
      <li>Si vous êtes le seul à utiliser cette entrée, vous pouvez placer vos identifiants directement sous l&apos;onglet <b><i>Général</i></b>.</li>
      <li>Dans une équipe en partage, sélectionner l&apos;option <b><i>Utiliser &quot;Mes Configurations de Compte&quot;</i></b> sous l&apos;onglet <b><i>Général</i></b>. Une fois l&apos;entrée terminée, chaque utilisateur devra aller dans <b><i>Fichier – Paramètres de mon compte – Secret Server</i></b> pour entrer ses informations.</li>
    </ol>
  </li>

![Mon compte Secret Server](/img/fr/kb/KB4059.png) 
*Mon compte Secret Server*{.caption}  
  <li>L&apos;authentification à deux facteurs (2FA) est prise en charge par l&apos;entrée <b><i>Secret Server</i></b>. 
{% snippet icon.badgeInfo %} 
SAML n&apos;est pas encore pris en charge, mais il devrait l&apos;être dans la version 2023.1 de {{ fr.RDM }}. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Il y a une limitation avec le Rest API, vous ne pouvez pas avoir le 2FA avec Windows Authentication. 
{% endsnippet %}
    <ol>
      <li>Pour ce faire, saisir vos informations au bas de l&apos;entrée <b><i>Secret Server</i></b>. </li>
      <li>Pour le <b><i>Mode d&apos;authentification à 2 facteurs</i></b>, sélectionner <b><i>Demander seulement quand la session expire</i></b>. De cette façon, vous obtiendrez l&apos;invite 2FA lorsque vous ouvrirez {{ fr.RDM }}, et elle devrait durer toute la journée. Vous n&apos;aurez pas besoin de le saisir à nouveau chaque fois que vous voudrez utiliser un identifiant, sauf si c&apos;est ce que vous préférez et dans ce cas, sélectionner <b><i>Demander à chaque connexion</i></b>. </li>
<img src="/img/fr/kb/KB4061.png" alt="Mode d'authentification à 2 facteurs">
<i>Mode d'authentification à 2 facteurs</i> 
      <li>Dans l&apos;onglet <b><i>Choisir les identifiants</i></b>, sélectionner <b><i>Demander la liste</i></b>. </li>
<img src="/img/fr/kb/KB4060.png" alt="Choisir les identifiants">  
<i>Choisir les identifiants</i> 
    </ol>
  </li>
  <li>Dans la session avec laquelle vous voulez utiliser les identifiants de <b><i>Secret Server</i></b> (RDP, etc.), sélectionner les <b><i>Identifiants</i></b> que vous avez créés avec <b><i>Lié (Coffre)</i></b>, puis vous pouvez cliquer sur le bouton <b><i>Sélectionner dans la liste</i></b> pour spécifier le compte que vous souhaitez utiliser. </li>

![Identifiants – Sélectionner dans la liste](/img/fr/kb/KB4062.png) 
*Identifiants – Sélectionner dans la liste*{.caption}  

De cette façon, vous avez une seule entrée de ***Secret Server*** pour toutes les connexions. 
{% snippet icon.badgeNotice %} 
Vous pouvez également, si vous le préférez, sélectionner les identifiants que vous souhaitez directement sous l&apos;onglet ***Choisir les identifiants*** dans l&apos;entrée ***Secret Server***. 
{% endsnippet %}
 </ol>
 

