---
eleventyComputed:
  title: Lancer RemoteApp avec {{ fr.RDM }}
---
Voici les étapes et informations nécessaires pour lancer ***RemoteApp*** avec {{ fr.RDM }} en mode ***Externe***.

1. Télécharger un fichier RDP depuis un ***serveur Web RD RemoteApp***, remarquer que cela va remplir le fichier avec l'adresse du serveur du ***Broker de Connexion RD***.
{% snippet, "badgeInfo" %}
Dans cet exemple, le rôle ***Broker de Connexion RD*** et le rôle ***Accès Web RD*** sont installés sur le même serveur.
{% endsnippet %}

![!!KB4742](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4742.png)
![!!KB4743](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4743.png)
2. Créer une nouvelle entrée d'hôte RDP dans {{ fr.RDM }} si tenter d'utiliser la même configuration que celle du fichier RDP téléchargé depuis le site RDS échouera. {{ fr.RDM }} doit être dirigé vers le serveur hôte de session qui héberge réellement l'application que vous tentez de lancer via RemoteApp. Dans ce cas, notre application DNS est installée sur le serveur RDS-SESSION.CONTOSO.COM, donc c'est l'adresse du serveur que nous utiliserons pour l'entrée de l'hôte.
{% snippet, "badgeCaution" %}
Les RemoteApp ne se lanceront qu'en mode externe, régler le champ ***Affichage*** sur ***Externe***.
{% endsnippet %}

![!!KB4744](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4744.png)
3. Cliquer sur l'onglet ***Programmes*** de l'entrée d'hôte RDP. Cocher la case pour ***Utiliser RemoteApp (mode sans couture)*** Le champ ***Programme*** doit être l'alias du RemoteApp. Trouver cet alias soit dans les propriétés de la ***Collection RemoteApp*** sur votre serveur RDS, soit à travers le fichier RDP téléchargé plus tôt.
{% snippet, "badgeCaution" %}
Ne pas inclure les caractères ||, seulement le nom de l'alias.
{% endsnippet %}

4. Si avoir des arguments de ligne de commande qui doivent être passés au RemoteApp, les saisir dans le champ ***Paramètres***.
![!!KB4745](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4745.png)
![!!KB4746](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4746.png)
1. Cliquer sur ***OK*** pour sauvegarder.
1. Lancer votre nouvelle entrée RDP hébergée. Devriez voir une fenêtre de lancement de RemoteApp externe.
![!!KB4747](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4747.png)
![!!KB4748](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4748.png)
