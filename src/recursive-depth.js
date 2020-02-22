module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 0) {
        if(!Array.isArray(arr)) return depth;

        depth++;
        let newMax = depth;
        arr.forEach(el => {
            if(Array.isArray(el)) {
                newMax = Math.max(newMax, this.calculateDepth(el, depth));
            }
        });

        return newMax;
    }
};