var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'HomeController',
    templateUrl: 'views/home.html',
  })
  .when('/suggestion/:id', {
    controller: 'SuggestionsController',
    templateUrl: 'views/suggestion.html',
  })
  .when('/tag/:tag', {
    controller : 'TagController',
    templateUrl: 'views/tag.html',
  })
  .otherwise({redirectTo: '/'});
});