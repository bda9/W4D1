angular.module('miniRouting', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'homeCtrl',
        templateUrl: 'js/home/homeTmpl.html'
      })
    .state('settings', {
      url: '/settings',
      controller: 'settingsCtrl',
      templateUrl: 'js/settings/settingsTmpl.html'
    })
    .state('products', {
      url: '/products/:id',
      controller: 'productsCtrl',
      templateUrl: 'js/products/productTmpl.html'
    });
    $urlRouterProvider
      .otherwise('/');
  });
