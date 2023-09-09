input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P0))
    if (0 == pins.digitalReadPin(DigitalPin.P0)) {
        radio.sendString("B")
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
