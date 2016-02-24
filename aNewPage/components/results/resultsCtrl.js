angular.module('quizApp')
  .controller('ResultsCtrl', function($scope, answers, questions, quizService, $stateParams) {
    $scope.answers = answers;
    $scope.questions = questions;
  });
