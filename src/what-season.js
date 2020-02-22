module.exports = function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('getMonth')) throw new Error();

  return monthToSeason(date.getMonth());
};

function monthToSeason(month) {
  if(month < 2 || month == 11) {
    return 'winter';
  } else if(month  < 5) {
    return 'spring';
  } else if(month < 8) {
    return 'summer';
  } else {
    return 'autumn';
  }
}