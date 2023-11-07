using CommandLine;

using Devolutions.TranslationTool;

await Parser.Default.ParseArguments<ProgramOptions>(args)
    .WithParsedAsync(options => new RepositoryTranslator(options).ExecuteAsync());