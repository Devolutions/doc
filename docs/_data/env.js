module.exports = function () {
    env = {
      environment: process.env.ENVIRONMENT || 'local',
      isProd: false,
      isStaging: false
    };
  
    switch (process.env.ENVIRONMENT) {
      case 'staging':
        env.isStaging = true;
        break;
      case 'production':
        env.isProd = true;
        break;
    }
  
    return env;
  };