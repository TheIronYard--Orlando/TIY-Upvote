(function(window){

  var app = angular.module('tiy-upvote', [ 'ngRoute', 'restangular' ]);

  app.config(function($routeProvider){
    // List of all Questions...
    $routeProvider.when('/questions', {
      templateUrl: 'views/questions.html',
      controller: 'QuestionsController',
      controllerAs: 'question'
    });

    // Add a new Question...
    $routeProvider.when('/questions/ask', {
      templateUrl: 'views/submit.html',
      //controller: 'SubmitController',
      //controllerAs: 'submission'
    });

    // A specific Question...
    $routeProvider.when('/questions/:question', {
      templateUrl: 'views/selected.html',
      controller: 'QuestionsController',
      //controllerAs: 'selectedQuestion'
    });

    $routeProvider.when('/404', {
      // FIXME: Make `views/404.html`
      templateUrl: 'views/404.html'
    });

    $routeProvider.when('/', {
      redirectTo: '/questions'
    })

    $routeProvider.otherwise('/404');
  });

  app.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('https://gatorpazz-tiy-upvote.firebaseio.com');
  });

  app.controller('QuestionsController', function(Restangular){
    var self = this;

    Restangular
      .one('user').put('{ "username": "gatorpazz" }');
  });







})(window);
