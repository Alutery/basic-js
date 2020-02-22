const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

function isNumber(n){
  return !Number.isNaN(parseFloat(n));
}

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string') return false;
  if (sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) return false;
  if(!isNumber(sampleActivity)) return false;
  
  let age =Math.ceil( Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));

  return age;
};
