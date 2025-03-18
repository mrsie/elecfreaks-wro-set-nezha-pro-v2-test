input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    nezhaV2.start(nezhaV2.MotorPostion.M1, 0)
})
input.onButtonPressed(Button.A, function () {
    nezhaV2.start(nezhaV2.MotorPostion.M1, 100)
})
input.onButtonPressed(Button.B, function () {
    nezhaV2.start(nezhaV2.MotorPostion.M1, -100)
})
PlanetX_Basic.buttonEvent(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.ButtonStateList.C, function () {
    zahl += -1
    display.showNumber(zahl)
})
PlanetX_Basic.buttonEvent(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.ButtonStateList.D, function () {
    zahl += 1
    display.showNumber(zahl)
})
let zahl = 0
let display: PlanetX_Display.TM1637LEDs = null
display = PlanetX_Display.tm1637Create(PlanetX_Display.DigitalRJPin.J4)
zahl += 0
basic.forever(function () {
	
})
