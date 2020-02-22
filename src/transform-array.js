module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    if (arr.length === 0) return [];

    function discardNext(array, index) {
        (index + 1 < array.length) ? array.splice(index, 2) : array.splice(index, 1);

        return array;
    }

    function discardPrev(array, index) {
        (index > 0) ? array.splice(index - 1, 2) : array.splice(index, 1);

        return array;
    }

    function doubleNext(arr, index) {
        ((index + 1) < arr.length) ? arr.splice(index, 1, arr[index + 1]) : arr.splice(index, 1);

        return arr;
    }

    function doublePrev(arr, index) {
        (index > 0) ? arr.splice(index, 1, arr[index - 1]) : arr.splice(index, 1);

        return arr;
    }

    function double(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === '--double-next') {
                doubleNext(arr, i);
                return double(arr);
            } else if (array[i] === '--double-prev') {
                doublePrev(array, i);
                return double(array);
            } else {
                continue;
            }
        }

        return array;
    }

    function discard(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === '--discard-next') {
                discardNext(array, i);
                return discard(array);
            } else if (array[i] === '--discard-prev') {
                discardPrev(array, i);
                return discard(array);
            } else {
                continue;
            }
        }

        return array;
    }
    
    double(arr);
    discard(arr);

    return arr;
};
