module.exports = function repeater(str, options) {
    let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = ''} = options;
    str = String(str);
    addition = String(addition);

    let additionArr = new Array(additionRepeatTimes);
    addition = additionArr.fill(addition).join(additionSeparator);

    str += addition;
    let strArr = new Array(repeatTimes);
    str = strArr.fill(str).join(separator);

    return str;
};
  