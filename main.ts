input.onButtonPressed(Button.A, function () {
    turtle.setPosition(0, 4)
    turtle.pen(TurtlePenMode.Down)
    for (let index = 0; index <= 3; index++) {
        turtle.forward(4)
        turtle.turnRight()
    }
})
