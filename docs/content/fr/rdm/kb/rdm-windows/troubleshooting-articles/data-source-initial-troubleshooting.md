---
eleventyComputed:
  title: Dépannage initial de la source de données
---
### Le nom de la source de données est saisi incorrectement
Pour les types de Source de Données nécessitant un nom d'hôte, s'assurer qu'il est correctement saisi.

### La machine est incapable de résoudre le nom de l'hôte de la source de données via DNS
Pour les types de Source de Données nécessitant un nom d'hôte, s'assurer que le nom fourni est bien résolu par le serveur DNS qui est lié non seulement à votre connexion réseau actuelle, mais aussi à toutes les connexions que vous utiliserez {{ fr.RDM }}.

En général, PING est un mauvais outil de test car le serveur peut avoir été configuré pour ignorer les requêtes PING. Utiliser NSLOOKUP pour aider à identifier le problème.

Un problème courant dans un environnement multi-domaines est qu'il faut utiliser le Nom de Domaine Complet (FQDN) d'un serveur pour l'atteindre. (par exemple, srvname.domain.loc au lieu de srvname)

Un autre problème courant est que le cache DNS est corrompu, dans ce cas, ouvrir une invite de commande élevée et utiliser les commandes suivantes.

```
ipconfig /flushdns
ipconfig /registerdns
```

### L'ouverture d'un VPN a déconnecté le LAN local ou rendu la Source de Données inaccessible
Si l'administrateur réseau a jugé nécessaire de router TOUT le trafic à travers la connexion lorsqu'un VPN est actif, il faudra recourir à utiliser nos capacités [Hors ligne](/rdm/windows/data-sources/offline-mode/), idéalement couplées avec nos options pour aller automatiquement hors ligne lors de la connexion.

Pour un VPN basé sur le Web, s'assurer que les routes sont toutes valides, c'est-à-dire que le chemin suivi pour atteindre l'hôte distant passe bien par l'interface appropriée.

### Un anti-virus ou un pare-feu bloque l'application
Cela peut être difficile à diagnostiquer mais malheureusement le département de support peut attester que cela arrive assez souvent. Voici quelques éléments à surveiller.

![!!KB2003](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2003.png)
Si vous êtes en position de le faire, cela peut aider de désactiver TEMPORAIREMENT l'AV et le Pare-feu. Vous devez prendre une décision éclairée quant au risque impliqué dans votre situation. Toujours activer toutes les fonctionnalités de sécurité dès que vous avez déterminé si ce composant causait le problème.
