//-----------------------------------------------
// Move Zeroes Problem
//---------------------------- ------------------

// Given an integer array nums, move all 0's 
// to the end of it while maintaining the relative 
// order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 
// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 
// Follow up: Could you minimize the total number of operations done?

//-----------------------------------------------
// Move Zeroes Solution
//---------------------------- ------------------

// # Intuition
// The problem asks us to move all zeroes in an array to the end while keeping the order of non-zero elements. 
// A straightforward approach is to use two pointers: one to track the position of the next non-zero element and another to iterate through the array.

// # Approach
// 1. Initialize a pointer `lastNonZeroFoundAt` to keep track of the position of the last non-zero element found.
// 2. Iterate through the array with another pointer `current`:
//    - If `nums[current]` is not zero, swap it with the element at `lastNonZeroFoundAt` and increment `lastNonZeroFoundAt`.
// 3. By the end of the iteration, all non-zero elements will be moved to the front, and all zeroes will be at the end.

// # Complexity
// - Time Complexity: O(n), where n is the length of the array. We traverse the array once.
// - Space Complexity: O(1), since we are doing the operation in-place without using extra space.   

function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0; 
    for (let current = 0; current < nums.length; current++) {
        if (nums[current] !== 0) {
            // Swap elements at lastNonZeroFoundAt and current
            [nums[lastNonZeroFoundAt], nums[current]] = [nums[current], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++;
        }
    }
    return nums; // Return the modified array (optional, since it's modified in-place)
}