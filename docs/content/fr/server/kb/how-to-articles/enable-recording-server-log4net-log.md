---
eleventyComputed:
  title: Activer le journal du serveur d'enregistrement
  keywords:
  - Journal
  - Log4Net
  - Journalisation
  - Journaux
---
La procédure suivante décrit comment activer l'utilitaire de journalisation pour le ***Serveur d'enregistrement*** de {{ fr.DVLS }}.

## Activer les journaux
1. Pour éditer le fichier **log4net.config**, cliquer sur le bouton ***Explorer*** de la section ***Serveur d'enregistrement*** de l'onglet ***Companions*** dans la {{ fr.DVLSCONSOLE }}.
![Bouton Explorer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8120.png)
1. Définir la valeur du paramètre de fichier avec le chemin complet du fichier journal. Assurer que les antislashs sont doublés.
   {% snippet, "badgeCaution" %}
   S'assurer que le dossier de destination pour les journaux a des droits d'écriture.
   {% endsnippet %}
1. Définir la valeur du paramètre de niveau à ALL.
1. Redémarrer les services Collector et Processor sur le serveur après toute modification de ces fichiers.
{% snippet, "badgeInfo" %}
Assurer de remettre la valeur du niveau à ERROR et redémarrer les services une fois l'investigation terminée.
{% endsnippet %}

```
<?xml version="1.0" encoding="utf-8" ?>
<log4net>
  <appender name="RollingFile" type="log4net.Appender.RollingFileAppender">
    <file value="c:\\Logs\\collector.log" />
    <appendToFile value="true" />
    <maximumFileSize value="1MB" />
    <maxSizeRollBackups value="5" />
    <layout type="log4net.Layout.PatternLayout">
      <conversionPattern value="%date %5level %logger.%method [%line] - MESSAGE: %message%newline %exception" />
    </layout>
  </appender>
  <root>
    <level value="ALL" />
    <appender-ref ref="RollingFile" />
  </root>
</log4net>
```
