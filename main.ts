radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        status = 1
    } else if (receivedString == "L") {
        status = 2
    } else if (receivedString == "R") {
        status = 3
    } else if (receivedString == "B") {
        status = 4
    } else if (receivedString == "D") {
        status = 5
    } else {
    	
    }
})
let status = 0
radio.setGroup(1)
status = 0
basic.forever(function () {
    if (status == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 130)
    } else if (status == 2) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
        basic.pause(100)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (status == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        basic.pause(100)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (status == 4) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else if (status == 5) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
})
