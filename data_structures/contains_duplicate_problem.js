//-----------------------------------------------
// Move Zeroes Problem
//---------------------------- ------------------

// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

 
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Explanation:

// All elements are distinct.

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

//-----------------------------------------------
// Move Zeroes Solution
//---------------------------- ------------------

// # Intuition
// To determine if any value appears at least twice in the array, 
// we can utilize a set data structure to keep track of the unique elements 
// we have seen as we iterate through the array. 
// If we encounter an element that is already in the set, 
// it means we have found a duplicate, and we can return true. 
// If we finish iterating through the array without finding any duplicates, we return false.

// # Approach
// 1. Initialize an empty set to store unique elements.
// 2. Iterate through each element in the array:
//    - If the element is already in the set, return true (duplicate found).
//    - Otherwise, add the element to the set.
// 3. If we finish iterating through the array without finding duplicates, return false.

// # Complexity
// - Time Complexity: O(n), where n is the length of the array. We traverse the array once.
// - Space Complexity: O(n) in the worst case, if all elements are unique and we store them in the set.

function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true; // Duplicate found
        }
        seen.add(num); // Add the number to the set
    }
    return false; // No duplicates found
}