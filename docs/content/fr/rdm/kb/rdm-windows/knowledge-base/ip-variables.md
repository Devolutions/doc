---
eleventyComputed:
  title: Variables IP
  description: Les variables $IP$ doivent contacter le serveur DNS pour obtenir l'IP requis. Sinon, les variables resteront non résolues et les performances peuvent être altérées
---
Les variables $IP$ doivent contacter le serveur DNS pour retourner une IP. Cela peut causer des problèmes de performance ou échouer à retourner l'IP complètement. 
Pour éviter cela, utiliser $INFORMATION_IP$ – ou l'une de ses nombreuses variantes – pour résoudre et retourner l'adresse IP configurée dans l'entrée.

Pour configurer une adresse IP de cette manière, cliquer avec le bouton droit sur une entrée, puis aller à ***Propriétés*** – ***Actif*** – ***Réseau***.

![Configuration de l'adresse IP dans une entrée](https://cdnweb.devolutions.net/docs/RDMW4011_2024_1.png)