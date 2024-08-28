let umidade = 0
basic.showIcon(IconNames.Heart)
datalogger.setColumnTitles("umidade da terra")
robotbit.Servo(robotbit.Servos.S1, 50)
basic.forever(function () {
    umidade = pins.analogReadPin(AnalogPin.P1)
    if (umidade > 1000) {
        basic.showIcon(IconNames.Square)
    } else if (umidade > 800) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
