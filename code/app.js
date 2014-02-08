window.App = angular.module("AngularBook", []);

App.controller("ExampleController", [
  "$scope", "$rootScope", "NBAPlayersService", function($scope, $rootScope, NBAPlayersService) {
    $rootScope.message = "This is a message from $rootScope";
    $scope.message = "Overwritten yo!"
    $scope.players = NBAPlayersService.getPlayers()
  }
]);

App.controller("ExampleController2", [
  "$scope", "NBAPlayersService", "$compile", function($scope, NBAPlayersService, $compile) {

    $scope.players = NBAPlayersService.getPlayers();

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

App.directive("searchableTable", function() {

  return {
    scope: {},
    restrict: "E",
    template: "<table><tr ng-repeat='player in players'><td>{{player}}</td></tr></table>"
  }

});
