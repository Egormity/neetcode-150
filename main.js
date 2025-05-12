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
