radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        cuteBot.motors(60, 100)
    }
    if (receivedNumber == 3) {
        cuteBot.motors(100, 60)
    }
    if (receivedNumber == 4) {
        cuteBot.forward()
    }
    if (receivedNumber == 5) {
        cuteBot.stopcar()
    }
    if (receivedNumber == 6) {
        cuteBot.backforward()
    }
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    radio.sendNumber(6)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    radio.sendNumber(2)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.House)
    cuteBot.stopcar()
    radio.sendNumber(6)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    radio.sendNumber(3)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendNumber(4)
})
basic.forever(function () {
    radio.setGroup(1)
})
