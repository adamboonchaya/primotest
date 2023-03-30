const merge = (firstArray: number[], secondArray: number[]): number[] => {
    const final = Array(firstArray.length + secondArray.length)
    let i = 0, j = 0, k = 0;
    while ( i < firstArray.length && j < secondArray.length) {
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

const testArray1: number[] = [1, 3, 5, 7];
const testArray2: number[] = [2, 3, 8, 9, 10];
const testAnswer: number[] = merge(testArray1,testArray2);

console.log(testAnswer);