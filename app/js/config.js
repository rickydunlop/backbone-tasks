define([], function() {
  var config = {};
  config.apiKey = 'AIzaSyBQEDfA48z3kA7YXN0-GBruziPirM-xNKg';
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = '171935667679.apps.googleusercontent.com';

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return config;
});