// ------------------------
// 53. Maximum Subarray
// ------------------------

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
 
// Follow up: If you have figured out the O(n) solution, 
// try coding another solution using the divide and conquer approach, which is more subtle.

// ------------------------------
// 53. Maximum Subarray Solution
// ------------------------------

// This solves the Maximum Subarray 
// Problem: Find the contiguous subarray within an array that has the largest sum.

// Initial Setup:

// maxSum = -Infinity: We start with the smallest possible value so any sum will be larger
// currentSum = 0: Start with no elements in our current subarray

// Step 1: Add the current number to our ongoing subarray sum.
// Step 2: Update maxSum if the currentSum is greater than maxSum. This keeps track of the largest sum we've seen so far.
// Step 3: If currentSum drops below 0, reset it to 0. This is because a negative sum would only decrease the total for any future subarray, so we start fresh from the next number.
// Step 4: Continue this process for each number in the array. By the end, maxSum will hold the largest sum of any contiguous subarray.
// This algorithm is efficient with a time complexity of O(n) since we traverse the array once, and a space complexity of O(1) as we only use a couple of variables to keep track of sums.
// # Complexity
// - Time complexity: O(n) - We traverse the array once.
// - Space complexity: O(1) - We use only a constant amount of space for maxSum and currentSum.


var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let num of nums) {
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);  
        if (currentSum < 0) {
            currentSum = 0; // Reset if current sum is negative
        }
    }

    return maxSum;
}