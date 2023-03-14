radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        OLED.clear()
        OLED.writeStringNewLine("You Pressed A!")
    } else if (receivedNumber == 1) {
        OLED.clear()
        OLED.writeStringNewLine("You Pressed B!")
    } else {
    	
    }
})
radio.setGroup(1)
OLED.init(128, 64)
basic.showString("R")
