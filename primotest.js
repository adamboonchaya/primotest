var merge = function (firstArray, secondArray) {
    var final = Array(firstArray.length + secondArray.length);
    var i = 0, j = 0, k = 0;
    while (i < firstArray.length && j < secondArray.length) {
        final[k++] = firstArray[i] < secondArray[j] ? firstArray[i++] : secondArray[j++];
    }
    while (i < firstArray.length) {
        final[k++] = firstArray[i++];
    }
    while (j < secondArray.length) {
        final[k++] = secondArray[j++];
    }
    return final;
};
var testArray1 = [1, 3, 5, 7];
var testArray2 = [2, 3, 8, 9, 10];
var testAnswer = merge(testArray1, testArray2);
console.log(testAnswer);
