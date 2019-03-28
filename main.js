$().ready(function () {

    const submitPaper = $(`#paper`)[0].alt
    const submitRock = $(`#rock`)[0].alt
    const submitScisors = $(`#scisors`)[0].alt
    const userName = prompt("What is your name?")
    $("#user-name-top").text(userName + ' vs Computer ')
    $("#user-name").text(userName)

    // main object with all parameters
    const app = {
        computer: {
            choises: ['rock', 'paper', 'scisors'],
            computerScore: 0,
            computerChoise: function () {
                return this.choises[Math.floor(Math.random() * app.computer.choises.length)]
            }
        },
        user: {
            userScore: 0
        },
        compare: function (userChoise, computerChoise) {
            // match
            if (userChoise === 'rock' && computerChoise === 'rock'
                || userChoise === 'paper' && computerChoise === 'paper'
                || userChoise === 'scisors' && computerChoise === 'scisors') {
                this.match++
            }
            // user Wan
            if (userChoise === 'rock' && computerChoise === 'scisors'
                || userChoise === 'paper' && computerChoise === 'rock'
                || userChoise === 'scisors' && computerChoise === 'paper'
            ) {
                app.user.userScore++
            };
            // computer Wan
            if (userChoise === 'scisors' && computerChoise === 'rock'
                || userChoise === 'rock' && computerChoise === 'paper'
                || userChoise === 'paper' && computerChoise === 'scisors'
            ) {
                app.computer.computerScore++
            }
            if (app.user.userScore === 3) {
                alert( userName +' won')
                app.computer.computerScore = 0;
                app.user.userScore = 0 ;
                app.match = 0
            }
            if (app.computer.computerScore === 3) {
                alert("Computer won")
                app.computer.computerScore = 0;
                app.user.userScore = 0 ;
                app.match = 0
            }
            // update the ui in the game
            $("#userScore").text(app.user.userScore)
            $("#computerScore").text(app.computer.computerScore)
            $("#matchScore").text(app.match)
            $("#computer-chose").text(computerChoise)
        },
        match: 0,
    }

    // Event handlers
    $(`#paper`).click((function () {
        app.compare(submitPaper, app.computer.computerChoise())
    }))
    $(`#rock`).click((function () {
        app.compare(submitRock, app.computer.computerChoise())
    }))
    $(`#scisors`).click((function () {
        app.compare(submitScisors, app.computer.computerChoise())
    }))
})
