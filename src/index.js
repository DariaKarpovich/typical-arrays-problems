
exports.min = function min (array) {
   if (array == [] || array == 0 || array == undefined) {
        return 0;
    } else {
         let result = array[0];
         for (let i = 1; i < array.length; i++) {
            if (result > array[i]) result = array[i]; 
         }
    return result;
    }
}

exports.max = function max (array) {
if (array == [] || array == 0 || array == undefined) {
        return 0;
    } else {
        let result = array[0];
        for (let i = 1; i < array.length; i++) {
            if (result < array[i]) result = array[i]; 
        }
    return result;
    }
}

exports.avg = function avg (array) {
 if (array == [] || array == 0 || array == undefined) {
        return 0;
    } else {
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
    return result / array.length;
    }
}
