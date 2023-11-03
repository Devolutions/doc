﻿namespace Devolutions.TranslationTool;

internal sealed class TargetLanguage
{
    public TargetLanguage(SourceLanguage sourceLanguage, string code, string directoryPath,
        string? glossaryFilePath, string? glossaryLatestCommit, string cacheFilePath)
    {
        this.SourceLanguage = sourceLanguage ?? throw new ArgumentNullException(nameof(sourceLanguage));
        this.Code = code ?? throw new ArgumentNullException(nameof(code));
        this.DirectoryPath = directoryPath ?? throw new ArgumentNullException(nameof(directoryPath));
        this.GlossaryFilePath = glossaryFilePath;
        this.GlossaryLatestCommit = glossaryLatestCommit;
        this.CacheFilePath = cacheFilePath ?? throw new ArgumentNullException(nameof(cacheFilePath));
    }

    public SourceLanguage SourceLanguage { get; }

    public string Code { get; }

    public string DirectoryPath { get; }

    public string? GlossaryFilePath { get; }

    public string? GlossaryLatestCommit { get; }

    public string CacheFilePath { get; }

    public TargetFile[] Files { get; set; } = Array.Empty<TargetFile>();

    public override string ToString() => this.Code;
}