---
eleventyComputed:
  title: Impossible d'enregistrer les informations d'enregistrement dans {{ fr.DVLS }}
  description: Dans {{ fr.DVLS }}, dans le fichier processor.log du serveur d'enregistrement, vous pouvez rencontrer le message d'erreur "Impossible d'enregistrer les informations d'enregistrement dans DPS".
  keywords:
  - serveur d'enregistrement
---
Dans {{ fr.DVLS }}, dans le fichier processor.log du serveur d'enregistrement, vous pouvez rencontrer le message d'erreur `Impossible d'enregistrer les informations d'enregistrement dans DPS`.
```
2022-12-21 08:59:21,085  INFO Devolutions.Processor.ProcessorService.? [?] - MESSAGE: Nombre de trames : 26, FPS : 5
2022-12-21 08:59:21,092  INFO Devolutions.Processor.ProcessorService.? [?] - MESSAGE: Enregistrement des informations dans DPS
2022-12-21 08:59:21,410 ERROR Devolutions.Processor.ProcessorService.? [?] - MESSAGE: Erreur : 
2022-12-21 08:59:21,411 ERROR Devolutions.Processor.ProcessorService.? [?] - MESSAGE: Détail : 
2022-12-21 08:59:21,411 ERROR Devolutions.Processor.ProcessorService.? [?] - MESSAGE: Impossible d'enregistrer les informations d'enregistrement dans DPS
2022-12-21 08:59:21,419  INFO Devolutions.Processor.ProcessorService.? [?] - MESSAGE: Traitement terminé E:\Recording\collector\76d9c5e1-ac88-44bf-9b46-94f1adf7faa7.pcap.
```

## Solution
Assurez-vous que le paramètre DPSURL dans le fichier **processor.config** contient une URL qui est accessible depuis la machine où le serveur d'enregistrement est installé et que l'URL ne se termine pas par "/".
```
<?xml version="1.0"?>
<Settings>
  <DPSApiKey>xxxxxxxxxxxx</DPSApiKey>
  <DPSApiKeyPasswordEncrypted>xxxxxxxxxxxx</DPSApiKeyPasswordEncrypted>
  <DPSUrl>https://devolutions237.devolutions.loc</DPSUrl>
  <MaxParallelProcess>8</MaxParallelProcess>
  <MonitorFolder>C:\Temp\Recording\collector</MonitorFolder>
  <OutputFolder>C:\Temp\Recording</OutputFolder>
</Settings>
```
