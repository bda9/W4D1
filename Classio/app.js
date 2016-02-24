angular.module('uiRouteDemo', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('list', {
        url: '/list',
        controller: 'listController',
        templateURL: 'list-tmpl.html'
      });
  });
