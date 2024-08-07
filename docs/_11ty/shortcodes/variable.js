const variables = require('./../../_data/variables.json');

module.exports = function (variableKey, capitalize = false) {
  const env = this.ctx.environments ?? this.ctx;
  const lang = env.lang ?? 'en';
  const variable = variables[variableKey][lang];

  if (capitalize && variable.length > 0) {
    return variable.charAt(0).toUpperCase() + variable.slice(1);
  }

  return variable;
};