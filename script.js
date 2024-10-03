/*function swap(xp, yp) {
    let tmp = xp;
    xp = yp;
    yp = tmp;
    return [xp, yp]; // Return the swapped values
}
function bubbleSort(arr) {
    var n = arr.length;
    for (let i = 0; i <= n - 1; i++) {


        for (let j = 0; j <= n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
            }

        }

    }


    return arr;
}*/
/************************ */
function insertionSort(arr) {
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let currentElement = arr[i];
        // Initialize a variable to keep track of the position where the current element will be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than currentElement,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move to the next element on the left
        }

        // Insert the current element at its correct position
        arr[j + 1] = currentElement;
    }

    return arr; // Return the sorted array
}
/************************************** */
const array = [5, 2, 9, 1, 5, 6];
console.log("Original Array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted Array:", sortedArray);