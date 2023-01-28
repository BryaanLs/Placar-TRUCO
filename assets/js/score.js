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

const btns1 = document.querySelector('#btns1');
const btns2 = document.querySelector('#btns2');

function buttons(divBtn) {
    const btn1 = divBtn.querySelector('#btn1');
    const btn3 = divBtn.querySelector('#btn3');
    const btn6 = divBtn.querySelector('#btn6');
    const btn9 = divBtn.querySelector('#btn9');
    const btn12 = divBtn.querySelector('#btn12');
    const btnZerar = divBtn.querySelector('#btnZerar');
    const listaBtn = [btn1, btn3, btn6, btn9, btn12, btnZerar]
    return listaBtn;
}

const listaBtn1 = buttons(btns1);
const listaBtn2 = buttons(btns2);

const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
score1.value = 0;
score2.value = 0;


function placar(score, lista) {
    lista[0].addEventListener('click', (e) => {
        score.value = addUm(score);
    })

    lista[1].addEventListener('click', (e) => {
        score.value = addTres(score);
    })
    lista[2].addEventListener('click', (e) => {
        score.value = addSeis(score);
    })
    lista[3].addEventListener('click', (e) => {
        score.value = addNove(score);
    })

    lista[4].addEventListener('click', (e) => {
        score.value = addDoze(score);
    })
    lista[5].addEventListener('click', (e) => {
        score.value = zerarScore(score);
    })

}

function addUm(score) {
    score.value++;
    if (parseInt(score.value) == 11) {
        score.classList.add('maoDeOnze');
    }
    if (parseInt(score.value) > 12) {
        score.value = 0;
        score.classList.remove('maoDeOnze');
    }
    return score.value;
}

function addTres(score) {
    score.value = parseInt(score.value) + 3;
    // parseInt(score1.value) + 3;
    if (parseInt(score.value) == 11) {
        score.classList.add('maoDeOnze');
    }
    if (parseInt(score.value) > 12) {
        score.value = 0;
        score.classList.remove('maoDeOnze');
        // venceu();
    }
    return score.value;
}

function addSeis(score) {
    score.value = parseInt(score.value) + 6;
    if (parseInt(score.value) == 11) {
        score.classList.add('maoDeOnze');
    }
    if (parseInt(score.value) > 12) {
        score.value = 0;
        score.classList.remove('maoDeOnze');
        // venceu();
    }
    return score.value;
}

function addNove(score) {
    score.value = parseInt(score.value) + 9;
    if (parseInt(score.value) == 11) {
        score.classList.add('maoDeOnze');
    }
    if (parseInt(score.value) > 12) {
        score.value = 0;
        score.classList.remove('maoDeOnze');
        venceu();
    }
    return score.value;
}

function addDoze(score) {
    score.value = parseInt(score.value) + 12;

    if (parseInt(score.value) > 12) {
        score.value = 0;
        score.classList.remove('maoDeOnze');
        // venceu();
    }
    return score.value;
}

function zerarScore(score) {
    score.value = 0;
    score.classList.remove('maoDeOnze');
    return score.value;
}

placar(score1, listaBtn1);
placar(score2, listaBtn2);