---
eleventyComputed:
  title: Modèles
  status: Sujet disponible en langue allemande
---
Les modèles sont utiles pour avoir des valeurs prédéfinies lors de la création d'une entrée. Utiliser des modèles pour :

* [Ajouter des entrées préconfigurées](#create-a-new-entry).
* [Utiliser avec la fonctionnalité de connexion rapide](#run-a-quick-connect-session).
* Ouvrir des entrées comme un modèle.
* Créer des modèles de mot de passe.

Pour accéder et gérer les modèles, naviguer vers ***Fichier – Modèles***.

Il est possible de créer des modèles locaux et des modèles de base de données.

* Les modèles locaux sont sauvegardés dans le fichier de configuration {{ fr.RDM }}. Ils sont disponibles uniquement pour l'utilisateur actuel de la machine.
* Les modèles de base de données sont sauvegardés dans la base de données. Ils sont disponibles pour tous les utilisateurs de la source de données.

{% snippet, "badgeInfo" %}
Par défaut, les utilisateurs standards ne peuvent pas créer ou gérer des modèles. Pour permettre aux utilisateurs de créer ou de gérer des modèles, la permission doit être accordée aux utilisateurs en utilisant la section ***Administration*** – ***Modèles*** des [permissions système](/rdm/commands/administration/security/system-permissions/).
{% endsnippet %}

![Fichier – Modèles](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10235.png)

## Disponibilité

Lors de la création d'un modèle, sa disponibilité peut être spécifiée dans les ***Paramètres du modèle***.
![!!clip3585](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3585.png)

## Utilisation

Les modèles peuvent être utilisés dans les cas suivants :

### Créer une nouvelle entrée

Par défaut, lors de la création d'une entrée d'un type pour lequel des modèles sont configurés, l'utilisateur est invité à choisir un modèle à utiliser. Ce comportement peut être modifié dans les [Paramètres Système](/rdm/commands/administration/settings/system-settings/).
![!!clip3584](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3584.png)

Le modèle peut également être sélectionné avant de créer l'entrée. Utiliser la section ***Modèle*** de la fenêtre ***Ajouter une nouvelle entrée***.
![!!clip10266](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10266.png)

### Exécuter une session de Connexion Rapide

Les modèles peuvent être utilisés avec la fonctionnalité ***Connexion Rapide***. Par exemple, le même modèle peut être utilisé pour se connecter à différents hôtes.
![!!clip10164](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10164.png)
