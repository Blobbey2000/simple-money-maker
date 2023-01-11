let howMuchMoney = 0
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    story.showPlayerChoices("Upgrade money per game update", "Cancel")
    if (story.checkLastAnswer("Upgrade money per game update")) {
        if (info.score() > howMuchMoney * 3) {
            info.changeScoreBy(0 - howMuchMoney * 3)
            howMuchMoney += 1
            music.powerUp.play()
        } else {
            game.splash("You don't have enough money!")
        }
    }
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
    info.changeScoreBy(howMuchMoney)
})
