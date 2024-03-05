---
eleventyComputed:
  title: Première connexion avec le {{ fr.WBEX }}
  order: 40
---
Suivez ces étapes pour connecter {{ fr.RDM }} au {{ fr.WBEX }}. Vous serez invité à coupler les deux applications.

1. Cliquer sur le {{ fr.WBEX }} dans le coin supérieur droit de votre navigateur.
{% snippet icon.badgeCaution %}
{{ fr.RDM }} doit être installé et en cours d'exécution pour continuer.
{% endsnippet %}

2. Choisir ***{{ fr.RDM }}*** dans la liste, puis cliquer sur ***Enregistrer***.
![Première connexion](https://cdnweb.devolutions.net/docs/fr/rdm/mac/Dwl4014.png)
1. Saisir un nom pour cette association dans la zone de texte.
{% snippet icon.badgeNotice %}
Ce nom peut être utilisé pour identifier une association particulière et pour en refuser l'accès à partir de {{ fr.RDM }}. Le nom par défaut est celui du navigateur Web qui exécute le {{ fr.WBEX }}.
{% endsnippet %}

![Associer avec {{ fr.RDM }}](https://cdnweb.devolutions.net/docs/fr/rdm/mac/Dwl4041.png)

4. Cliquer sur ***Associer avec {{ fr.RDM }}***.
{% snippet icon.badgeInfo %}
Une fenêtre contextuelle apparaîtra dans {{ fr.RDM }} pour confirmer que la requête a été réellement envoyée par vous.
{% endsnippet %}

5. Cliquer sur ***Oui*** dans {{ fr.RDM }} pour accepter la demande d'association.
![Demande d'association](https://cdnweb.devolutions.net/docs/fr/rdm/mac/Dwl4042.png)
1. Si vous cliquez sur l'icône du {{ fr.WBEX }} dans votre navigateur Web, vous pouvez valider que le {{ fr.WBEX }} est désormais associé à votre {{ fr.RDM }}.
![Association réussie de {{ fr.RDM }} au {{ fr.WBEX }}](https://cdnweb.devolutions.net/docs/fr/rdm/mac/RDMMac2008.png)

{% snippet icon.badgeInfo %}
Bien que {{ fr.RDM }} puisse gérer plusieurs associations (par exemple, plusieurs navigateurs), le {{ fr.WBEX }} ne peut être associé qu'à une seule instance de {{ fr.RDM }} à la fois.
{% endsnippet %}
