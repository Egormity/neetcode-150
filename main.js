// ------------------------- # 7. 2025.05.07 - 1:08:36 | Leetcode 36 - Valid Sudoku - Medium ------------------------- //
// My solution
// var isValidSudoku = function (board) {
//     let result = true;
//     for (const item of board) {
//         const dic = {};
//         item.forEach((el) => {
//             if (el === ".") return;
//             if (dic[el]) {
//                 result = false;
//                 dic[el] += 1;
//             } else dic[el] = 1;
//         });
//     }

//     //
//     if (!result) return result;
//     for (let i = 0; i < 3; i++) {
//         const items = board.slice(3 * i, 3 * (i + 1));
//         const rows = { 1: {}, 2: {}, 3: {} };
//         items.forEach((el) =>
//             el.forEach((char, i) => {
//                 if (char === ".") return;
//                 const row = rows[Math.ceil((i + 1) / 3) + ""];
//                 if (row[char]) {
//                     result = false;
//                     row[char] += 1;
//                 } else row[char] = 1;
//             })
//         );
//     }
//     if (!result) return result;

//     //
//     const items = board.slice(0);
//     const cols = {};
//     items.forEach((el) =>
//         el.forEach((char, i) => {
//             if (char === ".") return;
//             if (!cols[i + ""]) cols[i + ""] = {};
//             col = cols[i + ""];
//             if (col[char]) {
//                 result = false;
//                 col[char] += 1;
//             } else col[char] = 1;
//         })
//     );
//     console.log(cols);
//     return result;
// };

// Optimal solution
// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function (board) {
//     const columns = [];
//     const boxes = [];

//     //
//     for (let rowI = 0; rowI < board.length; rowI++) {
//         const row = board[rowI];
//         rowDic = {};
//         for (let charI = 0; charI < row.length; charI++) {
//             const char = row[charI];
//             if (char === ".") continue;
//             if (char in rowDic) return false;
//             rowDic[char] = true;
//         }

//         //
//         for (let charI = 0; charI < row.length; charI++) {
//             const char = row[charI];

//             //
//             if (columns[charI]) {
//                 if (char !== "." && columns[charI].includes(char)) return false;
//                 columns[charI].push(char);
//             } else columns.push([char]);

//             //
//             const boxI = Math.floor(rowI / 3) * 3 + Math.floor(charI / 3);
//             if (boxes[boxI]) {
//                 if (char !== "." && boxes[boxI].includes(char)) return false;
//                 boxes[boxI].push(char);
//             } else boxes.push([char]);
//         }
//     }

//     //
//     return true;
// };
// console.log(
//     isValidSudoku([
//         [".", "8", "7", "6", "5", "4", "3", "2", "1"],
//         ["2", ".", ".", ".", ".", ".", ".", ".", "."],
//         ["3", ".", ".", ".", ".", ".", ".", ".", "."],
//         ["4", ".", ".", ".", ".", ".", ".", ".", "."],
//         ["5", ".", ".", ".", ".", ".", ".", ".", "."],
//         ["6", ".", ".", ".", ".", ".", ".", ".", "."],
//         ["7", ".", ".", ".", ".", ".", ".", ".", "."],
//         ["8", ".", ".", ".", ".", ".", ".", ".", "."],
//         ["9", ".", ".", ".", ".", ".", ".", ".", "."],
//     ])
// );

// ------------------------- # 8. 2025.05.09 - 1:27:12 | Leetcode 271 - Encode and Decode Strings - Medium ------------------------- //
// const divisor = "/#@";
// const encode = (strs) => strs.join(divisor);
// const decode = (str) => str.split(divisor);

// ---- # 9. 2025.05.10 - [1:35:32](https://www.youtube.com/watch?v=T0u5nwSA0w0&t=5732s) | Leetcode 128 - Longest Consecutive Sequence - Medium --- //
// My solution - optimal
//
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function(nums) {
//     const sorted = nums.sort((a, b) => a - b);
//     let maxCount = 0;
//     let curCount = 1;
//     for (let i = 0; i < sorted.length; i++) {
//         const cur = sorted[i];
//         const next = sorted[i + 1];
//         if (cur === next) continue;
//         if (cur + 1 === next) ++curCount;
//         else curCount = 1;
//         maxCount = Math.max(maxCount, curCount);
//     };
//     return maxCount;
// };
//
// Hash set solution
// var longestConsecutive = function(nums) {
//     const obj = {};
//     nums.forEach(num => (obj[num] = true));
//     let maxCount = 0;
//     for (cur in obj) {
//         let curCount = 0;
//         let num = +cur;
//         while (num in obj) {
//             curCount++;
//             num++;
//         }
//         maxCount = Math.max(maxCount, curCount);
//     };
//     return maxCount;
// };

// ----- # 10. 2025.05.13 - [1:59:05](https://www.youtube.com/watch?v=T0u5nwSA0w0&t=7145s) | LeetCode 125 - Valid Palindrome - Easy ----- //
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	// 1.
	// const sFromatted = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	// return sFromatted === sFromatted.split("").reverse().join("");
	// 2.
	// const sFromatted = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	// for (let i = 0; i < sFromatted.length; i++) {
	//     if (sFromatted[i] !== sFromatted[sFromatted.length - 1 - i]) return false;
	// }
	// return true;
	// 3.
	// const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
	// let leftI = 0;
	// let rightI = s.length - 1;
	// while (leftI < rightI) {
	//     while (!alphabet.includes(s[leftI].toLowerCase()) && leftI < rightI) leftI++;
	//     while (!alphabet.includes(s[rightI].toLowerCase()) && leftI < rightI) rightI--;
	//     //
	//     if (s[leftI].toLowerCase() !== s[rightI].toLowerCase()) return false;
	//     leftI++;
	//     rightI--;
	// }
	// return true;
};
// console.log(isPalindrome("aaaaa"));

// ----- # 11. 2025.05.14 - [2:08:18](https://www.youtube.com/watch?v=T0u5nwSA0w0&t=7698s) | LeetCode 167 - Two Sum II - Input Array Is Sorted - medium ----- //
// /**
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (numbers, target) {
//     const hashSet = {};
//     for (let i = 0; i < numbers.length; i++) {
//         const num = numbers[i];
//         const pairNum = hashSet[target - num];
//         if (pairNum !== undefined) return [pairNum + 1, i + 1];
//         hashSet[num] = i;
//     }
//     return null;
// };

// # 12. 2025.05.15 - [2:20:52](https://www.youtube.com/watch?v=T0u5nwSA0w0&t=8452s) | leetCode 15 - 3 Sum - Medium
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//     nums.sort((a, b) => a - b);
//     const result = [];
//     for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
//         if (i == 0 || nums[i] != nums[i - 1]) getSum(nums, i, result);
//     }
//     return result;
// };
// var getSum = function (nums, i, result) {
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//         const sum = nums[i] + nums[left] + nums[right];
//         if (sum < 0) left++;
//         else if (sum > 0) right--;
//         else if (sum === 0) {
//             result.push([nums[i], nums[left++], nums[right--]]);
//             while (left < right && nums[left] == nums[left - 1]) left++;
//         }
//     }
// };
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// # 13. 2025.05.19 - [2:41:03](https://www.youtube.com/watch?v=T0u5nwSA0w0&t=9663s) | LeetCode 11 - Container With Most Water
// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var maxArea = function (height) {
//     // Brute force
//     // let max = 0;
//     // for (let i = 0; i < height.length; i++) {
//     //     const first = height[i];
//     //     for (let j = i + 1; j < height.length; j++) {
//     //         const second = height[j];
//     //         max = Math.max(max, Math.min(first, second) * (j - i));
//     //     }
//     // }
//     // return max;

//     // Optimal
//     let leftI = 0;
//     let rightI = height.length - 1;
//     let max = 0;
//     while (leftI < rightI) {
//         const leftNum = height[leftI];
//         const rightNum = height[rightI];
//         max = Math.max(max, Math.min(leftNum, rightNum) * (rightI - leftI));
//         if (leftNum < rightNum) leftI++;
//         else rightI--;
//     }
//     return max;
// };

// # 14. 2025.05.22 - [2:55:39](https://www.youtube.com/watch?v=T0u5nwSA0w0&t=10539s) | LeetCode 42 - Trapping Rain Water - Hard
// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var trap = function (height) {
//     ///////////////////////// My solution (better than brute force)
//     // const maxHeightLeft = {};
//     // const maxHeighRight = {};
//     // let maxLeft = 0;
//     // let maxRight = 0;

//     // for (let i = 0; i < height.length; i++) {
//     //     const elLeft = height[i];
//     //     maxLeft = Math.max(maxLeft, elLeft);
//     //     maxHeightLeft[i] = maxLeft;

//     //     const elRight = height[height.length - 1 - i];
//     //     maxRight = Math.max(maxRight, elRight);
//     //     maxHeighRight[height.length - 1 - i] = maxRight;
//     // };

//     // let sum = 0;
//     // for (let i = 0; i < height.length; i++) {
//     //     sum += Math.max(Math.min(maxHeightLeft[i], maxHeighRight[i]) - height[i], 0);
//     // };
//     // return sum;

//     ///////////////////////// Optimal solution
//     let left = 0;
//     let right = height.length - 1;
//     let maxLeft = 0;
//     let maxRight = 0;
//     let trappedWater = 0;

//     while (left <= right) {
//         if (height[left] <= height[right]) {
//             if (height[left] >= maxLeft) maxLeft = height[left];
//             else trappedWater += maxLeft - height[left];
//             left++;
//         } else {
//             if (height[right] >= maxRight) maxRight = height[right];
//             else trappedWater += maxRight - height[right];
//             right--;
//         }
//     }
//     return trappedWater;
// };

// # 15. 2025.05.20 - [3:22:30](https://www.youtube.com/watch?v=T0u5nwSA0w0&t=12150s) | LeetCode 121 - Best Time To Buy And Sell Stocks
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//     let profit = 0;
//     let min = prices[0];
//     for (let i = 0; i < prices.length; i++) {
//         const price = prices[i];
//         if (price < min) min = price;
//         profit = Math.max(profit, price - min);
//     }
//     return profit;
// };

// # 16. 2025.05.23 - [3:32:00](https://www.youtube.com/watch?v=T0u5nwSA0w0&t=9120s) - LeetCode 3 - Longest Substring Wihout Repeating Characters - medium
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//     let result = 0,
//         leftI = 0,
//         rightI = 0;
//     const dict = {};
//     while (rightI < s.length) {
//         const leftChar = s[leftI],
//             rightChar = s[rightI];
//         if (dict[rightChar]) {
//             delete dict[leftChar];
//             leftI++;
//             continue;
//         }
//         dict[rightChar] = true;
//         result = Math.max(result, rightI - leftI + 1);
//         rightI++;
//     }
//     return result;
// };

//
// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {number}
//  */
// var characterReplacement = function (s, k) {
// My solution
// let max = 0,
//     left = 0,
//     right = 0;
// const hash = {};
// while (left < s.length) {
//     const charLeft = s[left],
//         charRight = s[right],
//         len = hash[charLeft] || 0;
//     if (right - left - len > k || right >= s.length) {
//         hash[charLeft] && hash[charLeft]--;
//         left++;
//     } else {
//         hash[charRight] = hash[charRight] ? hash[charRight] + 1 : 1;
//         right++;
//     }
//     max = Math.max(max, len);
// }
// return Math.min(s.length, max + k);

// Optimal solution
//     let left = 0,
//         maxCount = 0;
//     const hash = {};

//     for (let right = 0; right < s.length; right++) {
//         const char = s[right];
//         hash[char] = (hash[char] || 0) + 1;
//         maxCount = Math.max(maxCount, hash[char]);
//         if (right - left + 1 - maxCount > k) hash[s[left++]]--;
//     }

//     return s.length - left;
// };
// console.log(characterReplacement("AAAA", 0));
