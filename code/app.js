window.App = angular.module("AngularBook", []);

App.controller("ExampleController", [
  "$scope", "$rootScope", "NBAPlayersService", function($scope, $rootScope, NBAPlayersService) {
    $rootScope.message = "This is a message from $rootScope";
    $scope.message = "Overwritten yo!"
    $scope.players = NBAPlayersService.getPlayers()
  }
]);

App.factory("NBAPlayersService", function() {
  _players = ["Kevin Durant", "John Wall", "Steph Curry"]

  getPlayers = function() {
    return _players
  }

  return {
    getPlayers: getPlayers
  }

});
