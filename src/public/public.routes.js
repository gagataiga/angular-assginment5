(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })

    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })

    // --------- assignment addition -------------
    .state("public.myinfo", {
      url: "/myinfo/",
      templateUrl: "src/public/my-info/my-info.html",
      controller: "InfoContorller",
      controllerAs: "Info",
      resolve: {
        information: ["SignUpService", (SignUpService) => { 
          console.log("info resolve;",SignUpService.getInfo().name);
          return SignUpService.getInfo();
        }]
      }
    })
    .state("public.signUp", {
      url: "/signUp",
      templateUrl: "src/public/sign-up/sign-up.html",
      controller: "SignUpController",
      controllerAs: "signUp",
      resolve: {
        information: ["SignUpService", (SignUpService) => { 
          console.log("signup resolve;",SignUpService.getInfo().name);
          return SignUpService.getInfo();
        }]
      }
    })
}
})();
