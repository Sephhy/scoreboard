let homeTeamScore = document.getElementById("home-team-score")

let awayTeamScore = document.getElementById("away-team-score")




let homeScore = 0
let awayScore = 0

// 

function homePlusOne() {
    homeScore += 1
    homeTeamScore.textContent = homeScore
}

function homePlusTwo() {
    homeScore += 2
    homeTeamScore.textContent = homeScore
}

function homePlusThree() {
    homeScore += 3
    homeTeamScore.textContent = homeScore
}

function awayPlusOne() {
    awayScore += 1
    awayTeamScore.textContent = awayScore
}

function awayPlusTwo() {
    awayScore += 2
    awayTeamScore.textContent = awayScore
}

function  awayPlusThree() {
    awayScore += 3
    awayTeamScore.textContent = awayScore
}

function newGame() {
    homeScore = 0
    homeTeamScore.textContent = homeScore
    awayScore = 0
    awayTeamScore.textContent = awayScore
}





