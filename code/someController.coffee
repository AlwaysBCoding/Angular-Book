App.controller "NbaStandingsController",
[
  "$scope",
  "NbaTeamsService"
(
  $scope
  NbaTeamsService
) ->

  $scope.teams = NbaTeamsService.getTeams()
]
