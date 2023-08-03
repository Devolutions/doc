---
eleventyComputed:
  title: Configuration de l'entrée Secret Server
  description: Suivre ces étapes pour configurer vos entrées afin d'utiliser les identifiants de Secret Server dans {{ fr.RDM }}.
  keywords:
  - secret server
  - identifiant
---
L'intégration de ***Secret Server*** est assez simple dans {{ fr.RDM }}. Suivre ces étapes pour configurer vos entrées afin d'utiliser les identifiants de ***Secret Server***.
## Guide étape par étape
<ol>
  <li>Dans {{ fr.RDM }}, créer une nouvelle entrée <b><i>Secret Server</i></b>.</li>
  <li>Dans l'onglet <b><i>Général</i></b> entrer l'<b><i>URL</i></b> que vous utilisez pour vous connecter à l'instance de <b><i>Secret Server</i></b>.</li>

{% snippet icon.badgeNotice %} 
Il s'agira soit de https<area>://server, soit de https<area>://server/SecretServer. 
{% endsnippet %}
 
![URL Secret Server](https://webdevolutions.azureedge.net/docs/fr/kb/KB4058.png) 

  <li>Configuration des identifiants :  
    <ol>
      <li>Si vous êtes le seul à utiliser cette entrée, vous pouvez placer vos identifiants directement sous l'onglet <b><i>Général</i></b>.</li>
      <li>Dans une équipe en partage, sélectionner l'option <b><i>Utiliser "Mes Configurations de Compte"</i></b> sous l'onglet <b><i>Général</i></b>. Une fois l'entrée terminée, chaque utilisateur devra aller dans <b><i>Fichier – Paramètres de mon compte – Secret Server</i></b> pour entrer ses informations.</li>
    </ol>
  </li>

![Mon compte Secret Server](https://webdevolutions.azureedge.net/docs/fr/kb/KB4059.png) 

  <li>L'authentification à deux facteurs (2FA) est prise en charge par l'entrée <b><i>Secret Server</i></b>. 
{% snippet icon.badgeInfo %} 
SAML n'est pas encore pris en charge, mais il devrait l'être dans la version 2023.1 de {{ fr.RDM }}. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Il y a une limitation avec le Rest API, vous ne pouvez pas avoir le 2FA avec Windows Authentication. 
{% endsnippet %}
    <ol>
      <li>Pour ce faire, saisir vos informations au bas de l'entrée <b><i>Secret Server</i></b>. </li>
      <li>Pour le <b><i>Mode d'authentification à 2 facteurs</i></b>, sélectionner <b><i>Demander seulement quand la session expire</i></b>. De cette façon, vous obtiendrez l'invite 2FA lorsque vous ouvrirez {{ fr.RDM }}, et elle devrait durer toute la journée. Vous n'aurez pas besoin de le saisir à nouveau chaque fois que vous voudrez utiliser un identifiant, sauf si c'est ce que vous préférez et dans ce cas, sélectionner <b><i>Demander à chaque connexion</i></b>. </li>
<img src="https://webdevolutions.azureedge.net/docs/fr/kb/KB4061.png" alt="!!Mode d'authentification à 2 facteurs">
<i>Mode d'authentification à 2 facteurs</i> 
      <li>Dans l'onglet <b><i>Choisir les identifiants</i></b>, sélectionner <b><i>Demander la liste</i></b>. </li>
<img src="https://webdevolutions.azureedge.net/docs/fr/kb/KB4060.png" alt="!!Choisir les identifiants">  
<i>Choisir les identifiants</i> 
    </ol>
  </li>
  <li>Dans la session avec laquelle vous voulez utiliser les identifiants de <b><i>Secret Server</i></b> (RDP, etc.), sélectionner les <b><i>Identifiants</i></b> que vous avez créés avec <b><i>Lié (Coffre)</i></b>, puis vous pouvez cliquer sur le bouton <b><i>Sélectionner dans la liste</i></b> pour spécifier le compte que vous souhaitez utiliser. </li>

![Identifiants – Sélectionner dans la liste](https://webdevolutions.azureedge.net/docs/fr/kb/KB4062.png) 

De cette façon, vous avez une seule entrée de ***Secret Server*** pour toutes les connexions. 
{% snippet icon.badgeNotice %} 
Vous pouvez également, si vous le préférez, sélectionner les identifiants que vous souhaitez directement sous l'onglet ***Choisir les identifiants*** dans l'entrée ***Secret Server***. 
{% endsnippet %}
 </ol>
 

