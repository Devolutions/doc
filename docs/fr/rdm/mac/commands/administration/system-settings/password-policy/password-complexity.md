---
title: Modèles de mot de passe
---
Ce paramètre de sécurité détermine si les mots de passe doivent répondre aux exigences de complexité prédéterminées qui ont été configurées dans vos paramètres de source de données. Les exigences de complexité sont appliquées lorsque les mots de passe sont modifiés ou qu&apos;une nouvelle entrée est créée. Si cette stratégie est activée, les nouveaux mots de passe doivent répondre à certaines des exigences minimales suivantes:  

* Longueur minimale 
* Minimum de caractères en minuscules 
* Minimum de caractères en majuscules 
* Minimum de caractères numériques 
* Minimum de caractères spéciaux 

## Paramètres 

Les paramètres définis dans la source de données de Modèles de mot de passe détermineront la valeur par défaut des paramètres de session.  
![Paramètres du système - Modèles de mot de passe](/img/fr/rdm/mac/clip4106.png) 

### Modèle par défaut 

L&apos;option ***Modèle par défaut*** définie dans les paramètres de la source de données déterminera l&apos;option par défaut de votre entrée de session. 

### Validation du mot de passe 

Si l&apos;utilisation est activée et que vous essayez de modifier ou de créer un mot de passe pour l&apos;une de vos entrées, la réaction dépendra du mode de validation choisi.  

L&apos;option de validation déterminée dans les paramètres de la source de données déterminera l&apos;option de validation par défaut de votre entrée de session. 

<table>
	<tr>
		<td>
Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Aucun 
		</td>
		<td>
N&apos;utilisera aucun type de validation lors de la modification ou de la création d&apos;un nouveau mot de passe. 
		</td>
	</tr>
	<tr>
		<td>
Avertissement 
		</td>
		<td>
Vous avertira que votre mot de passe n&apos;est pas conforme aux exigences de Modèle de mot de passe, mais vous permettra de continuer avec ce mot de passe ou de le modifier. 
		</td>
	</tr>
	<tr>
		<td>
Obligatoire 
		</td>
		<td>
Les exigences de Modèles de mot de passe sont obligatoires. 
		</td>
	</tr>
</table>

## Créer 

Vous devez créer votre propre modèle de mot de passe pour ensuite les appliquer à vos sessions. Cliquer sur le bouton pour créer votre modèle de complexité de mot de passe, entrez un nom et les exigences souhaitées.  
![Paramètres du système - Utilisateur personnalisé](/img/fr/rdm/mac/clip4107.png) 

