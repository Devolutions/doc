---
eleventyComputed:
  title: "{{ fr.DGW }} Type de connexion par tunnel"
  description: Le tunnel {{ fr.DGW }} peut répondre à des besoins similaires au port forwarding/SSH tunneling SSH, mais il ne nécessite rien d'autre que {{ fr.DGW }} lui-même.
  keywords:
  - SSH Tunnel
---
Le ***Tunnel {{ fr.DGW }}*** peut répondre à des besoins similaires au port forwarding/SSH tunneling SSH, mais il ne nécessite rien d'autre que {{ fr.DGW }} lui-même. Il est utile lors de l'utilisation de connexions qui n'ont pas de support intégré dans {{ fr.RDM }} via le {{ fr.DGW }}. L'entrée peut être trouvée sous ***Nouvelle Entrée*** – ***Session*** – ***Connexions à Distance***.
{% snippet, "badgeInfo" %}
{{ fr.DGW }} doit être configuré dans la source de données {{ fr.RDM }} puis configuré via [l'héritage](/rdm/kb/rdm-windows/knowledge-base/inheritance/) ou sur la connexion elle-même. L'option se trouve sous ***Propriétés*** – ***Connexion*** – ***VPN/SSH/Gateway*** – ***VPN/SSH/Gateway*** – ***Général***.
{% endsnippet %}

![Tunnel {{ fr.DGW }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0116.png)
## Écouteurs
{% snippet, "badgeWarning" %}
Si l'***Écouteur*** est réglé sur 0.0.0.0, il acceptera les connexions de toute source au sein du réseau. En raison de la difficulté à suivre la responsabilité, il est recommandé de ***NE PAS*** faire cela pour plusieurs raisons de sécurité.
{% endsnippet %}

* ***TCP Forward*** : C'est l'équivalent du port forwarding.

* ***HTTP*** et ***SOCKS5*** proxies : Ces écouteurs sont configurés comme des proxies, ce qui permet d'utiliser un navigateur autre que Google Chrome. Cela signifie également qu'ils utilisent une destination dynamique.
{% snippet, "badgeInfo" %}
Des ports dynamiques peuvent être utilisés avec les trois types d'écouteurs. Si la valeur est 0, il trouvera automatiquement un port disponible.
{% endsnippet %}

### Règles d'autorisation
Les écouteurs ***HTTP*** et ***SOCKS5*** utiliseront également les ***Règles d'autorisation*** pour spécifier les destinations autorisées, tout ce qui n'est pas sur la liste d'autorisation sera refusé.

***Les filtres de cible*** peuvent être spécifiés en utilisant des adresses IP ou des noms d'hôte. Les deux peuvent contenir des caractères génériques. Chaque ***filtre de cible*** doit spécifier explicitement un port de destination. Laisser le port par défaut à '0' entraînera une erreur lors de la tentative d'enregistrement du filtre.
![Défaut](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0163.png)

#### Exemples de filtres de cible valides
| Filtre de cible          | Description                                                                                 |
|------------------------|---------------------------------------------------------------------------------------------|
| `windjammer.net:80`    | Autorise le trafic HTTP vers le nom d'hôte windjammer.net.                                  |
| `*.windjammer.net:443` | Autorise le trafic HTTPS vers tout sous-domaine de windjammer.net mais pas directement vers windjammer.net. |
| `192.168.0.*:22`       | Autorise le trafic SSH vers toute adresse IP entre 192.168.0.0 et 192.168.0.255.            |
| `*:3389`               | Autorise le trafic RDP vers tout point d'extrémité accessible par le {{ fr.DGW }}.          |

Vous pouvez ajouter plusieurs ***filtres de cible*** à votre entrée adaptés à l'utilisation prévue du tunnel. Par exemple, vous pourriez ajouter plusieurs fois le même nom d'hôte mais avec des ports différents, comme 80 et 443, pour autoriser à la fois le trafic HTTP et HTTPS.

### Utiliser le Tunnel {{ fr.DGW }} en dehors de {{ fr.RDM }}
Une fois ouvert, il est possible d'utiliser un ***Tunnel {{ fr.DGW }}*** depuis une application externe à {{ fr.RDM }}. Vous pourriez, par exemple, l'utiliser avec un navigateur Web ou toute autre application qui prend en charge le type de proxy (TCP, HTTP ou SOCKS5) que vous avez spécifié dans la connexion.

#### Exemple : Utiliser le tunnel avec l'outil en ligne de commande cURL
Vous pouvez ajouter votre point de terminaison proxy avec le port spécifié ou celui qui a été généré par l'entrée ***Tunnel {{ fr.DGW }}*** avec l'argument -x.

```bash
curl -x socks5h://127.0.0.1:65535 windjammer.net
```

{% snippet, "badgeCaution" %}
Si vous avez défini vos filtres de cible en utilisant des noms d'hôte, il est important de s'assurer que votre application ne résout pas le nom d'hôte avant de l'envoyer au tunnel ; sinon, le trafic sera refusé. Les applications ont généralement des paramètres pour activer ou désactiver ce comportement. Par exemple, dans le navigateur Web Firefox, vous devez activer l'option ***Proxy DNS lors de l'utilisation de SOCKS v5*** dans le panneau de configuration du proxy pour que ce scénario fonctionne correctement.
{% endsnippet %}
