let moisture = 0
serial.redirectToUSB()
basic.showNumber(moisture)
basic.forever(function () {
    serial.writeLine("")
    basic.pause(500)
})
