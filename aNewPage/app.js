angular.module('quizApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'components/home/homeView.html',
        controller: 'HomeCtrl',
      })
      .state('quiz', {
        url: '/quiz/:quizName',
        templateUrl: 'components/quiz/views/quizContainerView.html',
        controller: 'QuizCtrl',
      })
      .state('quiz.view', {
        parent: 'quiz',
        views: {
          'list': {
            templateUrl: 'components/quiz/views/questionListWrapperView.html'
          },
          'detail': {
            templateUrl: 'components/quiz/views/questionDetailView.html'
          }
        }
      })
      .state('results', {
        url: '/results',
        templateUrl: 'components/results/resultsView.html',
        controller: 'ResultsCtrl',
        params: {
          quizName: '',
          quiz: ''
        }
      });
  });
