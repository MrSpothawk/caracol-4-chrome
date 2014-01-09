angular.module('caracolExtension', [
    'services', 
    'caracolExtension.controllers',
    'ui.router'
    ])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider, $http) {
    $urlRouterProvider.otherwise('/start');
    $stateProvider
      .state('popup', {
        url: '/start',
        templateUrl: 'tab.html',
        controller: [ '$scope', '$state', 
          function(   $scope,  $state){ 
            $state.go('caracol')
          }
        ]
      })
      .state('caracol', {
        url: '/start',
        templateUrl: 'views/main.html',
        controller: [ '$scope', '$state', 
          function(   $scope,  $state){ 
            $scope.exports = {};
            $scope.bookmarks = {};
            $state.go('caracol.popup')
          }
        ]
      })
      .state('caracol.popup', {
        url: '/start/popup',
        views: {
          "head": {
            template:'<h4 class="navbar">Your Caracol Clippings</h4>'
          },
          "focus": {
            templateUrl: 'views/popup.html',
            controller: 'fetchmyclippings'
          }, 
          // "right": {
          //   templateUrl: 'views/export.html'
            
          // }
        }
      })
      .state('caracol.processed', {
        url: '/start/processed',
        views: {
          "head": {
            templateUrl: 'views/header.html'
          },
          "focus": {
            templateUrl: 'views/suggested.html',
            controller: 'fetchmyrecommendations'
          },
          "right": {
            templateUrl: 'views/userBookmarks.html', 
            controller: 'fetchmyclippings'
          },
          "foot": {
            templateUrl: 'views/processed.html',
            controller: [ '$scope', '$state', 'servicefactory',
              function(   $scope,  $state,   services){ 
            }]
          }
        },
         
      })
      // .state('caracol.caracolUserBar', {
      //   url: '/caracolUserBar',
      //   templateUrl: 'views/caracolUserBar.html'
      // })
      // .state('caracol.userBookmarks', {
      //   url: '/userBookmarks',
      //   templateUrl: 'views/userBookmarks.html'
      // })
      // .state('caracol.suggestedBookmarks', {
      //   url: '/suggestedBookmarks',
      //   templateUrl: 'views/suggestedBookmarks.html'
      // })
}]);

