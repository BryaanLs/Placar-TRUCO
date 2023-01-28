
const btn = document.querySelector('#send');
const table = document.querySelector('.table');
btn.addEventListener('click', (e) => {

    e.preventDefault();
    const getTeam1 = document.querySelector('#team1');
    const getTeam2 = document.querySelector('#team2');
    const team1 = getTeam1.value;
    const team2 = getTeam2.value;

    const teams = [team1, team2]
    table.innerHTML += teams;

    console.log(teams[1], teams[0]);
})










