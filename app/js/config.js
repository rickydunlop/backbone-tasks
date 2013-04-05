define([], function() {
  var config = {};
  config.apiKey = app.settings.API_KEY;
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = app.settings.CLIENT_ID;

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return config;
});