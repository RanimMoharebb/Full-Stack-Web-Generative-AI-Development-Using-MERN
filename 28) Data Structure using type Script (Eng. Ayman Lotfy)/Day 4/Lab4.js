// Problem 1: Binary Search

function binarySearch(arr, n) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === n) {
            return mid;
        } else if (arr[mid] < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const binaryArr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log("Problem 1: Index of 7:", binarySearch(binaryArr, 7));
console.log("Problem 1: Index of 100:", binarySearch(binaryArr, 100));


// Problem 2: Bubble Sort

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const bubbleArr = [64, 34, 25, 12, 22, 11, 90];
console.log("Problem 2:", bubbleSort(bubbleArr));


// Problem 3: Insertion Sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const insertionArr = [64, 34, 25, 12, 22, 11, 90];
console.log("Problem 3:", insertionSort(insertionArr));


// Problem 4: Linear Search

function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i;
        }
    }
    return -1;
}

const linearArr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log("Problem 4: Index of 7:", linearSearch(linearArr, 7));
console.log("Problem 4: Index of 100:", linearSearch(linearArr, 100));


// Problem 5: Selection Sort

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
    return arr;
}

const selectionArr = [64, 34, 25, 12, 22, 11, 90];
console.log("Problem 5:", selectionSort(selectionArr));
