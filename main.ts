let Numero1 = 0
let Numero2 = 0
let Cociente = 0
let Residuo = 0
basic.forever(function () {
    Numero1 = 11
    Numero2 = 4
    Cociente = Numero1 / Numero2
    Residuo = Numero1 % Numero2
    basic.showString("Cociente:")
    basic.showNumber(Cociente)
    basic.showString("Residuo:")
    basic.showNumber(Residuo)
})
