module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turnsSpeedToSec = turnsSpeed / 3600.0;
    return {
        turns: Math.pow(2, disksNumber) - 1,
        seconds: (Math.pow(2, disksNumber) - 1) / turnsSpeedToSec,
    };
}