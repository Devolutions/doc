---
eleventyComputed:
  title: Première connexion à {{ fr.RDMMAC }} avec le {{ fr.WBEX }}
  order: 20
---
Suivre ces étapes pour connecter {{ fr.RDMMAC }} au {{ fr.WBEX }}. Vous serez invité à appairer les deux applications.

1. Cliquer sur le {{ fr.WBEX }} en haut à droite de votre navigateur.
{% snippet, "badgeCaution" %}
{{ fr.RDM }} doit être installé et en cours d'exécution pour continuer.
{% endsnippet %}

2. Choisir ***{{ fr.RDM }}*** dans la liste, puis cliquer ***Enregistrer***.
![Première Connexion](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_Dwl4056.png)
1. Entrer un nom pour cette association dans la zone de texte.
{% snippet, "badgeNotice" %}
Ce nom peut être utilisé pour identifier une association particulière et pour refuser l'accès à celle-ci depuis {{ fr.RDM }}. Le nom par défaut est le nom du navigateur web exécutant le {{ fr.WBEX }}.
{% endsnippet %}

![Association avec {{ fr.RDM }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_Dwl4057.png)

4. Cliquer sur ***Associer avec {{ fr.RDM }}***.
{% snippet, "badgeInfo" %}
Une fenêtre pop-up apparaîtra dans {{ fr.RDM }} pour confirmer que la demande a bien été envoyée par vous.
{% endsnippet %}

5. Cliquer ***Oui*** dans {{ fr.RDM }} pour accepter la demande d'association.
![Demande d'Association](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_Dwl4058.png)
1. Si vous cliquez sur l'icône {{ fr.WBEX }} dans votre navigateur web, vous pouvez valider que le {{ fr.WBEX }} est maintenant appairé à votre {{ fr.RDM }}.
![Association Réussie de {{ fr.RDM }} au {{ fr.WBEX }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_Dwl4059.png)

{% snippet, "badgeInfo" %}
Notez que, tandis que {{ fr.RDM }} peut gérer plusieurs associations (par exemple, plusieurs navigateurs), le {{ fr.WBEX }} ne peut être appairé qu'à une seule instance de {{ fr.RDM }} à la fois.
{% endsnippet %}
