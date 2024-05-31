---
eleventyComputed:
  title: Approuver l'accès à un compte privilégié
  order: 20
  description: La fonctionnalité de Réservation permet aux utilisateurs de demander un accès temporaire à une entrée de compte privilégié dans un PAM {{ fr.VLT }}. L'approbateur doit ensuite approuver ou refuser la demande.
---
{% snippet, "badgeInfo" %}
Le sujet suivant se concentre sur l'approbation d'une demande de réservation depuis l'interface web de {{ fr.DHUBB }}. Notez que cette fonctionnalité est également disponible dans {{ fr.RDM }} avec {{ fr.DHUBB }}, soit en accédant à l'entrée de compte privilégié dans le PAM {{ fr.VLT }}, soit en se connectant à une session à distance liée.

Il est également possible de voir et d'approuver les demandes de réservation dans {{ fr.RDM }} même si la demande a été faite dans {{ fr.DHUBB }}.
{% endsnippet %}

La fonctionnalité ***Réservation*** permet aux utilisateurs de demander un accès temporaire à une entrée de compte privilégié dans un PAM {{ fr.VLT }}. L'approbateur doit ensuite approuver ou refuser la demande.

## Voir les demandes de réservation de compte privilégié

Lorsqu'un utilisateur vous envoie une demande de réservation, vous serez automatiquement notifié par courriel. Vous pouvez cliquer sur ***Aller au tableau de bord de l'entrée*** pour voir directement la demande dans l'entrée dans {{ fr.DHUBB }}.

![Demande de réservation par courriel](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2311.png)

Une fois sur l'entrée, vous verrez une section ***Demande de réservation*** près du haut. Cliquer sur ***Voir les détails*** ouvre la fenêtre ***Demande de réservation***, qui est décrite dans la section suivante.

![Demande de réservation depuis l'entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2320.png)

Notez que vous pouvez également voir toutes les demandes de réservation en attente d'un {{ fr.VLT }} sélectionné dans la boîte ***Demandes de réservation*** du ***Tableau de bord***.

![Demande de réservation depuis le tableau de bord](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2313.png)

## Approuver/Refuser les demandes de réservation

{% snippet, "badgeInfo" %}
La durée de l'accès commence lorsque la demande est approuvée.
{% endsnippet %}

Lorsque l'entrée est sélectionnée, cliquer sur ***Voir les détails*** dans la section ***Demande de réservation*** vous permet de voir les informations sur la demande ainsi que de l'***Approuver/Refuser***.

![Voir les détails](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2314.png)

Dans la section supérieure, vous pouvez voir la ***Durée demandée***. Vous pouvez remplacer cette durée en spécifiant un nouveau cadre temporel dans la liste déroulante ***Durée autorisée*** à côté.

Plus bas se trouve le message du demandeur. Vous pouvez ajouter votre propre message également.

Enfin, vous pouvez ***Approuver*** ou ***Refuser*** la demande de réservation en cliquant sur le bouton correspondant.

![Approuver/Refuser la demande de réservation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2315.png)

Une fois la demande approuvée, l'utilisateur peut procéder à voir/copier le mot de passe du compte (selon les permissions qui lui sont attribuées).

{% snippet, "badgeNotice" %}
Assurez-vous de donner les bonnes permissions à vos utilisateurs pour qu'ils puissent utiliser les comptes privilégiés auxquels ils ont demandé accès.

Nous recommandons le rôle ***Opérateur privilégié***, car il contient les permissions minimales requises pour pouvoir utiliser et accéder aux entrées de compte privilégié, à savoir ***Voir {{ fr.VLT }}***, ***Connecter (Exécuter)***, ***Voir le mot de passe***, et ***Voir sensible***. La différence entre les rôles ***Opérateur privilégié*** et ***Opérateur*** est que ce dernier n'inclut pas la permission ***Voir le mot de passe***, qui est nécessaire pour pouvoir utiliser les comptes privilégiés.

Alternativement, vous pouvez assigner un rôle spécifique au niveau de l'entrée de compte privilégié et juste donner accès au {{ fr.VLT }} lui-même.
{% endsnippet %}

Vous pouvez forcer une restitution de l'entrée pour mettre fin à l'accès de l'utilisateur en :

* Cliquant sur ***Forcer la restitution*** en haut de l'aperçu de l'entrée.
   ![Forcer la restitution depuis l'aperçu de l'entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2317.png)

* Cliquant à nouveau sur ***Voir les détails***, puis ***Forcer la restitution***.
   ![Forcer la restitution depuis Voir les détails](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2316.png)

Lorsque vous restituez l'entrée, le mot de passe du compte privilégié est automatiquement réinitialisé et l'ancien mot de passe devient inutilisable. Assurez-vous de vouloir faire cela d'abord, car pour regagner l'accès à l'entrée, ils devront faire une autre demande. Sinon, leur accès prendra fin dans le délai fixé.

{% snippet, "badgeHelp" %}
Pour en savoir plus sur l'expérience utilisateur final dans {{ fr.DHUBB }}, visitez [Demander l'accès à un compte privilégié](/pam/hub/privileged-accounts/request-access-privileged-account/).

Pour des moyens de surveiller l'activité des comptes privilégiés, jetez un œil aux [Rapports d'accès privilégiés](/pam/hub/privileged-access-reports/index/).
{% endsnippet %}