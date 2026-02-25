// This is a function to merge two sorted arrays into a single sorted array.
// e.g mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]) returns [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(array1, array2){
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while(i < array1.length && j<array2.length){
        if(array1[i] < array2[j]){
            mergedArray.push(array1[i]);
            i++;
        }else{
            mergedArray.push(array2[j]);
            j++;
        }
    }
    // If there are any remaining elements in either array, add them to the merged array
    // mergedArray.push(...array1.slice(i));
    // mergedArray.push(...array2.slice(j));
    // This is another way to concatenate the remaining elements
    mergedArray = mergedArray.concat(array1.slice(i)).concat(array2.slice(j));
    return console.log(mergedArray);
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])