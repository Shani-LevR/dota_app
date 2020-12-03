const selectHeroes = (heroes) => {
  var supportCount = 2;
  var carryCount = 1;
  var nukerCount = 1;
  var disablerCount = 1;
  var team = [];
  var start = Math.floor(Math.random() * heroes.length);

  // Go through the heroes array in a cyclic way, building a team of 5 heroes
  while (true) {
    if (start >= heroes.length) {
      start = 0;
    }

    // Check if current hero has one of the roles, add it to the team if the role is still available
    if (heroes[start].roles.indexOf("Support") > -1 && supportCount > 0) {
      team.push(heroes[start]);
      heroes.splice(heroes[start].roles.indexOf("Support"), 1);
    } else if (heroes[start].roles.indexOf("Carry") > -1 && carryCount > 0) {
      team.push(heroes[start]);
      heroes.splice(heroes[start].roles.indexOf("Carry"), 1);
    } else if (heroes[start].roles.indexOf("Nuker") > -1 && nukerCount > 0) {
      team.push(heroes[start]);
      heroes.splice(heroes[start].roles.indexOf("Nuker"), 1);
    } else if (
      heroes[start].roles.indexOf("Disabler") > -1 &&
      disablerCount > 0
    ) {
      team.push(heroes[start]);
      heroes.splice(heroes[start].roles.indexOf("Disabler"), 1);
    }

    start++;

    if (team.length === 5) {
      break;
    }
  }

  return team;
};

// Build the teams
export const createTeams = (players) => {
  var firstTeam = selectHeroes(players);
  var secondTeam = selectHeroes(players);

  return [firstTeam, secondTeam];
};
