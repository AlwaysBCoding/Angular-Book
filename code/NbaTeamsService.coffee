App.factory "NbaTeamsService", () ->

  _teams = [
    {city: "Oklahoma City", name: "Thunder", conference: "west"}
  ]

  getTeams = () ->
    _teams

  {
    getTeams: getTeams
  }
