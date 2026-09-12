
/*
Write a function called same, which accepts two arrays.
the function should return true if every value in array has its corresponding value squared in the second array.
corresponding value squared in the second array.
*/
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let freq1 = {};
    let freq2 = {};

    for (let val of arr1) {
        freq1[val] = (freq1[val] || 0) + 1;
    }

    for (let val of arr2) {
        freq2[val] = (freq2[val] || 0) + 1;
    }

    for (let key in freq1) {
        if (!(key * key in freq2)) return false;
        if (freq2[key * key] !== freq1[key]) return false;
    }

    return true;
}


/*
Given two strings, 
write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 
*/
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let freq = {};

    for (let char of str1) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!freq[char]) return false;
        freq[char]--;
    }

    return true;
}


/*
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }

    return undefined;
}


/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted. 
*/
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}


/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.
*/
function maxSubarraySum(arr, n) {
    if (n > arr.length) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}


/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead.
*/
function minSubArrayLen(arr, sum) {
    let total = 0;
    let start = 0;
    let minLen = Infinity;

    for (let end = 0; end < arr.length; end++) {
        total += arr[end];

        while (total >= sum) {
            minLen = Math.min(minLen, end - start + 1);
            total -= arr[start];
            start++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}


/*
Write a function called findLongestSubstring, 
which accepts a string and returns the length of the longest substring with all distinct characters.
*/
function findLongestSubstring(str) {
    let seen = {};
    let start = 0;
    let maxLen = 0;

    for (let end = 0; end < str.length; end++) {
        let char = str[end];

        if (seen[char] >= start) {
            start = seen[char] + 1;
        }

        seen[char] = end;
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}