input.onButtonPressed(Button.A, function () {
    nombre_personne += 1
    basic.showNumber(nombre_personne)
    if (nombre_personne == 10) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    nombre_personne = 0
    basic.showNumber(nombre_personne)
})
input.onButtonPressed(Button.B, function () {
    nombre_personne += -1
    if (nombre_personne == -1) {
        nombre_personne = 0
    }
    basic.showNumber(nombre_personne)
})
let nombre_personne = 0
basic.showNumber(nombre_personne)
basic.forever(function () {
	
})
