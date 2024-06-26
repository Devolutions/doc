const path = require('path');
const sass = require('sass');

module.exports = (config) => {
  config.addTemplateFormats('scss');

  config.addExtension('scss', {
    outputFileExtension: 'css',
    getData: async() => ({ eleventyExcludeFromCollections: true }),
    compile: function(inputContent, inputPath) {
      const parsed = path.parse(inputPath);
      if (parsed.name.startsWith('_')) {
        return;
      }

      const result = sass.compileString(inputContent, {
        style: 'compressed',
        sourceMap: true,
        sourceMapIncludeSources: true,
        loadPaths: [
          parsed.dir || '.',
          this.config.dir.includes
        ]
      });

      const sm = JSON.stringify(result.sourceMap);
      const smBase64 = (Buffer.from(sm, 'utf-8') || '').toString('base64');
      const smComment = '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' + smBase64 + ' */'

      const css = result.css.toString() + '\n'.repeat(2) + smComment;

      this.addDependencies(inputPath, result.loadedUrls);

      return () => {
        return css;
      };
    },
    compileOptions: {
      cache: false
    }
  });
}