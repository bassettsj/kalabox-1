'use strict';
module.exports = function(angular) {
  angular.module('app', [
    // 'ngRoute',
    // 'kalabox.nodewrappers',
    // 'kalabox.dashboard',
    // 'kalabox.installer',
    // 'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/installer'
    });
  });
  return angular;
};
