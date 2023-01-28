
const btn = document.querySelector('#send');
const table = document.querySelector('.table');

btn.addEventListener('click', (e) => {
    const teams = getTeams();
    salvaTimes(teams);
})


function getTeams() {
    const getTeam1 = document.querySelector('#team1');
    const getTeam2 = document.querySelector('#team2');
    const teams = [getTeam1.value, getTeam2.value]
    return teams;
}

function salvaTimes(times) {
    const teamJSON = JSON.stringify(times)
    localStorage.setItem('times', teamJSON);
}
