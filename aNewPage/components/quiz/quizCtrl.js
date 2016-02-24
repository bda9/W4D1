angular.module('quizApp')
  .controller('QuizCtrl', function($scope, questions, quizService, $stateParams) {

    $scope.questions = questions;
    $scope.answers = {};

  });
