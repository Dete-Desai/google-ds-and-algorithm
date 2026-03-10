//-----------------------------------------------
// Two Sum Problem
//---------------------------- ------------------
// TWO SUM PROBLEM
// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.

 
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 
// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

//--------------------------------
// Solution: Hash Map
//--------------------------------
// # Intuition
// The problem asks us to find two numbers in an array that sum up to a target value. 
// Instead of checking every possible pair (which would be slow), 
// we can use a hash map to remember numbers we've already seen. 
// As we scan through the array, for each number, 
// we check if its complement (target - current number) exists in our map.

// # Approach
// 1. Create a HashMap to store each number and its index as we iterate through the array
// 2. For each element, calculate its complement: `complement = target - nums[i]`
// 3. Check if the complement exists in the HashMap:
//    - If YES: We found our pair! Return the indices `[map.get(complement), i]`
//    - If NO: Store the current number and its index in the map for future lookups
// 4. Continue until we find the pair (problem guarantees exactly one solution exists)

// The key insight is that we only need one pass through the array because we're 
// building our lookup table as we go.

// # Complexity
// - Time complexity: $$O(n)$$
//   - We traverse the array once, and HashMap operations (get/put) are $$O(1)$$ on average
  
// - Space complexity: $$O(n)$$
//   - In the worst case, we store all n elements in the HashMap before finding the answer

// # Code

var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

