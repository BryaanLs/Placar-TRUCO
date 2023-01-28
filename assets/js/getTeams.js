function loadTeams() {
    const teams = localStorage.getItem('times');
    const listTeams = JSON.parse(teams);

    return listTeams;
}

function setNameTimes(times) {
    const setTeam1 = document.querySelector('#team1-play');
    const setTeam2 = document.querySelector('#team2-play');
    setTeam1.value = times[0];
    setTeam2.value = times[1];
}

const listTeams = loadTeams();

setNameTimes(listTeams);

