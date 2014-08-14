'use strict';
module.exports = function(angular) {
  angular.module('fakeApp')
  .controller('FakeAppCtrl', function($scope) {
    this.coolThings = ['Kalamuna', 'Anulas', 'Oakland'];
  });
};
