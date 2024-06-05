---
eleventyComputed:
  title: "{{ fr.DGW }} configuration des fermes"
  description: Une ferme permet de regrouper plusieurs passerelles et d'effectuer l'équilibrage de charge pour les connexions utilisant la passerelle.
---
Ce sujet couvrira comment configurer une ferme {{ fr.DGW }} via l'interface web pour {{ fr.DVLS }}.

## Configuration

1. Dans l'interface web pour {{ fr.DVLS }}, s'assurer d'être connecté à la bonne source de données.
1. Aller à ***Administration*** – ***Modules*** – ***{{ fr.DGW }}***.
1. Cliquer ***Ajouter*** et cliquer ***Ferme de passerelles***.
![Ferme de passerelles](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0032.png)
1. Dans l'onglet ***Général***, fournir un nom et une description pour la ferme. Vous pouvez également choisir de définir cette ferme comme la ferme par défaut.

   {% snippet, "badgeInfo" %}
   Un seul réglage par défaut est autorisé à la fois, que ce soit une passerelle ou une ferme. Si une ferme est créée et définie comme par défaut alors qu'une autre passerelle est le réglage par défaut, la ferme devient le nouveau réglage par défaut. Il en va de même si une passerelle par défaut est déplacée dans une ferme, la ferme devient le nouveau réglage par défaut.
   {% endsnippet %}

5. Dans l'onglet ***Membres***, cliquer ***Sélectionner les membres de la ferme*** pour ouvrir un dialogue permettant de sélectionner les passerelles à inclure dans la ferme.

   {% snippet, "badgeInfo" %}
   Une passerelle ne peut appartenir qu'à une seule ferme à la fois. Si elle est incluse dans une nouvelle ferme, elle sera déplacée de la ferme actuelle.
   {% endsnippet %}

6. Dans l'onglet ***Sécurité***, configurer qui peut utiliser la ferme et dans quel {{ fr.VLT }} elle peut être utilisée. Les permissions et droits sont les mêmes que ceux pour une passerelle régulière.

   {% snippet, "badgeInfo" %}
   Si les passerelles au sein de la ferme ont des restrictions ou permissions spécifiques, elles seront remplacées par les paramètres de la ferme. Un message d'avertissement dans l'onglet ***Sécurité*** d'une passerelle au sein d'une ferme informe l'utilisateur que modifier les restrictions/permissions ici n'aura pas d'impact tant qu'elle reste dans la ferme.
   {% endsnippet %}

### Déplacer une passerelle dans une ferme

Pour déplacer une passerelle dans une ferme, il y a deux manières :
* Utiliser le dialogue de sélection lors de la configuration initiale ; ou
* ***Éditer*** directement une passerelle et choisir la ferme dans l'onglet ***Général***.

### Supprimer une ferme/passerelle

Pour supprimer une ferme, vous pouvez choisir de supprimer les passerelles à l'intérieur ou de supprimer uniquement la ferme. Si vous supprimez uniquement la ferme, les passerelles à l'intérieur deviennent des passerelles indépendantes.

## Équilibrage de charge

### Poids

Dans l'onglet ***Membres*** de la boîte de dialogue d'édition de la ferme, les passerelles apparaissent dans un tableau avec deux valeurs modifiables. La première valeur est leur poids relatif. Ce poids affecte la distribution de la charge, un poids plus élevé augmente les chances qu'une passerelle reçoive la session suivante. Si toutes les passerelles au sein de la ferme ont le même poids, elles ont une chance égale de recevoir des sessions.

#### Exemple de calculs de poids 1 :

Poids de la passerelle1 = 100
Poids de la passerelle2 = 200
Poids de la passerelle3 = 300
Poids total = 600

Probabilité de la passerelle1 = 100/600 = 16,66%
Probabilité de la passerelle2 = 200/600 = 33,33%
Probabilité de la passerelle3 = 300/600 = 50%

{% snippet, "badgeInfo" %}
Les valeurs de poids réelles n'ont pas d'importance, seuls leurs rapports le sont. Ainsi, 1-2-3 est équivalent à 1000-2000-3000.
{% endsnippet %}

#### Exemple de calculs de poids 2 :

Poids de la passerelle1 = 1
Poids de la passerelle2 = 2 (INDISPONIBLE)
Poids de la passerelle3 = 3
Poids total = 4

Dans cet exemple, puisque la passerelle2 est indisponible, elle n'est pas considérée pour la distribution des sessions.

Probabilité de la passerelle1 = 25%
Probabilité de la passerelle3 = 75%

{% snippet, "badgeInfo" %}
Ce sont des probabilités, pas des certitudes. Par exemple, avec 4 sessions, la passerelle1 pourrait recevoir 2 ou 3 sessions, malgré la probabilité de 25%. Avec le temps, les probabilités tendent à s'équilibrer selon la loi des grands nombres.
{% endsnippet %}

### Drain

Le bouton ***Drain*** se trouve dans la colonne du même nom. Cliquer dessus rend une passerelle indisponible pour de nouvelles sessions. Les sessions actives continuent jusqu'à leur achèvement. Il est utile pour la maintenance planifiée ou les mises à jour.

### Après configuration

Sélectionner une ferme pour une session est similaire à choisir une passerelle régulière (sous ***Propriétés*** – ***VPN/SSH/Passerelle*** dans l'interface web {{ fr.DVLS }}). Les fermes sont listées avec les passerelles individuelles. Une passerelle au sein d'une ferme ne peut pas être sélectionnée en dehors de la ferme.

Le bouton ***Vérifier la santé*** est disponible pour les fermes. Une réponse positive signifie qu'au moins une passerelle dans la ferme est disponible. Une réponse négative signifie qu'aucune passerelle dans la ferme n'est disponible.

Aller à ***Rapports*** – ***Journaux d'activité*** – ***Entrée de journal*** – ***Détails*** pour voir exactement quelle ***Passerelle*** et ***Ferme de passerelles*** ont été utilisées pour la session.
