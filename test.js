const wpi = require('wiring-pi');

const PIN = 7;

wpi.setup('wpi');

wpi.pinMode(PIN, wpi.OUTPUT);

setInterval(() => {
    const value = Math.round(Math.random());
    wpi.digitalWrite(PIN, value);
}, 1000);