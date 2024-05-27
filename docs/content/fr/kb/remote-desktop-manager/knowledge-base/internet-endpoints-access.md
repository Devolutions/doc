---
eleventyComputed:
  title: Liste des points de terminaison auxquels {{ fr.RDM }} accède
  description: Voici la liste des adresses que {{ fr.RDM }} pourrait utiliser durant les activités normales, ainsi que les paramètres qui sont utilisés pour activer/désactiver ces accès.
  keywords: 
  - endpoints
---
Voici la liste des adresses que {{ fr.RDM }} pourrait utiliser durant les activités normales, ainsi que les paramètres qui sont utilisés pour activer/désactiver ces accès.  

{% snippet, "badgeWarning" %}
{{ fr.RDM }} est un outil qui intègre plus de 150 technologies. Cette liste contient uniquement les points d'extrémité auxquels le produit principal accède. Nous utilisons une approche de « meilleur effort » pour maintenir cette liste à jour, mais celle-ci ne remplace pas les meilleures pratiques de sécurité TI. Si la sécurité est primordiale, il serait préférable de bloquer d'abord tout accès à Internet, puis de mettre les adresses souhaitées sur une liste d'autorisation si nécessaire.
{% endsnippet %}  

{% snippet, "shieldNotice" %}
Dans le cadre d'une visite standard d'un site Web utilisant le protocole HTTPS, le certificat utilisé par le site distant est validé à l'aide des meilleures pratiques de l'industrie. Un certificat contient plusieurs URL auxquelles on accède pour effectuer la validation. Les URL varient non seulement pour chaque site, mais aussi au fil du temps, chaque fois qu'ils sont renouvelés. Apprenez-en plus sur la [Validation d'un certificat](/kb/remote-desktop-manager/knowledge-base/certificate-validation) (EN).
{% endsnippet %}  

## Liste des points de terminaison

<table>
	<tr>
		<td>
Description
		</td>
		<td>
URL
		</td>
		<td>
Paramètre(s) / Action associé(s)
		</td>
	</tr>
	<tr>
		<td>
Vérifier les mises à jour {{ fr.RDM }}
		</td>
		<td>
https<area>://devolutions.net
		</td>
		<td>
Fichier – Options – Démarrage de l'application – Activer la vérification des mises à jour
		</td>
	</tr>
	<tr>
		<td>
Mise à jour {{ fr.RDM }} - téléchargement des paquets
		</td>
		<td>
https<area>://cdn.devolutions.net
		</td>
		<td>
Action de l'utilisateur dans la boîte de dialogue de mise à niveau disponible
		</td>
	</tr>
	<tr>
		<td>
{{ fr.DC }} - nos services en ligne
		</td>
		<td>
https<area>://cloud.devolutions.net
		</td>
		<td>
Fichier – {{ fr.DA }}
		</td>
	</tr>
	<tr>
		<td>
Connexion au {{ fr.DA }}
		</td>
		<td>
https<area>://login.devolutions.com
		</td>
		<td>
Fichier – {{ fr.DA }}
		</td>
	</tr>
	<tr>
		<td>
Boutique Devolutions - Mise à niveau/achat pour {{ fr.RDM }}
		</td>
		<td>
https<area>://store.devolutions.net
		</td>
		<td>
Action de l'utilisateur dans le dialogue sur l'expiration de la licence
		</td>
	</tr>
	<tr>
		<td>
Télémétrie
		</td>
		<td>
https<area>://telemetry2.devolutions.net
		</td>
		<td>
Fichier – Options – Avancé – Désactiver la télémétrie
		</td>
	</tr>
	<tr>
		<td>
Have I Been Pwned
		</td>
		<td>
https<area>://api.pwnedpasswords.com
		</td>
		<td>
Fichier – Options – Avancé – Désactiver la vérification de mots de passe compromis (pwned)
		</td>
	</tr>
	<tr>
		<td>
Yubikey
		</td>
		<td>
https<area>://api.yubico.com<br>
https<area>://api2.yubico.com<br>
https<area>://api3.yubico.com<br>
https<area>://api4.yubico.com<br>
https<area>://api5.yubico.com<br>
		</td>
		<td>
Fichier – Options – Sécurité – Requiert l'authentification Yubikey
		</td>
	</tr>
	<tr>
		<td>
Gravatar
		</td>
		<td>
https<area>://secure.gravatar.com
		</td>
		<td>
Fichier – Options – Avancé – Désactiver toutes les images Gravatar
		</td>
	</tr>
	<tr>
		<td>
Gravatar (site de repli)
		</td>
		<td>
https<area>://i2.wp.com
		</td>
		<td>
Fichier – Options – Avancé – Désactiver toutes les images Gravatar
		</td>
	</tr>
	<tr>
		<td>
Images d'utilisateurs
		</td>
		<td>
https<area>://ui-avatars.com
		</td>
		<td>
Utilisées lorsque l'option image Gravatar est désactivée
		</td>
	</tr>
</table>
