var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q) {

  this.addNewGame = function(gameObj) {
    var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;

    if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
      gameObj.won = true;
    }
    return $http.post('url', gameObj);

  };
  this.getTeamData = function(team) {
    var url = 'https://api.parse.com/1/classes/' + team;
    $http.get('url')
      .success(function(data) {
        var results = data.data.results;
        var wins = 0;
        var losses = 0;
        for (var i = results.length; i > 0; i--) {
        }
        if (results.won === true) {
          wins++;
        } else if (results.won === false) {
          losses++;
        }
      });
  };
});
