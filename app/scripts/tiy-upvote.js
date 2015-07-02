/*global: angular _ moment */
(function() {
  angular.module('tiy-upvote', ['ngRoute', 'restangular' ])
    .config(function($routeProvider) {
      $routeProvider.when('/questions', {
        templateUrl: 'views/questions.html',
        // controller: 'QuestionsController',
        // controllerAs: 'questions'
      });
      $routeProvider.when('/answer', {
        templateUrl: '../views/answer.html',
        // controller: 'AnswerController',
        // controllerAs: 'answer'
      });
      $routeProvider.when('/ask', {
        templateUrl: '../views/ask.html',
        // controller: 'AskController',
        // controllerAs: 'ask'
      });
      $routeProvider.otherwise('/questions');
    }) // END config($routeProvider)
    .config(function(RestangularProvider){

    })
  ; // END module('tiy-upvote')

  // app.controller(..., function(){
  //   // 150 lines or so... Where was I again?
  // }); // END controller(...)
  //
  // app.controller(...);

})(window);
