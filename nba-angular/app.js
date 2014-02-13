window.App = angular.module("nbaAngular", []);

App.controller("TeamRankingsController", function($scope, NbaTeamsService) {
  $scope.teams = NbaTeamsService.getTeams();
  $scope.rankedTeams = NbaTeamsService.getRankedTeams();
});

App.factory("NbaTeamsService", function() {

  _teams = [
    {city: "Indiana", name: "Pacers", conference: "East"},
    {city: "Miami", name: "Heat", conference: "East"},
    {city: "Toronto", name: "Raptors", conference: "East"},
    {city: "Chicago", name: "Bulls", conference: "East"},
    {city: "Atlanta", name: "Hawks", conference: "East"},
    {city: "Washington", name: "Wizards", conference: "East"},
    {city: "Brooklyn", name: "Nets", conference: "East"},
    {city: "Charlotte", name: "Bobcats", conference: "East"},
    {city: "Detroit", name: "Pistons", conference: "East"},
    {city: "New York", name: "Knicks", conference: "East"},
    {city: "Cleveland", name: "Cavaliers", conference: "East"},
    {city: "Boston", name: "Celtics", conference: "East"},
    {city: "Orlando", name: "Magic", conference: "East"},
    {city: "Philadelphia", name: "76ers", conference: "East"},
    {city: "Milwaukee", name: "Bucks", conference: "East"},
    {city: "Oklahoma City", name: "Thunder", conference: "West"},
    {city: "San Antonio", name: "Spurs", conference: "West"},
    {city: "Houston", name: "Rockets", conference: "West"},
    {city: "Los Angeles", name: "Clippers", conference: "West"},
    {city: "Portland", name: "TrailBlazers", conference: "West"},
    {city: "Dallas", name: "Mavericks", conference: "West"},
    {city: "Phoenix", name: "Suns", conference: "West"},
    {city: "Golden State", name: "Warriors", conference: "West"},
    {city: "Memphis", name: "Grizzlies", conference: "West"},
    {city: "Minnesota", name: "Timberwolves", conference: "West"},
    {city: "Denver", name: "Nuggets", conference: "West"},
    {city: "New Orleans", name: "Pelicans", conference: "West"},
    {city: "Utah", name: "Jazz", conference: "West"},
    {city: "Los Angeles", name: "Lakers", conference: "West"},
    {city: "Sacramento", name: "Kings", conference: "West"}
  ];

  _rankedTeams = [
    {city: "Indiana", name: "Pacers", conference: "East"},
    {city: "Miami", name: "Heat", conference: "East"},
    {city: "Toronto", name: "Raptors", conference: "East"},
    {city: "Chicago", name: "Bulls", conference: "East"},
    {city: "Atlanta", name: "Hawks", conference: "East"},
    {city: "Washington", name: "Wizards", conference: "East"},
    {city: "Brooklyn", name: "Nets", conference: "East"},
    {city: "Charlotte", name: "Bobcats", conference: "East"},
    {city: "Detroit", name: "Pistons", conference: "East"},
    {city: "New York", name: "Knicks", conference: "East"},
    {city: "Cleveland", name: "Cavaliers", conference: "East"},
    {city: "Boston", name: "Celtics", conference: "East"},
    {city: "Orlando", name: "Magic", conference: "East"},
    {city: "Philadelphia", name: "76ers", conference: "East"},
    {city: "Milwaukee", name: "Bucks", conference: "East"},
    {city: "Oklahoma City", name: "Thunder", conference: "West"},
    {city: "San Antonio", name: "Spurs", conference: "West"},
    {city: "Houston", name: "Rockets", conference: "West"},
    {city: "Los Angeles", name: "Clippers", conference: "West"},
    {city: "Portland", name: "TrailBlazers", conference: "West"},
    {city: "Dallas", name: "Mavericks", conference: "West"},
    {city: "Phoenix", name: "Suns", conference: "West"},
    {city: "Golden State", name: "Warriors", conference: "West"},
    {city: "Memphis", name: "Grizzlies", conference: "West"},
    {city: "Minnesota", name: "Timberwolves", conference: "West"},
    {city: "Denver", name: "Nuggets", conference: "West"},
    {city: "New Orleans", name: "Pelicans", conference: "West"},
    {city: "Utah", name: "Jazz", conference: "West"},
    {city: "Los Angeles", name: "Lakers", conference: "West"},
    {city: "Sacramento", name: "Kings", conference: "West"}
  ];

  getTeams = function() {
    return _teams;
  }

  getRankedTeams = function() {
    return _rankedTeams;
  }

  return {
    getTeams: getTeams,
    getRankedTeams: getRankedTeams
  }

});

// App.directive("sortableList", function() {
// 	return {

// 		restrict: "A",
// 		scope: {
// 			rankedTeams: "="
// 		}
// 		template: "<li ng-repeat='rankedTeam in rankedTeams' sortable-list><span>{{$index + 1}} {{rankedTeam.city}} {{rankedTeam.name}}</span></li>",
// 		link: function(scope, element, attrs) {
// 			element.sortable()
// 		}
// 	}
// });

// JQUERY
// $(function() {
// 	$(".sortable").sortable({
// 		update: function(event, ui) {
// 			rankedTeams = ui.item.parent().find("li.nba-team");
// 			_.	each(rankedTeams, function(rankedTeam, index) {
// 				newRankedTeamText = "";
// 				newRankedTeamText += (index + 1);
// 				newRankedTeamText += /[)].*$/.exec($(rankedTeam).text());
// 				console.log(newRankedTeamText);
// 			});
// 		}
// 	});
// });
